import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const dilemmasDir = path.join(process.cwd(), 'content', 'dilemmas');
const pendingDir = path.join(process.cwd(), 'content', 'pending-review');
const reportsDir = path.join(process.cwd(), 'reports');
const reportFile = path.join(reportsDir, 'dexonline-diff-report.md');

import { COMPETITIVE_TARGET_LIST } from './analyze-competitive-gap.mjs';

function normalize(str) {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

async function fetchDexonlinePairs() {
  const url = 'https://dexonline.ro/ghid-de-exprimare-corecta';
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Gramapedia-Content-Maintenance/1.0' },
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    // Parse pairs if available from HTML structure
    const extracted = [];
    const rowRegex = /<tr[^>]*>[\s\S]*?<td[^>]*>(.*?)<\/td>[\s\S]*?<td[^>]*>(.*?)<\/td>[\s\S]*?<\/tr>/gi;
    let match;
    while ((match = rowRegex.exec(html)) !== null) {
      const wrong = match[1].replace(/<[^>]+>/g, '').trim();
      const correct = match[2].replace(/<[^>]+>/g, '').trim();
      if (wrong && correct && wrong !== correct) {
        extracted.push({ wrong, correct, category: 'Ortografie', source: 'dexonline-live' });
      }
    }
    if (extracted.length > 0) {
      return { source: 'dexonline-live', pairs: extracted };
    }
  } catch {
    // Graceful fallback when offline or in sandbox
  }
  return { source: 'curated-reference', pairs: COMPETITIVE_TARGET_LIST };
}

export async function runDexonlineDiff() {
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });

  const liveFiles = fs.readdirSync(dilemmasDir).filter(f => f.endsWith('.md'));
  const liveCards = liveFiles.map(f => {
    const raw = fs.readFileSync(path.join(dilemmasDir, f), 'utf8');
    const { data } = matter(raw);
    return {
      id: f.replace(/\.md$/, ''),
      correct: data.correct || '',
      wrong: data.wrong || ''
    };
  });

  const { source, pairs } = await fetchDexonlinePairs();

  const missingPairs = [];
  const coveredPairs = [];

  for (const pair of pairs) {
    const normCorrect = normalize(pair.correct);
    const normWrong = normalize(pair.wrong);

    const match = liveCards.find(c => {
      const liveNormC = normalize(c.correct);
      const liveNormW = normalize(c.wrong);
      return (liveNormC === normCorrect && liveNormW === normWrong) ||
             (liveNormC.includes(normCorrect) && normCorrect.length > 3);
    });

    if (match) {
      coveredPairs.push({ ...pair, liveId: match.id });
    } else {
      missingPairs.push(pair);
    }
  }

  const report = `# Raport Săptămânal de Mentenanță și Gap dexonline.ro
Data: ${new Date().toISOString().split('T')[0]}
Sursă date: ${source}

## Sumar
- **Perechi analizate**: ${pairs.length}
- **Perechi deja acoperite live**: ${coveredPairs.length}
- **Perechi noi / neacoperite identificate**: ${missingPairs.length}
- **Grad de acoperire**: ${Math.round((coveredPairs.length / pairs.length) * 100)}%

## Perechi noi propuse pentru review:
${missingPairs.length === 0 ? '_Toate perechile analizate sunt deja acoperite în Gramapedia._' : missingPairs.map((p, idx) => `
${idx + 1}. **«${p.correct}»** vs **«${p.wrong}»**
   - Categorie: ${p.category}
   - Notă: ${p.rule || 'Propunere din ghidul dexonline / competitori'}
`).join('')}

---
*Acest raport este rulat automat în CI pentru a monitoriza noile perechi apărute în spațiul lingvistic.*
`;

  fs.writeFileSync(reportFile, report, 'utf8');
  console.log(`Raport salvat în: ${path.relative(process.cwd(), reportFile)}`);
  console.log(`Perechi analizate: ${pairs.length} | Acoperite: ${coveredPairs.length} | Noi: ${missingPairs.length}`);

  if (process.argv.includes('--draft-new') && missingPairs.length > 0) {
    if (!fs.existsSync(pendingDir)) fs.mkdirSync(pendingDir, { recursive: true });
    let created = 0;
    for (const item of missingPairs) {
      const slug = item.correct.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      const dest = path.join(pendingDir, `${slug}.md`);
      if (!fs.existsSync(dest)) {
        const frontmatter = {
          category: item.category,
          prompt: `Se spune «${item.wrong}» sau «${item.correct}»?`,
          question_title: `«${item.correct}» sau «${item.wrong}»? Care este forma corectă`,
          wrong: item.wrong,
          correct: item.correct,
          short_rule: item.correct,
          choices: [item.correct, item.wrong],
          correct_choice: item.correct,
          examples: [`Exemplu de utilizare corectă pentru «${item.correct}».`],
          tags: ["dexonline-ghid", item.category.toLowerCase()],
          status: "pending-review",
          created_at: new Date().toISOString()
        };
        fs.writeFileSync(dest, matter.stringify(item.rule || `Forma literară corectă este «${item.correct}».`, frontmatter), 'utf8');
        created++;
      }
    }
    console.log(`[GUARDRAIL]: ${created} propuneri create în content/pending-review/. Necesită revizuire umană!`);
  }
}

if (process.argv[1] && process.argv[1].endsWith('fetch-diff-dexonline.mjs')) {
  runDexonlineDiff().catch(console.error);
}
