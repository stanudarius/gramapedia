import { Fragment, type ReactNode } from "react";
import { Info, AlertTriangle } from "lucide-react";

type KnowledgeContentProps = {
  content: string;
};

type ContentBlock =
  | { type: "heading"; level: 3 | 4; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered: boolean }
  | { type: "table"; rows: string[][] }
  | { type: "alert"; kind: "info" | "warning"; text: string };

const cleanInline = (value: string) => {
  const cleaned = value
    .replace(/^=+\s*/, "")
    .replace(/(?:^|\s*)>\s*(?:\[!(?:NOTE|TIP|WARNING|IMPORTANT|CAUTION)\])?\s*(?:>\s*)?/gi, " ")
    .replace(/➢/g, "—")
    .replace(/^(?:o|✓|▪|➢|·|•)\s*/u, "")
    .replace(/\$*\\?(?:r?ightarrow)\$*/gi, "→")
    .replace(/\$*\\?(?:l?eftarrow)\$*/gi, "←")
    .replace(/[ \t]+/g, " ")
    .trim();

  return cleaned === "t" ? "" : cleaned;
};

const isTableLine = (line: string) => line.trim().startsWith("|") && line.trim().endsWith("|");
const isTableSeparator = (line: string) => line.split("|").slice(1, -1).every((cell) => /^\s*:?-{2,}:?\s*$/.test(cell));
const isListLine = (line: string) => /^\s*(?:[-•✓▪➢·]\s*|\d+[.)]\s+)/.test(line);

const parseTableRow = (line: string) => line
  .trim()
  .split("|")
  .slice(1, -1)
  .map((cell) => cleanInline(cell));

const hasTableContent = (row: string[]) => row.some((cell) => cell.length > 0);

const compactTable = (rows: string[][]) => {
  const columnCount = Math.max(...rows.map((row) => row.length));
  const occupiedColumns = Array.from({ length: columnCount }, (_, columnIndex) =>
    rows.some((row) => Boolean(row[columnIndex])),
  );

  return rows.map((row) => row.filter((_, columnIndex) => occupiedColumns[columnIndex]));
};

const isHeadingLine = (line: string) => {
  if (/^(?:!!|Observa[tț]ie:|Dar:)/i.test(line)) return false;
  if (/^[IVX]+\.\s+/.test(line)) return true;
  if (line.length > 100 || line.endsWith(";") || line.endsWith(".")) return false;
  const letters = Array.from(line).filter((character) => /[A-Za-zĂÂÎȘȚăâîșț]/.test(character));
  return letters.length > 3 && letters.filter((character) => character === character.toUpperCase()).length / letters.length > 0.82;
};

