"use client";

import Link from "next/link";
import { useRef } from "react";
import { Menu } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { navigation } from "@/lib/site-data";

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
        <Link className="site-header__brand" href="/" aria-label="Gramapedia — începutul paginii">
          <BrandMark />
        </Link>

        <nav className="desktop-nav" aria-label="Navigație principală">
          {navigation.map((item) =>
            item.href.startsWith("/") ? (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            )
          )}
        </nav>

        <a className="button button--small button--coral header-cta" href="#inscrieri">
          Înscrieri
        </a>

        <details className="mobile-nav" ref={mobileNavRef}>
          <summary aria-label="Deschide meniul">
            <Menu size={22} aria-hidden="true" />
          </summary>
          <nav aria-label="Navigație mobilă">
            {navigation.map((item) =>
              item.href.startsWith("/") ? (
                <Link key={item.href} href={item.href} onClick={closeMobileNav}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.href} href={item.href} onClick={closeMobileNav}>
                  {item.label}
                </a>
              )
            )}
            <a className="mobile-nav__cta" href="#inscrieri" onClick={closeMobileNav}>
              Înscrieri
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
