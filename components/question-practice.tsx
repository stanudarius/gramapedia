"use client";

import { useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import type { KnowledgeQuestion } from "@/lib/knowledge";

type QuestionPracticeProps = {
  question: KnowledgeQuestion;
};

export function QuestionPractice({ question }: QuestionPracticeProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const isAnswered = selected !== null;
  const isCorrect = selected === question.answerKey;

  return (
    <section className="question-practice" aria-labelledby="question-practice-title">
      <div className="question-practice__topline">
        <span className="eyebrow eyebrow--coral">Grilă de antrenament · {question.categoryLabel}</span>
        <span className="question-practice__badge">Întrebarea {question.number}</span>
      </div>
      <h2 id="question-practice-title" className="question-practice__prompt">
        {question.prompt || `Întrebarea ${question.number}`}
      </h2>
      {question.options.length > 0 ? (
        <div className="question-practice__options" role="radiogroup" aria-label="Variante de răspuns">
          {question.options.map((option) => {
            const isTargetCorrect = isAnswered && option.label === question.answerKey;
            const isUserWrong = isAnswered && option.label === selected && !isCorrect;
            const state = isTargetCorrect ? " is-correct" : isUserWrong ? " is-incorrect" : "";

            return (
              <button
                className={`question-practice__option${state}`}
                key={option.label}
                type="button"
                role="radio"
                aria-checked={selected === option.label}
                onClick={() => setSelected(option.label)}
                disabled={isAnswered}
              >
                <span className="question-practice__option-label">{option.label.toUpperCase()}</span>
                <span className="question-practice__option-text">{option.text}</span>
                {isTargetCorrect ? (
                  <Check size={18} className="question-practice__status-icon is-correct" aria-hidden="true" />
                ) : null}
                {isUserWrong ? (
                  <X size={18} className="question-practice__status-icon is-incorrect" aria-hidden="true" />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : (
        <p className="knowledge-muted">Variantele sunt păstrate în formatul extras din material.</p>
      )}
      {isAnswered ? (
        <div className={`question-practice__feedback${isCorrect ? " is-correct" : " is-incorrect"}`} role="status">
          <div className="question-practice__feedback-info">
            <strong>
              {isCorrect
                ? "Răspuns corect!"
                : `Răspuns incorect. Varianta corectă este ${question.answerKey.toUpperCase()}.`}
            </strong>
            <p>
              {isCorrect
                ? "Răspunsul tău este în deplină concordanță cu normele academice (DOOM / DEX)."
                : `Ai selectat varianta ${selected?.toUpperCase()}. Verifică noțiunile teoretice conexe pentru fixarea normei.`}
            </p>
          </div>
          <button
            className="question-practice__retry-button"
            type="button"
            onClick={() => setSelected(null)}
          >
            <RotateCcw size={14} aria-hidden="true" />
            <span>Încearcă din nou</span>
          </button>
        </div>
      ) : null}
    </section>
  );
}
