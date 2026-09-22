import type { Metadata } from "next";
import { LearningHeader } from "@/components/learning-header";
import { GrileBrowser } from "@/components/grile-browser";
import { getQuestions } from "@/lib/knowledge";

export const metadata: Metadata = {
  title: "Grile",
  description: "451 de grile de antrenament pentru gramatică română, organizate pe teme: fonetică, morfologie, sintaxă și vocabular. Exersează după normă DOOM2 / DEX.",
  alternates: { canonical: "/grile/" },
};

export default function GrilePage() {
  const questions = getQuestions();

  return (
    <main className="knowledge-page">
      <LearningHeader />
      <div className="knowledge-shell">
        <section className="knowledge-hero knowledge-hero--compact">
          <div>
            <h1>Grile pentru ce ai învățat.</h1>
            <p className="knowledge-lede">Caută după temă, categorie sau cuvânt-cheie și deschide întrebarea împreună cu legătura ei către teorie.</p>
          </div>
          <div className="knowledge-stat-card">
            <strong>{questions.length}</strong>
            <span>întrebări disponibile</span>
          </div>
        </section>
        <GrileBrowser questions={questions} />
      </div>
    </main>
  );
}
