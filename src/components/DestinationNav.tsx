"use client";

import { useEffect, useState } from "react";

// Sticky row of place names under the header on /destinations; highlights
// the destination currently on screen.
export default function DestinationNav({ items }: { items: { id: string; name: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="Destinations on this page" className="sticky top-[var(--header-h)] z-40 border-b border-line bg-paper/95 backdrop-blur-md">
      <ul className="container-site flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
        {items.map((it) => (
          <li key={it.id} className="shrink-0">
            <a
              href={`#${it.id}`}
              aria-current={active === it.id ? "location" : undefined}
              className={`block rounded-full border px-4 py-2 text-[0.88rem] transition-colors duration-300 ${
                active === it.id ? "border-ink bg-ink text-paper" : "border-line text-ink hover:border-ink"
              }`}
            >
              {it.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
