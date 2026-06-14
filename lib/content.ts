import fs from "node:fs";
import path from "node:path";
import { getChapter } from "./chapters";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

/** Convert a heading string into a URL-safe anchor id. Must match the
 *  slugifier used by the markdown renderer so in-page links line up. */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[`*_~]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Read the raw markdown for a chapter slug. */
export function getChapterMarkdown(slug: string): string {
  const chapter = getChapter(slug);
  if (!chapter) {
    throw new Error(`Unknown chapter slug: ${slug}`);
  }
  const filePath = path.join(CONTENT_DIR, chapter.file);
  return fs.readFileSync(filePath, "utf8");
}

/** Extract a table of contents (## and ### headings) from markdown,
 *  ignoring anything inside fenced code blocks. */
export function extractToc(markdown: string): TocItem[] {
  const lines = markdown.split("\n");
  const toc: TocItem[] = [];
  let inFence = false;

  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.*)$/.exec(line);
    if (match) {
      const level = match[1].length as 2 | 3;
      const text = match[2].replace(/[`*_~]/g, "").trim();
      toc.push({ id: slugifyHeading(text), text, level });
    }
  }
  return toc;
}

/** Rough reading time, kept as a fallback if chapter metadata is missing. */
export function estimateReadingMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
