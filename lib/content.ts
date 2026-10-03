import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { ContestEdition, GrammarCase } from '@/lib/site-data';

const contentDirectory = path.join(process.cwd(), 'content');
const dilemmasDirectory = path.join(contentDirectory, 'dilemmas');
const competitionsDirectory = path.join(contentDirectory, 'competitions');

function cleanTerm(str: string): string {
  if (!str) return '';
  return str.replace(/^[«"]|[»"]$/g, '').replace(/\.$/, '').trim();
}

let dilemmasCache: GrammarCase[] | null = null;

export function getDilemmas(): GrammarCase[] {
  if (process.env.NODE_ENV === 'production' && dilemmasCache) return dilemmasCache;
  if (!fs.existsSync(dilemmasDirectory)) return [];

  const fileNames = fs.readdirSync(dilemmasDirectory);
  const dilemmas = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(dilemmasDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data, content } = matter(fileContents);
      const correct = cleanTerm(data.correct || data.correct_choice || data.short_rule || '');
      const wrongChoice = (data.choices || []).find((c: string) => cleanTerm(c).toLowerCase() !== correct.toLowerCase());
      const wrong = cleanTerm(data.wrong || wrongChoice || '');

      const datePublished = (data.date_published || data.date || data.reviewed_at)
        ? new Date(data.date_published || data.date || data.reviewed_at).toISOString()
        : '2025-01-15T00:00:00Z';
      const upvoteCount = typeof data.upvotes === 'number'
        ? data.upvotes
        : (typeof data.upvote_count === 'number' ? data.upvote_count : 12);
      const reviewedBy = data.reviewed_by ? String(data.reviewed_by) : (data.author ? String(data.author) : 'Prof. Coordonator Gramapedia');
      const reviewedAt = data.reviewed_at ? String(data.reviewed_at) : '2025-01-15';

      return {
        id,
        category: data.category || 'Morfologie',
        prompt: data.prompt || '',
        answer: data.short_rule || correct,
        rule: content.trim(),
        examples: data.examples || [],
        choices: data.choices || [],
        correctChoice: data.correct_choice || correct,
        wrong,
        correct,
        questionTitle: data.question_title || data.prompt || '',
        seoTitle: data.seo_title || data.meta_title || undefined,
        relatedIds: data.related_ids || [],
        datePublished,
        upvoteCount,
        reviewedBy,
        reviewedAt,
      };
    })
    .sort((a, b) => a.id.localeCompare(b.id, 'ro'));

  if (process.env.NODE_ENV === 'production') {
    dilemmasCache = dilemmas;
  }
  return dilemmas;
}

export function getDilemma(id: string): GrammarCase | undefined {
  return getDilemmas().find(d => d.id === id);
}

export const CATEGORY_MAP: Record<string, string> = {
  "lexicosemantica": "Lexicosemantică",
  "sintaxa": "Sintaxă",
  "morfologie": "Morfologie",
  "ortografie": "Ortografie",
  "punctuatie": "Punctuație",
};

const REVERSE_CATEGORY_MAP: Record<string, string> = {
  "Lexicosemantică": "lexicosemantica",
  "Sintaxă": "sintaxa",
  "Morfologie": "morfologie",
  "Ortografie": "ortografie",
  "Punctuație": "punctuatie",
};

export function categoryToSlug(category: string): string {
  return REVERSE_CATEGORY_MAP[category] || category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-");
}

export function slugToCategory(slug: string): string | undefined {
  return CATEGORY_MAP[slug];
}

export function getDilemmaCategories(): string[] {
  return ["Lexicosemantică", "Sintaxă", "Morfologie", "Ortografie", "Punctuație"];
}

export function getDilemmasByCategory(category: string): GrammarCase[] {
  return getDilemmas().filter(d => d.category.toLowerCase() === category.toLowerCase());
}

export function getRelatedDilemmas(dilemma: GrammarCase, limit = 4): GrammarCase[] {
  const all = getDilemmas();
  const allMap = new Map(all.map(d => [d.id, d]));

  const direct = (dilemma.relatedIds || [])
    .map(id => allMap.get(id))
    .filter((d): d is GrammarCase => d !== undefined && d.id !== dilemma.id);

  if (direct.length >= limit) {
    return direct.slice(0, limit);
  }

  // Add same-category dilemmas
  const sameCategory = all.filter(
    d => d.id !== dilemma.id && d.category === dilemma.category && !direct.some(item => item.id === d.id)
  );

  return [...direct, ...sameCategory].slice(0, limit);
}

