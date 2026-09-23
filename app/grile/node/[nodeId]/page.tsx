import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import { GrileBrowser } from "@/components/grile-browser";
import { getQuestionsForNode, getTheoryNode, getTheoryNodes } from "@/lib/knowledge";

export function generateStaticParams() {
  return getTheoryNodes().map((node) => ({ nodeId: node.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ nodeId: string }> }): Promise<Metadata> {
  const { nodeId } = await params;
  const node = getTheoryNode(nodeId);
  return { title: node ? `Grile · ${node.title}` : "Grile" };
}

export default async function NodeQuestionsPage({ params }: { params: Promise<{ nodeId: string }> }) {
  const { nodeId } = await params;
  const node = getTheoryNode(nodeId);
  if (!node) return null;

  const questions = getQuestionsForNode(nodeId);

  return (
    <main className="knowledge-page">
      <LearningHeader />
      <div className="knowledge-shell">
        <div className="knowledge-breadcrumbs">
          <Link href="/grile/"><ArrowLeft size={14} aria-hidden="true" /> Grile</Link>
          <span>/</span>
          <Link href={node.id === "GRA-ROOT" ? "/teorie/" : `/teorie/${node.id}/`}><BookOpen size={14} aria-hidden="true" /> {node.title}</Link>
        </div>
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
