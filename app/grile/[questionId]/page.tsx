import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import { QuestionPractice } from "@/components/question-practice";
import { siteConfig } from "@/lib/site-config";
import { getQuestion, getQuestions, getTheoryNode, type KnowledgeQuestion, type TheoryNode } from "@/lib/knowledge";
import { getDilemmasForTheoryNode } from "@/lib/content";

function getQuestionSubject(question: KnowledgeQuestion): string {
  const quoted = question.prompt.match(/[«"']([^»"']{2,45})[»"']/);
  if (quoted) {
    if (/^a\s+[a-zăâîșț]+/i.test(quoted[1])) {
      return `Verbul «${quoted[1]}»`;
    }
    return `«${quoted[1]}»`;
  }
  const clean = question.prompt.replace(/\s+/g, " ").replace(/[:.]$/, "").trim();
  if (clean.length <= 50) return clean;
  return `${clean.slice(0, 47).trimEnd()}...`;
}

function getTheoryNodeForQuestion(question: KnowledgeQuestion): TheoryNode | null {
  const directNodeId = question.source?.match(/(FON|ORT|SIL|LEX|MOR|SIN)-\d+/)?.[0];
  if (directNodeId) {
    const node = getTheoryNode(directNodeId);
    if (node) return node;
  }
  for (const relId of question.relatedIds) {
    const node = getTheoryNode(relId);
    if (node) return node;
  }
  const categoryToNodeMap: Record<string, string> = {
    "GRI-FON": "FON-001",
    "GRI-ORT": "ORT-001",
    "GRI-VOC": "LEX-001",
    "GRI-NUM": "MOR-001",
    "GRI-PRON": "MOR-002",
    "GRI-ART": "MOR-003",
    "GRI-ADJ": "MOR-004",
    "GRI-SUBST": "MOR-005",
    "GRI-VERB": "MOR-006",
    "GRI-ADV": "MOR-007",
    "GRI-CONJ": "MOR-008",
    "GRI-PREP": "MOR-009",
    "GRI-INT": "MOR-010",
    "GRI-SINT": "SIN-001",
  };
  const mappedId = categoryToNodeMap[question.categoryId];
  if (mappedId) {
    return getTheoryNode(mappedId);
  }
  return null;
}

