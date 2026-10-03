import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, PenLine } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import { getTheoryNodes, getTheoryUnits } from "@/lib/knowledge";
import { siteConfig } from "@/lib/site-config";
import { getDilemmaCategories, categoryToSlug } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: "Teorie Gramatică Română — Programă, Lecții și Reguli | Gramapedia",
  },
  description:
    "Programa completă de teorie la gramatica limbii române: fonetică, ortografie, morfologie, sintaxă și vocabular conform normelor academice actuale (DOOM3), explicate clar și cu exemple.",
  alternates: { canonical: `${siteConfig.url}/teorie/` },
  openGraph: {
    title: "Teorie Gramatică Română — Programă, Lecții și Reguli | Gramapedia",
    description:
      "Programa completă de teorie la gramatica limbii române: fonetică, ortografie, morfologie, sintaxă și vocabular conform normelor actuale (DOOM3), explicate pas cu pas.",
    url: `${siteConfig.url}/teorie/`,
    siteName: "Gramapedia",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Teorie Gramatică Română — Gramapedia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teorie Gramatică Română — Programă, Lecții și Reguli | Gramapedia",
    description:
      "Programa completă de teorie la gramatica limbii române: fonetică, ortografie, morfologie, sintaxă și vocabular conform normelor actuale (DOOM3).",
    images: [`${siteConfig.url}/og-image.svg`],
  },
};

export default function TheoryPage() {
  const nodes = getTheoryNodes();
  const units = getTheoryUnits();
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));
  const categories = getDilemmaCategories();
  const canonicalUrl = `${siteConfig.url}/teorie/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#collection`,
        "url": canonicalUrl,
        "name": "Teorie Gramatică Română — Programă și Lecții",
        "description": "Programa completă de teorie la gramatica limbii române structurată pe unități, sesiuni și lecții conform DOOM3.",
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
            "name": "Teorie",
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
        <section className="knowledge-hero">
          <div>
            <p className="knowledge-eyebrow">Programă educațională · DOOM3</p>
            <h1>Teorie și lecții de gramatică română</h1>
            <p className="knowledge-lede">
              Programa este așezată pe unități, sesiuni și lecții: citești explicația detaliată, înțelegi logica limbii române și exersezi direct prin grile și dileme asociate.
            </p>
          </div>
          <div className="knowledge-hero__actions">
            <Link className="knowledge-icon-action knowledge-icon-action--large" href="/grile/" aria-label="Grile de antrenament" title="Grile de antrenament">
              <PenLine size={19} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="knowledge-unit-grid" aria-label="Unități de teorie">
          {units.map((unit) => {
            const sessions = unit.childrenIds.map((id) => nodeMap.get(id)).filter(Boolean);
            return (
              <article className="knowledge-unit-card" key={unit.id}>
                <div className="knowledge-unit-card__index">{unit.id.replace("CUR-", "")}</div>
                <h2>{unit.title}</h2>
                <div className="knowledge-unit-card__sessions">
                  {sessions.map((session) => session ? (
                    <Link className="knowledge-session-link" href={`/teorie/${session.id}/`} key={session.id}>
                      <span>{session.title}</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  ) : null)}
                </div>
                <Link className="knowledge-icon-action" href={`/teorie/${unit.id}/`} aria-label={`Deschide ${unit.title}`} title="Deschide unitatea">
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </section>

        <section className="knowledge-related-questions" aria-label="Dileme rezolvate pe categorii">
          <div className="knowledge-section-header">
            <h2>Dileme de exprimare și ortografie pe categorii</h2>
            <Link href="/dileme/" className="knowledge-text-link">
              Toate dilemele <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="category-filter-nav">
            {categories.map((cat) => {
              const slug = categoryToSlug(cat);
              return (
                <Link key={cat} href={`/dileme/categorie/${slug}/`} className="category-filter-chip">
                  {cat}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="knowledge-callout">
          <BookOpen size={23} aria-hidden="true" />
          <div>
            <h2>De la lecție la întrebare</h2>
            <p>Fiecare temă poate deveni un traseu: citești explicația, urmărești exemplele și verifici ce ai înțeles prin grile.</p>
          </div>
          <Link className="knowledge-text-link" href="/grile/">Vezi grilele de antrenament <ArrowRight size={15} aria-hidden="true" /></Link>
        </section>
      </div>
    </main>
  );
}
