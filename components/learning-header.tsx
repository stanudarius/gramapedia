"use client";

import { usePathname } from "next/navigation";
import { ArrowLeft, BookOpen, PenLine } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import Link from "next/link";

export function LearningHeader() {
  const pathname = usePathname();
  const isTeorie = pathname?.startsWith("/teorie");
  const isGrile = pathname?.startsWith("/grile");

  return (
    <header className="learning-header">
      <div className="shell learning-header__inner">
        <Link className="learning-header__brand" href="/" aria-label="Înapoi la Gramapedia">
          <BrandMark />
        </Link>
        <nav className="learning-header__nav" aria-label="Navigație de învățare">
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
        </nav>
        <Link className="learning-header__back" href="/" aria-label="Înapoi la pagina principală" title="Înapoi la pagina principală">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Acasă</span>
        </Link>
      </div>
    </header>
  );
}
