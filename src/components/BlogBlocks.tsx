import type { BlogBlock } from "@/lib/blog";
import RichText from "./RichText";

export default function BlogBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if (b.type === "h2") {
          return (
            <h2 key={i} className="pt-2 font-serif text-2xl font-semibold text-espresso">
              {b.text}
            </h2>
          );
        }
        if (b.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-1.5 pl-5 text-ink">
              {b.items.map((item, j) => (
                <li key={j}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-[1.02rem] leading-relaxed text-ink">
            <RichText text={b.text} />
          </p>
        );
      })}
    </div>
  );
}
