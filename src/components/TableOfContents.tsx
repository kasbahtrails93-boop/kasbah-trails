import type { BlogBlock } from "@/lib/blog";
import { slugify } from "@/lib/slugify";

export default function TableOfContents({ blocks }: { blocks: BlogBlock[] }) {
  const headings = blocks.filter((b): b is Extract<BlogBlock, { type: "h2" }> => b.type === "h2");
  if (headings.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="mb-8 rounded-2xl border border-line bg-sand-2 p-5">
      <p className="mb-3 text-xs font-bold tracking-wide text-muted">In this guide</p>
      <ol className="space-y-1.5 text-sm">
        {headings.map((h) => (
          <li key={h.text}>
            <a href={`#${slugify(h.text)}`} className="text-terracotta hover:underline">
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
