import { Star } from "./Ornament";

// Section label: a small zellige star and tracked uppercase text.
export default function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p className={`eyebrow flex items-center gap-2.5 ${tone === "light" ? "text-sun" : "text-terra"} ${className}`}>
      <Star size={9} />
      {children}
    </p>
  );
}
