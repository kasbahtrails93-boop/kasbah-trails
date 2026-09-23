import type { BlogBlock } from "@/lib/blog";
import { slugify } from "@/lib/slugify";

export default function TableOfContents({ blocks }: { blocks: BlogBlock[] }) {
  const headings = blocks.filter((b): b is Extract<BlogBlock, { type: "h2" }> => b.type === "h2");
  if (headings.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="mb-12 rounded-[var(--radius-card)] border-l-2 border-terra bg-sand p-6">
      <p className="eyebrow text-terra">In this guide</p>
      <ol className="mt-4 space-y-2 text-[0.95rem]">
        {headings.map((h) => (
          <li key={h.text}>
            <a href={`#${slugify(h.text)}`} className="text-ink underline-offset-4 hover:text-terra hover:underline">
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
