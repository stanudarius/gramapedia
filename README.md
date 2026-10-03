# Gramapedia

> Platformă educațională de gramatică română pentru elevi, construită ca site static și optimizată pentru căutare.

**Site:** https://gramapedia.ro

## Despre proiect

Gramapedia este site-ul static al clubului de gramatică **Gramapedia** (Colegiul Național „Gheorghe Lazăr”, București). Proiectul pune accent pe explicații clare, pagini rapide și infrastructură SEO verificabilă.

Aplicația este construită cu Next.js App Router, export static complet și este găzduită pe Cloudflare Workers Static Assets.

## Principii

- **Conținut verificat** — propunerile noi sunt salvate în content/pending-review/ și verificate de un profesor sau membru al clubului înainte de publicare.
- **SEO ca infrastructură** — meta taguri, URL-uri canonice, Open Graph și scheme JSON-LD sunt validate automat.
- **Conținut structurat** — dilemele și relațiile dintre ele sunt păstrate ca date, nu hardcodate în pagini individuale.
- **Reproductibilitate** — build-ul, verificările și publicarea sunt documentate și executabile din CLI.

## Dezvoltare locală

Necesită Node.js 20.9+.

    npm install
    npm run dev

## Verificare și build

    npm run typecheck
    npm run lint
    npm run build
    npm run seo:validate

## Publicare

Proiectul folosește Cloudflare Workers Static Assets prin wrangler.jsonc.

Variabilele de producție:

    NEXT_PUBLIC_SITE_URL=https://gramapedia.ro
    NEXT_PUBLIC_CF_BEACON_TOKEN=...
    NEXT_PUBLIC_GA_ID=...

NEXT_PUBLIC_CF_BEACON_TOKEN și NEXT_PUBLIC_GA_ID sunt opționale; NEXT_PUBLIC_SITE_URL este necesară pentru build.

Deploy:

    npm run build
    npx wrangler deploy --config wrangler.jsonc

## CLI

### Calitate și SEO

| Comandă | Scop |
| --- | --- |
| npm run seo:validate | Validează title, meta description, canonical, H1, Open Graph și JSON-LD |
| npm run typecheck | Verifică tipurile TypeScript |
| npm run lint | Verifică regulile ESLint |
| npm run build | Generează exportul static |
| npm run seo:report | Generează raportul de pagini aflate în striking distance |

### Aprobare conținut

Conținutul nou trece prin fluxul:

pending-review → verificare umană → content/dilemmas/

| Comandă | Scop |
| --- | --- |
| npm run dilemma:pending | Listează propunerile care așteaptă verificarea |
| npm run dilemma:add | Creează o propunere nouă |
| npm run dilemma:approve | Publică o propunere aprobată și actualizează indexul |
| npm run data:migrate | Regenerare și migrare a datelor relaționale |

### Analiză și mentenanță

| Comandă | Scop |
| --- | --- |
| npm run data:gap | Identifică goluri de conținut și poate genera drafturi |
| npm run data:diff | Compară formele din surse externe cu baza locală |
| npm run exam:review | Verifică acoperirea pentru examene și poate eticheta cardurile |

## Deployment

Site-ul de producție este disponibil la https://gramapedia.ro.
