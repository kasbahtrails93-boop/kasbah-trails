const STEPS = [
  {
    title: "Tell us your dates",
    body: "Message us with when you're coming, how long you have and what you'd love to see — even if all you've got is a rough shape and a handful of names you've read about.",
  },
  {
    title: "Get a draft itinerary",
    body: "We send back a day-by-day plan with routes, riads and a clear price, built around what you told us — move things around until it's exactly the trip you want.",
  },
  {
    title: "Confirm with a deposit",
    body: "Happy with it? A small deposit locks in your dates, your vehicle and your driver-guide. The balance isn't due until you arrive.",
  },
  {
    title: "We meet you on day one",
    body: "Your driver-guide is waiting at the airport or your riad with your name on a sign, and from there the road is yours.",
  },
];

export default function Process() {
  return (
    <section id="how" className="scroll-mt-24 bg-sand-2">
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(28px,4vw,48px)]">
        <div className="text-center">
          <p className="mb-2.5 text-sm font-bold tracking-wide text-terracotta">
            Simple from the first message
          </p>
          <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">How planning works</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-lg border border-line bg-card p-6">
              <div className="mb-3 font-serif text-3xl font-semibold text-amber-d">{i + 1}</div>
              <h3 className="mb-1.5 font-serif text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-muted">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-9 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-terracotta px-6 py-3.5 text-[.98rem] font-bold text-white hover:bg-terracotta-d"
          >
            Start planning
          </a>
        </div>
      </div>
    </section>
  );
}
