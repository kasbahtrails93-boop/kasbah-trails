import SceneSvg from "./SceneSvg";

const POINTS = [
  {
    title: "Guides who grew up here",
    body: "Born and raised in Morocco, fluent in English, French and Arabic — and happy to change the plan on the day.",
  },
  {
    title: "Handpicked places to stay",
    body: "Character riads inside the medinas and comfortable camps in the dunes — not roadside chain hotels.",
  },
  {
    title: "Honest, all-in pricing",
    body: "Your quote spells out exactly what's included. No pushy carpet-shop detours, no surprise fees.",
  },
  {
    title: "Safe, comfortable travel",
    body: "Modern, air-conditioned vehicles, licensed drivers and support on the phone throughout your trip.",
  },
];

export default function Why() {
  return (
    <section id="why">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-[clamp(18px,4vw,40px)] py-[clamp(56px,8vw,104px)] md:grid-cols-2">
        <div>
          <p className="mb-2.5 text-sm font-bold tracking-wide text-terracotta">Why Kasbah Trails</p>
          <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">
            A trip that feels like Morocco, not a package
          </h2>
          <p className="mt-4 max-w-[60ch] text-[1.06rem] text-muted">
            We&apos;ve spent years driving these routes, staying in these riads and drinking tea in
            these villages. That&apos;s the difference you feel — the shortcut around the crowds,
            the family who invites you in, the viewpoint that isn&apos;t on any map.
          </p>
          <ul className="mt-6 space-y-4">
            {POINTS.map((p) => (
              <li key={p.title} className="flex gap-3">
                <svg
                  className="mt-1 shrink-0 text-terracotta"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <div>
                  <b className="text-ink">{p.title}</b>
                  <span className="block text-sm text-muted">{p.body}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-square w-full overflow-hidden rounded-3xl shadow-[0_18px_40px_-24px_rgba(63,33,9,.45)]">
          <SceneSvg scene="medina" tint={["#C56A2E", "#8A3A13"]} uid="why" />
        </div>
      </div>
    </section>
  );
}
