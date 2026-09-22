import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import { getDilemma, getDilemmas } from "@/lib/content";

export function generateStaticParams() {
  return getDilemmas().map((dilemma) => ({ slug: dilemma.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dilemma = getDilemma(slug);
  return {
    title: dilemma ? `Dilemă: ${dilemma.prompt}` : "Dilemă",
    description: dilemma?.answer,
    alternates: { canonical: `/dileme/${slug}/` },
  };
}

export default async function DilemmaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dilemma = getDilemma(slug);
  
  if (!dilemma) return null;

  const allDilemmas = getDilemmas();
  const currentIndex = allDilemmas.findIndex((item) => item.id === dilemma.id);
  const nextDilemma = currentIndex >= 0 && currentIndex < allDilemmas.length - 1 ? allDilemmas[currentIndex + 1] : null;

  return (
    <main className="knowledge-page dilemma-page">
      <LearningHeader />
      <div className="knowledge-shell knowledge-shell--detail">
        <div className="knowledge-breadcrumbs">
          <Link href="/#dilema"><ArrowLeft size={14} aria-hidden="true" /> Toate dilemele</Link>
          <span>/</span>
          <span>{dilemma.category}</span>
        </div>
        
        <section className="knowledge-detail-header">
          <div>
            <h1>{dilemma.prompt}</h1>
          </div>
        </section>

        <article className="grammar-card dilemma-panel dilemma-panel--standalone">
          <div className="dilemma-panel__question">
            <span className="eyebrow eyebrow--coral">{dilemma.category}</span>
            <h2>{dilemma.prompt}</h2>
            <span className="dilemma-panel__arrow" aria-hidden="true">
              <ArrowRight size={23} strokeWidth={1.5} />
            </span>
          </div>

          <div className="dilemma-panel__answer">
            <div className="answer-label">
              <Check size={16} aria-hidden="true" />
              <span>Regula, pe scurt</span>
            </div>
            <p className="answer-title">{dilemma.answer}</p>
            <p>{dilemma.rule}</p>
            <div className="example-list">
              {dilemma.examples.map((example) => (
                <p key={example}>
                  <span aria-hidden="true">/</span> {example}
                </p>
              ))}
            </div>
          </div>
        </article>

        <div className="knowledge-detail-footer">
          <Link className="knowledge-text-link" href="/#dilema"><ArrowLeft size={15} aria-hidden="true" /> Toate dilemele</Link>
          {nextDilemma ? <Link className="knowledge-text-link" href={`/dileme/${nextDilemma.id}/`}>Următoarea dilemă <ArrowRight size={15} aria-hidden="true" /></Link> : null}
        </div>
      </div>
    </main>
  );
}
