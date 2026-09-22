import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import { KnowledgeContent } from "@/components/knowledge-content";
import { KnowledgeQuestionCard } from "@/components/knowledge-question-card";
import { getQuestionsForNode, getReadableTheoryBody, getTheoryExcerpt, getTheoryNode, getTheoryNodes } from "@/lib/knowledge";

export function generateStaticParams() {
  return getTheoryNodes()
    .filter((node) => /^(CUR|SES|LES|SUP|FON|ORT|SIL|LEX|MOR|SIN)-/.test(node.id))
    .map((node) => ({ nodeId: node.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ nodeId: string }> }): Promise<Metadata> {
  const { nodeId } = await params;
  const node = getTheoryNode(nodeId);
  const description = node ? getTheoryExcerpt(node) : undefined;
  return {
    title: node?.title ?? "Teorie",
    ...(description ? { description } : {}),
    alternates: { canonical: `/teorie/${nodeId}/` },
  };
}

export default async function TheoryNodePage({ params }: { params: Promise<{ nodeId: string }> }) {
  const { nodeId } = await params;
  const node = getTheoryNode(nodeId);
  if (!node) return null;

  const allNodes = getTheoryNodes();
  const nodeMap = new Map(allNodes.map((item) => [item.id, item]));
  const children = node.childrenIds.map((id) => nodeMap.get(id)).filter(Boolean);
  const sourceNodes = node.sourceIds.map((id) => nodeMap.get(id)).filter(Boolean);
  const relatedQuestions = getQuestionsForNode(node.id).slice(0, 8);
  const readableBody = getReadableTheoryBody(node);

  return (
    <main className="knowledge-page">
      <LearningHeader />
      <div className="knowledge-shell knowledge-shell--detail">
        <div className="knowledge-breadcrumbs">
          <Link href="/teorie/"><ArrowLeft size={14} aria-hidden="true" /> Teorie</Link>
          {node.parentId && nodeMap.has(node.parentId) ? <><span>/</span><Link href={`/teorie/${node.parentId}/`}>{nodeMap.get(node.parentId)?.title}</Link></> : null}
        </div>
        <section className="knowledge-detail-header">
          <div>
            <h1>{node.title}</h1>
          </div>
        </section>

        {children.length > 0 ? (
          <section className="knowledge-children" aria-label="Conținutul nodului">
            <div className="knowledge-child-grid">
              {children.map((child) => child ? (
                <Link className="knowledge-child-card" href={`/teorie/${child.id}/`} key={child.id}>
                  <span className="knowledge-child-card__type">{child.type}</span>
                  <strong>{child.title}</strong>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              ) : null)}
            </div>
          </section>
        ) : null}

        {readableBody ? (
          <section className="knowledge-reading">
            <KnowledgeContent content={readableBody} />
          </section>
        ) : null}

        {sourceNodes.length > 0 ? (
          <section className="knowledge-sources">
            {sourceNodes.map((source) => source ? (
              <Link className="knowledge-source-card knowledge-source-card--link" href={`/teorie/${source.id}/`} key={source.title}>
                <div className="knowledge-source-card__heading">
                  <h3>{source.title}</h3>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </div>
                <p>{getTheoryExcerpt(source)}</p>
              </Link>
            ) : null)}
          </section>
        ) : null}

        {relatedQuestions.length > 0 ? (
          <section className="knowledge-related-questions">
            <div className="knowledge-question-grid">
              {relatedQuestions.map((question) => <KnowledgeQuestionCard compact key={question.id} question={question} />)}
            </div>
            <Link className="knowledge-text-link" href={`/grile/node/${node.id}/`}>Vezi toate grilele <CheckCircle2 size={15} aria-hidden="true" /></Link>
          </section>
        ) : null}

        <div className="knowledge-detail-footer">
          <Link className="knowledge-text-link" href="/teorie/"><ArrowLeft size={15} aria-hidden="true" /> Înapoi la teorie</Link>
            <Link className="knowledge-icon-action" href="/grile/" aria-label="Grile de antrenament" title="Grile de antrenament"><CheckCircle2 size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </main>
  );
}
