"use client";

import { useDeferredValue, useId, useMemo, useState } from "react";
import {
  Check,
  Copy,
  Search,
  Sparkles,
  ToggleLeft,
  ToggleRight,
  X,
} from "lucide-react";
import { conjugate, removeDiacritics } from "@/lib/conjugation/engine";
import { POPULAR_VERBS } from "@/lib/conjugation/popular-verbs";
import type { PersonForms, VerbConjugation } from "@/lib/conjugation/types";

const PRONOUNS = ["eu", "tu", "el / ea", "noi", "voi", "ei / ele"] as const;
const PERSON_LABELS = ["1sg", "2sg", "3sg", "1pl", "2pl", "3pl"] as const;

type MoodFilter = "all" | "indicativ" | "conjunctiv" | "conditional" | "imperativ" | "nepersonale";

interface ConjugationWorkbenchProps {
  initialVerb?: string;
}

export function ConjugationWorkbench({ initialVerb = "fi" }: ConjugationWorkbenchProps) {
  const [searchTerm, setSearchTerm] = useState(initialVerb);
  const deferredSearch = useDeferredValue(searchTerm);
  const [activeMood, setActiveMood] = useState<MoodFilter>("all");
  const [showPronouns, setShowPronouns] = useState(true);
  const [copied, setCopied] = useState(false);
  const inputId = useId();

  // Active conjugation paradigm computed with deferred value so typing is never blocked
  const conjugation: VerbConjugation = useMemo(() => {
    const query = deferredSearch.trim() || initialVerb || "fi";
    return conjugate(query);
  }, [deferredSearch, initialVerb]);

  // Copy full paradigm to clipboard
  const handleCopy = async () => {
    if (!conjugation) return;

    const lines: string[] = [
      `GRAMAPEDIA — CONJUGARE: ${conjugation.verb.toUpperCase()} (Grupa ${conjugation.groupRoman})`,
      "----------------------------------------",
      "",
      "INDICATIV PREZENT:",
      ...conjugation.indicativ.prezent.map((f, i) => `  ${PRONOUNS[i]} ${f}`),
      "",
      "INDICATIV IMPERFECT:",
      ...conjugation.indicativ.imperfect.map((f, i) => `  ${PRONOUNS[i]} ${f}`),
      "",
      "INDICATIV PERFECT COMPUS:",
      ...conjugation.indicativ.perfectCompus.map((f, i) => `  ${PRONOUNS[i]} ${f}`),
      "",
      "INDICATIV MAI MULT CA PERFECT:",
      ...conjugation.indicativ.maiMultCaPerfect.map((f, i) => `  ${PRONOUNS[i]} ${f}`),
      "",
      "INDICATIV VIITOR STANDARD:",
      ...conjugation.indicativ.viitorStandard.map((f, i) => `  ${PRONOUNS[i]} ${f}`),
      "",
      "CONJUNCTIV PREZENT:",
      ...conjugation.conjunctiv.prezent.map((f, i) => `  ${PRONOUNS[i]} ${f}`),
      "",
      "CONDIȚIONAL-OPTATIV PREZENT:",
      ...conjugation.conditional.prezent.map((f, i) => `  ${PRONOUNS[i]} ${f}`),
      "",
      "IMPERATIV:",
      `  Afirmativ: ${conjugation.imperativ.afirmativ.s2} (2sg) / ${conjugation.imperativ.afirmativ.p2} (2pl)`,
      `  Negativ: ${conjugation.imperativ.negativ.s2} (2sg) / ${conjugation.imperativ.negativ.p2} (2pl)`,
      "",
      "FORME NEPERSONALE:",
      `  Infinitiv lung: ${conjugation.formeNepersonale.infinitivLung}`,
      `  Participiu: ${conjugation.formeNepersonale.participiu}`,
      `  Gerunziu: ${conjugation.formeNepersonale.gerunziu}`,
      `  Supin: ${conjugation.formeNepersonale.supin}`,
      "",
      "Generat cu Gramapedia (https://gramapedia.ro/conjugare/)",
    ];

    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const renderTenseCard = (
    title: string,
    forms: PersonForms,
    badge?: string,
    prefix = ""
  ) => {
    return (
      <div className="conjugation-card" key={title}>
        <div className="conjugation-card__header">
          <h4 className="conjugation-card__title">{title}</h4>
          {badge ? <span className="conjugation-card__badge">{badge}</span> : null}
        </div>
        <ul className="conjugation-card__list" aria-label={`Formele timpului ${title}`}>
          {forms.map((form, idx) => (
            <li className="conjugation-card__row" key={`${title}-${PERSON_LABELS[idx]}`}>
              <span className="conjugation-card__person">{PERSON_LABELS[idx]}</span>
              {showPronouns ? (
                <span className="conjugation-card__pronoun">{PRONOUNS[idx]}</span>
              ) : null}
              <strong className="conjugation-card__form">
                {prefix}
                {form}
              </strong>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const showIndicativ = activeMood === "all" || activeMood === "indicativ";
  const showConjunctiv = activeMood === "all" || activeMood === "conjunctiv";
  const showConditional = activeMood === "all" || activeMood === "conditional";
  const showImperativ = activeMood === "all" || activeMood === "imperativ";
  const showNepersonale = activeMood === "all" || activeMood === "nepersonale";

  return (
    <div className="conjugation-workbench">
      {/* Search Bar & Primary Controls */}
      <div className="conjugation-search-panel">
        <div className="conjugation-input-wrapper">
          <Search className="conjugation-input-icon" size={20} aria-hidden="true" />
          <input
            id={inputId}
            className="conjugation-input"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tastează orice verb (ex: a fi, așază, fuseserăm, a teleporta)..."
            aria-label="Caută sau introdu un verb pentru conjugare"
            autoComplete="off"
            spellCheck="false"
          />
          {searchTerm ? (
            <button
              className="conjugation-clear-btn"
              type="button"
              onClick={() => setSearchTerm("")}
              aria-label="Șterge căutarea"
            >
              <X size={16} aria-hidden="true" />
            </button>
          ) : null}
        </div>

        {/* Quick popular suggestions */}
        <div className="conjugation-suggestions" aria-label="Sugestii rapide de verbe">
          <span className="conjugation-suggestions__label">Sugestii rapide:</span>
          <div className="conjugation-suggestions__list">
            {POPULAR_VERBS.slice(0, 10).map((pv) => {
              const isActive = removeDiacritics(conjugation.infinitive) === pv.slug;
              return (
                <button
                  key={pv.slug}
                  type="button"
                  className={`conjugation-chip${isActive ? " is-active" : ""}`}
                  onClick={() => setSearchTerm(pv.verb)}
                >
                  {pv.verb}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Verb Hero Header */}
      <div className="conjugation-hero">
        <div className="conjugation-hero__main">
          <div className="conjugation-hero__eyebrow">
            <span className="eyebrow eyebrow--coral">
              Grupa {conjugation.groupRoman} ({conjugation.isIrregular ? "Neregulat / Alternanțe" : "Regulat"})
            </span>
          </div>
          <h2 className="conjugation-hero__title">{conjugation.verb}</h2>
          <p className="conjugation-hero__subtitle">
            Infinitiv: <em>{conjugation.infinitive}</em> • Participiu:{" "}
            <em>{conjugation.formeNepersonale.participiu}</em> • Gerunziu:{" "}
            <em>{conjugation.formeNepersonale.gerunziu}</em>
          </p>
        </div>

        <div className="conjugation-hero__actions">
          <button
            type="button"
            className="conjugation-action-btn"
            onClick={() => setShowPronouns(!showPronouns)}
            aria-pressed={showPronouns}
            title={showPronouns ? "Ascunde pronumele" : "Arată pronumele"}
          >
            {showPronouns ? <ToggleRight size={18} /> : <ToggleLeft size={18} />}
            <span>{showPronouns ? "Cu pronume" : "Fără pronume"}</span>
          </button>

          <button
            type="button"
            className={`conjugation-action-btn${copied ? " is-copied" : ""}`}
            onClick={handleCopy}
            title="Copiază întreaga paradigmă"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? "Copiat în clipboard!" : "Copiază conjugarea"}</span>
          </button>
        </div>
      </div>

      {/* DOOM3 Special Warning Box (if applicable) */}
      {conjugation.notes && conjugation.notes.length > 0 ? (
        <div className="conjugation-doom-box" role="alert">
          <div className="conjugation-doom-box__header">
            <Sparkles size={18} className="conjugation-doom-box__icon" aria-hidden="true" />
            <h3 className="conjugation-doom-box__title">Capcane DOOM3 & Atenționări Ortografice</h3>
          </div>
          <div className="conjugation-doom-box__content">
            {conjugation.notes.map((note) => (
              <div className="conjugation-doom-item" key={note.rule}>
                <div className="conjugation-doom-item__comparison">
                  <span className="badge badge--correct">
                    <span className="badge__label">Corect:</span>{" "}
                    <strong className="badge__value">{note.correct}</strong>
                  </span>
                  <span className="badge badge--incorrect">
                    <span className="badge__label">Greșit frecvent:</span>{" "}
                    <del className="badge__value">{note.incorrect}</del>
                  </span>
                </div>
                <p className="conjugation-doom-item__desc">{note.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Mood Filters */}
      <div className="conjugation-filters" aria-label="Filtrează modurile verbale">
        {(
          [
            { id: "all", label: "Toate modurile" },
            { id: "indicativ", label: "Indicativ" },
            { id: "conjunctiv", label: "Conjunctiv" },
            { id: "conditional", label: "Condițional-Optativ" },
            { id: "imperativ", label: "Imperativ" },
            { id: "nepersonale", label: "Forme nepersonale" },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            type="button"
            aria-pressed={activeMood === tab.id}
            className={`category-filter-chip${activeMood === tab.id ? " is-active" : ""}`}
            onClick={() => setActiveMood(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Conjugation Tables / Cards Grid */}
      <div className="conjugation-sections">
        {/* INDICATIV */}
        {showIndicativ ? (
          <section className="conjugation-section" aria-labelledby="sec-indicativ">
            <div className="conjugation-section__heading">
              <h3 id="sec-indicativ">Modul Indicativ</h3>
              <span className="conjugation-section__count">8 timpuri</span>
            </div>
            <div className="conjugation-grid">
              {renderTenseCard("Prezent", conjugation.indicativ.prezent, "Uzual")}
              {renderTenseCard("Imperfect", conjugation.indicativ.imperfect)}
              {renderTenseCard("Perfect Compus", conjugation.indicativ.perfectCompus, "Trecut")}
              {renderTenseCard("Perfect Simplu", conjugation.indicativ.perfectSimplu, "Literar")}
              {renderTenseCard("Mai mult ca perfect", conjugation.indicativ.maiMultCaPerfect)}
              {renderTenseCard("Viitor Standard (I)", conjugation.indicativ.viitorStandard, "Viitor")}
              {renderTenseCard("Viitor Popular", conjugation.indicativ.viitorPopular, "Colocvial")}
              {renderTenseCard("Viitor Anterior", conjugation.indicativ.viitorAnterior)}
            </div>
          </section>
        ) : null}

        {/* CONJUNCTIV */}
        {showConjunctiv ? (
          <section className="conjugation-section" aria-labelledby="sec-conjunctiv">
            <div className="conjugation-section__heading">
              <h3 id="sec-conjunctiv">Modul Conjunctiv</h3>
              <span className="conjugation-section__count">2 timpuri</span>
            </div>
            <div className="conjugation-grid">
              {renderTenseCard("Conjunctiv Prezent", conjugation.conjunctiv.prezent)}
              {renderTenseCard("Conjunctiv Perfect", conjugation.conjunctiv.perfect)}
            </div>
          </section>
        ) : null}

        {/* CONDIȚIONAL */}
        {showConditional ? (
          <section className="conjugation-section" aria-labelledby="sec-conditional">
            <div className="conjugation-section__heading">
              <h3 id="sec-conditional">Modul Condițional-Optativ</h3>
              <span className="conjugation-section__count">2 timpuri</span>
            </div>
            <div className="conjugation-grid">
              {renderTenseCard("Condițional Prezent", conjugation.conditional.prezent)}
              {renderTenseCard("Condițional Perfect", conjugation.conditional.perfect)}
            </div>
          </section>
        ) : null}

        {/* IMPERATIV */}
        {showImperativ ? (
          <section className="conjugation-section" aria-labelledby="sec-imperativ">
            <div className="conjugation-section__heading">
              <h3 id="sec-imperativ">Modul Imperativ</h3>
              <span className="conjugation-section__count">Comenzi & Îndemnuri</span>
            </div>
            <div className="conjugation-grid conjugation-grid--halves">
              <div className="conjugation-card">
                <div className="conjugation-card__header">
                  <h4 className="conjugation-card__title">Imperativ Afirmativ</h4>
                  <span className="conjugation-card__badge">Comandă directă</span>
                </div>
                <ul className="conjugation-card__list">
                  <li className="conjugation-card__row">
                    <span className="conjugation-card__person">2sg (tu)</span>
                    <strong className="conjugation-card__form">
                      {conjugation.imperativ.afirmativ.s2}!
                    </strong>
                  </li>
                  <li className="conjugation-card__row">
                    <span className="conjugation-card__person">2pl (voi)</span>
                    <strong className="conjugation-card__form">
                      {conjugation.imperativ.afirmativ.p2}!
                    </strong>
                  </li>
                </ul>
              </div>

              <div className="conjugation-card">
                <div className="conjugation-card__header">
                  <h4 className="conjugation-card__title">Imperativ Negativ</h4>
                  <span className="conjugation-card__badge">Interdicție</span>
                </div>
                <ul className="conjugation-card__list">
                  <li className="conjugation-card__row">
                    <span className="conjugation-card__person">2sg (tu)</span>
                    <strong className="conjugation-card__form">
                      {conjugation.imperativ.negativ.s2}!
                    </strong>
                  </li>
                  <li className="conjugation-card__row">
                    <span className="conjugation-card__person">2pl (voi)</span>
                    <strong className="conjugation-card__form">
                      {conjugation.imperativ.negativ.p2}!
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        ) : null}

        {/* FORME NEPERSONALE */}
        {showNepersonale ? (
          <section className="conjugation-section" aria-labelledby="sec-nepersonale">
            <div className="conjugation-section__heading">
              <h3 id="sec-nepersonale">Forme Nepersonale</h3>
              <span className="conjugation-section__count">Moduri nepredicative</span>
            </div>
            <div className="conjugation-nonfinite-grid">
              <div className="conjugation-nonfinite-card">
                <span className="conjugation-nonfinite-card__label">Infinitiv Prezent</span>
                <strong className="conjugation-nonfinite-card__value">
                  {conjugation.formeNepersonale.infinitivPrezent}
                </strong>
              </div>
              <div className="conjugation-nonfinite-card">
                <span className="conjugation-nonfinite-card__label">Infinitiv Lung</span>
                <strong className="conjugation-nonfinite-card__value">
                  {conjugation.formeNepersonale.infinitivLung}
                </strong>
              </div>
              <div className="conjugation-nonfinite-card">
                <span className="conjugation-nonfinite-card__label">Participiu</span>
                <strong className="conjugation-nonfinite-card__value">
                  {conjugation.formeNepersonale.participiu}
                </strong>
              </div>
              <div className="conjugation-nonfinite-card">
                <span className="conjugation-nonfinite-card__label">Gerunziu</span>
                <strong className="conjugation-nonfinite-card__value">
                  {conjugation.formeNepersonale.gerunziu}
                </strong>
              </div>
              <div className="conjugation-nonfinite-card">
                <span className="conjugation-nonfinite-card__label">Supin</span>
                <strong className="conjugation-nonfinite-card__value">
                  {conjugation.formeNepersonale.supin}
                </strong>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}

export const ConjugatorWorkbench = ConjugationWorkbench;
