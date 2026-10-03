import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Layers } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import { DictionaryWorkbench } from "@/components/dictionary/dictionary-workbench";
import { POPULAR_DICTIONARY_WORDS } from "@/lib/dictionary/popular-words";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Dicționar Explicativ & Ortografic Român (DEX & DOOM) | Gramapedia",
  },
  description:
    "Consultă definiția oricărui cuvânt din limba română conform DEX și DOOM: definiții explicative complete, norme ortografice oficiale, sensuri și etimologii.",
  alternates: { canonical: `${siteConfig.url}/dictionar/` },
  openGraph: {
    title: "Dicționar Explicativ & Ortografic Român (DEX & DOOM) | Gramapedia",
    description:
      "Caută definiția oricărui cuvânt din limba română: DEX, DOOM3, etimologie și capcane gramaticale explicate.",
    url: `${siteConfig.url}/dictionar/`,
    siteName: "Gramapedia",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Dicționar Explicativ & Ortografic Român — Gramapedia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dicționar Explicativ & Ortografic Român | Gramapedia",
    description:
      "Definiții complete din DEX și DOOM3 pentru orice cuvânt din limba română. Fără reclame, navigare curată și acces direct la conjugarea verbelor.",
    images: [`${siteConfig.url}/og-image.svg`],
  },
};

export default function DictionarPage() {
  const canonicalUrl = `${siteConfig.url}/dictionar/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#collection`,
        url: canonicalUrl,
        name: "Dicționar Explicativ & Ortografic Român",
        description:
          "Instrument modern de consultare a definițiilor lexicale și a normelor ortografice din limba română conform DEX și DOOM.",
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
            name: "Dicționar",
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
        {/* Hero Section */}
        <header className="knowledge-hero">
          <span className="eyebrow eyebrow--coral">Lexicologie & Semantică</span>
          <h1 className="knowledge-hero__title">Dicționar Explicativ & Ortografic</h1>
          <p className="knowledge-hero__description">
            Consultă definiții complete pentru orice cuvânt din limba română. Prezentăm definițiile
            explicative din DEX și normele ortografice oficiale din DOOM3.
          </p>
        </header>

        {/* Live Dictionary Interactive Workbench */}
        <Suspense fallback={<div className="dictionary-skeleton" />}>
          <DictionaryWorkbench initialWord="paradigmă" />
        </Suspense>

        {/* Educational Guide: Cum citim o intrare de dicționar */}
        <section className="conjugation-guide-section" aria-labelledby="dict-guide-heading">
          <div className="knowledge-section-header">
            <h2 id="dict-guide-heading">Ghid: Cum interpretăm o intrare lexicografică</h2>
            <Link href="/teorie/LEX-001/" className="knowledge-text-link">
              Teoria vocabularului <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="conjugation-groups-grid">
            <article className="conjugation-group-card">
              <span className="conjugation-group-card__badge">Fonetică & Accent</span>
              <h3>Accentul tonic</h3>
              <p>
                În DEX și DOOM, litera accentuată este marcată vizual (adesea subliniată sau îngroșată).
                Poziția accentului tonic este esențială: o schimbare de accent poate schimba complet sensul
                (<em>copíi</em> vs <em>cópii</em>, <em>véselă</em> vs <em>vesélă</em>) sau poate constitui o
                abatere ortoepică frecventă la examene.
              </p>
            </article>

            <article className="conjugation-group-card">
              <span className="conjugation-group-card__badge">Morfologie</span>
              <h3>Abrevierile gramaticale</h3>
              <p>
                Imediat după cuvântul-titlu apar abrevierile părții de vorbire: <strong>s. f.</strong>{" "}
                (substantiv feminin), <strong>s. n.</strong> (neutru), <strong>adj.</strong> (adjectiv),{" "}
                <strong>vb. tranz.</strong> (verb tranzitiv). La verbe, indicarea tranzitivității arată dacă
                acțiunea cere un complement direct.
              </p>
            </article>

            <article className="conjugation-group-card">
              <span className="conjugation-group-card__badge">Semantică</span>
              <h3>Simbolurile «◊» și «♦»</h3>
              <p>
                Rombul plin (<strong>♦</strong>) marchează o ramificație secundară sau o nuanță particulară
                de sens. Rombul gol (<strong>◊</strong>) introduce expresii, locuțiuni și contexte idiomatice
                specifice în care apare cuvântul (ex: <em>a da cărțile pe față</em>).
              </p>
            </article>

            <article className="conjugation-group-card">
              <span className="conjugation-group-card__badge">Istoric</span>
              <h3>Etimologia la finalul intrării</h3>
              <p>
                După linia de pauză (—) de la finalul definiției găsim originea cuvântului: moștenit din
                latină (<em>lat.</em>), împrumut neologic din franceză (<em>fr.</em>), germană (<em>germ.</em>)
                sau format pe teren românesc prin derivare și compunere.
              </p>
            </article>
          </div>
        </section>

        {/* Educational Callout: DEX vs DOOM */}
        <section className="dictionary-comparison-section">
          <div className="dictionary-comparison-card">
            <div className="dictionary-comparison-card__icon">
              <Layers size={24} aria-hidden="true" />
            </div>
            <div className="dictionary-comparison-card__body">
              <h3>DEX vs DOOM: Care este diferența pentru un elev sau student?</h3>
              <p>
                <strong>DEX (Dicționarul Explicativ)</strong> este un dicționar <em>descriptiv</em>: explică
                sensurile cuvintelor, figurile de stil, evoluția semantică și oferă exemple din literatura română.
              </p>
              <p>
                <strong>DOOM (Dicționarul Ortografic, Ortoepic și Morfologic)</strong> este un dicționar{" "}
                <em>normativ</em>: el are forță de lege în școli, universități și la examene oficiale.
                DOOM3 stabilește forma corectă scrisă, despărțirea în silabe, accentul și pluralul omologat
                de Institutul de Lingvistică „Iorgu Iordan – Al. Rosetti”.
              </p>
            </div>
          </div>
        </section>

        {/* Curated Words Directory */}
        <section className="knowledge-related-questions" aria-label="Cuvinte frecvente în programa școlară">
          <div className="knowledge-section-header">
            <h2>Cuvinte frecvente în programa școlară</h2>
          </div>
          <div className="category-filter-nav">
            {POPULAR_DICTIONARY_WORDS.map((w) => (
              <Link key={w.slug} href={`/dictionar/${w.slug}/`} className="category-filter-chip">
                {w.word}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
