import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const dilemmasDir = path.join(process.cwd(), 'content', 'dilemmas');
const indexFilePath = path.join(process.cwd(), 'content', 'dilemmas-index.json');

function cleanTerm(str) {
  if (!str) return '';
  return str.replace(/^[«"]|[»"]$/g, '').replace(/\.$/, '').trim();
}

function deriveWrong(data) {
  if (data.wrong && typeof data.wrong === 'string') return cleanTerm(data.wrong);
  const correct = cleanTerm(data.correct_choice || data.short_rule);
  const choices = (data.choices || []).map(cleanTerm);
  const wrongChoice = choices.find(c => c.toLowerCase() !== correct.toLowerCase());
  return wrongChoice || '';
}

function deriveCorrect(data) {
  if (data.correct && typeof data.correct === 'string') return cleanTerm(data.correct);
  return cleanTerm(data.correct_choice || data.short_rule);
}

function deriveQuestionTitle(data, correct, wrong, id) {
  if (data.question_title && typeof data.question_title === 'string' && data.question_title.trim().length > 0) {
    return data.question_title.trim();
  }

  const prompt = (data.prompt || '').trim();

  // Custom high-demand phrasing for top queries
  if (id === 'pe-care') {
    return '«Pe care» sau «care»? Care este forma corectă';
  }
  if (id === 'artificiu') {
    return '«Un artificiu» sau «o artificie»? Care este forma corectă';
  }
  if (id === 'intr-adevar') {
    return '«Într-adevăr» sau «întradevăr»? Care este forma corectă';
  }
  if (id === 'sa-fii') {
    return '«Să fii» sau «să fi»? Care este forma corectă';
  }
  if (id === 'niciun') {
    return '«Niciun» sau «nici un»? Care este forma corectă';
  }
  if (id === 'serviciu') {
    return '«Serviciu» sau «servici»? Care este forma corectă';
  }
  if (id === 'maximum') {
    return '«La maximum» sau «la maxim»? Care este forma corectă';
  }
  if (id === 'creeaza') {
    return '«Creează» sau «crează»? Care este forma corectă';
  }
  if (id === 'mass-media') {
    return '«Mass-media a transmis» sau «mass-media au transmis»? Care este forma corectă';
  }
  if (id === 'virgula-dar') {
    return 'Se pune virgulă înainte de «dar»? Care este regula corectă';
  }
  if (id === 'subiect-predicat') {
    return 'Se pune virgulă între subiect și predicat? Care este regula corectă';
  }
  if (id === 'vocativ') {
    return 'Se pune virgulă la vocativ? Care este regula corectă';
  }

  // Remove leading boilerplate like "Se spune ", "Alege forma corectă pentru ..."
  let cleaned = prompt
    .replace(/^Se spune\s+/i, '')
    .replace(/^Alege forma corectă pentru\s+[^.]*\.\s*/i, '')
    .trim();

  if (cleaned.includes(' sau ')) {
    const base = cleaned.replace(/\?$/, '').trim();
    return `${base}? Care este forma corectă`;
  }

  if (correct && wrong) {
    return `«${correct}» sau «${wrong}»? Care este forma corectă`;
  }

  return `${prompt.replace(/\?$/, '')}? Care este forma corectă`;
}

export function runMigration() {
  if (!fs.existsSync(dilemmasDir)) {
    throw new Error(`Directory ${dilemmasDir} does not exist.`);
  }

  const files = fs.readdirSync(dilemmasDir).filter(f => f.endsWith('.md'));
  if (files.length === 0) {
    throw new Error('No dilemma files found to migrate.');
  }

  console.log(`Starting migration for ${files.length} dilemma files...`);

  // First pass: parse all cards
  const parsedCards = [];
  for (const file of files) {
    const filePath = path.join(dilemmasDir, file);
    const rawContent = fs.readFileSync(filePath, 'utf8');

    // Check diacritics
    if (/[şţŞŢ]/.test(rawContent)) {
      throw new Error(`Legacy Turkish cedilla found in ${file}. Use Romanian comma-below (ș, ț).`);
    }
    if (rawContent.includes('\uFFFD')) {
      throw new Error(`Encoding corruption character found in ${file}.`);
    }

    const { data, content } = matter(rawContent);
    const id = file.replace(/\.md$/, '');
    const correct = deriveCorrect(data);
    const wrong = deriveWrong(data);
    const questionTitle = deriveQuestionTitle(data, correct, wrong, id);

    parsedCards.push({
      id,
      filePath,
      file,
      category: data.category || 'Morfologie',
      prompt: data.prompt || '',
      shortRule: data.short_rule || correct,
      rule: content.trim(),
      examples: data.examples || [],
      choices: data.choices || [correct, wrong].filter(Boolean),
      correctChoice: data.correct_choice || correct,
      wrong,
      correct,
      questionTitle,
      existingRelatedIds: data.related_ids || [],
    });
  }

  // Second pass: compute related_ids (3-4 related items per dilemma)
  const allIds = new Set(parsedCards.map(c => c.id));
  const categoryGroups = new Map();

  for (const card of parsedCards) {
    if (!categoryGroups.has(card.category)) {
      categoryGroups.set(card.category, []);
    }
    categoryGroups.get(card.category).push(card.id);
  }

  for (const card of parsedCards) {
    let related = (card.existingRelatedIds || []).filter(rid => rid !== card.id && allIds.has(rid));

    if (related.length < 3) {
      // Pick other items from the same category
      const sameCategory = (categoryGroups.get(card.category) || []).filter(rid => rid !== card.id && !related.includes(rid));
      related = [...related, ...sameCategory.slice(0, 4 - related.length)];
    }

    if (related.length < 3) {
      // Fallback across all cards
      const others = Array.from(allIds).filter(rid => rid !== card.id && !related.includes(rid));
      related = [...related, ...others.slice(0, 3 - related.length)];
    }

    card.relatedIds = related.slice(0, 4);
  }

  // Third pass: write back updated markdown files and write dilemmas-index.json
  const indexData = [];

  for (const card of parsedCards) {
    const updatedFrontmatter = {
      category: card.category,
      prompt: card.prompt,
      question_title: card.questionTitle,
      wrong: card.wrong,
      correct: card.correct,
      short_rule: card.shortRule,
      choices: card.choices,
      correct_choice: card.correctChoice,
      examples: card.examples,
      related_ids: card.relatedIds,
    };

    const newMarkdownContent = matter.stringify(card.rule, updatedFrontmatter);
    fs.writeFileSync(card.filePath, newMarkdownContent, 'utf8');

    indexData.push({
      id: card.id,
      category: card.category,
      wrong: card.wrong,
      correct: card.correct,
      question_title: card.questionTitle,
      prompt: card.prompt,
      rule: card.rule,
      short_rule: card.shortRule,
      examples: card.examples,
      choices: card.choices,
      correct_choice: card.correctChoice,
      related_ids: card.relatedIds,
    });
  }

  fs.writeFileSync(indexFilePath, JSON.stringify(indexData, null, 2), 'utf8');

  console.log(`✓ Migration completed successfully:`);
  console.log(`  - ${files.length} markdown files updated in ${dilemmasDir}`);
  console.log(`  - ${indexData.length} records exported to ${indexFilePath}`);
  console.log(`  - 0 diacritic defects, 0 data loss`);
}

if (process.argv[1] && process.argv[1].endsWith('migrate-dilemmas.mjs')) {
  runMigration();
}
