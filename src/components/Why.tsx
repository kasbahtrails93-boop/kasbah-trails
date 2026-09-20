import Image from "next/image";

const POINTS = [
  {
    title: "Guides who grew up here",
    body: "Fluent in English, French and Arabic — the kind who know which stall in the souk still bargains fair, and will tear up the day's plan when something better comes along.",
  },
  {
    title: "Handpicked places to stay",
    body: "Character riads inside the medinas, comfortable camps in the dunes — not roadside chain hotels. Every stay is one we've slept in ourselves.",
  },
  {
    title: "Honest, all-in pricing",
    body: "Your quote spells out exactly what's included before you commit to anything. No carpet-shop detours, no surprises at checkout.",
  },
  {
    title: "Safe, comfortable travel",
    body: "Modern, air-conditioned vehicles and licensed drivers who know the mountain passes in the dark, and a phone number that actually gets answered.",
  },
];

export default function Why() {
  return (
    <section id="why" className="scroll-mt-24">
      <div className="mx-auto grid max-w-[1200px] items-start gap-x-14 gap-y-12 px-[clamp(18px,4vw,40px)] py-[clamp(44px,7vw,80px)] lg:grid-cols-[0.85fr_1.15fr]">
        <figure className="lg:sticky lg:top-28">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-line">
            <Image
              src="/images/pool/ait-ben-haddou-guide-kasbah-road.webp"
              alt="A local Kasbah Trails guide overlooking the kasbah of Aït Ben Haddou"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 font-serif text-[.95rem] italic text-muted">
            Aït Ben Haddou, on the kasbah road — a stop on the way to the dunes.
          </figcaption>
        </figure>

        <div>
          <h2 className="max-w-[16ch] text-[clamp(2rem,4vw,3.3rem)] font-bold leading-[1.04] tracking-[-0.01em]">
            A trip that feels like Morocco, not a package
          </h2>
          <p className="mt-5 max-w-[56ch] text-[1.06rem] text-muted">
            We&apos;ve spent years driving these routes, staying in these riads and drinking tea in
            these villages — long before any of it went on a website. That&apos;s the difference
            you feel on the road: the shortcut around the tour-bus queue at the kasbah gate, the
            family who waves you in for tea, the viewpoint a few switchbacks past where every
            other itinerary tells you to turn around.
          </p>

          <dl className="mt-10 divide-y divide-line border-t border-line">
            {POINTS.map((p) => (
              <div key={p.title} className="grid gap-x-8 gap-y-1.5 py-5 sm:grid-cols-[10rem_1fr]">
                <dt className="font-serif text-base font-semibold text-indigo">{p.title}</dt>
                <dd className="text-sm leading-relaxed text-muted">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
