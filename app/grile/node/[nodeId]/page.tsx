import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { notFound } from "next/navigation";
import { LearningHeader } from "@/components/learning-header";
import { GrileBrowser } from "@/components/grile-browser";
import { getQuestionsForNode, getTheoryNode, getTheoryNodes } from "@/lib/knowledge";

export function generateStaticParams() {
  return getTheoryNodes().map((node) => ({ nodeId: node.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ nodeId: string }> }): Promise<Metadata> {
  const { nodeId } = await params;
  const node = getTheoryNode(nodeId);
  const questions = getQuestionsForNode(nodeId);
  const hasQuestions = questions.length > 0;

  return {
    title: node ? `Grile · ${node.title} (${questions.length} grile)` : "Grile",
    description: node
      ? hasQuestions
        ? `Exersează ${questions.length} grile de antrenament pentru tema «${node.title}». Verifică răspunsurile și aprofundează teoria conform DOOM3.`
        : `Grile de antrenament pentru tema «${node.title}».`
      : "Grile de gramatică Gramapedia.",
    alternates: { canonical: `/grile/node/${nodeId}/` },
    robots: hasQuestions
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export default async function NodeQuestionsPage({ params }: { params: Promise<{ nodeId: string }> }) {
  const { nodeId } = await params;
  const node = getTheoryNode(nodeId);
  if (!node) notFound();

  const questions = getQuestionsForNode(nodeId);

  return (
    <main className="knowledge-page">
      <LearningHeader />
      <div className="knowledge-shell">
        <nav className="knowledge-breadcrumbs" aria-label="Fir de navigare">
          <Link href="/grile/"><ArrowLeft size={14} aria-hidden="true" /> Grile</Link>
          <span>/</span>
          <Link href={node.id === "GRA-ROOT" ? "/teorie/" : `/teorie/${node.id}/`}><BookOpen size={14} aria-hidden="true" /> {node.title}</Link>
        </nav>
        <section className="knowledge-hero knowledge-hero--compact">
          <div>
            <h1>{node.title}</h1>
          </div>
          <div className="knowledge-stat-card">
            <strong>{questions.length}</strong>
            <span>grile</span>
          </div>
        </section>
        <GrileBrowser questions={questions} />
      </div>
    </main>
  );
}
