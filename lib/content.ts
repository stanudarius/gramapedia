import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { ContestEdition, GrammarCase } from '@/lib/site-data';

const contentDirectory = path.join(process.cwd(), 'content');
const dilemmasDirectory = path.join(contentDirectory, 'dilemmas');
const competitionsDirectory = path.join(contentDirectory, 'competitions');

function cleanTerm(str: string): string {
  if (!str) return '';
  return str.replace(/^[«"]|[»"]$/g, '').replace(/\.$/, '').trim();
}

export function getDilemmas(): GrammarCase[] {
  if (!fs.existsSync(dilemmasDirectory)) return [];

  const fileNames = fs.readdirSync(dilemmasDirectory);
  const dilemmas = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(dilemmasDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data, content } = matter(fileContents);
      const correct = cleanTerm(data.correct || data.correct_choice || data.short_rule || '');
      const wrongChoice = (data.choices || []).find((c: string) => cleanTerm(c).toLowerCase() !== correct.toLowerCase());
      const wrong = cleanTerm(data.wrong || wrongChoice || '');

      return {
        id,
        category: data.category || 'Morfologie',
        prompt: data.prompt || '',
        answer: data.short_rule || correct,
        rule: content.trim(),
        examples: data.examples || [],
        choices: data.choices || [],
        correctChoice: data.correct_choice || correct,
        wrong,
        correct,
        questionTitle: data.question_title || data.prompt || '',
        relatedIds: data.related_ids || [],
      };
    });

  return dilemmas;
}

export function getDilemma(id: string): GrammarCase | undefined {
  const fullPath = path.join(dilemmasDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) return undefined;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const correct = cleanTerm(data.correct || data.correct_choice || data.short_rule || '');
  const wrongChoice = (data.choices || []).find((c: string) => cleanTerm(c).toLowerCase() !== correct.toLowerCase());
  const wrong = cleanTerm(data.wrong || wrongChoice || '');

  return {
    id,
    category: data.category || 'Morfologie',
    prompt: data.prompt || '',
    answer: data.short_rule || correct,
    rule: content.trim(),
    examples: data.examples || [],
    choices: data.choices || [],
    correctChoice: data.correct_choice || correct,
    wrong,
    correct,
    questionTitle: data.question_title || data.prompt || '',
    relatedIds: data.related_ids || [],
  };
}

export const CATEGORY_MAP: Record<string, string> = {
  "lexicosemantica": "Lexicosemantică",
  "sintaxa": "Sintaxă",
  "morfologie": "Morfologie",
  "ortografie": "Ortografie",
  "punctuatie": "Punctuație",
};

export const REVERSE_CATEGORY_MAP: Record<string, string> = {
  "Lexicosemantică": "lexicosemantica",
  "Sintaxă": "sintaxa",
  "Morfologie": "morfologie",
  "Ortografie": "ortografie",
  "Punctuație": "punctuatie",
};

export function categoryToSlug(category: string): string {
  return REVERSE_CATEGORY_MAP[category] || category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-");
}

export function slugToCategory(slug: string): string | undefined {
  return CATEGORY_MAP[slug];
}

export function getDilemmaCategories(): string[] {
  return ["Lexicosemantică", "Sintaxă", "Morfologie", "Ortografie", "Punctuație"];
}

export function getDilemmasByCategory(category: string): GrammarCase[] {
  return getDilemmas().filter(d => d.category.toLowerCase() === category.toLowerCase());
}

export function getRelatedDilemmas(dilemma: GrammarCase, limit = 4): GrammarCase[] {
  const all = getDilemmas();
  const allMap = new Map(all.map(d => [d.id, d]));

  const direct = (dilemma.relatedIds || [])
    .map(id => allMap.get(id))
    .filter((d): d is GrammarCase => d !== undefined && d.id !== dilemma.id);

  if (direct.length >= limit) {
    return direct.slice(0, limit);
  }

  // Add same-category dilemmas
  const sameCategory = all.filter(
    d => d.id !== dilemma.id && d.category === dilemma.category && !direct.some(item => item.id === d.id)
  );

  return [...direct, ...sameCategory].slice(0, limit);
}

export function getCompetitions(): ContestEdition[] {
  if (!fs.existsSync(competitionsDirectory)) return [];

  const fileNames = fs.readdirSync(competitionsDirectory);
  const competitions = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(competitionsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data } = matter(fileContents);

      return {
        edition: data.edition,
        year: data.year,
        date: data.date,
        poster: data.poster,
        posterAlt: data.posterAlt,
        subjectUrl: data.subjectUrl,
        rubricUrl: data.rubricUrl,
      };
    });

  return competitions.sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));
}
