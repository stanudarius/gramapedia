import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const VALID_CATEGORIES = [
  "Lexicosemantică",
  "Sintaxă",
  "Morfologie",
  "Ortografie",
  "Punctuație"
];

const pendingDir = path.join(process.cwd(), 'content', 'pending-review');

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

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function cleanDiacritics(text) {
  if (!text) return '';
  // Convert Turkish cedillas to Romanian comma-below
  return text
    .replace(/ş/g, 'ș')
    .replace(/Ş/g, 'Ș')
    .replace(/ţ/g, 'ț')
    .replace(/Ţ/g, 'Ț');
}

export function addDilemma() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help || !args.correct || !args.wrong || !args.rule) {
    console.log(`
Gramapedia — Adăugare Dilemă Nouă (Draft)

Utilizare:
  node scripts/add-dilemma.mjs \\
    --category "Lexicosemantică" \\
    --correct "un artificiu" \\
    --wrong "o artificie" \\
    --prompt "Se spune «o artificie» sau «un artificiu»?" \\
    --rule "Forma corectă pentru sensul de procedeu ingenios este «un artificiu»." \\
    --examples "A găsit un artificiu.|Acest artificiu clarifică demonstrația." \\
    [--slug "artificiu-vs-artificie"]

Notă importantă:
  Noua intrare va fi salvată în starea PENDING-REVIEW (content/pending-review/).
  Nu va apărea pe site-ul public până când nu este aprobată explicit de un profesor / recenzor:
  node scripts/approve-dilemma.mjs --slug <slug> --reviewer "Nume Recenzor"
    `);
    process.exit(args.help ? 0 : 1);
  }

  const category = cleanDiacritics(args.category || 'Morfologie');
  if (!VALID_CATEGORIES.includes(category)) {
    console.error(`Eroare: Categorie invalidă "${category}". Categorii permise: ${VALID_CATEGORIES.join(', ')}`);
    process.exit(1);
  }

  const correct = cleanDiacritics(args.correct.trim());
  const wrong = cleanDiacritics(args.wrong.trim());
  const rule = cleanDiacritics(args.rule.trim());
  const prompt = cleanDiacritics(args.prompt ? args.prompt.trim() : `«${correct}» sau «${wrong}»?`);

  const questionTitle = cleanDiacritics(
    args['question-title'] || `${prompt.replace(/\?$/, '')}? Care este forma corectă`
  );

  const rawExamples = args.examples ? args.examples.split(/[|;]/).map(s => cleanDiacritics(s.trim())).filter(Boolean) : [];
  const examples = rawExamples.length > 0 ? rawExamples : [`Exemplu de utilizare corectă pentru «${correct}».`];

  const slug = args.slug ? slugify(args.slug) : slugify(`${correct}-vs-${wrong}`);
  const filePath = path.join(pendingDir, `${slug}.md`);

  if (!fs.existsSync(pendingDir)) {
    fs.mkdirSync(pendingDir, { recursive: true });
  }

  const frontmatter = {
    category,
    prompt,
    question_title: questionTitle,
    wrong,
    correct,
    short_rule: correct,
    choices: [correct, wrong],
    correct_choice: correct,
    examples,
    status: "pending-review",
    created_at: new Date().toISOString(),
  };

  const fileContent = matter.stringify(rule, frontmatter);
  fs.writeFileSync(filePath, fileContent, 'utf8');

  console.log(`\n✔ Dilemă adăugată cu succes în stadiul PENDING REVIEW:`);
  console.log(`  Fișier: content/pending-review/${slug}.md`);
  console.log(`  Întrebare: ${questionTitle}`);
  console.log(`  Corect: ${correct} | Greșit: ${wrong}`);
  console.log(`\n[GUARDRAIL]: Această regulă NU este încă publică.`);
  console.log(`Pentru publicare, este necesară aprobarea unui profesor / recenzor:`);
  console.log(`  node scripts/approve-dilemma.mjs --slug "${slug}" --reviewer "Nume Recenzor"\n`);
}

if (process.argv[1] && process.argv[1].endsWith('add-dilemma.mjs')) {
  addDilemma();
}
