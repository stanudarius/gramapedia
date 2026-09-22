"use client";

import { useState } from "react";
import { ArrowRight, Check, RotateCcw, X } from "lucide-react";
import type { GrammarCase } from "@/lib/site-data";
import { useGrammarProgress } from "@/hooks/use-grammar-progress";

type GrammarQuizProps = {
  cases: GrammarCase[];
  progressKey: string;
  onExit: () => void;
};

const formatCounter = (value: number) => value.toString().padStart(2, "0");

export function GrammarQuiz({ cases, progressKey, onExit }: GrammarQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [mistakeIds, setMistakeIds] = useState<string[]>([]);
  const { progress, recordAttempt } = useGrammarProgress(progressKey);
  const activeCases = isReviewMode ? cases.filter((item) => mistakeIds.includes(item.id)) : cases;
  const currentCase = activeCases[currentIndex];

  if (!currentCase) {
    return (
      <div className="grammar-quiz grammar-quiz--summary" aria-labelledby="quiz-empty-title">
        <span className="eyebrow eyebrow--coral">Mod de exersare</span>
        <h3 id="quiz-empty-title">Nu există carduri pentru acest traseu.</h3>
        <p>Alege un alt traseu sau revino la toate cardurile.</p>
        <button className="grammar-quiz__button grammar-quiz__button--primary" type="button" onClick={onExit}>
          Vezi cardurile
          <ArrowRight size={15} aria-hidden="true" />
        </button>
      </div>
    );
  }

  const selectChoice = (choice: string) => {
    if (selectedChoice) return;

    setSelectedChoice(choice);
    if (choice === currentCase.correctChoice) {
      setScore((currentScore) => currentScore + 1);
    } else if (!isReviewMode) {
      setMistakeIds((currentIds) => currentIds.includes(currentCase.id) ? currentIds : [...currentIds, currentCase.id]);
    }
  };

  const resetQuestion = () => {
    setSelectedChoice(null);
  };

  const goToNextQuestion = () => {
    if (!selectedChoice) return;

    if (currentIndex === activeCases.length - 1) {
      const finalScore = score + (selectedChoice === currentCase.correctChoice ? 1 : 0);
      setScore(finalScore);
      if (!isReviewMode) recordAttempt(finalScore, cases.length);
      setIsComplete(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
    resetQuestion();
  };

  const restart = () => {
    setCurrentIndex(0);
    resetQuestion();
    setScore(0);
    setIsComplete(false);
    setIsReviewMode(false);
    setMistakeIds([]);
  };

  const startReview = () => {
    setCurrentIndex(0);
    setSelectedChoice(null);
    setScore(0);
    setIsComplete(false);
    setIsReviewMode(true);
  };

  if (isComplete) {
    return (
      <div className="grammar-quiz grammar-quiz--summary" aria-labelledby="quiz-summary-title">
        <span className="eyebrow eyebrow--coral">{isReviewMode ? "Revizuirea s-a încheiat" : "Seria s-a încheiat"}</span>
        <h3 id="quiz-summary-title">Ai obținut {score} din {activeCases.length} răspunsuri corecte.</h3>
        <p>{isReviewMode ? "Ai parcurs cardurile pe care merita să le revezi." : "Revino la carduri pentru a reciti regulile sau reia exercițiul pentru o nouă încercare."}</p>
        {!isReviewMode && progress ? (
          <p className="grammar-quiz__best">
            Cel mai bun scor: {Math.max(progress.bestScore, score)} / {cases.length} · încercări: {progress.attempts}
          </p>
        ) : null}
        <div className="grammar-quiz__summary-actions">
          <button className="grammar-quiz__button grammar-quiz__button--primary" type="button" onClick={restart}>
            <RotateCcw size={15} aria-hidden="true" />
            {isReviewMode ? "Începe un test nou" : "Reia exercițiul"}
          </button>
          {!isReviewMode && mistakeIds.length > 0 ? (
            <button className="grammar-quiz__button" type="button" onClick={startReview}>
              Revizuiește {mistakeIds.length} greșeli
            </button>
          ) : null}
          <button className="grammar-quiz__button" type="button" onClick={onExit}>
            Vezi cardurile
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = selectedChoice === currentCase.correctChoice;

  return (
    <div className="grammar-quiz" aria-labelledby="quiz-question-title">
      <div className="grammar-quiz__topline">
        <span className="eyebrow eyebrow--coral">Mod de exersare · {currentCase.category}</span>
        <span className="grammar-quiz__counter">
          {formatCounter(currentIndex + 1)} / {formatCounter(activeCases.length)}
        </span>
      </div>

      <h3 id="quiz-question-title">{currentCase.prompt}</h3>

      <div className="grammar-quiz__choices" role="radiogroup" aria-label="Alege răspunsul">
        {currentCase.choices.map((choice, index) => {
          const isSelected = selectedChoice === choice;
          const isAnswer = choice === currentCase.correctChoice;
          const choiceClass = [
            "grammar-quiz__choice",
            isSelected ? "is-selected" : "",
            selectedChoice && isAnswer ? "is-correct" : "",
            isSelected && !isCorrect ? "is-incorrect" : "",
          ].filter(Boolean).join(" ");

          return (
            <button
              className={choiceClass}
              key={choice}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => selectChoice(choice)}
            >
              <span className="grammar-quiz__choice-index">{formatCounter(index + 1)}</span>
              <span>{choice}</span>
              {selectedChoice && isAnswer ? <Check size={17} aria-hidden="true" /> : null}
              {isSelected && !isCorrect ? <X size={17} aria-hidden="true" /> : null}
            </button>
          );
        })}
      </div>

      {selectedChoice ? (
        <div className={`grammar-quiz__feedback${isCorrect ? " is-correct" : " is-incorrect"}`} role="status">
          <strong>{isCorrect ? "Corect." : `Răspunsul corect este «${currentCase.correctChoice}».`}</strong>
          <p>{currentCase.rule}</p>
        </div>
      ) : (
        <p className="grammar-quiz__hint">Alege o variantă pentru a vedea explicația.</p>
      )}

      <div className="grammar-quiz__actions">
        <button className="grammar-quiz__button" type="button" onClick={onExit}>
          Înapoi la carduri
        </button>
        <button
          className="grammar-quiz__button grammar-quiz__button--primary"
          type="button"
          disabled={!selectedChoice}
          onClick={goToNextQuestion}
        >
          {currentIndex === activeCases.length - 1 ? "Vezi rezultatul" : "Următoarea"}
          <ArrowRight size={15} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
