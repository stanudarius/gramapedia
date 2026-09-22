import { ArrowRight, Route } from "lucide-react";
import { useGrammarProgressMap } from "@/hooks/use-grammar-progress";

import type { GrammarTrail } from "@/lib/site-data";

type GrammarTrailsProps = {
  activeTrailId: string | null;
  grammarTrails: GrammarTrail[];
  onSelect: (trailId: string | null) => void;
};

export function GrammarTrails({ activeTrailId, grammarTrails, onSelect }: GrammarTrailsProps) {
  const { progressMap } = useGrammarProgressMap();
  const completeTrail = grammarTrails.find((trail) => trail.id === "seria-completa");

  const renderProgress = (progressKey: string, total: number) => {
    const progress = progressMap[progressKey];
    const percentage = progress ? Math.round((progress.bestScore / total) * 100) : 0;

    return (
      <>
        <div
          className="grammar-trail__progress"
          role="progressbar"
          aria-label={`Progres ${progressKey}`}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={progress?.bestScore ?? 0}
        >
          <span style={{ width: `${percentage}%` }} />
        </div>
        {progress ? (
          <span className="grammar-trail__meta">
            Cel mai bun scor {progress.bestScore}/{total} · {progress.attempts} încercări
          </span>
        ) : null}
      </>
    );
  };

  return (
    <section className="grammar-trails" aria-labelledby="grammar-trails-title">
      <div className="grammar-trails__heading">
        <div>
          <span className="eyebrow eyebrow--coral">Trasee de învățare</span>
          <h3 id="grammar-trails-title">Alege un fir și urmărește-l până la capăt.</h3>
        </div>
        <Route size={24} aria-hidden="true" />
      </div>
      <div className="grammar-trails__list">
        <button
          className={`grammar-trail${activeTrailId === null ? " is-active" : ""}`}
          type="button"
          aria-pressed={activeTrailId === null}
          onClick={() => onSelect(null)}
        >
          <span className="grammar-trail__label">Seria întreagă</span>
          <strong>Toate cardurile</strong>
          {completeTrail ? renderProgress("all", completeTrail.caseIds.length) : null}
          <ArrowRight size={16} aria-hidden="true" />
        </button>
        {grammarTrails.slice(0, -1).map((trail) => (
          <button
            className={`grammar-trail${activeTrailId === trail.id ? " is-active" : ""}`}
            key={trail.id}
            type="button"
            aria-pressed={activeTrailId === trail.id}
            onClick={() => onSelect(trail.id)}
          >
            <span className="grammar-trail__label">{trail.label}</span>
            <strong>{trail.title}</strong>
            {renderProgress(trail.id, trail.caseIds.length)}
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  );
}
