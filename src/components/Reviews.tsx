import { REVS } from "@/lib/data";

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(44px,7vw,80px)]">
        <div className="text-center">
          <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">What travellers say</h2>
        </div>
        <div className="mx-auto mt-7 max-w-[900px]">
          <div className="mb-7 rounded-xl border border-dashed border-clay bg-sand-3 px-4 py-3 text-sm text-muted">
            ⚑ Placeholder reviews — replace these with your own verified TripAdvisor / TourRadar /
            Google quotes and reviewer names before going live. Real, sourced reviews build far
            more trust (and can be marked up for rich snippets).
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {REVS.map((r) => (
              <div key={r.n} className="rounded-lg border border-line bg-card p-6">
                <span className="block font-serif text-4xl leading-none text-indigo/35">&ldquo;</span>
                <div className="mt-1 mb-3 tracking-[2px] text-amber">★★★★★</div>
                <p className="text-[.98rem] italic text-ink">{r.q}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo font-serif font-bold text-white">
                    {r.n.slice(-1).toUpperCase()}
                  </div>
                  <div>
                    <b className="block text-sm">{r.n}</b>
                    <small className="block text-xs text-muted">{r.s}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
