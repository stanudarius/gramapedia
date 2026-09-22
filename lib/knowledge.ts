import fs from "node:fs";
import path from "node:path";

export type TheoryNode = {
  id: string;
  title: string;
  level: number;
  type: string;
  body: string;
  parentId: string | null;
  childrenIds: string[];
  relatedIds: string[];
  sourceIds: string[];
  curriculumIds: string[];
  status: string | null;
};

export type QuestionOption = {
  label: string;
  text: string;
};

export type KnowledgeQuestion = {
  id: string;
  number: number;
  categoryId: string;
  categoryLabel: string;
  prompt: string;
  body: string;
  options: QuestionOption[];
  answerKey: string;
  relatedIds: string[];
  source: string | null;
};

const contentDirectory = path.join(process.cwd(), "content");
const theoryPath = path.join(contentDirectory, "teorie-knowledge-graph.md");
const questionsPath = path.join(contentDirectory, "grile-knowledge-graph.md");

const readContent = (filePath: string) => fs.readFileSync(filePath, "utf8");

const linkIds = (value: string | undefined) => {
  if (!value) return [];
  return Array.from(value.matchAll(/\[\[([^\]]+)\]\]/g), (match) => match[1]);
};

const metadataValue = (body: string, label: string) => {
  const pattern = new RegExp(`^- \\*\\*${label}:\\*\\*\\s*(.+)$`, "m");
  return body.match(pattern)?.[1]?.trim() ?? "";
};

const parseTheoryNodes = (): TheoryNode[] => {
  const content = readContent(theoryPath);
  const headings = Array.from(content.matchAll(/^(#{2,4}) `([^`]+)` — (.+)$/gm));

  return headings.map((heading, index) => {
    const level = heading[1].length;
    const start = heading.index! + heading[0].length;
    const nextHeading = headings.slice(index + 1).find((candidate) => candidate[1].length <= level);
    const end = nextHeading?.index ?? content.length;
    const body = content.slice(start, end).trim();
    const parentValue = metadataValue(body, "parent");
    const parentId = linkIds(parentValue)[0] ?? (parentValue.replaceAll("`", "") || null);

    const childrenIds = [
      ...linkIds(metadataValue(body, "children")),
      ...linkIds(metadataValue(body, "lessons")),
    ];

    return {
      id: heading[2],
      title: heading[3],
      level,
      type: metadataValue(body, "tip") || "nod",
      body,
      parentId,
      childrenIds: Array.from(new Set(childrenIds)),
      relatedIds: linkIds(metadataValue(body, "related")),
      sourceIds: linkIds(metadataValue(body, "source")),
      curriculumIds: linkIds(metadataValue(body, "curriculum")),
      status: metadataValue(body, "status").replaceAll("`", "") || null,
    };
  });
};

const cleanQuestionBody = (value: string) => value
  .replace(/\n\s*\d+\s*\n/g, "\n")
  .replace(/\n-{3,}\n/g, "\n")
  .trim();

const parseOptions = (body: string): QuestionOption[] => {
  const regex = /(?:(?:^|\n)\s*([a-d])[.)]\s*|\s+([a-d])\)\s*|\|\s*([a-d])[.)]\s*|\s+([a-d])\.\s+(?![A-Z]\.))/gi;
  const matches = Array.from(body.matchAll(regex));
  if (matches.length < 2) return [];

  return matches.map((match, index) => {
    const label = (match[1] || match[2] || match[3] || match[4]).toLowerCase();
    const start = match.index! + match[0].length;
    const end = matches[index + 1]?.index ?? body.length;
    return {
      label,
      text: body.slice(start, end).replace(/\s+/g, " ").replace(/\|/g, "").trim(),
    };
  });
};

