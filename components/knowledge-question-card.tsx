import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { KnowledgeQuestion } from "@/lib/knowledge";

type KnowledgeQuestionCardProps = {
  question: KnowledgeQuestion;
  compact?: boolean;
};

export function KnowledgeQuestionCard({ question, compact = false }: KnowledgeQuestionCardProps) {
  const cleanPrompt = question.prompt.replace(/\n+/g, " ").trim();

  return (
    <article className={`knowledge-question-card${compact ? " knowledge-question-card--compact" : ""}`}>
      <Link
        className="knowledge-question-card__overlay-link"
        href={`/grile/${question.id}/`}
        aria-label={`Deschide întrebarea ${question.number}`}
      />
      <div className="knowledge-question-card__topline">
        <span className="knowledge-question-card__category">{question.categoryLabel}</span>
        <span className="knowledge-question-card__number">#{question.number}</span>
      </div>
      <h3>{cleanPrompt || `Întrebarea ${question.number}`}</h3>
      {!compact ? (
        <div className="knowledge-question-card__meta">
          <span>Răspuns: {question.answerKey.toUpperCase()}</span>
          {question.options.length > 0 ? <span>{question.options.length} variante</span> : null}
        </div>
      ) : null}
      <span className="knowledge-icon-action" aria-hidden="true">
        <ArrowUpRight size={17} aria-hidden="true" />
      </span>
    </article>
  );
}
