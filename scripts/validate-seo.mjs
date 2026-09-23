import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'out');
const dilemmasDir = path.join(outDir, 'dileme');

if (!fs.existsSync(dilemmasDir)) {
  console.error(`Error: ${dilemmasDir} does not exist. Run 'npm run build' first.`);
  process.exit(1);
}

console.log('--- Starting SEO and Structured Data Validation ---');

let totalTested = 0;
let failures = 0;

function validatePageHtml(filePath, relativeUrl, pageType = 'dilemma') {
  totalTested++;
  const html = fs.readFileSync(filePath, 'utf8');

  const errors = [];

  // Title check
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  if (!titleMatch) {
    errors.push('Missing <title>');
  } else {
    const title = titleMatch[1];
    if (title.length < 15) errors.push(`Title too short (${title.length} chars): "${title}"`);
    if (title.includes('— Gramapedia — Gramapedia')) errors.push(`Duplicate brand in title: "${title}"`);
  }

  // Meta description check
  const descMatch = html.match(/<meta name="description" content="([^"]+)"/);
  if (!descMatch) {
    errors.push('Missing <meta name="description">');
  } else {
    const desc = descMatch[1];
    if (desc.length < 25) errors.push(`Meta description too short (${desc.length} chars)`);
  }

  // Canonical check
  const canonMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (!canonMatch) {
    errors.push('Missing <link rel="canonical">');
  } else {
    const canon = canonMatch[1];
    if (!canon.startsWith('https://')) errors.push(`Canonical URL not absolute: "${canon}"`);
  }

  // OpenGraph checks
  const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]+)"/);
  const ogDescMatch = html.match(/<meta property="og:description" content="([^"]+)"/);
  if (!ogTitleMatch) errors.push('Missing og:title');
  if (!ogDescMatch) errors.push('Missing og:description');

  // H1 check
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const h1Text = h1Match ? h1Match[1].replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, '').trim() : '';
  if (!h1Text) {
    errors.push('Missing or empty <h1> tag');
  }

  // JSON-LD checks
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/);
  if (!jsonLdMatch) {
    errors.push('Missing <script type="application/ld+json">');
  } else {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      const graph = parsed['@graph'];
      if (!Array.isArray(graph) || graph.length === 0) {
        errors.push('JSON-LD @graph is missing or empty');
      } else {
        const types = graph.map(item => item['@type']);

        if (pageType === 'dilemma') {
          if (!types.includes('QAPage') && !types.includes('FAQPage')) {
            errors.push(`Expected QAPage or FAQPage in JSON-LD, found: ${types.join(', ')}`);
          }
          if (!types.includes('BreadcrumbList')) {
            errors.push('Expected BreadcrumbList in JSON-LD');
          }

          const qaNode = graph.find(item => item['@type'] === 'QAPage');
          if (qaNode) {
            if (!qaNode.mainEntity || !qaNode.mainEntity.name || !qaNode.mainEntity.acceptedAnswer) {
              errors.push('QAPage mainEntity structure incomplete');
            }
          }
        } else if (pageType === 'hub' || pageType === 'category') {
          if (!types.includes('CollectionPage')) {
            errors.push(`Expected CollectionPage in JSON-LD, found: ${types.join(', ')}`);
          }
          if (!types.includes('BreadcrumbList')) {
            errors.push('Expected BreadcrumbList in JSON-LD');
          }
        }
      }
    } catch (err) {
      errors.push(`Invalid JSON in application/ld+json: ${err.message}`);
    }
  }

  if (errors.length > 0) {
    failures++;
    console.error(`✖ FAIL [${relativeUrl}]:`);
    errors.forEach(e => console.error(`    - ${e}`));
  }
}

// 1. Validate Dilemmas Hub (/dileme/index.html)
const hubFile = path.join(dilemmasDir, 'index.html');
if (fs.existsSync(hubFile)) {
  validatePageHtml(hubFile, '/dileme/', 'hub');
}

// 2. Validate Category Hubs (/dileme/categorie/*/index.html)
const categoryDir = path.join(dilemmasDir, 'categorie');
if (fs.existsSync(categoryDir)) {
  const catSlugs = fs.readdirSync(categoryDir).filter(f => fs.statSync(path.join(categoryDir, f)).isDirectory());
  for (const slug of catSlugs) {
    const catHtml = path.join(categoryDir, slug, 'index.html');
    if (fs.existsSync(catHtml)) {
      validatePageHtml(catHtml, `/dileme/categorie/${slug}/`, 'category');
    }
  }
}

// 3. Validate All Dilemma Detail Pages (/dileme/*/index.html)
const items = fs.readdirSync(dilemmasDir);
for (const item of items) {
  if (item === 'index.html' || item === 'categorie') continue;
  const itemPath = path.join(dilemmasDir, item);
  if (fs.statSync(itemPath).isDirectory()) {
    const pageHtml = path.join(itemPath, 'index.html');
    if (fs.existsSync(pageHtml)) {
      validatePageHtml(pageHtml, `/dileme/${item}/`, 'dilemma');
    }
  }
}

console.log(`\nValidation Summary:`);
console.log(`  Total pages tested: ${totalTested}`);
console.log(`  Passed: ${totalTested - failures}`);
console.log(`  Failed: ${failures}`);

if (failures > 0) {
  console.error(`\n✖ SEO validation failed with ${failures} errors.`);
  process.exit(1);
} else {
  console.log(`\n✔ All ${totalTested} SEO and structured data checks PASSED!`);
  process.exit(0);
}
