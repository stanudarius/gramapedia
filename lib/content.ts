import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { ContestEdition, GrammarCase } from '@/lib/site-data';

const contentDirectory = path.join(process.cwd(), 'content');
const dilemmasDirectory = path.join(contentDirectory, 'dilemmas');
const competitionsDirectory = path.join(contentDirectory, 'competitions');

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

      return {
        id,
        category: data.category,
        prompt: data.prompt,
        answer: data.short_rule,
        rule: content.trim(),
        examples: data.examples || [],
        choices: data.choices || [],
        correctChoice: data.correct_choice,
      };
    });

  return dilemmas;
}

export function getDilemma(id: string): GrammarCase | undefined {
  const fullPath = path.join(dilemmasDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) return undefined;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    id,
    category: data.category,
    prompt: data.prompt,
    answer: data.short_rule,
    rule: content.trim(),
    examples: data.examples || [],
    choices: data.choices || [],
    correctChoice: data.correct_choice,
  };
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
