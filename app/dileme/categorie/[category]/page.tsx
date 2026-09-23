import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import {
  CATEGORY_MAP,
  categoryToSlug,
  getDilemmaCategories,
  getDilemmasByCategory,
  slugToCategory,
} from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "Lexicosemantică":
    "Claritate în vocabular: confuzii paronimice, pleonasme frecvente, utilizarea corectă a prepozițiilor și sensul precis al cuvintelor în limba română contemporană.",
  "Sintaxă":
    "Construcția corectă a enunțului: acordul subiectului cu predicatul, utilizarea pronumelui relativ «care» / «pe care», acordul adjectivului pronominal posesiv și topica propoziției.",
  "Morfologie":
    "Formele corecte ale părților de vorbire: desinențe verbale, forme de plural problematice, alternanțe fonetice, scrierea numeralelor și a pronumelor.",
  "Ortografie":
    "Normele de scriere corectă conform DOOM3: scrierea cu cratimă, despărțirea în silabe, dublarea vocalelor sau a consoanelor și greșelile de tipar uzuale.",
  "Punctuație":
    "Logica semnelor de punctuație: utilizarea virgulei la vocativ, izolarea apozițiilor și a incidentelor, virgula înainte de conjuncții și delimitarea frazei.",
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((categorySlug) => ({
    category: categorySlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const categoryName = slugToCategory(categorySlug);

  if (!categoryName) {
    return {
      title: "Categorie necunoscută — Gramapedia",
    };
  }

  const dilemmas = getDilemmasByCategory(categoryName);
  const title = `Dileme de ${categoryName} — Reguli și Exemple Corecte`;
  const description = `Ghid complet de ${categoryName.toLowerCase()}: ${dilemmas.length} dileme rezolvate și explicate pas cu pas, cu exemple autentice și reguli DOOM3.`;
  const canonicalUrl = `${siteConfig.url}/dileme/categorie/${categorySlug}/`;

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
          alt: `Dileme de ${categoryName}`,
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

export default async function CategoryHubPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const categoryName = slugToCategory(categorySlug);

  if (!categoryName) {
    notFound();
  }

  const dilemmas = getDilemmasByCategory(categoryName);
  const allCategories = getDilemmaCategories();
  const description = CATEGORY_DESCRIPTIONS[categoryName] || "Dileme și reguli gramaticale explicate clar.";
  const canonicalUrl = `${siteConfig.url}/dileme/categorie/${categorySlug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": `Dileme de ${categoryName}`,
        "description": description,
        "about": {
          "@type": "Thing",
          "name": categoryName,
        },
        "hasPart": dilemmas.map((d) => ({
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
            "item": `${siteConfig.url}/dileme/`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": categoryName,
            "item": canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="knowledge-page dilemma-category-hub">
      <LearningHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <div className="knowledge-shell">
        <nav className="knowledge-breadcrumbs" aria-label="Fir de navigare">
          <Link href="/"><ArrowLeft size={14} aria-hidden="true" /> Acasă</Link>
          <span>/</span>
          <Link href="/dileme/">Dileme</Link>
          <span>/</span>
          <span>{categoryName}</span>
        </nav>

        <header className="knowledge-hero">
          <div>
            <p className="knowledge-eyebrow">Categorie tematică</p>
            <h1>Dileme de {categoryName}</h1>
            <p className="knowledge-lede">{description}</p>
          </div>
          <div className="knowledge-hero__actions">
            <span className="knowledge-kicker">{dilemmas.length} dileme rezolvate</span>
          </div>
        </header>

        <nav className="category-filter-nav" aria-label="Filtrare pe categorii">
          <Link href="/dileme/" className="category-filter-chip">
            Toate dilemele
          </Link>
          {allCategories.map((cat) => {
            const slug = categoryToSlug(cat);
            const isActive = slug === categorySlug;
            return (
              <Link
                key={cat}
                href={`/dileme/categorie/${slug}/`}
                className={`category-filter-chip${isActive ? " is-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {cat}
              </Link>
            );
          })}
        </nav>

        <section aria-label={`Lista dilemelor de ${categoryName}`}>
          <div className="related-dilemmas-grid">
            {dilemmas.map((d) => (
              <Link
                key={d.id}
                href={`/dileme/${d.id}/`}
                className="related-dilemma-card"
              >
                <div>
                  <span className="related-dilemma-card__category">{d.category}</span>
                  <h2 className="related-dilemma-card__title">{d.questionTitle}</h2>
                </div>
                <div className="related-dilemma-card__answer">
                  <Check size={16} aria-hidden="true" />
                  <span>{d.correct || d.answer}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="knowledge-detail-footer" style={{ marginTop: "48px" }}>
          <Link className="knowledge-text-link" href="/dileme/">
            <ArrowLeft size={15} aria-hidden="true" /> Înapoi la toate dilemele
          </Link>
          <Link className="knowledge-text-link" href="/teorie/">
            Mergi la noțiunile de Teorie <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
