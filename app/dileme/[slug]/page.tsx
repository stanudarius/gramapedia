import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, Info, X } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import {
  categoryToSlug,
  getDilemma,
  getDilemmas,
  getDilemmasByCategory,
  getRelatedDilemmas,
} from "@/lib/content";
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
  const descriptionSnippet = rawRule.length > 110 ? `${rawRule.slice(0, 110)}...` : rawRule;
  const description = `Forma corectă este «${dilemma.correct}». ${descriptionSnippet} Află regula gramaticală și exemple complete.`;
  const canonicalUrl = `${siteConfig.url}/dileme/${slug}/`;
  const pageTitle = dilemma.questionTitle;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
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
          alt: dilemma.questionTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [`${siteConfig.url}/og-image.svg`],
    },
  };
}

export default async function DilemmaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dilemma = getDilemma(slug);

  if (!dilemma) return null;

  const allDilemmas = getDilemmas();
  const currentIndex = allDilemmas.findIndex((item) => item.id === dilemma.id);
  const nextDilemma = currentIndex >= 0 && currentIndex < allDilemmas.length - 1 ? allDilemmas[currentIndex + 1] : null;
  const prevDilemma = currentIndex > 0 ? allDilemmas[currentIndex - 1] : null;
  const relatedDilemmas = getRelatedDilemmas(dilemma, 4);
  const categorySlug = categoryToSlug(dilemma.category);
  const canonicalUrl = `${siteConfig.url}/dileme/${slug}/`;
  const categoryUrl = `${siteConfig.url}/dileme/categorie/${categorySlug}/`;

  // JSON-LD Structured Data
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "QAPage",
        "@id": `${canonicalUrl}#qapage`,
        "url": canonicalUrl,
        "name": dilemma.questionTitle,
        "mainEntity": {
          "@type": "Question",
          "name": dilemma.questionTitle,
          "text": dilemma.prompt,
          "answerCount": 1,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${dilemma.rule} Forma corectă recomandată este «${dilemma.correct}».${dilemma.examples.length > 0 ? ` Exemple: ${dilemma.examples.join("; ")}` : ""}`,
            "url": canonicalUrl,
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": dilemma.questionTitle,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${dilemma.rule} Forma corectă recomandată este «${dilemma.correct}».`,
            },
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
        <div className="knowledge-breadcrumbs">
          <Link href="/dileme/"><ArrowLeft size={14} aria-hidden="true" /> Dileme</Link>
          <span>/</span>
          <Link href={`/dileme/categorie/${categorySlug}/`}>{dilemma.category}</Link>
        </div>

        <section className="knowledge-detail-header">
          <div>
            <h1>{dilemma.prompt}</h1>
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
              <div className="question-practice__options" style={{ marginBottom: "32px" }}>
                <div className="question-practice__option is-correct" style={{ cursor: "default" }}>
                  <span className="question-practice__option-label">
                    <Check size={16} aria-hidden="true" />
                  </span>
                  <div className="question-practice__option-text">
                    <strong style={{ display: "block", fontSize: "1.18rem", fontFamily: "Georgia, serif", color: "#1b5e20", marginBottom: "2px" }}>
                      {dilemma.correct}
                    </strong>
                    <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700, opacity: 0.85 }}>
                      Forma corectă recomandată
                    </span>
                  </div>
                  <Check size={20} className="question-practice__status-icon is-correct" aria-hidden="true" />
                </div>

                {dilemma.wrong ? (
                  <div className="question-practice__option is-incorrect" style={{ cursor: "default" }}>
                    <span className="question-practice__option-label">
                      <X size={16} aria-hidden="true" />
                    </span>
                    <div className="question-practice__option-text">
                      <s style={{ display: "block", fontSize: "1.18rem", fontFamily: "Georgia, serif", color: "#b71c1c", marginBottom: "2px" }}>
                        {dilemma.wrong}
                      </s>
                      <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700, opacity: 0.85 }}>
                        Formă greșită (de evitat)
                      </span>
                    </div>
                    <X size={20} className="question-practice__status-icon is-incorrect" aria-hidden="true" />
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
                      <li key={example} style={{ fontSize: "1.02rem" }}>{example}</li>
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

        {relatedDilemmas.length > 0 ? (
          <section className="knowledge-related-questions">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px" }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: 400, color: "var(--ink)", margin: 0 }}>
                Dileme corelate din «{dilemma.category}»
              </h2>
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
                  style={{ textDecoration: "none" }}
                >
                  <div className="knowledge-question-card__topline">
                    <span className="knowledge-question-card__category">{item.category}</span>
                    <span className="knowledge-question-card__number">
                      <Check size={12} style={{ display: "inline", verticalAlign: "middle", marginRight: "3px" }} />
                      Corect
                    </span>
                  </div>
                  <h3>{item.prompt}</h3>
                  <div className="knowledge-question-card__meta">
                    <span style={{ color: "var(--plum)", fontWeight: 700 }}>
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
