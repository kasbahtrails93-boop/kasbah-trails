const STEPS = [
  {
    title: "Tell us your dates",
    body: "Message us with when you're coming, how long you have and what you'd love to see.",
  },
  {
    title: "Get a draft itinerary",
    body: "We send back a day-by-day plan with routes, riads and a clear price — yours to tweak.",
  },
  {
    title: "Confirm with a deposit",
    body: "Happy with it? A small deposit locks in your dates and vehicle. Balance on arrival.",
  },
  {
    title: "We meet you on day one",
    body: "Your driver-guide greets you at the airport or riad, and the road is yours.",
  },
];

export default function Process() {
  return (
    <section id="how" className="bg-sand-2">
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(56px,8vw,104px)]">
        <div className="text-center">
          <p className="mb-2.5 text-sm font-bold tracking-wide text-terracotta">
            Simple from the first message
          </p>
          <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">How planning works</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-2xl bg-card p-6 shadow-[0_18px_40px_-24px_rgba(63,33,9,.45)]">
              <div className="mb-3 font-serif text-3xl font-semibold text-amber-d">{i + 1}</div>
              <h3 className="mb-1.5 font-serif text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-muted">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-9 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-[.98rem] font-bold text-white hover:bg-terracotta-d"
          >
            Start planning
          </a>
        </div>
      </div>
    </section>
  );
}
