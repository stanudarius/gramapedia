import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getQuestions, getTheoryNodes } from "@/lib/knowledge";
import { getDilemmas } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const theoryUrls = getTheoryNodes()
    .filter((node) => /^(CUR|SES|LES|SUP|FON|ORT|SIL|LEX|MOR|SIN)-/.test(node.id))
    .map((node) => ({
      url: `${siteConfig.url}/teorie/${node.id}/`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    }));

  const questionUrls = getQuestions().map((question) => ({
    url: `${siteConfig.url}/grile/${question.id}/`,
    priority: 0.5,
    changeFrequency: "monthly" as const,
  }));

  const questionNodeUrls = getTheoryNodes().map((node) => ({
    url: `${siteConfig.url}/grile/node/${node.id}/`,
    priority: 0.3,
    changeFrequency: "monthly" as const,
  }));

  const dilemmaUrls = getDilemmas().map((dilemma) => ({
    url: `${siteConfig.url}/dileme/${dilemma.id}/`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [
    { url: siteConfig.url, priority: 1, changeFrequency: "weekly" as const },
    { url: `${siteConfig.url}/teorie/`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${siteConfig.url}/grile/`, priority: 0.8, changeFrequency: "monthly" as const },
    ...dilemmaUrls,
    ...theoryUrls,
    ...questionUrls,
    ...questionNodeUrls,
  ];
}
