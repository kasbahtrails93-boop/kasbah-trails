const ITEMS = [
  { value: "33", label: "private itineraries" },
  { value: "100%", label: "private departures" },
  { value: "4", label: "start cities across Morocco" },
  { value: "3–15", label: "days, built around you" },
];

export default function TrustStrip() {
  return (
    <div className="border-b border-line bg-sand-2">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-[clamp(18px,4vw,40px)] py-4 text-center">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex items-baseline gap-2">
            <span className="font-serif text-xl font-semibold text-terracotta">{item.value}</span>
            <span className="text-sm text-muted">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
