const FAQS = [
  {
    q: "Are Kasbah Trails tours private, or do we join a group?",
    a: "Every Kasbah Trails itinerary is 100% private — just you, your travel companions, and a dedicated driver-guide in your own vehicle. There are no strangers added to your group and no fixed departure dates to work around.",
  },
  {
    q: "Can you customize an itinerary, or do we have to book one exactly as listed?",
    a: "Every trip on this site is a starting point. Tell us your dates, pace and interests on WhatsApp or through the form below, and we'll adjust the route, swap in extra nights, or build something from scratch around what you actually want to see.",
  },
  {
    q: "What's included in the price of a private Morocco tour?",
    a: "Standard inclusions are a private air-conditioned vehicle with fuel and tolls, an English-speaking driver-guide for the whole trip, accommodation in riads, kasbahs and a desert camp, the Erg Chebbi camel trek, daily breakfast, local guides in the imperial cities, and all local taxes. International flights, most lunches and dinners, entrance fees, tips and travel insurance are not included.",
  },
  {
    q: "How much does a private Sahara desert tour cost?",
    a: "Pricing depends on group size, season, and the level of riad or kasbah you choose, since every trip is quoted individually rather than sold at a fixed group rate. Message us on WhatsApp with your dates and traveller count for an exact quote — there's no obligation to book.",
  },
  {
    q: "Is Morocco safe to visit, and is a guide necessary for the Sahara?",
    a: "Morocco is a well-established, welcoming destination for private travel, and the desert routes we run — through Ouarzazate, the gorges and Merzouga — are on paved and well-travelled roads. A local driver-guide isn't strictly required to enter the country, but it makes the long mountain and desert legs far easier, and it's how a camel trek and desert camp get arranged properly rather than booked blind.",
  },
  {
    q: "When's the best time of year for a Sahara desert tour?",
    a: "Spring (March to May) and autumn (September to November) give the most comfortable temperatures for both the High Atlas passes and the dunes. Summer is workable but hot in the desert by midday; winter nights in the Sahara and the mountains can be cold, so pack layers if travelling between November and February.",
  },
  {
    q: "Which cities can a tour start and end in?",
    a: "Most itineraries start or end in Marrakech, Fes, Casablanca or Tangier — wherever your flight lands. Filter the tours by city to see what's available, or ask us to build a route between two different cities if you don't see the combination you need.",
  },
];

export default function Faq() {
  return (
    <section id="faq">
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(56px,8vw,104px)]">
        <div className="text-center">
          <p className="mb-2.5 text-sm font-bold tracking-wide text-terracotta">Questions</p>
          <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">Common questions, answered</h2>
        </div>
        <div className="mx-auto mt-8 max-w-[780px]">
          {FAQS.map((f) => (
            <details key={f.q} className="faq-item border-b border-line">
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 font-serif text-[1.05rem] font-semibold text-espresso">
                {f.q}
              </summary>
              <p className="max-w-[64ch] pb-5 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
