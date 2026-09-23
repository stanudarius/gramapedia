import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { runMigration } from './migrate-dilemmas.mjs';

const pendingDir = path.join(process.cwd(), 'content', 'pending-review');
const liveDir = path.join(process.cwd(), 'content', 'dilemmas');

function parseArgs(args) {
  const result = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const next = args[i + 1];
      if (next && !next.startsWith('--')) {
        result[key] = next;
        i++;
      } else {
        result[key] = true;
      }
    }
  }
  return result;
}

export function approveDilemma() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.slug || !args.reviewer) {
    console.error(`
Eroare: Aprobarea necesită specificarea slug-ului și a numelui recenzorului uman.

Utilizare:
  node scripts/approve-dilemma.mjs --slug <slug> --reviewer "Prof. Ionescu" [--notes "Verificat conform DOOM3"]

Exemplu:
  node scripts/approve-dilemma.mjs --slug "artificiu-vs-artificie" --reviewer "Prof. Elena Radu"
    `);
    process.exit(1);
  }

  const slug = args.slug.replace(/\.md$/, '').trim();
  const reviewer = args.reviewer.trim();

  if (reviewer.length < 3) {
    console.error(`Eroare: Numele recenzorului («${reviewer}») este prea scurt. Specificați numele complet.`);
    process.exit(1);
  }

  const draftPath = path.join(pendingDir, `${slug}.md`);
  if (!fs.existsSync(draftPath)) {
    console.error(`Eroare: Fișierul draft nu a fost găsit la adresa: content/pending-review/${slug}.md`);
    process.exit(1);
  }

  const fileContent = fs.readFileSync(draftPath, 'utf8');
  const { data, content } = matter(fileContent);

  // Validate diacritics and content
  if (/[şţŞŢ]/.test(fileContent)) {
    console.error('Eroare: Fișierul conține sedile turcești (ş, ţ). Corectați cu virgule subscrise (ș, ț).');
    process.exit(1);
  }

  const targetPath = path.join(liveDir, `${slug}.md`);
  if (fs.existsSync(targetPath)) {
    console.warn(`Atenție: O regulă cu slug-ul "${slug}" există deja în live. Se va suprascrie.`);
  }

  // Update frontmatter with review metadata
  const updatedFrontmatter = {
    ...data,
    status: "published",
    reviewed_by: reviewer,
    reviewed_at: new Date().toISOString(),
    review_notes: args.notes || "Aprobat pentru publicare",
  };

  const newContent = matter.stringify(content.trim(), updatedFrontmatter);
  fs.writeFileSync(targetPath, newContent, 'utf8');
  fs.unlinkSync(draftPath);

  console.log(`\n✔ Regula a fost aprobată de [${reviewer}] și promovată în producție!`);
  console.log(`  Fișier mutat în: content/dilemmas/${slug}.md`);

  // Run migration to re-index all dilemmas and recompute relationships
  console.log(`\nActualizare index și relații între dileme...`);
  runMigration();

  console.log(`\n✔ Gata de construire și publicare: rulați 'npm run build' pentru a genera paginile statice.`);
}

if (process.argv[1] && process.argv[1].endsWith('approve-dilemma.mjs')) {
  approveDilemma();
}