export function generateStaticParams() {
  return getQuestions().map((question) => ({ questionId: question.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ questionId: string }> }): Promise<Metadata> {
  const { questionId } = await params;
  const question = getQuestion(questionId);
  if (!question) {
    return { title: "Grilă — Gramapedia" };
  }

  const subject = getQuestionSubject(question);
  const titleText = `Grila #${question.number}: ${subject} — ${question.categoryLabel} | Gramapedia`;
  const promptClean = question.prompt ? question.prompt.replace(/\s+/g, " ").trim() : "";
  const promptSnippet = promptClean.length > 115 ? `${promptClean.slice(0, 112).trimEnd()}...` : promptClean;
  const description = `Rezolvă grila #${question.number} de gramatică (${question.categoryLabel}): «${promptSnippet}». Verifică răspunsul corect conform normelor DOOM3 pe Gramapedia.`;
  const canonicalUrl = `${siteConfig.url}/grile/${questionId}/`;

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
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: `Grila #${question.number} — Gramapedia`,
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

export default async function QuestionPage({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = await params;
  const question = getQuestion(questionId);
  if (!question) notFound();

  const canonicalUrl = `${siteConfig.url}/grile/${questionId}/`;
  const acceptedOption = question.options.find((o) => o.label.toLowerCase() === question.answerKey.toLowerCase());
  const subject = getQuestionSubject(question);
  const theoryNode = getTheoryNodeForQuestion(question);
  const relatedDilemmas = theoryNode ? getDilemmasForTheoryNode(theoryNode.id, 2) : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Quiz",
        "@id": `${canonicalUrl}#quiz`,
        "name": `Grila #${question.number}: ${subject} — ${question.categoryLabel}`,
        "description": question.prompt || `Întrebarea numărul ${question.number} din banca de grile Gramapedia`,
        "educationalLevel": "Intermediate",
        "inLanguage": "ro",
        "publisher": {
          "@type": "EducationalOrganization",
          "name": "Gramapedia",
          "url": siteConfig.url,
        },
        "hasPart": [
          {
            "@type": "Question",
            "name": question.prompt || `Întrebarea ${question.number}`,
            "text": question.prompt,
            "url": canonicalUrl,
            "author": {
              "@type": "EducationalOrganization",
              "name": "Gramapedia",
              "url": `${siteConfig.url}/`,
            },
            "suggestedAnswer": question.options.map((opt) => ({
              "@type": "Answer",
              "text": opt.text,
              "position": opt.label,
            })),
            ...(acceptedOption
              ? {
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": acceptedOption.text,
                    "url": canonicalUrl,
                    "datePublished": "2024-01-15T00:00:00Z",
                    "upvoteCount": 1,
                    "author": {
                      "@type": "EducationalOrganization",
                      "name": "Gramapedia",
                      "url": `${siteConfig.url}/`,
                    },
                  },
                }
              : {}),
          },
        ],
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
            "name": "Grile",
            "item": `${siteConfig.url}/grile/`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `Grila #${question.number}`,
            "item": canonicalUrl,
          },
        ],
      },
    ],
  };

  const allQuestions = getQuestions();
  const prevQuestion = allQuestions.find((item) => item.number === question.number - 1);
  const nextQuestion = allQuestions.find((item) => item.number === question.number + 1);

  return (
    <main className="knowledge-page">
      <LearningHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="knowledge-shell knowledge-shell--detail">
        <nav className="knowledge-breadcrumbs" aria-label="Fir de navigare">
          <Link href="/grile/"><ArrowLeft size={14} aria-hidden="true" /> Grile</Link>
          <span>/</span>
          <span>{question.categoryLabel}</span>
        </nav>
        <section className="knowledge-detail-header">
          <div>
            <p className="knowledge-eyebrow">{question.categoryLabel} · Grila #{question.number}</p>
            <h1>Grila #{question.number} — {subject}</h1>
            {question.prompt ? (
              <p className="knowledge-lede">{question.prompt}</p>
            ) : null}
          </div>
          <Link className="knowledge-icon-action knowledge-icon-action--large" href="/teorie/" aria-label="Mergi la teorie" title="Mergi la teorie"><BookOpen size={18} aria-hidden="true" /></Link>
        </section>
        <QuestionPractice question={question} />
        {theoryNode ? (
          <Link className="theory-callout-card" href={`/teorie/${theoryNode.id}/`}>
            <div className="theory-callout-card__main">
              <div className="theory-callout-card__icon">
                <BookOpen size={20} aria-hidden="true" />
              </div>
              <div className="theory-callout-card__content">
                <span className="theory-callout-card__eyebrow">Lecție de teorie asociată</span>
                <strong className="theory-callout-card__title">{theoryNode.title}</strong>
              </div>
            </div>
            <div className="theory-callout-card__action">
              <span>Citește teoria</span>
              <ArrowRight size={16} aria-hidden="true" />
            </div>
          </Link>
        ) : null}
        {relatedDilemmas.length > 0 ? (
          <section className="knowledge-related-questions" aria-label="Dileme rezolvate corelate">
            <div className="knowledge-section-header">
              <h2>Dileme de exprimare corelate</h2>
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
        <div className="knowledge-detail-footer">
          {prevQuestion ? (
            <Link className="knowledge-text-link" href={`/grile/${prevQuestion.id}/`}>
              <ArrowLeft size={15} aria-hidden="true" /> Întrebarea {prevQuestion.number}
            </Link>
          ) : (
            <Link className="knowledge-text-link" href="/grile/">
              <ArrowLeft size={15} aria-hidden="true" /> Toate grilele
            </Link>
          )}
          <Link className="knowledge-text-link knowledge-text-link--center" href="/grile/">
            Index grile ({question.number} / {allQuestions.length})
          </Link>
          {nextQuestion ? (
            <Link className="knowledge-text-link" href={`/grile/${nextQuestion.id}/`}>
              Întrebarea {nextQuestion.number} <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ) : (
            <Link className="knowledge-text-link" href="/grile/">
              Final bancă <ArrowRight size={15} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
