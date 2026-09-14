# Gramapedia

Static Next.js website for the Gramapedia grammar club.

## Run locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Check and build

```bash
npm run typecheck
npm run lint
npm run build
```

The static export is written to `out/`.

## Deploy

The project is configured for Cloudflare Workers Static Assets:

```bash
npm run build
npx wrangler deploy --config wrangler.jsonc
```

Set `NEXT_PUBLIC_SITE_URL` when deploying to a different domain.
