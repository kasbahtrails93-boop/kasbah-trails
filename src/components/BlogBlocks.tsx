import type { BlogBlock } from "@/lib/blog";
import { slugify } from "@/lib/slugify";
import RichText from "./RichText";

export default function BlogBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if (b.type === "h2") {
          return (
            <h2 key={i} id={slugify(b.text)} className="scroll-mt-28 pt-8 text-[1.85rem]">
              {b.text}
            </h2>
          );
        }
        if (b.type === "ul") {
          return (
            <ul key={i} className="space-y-2.5 text-[1.02rem] leading-[1.8]">
              {b.items.map((item, j) => (
                <li key={j} className="flex gap-3">
                  <span aria-hidden className="mt-[0.75em] h-1.5 w-1.5 shrink-0 rotate-45 bg-terra" />
                  <span>
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-[1.06rem] leading-[1.9]">
            <RichText text={b.text} />
          </p>
        );
      })}
    </div>
  );
}
