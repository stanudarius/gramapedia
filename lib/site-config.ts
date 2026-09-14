const fallbackSiteUrl = "https://gramapedia.ro";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl;

export const siteConfig = {
  url: configuredSiteUrl.replace(/\/+$/, ""),
  email: "clubul.de.gramatica@gmail.com",
  instagramUrl: "https://instagram.com/gramapedia",
};
