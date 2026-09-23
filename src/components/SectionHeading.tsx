import Eyebrow from "./Eyebrow";
import Ornament from "./Ornament";

// Section title block. Centred headings sit on an ornamented rule; left-aligned
// ones (used beside content) lead with the label.
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  id?: string;
}) {
  const light = tone === "light";
  if (align === "center") {
    return (
      <div className="reveal mx-auto flex max-w-[46rem] flex-col items-center text-center">
        {eyebrow && (
          <p className={`eyebrow ${light ? "text-sun" : "text-terra"}`}>{eyebrow}</p>
        )}
        <h2 id={id} className={`mt-4 text-h2 ${light ? "text-paper" : ""}`}>
          {title}
        </h2>
        <Ornament tone={tone} className="mt-5" />
        {intro && (
          <p className={`mt-5 text-[1.05rem] leading-relaxed ${light ? "text-paper/70" : "text-body"}`}>{intro}</p>
        )}
      </div>
    );
  }
  return (
    <div className="reveal max-w-[40rem]">
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 id={id} className={`mt-4 text-h2 ${light ? "text-paper" : ""}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-[1.05rem] leading-relaxed ${light ? "text-paper/70" : "text-body"}`}>{intro}</p>
      )}
    </div>
  );
}
