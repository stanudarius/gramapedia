import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import {
  categoryToSlug,
  getDilemmaCategories,
  getDilemmas,
  getDilemmasByCategory,
} from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const allDilemmas = getDilemmas();
  const title = "Toate Dilemele Gramaticale — Ghid de Exprimare Corectă";
  const description = `Ghid complet de exprimare corectă în limba română: ${allDilemmas.length} dileme frecvente rezolvate și explicate conform DOOM3. Verifică formele corecte pentru Lexicosemantică, Morfologie, Sintaxă, Ortografie și Punctuație.`;
  const canonicalUrl = `${siteConfig.url}/dileme/`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
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
          alt: "Toate Dilemele Gramaticale — Gramapedia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/og-image.svg`],
    },
  };
}

export default function DilemmasHubPage() {
  const allDilemmas = getDilemmas();
  const categories = getDilemmaCategories();
  const canonicalUrl = `${siteConfig.url}/dileme/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": "Toate Dilemele Gramaticale — Gramapedia",
        "description": `Ghid cu ${allDilemmas.length} de dileme gramaticale rezolvate și explicate conform DOOM3.`,
        "hasPart": allDilemmas.map((d) => ({
          "@type": "Question",
          "name": d.questionTitle,
          "url": `${siteConfig.url}/dileme/${d.id}/`,
        })),
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
            "item": canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="knowledge-page dilemma-hub">
      <LearningHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <div className="knowledge-shell">
        <nav className="knowledge-breadcrumbs" aria-label="Fir de navigare">
          <Link href="/"><ArrowLeft size={14} aria-hidden="true" /> Acasă</Link>
          <span>/</span>
          <span>Dileme</span>
        </nav>

        <header className="knowledge-hero">
          <div>
            <p className="knowledge-eyebrow">Ghid de exprimare corectă</p>
            <h1>Toate dilemele gramaticale</h1>
            <p className="knowledge-lede">
              {allDilemmas.length} de întrebări și dileme frecvente din limba română, explicate clar
              conform normelor academice și DOOM3, cu exemple concrete și justificări lingvistice.
            </p>
          </div>
          <div className="knowledge-hero__actions">
            <span className="knowledge-kicker">{allDilemmas.length} dileme rezolvate</span>
          </div>
        </header>

        <nav className="category-filter-nav" aria-label="Filtrare categorii">
          <span className="category-filter-chip is-active">Toate ({allDilemmas.length})</span>
          {categories.map((cat) => {
            const count = getDilemmasByCategory(cat).length;
            const slug = categoryToSlug(cat);
            return (
              <Link
                key={cat}
                href={`/dileme/categorie/${slug}/`}
                className="category-filter-chip"
              >
                {cat} ({count})
              </Link>
            );
          })}
        </nav>

        {categories.map((category) => {
          const categoryDilemmas = getDilemmasByCategory(category);
          if (categoryDilemmas.length === 0) return null;
          const slug = categoryToSlug(category);

          return (
            <section key={category} className="related-dilemmas-section" style={{ marginTop: "36px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "20px" }}>
                <h2 className="related-dilemmas-title" style={{ margin: 0 }}>
                  {category}
                </h2>
                <Link
                  href={`/dileme/categorie/${slug}/`}
                  className="knowledge-text-link"
                >
                  Vezi categoria ({categoryDilemmas.length}) <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>

              <div className="related-dilemmas-grid">
                {categoryDilemmas.map((d) => (
                  <Link
                    key={d.id}
                    href={`/dileme/${d.id}/`}
                    className="related-dilemma-card"
                  >
                    <div>
                      <span className="related-dilemma-card__category">{d.category}</span>
                      <h3 className="related-dilemma-card__title">{d.questionTitle}</h3>
                    </div>
                    <div className="related-dilemma-card__answer">
                      <Check size={16} aria-hidden="true" />
                      <span>{d.correct || d.answer}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <div className="knowledge-detail-footer" style={{ marginTop: "54px" }}>
          <Link className="knowledge-text-link" href="/">
            <ArrowLeft size={15} aria-hidden="true" /> Înapoi pe prima pagină
          </Link>
          <Link className="knowledge-text-link" href="/grile/">
            Exersează la Grile <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
