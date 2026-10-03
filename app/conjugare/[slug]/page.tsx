import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import { ConjugationWorkbench } from "@/components/conjugation/conjugation-workbench";
import { conjugate } from "@/lib/conjugation/engine";
import { POPULAR_VERBS, POPULAR_VERBS_BY_SLUG } from "@/lib/conjugation/popular-verbs";
import { siteConfig } from "@/lib/site-config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return POPULAR_VERBS.map((v) => ({
    slug: v.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const popularItem = POPULAR_VERBS_BY_SLUG.get(slug);

  if (!popularItem) {
    return {
      title: { absolute: "Conjugare Verbe | Gramapedia" },
    };
  }

  const data = conjugate(popularItem.verb);

  const title = `Conjugarea verbului ${data.verb} — Toate timpurile și modurile | Gramapedia`;
  const description = `Conjugarea completă a verbului ${data.verb} (Grupa ${data.groupRoman}) conform normelor DOOM3: indicativ prezent (${data.indicativ.prezent.slice(0, 3).join(", ")}...), imperfect, perfect compus, conjunctiv, imperativ și capcane ortografice.`;
  const canonicalUrl = `${siteConfig.url}/conjugare/${slug}/`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
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
          alt: `Conjugarea verbului ${data.verb} — Gramapedia`,
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

export default async function VerbConjugationPage({ params }: PageProps) {
  const { slug } = await params;
  const popularItem = POPULAR_VERBS_BY_SLUG.get(slug);

  if (!popularItem) {
    notFound();
  }

  const conjugation = conjugate(popularItem.verb);

  const canonicalUrl = `${siteConfig.url}/conjugare/${slug}/`;

  // Related verbs from same group
  const sameGroupVerbs = POPULAR_VERBS.filter(
    (v) => v.slug !== slug
  ).slice(0, 12);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTerm",
        "@id": `${canonicalUrl}#term`,
        name: conjugation.verb,
        description: `Conjugarea completă a verbului ${conjugation.verb} conform DOOM3.`,
        inDefinedTermSet: `${siteConfig.url}/conjugare/`,
        url: canonicalUrl,
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
            item: `${siteConfig.url}/conjugare/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: conjugation.verb,
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
        {/* Back Link */}
        <div className="conjugation-page-top">
          <Link href="/conjugare/" className="conjugation-back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Toate verbele</span>
          </Link>
        </div>

        {/* Hero header */}
        <header className="knowledge-hero">
          <span className="eyebrow eyebrow--coral">
            Morfologie & Flexiune • Grupa {conjugation.groupRoman} ({conjugation.isIrregular ? "Neregulat" : "Regulat"})
          </span>
          <h1 className="knowledge-hero__title">Conjugarea verbului {conjugation.verb}</h1>
          <p className="knowledge-hero__description">
            Tabelul complet de conjugare pentru verbul {conjugation.verb} la toate timpurile și modurile
            (indicativ, conjunctiv, condițional, imperativ și forme nepersonale) conform normelor DOOM3.
          </p>
        </header>

        {/* Modul interactiv de conjugare a verbului */}
        <ConjugationWorkbench initialVerb={conjugation.verb} />

        {/* Related Verbs Section */}
        <section className="knowledge-related-questions" aria-label="Alte verbe căutate frecvent">
          <div className="knowledge-section-header">
            <h2>Alte verbe căutate frecvent</h2>
            <Link href="/conjugare/" className="knowledge-text-link">
              Toate cele 100+ verbe <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="category-filter-nav">
            {sameGroupVerbs.map((v) => (
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
            <h2>Ai o nelămurire gramaticală legată de acest verb?</h2>
            <p>
              Consultă baza noastră de dileme rezolvate pentru a vedea explicația regulilor
              ortografice, a alternanțelor fonetice și a capcanelor de acord.
            </p>
          </div>
          <Link className="knowledge-text-link" href="/dileme/">
            Vezi dilemele gramaticale <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  );
}