export function getCompetitions(): ContestEdition[] {
  if (!fs.existsSync(competitionsDirectory)) return [];

  const fileNames = fs.readdirSync(competitionsDirectory);
  const competitions = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(competitionsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data } = matter(fileContents);

      return {
        edition: data.edition,
        year: data.year,
        date: data.date,
        poster: data.poster,
        posterAlt: data.posterAlt,
        subjectUrl: data.subjectUrl,
        rubricUrl: data.rubricUrl,
      };
    });

  return competitions.sort((a, b) => parseInt(String(a.year ?? "0"), 10) - parseInt(String(b.year ?? "0"), 10));
}

function getTheoryCategoryForNode(nodeId: string): string | null {
  if (
    nodeId.startsWith("FON-") ||
    nodeId.startsWith("ORT-") ||
    nodeId.startsWith("SIL-") ||
    nodeId === "CUR-01" ||
    nodeId === "CUR-02" ||
    nodeId === "SES-S1" ||
    nodeId === "SES-S2"
  ) {
    return "Ortografie";
  }
  if (
    nodeId.startsWith("LEX-") ||
    nodeId === "CUR-03" ||
    nodeId === "SES-S3" ||
    nodeId === "SES-S4" ||
    nodeId.startsWith("LES-S3-") ||
    nodeId.startsWith("LES-S4-")
  ) {
    return "Lexicosemantică";
  }
  if (
    nodeId.startsWith("MOR-") ||
    nodeId === "CUR-04" ||
    nodeId === "CUR-05" ||
    /^SES-S(5|6|7|8|9|10|11|12|13|14|15|16|17)/.test(nodeId)
  ) {
    return "Morfologie";
  }
  if (
    nodeId.startsWith("SIN-") ||
    nodeId === "CUR-06" ||
    nodeId === "CUR-07" ||
    /^SES-S(18|19|20|21|22|23|24)/.test(nodeId)
  ) {
    return "Sintaxă";
  }
  return null;
}

export function getDilemmasForTheoryNode(nodeId: string, limit = 4): GrammarCase[] {
  const category = getTheoryCategoryForNode(nodeId);
  if (!category) return [];
  const allInCategory = getDilemmasByCategory(category);

  const lowerNode = nodeId.toLowerCase();
  if (lowerNode.includes("verb") || nodeId === "MOR-006") {
    const verbDilemmas = allInCategory.filter((d) =>
      ["sa-fii", "creeaza", "concentreaza", "dilema-s-a-bazat-pe"].includes(d.id)
    );
    if (verbDilemmas.length > 0) return verbDilemmas.slice(0, limit);
  }
  if (lowerNode.includes("num") || nodeId === "MOR-001") {
    const numDilemmas = allInCategory.filter((d) =>
      ["cincizeci-si-una", "patru-sute", "dilema-doi-suspecti"].includes(d.id)
    );
    if (numDilemmas.length > 0) return numDilemmas.slice(0, limit);
  }
  if (nodeId === "LES-S3-07" || nodeId === "LEX-001") {
    const lexDilemmas = allInCategory.filter((d) =>
      ["artificiu", "abuza-de", "dilema-adoptata", "dilema-monopol-exclusiv"].includes(d.id)
    );
    if (lexDilemmas.length > 0) return lexDilemmas.slice(0, limit);
  }

  return allInCategory.slice(0, limit);
}

export function getTheoryNodeIdForDilemma(dilemma: GrammarCase): string {
  if (dilemma.id === "virgula-dar" || dilemma.id === "dilema-ci-nu-dar" || dilemma.id === "vocativ") {
    return "LES-S4-01";
  }
  if (
    dilemma.id === "al-carui" ||
    dilemma.id.startsWith("dilema-al-carui") ||
    dilemma.id.startsWith("dilema-a-carei") ||
    dilemma.id.startsWith("dilema-ai-carui") ||
    dilemma.id.startsWith("dilema-ale-carui")
  ) {
    return "MOR-002";
  }
  if (dilemma.id === "cincizeci-si-una" || dilemma.id === "patru-sute" || dilemma.id === "dilema-doi-suspecti") {
    return "MOR-001";
  }
  if (dilemma.id === "sa-fii" || dilemma.id === "creeaza" || dilemma.id === "concentreaza") {
    return "MOR-006";
  }
  if (dilemma.id === "artificiu" || dilemma.id === "serviciu") {
    return "MOR-005";
  }
  if (dilemma.id === "pe-care" || dilemma.id === "subiect-predicat") {
    return "SIN-001";
  }
  if (dilemma.id === "niciun" || dilemma.id === "intr-adevar" || dilemma.id === "maximum") {
    return "ORT-001";
  }

  switch (dilemma.category) {
    case "Punctuație":
      return "LES-S4-01";
    case "Ortografie":
      return "ORT-001";
    case "Morfologie":
      return "MOR-005";
    case "Sintaxă":
      return "SIN-001";
    case "Lexicosemantică":
      return "LEX-001";
    default:
      return "CUR-01";
  }
}

