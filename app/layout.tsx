import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Gramapedia",
    template: "%s — Gramapedia",
  },
  description:
    "Gramapedia este clubul de gramatică al Colegiului Național «Gheorghe Lazăr»: un spațiu în care limba română se înțelege prin exemple, jocuri și texte reale.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gramapedia — Limbă, logică, claritate",
    description:
      "Un club de gramatică pentru elevii care vor să înțeleagă limba română, nu doar să-i memoreze regulile.",
    url: siteConfig.url,
    siteName: "Gramapedia",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/gramapedia-logo.jpg",
        width: 1255,
        height: 832,
        alt: "Logo Gramapedia — Clubul de Gramatică CNGL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gramapedia — Limbă, logică, claritate",
    description: "Clubul de gramatică al Colegiului Național «Gheorghe Lazăr».",
    images: ["/gramapedia-logo.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "48x48",
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
