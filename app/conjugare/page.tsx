import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import { ConjugationWorkbench } from "@/components/conjugation/conjugation-workbench";
import { POPULAR_VERBS } from "@/lib/conjugation/popular-verbs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Conjugarea Verbelor în Limba Română — Motor Universal DOOM3 | Gramapedia",
  },
  description:
    "Motor universal de conjugare a verbelor în limba română conform normelor DOOM3: conjugă orice verb la toate modurile și timpurile, căutare inversă pe orice formă flexionară și capcane ortografice explicate.",
  alternates: { canonical: `${siteConfig.url}/conjugare/` },
  openGraph: {
    title: "Conjugarea Verbelor în Limba Română — Motor Universal DOOM3 | Gramapedia",
    description:
      "Conjugă instantaneu orice verb din limba română la toate modurile și timpurile (indicativ, conjunctiv, condițional, imperativ). Include căutare inversă și capcane DOOM3.",
    url: `${siteConfig.url}/conjugare/`,
    siteName: "Gramapedia",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Conjugarea Verbelor în Limba Română — Gramapedia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conjugarea Verbelor în Limba Română — Motor Universal DOOM3 | Gramapedia",
    description:
      "Conjugă orice verb românesc la toate timpurile și modurile conform DOOM3. 0ms latență, fără reclame, design editorial curat.",
    images: [`${siteConfig.url}/og-image.svg`],
  },
};

export default function ConjugarePage() {
  const canonicalUrl = `${siteConfig.url}/conjugare/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#collection`,
        url: canonicalUrl,
        name: "Conjugarea Verbelor în Limba Română — Motor Universal",
        description:
          "Instrument universal de conjugare pentru orice verb din limba română la toate timpurile și modurile, integrat cu normele DOOM3.",
        inLanguage: "ro",
        publisher: {
          "@type": "EducationalOrganization",
          name: "Gramapedia",
          url: siteConfig.url,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Acasă",
            item: `${siteConfig.url}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Conjugare",
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="knowledge-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LearningHeader />

      <div className="shell knowledge-shell">
        {/* Hero header */}
        <header className="knowledge-hero">
          <span className="eyebrow eyebrow--coral">Morfologie & Flexiune Verbală</span>
          <h1 className="knowledge-hero__title">Conjugarea Verbelor în Limba Română</h1>
          <p className="knowledge-hero__description">
            Un motor universal de conjugare bazat pe regulile morfologice oficiale DOOM3.
            Introdu orice verb, indiferent dacă este un verb uzual, un neologism modern
            sau o formă flexionară oarecare.
          </p>
        </header>

        {/* Modul interactiv de conjugare */}
        <Suspense fallback={<div className="conjugation-loading">Se încarcă modulul de conjugare...</div>}>
          <ConjugationWorkbench initialVerb="fi" />
        </Suspense>

        {/* Educational section: The 4 Conjugation Groups */}
        <section className="conjugation-guide-section" aria-labelledby="guide-heading">
          <div className="knowledge-section-header">
            <h2 id="guide-heading">Cele 4 grupe de conjugare din limba română</h2>
            <Link href="/teorie/MOR-006/" className="knowledge-text-link">
              Teoria verbului <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="conjugation-groups-grid">
            <article className="conjugation-group-card">
              <span className="conjugation-group-card__badge">Grupa I</span>
              <h3>Terminația în «-a»</h3>
              <p>
                Cea mai productivă grupă din limba română. Include verbe moștenite fără sufix
                (<em>a cânta, a pleca</em>) și verbe moderne derivate cu sufixul <strong>-ez</strong>{" "}
                (<em>a lucra, a digitaliza, a parca</em>).
              </p>
              <div className="conjugation-group-card__examples">
                <span>Modele:</span>
                <Link href="/conjugare/canta/">a cânta</Link>
                <Link href="/conjugare/lucra/">a lucra</Link>
                <Link href="/conjugare/crea/">a crea</Link>
              </div>
            </article>

            <article className="conjugation-group-card">
              <span className="conjugation-group-card__badge">Grupa a II-a</span>
              <h3>Terminația în «-ea»</h3>
              <p>
                Verbe cu accentul pe sufixul <em>-ea</em> la infinitiv. Multe sunt verbe fundamentale
                cu alternanțe vocalice puternice și capcane frecvente la condițional (<em>ar plăcea</em>, nu <em>ar place</em>).
              </p>
              <div className="conjugation-group-card__examples">
                <span>Modele:</span>
                <Link href="/conjugare/vedea/">a vedea</Link>
                <Link href="/conjugare/placea/">a plăcea</Link>
                <Link href="/conjugare/putea/">a putea</Link>
              </div>
            </article>

            <article className="conjugation-group-card">
              <span className="conjugation-group-card__badge">Grupa a III-a</span>
              <h3>Terminația în «-e»</h3>
              <p>
                Verbe cu accentul pe rădăcină (nu pe terminație). Multe verbe de grupa a III-a au participiu
                în <em>-s</em> sau <em>-t</em> (<em>mers, scris, făcut, copt</em>) și forme scurte de imperativ.
              </p>
              <div className="conjugation-group-card__examples">
                <span>Modele:</span>
                <Link href="/conjugare/face/">a face</Link>
                <Link href="/conjugare/merge/">a merge</Link>
                <Link href="/conjugare/scrie/">a scrie</Link>
              </div>
            </article>

            <article className="conjugation-group-card">
              <span className="conjugation-group-card__badge">Grupa a IV-a</span>
              <h3>Terminația în «-i» și «-î»</h3>
              <p>
                Foarte frecventă în vocabularul activ. Cuprinde verbe în <em>-i</em> cu sufixul <strong>-esc</strong>{" "}
                (<em>a citi, a vorbi</em>) sau fără sufix (<em>a dormi, a fugi</em>), precum și verbe în <em>-î</em>{" "}
                cu sufixul <strong>-ăsc</strong> (<em>a hotărî</em>).
              </p>
              <div className="conjugation-group-card__examples">
                <span>Modele:</span>
                <Link href="/conjugare/citi/">a citi</Link>
                <Link href="/conjugare/dormi/">a dormi</Link>
                <Link href="/conjugare/hotari/">a hotărî</Link>
              </div>
            </article>
          </div>
        </section>

        {/* Directory of Frequent Verbs */}
        <section className="knowledge-related-questions" aria-label="Verbe frecvente și capcane DOOM3">
          <div className="knowledge-section-header">
            <h2>Verbe frecvente și capcane la examene</h2>
            <span className="conjugation-section__count">{POPULAR_VERBS.length} verbe indexate</span>
          </div>
          <div className="category-filter-nav">
            {POPULAR_VERBS.map((v) => (
              <Link key={v.slug} href={`/conjugare/${v.slug}/`} className="category-filter-chip">
                {v.verb}
              </Link>
            ))}
          </div>
        </section>

        {/* Bridge Callout */}
        <section className="knowledge-callout">
          <BookOpen size={23} aria-hidden="true" />
          <div>
            <h2>Verifică dilemele de ortografie a verbelor</h2>
            <p>
              Multe dintre cele mai frecvente greșeli la examene (Evaluarea Națională, Bacalaureat, admitere)
              țin de formele verbale: <em>așază vs așează</em>, <em>fii vs fi</em>, <em>creez vs creiez</em>.
            </p>
          </div>
          <Link className="knowledge-text-link" href="/dileme/">
            Explorează dilemele rezolvate <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  );
}
