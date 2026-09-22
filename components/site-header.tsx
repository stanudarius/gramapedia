"use client";

import Link from "next/link";
import { useRef } from "react";
import { Menu } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { learningNavigation, navigation } from "@/lib/site-data";

export function SiteHeader() {
  const mobileNavRef = useRef<HTMLDetailsElement>(null);

  const closeMobileNav = () => {
    if (mobileNavRef.current) {
      mobileNavRef.current.open = false;
    }
  };

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="Gramapedia — începutul paginii">
          <BrandMark />
        </a>

        <nav className="desktop-nav" aria-label="Navigație principală">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          {learningNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="button button--small button--coral header-cta" href="#inscrieri">
          Vezi înscrierile
        </a>

        <details className="mobile-nav" ref={mobileNavRef}>
          <summary aria-label="Deschide meniul">
            <Menu size={22} aria-hidden="true" />
          </summary>
          <nav aria-label="Navigație mobilă">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMobileNav}>
                {item.label}
              </a>
            ))}
            {learningNavigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMobileNav}>
                {item.label}
              </Link>
            ))}
            <a className="mobile-nav__cta" href="#inscrieri" onClick={closeMobileNav}>
              Înscrieri
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
