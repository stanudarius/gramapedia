import type { Metadata } from "next";
import { LearningHeader } from "@/components/learning-header";
import { GrileBrowser } from "@/components/grile-browser";
import { getQuestions } from "@/lib/knowledge";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Grile de Gramatică Română — Teste și Exerciții Rezolvate | Gramapedia",
  },
  description:
    "Peste 450 de grile de antrenament pentru gramatica limbii române: fonetică, morfologie, sintaxă și vocabular conform normelor academice actuale (DOOM3 / DEX), cu verificare imediată.",
  alternates: { canonical: `${siteConfig.url}/grile/` },
  openGraph: {
    title: "Grile de Gramatică Română — Teste și Exerciții Rezolvate | Gramapedia",
    description:
      "Bancă interactivă de grile de gramatică română: exersează întrebări pe categorii, verifică variantele corecte și consolidează noțiunile de teorie.",
    url: `${siteConfig.url}/grile/`,
    siteName: "Gramapedia",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Grile de Gramatică Română — Gramapedia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grile de Gramatică Română — Teste și Exerciții Rezolvate | Gramapedia",
    description:
      "Exersează sute de grile de gramatică română cu explicații și verificare imediată pe Gramapedia.",
    images: [`${siteConfig.url}/og-image.svg`],
  },
};

export default function GrilePage() {
  const questions = getQuestions();
  const canonicalUrl = `${siteConfig.url}/grile/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#collection`,
        "url": canonicalUrl,
        "name": "Grile de Gramatică Română — Bancă de Exerciții",
        "description": `Peste ${questions.length} de grile de gramatică română rezolvate și explicate conform DOOM3.`,
        "inLanguage": "ro",
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
            "name": "Grile",
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
      <div className="knowledge-shell">
        <section className="knowledge-hero knowledge-hero--compact">
          <div>
            <p className="knowledge-eyebrow">Exerciții interactive · Autoverificare</p>
            <h1>Grile de gramatică română și teste de antrenament</h1>
            <p className="knowledge-lede">
              Caută după temă, categorie sau noțiune gramaticală. Deschide fiecare întrebare pentru a verifica răspunsul corect și legătura directă către noțiunea de teorie.
            </p>
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

