import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getQuestions, getQuestionsForNode, getTheoryNodes } from "@/lib/knowledge";
import { categoryToSlug, getDilemmaCategories, getDilemmas, getDilemmasByCategory } from "@/lib/content";
import { POPULAR_VERBS } from "@/lib/conjugation/popular-verbs";
import { POPULAR_DICTIONARY_WORDS } from "@/lib/dictionary/popular-words";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const contentDir = path.join(process.cwd(), "content");
  const theoryFile = path.join(contentDir, "teorie-knowledge-graph.md");
  const questionsFile = path.join(contentDir, "grile-knowledge-graph.md");
  const dilemmasDir = path.join(contentDir, "dilemmas");

  const theoryMtime = fs.existsSync(theoryFile) ? fs.statSync(theoryFile).mtime : undefined;
  const questionsMtime = fs.existsSync(questionsFile) ? fs.statSync(questionsFile).mtime : undefined;

  const allDilemmas = getDilemmas();
  const dilemmaMtimes = new Map<string, Date>();
  let latestDilemmaMtime: Date | undefined;

  for (const dilemma of allDilemmas) {
    const filePath = path.join(dilemmasDir, `${dilemma.id}.md`);
    if (fs.existsSync(filePath)) {
      const mtime = fs.statSync(filePath).mtime;
      dilemmaMtimes.set(dilemma.id, mtime);
      if (!latestDilemmaMtime || mtime > latestDilemmaMtime) {
        latestDilemmaMtime = mtime;
      }
    }
  }

  const allNodes = getTheoryNodes();

  // Only include theory nodes that have readable body content to avoid thin-content pages
  const theoryUrls = allNodes
    .filter((node) => /^(CUR|SES|LES|SUP|FON|ORT|SIL|LEX|MOR|SIN)-/.test(node.id))
    .map((node) => ({
      url: `${siteConfig.url}/teorie/${node.id}/`,
      lastModified: theoryMtime,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    }));

  const questionUrls = getQuestions().map((question) => ({
    url: `${siteConfig.url}/grile/${question.id}/`,
    lastModified: questionsMtime,
    priority: 0.5,
    changeFrequency: "monthly" as const,
  }));

  // Only include node-grile pages that actually have questions (non-empty pages)
  const questionNodeUrls = allNodes
    .filter((node) => getQuestionsForNode(node.id).length > 0)
    .map((node) => ({
      url: `${siteConfig.url}/grile/node/${node.id}/`,
      lastModified: questionsMtime,
      priority: 0.3,
      changeFrequency: "monthly" as const,
    }));

  const categoryUrls = getDilemmaCategories().map((cat) => {
    const catDilemmas = getDilemmasByCategory(cat);
    let catLatestMtime: Date | undefined;
    for (const d of catDilemmas) {
      const mtime = dilemmaMtimes.get(d.id);
      if (mtime && (!catLatestMtime || mtime > catLatestMtime)) {
        catLatestMtime = mtime;
      }
    }
    return {
      url: `${siteConfig.url}/dileme/categorie/${categoryToSlug(cat)}/`,
      lastModified: catLatestMtime || latestDilemmaMtime,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    };
  });

  const dilemmaUrls = allDilemmas.map((dilemma) => ({
    url: `${siteConfig.url}/dileme/${dilemma.id}/`,
    lastModified: dilemmaMtimes.get(dilemma.id) || latestDilemmaMtime,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  const rootMtime = latestDilemmaMtime && theoryMtime && latestDilemmaMtime > theoryMtime
    ? latestDilemmaMtime
    : theoryMtime;

  const verbUrls = POPULAR_VERBS.map((v) => ({
    url: `${siteConfig.url}/conjugare/${v.slug}/`,
    lastModified: rootMtime,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const dictionaryUrls = POPULAR_DICTIONARY_WORDS.map((w) => ({
    url: `${siteConfig.url}/dictionar/${w.slug}/`,
    lastModified: rootMtime,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: rootMtime,
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${siteConfig.url}/dileme/`,
      lastModified: latestDilemmaMtime,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${siteConfig.url}/teorie/`,
      lastModified: theoryMtime,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${siteConfig.url}/grile/`,
      lastModified: questionsMtime,
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${siteConfig.url}/conjugare/`,
      lastModified: rootMtime,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${siteConfig.url}/dictionar/`,
      lastModified: rootMtime,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    ...categoryUrls,
    ...dilemmaUrls,
    ...verbUrls,
    ...dictionaryUrls,
    ...theoryUrls,
    ...questionUrls,
    ...questionNodeUrls,
  ];
}

