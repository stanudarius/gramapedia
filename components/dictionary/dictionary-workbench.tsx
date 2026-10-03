"use client";

import { useState, useEffect, useRef, useMemo, useTransition } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, BookOpen, ArrowRight, Copy, Check } from "lucide-react";
import { DictionarySearchResult } from "@/lib/dictionary/types";
import {
  fetchWordDefinitions,
  categorizeSource,
  detectVerb,
  cleanDictionaryInput,
} from "@/lib/dictionary/api";
import { POPULAR_DICTIONARY_WORDS } from "@/lib/dictionary/popular-words";
import { sanitizeDictionaryHtml } from "@/lib/dictionary/sanitize";

interface DictionaryWorkbenchProps {
  initialWord?: string;
  navigateOnSearch?: boolean;
}

export function DictionaryWorkbench({
  initialWord = "paradigmă",
  navigateOnSearch = false,
}: DictionaryWorkbenchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") || searchParams.get("cuvant") || "";

  const [query, setQuery] = useState(urlQuery || initialWord);
  const [activeWord, setActiveWord] = useState(urlQuery || initialWord);
  const [data, setData] = useState<DictionarySearchResult | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "not_found" | "error">(
    urlQuery || initialWord ? "loading" : "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const searchWord = async (rawWord: string) => {
    const cleaned = cleanDictionaryInput(rawWord);
    if (!cleaned) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setStatus("loading");
    setErrorMessage("");
    setActiveWord(cleaned);

    if (navigateOnSearch) {
      const match = POPULAR_DICTIONARY_WORDS.find(
        (p) => p.word.toLowerCase() === cleaned.toLowerCase() || p.slug === cleaned.toLowerCase()
      );
      if (match) {
        router.push(`/dictionar/${match.slug}/`);
        return;
      }
    }

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("q", cleaned);
      window.history.replaceState({}, "", url.toString());
    }

    try {
      const result = await fetchWordDefinitions(cleaned, controller.signal);
      startTransition(() => {
        if (result && result.definitions.length > 0) {
          setData(result);
          setStatus("success");
        } else {
          setData(null);
          setStatus("not_found");
        }
      });
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      startTransition(() => {
        setStatus("error");
        setErrorMessage("Nu am putut interoga dicționarul. Verifică conexiunea.");
      });
    }
  };

  useEffect(() => {
    let ignore = false;
    const target = urlQuery || initialWord;
    if (!target) return;

    const controller = new AbortController();

    fetchWordDefinitions(target, controller.signal)
      .then((result) => {
        if (ignore) return;
        startTransition(() => {
          if (result && result.definitions.length > 0) {
            setData(result);
            setStatus("success");
          } else {
            setData(null);
            setStatus("not_found");
          }
        });
      })
      .catch((err) => {
        if (ignore || (err instanceof DOMException && err.name === "AbortError")) return;
        startTransition(() => {
          setStatus("error");
          setErrorMessage("Nu am putut interoga dicționarul. Verifică conexiunea.");
        });
      });

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [urlQuery, initialWord]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchWord(query);
  };

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const handleChipClick = (word: string) => {
    setQuery(word);
    searchWord(word);
  };

  const verbInfo = useMemo(() => {
    if (!data?.definitions || !activeWord) {
      return { isVerb: false, verbInfinitive: "" };
    }
    return detectVerb(activeWord, data.definitions);
  }, [data, activeWord]);

  const definitions = useMemo(() => {
    return data?.definitions ? data.definitions.slice(0, 2) : [];
  }, [data]);

  const copyDefinition = async (id: string, html: string) => {
    try {
      const tmp = document.createElement("div");
      tmp.innerHTML = html;
      const cleanText = tmp.textContent || tmp.innerText || "";
      await navigator.clipboard.writeText(cleanText.trim());
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Ignore clipboard write failures
    }
  };

  const formatHtml = (rawHtml: string) => {
    return sanitizeDictionaryHtml(rawHtml);
  };

  return (
    <div className="dictionary-workbench">
      <form className="dictionary-search-box" onSubmit={handleSubmit}>
        <div className="dictionary-search-input-wrapper">
          <Search className="dictionary-search-icon" size={20} aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            className="dictionary-search-input"
            placeholder="Caută orice cuvânt (ex: paradigmă, sinestezie, a citi)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Cuvânt de căutat în dicționar"
            autoComplete="off"
            spellCheck="false"
          />
          {query ? (
            <button
              type="button"
              className="dictionary-clear-button"
              onClick={handleClear}
              aria-label="Șterge textul de căutare"
            >
              <X size={18} aria-hidden="true" />
            </button>
          ) : null}
        </div>
        <button type="submit" className="button button--coral dictionary-submit-button">
          Caută în dicționar
        </button>
      </form>

      <div className="dictionary-chips-wrapper" aria-label="Cuvinte recomandate pentru explorare">
        <span className="dictionary-chips-label">Exemple frecvente:</span>
        <div className="dictionary-chips-list">
          {POPULAR_DICTIONARY_WORDS.slice(0, 12).map((item) => (
            <button
              key={item.word}
              type="button"
              className={`dictionary-chip ${activeWord.toLowerCase() === item.word.toLowerCase() ? "dictionary-chip--active" : ""}`}
              onClick={() => handleChipClick(item.word)}
              title={item.hint}
            >
              {item.word}
            </button>
          ))}
        </div>
      </div>

      <div className="dictionary-results-container" aria-live="polite">
        {status === "loading" && (
          <div className="dictionary-skeleton">
            <div className="dictionary-skeleton__card" />
            <div className="dictionary-skeleton__card" />
          </div>
        )}

        {status === "error" && (
          <div className="dictionary-feedback dictionary-feedback--error">
            <div className="dictionary-feedback__icon">⚠️</div>
            <h3>Conexiunea nu a putut fi stabilită</h3>
            <p>{errorMessage}</p>
            <button
              type="button"
              className="button button--small button--plum"
              onClick={() => searchWord(activeWord)}
            >
              Reîncearcă căutarea
            </button>
          </div>
        )}

        {status === "not_found" && (
          <div className="dictionary-feedback dictionary-feedback--empty">
            <div className="dictionary-feedback__icon">📖</div>
            <h3>Nicio definiție găsită pentru «{activeWord}»</h3>
            <p>
              Nu am găsit acest cuvânt în cel mai recent DEX sau DOOM. Verifică dacă forma este scrisă
              corect cu diacritice sau încearcă forma de bază din dicționar (nominativ singular
              pentru substantive / infinitiv pentru verbe).
            </p>
          </div>
        )}

        {status === "success" && data && (
          <div className="dictionary-results-view">
            <div className="dictionary-header-meta">
              <div className="dictionary-word-badge-group">
                <h2 className="dictionary-headword">{data.word}</h2>
              </div>
            </div>

            {verbInfo.isVerb && (
              <div className="dictionary-verb-callout">
                <BookOpen className="dictionary-verb-callout__icon" size={22} aria-hidden="true" />
                <div className="dictionary-verb-callout__text">
                  <strong>«{data.word}» este un verb.</strong>
                  <p>
                    Vrei să verifici conjugarea completă la toate timpurile și modurile conform DOOM3?
                  </p>
                </div>
                <Link
                  href={`/conjugare/${encodeURIComponent(verbInfo.verbInfinitive)}/`}
                  className="button button--small button--coral dictionary-verb-callout__btn"
                >
                  Vezi conjugarea completă <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            )}

            <div className="dictionary-definitions-list">
              {definitions.map((def, idx) => {
                const isCopied = copiedId === def.id;
                const sourceCat = categorizeSource(def.sourceName);

                return (
                  <article key={def.id || idx} className="dictionary-card">
                    <header className="dictionary-card__header">
                      <div className="dictionary-card__badge-wrapper">
                        <span className="dictionary-source-badge">{def.sourceName}</span>
                        <span className={`dictionary-cat-tag dictionary-cat-tag--${sourceCat}`}>
                          {sourceCat === "dex" ? "Dicționar Explicativ" : "Normă Oficială"}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="dictionary-copy-btn"
                        onClick={() => copyDefinition(def.id, def.htmlRep)}
                        aria-label="Copiază textul definiției"
                        title={isCopied ? "Copiat în clipboard!" : "Copiază definiția"}
                      >
                        {isCopied ? (
                          <>
                            <Check size={14} aria-hidden="true" />
                            <span>Copiat</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} aria-hidden="true" />
                            <span>Copiază</span>
                          </>
                        )}
                      </button>
                    </header>

                    <div
                      className="dictionary-card__content"
                      dangerouslySetInnerHTML={{ __html: formatHtml(def.htmlRep) }}
                    />
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
