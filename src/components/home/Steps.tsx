import Image from "next/image";
import Link from "next/link";
import { STEPS } from "../Process";

const ICONS = [
  "M4 5h16v11H8l-4 4z",
  "M5 4h10l4 4v12H5zM14 4v5h5M8 13h8M8 17h5",
  "M5 12l4 4 10-10",
  "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
];

// How planning works: headline, photo and action on the left; the four steps
// as a vertical timeline of cards on the right (a real sequence, so numbered).
export default function Steps() {
  return (
    <section id="how" className="section-y scroll-mt-24 bg-sand">
      <div className="container-site grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+40px)] lg:self-start">
          <p className="eyebrow text-terra">How it works</p>
          <h2 className="mt-4 max-w-[14ch] text-h2">From first message to first morning</h2>
          <p className="mt-5 max-w-[42ch] text-[1.04rem] leading-relaxed">
            No forms to fill out and no call centre — one planner, from the first draft to the day you land.
          </p>
          <div className="relative mt-9 hidden aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] bg-dune lg:block">
            <Image
              src="/images/pool/ait-ben-haddou-guide-kasbah-road.webp"
              alt="A local Kasbah Trails guide overlooking the kasbah of Aït Ben Haddou"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <Link href="/contact" className="group btn btn-primary mt-9">
            Start planning
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <ol className="relative">
          <span aria-hidden className="absolute bottom-10 left-[27px] top-10 w-px border-l border-dashed border-terra/40" />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative grid grid-cols-[56px_1fr] gap-5 pb-6 last:pb-0">
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-terra text-paper shadow-[0_0_0_6px_var(--sand)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d={ICONS[i]} />
                </svg>
              </span>
              <div className="rounded-[var(--radius-card)] border border-line bg-card p-6 transition-shadow duration-300 hover:shadow-[0_20px_44px_-30px_rgba(43,23,12,.45)]">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-terra">Step {i + 1}</p>
                <h3 className="mt-2 text-[1.35rem]">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
