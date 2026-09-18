// Blog content. Body text supports inline links via [label](url) —
// internal (starting with "/") render as next/link, external as a new-tab anchor.

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  scene: "dunes" | "medina" | "coast";
  origin: string;
  date: string;
  readMins: number;
  intro: string;
  blocks: BlogBlock[];
  related: string[];
}

export const BLOG: BlogPost[] = [
  {
    slug: "how-many-days-in-morocco",
    title: "How Many Days Do You Need in Morocco? A Realistic Itinerary Guide",
    description:
      "From a 3-day dash to the Sahara to a full 15-day loop of the country — how many days in Morocco you actually need, by travel style and priority.",
    keyword: "how many days in Morocco",
    scene: "medina",
    origin: "Marrakech",
    date: "2026-09-18",
    readMins: 7,
    intro:
      "It's the first question almost every traveller asks, and the honest answer is: it depends what you're prioritising. Morocco is bigger and more varied than its size on a map suggests — a week covers the highlights, but the country rewards a slower pace if you have it.",
    blocks: [
      {
        type: "h2",
        text: "3 to 4 days: one region, done properly",
        },
      {
        type: "p",
        text: "If you only have a long weekend, don't try to cover the whole country — pick one loop and do it well. The classic move is a [3-day Sahara desert tour from Marrakech](/tours/3-mar): over the High Atlas, a night at a desert camp under Erg Chebbi's dunes, and back. It's tight but genuinely satisfying, not just a box-ticking exercise.",
      },
      {
        type: "h2",
        text: "5 to 7 days: the sweet spot for a first trip",
        },
      {
        type: "p",
        text: "A week is enough to combine the desert with either the imperial cities or the Atlantic coast, without feeling rushed. Most first-time visitors land on something close to our [7-day Sahara desert tour from Marrakech](/tours/7-mar), which adds the Dades and Todgha gorges and a full day around Merzouga to the 3-day route. See our [7-day itinerary breakdown](/blog/7-days-in-morocco-itinerary) for exactly how that week is paced.",
      },
      {
        type: "h2",
        text: "8 to 12 days: the full circuit",
        },
      {
        type: "p",
        text: "This is where you can realistically add Fes's medina, the Rif mountains and Chefchaouen, and still not feel like you're sleeping in a different bed every night. Our [10-day](/tours/10-totally-mar) and [12-day](/tours/12-mar) grand tours are built around two nights in the desert instead of one, which changes the pace of the whole trip — less driving per day, more time at each stop.",
      },
      {
        type: "h2",
        text: "2 weeks or more: nothing left out",
        },
      {
        type: "p",
        text: "At 14 to 15 days you can fit in the Atlantic coast at Essaouira, the capital Rabat, and still keep the unhurried pace that makes a trip memorable rather than exhausting. It's the version of Morocco we'd recommend if your schedule allows it — see the full [15-day grand Morocco tour](/tours/15-grand-mar) for the complete route.",
      },
      {
        type: "p",
        text: "Whatever length you're working with, the number of days matters less than how many places you try to cram into them. According to [Morocco's National Tourist Office](https://www.visitmorocco.com/en), the country's regions are genuinely distinct — the Rif, the Atlas, the Sahara and the Atlantic coast don't feel like variations on a theme, they feel like different countries. Budget driving time accordingly rather than trying to see everything on one trip.",
      },
    ],
    related: ["7-days-in-morocco-itinerary", "private-driver-vs-group-tour-morocco", "how-much-does-private-morocco-tour-cost"],
  },
  {
    slug: "best-time-to-visit-sahara-desert-morocco",
    title: "Best Time to Visit the Sahara Desert in Morocco (Month by Month)",
    description:
      "When to go to the Erg Chebbi dunes near Merzouga — temperatures, crowds and what a desert camp night actually feels like in each season.",
    keyword: "best time to visit Sahara desert Morocco",
    scene: "dunes",
    origin: "Marrakech",
    date: "2026-09-14",
    readMins: 6,
    intro:
      "The Sahara doesn't have a bad season exactly, but it has a much better one. Daytime desert heat and near-freezing desert nights are both real possibilities depending on when you go — here's what to actually expect month by month.",
    blocks: [
      {
        type: "h2",
        text: "March to May: the best all-round window",
        },
      {
        type: "p",
        text: "Spring gives you warm, comfortable days in the dunes and nights that are cool but manageable in a proper desert camp with blankets. It's also when the High Atlas passes — including the [Tizi n'Tichka](/blog/tizi-n-tichka-pass-guide) you'll cross to get there — are clear of snow. This is the season we get the most repeat questions about camel trek timing, since sunset rides are genuinely pleasant rather than a race to get out of the heat.",
      },
      {
        type: "h2",
        text: "June to August: hot, but not a dealbreaker",
        },
      {
        type: "p",
        text: "Merzouga regularly hits 40°C+ in midsummer, and the dunes at midday are genuinely punishing. It's still workable if you plan around it: camel treks happen in the cooler evening, and a desert camp night still cools down noticeably once the sun's gone. If you're set on summer travel, consider our shorter [3-day desert tours](/tours?len=1-3) over longer ones, so you're spending less total time in peak heat.",
      },
      {
        type: "h2",
        text: "September to November: our second recommendation",
        },
      {
        type: "p",
        text: "Autumn mirrors spring closely — warm days, cool nights, clear mountain passes — with the bonus of slightly fewer other travellers on the road between Ouarzazate and Merzouga. Early September can still run hot; by October it's consistently comfortable.",
      },
      {
        type: "h2",
        text: "December to February: cold nights, clear skies",
        },
      {
        type: "p",
        text: "Winter days in the desert are often pleasantly mild, but nights at a Sahara camp can drop close to freezing. This is genuinely one of the best times for stargazing, since the same clear, dry air that lets the temperature drop also means minimal cloud cover — but pack real layers, not just a light jacket. See our [Morocco in winter guide](/blog/morocco-in-winter-what-to-expect) for exactly what to bring.",
      },
      {
        type: "p",
        text: "For context on the wider Sahara's climate patterns beyond just the Erg Chebbi region Kasbah Trails' routes visit, [Wikipedia's overview of the Sahara](https://en.wikipedia.org/wiki/Sahara) is a useful primer on why the desert swings so hard between day and night temperatures — it comes down to the sand having almost no capacity to retain heat after sunset.",
      },
    ],
    related: ["camel-trekking-merzouga-what-to-expect", "what-to-pack-sahara-desert-tour", "marrakech-to-sahara-desert-guide"],
  },
  {
    slug: "marrakech-to-sahara-desert-guide",
    title: "Marrakech to Sahara Desert: How to Get There and What to Expect",
    description:
      "The real route from Marrakech to the Erg Chebbi dunes — the Tizi n'Tichka pass, Aït Ben Haddou, the gorges, and how long the drive actually takes.",
    keyword: "Marrakech to Sahara desert",
    scene: "dunes",
    origin: "Marrakech",
    date: "2026-09-10",
    readMins: 6,
    intro:
      "There's no direct road from Marrakech to Merzouga — the drive is the trip, winding through the High Atlas and the kasbah road before the landscape finally opens into dunes. Here's what that route actually looks like.",
    blocks: [
      {
        type: "h2",
        text: "It's roughly two days of driving, not one",
        },
      {
        type: "p",
        text: "Merzouga, the gateway to the Erg Chebbi dunes, is about 560km from Marrakech by road — but almost nobody drives it in one push, because the route itself is most of the point. Our [3-day Sahara desert tour from Marrakech](/tours/3-mar) splits it into: Marrakech to the Dades Valley on day one, Dades to Merzouga on day two, and the return leg on day three.",
      },
      {
        type: "h2",
        text: "The Tizi n'Tichka pass comes first",
        },
      {
        type: "p",
        text: "Within the first couple of hours out of Marrakech, the road climbs into the High Atlas over the Tizi n'Tichka — at over 2,200m, it's one of the highest paved passes in North Africa. Read our [full guide to the pass](/blog/tizi-n-tichka-pass-guide) if mountain driving is part of what you're curious (or nervous) about.",
      },
      {
        type: "h2",
        text: "Aït Ben Haddou and the kasbah road",
        },
      {
        type: "p",
        text: "On the far side of the pass, most routes stop at [Aït Ben Haddou](/blog/ait-ben-haddou-guide), the fortified ksar that's appeared in a long list of film productions, before continuing through Ouarzazate and along what's commonly called the Road of a Thousand Kasbahs.",
      },
      {
        type: "h2",
        text: "The gorges, then the dunes",
        },
      {
        type: "p",
        text: "Depending on the exact itinerary, the second day usually threads through either the Dades Gorge, the Todgha Gorge, or both — narrow canyon roads that are a complete change of scenery from the open desert plains that follow. By the time Merzouga appears, the transition to true Sahara dunes happens quickly, often within the last 30 minutes of driving.",
      },
      {
        type: "p",
        text: "For the geography of exactly which dune system you'll reach — Erg Chebbi, Morocco's most accessible major dune field — the [UNESCO-adjacent description of Morocco's desert regions](https://en.wikipedia.org/wiki/Erg_Chebbi) is a useful reference if you want the full picture before you go.",
      },
    ],
    related: ["tizi-n-tichka-pass-guide", "ait-ben-haddou-guide", "camel-trekking-merzouga-what-to-expect"],
  },
  {
    slug: "is-chefchaouen-worth-visiting",
    title: "Is Chefchaouen Worth Visiting? What the Blue City Is Really Like",
    description:
      "Honest notes on Chefchaouen beyond the Instagram photos — how blue it actually is, how long to spend there, and how to fit it into a Morocco route.",
    keyword: "is Chefchaouen worth visiting",
    scene: "medina",
    origin: "Tangier",
    date: "2026-09-05",
    readMins: 5,
    intro:
      "Chefchaouen shows up on every Morocco itinerary photo, which makes some travellers suspicious it's overhyped. Having driven through it more times than we can count, here's the honest version.",
    blocks: [
      {
        type: "h2",
        text: "Yes, it's really that blue",
        },
      {
        type: "p",
        text: "The blue-washed walls aren't limited to one photogenic street — they extend through most of the old medina, in a range from pale sky-blue to deep cobalt depending on the building and how recently it's been repainted. It photographs well because it genuinely looks like that in person, not because of a filter.",
      },
      {
        type: "h2",
        text: "How much time it actually needs",
        },
      {
        type: "p",
        text: "Half a day is enough to wander the main lanes and Plaza Uta el-Hammam; a full day lets you add a hike to the [Akchour waterfalls](https://en.wikipedia.org/wiki/Chefchaouen) in the hills outside town. It's rarely the only stop on a route — most itineraries pair it with the Rif Mountains drive and either Fes or Tangier on either side, like our [6-day Marrakech Express from Tangier](/tours/6-tan-mar).",
      },
      {
        type: "h2",
        text: "Where it fits in a wider itinerary",
        },
      {
        type: "p",
        text: "Chefchaouen sits in the Rif Mountains in Morocco's north, which puts it naturally on routes starting or ending in Tangier, or as a detour from a Fes-based loop. It doesn't really work as a Marrakech day trip — the drive alone is 8+ hours — so it's worth building your route around it rather than trying to bolt it on.",
      },
      {
        type: "h2",
        text: "The verdict",
        },
      {
        type: "p",
        text: "Worth it, with a caveat: go for the walk through the medina itself, not just the one famous staircase. The quieter residential lanes above the main square are just as blue and considerably less crowded. If your trip already routes through the north, there's no real reason to skip it.",
      },
    ],
    related: ["morocco-itinerary-from-tangier", "todgha-gorge-vs-dades-gorge", "morocco-in-winter-what-to-expect"],
  },
  {
    slug: "ait-ben-haddou-guide",
    title: "Aït Ben Haddou: Visiting Morocco's Most Famous Kasbah",
    description:
      "What Aït Ben Haddou actually is, why it's been used in so many films, and how to visit it properly on the way to the Sahara.",
    keyword: "Aït Ben Haddou guide",
    scene: "medina",
    origin: "Marrakech",
    date: "2026-08-31",
    readMins: 5,
    intro:
      "Aït Ben Haddou is the single most photographed building on Morocco's desert road, and for good reason — it's one of the best-preserved examples of southern Moroccan earthen architecture still standing.",
    blocks: [
      {
        type: "h2",
        text: "What it is",
        },
      {
        type: "p",
        text: "A ksar — a fortified, communal earthen settlement — built into a hillside along the old caravan route between the Sahara and Marrakech. It's a [UNESCO World Heritage Site](https://whc.unesco.org/en/list/444/), listed since 1987, and though most of the current residents have moved to the newer village across the river, a handful of families still live inside the old walls.",
      },
      {
        type: "h2",
        text: "Why it looks familiar",
        },
      {
        type: "p",
        text: "Its dramatic silhouette against the Atlas foothills has made it a repeated film location for decades — most visibly in Gladiator and several Game of Thrones sequences, thanks to the nearby Atlas Studios in Ouarzazate. You don't need to have seen any of them to appreciate the setting, but it explains why the site feels oddly familiar even on a first visit.",
      },
      {
        type: "h2",
        text: "How to visit it well",
        },
      {
        type: "p",
        text: "Most Marrakech-to-Sahara routes stop here on day one, typically mid-morning after crossing the [Tizi n'Tichka pass](/blog/tizi-n-tichka-pass-guide). Give it at least 45 minutes to an hour — enough to cross the footbridge (or wade the river in dry months), climb through the ksar's narrow passages, and reach the top for the view back down. It's included as a stop on essentially every one of our [Marrakech-based desert tours](/tours?city=Marrakech).",
      },
      {
        type: "h2",
        text: "A quieter alternative nearby",
        },
      {
        type: "p",
        text: "If Aït Ben Haddou feels busy, the lesser-visited [Telouet Kasbah](/blog/tizi-n-tichka-pass-guide) — the former stronghold of the Glaoui family — sits on an old alternate road nearby and draws a fraction of the visitors, with equally striking interior tilework.",
      },
    ],
    related: ["marrakech-to-sahara-desert-guide", "tizi-n-tichka-pass-guide", "todgha-gorge-vs-dades-gorge"],
  },
  {
    slug: "what-to-pack-sahara-desert-tour",
    title: "What to Pack for a Sahara Desert Tour in Morocco",
    description:
      "A practical packing list for a Merzouga desert camp night — clothing layers, sun protection, and the small items people forget.",
    keyword: "what to pack for Sahara desert tour",
    scene: "dunes",
    origin: "Marrakech",
    date: "2026-08-26",
    readMins: 5,
    intro:
      "The Sahara's day-to-night temperature swing catches more travellers off guard than anything else about a desert tour. Here's what actually earns a place in your bag.",
    blocks: [
      {
        type: "h2",
        text: "Layers, always layers",
        },
      {
        type: "p",
        text: "Desert days can be hot even outside summer, and desert nights drop fast once the sun sets — sand has almost no ability to hold heat, so the temperature swing is dramatic. A light long-sleeve layer, a warmer fleece or jacket, and a scarf or shemagh that doubles as sun and wind protection cover most conditions. See our [best-time-to-visit guide](/blog/best-time-to-visit-sahara-desert-morocco) for how much colder to expect by season.",
      },
      {
        type: "h2",
        text: "Sun protection that actually works",
        },
      {
        type: "p",
        text: "A wide-brimmed hat beats a cap in open dunes, and reef-safe sunscreen matters more than usual given how much reflected sun comes off pale sand. Sunglasses with real UV protection aren't optional — the glare off the dunes at midday is intense.",
      },
      {
        type: "h2",
        text: "For the camel trek and camp",
        },
      {
        type: "p",
        text: "Closed shoes you don't mind filling with sand (it happens regardless of footwear choice), a change of socks, and a headlamp or phone flashlight for moving around camp after dark, since desert camps generally run on limited generator or solar power. See our [camel trekking guide](/blog/camel-trekking-merzouga-what-to-expect) for what the actual trek and camp night involve.",
      },
      {
        type: "h2",
        text: "The small stuff people forget",
        },
      {
        type: "p",
        text: "A portable phone charger or power bank — camp power is limited. Wet wipes, since running water at camp is basic. And a dust-resistant bag or cover for cameras, since fine Sahara sand finds its way into everything left open.",
      },
      {
        type: "p",
        text: "If your route also crosses the High Atlas beforehand, layer for the mountain pass too — the [Tizi n'Tichka](/blog/tizi-n-tichka-pass-guide) can be genuinely cold even when Merzouga itself is warm.",
      },
    ],
    related: ["best-time-to-visit-sahara-desert-morocco", "camel-trekking-merzouga-what-to-expect", "morocco-in-winter-what-to-expect"],
  },
  {
    slug: "fes-vs-marrakech",
    title: "Fes vs Marrakech: Which Imperial City Should You Visit First?",
    description:
      "Comparing Fes and Marrakech for a Morocco trip — medina size, atmosphere, day trips, and which one to prioritise if you can only pick one.",
    keyword: "Fes vs Marrakech",
    scene: "medina",
    origin: "Fes",
    date: "2026-08-21",
    readMins: 6,
    intro:
      "Both are imperial cities with major medinas, but they feel genuinely different to walk through. If your itinerary only has room for one, here's how to decide.",
    blocks: [
      {
        type: "h2",
        text: "Marrakech: livelier, more geared to visitors",
        },
      {
        type: "p",
        text: "Marrakech's medina is dense and commercial, centred on Jemaa el-Fnaa's food stalls and performers. It's an easier first stop for jet-lagged travellers — more riads, more English spoken, and it's the starting point for most desert routes, including our [3-day](/tours/3-mar) and [5-day](/tours/5-mar) Sahara tours.",
      },
      {
        type: "h2",
        text: "Fes: older, quieter, more intact",
        },
      {
        type: "p",
        text: "Fes el-Bali is generally considered the [largest car-free urban area in the world](https://en.wikipedia.org/wiki/Fes_el_Bali), and it feels it — narrower lanes, working artisan quarters rather than tourist-facing souks, and the Chouara tannery, one of the oldest in the world, still operating in full view of the street above it.",
      },
      {
        type: "h2",
        text: "If you can only pick one",
        },
      {
        type: "p",
        text: "For a first Morocco trip focused on the Sahara, Marrakech makes more practical sense as your base — it's the standard starting point, and desert routes from there are shorter. If your priority is medina atmosphere and history over logistics, Fes edges it out, particularly if you're also routing through [Chefchaouen](/blog/is-chefchaouen-worth-visiting) or the Rif.",
      },
      {
        type: "h2",
        text: "The good news: most longer routes include both",
        },
      {
        type: "p",
        text: "Anything 6 days or longer tends to connect them — our [6-day desert tour from Marrakech to Fes](/tours/6-mar-fes) and most [8+ day grand tours](/tours?len=8-11) visit both cities either side of the desert loop, so the either/or choice mostly only matters on shorter trips.",
      },
    ],
    related: ["how-many-days-in-morocco", "best-moroccan-food-to-try", "riad-vs-hotel-morocco"],
  },
  {
    slug: "how-much-does-private-morocco-tour-cost",
    title: "How Much Does a Private Morocco Tour Cost? A Realistic Budget Breakdown",
    description:
      "What actually drives the price of a private Morocco tour — vehicle, driver-guide, accommodation level, season and group size — and how quoting works.",
    keyword: "how much does a private Morocco tour cost",
    scene: "medina",
    origin: "Marrakech",
    date: "2026-08-16",
    readMins: 6,
    intro:
      "There's no single published price for a private Morocco tour, because the honest answer depends on several variables that change the quote more than the headline number of days does.",
    blocks: [
      {
        type: "h2",
        text: "What's usually included",
        },
      {
        type: "p",
        text: "A private air-conditioned vehicle and driver-guide for the full trip, accommodation in riads and kasbahs (plus a desert camp night), the Erg Chebbi camel trek, daily breakfast, local guides in the imperial cities, and local taxes. See the full included/excluded breakdown on any [tour's itinerary page](/tours) — it's listed the same way on every route.",
      },
      {
        type: "h2",
        text: "What usually isn't",
        },
      {
        type: "ul",
        items: [
          "International flights",
          "Most lunches and dinners (breakfast is included; other meals let you choose your own spot)",
          "Monument and museum entrance fees",
          "Tips for your driver-guide",
          "Travel insurance",
        ],
      },
      {
        type: "h2",
        text: "The four things that actually move the price",
        },
      {
        type: "p",
        text: "Group size (cost splits per person on a shared vehicle, but a private trip for 2 costs more per person than for 6), season (spring and autumn command slightly higher rates than deep summer), riad category (a simple guesthouse vs. a boutique riad with a pool), and trip length. Two people traveling 5 days in April will get a meaningfully different quote than six people traveling 5 days in August, even on an identical route.",
      },
      {
        type: "h2",
        text: "Why we don't publish flat prices",
        },
      {
        type: "p",
        text: "Because those four variables genuinely change the honest number — a flat published rate either overcharges small groups in low season or undercharges large groups in peak season. Message us on [WhatsApp](/#contact) with your dates and traveller count and we'll send back a real, itemised quote, not a starting-from teaser.",
      },
    ],
    related: ["private-driver-vs-group-tour-morocco", "riad-vs-hotel-morocco", "how-many-days-in-morocco"],
  },
  {
    slug: "camel-trekking-merzouga-what-to-expect",
    title: "Camel Trekking in Merzouga: What Actually Happens on a Desert Camp Night",
    description:
      "A walk-through of what a Merzouga camel trek and Sahara desert camp night actually involve, from sunset ride to sunrise over the dunes.",
    keyword: "camel trekking Merzouga",
    scene: "dunes",
    origin: "Marrakech",
    date: "2026-08-11",
    readMins: 6,
    intro:
      "It's the single most-anticipated part of almost every Morocco itinerary, and also the part people have the least accurate mental picture of beforehand. Here's what actually happens.",
    blocks: [
      {
        type: "h2",
        text: "Late afternoon: the ride out",
        },
      {
        type: "p",
        text: "Camel treks into the Erg Chebbi dunes almost always leave in the late afternoon, timed so the ride to camp coincides with sunset. It's roughly an hour on camelback, single file, led by a guide on foot — steadier and less physically demanding than it looks, though your legs will feel it if you're not used to riding.",
      },
      {
        type: "h2",
        text: "Arrival at camp",
        },
      {
        type: "p",
        text: "Desert camps range from simple shared Berber tents to more comfortable private setups with real beds, depending on which [tour](/tours) you've booked. Either way, expect a communal dinner, often with live drumming, and genuinely dark skies once the sun's fully down — Merzouga's remoteness means minimal light pollution.",
      },
      {
        type: "h2",
        text: "Overnight",
        },
      {
        type: "p",
        text: "It gets cold fast once the sun sets — see our [packing guide](/blog/what-to-pack-sahara-desert-tour) for what to actually bring. Camps typically provide blankets, but layering your own clothing underneath makes a real difference.",
      },
      {
        type: "h2",
        text: "Sunrise, and the trip out",
        },
      {
        type: "p",
        text: "Most itineraries have you up before dawn to watch the sunrise from the dunes directly above camp — genuinely worth the early alarm. Some routes include a second night and a 4x4 excursion the following day, like our [4-day Marrakech desert tour](/tours/4-mar) with its added off-road day and nomad family visit, rather than heading straight back after one night.",
      },
    ],
    related: ["what-to-pack-sahara-desert-tour", "best-time-to-visit-sahara-desert-morocco", "marrakech-to-sahara-desert-guide"],
  },
  {
    slug: "is-morocco-safe-solo-female-travelers",
    title: "Is Morocco Safe for Solo Female Travelers? An Honest Guide",
    description:
      "A practical, honest look at solo female travel in Morocco — what to actually expect, what helps, and why a private driver-guide changes the experience.",
    keyword: "is Morocco safe for solo female travelers",
    scene: "medina",
    origin: "Marrakech",
    date: "2026-08-06",
    readMins: 6,
    intro:
      "This is one of the most common questions we get, and it deserves a straight answer rather than either blanket reassurance or blanket caution.",
    blocks: [
      {
        type: "h2",
        text: "The honest baseline",
        },
      {
        type: "p",
        text: "Morocco is a widely visited, tourism-dependent country, and solo women travel it every day without incident. That said, medina streets can involve more direct attention and unsolicited comments than many Western travellers are used to — mostly harmless but occasionally tiresome, particularly in the busiest souks of Marrakech and Fes.",
      },
      {
        type: "h2",
        text: "What actually helps",
        },
      {
        type: "ul",
        items: [
          "Modest dress in medinas and rural areas reduces attention, even though it's not strictly required",
          "A private driver-guide means you're never navigating an unfamiliar bus or taxi system alone after dark",
          "Booking accommodation inside a riad with a locked door onto the medina, rather than a hotel on a busy commercial strip",
          "Having a local contact (your guide) who can step in if a situation in a souk feels uncomfortable",
        ],
      },
      {
        type: "h2",
        text: "Where a private tour changes the calculation",
        },
      {
        type: "p",
        text: "The biggest single safety factor for solo travel in any country is usually transport and logistics, not city safety itself. A [private driver-guide](/blog/private-driver-vs-group-tour-morocco) for the whole trip removes the need to negotiate taxis, figure out bus schedules, or navigate unfamiliar mountain roads alone — which is a large part of why solo travellers make up a meaningful share of our private bookings.",
      },
      {
        type: "h2",
        text: "The Sahara specifically",
        },
      {
        type: "p",
        text: "Desert camps are well-established and run by experienced local operators; solo women join [camel treks and desert camp nights](/blog/camel-trekking-merzouga-what-to-expect) regularly and without issue, especially as part of a small private group rather than an anonymous large one.",
      },
    ],
    related: ["private-driver-vs-group-tour-morocco", "riad-vs-hotel-morocco", "how-much-does-private-morocco-tour-cost"],
  },
  {
    slug: "tizi-n-tichka-pass-guide",
    title: "The Tizi n'Tichka Pass: Driving Morocco's Most Dramatic Mountain Road",
    description:
      "What the Tizi n'Tichka pass over the High Atlas actually involves — elevation, hairpin turns, the Telouet Kasbah detour, and what to expect.",
    keyword: "Tizi n'Tichka pass",
    scene: "dunes",
    origin: "Marrakech",
    date: "2026-08-01",
    readMins: 5,
    intro:
      "Every route from Marrakech to the Sahara has to cross the High Atlas somewhere, and the Tizi n'Tichka is the road that does it — a genuinely spectacular, genuinely winding mountain pass.",
    blocks: [
      {
        type: "h2",
        text: "The numbers",
        },
      {
        type: "p",
        text: "The pass tops out above 2,200 metres, making the N9 highway one of the highest paved roads in North Africa. The full climb and descent from Marrakech's side to Ouarzazate's takes a few hours including stops, through a long series of switchbacks carved into the mountainside.",
      },
      {
        type: "h2",
        text: "What you'll actually see",
        },
      {
        type: "p",
        text: "Berber villages built into the hillsides, roadside stalls selling geodes and fossils, and — weather depending — snow-capped peaks visible even in warmer months at the higher elevations. It's a genuinely different Morocco from the medinas: rural, mountainous, and sparsely populated.",
      },
      {
        type: "h2",
        text: "The Telouet Kasbah detour",
        },
      {
        type: "p",
        text: "A worthwhile side trip on the eastern side of the pass is the Telouet Kasbah, the former stronghold of the Glaoui family who effectively controlled the southern trade routes for decades. It draws far fewer visitors than [Aït Ben Haddou](/blog/ait-ben-haddou-guide) further along the same road, despite equally striking painted-tile interiors.",
      },
      {
        type: "h2",
        text: "Practical notes",
        },
      {
        type: "p",
        text: "It's not a road to rush — hairpin turns are frequent and shoulders are narrow in places. Every one of our [Marrakech-based Sahara routes](/tours?city=Marrakech) crosses it with an experienced local driver-guide who does the route regularly, which matters more here than on most Moroccan roads.",
      },
    ],
    related: ["ait-ben-haddou-guide", "marrakech-to-sahara-desert-guide", "todgha-gorge-vs-dades-gorge"],
  },
  {
    slug: "7-days-in-morocco-itinerary",
    title: "7 Days in Morocco: The Perfect One-Week Itinerary",
    description:
      "A day-by-day breakdown of what a well-paced 7-day Morocco itinerary looks like — the Sahara, the gorges, and the kasbah road from Marrakech.",
    keyword: "7 days in Morocco itinerary",
    scene: "dunes",
    origin: "Marrakech",
    date: "2026-07-27",
    readMins: 6,
    intro:
      "A week is the sweet spot for a first Morocco trip — enough time to properly reach the Sahara without rushing, but short enough to fit most holiday schedules.",
    blocks: [
      {
        type: "h2",
        text: "Days 1 to 2: Marrakech to the Sahara's edge",
        },
      {
        type: "p",
        text: "Cross the [Tizi n'Tichka pass](/blog/tizi-n-tichka-pass-guide), stop at [Aït Ben Haddou](/blog/ait-ben-haddou-guide), and spend the first two nights working through the Dades and Todgha gorges before reaching Merzouga's dunes.",
      },
      {
        type: "h2",
        text: "Day 3: camel trek and desert camp",
        },
      {
        type: "p",
        text: "Sunset ride into Erg Chebbi, dinner and drumming at camp, then sunrise over the dunes the next morning — see our [camel trekking guide](/blog/camel-trekking-merzouga-what-to-expect) for the full sequence.",
      },
      {
        type: "h2",
        text: "Days 4 to 5: the return loop or onward to Fes",
        },
      {
        type: "p",
        text: "Depending on your exact route, day 4 either heads back toward Marrakech via a different stretch of the kasbah road, or continues north toward Fes through the Middle Atlas cedar forests. Our [7-day Sahara desert tour from Marrakech](/tours/7-mar) does the former; several of our [6-day routes](/tours?len=4-7) do the latter.",
      },
      {
        type: "h2",
        text: "Days 6 to 7: winding down",
        },
      {
        type: "p",
        text: "The last two days are typically lighter on driving — a full day in whichever city you end in (Marrakech or Fes), giving you real time in the medina rather than just passing through. This is deliberate pacing, not padding; back-to-back long drives every day is the single biggest complaint we hear about badly planned Morocco trips.",
      },
      {
        type: "p",
        text: "If a week doesn't feel like quite enough once you see the route, our [how many days in Morocco guide](/blog/how-many-days-in-morocco) breaks down what an extra 3 to 5 days actually adds.",
      },
    ],
    related: ["how-many-days-in-morocco", "marrakech-to-sahara-desert-guide", "camel-trekking-merzouga-what-to-expect"],
  },
  {
    slug: "casablanca-to-marrakech-worth-stopping",
    title: "Casablanca to Marrakech: Is It Worth Stopping, and What to See",
    description:
      "What to actually do with time in Casablanca before heading to Marrakech — the Hassan II Mosque, and whether it's worth more than a half-day.",
    keyword: "Casablanca to Marrakech",
    scene: "medina",
    origin: "Casablanca",
    date: "2026-07-22",
    readMins: 5,
    intro:
      "Casablanca is where a lot of international flights land, which means many travellers end up deciding how much time, if any, to spend there before heading on to Marrakech.",
    blocks: [
      {
        type: "h2",
        text: "The honest case for Casablanca",
        },
      {
        type: "p",
        text: "It's Morocco's largest city and its economic capital, but it's not primarily a tourism destination — the appeal is narrower than Marrakech or Fes. The main reason to stop is the Hassan II Mosque, one of the largest mosques in the world and one of the few in Morocco that non-Muslim visitors can enter on a guided tour.",
      },
      {
        type: "h2",
        text: "How much time it needs",
        },
      {
        type: "p",
        text: "Half a day covers it comfortably — the mosque, a walk along the corniche, maybe lunch. It rarely justifies an overnight stay unless your flight timing makes an early Casablanca departure or arrival unavoidable.",
      },
      {
        type: "h2",
        text: "How it fits into a route",
        },
      {
        type: "p",
        text: "Several of our [Casablanca-starting tours](/tours?city=Casablanca) route through it as a first-morning stop before heading toward Rabat and the north, or directly toward Marrakech and the desert. It works well as a bookend rather than a standalone destination — see our [5-day Casablanca to Marrakech tour](/tours/5-casa-mar) for how that looks in practice.",
      },
      {
        type: "h2",
        text: "The drive itself",
        },
      {
        type: "p",
        text: "Casablanca to Marrakech direct is about 3 hours on Morocco's toll highway — straightforward compared to the mountain roads further south, and a reasonable way to ease into a longer trip before the more dramatic driving begins.",
      },
    ],
    related: ["how-many-days-in-morocco", "morocco-itinerary-from-tangier", "fes-vs-marrakech"],
  },
  {
    slug: "riad-vs-hotel-morocco",
    title: "What's the Difference Between a Riad and a Hotel in Morocco?",
    description:
      "Riads vs hotels in Morocco explained — what a riad actually is, why they're usually the better choice inside a medina, and when a hotel makes more sense.",
    keyword: "riad vs hotel Morocco",
    scene: "medina",
    origin: "Fes",
    date: "2026-07-17",
    readMins: 5,
    intro:
      "It's a word that shows up on every Morocco booking site, and it's worth understanding before you choose, since a riad and a hotel are genuinely different kinds of stay.",
    blocks: [
      {
        type: "h2",
        text: "What a riad actually is",
        },
      {
        type: "p",
        text: "A riad is a traditional Moroccan house or palace built around an interior courtyard or garden, historically with the family's private life turned inward and away from the street. Most riads operating as guesthouses today have been carefully restored, keeping features like carved plasterwork, zellige tilework, and a central courtyard that often doubles as the breakfast area.",
      },
      {
        type: "h2",
        text: "Why they usually win inside a medina",
        },
      {
        type: "p",
        text: "Medina streets are narrow and vehicle-free in most sections, which large hotels simply can't be built into — riads, being converted historic houses, fit naturally. Staying in one means walking distance to the souks and main sights, rather than a taxi ride from a hotel district outside the old walls.",
      },
      {
        type: "h2",
        text: "Where hotels still make sense",
        },
      {
        type: "p",
        text: "Newer parts of cities like Casablanca's business district, or coastal towns like Essaouira and Agadir where beachfront access matters more than medina proximity, are where a conventional hotel — or a beach resort — often makes more practical sense than a riad.",
      },
      {
        type: "h2",
        text: "What's included on a Kasbah Trails tour",
        },
      {
        type: "p",
        text: "Every private itinerary includes riad and kasbah accommodation as standard, plus a desert camp night for routes that reach the Sahara — see any [tour's full inclusions](/tours) for exactly what's covered. If you have a specific riad in mind from previous research, mention it when you message us and we'll check availability for your dates.",
      },
    ],
    related: ["how-much-does-private-morocco-tour-cost", "fes-vs-marrakech", "is-morocco-safe-solo-female-travelers"],
  },
  {
    slug: "todgha-gorge-vs-dades-gorge",
    title: "Todgha Gorge vs Dades Gorge: Which Canyon Should You Visit",
    description:
      "Comparing Todgha Gorge and Dades Gorge on Morocco's kasbah road — canyon walls, road conditions, and which one fits your itinerary better.",
    keyword: "Todgha Gorge vs Dades Gorge",
    scene: "dunes",
    origin: "Marrakech",
    date: "2026-07-12",
    readMins: 5,
    intro:
      "Both canyons sit along the same general stretch of road between Ouarzazate and Merzouga, and most longer itineraries visit both — but if you're weighing them against each other, here's the real difference.",
    blocks: [
      {
        type: "h2",
        text: "Todgha Gorge: narrower, more dramatic walls",
        },
      {
        type: "p",
        text: "Todgha's defining feature is how close its limestone walls press in — up to 300 metres high in places, with the canyon floor narrowing to just a few dozen metres at its tightest point near Tinghir. It's a genuine walking destination: a flat riverside path lets you go in on foot and properly feel the scale.",
      },
      {
        type: "h2",
        text: "Dades Gorge: longer, more varied scenery",
        },
      {
        type: "p",
        text: "The Dades Valley unfolds more gradually, through rose-growing villages, unusual folded rock formations locals call the Monkey Fingers, and a winding road that climbs higher than Todgha's. It rewards a slower drive rather than a single stop.",
      },
      {
        type: "h2",
        text: "If you can only pick one",
        },
      {
        type: "p",
        text: "Todgha for a dramatic, compact stop with a proper walk; Dades for scenic driving and a wider sense of the region. In practice, most of our [5-day and longer Sahara routes](/tours?len=4-7) visit both on the same day, since they sit roughly 50km apart along the same road corridor.",
      },
      {
        type: "h2",
        text: "Where they fit on the road to the Sahara",
        },
      {
        type: "p",
        text: "Both come after [Aït Ben Haddou](/blog/ait-ben-haddou-guide) and before Merzouga on the standard Marrakech-to-desert route, usually on day two of a multi-day itinerary — see our [Marrakech to Sahara desert guide](/blog/marrakech-to-sahara-desert-guide) for how the full drive sequences.",
      },
    ],
    related: ["marrakech-to-sahara-desert-guide", "ait-ben-haddou-guide", "tizi-n-tichka-pass-guide"],
  },
  {
    slug: "morocco-itinerary-from-tangier",
    title: "How to Plan a Morocco Itinerary From Tangier: A Port-City Guide",
    description:
      "Starting a Morocco trip in Tangier — what the city offers, and how routes typically flow south from the Strait of Gibraltar toward the Sahara.",
    keyword: "Morocco itinerary from Tangier",
    scene: "coast",
    origin: "Tangier",
    date: "2026-07-07",
    readMins: 6,
    intro:
      "Tangier is a different kind of entry point than Marrakech or Casablanca — a ferry ride from Spain puts it on plenty of itineraries that combine Morocco with a wider European or North African trip.",
    blocks: [
      {
        type: "h2",
        text: "What Tangier itself offers",
        },
      {
        type: "p",
        text: "A compact medina, the Kasbah Museum, and views out over the Strait of Gibraltar where the Atlantic meets the Mediterranean — on a clear day you can see Spain's coastline. It's worth a full day before heading further into the country.",
      },
      {
        type: "h2",
        text: "The natural first move south: Chefchaouen",
        },
      {
        type: "p",
        text: "Nearly every Tangier-starting route climbs into the Rif Mountains toward [Chefchaouen](/blog/is-chefchaouen-worth-visiting) first — it's the logical next stop before continuing to Fes and the rest of the country.",
      },
      {
        type: "h2",
        text: "How far south routes typically go",
        },
      {
        type: "p",
        text: "Shorter Tangier itineraries loop back north after Fes and Chefchaouen; longer ones continue all the way to the Sahara and Marrakech. Our [6-day Marrakech Express from Tangier](/tours/6-tan-mar) does the full north-to-south run in under a week; the [14-day grand tour from Tangier](/tours/14-tan) adds the Atlantic coast and a proper two-desert-night pace.",
      },
      {
        type: "h2",
        text: "Practical notes for a Tangier start",
        },
      {
        type: "p",
        text: "If you're arriving by ferry from Tarifa or Algeciras in Spain, build in a buffer — crossing times and border processing can add unpredictable hours to your first day. Flying directly into Tangier Ibn Battouta airport avoids that variable if your schedule is tight.",
      },
    ],
    related: ["is-chefchaouen-worth-visiting", "how-many-days-in-morocco", "casablanca-to-marrakech-worth-stopping"],
  },
  {
    slug: "best-moroccan-food-to-try",
    title: "Best Moroccan Food to Try on a Private Tour (Beyond Tagine)",
    description:
      "What to actually order in Morocco beyond tagine and couscous — regional specialties, street food, and what a private guide can point you toward.",
    keyword: "best Moroccan food to try",
    scene: "medina",
    origin: "Marrakech",
    date: "2026-07-02",
    readMins: 6,
    intro:
      "Tagine gets all the international attention, and it deserves some of it — but Moroccan food is far more varied than the one dish most visitors know by name.",
    blocks: [
      {
        type: "h2",
        text: "Beyond tagine: what else to order",
        },
      {
        type: "ul",
        items: [
          "Pastilla — a savoury-sweet pigeon or chicken pie dusted with cinnamon and sugar, a Fes specialty",
          "Harira — the tomato-and-lentil soup that breaks the fast during Ramadan, but worth ordering year-round",
          "Msemen — a flaky, square pan-fried flatbread, usually eaten for breakfast with honey or cheese",
          "Mechoui — slow-roasted whole lamb, a celebratory dish worth seeking out rather than expecting on a standard menu",
        ],
      },
      {
        type: "h2",
        text: "Street food worth trying",
        },
      {
        type: "p",
        text: "Jemaa el-Fnaa's food stalls in Marrakech are the obvious start — grilled meats, snail soup, fresh orange juice pressed to order — but smaller towns along desert routes often have equally good, far less crowded roadside stops your driver-guide will know.",
      },
      {
        type: "h2",
        text: "Regional differences worth knowing",
        },
      {
        type: "p",
        text: "Fes is generally considered the country's culinary capital, with the most refined versions of pastilla and elaborate slow-cooked dishes. Coastal towns like [Essaouira](/blog/essaouira-day-trip-from-marrakech) lean heavily on grilled fresh fish. The south, closer to the Sahara, favours heartier, simpler cooking suited to the climate.",
      },
      {
        type: "h2",
        text: "Mint tea, properly done",
        },
      {
        type: "p",
        text: "Poured from height into small glasses, sweetened generously, and offered constantly as a gesture of hospitality — refusing a first glass is mildly impolite, though nobody will force a second. It's less a drink than a small ritual, and one of the more consistent small pleasures across every region of the country.",
      },
    ],
    related: ["fes-vs-marrakech", "essaouira-day-trip-from-marrakech", "riad-vs-hotel-morocco"],
  },
  {
    slug: "essaouira-day-trip-from-marrakech",
    title: "Essaouira Day Trip from Marrakech: Is It Worth the Drive?",
    description:
      "What Essaouira offers on a day trip or overnight from Marrakech — the Skala ramparts, the fishing port, and whether it's worth the drive.",
    keyword: "Essaouira day trip from Marrakech",
    scene: "coast",
    origin: "Casablanca",
    date: "2026-06-27",
    readMins: 5,
    intro:
      "Essaouira is the Atlantic answer to Marrakech's desert-facing itineraries — a fortified port town with a completely different atmosphere, about 2.5 hours from the Red City.",
    blocks: [
      {
        type: "h2",
        text: "What makes it different from inland Morocco",
        },
      {
        type: "p",
        text: "Sea air, a working fishing harbour, and a medina laid out with wide blue-and-white streets rather than the tighter lanes of Marrakech or Fes — it's a genuinely different pace, often several degrees cooler than inland even in peak summer.",
      },
      {
        type: "h2",
        text: "What to actually do there",
        },
      {
        type: "p",
        text: "Walk the Skala de la Ville ramparts overlooking the Atlantic, browse the thuya-wood workshops in the medina, and watch the blue fishing boats unload the day's catch at the port — then eat it grilled at one of the harbourside stalls within the hour.",
      },
      {
        type: "h2",
        text: "Day trip vs overnight",
        },
      {
        type: "p",
        text: "A day trip covers the highlights but feels rushed given the drive time each way. An overnight lets you catch golden hour on the ramparts and the medina at its quietest in early morning, before day-trippers arrive from Marrakech. Several of our longer itineraries, like the [12-day tour from Marrakech](/tours/12-mar), build in a full overnight rather than a rushed day visit.",
      },
      {
        type: "h2",
        text: "The verdict",
        },
      {
        type: "p",
        text: "Worth the drive, especially if your trip is otherwise entirely inland and desert-focused — Essaouira is a genuine change of pace, not just another medina. If coastal time matters to you, ask about adding it to any Marrakech-based [itinerary](/tours?city=Marrakech).",
      },
    ],
    related: ["best-moroccan-food-to-try", "morocco-in-winter-what-to-expect", "how-many-days-in-morocco"],
  },
  {
    slug: "morocco-in-winter-what-to-expect",
    title: "Morocco in Winter: What to Expect and How to Pack",
    description:
      "Traveling Morocco between November and February — mountain snow, desert cold nights, coastal mildness, and how to pack for all three in one trip.",
    keyword: "Morocco in winter",
    scene: "medina",
    origin: "Fes",
    date: "2026-06-22",
    readMins: 6,
    intro:
      "Winter is an underrated season for Morocco — fewer crowds, clear desert skies, and genuinely comfortable daytime temperatures in most regions, with a few real cold-weather caveats worth knowing.",
    blocks: [
      {
        type: "h2",
        text: "The Atlas Mountains: it does snow",
        },
      {
        type: "p",
        text: "The High Atlas, including sections of the [Tizi n'Tichka pass](/blog/tizi-n-tichka-pass-guide), can see snow between December and February, occasionally closing the road briefly after heavy falls. It's rare enough not to derail most trips, but worth checking conditions if you're traveling in deep winter.",
      },
      {
        type: "h2",
        text: "The Sahara: cold nights, mild days",
        },
      {
        type: "p",
        text: "Daytime desert temperatures are often pleasantly mild in winter, but nights at a Merzouga desert camp can drop close to freezing — see our [what to pack guide](/blog/what-to-pack-sahara-desert-tour) for the layering that actually helps. The upside is exceptionally clear night skies for stargazing.",
      },
      {
        type: "h2",
        text: "The coast and cities: genuinely mild",
        },
      {
        type: "p",
        text: "Marrakech, Fes, and coastal towns like [Essaouira](/blog/essaouira-day-trip-from-marrakech) rarely drop below single digits even in January, and daytime temperatures are often comfortable enough for a light jacket rather than heavy winter wear.",
      },
      {
        type: "h2",
        text: "What to actually pack",
        },
      {
        type: "p",
        text: "A proper warm layer for evenings and the desert camp, a light jacket for city days, and closed shoes throughout — riads and older buildings aren't always centrally heated, so evenings indoors can be cooler than you'd expect.",
      },
      {
        type: "p",
        text: "For a wider regional picture of Morocco's winter weather patterns, [Wikipedia's climate overview of Morocco](https://en.wikipedia.org/wiki/Morocco#Climate) is a useful starting point before you pack.",
      },
    ],
    related: ["what-to-pack-sahara-desert-tour", "best-time-to-visit-sahara-desert-morocco", "essaouira-day-trip-from-marrakech"],
  },
  {
    slug: "private-driver-vs-group-tour-morocco",
    title: "Private Driver vs Group Tour in Morocco: Which Is Right for You",
    description:
      "Weighing a private driver-guide against a fixed group tour in Morocco — pace, cost per person, flexibility, and who each option actually suits.",
    keyword: "private driver vs group tour Morocco",
    scene: "medina",
    origin: "Marrakech",
    date: "2026-06-17",
    readMins: 6,
    intro:
      "It's the first real decision most people make when planning a Morocco trip, and it shapes everything else about how the days actually feel.",
    blocks: [
      {
        type: "h2",
        text: "What a group tour actually means",
        },
      {
        type: "p",
        text: "A fixed departure date, a bus or minivan shared with strangers, a set itinerary with little room to linger somewhere or skip a stop that doesn't interest you, and a lower per-person cost as the trade-off.",
      },
      {
        type: "h2",
        text: "What a private tour actually means",
        },
      {
        type: "p",
        text: "Your own vehicle and driver-guide, departure on your own dates rather than someone else's schedule, and the ability to ask to stop somewhere unplanned, skip something that doesn't interest your group, or add an extra night somewhere that's working. Every [Kasbah Trails itinerary](/tours) is built this way — there's no fixed-departure option because we don't run them.",
      },
      {
        type: "h2",
        text: "Where the cost difference actually comes from",
        },
      {
        type: "p",
        text: "A private trip for 2 people costs more per person than the same route split across a 15-seat group bus — but for families or small groups of 4 to 6, the per-person gap narrows significantly, since you're already splitting one private vehicle. See our [cost breakdown guide](/blog/how-much-does-private-morocco-tour-cost) for the specific factors that move the number.",
      },
      {
        type: "h2",
        text: "Who each option actually suits",
        },
      {
        type: "p",
        text: "Group tours suit travellers prioritising lowest cost and comfortable with a fixed schedule. Private tours suit travellers who want control over pace, especially [solo female travellers](/blog/is-morocco-safe-solo-female-travelers) or anyone uneasy navigating unfamiliar transport alone, families with kids who need flexible timing, or anyone who's been burned before by a group itinerary that rushed past something they wanted more time at.",
      },
    ],
    related: ["how-much-does-private-morocco-tour-cost", "is-morocco-safe-solo-female-travelers", "how-many-days-in-morocco"],
  },
];

export function getPost(slug: string) {
  return BLOG.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: ReturnType<typeof getPost>) {
  if (!post) return [];
  return post.related.map((slug) => getPost(slug)).filter((p): p is BlogPost => Boolean(p));
}
