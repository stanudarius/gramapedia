import { DictionaryDefinition, DictionarySearchResult, DictionaryCategory } from "./types";

const memoryCache = new Map<string, DictionarySearchResult | null>();

export function cleanDictionaryInput(input: string): string {
  return input
    .trim()
    .replace(/^["'«„]+|["'»”]+$/g, "")
    .replace(/[.,;!?]+$/, "")
    .trim();
}

function getDexScore(sourceName: string | undefined): number {
  if (!sourceName) return -1;
  const s = sourceName.trim().toLowerCase();
  if (s.startsWith("nodex") || s.includes("dexi") || s.includes("dexonline")) {
    return -1;
  }
  if (s.includes("dex '16") || s.includes("dex 2016")) return 100;
  if (s.includes("dex '09") || s.includes("dex 2009")) return 90;
  if (s.includes("dex '98") || s.includes("dex 1998")) return 80;
  if (s.includes("dex '96") || s.includes("dex 1996")) return 70;
  if (s.includes("dex '75") || s.includes("dex 1975")) return 60;
  if (s === "dex" || s.startsWith("dex ")) return 50;
  return -1;
}

function getDoomScore(sourceName: string | undefined): number {
  if (!sourceName) return -1;
  const s = sourceName.trim().toLowerCase();
  if (s.includes("doom 3") || s.includes("doom3")) return 100;
  if (s.includes("doom 2") || s.includes("doom2")) return 80;
  if (s === "doom" || s.startsWith("doom ") || s.includes("doom '82")) return 60;
  return -1;
}

export function extractHeadword(def: DictionaryDefinition): string {
  if (def.internalRep) {
    const match = def.internalRep.match(/^@([^@]+)@/);
    if (match) {
      return match[1]
        .replace(/&#039;/g, "'")
        .replace(/'/g, "")
        .replace(/,.*$/, "")
        .replace(/~.*$/, "")
        .replace(/\(.*\)/g, "")
        .trim();
    }
  }
  if (def.htmlRep) {
    const match = def.htmlRep.match(/<b>(.*?)<\/b>/i);
    if (match) {
      return match[1]
        .replace(/<[^>]+>/g, "")
        .replace(/,.*$/, "")
        .replace(/'/g, "")
        .trim();
    }
  }
  return "";
}

export function stripDiacritics(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ș|ş/gi, "s")
    .replace(/ț|ţ/gi, "t")
    .replace(/ă|â/gi, "a")
    .replace(/î/gi, "i")
    .toLowerCase()
    .trim();
}

export function filterLatestDexAndDoom(
  definitions: DictionaryDefinition[],
  queryWord?: string
): DictionaryDefinition[] {
  const normQuery = queryWord ? stripDiacritics(queryWord) : "";
  let latestDex: DictionaryDefinition | null = null;
  let latestDoom: DictionaryDefinition | null = null;
  let bestDexScore = -1;
  let bestDoomScore = -1;

  for (const def of definitions) {
    const headword = extractHeadword(def);
    const normHeadword = stripDiacritics(headword);
    const matchBonus = normQuery && normHeadword === normQuery ? 1000 : 0;

    const baseDex = getDexScore(def.sourceName);
    if (baseDex > 0) {
      const totalDex = matchBonus + baseDex;
      if (totalDex > bestDexScore) {
        bestDexScore = totalDex;
        latestDex = def;
      }
    }

    const baseDoom = getDoomScore(def.sourceName);
    if (baseDoom > 0) {
      const totalDoom = matchBonus + baseDoom;
      if (totalDoom > bestDoomScore) {
        bestDoomScore = totalDoom;
        latestDoom = def;
      }
    }
  }

  const result: DictionaryDefinition[] = [];
  if (latestDex) result.push(latestDex);
  if (latestDoom) result.push(latestDoom);
  return result.slice(0, 2);
}

export function categorizeSource(sourceName: string | undefined): DictionaryCategory {
  const s = (sourceName || "").toLowerCase();
  if (s.includes("doom")) {
    return "doom";
  }
  return "dex";
}

export function detectVerb(
  word: string,
  definitions: DictionaryDefinition[]
): { isVerb: boolean; verbInfinitive: string } {
  const normalized = word.trim().toLowerCase();

  if (normalized.startsWith("a ") && normalized.length > 3) {
    return { isVerb: true, verbInfinitive: normalized.slice(2).trim() };
  }

  for (const def of definitions) {
    const html = def.htmlRep || "";
    const rep = (def.internalRep || "").toLowerCase();

    if (
      html.includes('data-bs-content="substantiv') ||
      html.includes('data-bs-content="feminin"') ||
      html.includes('data-bs-content="masculin"') ||
      html.includes('data-bs-content="neutru"') ||
      />s\.\s*[fmn]\.</i.test(html) ||
      rep.includes("#s. f.#") ||
      rep.includes("#s. m.#") ||
      rep.includes("#s. n.#") ||
      rep.includes("#s.#")
    ) {
      return { isVerb: false, verbInfinitive: normalized };
    }

    if (
      html.includes('data-bs-content="adjectiv') ||
      html.includes('data-bs-content="adverb') ||
      />adj\.</i.test(html) ||
      />adv\.</i.test(html) ||
      rep.includes("#adj.#") ||
      rep.includes("#adv.#")
    ) {
      return { isVerb: false, verbInfinitive: normalized };
    }

    if (
      html.includes('data-bs-content="verb') ||
      />vb\.</i.test(html) ||
      />vb\.\s/i.test(html) ||
      rep.includes("#vb.") ||
      rep.includes("#v.#")
    ) {
      return { isVerb: true, verbInfinitive: normalized };
    }
  }

  return { isVerb: false, verbInfinitive: normalized };
}

export async function fetchWordDefinitions(
  word: string,
  signal?: AbortSignal
): Promise<DictionarySearchResult | null> {
  const query = cleanDictionaryInput(word);
  if (!query) return null;

  const cacheKey = query.toLowerCase();
  if (memoryCache.has(cacheKey)) {
    return memoryCache.get(cacheKey)!;
  }

  try {
    const url = `https://dexonline.ro/definitie/${encodeURIComponent(query)}/json`;
    const response = await fetch(url, {
      signal,
      headers: {
        Accept: "application/json",
      },
    });

    let rawData: { word?: string; definitions?: DictionaryDefinition[] } | null = null;
    if (response.ok) {
      rawData = await response.json();
    }

    if (!rawData || !Array.isArray(rawData.definitions) || rawData.definitions.length === 0) {
      try {
        const htmlRes = await fetch(
          `https://dexonline.ro/definitie/${encodeURIComponent(query)}`,
          { signal }
        );
        if (htmlRes.ok) {
          const html = await htmlRes.text();
          const match = html.match(/href="\/intrare\/([^"\/]+)\/\d+"/);
          if (match) {
            const suggestedWord = decodeURIComponent(match[1]);
            const suggRes = await fetch(
              `https://dexonline.ro/definitie/${encodeURIComponent(suggestedWord)}/json`,
              { signal, headers: { Accept: "application/json" } }
            );
            if (suggRes.ok) {
              rawData = await suggRes.json();
            }
          }
        }
      } catch {
        // Ignore suggestion fallback errors
      }
    }

    if (rawData && Array.isArray(rawData.definitions)) {
      const filtered = filterLatestDexAndDoom(rawData.definitions, query);

      if (filtered.length > 0) {
        const matchedHeadword = extractHeadword(filtered[0]);
        const displayWord =
          matchedHeadword && stripDiacritics(matchedHeadword) === stripDiacritics(query)
            ? matchedHeadword.toLowerCase()
            : rawData.word || query;

        const result: DictionarySearchResult = {
          type: "searchResults",
          word: displayWord,
          definitions: filtered,
        };
        memoryCache.set(cacheKey, result);
        return result;
      }
    }

    memoryCache.set(cacheKey, null);
    return null;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error;
    }
    throw error;
  }
}
