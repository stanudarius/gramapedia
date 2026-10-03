import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import { KnowledgeContent } from "@/components/knowledge-content";
import { KnowledgeQuestionCard } from "@/components/knowledge-question-card";
import { siteConfig } from "@/lib/site-config";
import { getQuestionsForNode, getReadableTheoryBody, getTheoryExcerpt, getTheoryNode, getTheoryNodes } from "@/lib/knowledge";

import { getDilemmasForTheoryNode } from "@/lib/content";

export function generateStaticParams() {
  return getTheoryNodes()
    .filter((node) => /^(CUR|SES|LES|SUP|FON|ORT|SIL|LEX|MOR|SIN)-/.test(node.id))
    .map((node) => ({ nodeId: node.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ nodeId: string }> }): Promise<Metadata> {
  const { nodeId } = await params;
  const node = getTheoryNode(nodeId);
  if (!node) {
    return { title: "Teorie" };
  }
  const excerpt = getTheoryExcerpt(node);
  let description = `Lecția de gramatică despre «${node.title}»: definiție, reguli conform DOOM3, exemple explicate și grile de antrenament pe Gramapedia.`;
  if (excerpt && excerpt.length >= 40) {
    const trimmed = excerpt.length > 140 ? `${excerpt.slice(0, 137).trimEnd()}...` : excerpt;
    description = `«${node.title}»: ${trimmed} Reguli și exemple explicate conform DOOM3.`;
  }

  const titleText = `${node.title}: Reguli și exemple | Gramapedia`;
  const canonicalUrl = `${siteConfig.url}/teorie/${nodeId}/`;

  return {
    title: { absolute: titleText },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: titleText,
      description,
      url: canonicalUrl,
      siteName: "Gramapedia",
      locale: "ro_RO",
      type: "article",
      images: [
        {
          url: `${siteConfig.url}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: node.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleText,
      description,
      images: [`${siteConfig.url}/og-image.svg`],
    },
  };
}

export default async function TheoryNodePage({ params }: { params: Promise<{ nodeId: string }> }) {
  const { nodeId } = await params;
  const node = getTheoryNode(nodeId);
  if (!node) notFound();

  const allNodes = getTheoryNodes();
  const nodeMap = new Map(allNodes.map((item) => [item.id, item]));
  const children = node.childrenIds.map((id) => nodeMap.get(id)).filter(Boolean);
  const sourceNodes = node.sourceIds.map((id) => nodeMap.get(id)).filter(Boolean);
  const relatedQuestions = getQuestionsForNode(node.id).slice(0, 8);
  const relatedDilemmas = getDilemmasForTheoryNode(node.id, 3);
  const readableBody = getReadableTheoryBody(node);
  const canonicalUrl = `${siteConfig.url}/teorie/${nodeId}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": node.title,
        "description": getTheoryExcerpt(node) || `Lecția de teorie pentru ${node.title}`,
        "url": canonicalUrl,
        "mainEntityOfPage": canonicalUrl,
        "inLanguage": "ro",
        "author": {
          "@type": "EducationalOrganization",
          "name": "Gramapedia",
          "url": siteConfig.url,
        },
        "publisher": {
          "@type": "EducationalOrganization",
          "name": "Gramapedia",
          "url": siteConfig.url,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumbs`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Acasă",
            "item": `${siteConfig.url}/`,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Teorie",
            "item": `${siteConfig.url}/teorie/`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": node.title,
            "item": canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="knowledge-page">
      <LearningHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="knowledge-shell knowledge-shell--detail">
        <div className="knowledge-breadcrumbs">
          <Link href="/teorie/"><ArrowLeft size={14} aria-hidden="true" /> Teorie</Link>
          {node.parentId && nodeMap.has(node.parentId) ? <><span>/</span><Link href={node.parentId === "GRA-ROOT" ? "/teorie/" : `/teorie/${node.parentId}/`}>{nodeMap.get(node.parentId)?.title}</Link></> : null}
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
                  <div className="knowledge-child-card__body">
                    <span className="knowledge-child-card__type">{child.type}</span>
                    <strong>{child.title}</strong>
                  </div>
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
              <Link className="knowledge-source-card knowledge-source-card--link" href={`/teorie/${source.id}/`} key={source.id}>
                <div className="knowledge-source-card__heading">
                  <h3>{source.title}</h3>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </div>
                <p>{getTheoryExcerpt(source)}</p>
              </Link>
            ) : null)}
          </section>
        ) : null}

        {relatedDilemmas.length > 0 ? (
          <section className="knowledge-related-questions" aria-label="Dileme rezolvate pe această temă">
            <div className="knowledge-section-header">
              <h2>Dileme gramaticale asociate</h2>
              <Link href="/dileme/" className="knowledge-text-link">
                Toate dilemele <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className="knowledge-question-grid">
              {relatedDilemmas.map((d) => (
                <Link key={d.id} href={`/dileme/${d.id}/`} className="knowledge-question-card knowledge-question-card--compact">
                  <div className="knowledge-question-card__topline">
                    <span className="knowledge-question-card__category">{d.category}</span>
                  </div>
                  <h3>{d.questionTitle || d.prompt}</h3>
                  <div className="knowledge-question-card__meta">
                    <span className="knowledge-correct-highlight">{d.correct || d.answer}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {relatedQuestions.length > 0 ? (
          <section className="knowledge-related-questions" aria-label="Grile de antrenament asociate">
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
