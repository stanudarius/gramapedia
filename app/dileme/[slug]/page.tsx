import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, Info, X } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import {
  categoryToSlug,
  getDilemma,
  getDilemmas,
  getDilemmasByCategory,
  getRelatedDilemmas,
  getTheoryNodeIdForDilemma,
} from "@/lib/content";
import { getTheoryNode } from "@/lib/knowledge";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return getDilemmas().map((dilemma) => ({ slug: dilemma.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dilemma = getDilemma(slug);

  if (!dilemma) {
    return {
      title: "Dilemă — Gramapedia",
    };
  }

  const rawRule = dilemma.rule.replace(/\s+/g, " ").trim();
  const lead = `Forma corectă este «${dilemma.correct}».`;
  const tail = "Regula și exemple explicate conform DOOM3 pe Gramapedia.";
  const maxSnippetLen = 155 - lead.length - tail.length - 2;
  const descriptionSnippet =
    rawRule.length > maxSnippetLen ? `${rawRule.slice(0, Math.max(30, maxSnippetLen - 3)).trimEnd()}...` : rawRule;
  const description = `${lead} ${descriptionSnippet} ${tail}`;
  const canonicalUrl = `${siteConfig.url}/dileme/${slug}/`;

  let titleString = dilemma.seoTitle;
  if (!titleString) {
    const cleanTitle = dilemma.questionTitle
      .replace(/\s*\|\s*Gramapedia.*$/i, "")
      .replace(/\s*—\s*Gramapedia.*$/i, "")
      .trim();
    titleString = `${cleanTitle} | Gramapedia`;
  }
  const metaTitle = { absolute: titleString };
  const shareTitle = titleString;

  return {
    title: metaTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: shareTitle,
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
          alt: shareTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [`${siteConfig.url}/og-image.svg`],
    },
  };
}

export default async function DilemmaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dilemma = getDilemma(slug);

  if (!dilemma) notFound();

  const allDilemmas = getDilemmas();
  const currentIndex = allDilemmas.findIndex((item) => item.id === dilemma.id);
  const nextDilemma = currentIndex >= 0 && currentIndex < allDilemmas.length - 1 ? allDilemmas[currentIndex + 1] : null;
  const prevDilemma = currentIndex > 0 ? allDilemmas[currentIndex - 1] : null;
  const relatedDilemmas = getRelatedDilemmas(dilemma, 4);
  const categorySlug = categoryToSlug(dilemma.category);
  const canonicalUrl = `${siteConfig.url}/dileme/${slug}/`;
  const categoryUrl = `${siteConfig.url}/dileme/categorie/${categorySlug}/`;

  const theoryNodeId = getTheoryNodeIdForDilemma(dilemma);
  const theoryNode = theoryNodeId ? getTheoryNode(theoryNodeId) : null;

  const datePublished = dilemma.datePublished || "2024-01-01T00:00:00Z";
  const authorEntity = dilemma.reviewedBy
    ? {
        "@type": "Person",
        "name": dilemma.reviewedBy,
        "url": `${siteConfig.url}/#despre`,
        "worksFor": {
          "@type": "EducationalOrganization",
          "name": "Gramapedia",
          "url": `${siteConfig.url}/`,
        },
      }
    : {
        "@type": "EducationalOrganization",
        "name": "Gramapedia",
        "url": `${siteConfig.url}/`,
      };

  // JSON-LD Structured Data: QAPage + BreadcrumbList (avoid duplicate conflicting FAQPage)
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "QAPage",
        "@id": `${canonicalUrl}#qapage`,
        "url": canonicalUrl,
        "name": dilemma.seoTitle || dilemma.questionTitle,
        "inLanguage": "ro",
        "mainEntity": {
          "@type": "Question",
          "name": dilemma.questionTitle,
          "text": dilemma.prompt,
          "url": canonicalUrl,
          "datePublished": datePublished,
          "upvoteCount": dilemma.upvoteCount ?? 1,
          "author": {
            "@type": "EducationalOrganization",
            "name": "Gramapedia",
            "url": siteConfig.url,
          },
          "answerCount": 1,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${dilemma.rule} Forma corectă recomandată este «${dilemma.correct}».${dilemma.examples.length > 0 ? ` Exemple: ${dilemma.examples.join("; ")}` : ""}`,
            "datePublished": datePublished,
            "url": canonicalUrl,
            "upvoteCount": dilemma.upvoteCount ?? 1,
            "author": authorEntity,
          },
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
            "name": "Dileme",
            "item": `${siteConfig.url}/dileme/`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": dilemma.category,
            "item": categoryUrl,
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": dilemma.correct,
            "item": canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="knowledge-page dilemma-page">
      <LearningHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData).replace(/</g, "\\u003c") }}
      />

      <div className="knowledge-shell knowledge-shell--detail">
        <nav className="knowledge-breadcrumbs" aria-label="Fir de navigare">
          <Link href="/dileme/"><ArrowLeft size={14} aria-hidden="true" /> Dileme</Link>
          <span>/</span>
          <Link href={`/dileme/categorie/${categorySlug}/`}>{dilemma.category}</Link>
        </nav>

        <section className="knowledge-detail-header">
          <div>
            <h1>{dilemma.questionTitle || dilemma.prompt}</h1>
          </div>
          <Link
            className="knowledge-icon-action knowledge-icon-action--large"
            href={`/dileme/categorie/${categorySlug}/`}
            aria-label={`Vezi toate dilemele din categoria ${dilemma.category}`}
            title={`Vezi toate dilemele din categoria ${dilemma.category}`}
          >
            <BookOpen size={18} aria-hidden="true" />
          </Link>
        </section>

        <section className="knowledge-reading">
          <div className="knowledge-content">
            <div className="knowledge-prose">
              <div className="dilemma-verdict">
                <div className="dilemma-verdict-card dilemma-verdict-card--correct">
                  <span className="dilemma-verdict-card__icon" aria-hidden="true">
                    <Check size={18} />
                  </span>
                  <div className="dilemma-verdict-card__content">
                    <strong className="dilemma-verdict-card__title">{dilemma.correct}</strong>
                    <span className="dilemma-verdict-card__label">Forma corectă recomandată</span>
                  </div>
                </div>

                {dilemma.wrong ? (
                  <div className="dilemma-verdict-card dilemma-verdict-card--wrong">
                    <span className="dilemma-verdict-card__icon" aria-hidden="true">
                      <X size={18} />
                    </span>
                    <div className="dilemma-verdict-card__content">
                      <span className="dilemma-verdict-card__title">{dilemma.wrong}</span>
                      <span className="dilemma-verdict-card__label">Formă greșită (de evitat)</span>
                    </div>
                  </div>
                ) : null}
              </div>

              <h3>Regula explicată</h3>
              <p>{dilemma.rule}</p>

              {dilemma.examples && dilemma.examples.length > 0 ? (
                <>
                  <h3>Exemple în context</h3>
                  <ul>
                    {dilemma.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </>
              ) : null}

              <div className="knowledge-alert">
                <div className="knowledge-alert__icon">
                  <Info size={18} aria-hidden="true" />
                </div>
                <div className="knowledge-alert__content">
                  <p>
                    Conform normelor academice actuale (DOOM3), cunoașterea și aplicarea acestei reguli elimină ezitările frecvente din vorbire și redactare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
          <section className="knowledge-related-questions">
            <div className="knowledge-section-header">
              <h2>Dileme corelate din «{dilemma.category}»</h2>
              <Link href={`/dileme/categorie/${categorySlug}/`} className="knowledge-text-link">
                Vezi categoria ({getDilemmasByCategory(dilemma.category).length}) <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className="knowledge-question-grid">
              {relatedDilemmas.map((item) => (
                <Link
                  key={item.id}
                  href={`/dileme/${item.id}/`}
                  className="knowledge-question-card knowledge-question-card--compact"
                >
                  <div className="knowledge-question-card__topline">
                    <span className="knowledge-question-card__category">{item.category}</span>
                    <span className="knowledge-question-card__number">
                      <Check size={12} aria-hidden="true" /> Corect
                    </span>
                  </div>
                  <h3>{item.questionTitle || item.prompt}</h3>
                  <div className="knowledge-question-card__meta">
                    <span className="knowledge-correct-highlight">
                      {item.correct || item.answer}
                    </span>
                  </div>
                  <span className="knowledge-icon-action" aria-hidden="true">
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <div className="knowledge-detail-footer">
          {prevDilemma ? (
            <Link className="knowledge-text-link" href={`/dileme/${prevDilemma.id}/`}>
              <ArrowLeft size={15} aria-hidden="true" /> Dilema anterioară
            </Link>
          ) : (
            <Link className="knowledge-text-link" href="/dileme/">
              <ArrowLeft size={15} aria-hidden="true" /> Catalog dileme
            </Link>
          )}

          <Link className="knowledge-text-link knowledge-text-link--center" href="/dileme/">
            Dilema {currentIndex + 1} din {allDilemmas.length}
          </Link>

          {nextDilemma ? (
            <Link className="knowledge-text-link" href={`/dileme/${nextDilemma.id}/`}>
              Următoarea dilemă <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ) : (
            <Link className="knowledge-text-link" href="/dileme/">
              Final catalog <ArrowRight size={15} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
