import Image from "next/image";

const POINTS = [
  {
    title: "Guides who grew up here",
    body: "Born and raised in Morocco, fluent in English, French and Arabic — the kind of guides who know which stall in the souk still bargains fair, and are happy to tear up the day's plan when something better comes along.",
  },
  {
    title: "Handpicked places to stay",
    body: "Character riads inside the medinas and comfortable camps in the dunes — not roadside chain hotels. Every stay is one we've slept in ourselves, chosen for character over a brand name on the door.",
  },
  {
    title: "Honest, all-in pricing",
    body: "Your quote spells out exactly what's included before you commit to anything. No pushy carpet-shop detours, no last-minute add-ons, no surprises waiting at checkout.",
  },
  {
    title: "Safe, comfortable travel",
    body: "Modern, air-conditioned vehicles and licensed drivers who know the mountain passes in the dark — plus a phone number that actually gets answered if your plans change mid-trip.",
  },
];

export default function Why() {
  return (
    <section id="why" className="scroll-mt-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-[clamp(18px,4vw,40px)] py-[clamp(28px,4vw,48px)] md:grid-cols-2">
        <div>
          <p className="mb-2.5 text-sm font-bold tracking-wide text-terracotta">Why Kasbah Trails</p>
          <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">
            A trip that feels like Morocco, not a package
          </h2>
          <p className="mt-4 max-w-[60ch] text-[1.06rem] text-muted">
            We&apos;ve spent years driving these routes, staying in these riads and drinking tea in
            these villages — long before any of it went on a website. That&apos;s the difference
            you feel on the road: the shortcut around the tour-bus queue at the kasbah gate, the
            family who waves you in for tea, the viewpoint a few switchbacks past where every
            other itinerary tells you to turn around.
          </p>
        </div>
        <div className="relative aspect-square w-full pb-8 pl-8 sm:pb-10 sm:pl-10">
          <div className="absolute inset-0 right-0 top-0 h-[85%] w-[85%] overflow-hidden rounded-lg border border-line">
            <Image
              src="/images/pool/ait-ben-haddou-guide-kasbah-road.webp"
              alt="A local Kasbah Trails guide overlooking the kasbah of Aït Ben Haddou"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-[45%] w-[55%] overflow-hidden rounded-lg border-4 border-sand">
            <Image
              src="/images/hero/sahara-caravan-guide-golden-hour.webp"
              alt="A guide leading a loaded camel caravan across the Sahara dunes at golden hour, Morocco"
              fill
              sizes="(max-width: 768px) 60vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] pb-[clamp(28px,4vw,48px)]">
        <div className="grid gap-x-8 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p) => (
            <div key={p.title}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <h3 className="mt-3.5 font-serif text-base font-semibold text-espresso">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
