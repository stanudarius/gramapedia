const ALLOWED_TAGS = new Set([
  "A", "ABBR", "B", "BLOCKQUOTE", "BR", "CODE", "DIV", "EM",
  "I", "LI", "OL", "P", "S", "SMALL", "SPAN", "STRONG", "SUB", "SUP", "U", "UL"
]);

const ALLOWED_ATTRS: Record<string, Set<string>> = {
  DEFAULT: new Set(["class", "title"]),
  A: new Set(["class", "title", "href", "target", "rel"]),
  ABBR: new Set(["class", "title"]),
};

/**
 * Sanitizes HTML representations returned by external dictionary APIs
 * before rendering in the workbench. Strips dangerous tags, scripts,
 * event handlers, and javascript: links.
 */
export function sanitizeDictionaryHtml(rawHtml: string): string {
  if (!rawHtml) return "";

  // Transform bootstrap popover attributes from DEX API to standard title attributes
  const processed = rawHtml
    .replace(/<abbr([^>]*)data-bs-content="([^"]+)"([^>]*)>/gi, '<abbr$1title="$2"$3>')
    .replace(/<abbr([^>]*)data-bs-toggle="popover"([^>]*)>/gi, "<abbr$1$2>");

  if (typeof window !== "undefined" && typeof DOMParser !== "undefined") {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(processed, "text/html");

      const sanitizeNode = (node: Node) => {
        const children = Array.from(node.childNodes);
        for (const child of children) {
          sanitizeNode(child);
        }

        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as HTMLElement;
          const tagName = el.tagName.toUpperCase();

          if (!ALLOWED_TAGS.has(tagName)) {
            const dangerousTags = new Set([
              "SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "FORM",
              "INPUT", "BUTTON", "SVG", "MATH", "LINK", "META"
            ]);
            if (dangerousTags.has(tagName)) {
              el.remove();
            } else {
              while (el.firstChild) {
                el.parentNode?.insertBefore(el.firstChild, el);
              }
              el.remove();
            }
            return;
          }

          const allowedAttrs = ALLOWED_ATTRS[tagName] || ALLOWED_ATTRS.DEFAULT;
          const attrNames = Array.from(el.attributes).map((a) => a.name);

          for (const name of attrNames) {
            const lowerName = name.toLowerCase();
            if (lowerName.startsWith("on") || !allowedAttrs.has(lowerName)) {
              el.removeAttribute(name);
              continue;
            }

            if (tagName === "A" && lowerName === "href") {
              const val = el.getAttribute(name)?.trim() || "";
              const isSafe = /^https?:\/\//i.test(val) || val.startsWith("/") || val.startsWith("#");
              if (!isSafe) {
                el.removeAttribute(name);
              } else {
                el.setAttribute("rel", "noopener noreferrer");
              }
            }
          }
        }
      };

      sanitizeNode(doc.body);
      return doc.body.innerHTML;
    } catch {
      // Fallback to regex sanitizer below if DOMParser throws
    }
  }

  // Fallback for SSR or non-DOM environments
  return processed
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
    .replace(/\son\w+\s*=\s*(["'][^"']*["']|[^\s>]+)/gi, "")
    .replace(/href\s*=\s*["']?\s*javascript:[^"'>\s]*["']?/gi, "");
}
