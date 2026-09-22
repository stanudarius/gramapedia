import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, PenLine } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import { getTheoryNodes, getTheoryUnits } from "@/lib/knowledge";

export const metadata: Metadata = {
  title: "Teorie",
  description: "Programa de gramatică Gramapedia: fonetică, ortografie, morfologie, sintaxă și vocabular, structurate în unități, sesiuni și lecții după normă DOOM2.",
  alternates: { canonical: "/teorie/" },
};

export default function TheoryPage() {
  const nodes = getTheoryNodes();
  const units = getTheoryUnits();
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));

  return (
    <main className="knowledge-page">
      <LearningHeader />
      <div className="knowledge-shell">
        <section className="knowledge-hero">
          <div>
            <h1>Învață regula. Urmărește legătura.</h1>
            <p className="knowledge-lede">
              Programa este așezată pe unități, sesiuni și lecții, iar fiecare lecție poate duce mai departe către concepte, exemple și grile.
            </p>
          </div>
          <div className="knowledge-hero__actions">
            <Link className="knowledge-icon-action knowledge-icon-action--large" href="/grile/" aria-label="Grile de antrenament" title="Grile de antrenament">
              <PenLine size={19} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="knowledge-unit-grid" aria-label="Unități de teorie">
          {units.map((unit) => {
            const sessions = unit.childrenIds.map((id) => nodeMap.get(id)).filter(Boolean);
            return (
              <article className="knowledge-unit-card" key={unit.id}>
                <div className="knowledge-unit-card__index">{unit.id.replace("CUR-", "")}</div>
                <h2>{unit.title}</h2>
                <div className="knowledge-unit-card__sessions">
                  {sessions.map((session) => session ? (
                    <Link className="knowledge-session-link" href={`/teorie/${session.id}/`} key={session.id}>
                      <span>{session.title}</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  ) : null)}
                </div>
                <Link className="knowledge-icon-action" href={`/teorie/${unit.id}/`} aria-label={`Deschide ${unit.title}`} title="Deschide unitatea">
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </section>

        <section className="knowledge-callout">
          <BookOpen size={23} aria-hidden="true" />
          <div>
            <h2>De la lecție la întrebare</h2>
            <p>Fiecare temă poate deveni un traseu: citești explicația, urmărești exemplele și verifici ce ai înțeles prin grile.</p>
          </div>
          <Link className="knowledge-text-link" href="/grile/">Vezi grilele de antrenament <ArrowRight size={15} aria-hidden="true" /></Link>
        </section>
      </div>
    </main>
  );
}
