import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";

export default function NotFound() {
  return (
    <main className="knowledge-page">
      <LearningHeader />
      <div className="knowledge-shell knowledge-shell--detail" style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>404 — Pagina nu a fost găsită</h1>
        <p style={{ marginBottom: "2rem", color: "var(--color-muted, #666)" }}>
          Pagina pe care o căutați nu există sau a fost mutată.
        </p>
        <Link
          href="/"
          className="button button--coral"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
        >
          <ArrowLeft size={16} aria-hidden="true" /> Înapoi la pagina principală
        </Link>
      </div>
    </main>
  );
}

