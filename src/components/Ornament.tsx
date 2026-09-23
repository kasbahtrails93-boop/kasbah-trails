// Eight-point zellige star, the site's one decorative mark. Used small, beside
// section labels and between rules, never as a pattern on light pages.
export function Star({ className = "", size = 10 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden className={`shrink-0 ${className}`}>
      <path
        fill="currentColor"
        d="M10 0l2.3 5.4L17.1 2.9 14.6 7.7 20 10l-5.4 2.3 2.5 4.8-4.8-2.5L10 20l-2.3-5.4-4.8 2.5 2.5-4.8L0 10l5.4-2.3L2.9 2.9l4.8 2.5z"
      />
    </svg>
  );
}

// A short rule broken by the star, used under centred headings.
export default function Ornament({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const rule = tone === "light" ? "bg-sun/40" : "bg-sun-d/40";
  return (
    <span aria-hidden className={`flex items-center gap-3 ${className}`}>
      <span className={`h-px w-10 ${rule}`} />
      <Star className={tone === "light" ? "text-sun" : "text-sun-d"} />
      <span className={`h-px w-10 ${rule}`} />
    </span>
  );
}
