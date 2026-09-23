import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const pendingDir = path.join(process.cwd(), 'content', 'pending-review');

if (!fs.existsSync(pendingDir)) {
  console.log('Nu există nicio propunere în așteptare.');
  process.exit(0);
}

const files = fs.readdirSync(pendingDir).filter(f => f.endsWith('.md'));

if (files.length === 0) {
  console.log('Nu există nicio propunere în așteptare (0 drafturi).');
  process.exit(0);
}

console.log(`\n=== Dileme în așteptarea aprobării (${files.length}) ===\n`);

for (const file of files) {
  const content = fs.readFileSync(path.join(pendingDir, file), 'utf8');
  const { data } = matter(content);
  const slug = file.replace(/\.md$/, '');
  console.log(`• Slug: ${slug}`);
  console.log(`  Titlu: ${data.question_title || data.prompt}`);
  console.log(`  Categorie: ${data.category}`);
  console.log(`  Corect: ${data.correct} | Greșit: ${data.wrong}`);
  console.log(`  Dată propunere: ${data.created_at || 'N/A'}`);
  console.log(`  Comandă aprobare: node scripts/approve-dilemma.mjs --slug "${slug}" --reviewer "Nume Recenzor"\n`);
}
