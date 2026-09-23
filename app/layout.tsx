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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const cfBeaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

  return (
    <html lang="ro">
      <head>
        {gaId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        ) : null}
        {cfBeaconToken ? (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${cfBeaconToken}"}`}
          />
        ) : null}
      </head>
      <body>{children}</body>
    </html>
  );
}
