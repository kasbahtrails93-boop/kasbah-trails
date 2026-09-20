const ITEMS = [
  { value: "33", label: "private itineraries" },
  { value: "100%", label: "private departures" },
  { value: "4", label: "start cities across Morocco" },
  { value: "3–15", label: "days, built around you" },
];

export default function TrustStrip() {
  return (
    <div className="bg-indigo text-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-y-4 px-[clamp(18px,4vw,40px)] py-6 text-center">
        {ITEMS.map((item, i) => (
          <div key={item.label} className="flex items-center">
            {i > 0 && <span className="mx-6 hidden h-9 w-px bg-white/15 sm:block" />}
            <div className="flex items-baseline gap-2.5">
              <span className="font-serif text-2xl font-semibold text-white sm:text-[1.9rem]">
                {item.value}
              </span>
              <span className="max-w-[12ch] text-left text-sm leading-tight text-white/70">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
