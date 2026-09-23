import SectionHeading from "./SectionHeading";

export const STEPS = [
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

// How planning works: four numbered stops joined by a line, like a route.
export default function Process() {
  return (
    <section id="how" className="section-y scroll-mt-24">
      <div className="container-site">
        <SectionHeading eyebrow="How it works" title="From first message to first morning" />
        <ol className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <span aria-hidden className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px border-t border-dashed border-sun-d/60 lg:block" />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative text-center">
              <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-terra font-serif text-[1.35rem] text-paper ring-8 ring-paper">
                {i + 1}
              </span>
              <h3 className="mt-6 text-[1.35rem]">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-[32ch] text-[0.93rem] leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
