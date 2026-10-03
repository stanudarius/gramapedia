import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'out');
const dilemmasDir = path.join(outDir, 'dileme');
const teorieDir = path.join(outDir, 'teorie');
const grileDir = path.join(outDir, 'grile');

if (!fs.existsSync(outDir)) {
  console.error(`Error: ${outDir} does not exist. Run 'npm run build' first.`);
  process.exit(1);
}

console.log('--- Starting Comprehensive SEO and Structured Data Validation ---');

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
    if (title.includes('— Gramapedia — Gramapedia') || title.includes('| Gramapedia — Gramapedia')) {
      errors.push(`Duplicate brand in title: "${title}"`);
    }
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
    if (!canon.startsWith('https://')) errors.push(`Canonical URL not absolute HTTPS: "${canon}"`);
    if (!canon.endsWith('/')) errors.push(`Canonical URL missing trailing slash: "${canon}"`);
  }

  // OpenGraph checks
  const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]+)"/);
  const ogDescMatch = html.match(/<meta property="og:description" content="([^"]+)"/);
  const ogUrlMatch = html.match(/<meta property="og:url" content="([^"]+)"/);
  if (!ogTitleMatch) errors.push('Missing og:title');
  if (!ogDescMatch) errors.push('Missing og:description');
  if (!ogUrlMatch) {
    errors.push('Missing og:url');
  } else if (!ogUrlMatch[1].startsWith('https://')) {
    errors.push(`og:url not absolute HTTPS: "${ogUrlMatch[1]}"`);
  }

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

        if (pageType === 'home') {
          if (!types.includes('WebSite')) errors.push('Expected WebSite in JSON-LD');
          if (!types.includes('EducationalOrganization')) errors.push('Expected EducationalOrganization in JSON-LD');
        } else if (pageType === 'dilemma') {
          if (!types.includes('QAPage')) {
            errors.push(`Expected QAPage in JSON-LD, found: ${types.join(', ')}`);
          }
          if (!types.includes('BreadcrumbList')) {
            errors.push('Expected BreadcrumbList in JSON-LD');
          }

          const qaNode = graph.find(item => item['@type'] === 'QAPage');
          if (qaNode) {
            if (!qaNode.mainEntity || !qaNode.mainEntity.name || !qaNode.mainEntity.acceptedAnswer) {
              errors.push('QAPage mainEntity structure incomplete');
            } else {
              if (!qaNode.mainEntity.datePublished) {
                errors.push('Missing datePublished in QAPage mainEntity');
              }
              if (!qaNode.mainEntity.author) {
                errors.push('Missing author in QAPage mainEntity');
              } else if (!qaNode.mainEntity.author.url) {
                errors.push('Missing url in QAPage mainEntity.author');
              }
              if (typeof qaNode.mainEntity.upvoteCount !== 'number') {
                errors.push('Missing or invalid upvoteCount in QAPage mainEntity');
              }
              if (!qaNode.mainEntity.url) {
                errors.push('Missing url in QAPage mainEntity');
              }
              if (!qaNode.mainEntity.acceptedAnswer.datePublished) {
                errors.push('Missing datePublished in QAPage mainEntity.acceptedAnswer');
              }
              if (!qaNode.mainEntity.acceptedAnswer.author) {
                errors.push('Missing author in QAPage mainEntity.acceptedAnswer');
              } else if (!qaNode.mainEntity.acceptedAnswer.author.url) {
                errors.push('Missing url in QAPage mainEntity.acceptedAnswer.author');
              }
              if (typeof qaNode.mainEntity.acceptedAnswer.upvoteCount !== 'number') {
                errors.push('Missing or invalid upvoteCount in QAPage mainEntity.acceptedAnswer');
              }
            }
          }
        } else if (pageType === 'hub' || pageType === 'category') {
          if (!types.includes('CollectionPage')) {
            errors.push(`Expected CollectionPage in JSON-LD, found: ${types.join(', ')}`);
          }
          if (!types.includes('BreadcrumbList')) {
            errors.push('Expected BreadcrumbList in JSON-LD');
          }
        } else if (pageType === 'theory') {
          if (!types.includes('Article')) {
            errors.push(`Expected Article in JSON-LD, found: ${types.join(', ')}`);
          }
          if (!types.includes('BreadcrumbList')) {
            errors.push('Expected BreadcrumbList in JSON-LD');
          }
        } else if (pageType === 'question') {
          if (!types.includes('Quiz')) {
            errors.push(`Expected Quiz in JSON-LD, found: ${types.join(', ')}`);
          }
          if (!types.includes('BreadcrumbList')) {
            errors.push('Expected BreadcrumbList in JSON-LD');
          }
          const quizNode = graph.find(item => item['@type'] === 'Quiz');
          if (quizNode && Array.isArray(quizNode.hasPart)) {
            for (const q of quizNode.hasPart) {
              if (q['@type'] === 'Question' && q.acceptedAnswer) {
                if (!q.acceptedAnswer.author) {
                  errors.push('Missing author in Quiz question acceptedAnswer');
                } else if (!q.acceptedAnswer.author.url) {
                  errors.push('Missing url in Quiz question acceptedAnswer.author');
                }
              }
            }
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

// 1. Validate Homepage
const homeFile = path.join(outDir, 'index.html');
if (fs.existsSync(homeFile)) {
  validatePageHtml(homeFile, '/', 'home');
}

// 2. Validate Dilemmas Hub (/dileme/index.html)
const hubFile = path.join(dilemmasDir, 'index.html');
if (fs.existsSync(hubFile)) {
  validatePageHtml(hubFile, '/dileme/', 'hub');
}

// 3. Validate Theory Hub (/teorie/index.html)
const teorieHubFile = path.join(teorieDir, 'index.html');
if (fs.existsSync(teorieHubFile)) {
  validatePageHtml(teorieHubFile, '/teorie/', 'hub');
}

// 4. Validate Grile Hub (/grile/index.html)
const grileHubFile = path.join(grileDir, 'index.html');
if (fs.existsSync(grileHubFile)) {
  validatePageHtml(grileHubFile, '/grile/', 'hub');
}

// 5. Validate Category Hubs (/dileme/categorie/*/index.html)
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

// 6. Validate Dilemma Detail Pages (/dileme/*/index.html)
if (fs.existsSync(dilemmasDir)) {
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
}

// 7. Validate Theory Node Pages (including LES-S3-07)
if (fs.existsSync(teorieDir)) {
  const tItems = fs.readdirSync(teorieDir);
  for (const item of tItems) {
    if (item === 'index.html') continue;
    const itemPath = path.join(teorieDir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      const pageHtml = path.join(itemPath, 'index.html');
      if (fs.existsSync(pageHtml)) {
        validatePageHtml(pageHtml, `/teorie/${item}/`, 'theory');
      }
    }
  }
}

// 8. Validate Question Pages (including GRI-028)
if (fs.existsSync(grileDir)) {
  const qItems = fs.readdirSync(grileDir);
  for (const item of qItems) {
    if (item === 'index.html' || item === 'node') continue;
    const itemPath = path.join(grileDir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      const pageHtml = path.join(itemPath, 'index.html');
      if (fs.existsSync(pageHtml)) {
        validatePageHtml(pageHtml, `/grile/${item}/`, 'question');
      }
    }
  }
}

// 9. Validate Sitemap XML
const sitemapFile = path.join(outDir, 'sitemap.xml');
totalTested++;
if (!fs.existsSync(sitemapFile)) {
  failures++;
  console.error('✖ FAIL [sitemap.xml]: Missing sitemap.xml in out directory.');
} else {
  const sitemapXml = fs.readFileSync(sitemapFile, 'utf8');
  const sitemapErrors = [];
  if (!sitemapXml.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
    sitemapErrors.push('Missing XML declaration');
  }
  if (!sitemapXml.includes('<urlset') || !sitemapXml.includes('</urlset>')) {
    sitemapErrors.push('Malformed <urlset> in sitemap');
  }
  const locMatches = Array.from(sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)).map(m => m[1]);
  if (locMatches.length < 500) {
    sitemapErrors.push(`Too few URLs in sitemap (${locMatches.length})`);
  }
  const nonHttps = locMatches.filter(u => !u.startsWith('https://gramapedia.ro/'));
  if (nonHttps.length > 0) {
    sitemapErrors.push(`Found non-HTTPS or non-canonical URLs in sitemap: ${nonHttps.slice(0, 3).join(', ')}`);
  }
  const missingLastmod = (sitemapXml.match(/<url>/g) || []).length - (sitemapXml.match(/<lastmod>/g) || []).length;
  if (missingLastmod > 0) {
    sitemapErrors.push(`${missingLastmod} URLs are missing <lastmod>`);
  }

  // Check required prioritized pages in sitemap
  const requiredSitemapPages = [
    'https://gramapedia.ro/',
    'https://gramapedia.ro/teorie/',
    'https://gramapedia.ro/grile/',
    'https://gramapedia.ro/teorie/LES-S3-07/',
    'https://gramapedia.ro/grile/GRI-028/',
    'https://gramapedia.ro/dileme/virgula-dar/',
    'https://gramapedia.ro/dileme/al-carui/',
    'https://gramapedia.ro/dileme/cincizeci-si-una/'
  ];
  for (const reqPage of requiredSitemapPages) {
    if (!locMatches.includes(reqPage)) {
      sitemapErrors.push(`Prioritized page missing from sitemap: ${reqPage}`);
    }
  }

  if (sitemapErrors.length > 0) {
    failures++;
    console.error('✖ FAIL [sitemap.xml]:');
    sitemapErrors.forEach(e => console.error(`    - ${e}`));
  }
}

// 10. Validate Robots.txt
const robotsFile = path.join(outDir, 'robots.txt');
totalTested++;
if (!fs.existsSync(robotsFile)) {
  failures++;
  console.error('✖ FAIL [robots.txt]: Missing robots.txt in out directory.');
} else {
  const robotsTxt = fs.readFileSync(robotsFile, 'utf8');
  const robotsErrors = [];
  if (!robotsTxt.includes('User-Agent: *')) robotsErrors.push('Missing User-Agent: *');
  if (!robotsTxt.includes('Sitemap: https://gramapedia.ro/sitemap.xml')) {
    robotsErrors.push('Missing or incorrect Sitemap directive');
  }
  if (robotsErrors.length > 0) {
    failures++;
    console.error('✖ FAIL [robots.txt]:');
    robotsErrors.forEach(e => console.error(`    - ${e}`));
  }
}

console.log(`\nValidation Summary:`);
console.log(`  Total checks tested: ${totalTested}`);
console.log(`  Passed: ${totalTested - failures}`);
console.log(`  Failed: ${failures}`);

if (failures > 0) {
  console.error(`\n✖ SEO validation failed with ${failures} errors.`);
  process.exit(1);
} else {
  console.log(`\n✔ All ${totalTested} SEO, sitemap, and structured data checks PASSED!`);
  process.exit(0);
}

