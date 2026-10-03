"use client";

import { usePathname } from "next/navigation";
import { ArrowLeft, BookA, BookOpen, Languages, PenLine, Sparkles } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import Link from "next/link";

export function LearningHeader() {
  const pathname = usePathname();
  const isDileme = pathname?.startsWith("/dileme");
  const isTeorie = pathname?.startsWith("/teorie");
  const isGrile = pathname?.startsWith("/grile");
  const isConjugare = pathname?.startsWith("/conjugare");
  const isDictionar = pathname?.startsWith("/dictionar");

  return (
    <header className="learning-header">
      <div className="shell learning-header__inner">
        <Link className="learning-header__brand" href="/" aria-label="Înapoi la Gramapedia">
          <BrandMark />
        </Link>
        <nav className="learning-header__nav" aria-label="Navigație de învățare">
          <Link
            className={`learning-header__tab${isDileme ? " is-active" : ""}`}
            href="/dileme/"
            aria-current={isDileme ? "page" : undefined}
          >
            <Sparkles size={16} aria-hidden="true" />
            <span>Dileme</span>
          </Link>
          <Link
            className={`learning-header__tab${isTeorie ? " is-active" : ""}`}
            href="/teorie/"
            aria-current={isTeorie ? "page" : undefined}
          >
            <BookOpen size={16} aria-hidden="true" />
            <span>Teorie</span>
          </Link>
          <Link
            className={`learning-header__tab${isGrile ? " is-active" : ""}`}
            href="/grile/"
            aria-current={isGrile ? "page" : undefined}
          >
            <PenLine size={16} aria-hidden="true" />
            <span>Grile</span>
          </Link>
          <Link
            className={`learning-header__tab${isConjugare ? " is-active" : ""}`}
            href="/conjugare/"
            aria-current={isConjugare ? "page" : undefined}
          >
            <Languages size={16} aria-hidden="true" />
            <span>Conjugare</span>
          </Link>
          <Link
            className={`learning-header__tab${isDictionar ? " is-active" : ""}`}
            href="/dictionar/"
            aria-current={isDictionar ? "page" : undefined}
          >
            <BookA size={16} aria-hidden="true" />
            <span>Dicționar</span>
          </Link>
        </nav>
        <Link className="learning-header__back" href="/" aria-label="Înapoi la pagina principală" title="Înapoi la pagina principală">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Acasă</span>
        </Link>
      </div>
    </header>
  );
}