const parseBlocks = (content: string): ContentBlock[] => {
  const rawLines = content.replace(/\r/g, "").split("\n");
  const lines: string[] = [];

  for (const rawLine of rawLines) {
    const trimmed = rawLine.trim();
    // Do not split headings, table rows, or blockquote lines
    if (trimmed.startsWith("#") || trimmed.startsWith("|") || trimmed.startsWith(">")) {
      lines.push(rawLine);
    } else {
      const split = rawLine.replace(/(?<!^)(?<!\w)(\d{1,2})\.\s*(?=[A-ZĂÂÎȘȚ])/g, "\n$1. ").split("\n");
      lines.push(...split);
    }
  }

  const blocks: ContentBlock[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  let listOrdered = false;
  let table: string[][] = [];
  let callout: string[] = [];
  let calloutKind: "info" | "warning" = "info";
  let blankLineEncountered = false;

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      const text = cleanInline(paragraph.join(" "));
      if (text) {
        const alertMatch = text.match(/^(?:!!(?:OBS|DAR)?!!\s*|!!\s*|Observa[tț]ie:\s*|Dar:\s*)/i);
        if (alertMatch) {
          blocks.push({ 
            type: "alert", 
            kind: alertMatch[0].toLowerCase().includes("dar") ? "warning" : "info",
            text: text.slice(alertMatch[0].length) 
          });
        } else {
          blocks.push({ type: "paragraph", text });
        }
      }
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list.length > 0) {
      blocks.push({ type: "list", items: list.map(cleanInline).filter(Boolean), ordered: listOrdered });
      list = [];
      listOrdered = false;
    }
  };

  const flushTable = () => {
    if (table.length > 0) {
      blocks.push({ type: "table", rows: compactTable(table) });
      table = [];
    }
  };

  const flushCallout = () => {
    if (callout.length > 0) {
      const text = cleanInline(callout.join(" "));
      if (text) {
        blocks.push({ type: "alert", kind: calloutKind, text });
      }
      callout = [];
      calloutKind = "info";
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === "t") continue;
    if (!trimmed) {
      flushParagraph();
      flushTable();
      flushCallout();
      blankLineEncountered = true;
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushParagraph();
      flushList();
      flushTable();
      const calloutHeader = trimmed.match(/^>\s*\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]/i);
      if (calloutHeader) {
        flushCallout();
        calloutKind = ["WARNING", "CAUTION"].includes(calloutHeader[1].toUpperCase()) ? "warning" : "info";
        const rest = trimmed.replace(/^>\s*\[!(?:NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]\s*(?:>\s*)?/i, "").trim();
        if (rest) callout.push(rest);
      } else {
        const text = trimmed.replace(/^>\s*/, "").trim();
        if (text) callout.push(text);
      }
      continue;
    } else {
      flushCallout();
    }

    if (isTableLine(trimmed)) {
      flushParagraph();
      flushList();
      if (!isTableSeparator(trimmed)) {
        const row = parseTableRow(trimmed);
        if (hasTableContent(row)) table.push(row);
      }
      continue;
    }

    if (table.length > 0) flushTable();

    // Check for markdown headings
    const heading = trimmed.match(/^(#{1,6})\s*(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const text = cleanInline(heading[2]);
      if (text) {
        blocks.push({ type: "heading", level: heading[1].length >= 4 ? 4 : 3, text });
      }
      continue;
    }

    if (isHeadingLine(trimmed)) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: trimmed.startsWith("I.") || trimmed.startsWith("II.") ? 3 : 4, text: cleanInline(trimmed) });
      continue;
    }

    if (isListLine(trimmed)) {
      flushParagraph();
      if (list.length === 0) listOrdered = /^\d+[.)]\s+/.test(trimmed);
      const item = trimmed.replace(/^[-•✓▪➢·]\s*/, "").replace(/^\d+[.)]\s+/, "");
      list.push(item);
      blankLineEncountered = false;
      continue;
    }

    if (list.length > 0) {
      if (blankLineEncountered) {
        flushList();
      } else {
        list[list.length - 1] += " " + trimmed;
        continue;
      }
    }

    paragraph.push(trimmed);
    blankLineEncountered = false;
  }

  flushParagraph();
  flushList();
  flushTable();
  flushCallout();
  return blocks;
};

const renderInline = (text: string): ReactNode => {
  const normalized = text
    .replace(/\$*\\?(?:r?ightarrow)\$*/gi, "→")
    .replace(/\$*\\?(?:l?eftarrow)\$*/gi, "←");
  const parts = normalized.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|!![^!]+!!)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return <code className="knowledge-code" key={index}>{part.slice(1, -1)}</code>;
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("*") && part.endsWith("*") && !part.startsWith("**")) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        if (part.startsWith("!!") && part.endsWith("!!")) {
          return <span className="knowledge-highlight" key={index}>{part.slice(2, -2)}</span>;
        }
        return <Fragment key={index}>{part.replace(/!!/g, "")}</Fragment>;
      })}
    </>
  );
};

export function KnowledgeContent({ content }: KnowledgeContentProps) {
  const blocks = parseBlocks(content);

  return (
    <div className="knowledge-content">
      <div className="knowledge-prose">
        {blocks.map((block, index): ReactNode => {
          if (block.type === "heading") {
            return block.level === 4 ? <h4 key={index}>{renderInline(block.text)}</h4> : <h3 key={index}>{renderInline(block.text)}</h3>;
          }
          if (block.type === "alert") {
            return (
              <div className={`knowledge-alert knowledge-alert--${block.kind}`} key={index}>
                <div className="knowledge-alert__icon">
                  {block.kind === "warning" ? <AlertTriangle size={18} /> : <Info size={18} />}
                </div>
                <div className="knowledge-alert__content">
                  {renderInline(block.text)}
                </div>
              </div>
            );
          }
          if (block.type === "list") {
            const List = block.ordered ? "ol" : "ul";
            return <List key={index}>{block.items.map((item, itemIndex) => <li key={`${index}-${itemIndex}`}>{renderInline(item)}</li>)}</List>;
          }
          if (block.type === "table") {
            const [header, ...rows] = block.rows;
            return (
              <div className="knowledge-table-wrap" key={index}>
                <table>
                  <thead><tr>{header?.map((cell, cellIndex) => <th key={`${index}-header-${cellIndex}`}>{renderInline(cell)}</th>)}</tr></thead>
                  <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{renderInline(cell)}</td>)}</tr>)}</tbody>
                </table>
              </div>
            );
          }
          return <p key={index}>{renderInline(block.text)}</p>;
        })}
      </div>
    </div>
  );
}