const parseQuestions = (): KnowledgeQuestion[] => {
  const content = readContent(questionsPath);
  const categoryHeadings = Array.from(content.matchAll(/^## `(GRI-[A-Z]+)` — (.+)$/gm));
  const categoryLabels = new Map(categoryHeadings.map((match) => [match[1], match[2]]));
  const headings = Array.from(content.matchAll(/^### `(GRI-\d{3})` — Întrebarea (\d+)$/gm));

  return headings.map((heading, index) => {
    const start = heading.index! + heading[0].length;
    const end = headings[index + 1]?.index ?? content.length;
    const rawBlock = content.slice(start, end);
    let block = rawBlock.split("\n## Notă de implementare")[0];
    block = block.split(/\n---+/)[0]; // Prevent bleed to next section
    block = block.split(/\n## /)[0];
    const questionStart = block.indexOf("#### Enunț și variante");
    const body = cleanQuestionBody(questionStart >= 0 ? block.slice(questionStart + "#### Enunț și variante".length) : block);
    const primaryCategory = linkIds(metadataValue(block, "primary_category"))[0] ?? "GRI-ROOT";

    const firstOptionMatch = body.match(/(?:^|\n|\s|\|)[a-d][.)]\s*/i);
    const firstOptionIndex = firstOptionMatch ? firstOptionMatch.index! : -1;
    const rawPrompt = firstOptionIndex >= 0 ? body.slice(0, firstOptionIndex) : body;
    const prompt = rawPrompt
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .join("\n")
      .replace(/:$/, "")
      .trim();

    return {
      id: heading[1],
      number: Number(heading[2]),
      categoryId: primaryCategory,
      categoryLabel: categoryLabels.get(primaryCategory) ?? "Grile de antrenament",
      prompt,
      body,
      options: parseOptions(body),
      answerKey: metadataValue(block, "answer_key").replaceAll("`", "").toLowerCase().trim(),
      relatedIds: linkIds(metadataValue(block, "related")),
      source: metadataValue(block, "source").replaceAll("`", "") || null,
    };
  });
};

let theoryCache: TheoryNode[] | null = null;
let questionCache: KnowledgeQuestion[] | null = null;

const questionCategoryBySource = (sourceId: string) => {
  if (sourceId.startsWith("FON-") || sourceId === "SIL-001") return "GRI-FON";
  if (sourceId.startsWith("ORT-")) return "GRI-ORT";
  if (sourceId.startsWith("LEX-")) return "GRI-VOC";
  if (sourceId === "MOR-001") return "GRI-NUM";
  if (sourceId === "MOR-002") return "GRI-PRON";
  if (sourceId === "MOR-003") return "GRI-ART";
  if (sourceId === "MOR-004") return "GRI-ADJ";
  if (sourceId === "MOR-005") return "GRI-SUBST";
  if (sourceId === "MOR-006") return "GRI-VERB";
  if (sourceId === "MOR-007") return "GRI-ADV";
  if (sourceId === "MOR-008") return "GRI-CONJ";
  if (sourceId === "MOR-009") return "GRI-PREP";
  if (sourceId === "MOR-010") return "GRI-INT";
  if (sourceId.startsWith("SIN-")) return "GRI-SINT";
  return null;
};

const collectSourceIds = (nodeId: string, nodes: TheoryNode[], visited = new Set<string>()): string[] => {
  if (visited.has(nodeId)) return [];
  visited.add(nodeId);
  const node = nodes.find((item) => item.id === nodeId);
  if (!node) return [];

  return [
    ...node.sourceIds,
    ...node.childrenIds.flatMap((childId) => collectSourceIds(childId, nodes, visited)),
  ];
};

export function getTheoryNodes() {
  theoryCache ??= parseTheoryNodes();
  return theoryCache;
}

export function getTheoryNode(id: string) {
  return getTheoryNodes().find((node) => node.id === id) ?? null;
}

export function getTheoryUnits() {
  return getTheoryNodes().filter((node) => /^CUR-\d+$/.test(node.id));
}

export function getQuestions() {
  questionCache ??= parseQuestions();
  return questionCache;
}

export function getQuestion(id: string) {
  return getQuestions().find((question) => question.id === id) ?? null;
}

export function getQuestionsForNode(nodeId: string) {
  const nodes = getTheoryNodes();
  const sourceIds = collectSourceIds(nodeId, nodes);
  const sourceCategoryIds = sourceIds.map(questionCategoryBySource).filter((categoryId) => categoryId !== null);
  const categoryIds = new Set([
    nodeId,
    ...sourceCategoryIds,
  ]);

  return getQuestions().filter((question) => categoryIds.has(question.categoryId) || question.relatedIds.includes(nodeId));
}

export function getReadableTheoryBody(node: TheoryNode): string {
  if (node.id.startsWith("SES-")) {
    const allNodes = getTheoryNodes();
    const childBodies = node.childrenIds
      .map((childId) => allNodes.find((n) => n.id === childId))
      .filter((child): child is TheoryNode => Boolean(child))
      .map((child) => {
        const body = getReadableTheoryBody(child);
        if (!body) return "";
        return `## ${child.title}\n\n${body}`;
      })
      .filter(Boolean);

    if (childBodies.length > 0) {
      return childBodies.join("\n\n---\n\n");
    }
  }

  if (node.childrenIds.length > 0) return "";

  const marker = "### Conținut extras și normalizat";
  let content = node.body.includes(marker) ? node.body.slice(node.body.indexOf(marker) + marker.length) : node.body;

  // Strip developer implementation note that lives at the bottom of the file
  const implNote = "## Notă de implementare";
  if (content.includes(implNote)) {
    content = content.slice(0, content.indexOf(implNote));
  }

  return content
    .replace(/\$*\\?(?:r?ightarrow)\$*/gi, "→")
    .replace(/\$*\\?(?:l?eftarrow)\$*/gi, "←")
    .replace(/^- \*\*(?:tip|parent|children|lessons|notes|related|source|curriculum|status):\*\*.*$/gm, "")
    .split("\n")
    .filter((line) => line.trim() !== "---")
    .join("\n")
    .trim();
}

export function getTheoryExcerpt(node: TheoryNode) {
  const content = getReadableTheoryBody(node)
    .replace(/^#+\s+/gm, "")
    .replace(/^[=-]+\s*/gm, "")
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/!!(?:OBS|DAR)?!!\s*/gi, "")
    .replace(/!!/g, "")
    .replace(/Observa[tț]ie:\s*/gi, "")
    .replace(/➢/g, "—")
    .replace(/\s+/g, " ")
    .trim();

  if (content.length <= 220) return content;
  return `${content.slice(0, 217).trimEnd()}…`;
}
