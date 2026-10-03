import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import { DictionaryWorkbench } from "@/components/dictionary/dictionary-workbench";
import { POPULAR_DICTIONARY_WORDS, POPULAR_WORDS_BY_SLUG } from "@/lib/dictionary/popular-words";
import { siteConfig } from "@/lib/site-config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return POPULAR_DICTIONARY_WORDS.map((w) => ({
    slug: w.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = POPULAR_WORDS_BY_SLUG.get(slug);

  if (!item) {
    return {
      title: { absolute: "Definiție Dicționar | Gramapedia" },
    };
  }

  const title = `Definiția cuvântului «${item.word}» — DEX & DOOM3 | Gramapedia`;
  const description = `Ce înseamnă «${item.word}»? ${item.hint}. Consultă definiția explicativă din cel mai recent DEX și normele ortografice din cel mai recent DOOM3.`;
  const canonicalUrl = `${siteConfig.url}/dictionar/${slug}/`;

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
          alt: `Definiția cuvântului ${item.word} — Gramapedia`,
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

export default async function DictionaryWordPage({ params }: PageProps) {
  const { slug } = await params;
  const item = POPULAR_WORDS_BY_SLUG.get(slug);

  if (!item) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/dictionar/${slug}/`;
  const relatedWords = POPULAR_DICTIONARY_WORDS.filter((w) => w.slug !== slug).slice(0, 10);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTerm",
        "@id": `${canonicalUrl}#term`,
        name: item.word,
        description: item.hint,
        inDefinedTermSet: `${siteConfig.url}/dictionar/`,
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
            name: "Dicționar",
            item: `${siteConfig.url}/dictionar/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: item.word,
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
        <div className="conjugation-detail-header">
          <Link href="/dictionar/" className="conjugation-back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Toate cuvintele din dicționar</span>
          </Link>
        </div>

        <header className="knowledge-hero">
          <span className="eyebrow eyebrow--coral">Dicționar Român (DEX & DOOM)</span>
          <h1 className="knowledge-hero__title">Ce înseamnă «{item.word}»?</h1>
          <p className="knowledge-hero__description">
            {item.hint}. Consultă mai jos definiția completă din cel mai recent DEX și
            normele ortografice din cel mai recent DOOM3.
          </p>
        </header>

        <Suspense fallback={<div className="dictionary-skeleton" />}>
          <DictionaryWorkbench initialWord={item.word} navigateOnSearch={true} />
        </Suspense>

        <section className="knowledge-related-questions" aria-label="Alte cuvinte recomandate">
          <div className="knowledge-section-header">
            <h2>Alte cuvinte frecvente în programa școlară</h2>
          </div>
          <div className="category-filter-nav">
            {relatedWords.map((w) => (
              <Link key={w.slug} href={`/dictionar/${w.slug}/`} className="category-filter-chip">
                {w.word}
              </Link>
            ))}
          </div>
        </section>

        <section className="knowledge-callout">
          <BookOpen size={23} aria-hidden="true" />
          <div>
            <h2>Explorează și celelalte instrumente Gramapedia</h2>
            <p>
              Verifică teoria completă de gramatică, testează-te cu sute de grile sau conjugă orice
              verb la toate modurile și timpurile.
            </p>
          </div>
          <Link className="knowledge-text-link" href="/teorie/">
            Mergi la Teorie <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  );
}
