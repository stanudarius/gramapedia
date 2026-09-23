# Gramapedia

Site-ul static al clubului de gramatică **Gramapedia** (Colegiul Național «Gheorghe Lazăr», București), disponibil la [gramapedia.ro](https://gramapedia.ro).

Proiectul este construit cu Next.js (App Router, export static complet) și găzduit pe Cloudflare Workers Static Assets.

---

## Dezvoltare Locală

Necesită **Node.js 20.9+**.

```bash
npm install          # instalare dependențe
npm run dev          # pornește serverul local la http://localhost:3000
```

---

## Verificare și Construire

```bash
npm run typecheck    # verificare tipuri TypeScript (0 erori)
npm run lint         # verificare reguli ESLint (0 avertismente)
npm run build        # generare export static în directorul out/ (806 pagini)
npm run seo:validate # validare structurală SEO, taguri meta și scheme JSON-LD
```

---

## Publicare (Deployment)

Proiectul este configurat pentru **Cloudflare Workers Static Assets** (`wrangler.jsonc`):

1. **Variabile de mediu de producție**:
   - `NEXT_PUBLIC_SITE_URL=https://gramapedia.ro` (obligatoriu la build)
   - `NEXT_PUBLIC_CF_BEACON_TOKEN=token-tau-cloudflare` (opțional, pentru Cloudflare Web Analytics — GDPR-compliant, fără cookie-uri)
   - `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` (opțional, pentru Google Analytics 4)

2. **Comandă de deploy**:
   ```bash
   npm run build
   npx wrangler deploy --config wrangler.jsonc
   ```

---

## Sinteza Comenzilor CLI

Toate scripturile sunt scrise în Node.js nativ (ESM) și configurate în `package.json`.

### 🔍 Calitate și Validare SEO

| Comandă | Descriere | Utilizare |
| :--- | :--- | :--- |
| `npm run seo:validate` | Validează toate paginile statice din `out/`: verifică tagurile `<title>`, `<meta description>`, URL-urile canonice absolute, structura `<h1>`, tagurile OpenGraph și validitatea schemelor JSON-LD (`QAPage`, `FAQPage`, `BreadcrumbList`, `CollectionPage`). | `npm run seo:validate` |
| `npm run typecheck` | Verifică integritatea tipurilor TypeScript pe întreg proiectul. | `npm run typecheck` |
| `npm run lint` | Verifică standardele de cod conform ESLint. | `npm run lint` |
| `npm run build` | Compilează aplicația în format static în `out/`. | `npm run build` |

### ✍️ Aprobare conținut

Pentru a asigura acuratețea explicațiilor gramaticale, nicio unealtă automată nu publică direct pe site. Orice propunere nouă este salvată mai întâi în `content/pending-review/` și este verificată de un profesor sau membru al clubului.

| Comandă | Descriere | Utilizare |
| :--- | :--- | :--- |
| `npm run dilemma:pending` | Afișează toate propunerile aflate în așteptare în `content/pending-review/`. | `npm run dilemma:pending` |
| `npm run dilemma:add` | Creează o propunere nouă în `content/pending-review/` cu date structurate și diacritice românești corecte. | `npm run dilemma:add -- --category "Ortografie" --correct "așază" --wrong "așează" --prompt "«Așază» sau «așează»?" --rule "Conform DOOM3..." --examples "Ea așază cărțile."` |
| `npm run dilemma:approve` | Aprobă o propunere și o publică pe site (o mută în `content/dilemmas/`). Necesită numele persoanei care a făcut verificarea (`--reviewer`) și actualizează automat indexul. | `npm run dilemma:approve -- --slug "asaza-vs-aseaza" --reviewer "Prof. Elena Radu"` |
| `npm run data:migrate` | Actualizează legăturile dintre dileme (`related_ids`), verifică diacriticele și regenerează fișierul `content/dilemmas-index.json`. | `npm run data:migrate` |

### 📊 Analiză și mentenanță

| Comandă | Descriere | Utilizare |
| :--- | :--- | :--- |
| `npm run data:gap` | Compară dilemele existente cu expresiile căutate frecvent (din ghidul dexonline și alte surse). Salvează rezultatul în `content/competitive-gap.json`. Cu parametrul `--draft-missing`, generează automat propuneri în `content/pending-review/`. | `npm run data:gap`<br>`npm run data:gap -- --draft-missing` |
| `npm run data:diff` | Verifică ghidul dexonline pentru a găsi forme corecte/greșite care nu există încă pe site și salvează rezultatele în `reports/dexonline-diff-report.md`. Cu parametrul `--draft-new`, generează propuneri pentru acestea. | `npm run data:diff`<br>`npm run data:diff -- --draft-new` |
| `npm run exam:review` | Verifică dilemele relevante pentru Evaluarea Națională și Bacalaureat, calculează timpul rămas până la examene și creează un raport în `reports/exam-season-review.md`. Cu parametrul `--tag-cards`, adaugă etichetele corespunzătoare în fișiere. | `npm run exam:review`<br>`npm run exam:review -- --tag-cards` |
| `npm run seo:report` | Identifică paginile care se află aproape de prima pagină Google (pozițiile 6–15) și generează un raport în `reports/striking-distance-report.md`. | `npm run seo:report`<br>`npm run seo:report -- --data <cale_fisier.csv>` |
