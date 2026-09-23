import Link from "next/link";

export default function Breadcrumbs({
  items,
  tone = "dark",
  className = "",
}: {
  items: { label: string; href?: string }[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <nav aria-label="Breadcrumb" className={`text-[0.82rem] ${light ? "text-paper/70" : "text-muted"} ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className={light ? "text-sun/70" : "text-sun-d"}>›</span>}
            {item.href ? (
              <Link href={item.href} className={light ? "hover:text-paper" : "hover:text-terra"}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={light ? "text-paper" : "text-ink"}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
