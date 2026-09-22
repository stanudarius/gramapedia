"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BookOpen, Search } from "lucide-react";
import type { KnowledgeQuestion } from "@/lib/knowledge";
import { KnowledgeQuestionCard } from "@/components/knowledge-question-card";

type GrileBrowserProps = {
  questions: KnowledgeQuestion[];
};

export function GrileBrowser({ questions }: GrileBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Toate");
  const categories = useMemo(() => ["Toate", ...Array.from(new Set(questions.map((question) => question.categoryLabel)))], [questions]);
  const visibleQuestions = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("ro");
    return questions.filter((question) => {
      const matchesCategory = category === "Toate" || question.categoryLabel === category;
      const searchableText = `${question.prompt} ${question.body} ${question.categoryLabel}`.toLocaleLowerCase("ro");
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [category, query, questions]);

  return (
    <>
      <div className="knowledge-browser__controls">
        <label className="knowledge-search">
          <span className="sr-only">Caută în grile</span>
          <Search size={17} aria-hidden="true" />
          <input aria-label="Caută în grile" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Caută..." />
        </label>
        <div className="knowledge-filters" aria-label="Filtrează după categorie">
          {categories.map((item) => (
            <button className={category === item ? "is-active" : ""} key={item} type="button" onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="knowledge-browser__resultbar">
        <span>{visibleQuestions.length === 1 ? "1 întrebare" : `${visibleQuestions.length} întrebări`}</span>
        <Link className="knowledge-icon-action" href="/teorie/" aria-label="Mergi la teorie" title="Mergi la teorie"><BookOpen size={17} aria-hidden="true" /></Link>
      </div>
      <div className="knowledge-question-grid">
        {visibleQuestions.map((question) => <KnowledgeQuestionCard compact key={question.id} question={question} />)}
      </div>
    </>
  );
}
