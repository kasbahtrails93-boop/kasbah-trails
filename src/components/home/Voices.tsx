import { REVS } from "@/lib/data";

// Traveller quotes as three cards. The REVS entries are placeholders, so the
// notice stays visible until they're replaced with real, sourced reviews.
export default function Voices() {
  return (
    <section id="reviews" className="section-y scroll-mt-24">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-terra">In their words</p>
            <h2 className="mt-4 text-h2">What travellers say</h2>
          </div>
          <p className="rounded-full border border-dashed border-terra/40 px-4 py-2 text-[0.8rem] text-muted">
            Placeholder reviews — replace with verified TripAdvisor, TourRadar or Google quotes before going live
          </p>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {REVS.map((r, i) => (
            <li
              key={r.n}
              className={`flex flex-col rounded-[var(--radius-card)] p-8 ${i === 1 ? "bg-kasbah text-paper" : "border border-line bg-card"}`}
            >
              <span aria-hidden className={`font-serif text-[4rem] leading-[0.6] ${i === 1 ? "text-sun" : "text-terra"}`}>
                &ldquo;
              </span>
              <blockquote className={`mt-5 font-serif text-[1.2rem] leading-relaxed ${i === 1 ? "text-paper" : "text-ink"}`}>{r.q}</blockquote>
              <p className={`mt-auto pt-7 text-[0.85rem] ${i === 1 ? "text-paper/65" : "text-muted"}`}>
                <span className={i === 1 ? "text-sun" : "text-ink"}>{r.n}</span>
                <br />
                {r.s}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
