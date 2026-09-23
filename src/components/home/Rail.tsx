"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Horizontal, scroll-snapping row of cards with previous/next buttons that
// disable at either end. Swipe and trackpad scrolling work natively.
export default function Rail({
  children,
  label,
  tone = "dark",
  resetKey,
}: {
  children: React.ReactNode;
  label: string;
  tone?: "dark" | "light";
  resetKey?: string;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth > el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update, resetKey]);

  const move = (dir: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  const btn = `flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300 disabled:cursor-default disabled:opacity-30 ${
    tone === "light" ? "border-paper/35 text-paper enabled:hover:bg-paper enabled:hover:text-ink" : "border-line text-ink enabled:hover:border-ink enabled:hover:bg-ink enabled:hover:text-paper"
  }`;

  return (
    <div>
      <ul
        ref={ref}
        aria-label={label}
        className="-mx-[clamp(20px,5vw,48px)] flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-[clamp(20px,5vw,48px)] px-[clamp(20px,5vw,48px)] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
      <div className="mt-8 flex justify-end gap-3">
        <button type="button" onClick={() => move(-1)} disabled={atStart} aria-label={`Scroll ${label} back`} className={btn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
        </button>
        <button type="button" onClick={() => move(1)} disabled={atEnd} aria-label={`Scroll ${label} forward`} className={btn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
