// Blog content. Body text supports inline links via [label](url) —
// internal (starting with "/") render as next/link, external as a new-tab anchor.

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  /** Shorter variant for the <title> tag when `title` runs long enough to
   * get truncated in search results once " | Kasbah Trails" is appended.
   * Falls back to `title` when omitted. The on-page H1 always uses `title`. */
  metaTitle?: string;
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
    metaTitle: "How Many Days Do You Need in Morocco?",
    description:
      "From a 3-day dash to the Sahara to a full 15-day loop of the country — how many days in Morocco you actually need, by travel style and priority.",
    keyword: "how many days in Morocco",
    scene: "medina",
    origin: "Marrakech",
    date: "2026-09-18",
    readMins: 7,
    intro:
      "It's the first question almost every traveller asks, and there's no single right answer — it depends on what you're prioritising and how much ground you're willing to cover in a day. Morocco is bigger and more varied than its size on a map suggests: a week covers the highlights comfortably, a long weekend covers one region well, and the country keeps rewarding a slower pace for as long as you're willing to give it.",
    blocks: [
      {
        type: "h2",
        text: "3 to 4 days: one region, done properly",
        },
      {
        type: "p",
        text: "If you only have a long weekend, resist the urge to cover the whole country — pick one loop and do it properly instead of skimming three. The classic move is a [3-day Sahara desert tour from Marrakech](/tours/3-mar): over the Tizi n'Tichka pass and the High Atlas on day one, a night at a desert camp under Erg Chebbi's dunes, and the long drive back on day three. It's a tight schedule by any measure, but each stop still gets its own moment — you're not sprinting from kasbah to camel trek with no time to stand still and look at either.",
      },
      {
        type: "h2",
        text: "5 to 7 days: the sweet spot for a first trip",
        },
      {
        type: "p",
        text: "A week is enough to combine the desert with either the imperial cities or the Atlantic coast, and it's the length where the trip stops feeling like a sprint. Most first-time visitors land on something close to our [7-day Sahara desert tour from Marrakech](/tours/7-mar), which takes the same 3-day route and adds the Dades and Todgha gorges plus a full extra day around Merzouga — enough time to rest properly at camp rather than trek in, sleep, and leave again by mid-morning. See our [7-day itinerary breakdown](/blog/7-days-in-morocco-itinerary) for exactly how that week is paced day by day.",
      },
      {
        type: "h2",
        text: "8 to 12 days: the full circuit",
        },
      {
        type: "p",
        text: "This is where you can realistically add Fes's medina, the Rif mountains and Chefchaouen without turning the trip into a different bed every night. Our [10-day](/tours/10-totally-mar) and [12-day](/tours/12-mar) grand tours are both built around two nights in the desert instead of one, and that single change reshapes the pace of the whole itinerary — shorter driving days, longer stops, and enough slack that a market you didn't plan to linger in doesn't throw off everything scheduled after it.",
      },
      {
        type: "h2",
        text: "2 weeks or more: nothing left out",
        },
      {
        type: "p",
        text: "At 14 to 15 days you can fit in the Atlantic coast at Essaouira, the capital Rabat, and still keep the kind of unhurried pace that makes a trip memorable instead of exhausting — the difference between coming home rested and coming home needing another holiday. It's the version of Morocco we'd recommend without hesitation if your schedule allows it. See the full [15-day grand Morocco tour](/tours/15-grand-mar) for the complete route.",
      },
      {
        type: "p",
        text: "Whatever length you're working with, the number of days matters less than how many places you try to cram into them. According to [Morocco's National Tourist Office](https://www.visitmorocco.com/en), the country's regions don't blur into each other the way a first glance at the map might suggest. The Rif, the Atlas, the Sahara and the Atlantic coast feel less like variations on a theme and more like different countries entirely, each with its own climate, architecture and pace of life. Budget the driving time honestly rather than trying to see everything on one trip — the road between them is often the whole point, not a delay before the next stop.",
      },
    ],
    related: ["7-days-in-morocco-itinerary", "private-driver-vs-group-tour-morocco", "how-much-does-private-morocco-tour-cost"],
  },
  {
    slug: "best-time-to-visit-sahara-desert-morocco",
    title: "Best Time to Visit the Sahara Desert in Morocco (Month by Month)",
    metaTitle: "Best Time to Visit the Sahara Desert in Morocco",
    description:
      "When to go to the Erg Chebbi dunes near Merzouga — temperatures, crowds and what a desert camp night actually feels like in each season.",
    keyword: "best time to visit Sahara desert Morocco",
    scene: "dunes",
    origin: "Marrakech",
    date: "2026-09-14",
    readMins: 6,
    intro:
      "The Sahara doesn't have a bad season exactly, but it has a noticeably better one, and the difference shows up the moment the sun goes down. Daytime desert heat and near-freezing desert nights are both real possibilities depending on when you go — here's what to expect month by month, not the vague \"spring and autumn are nice\" answer most guides stop at.",
    blocks: [
      {
        type: "h2",
        text: "March to May: the best all-round window",
        },
      {
        type: "p",
        text: "Spring gives you warm, comfortable days in the dunes and nights that are cool but manageable in a proper desert camp with blankets — closer to a crisp evening than a genuine cold snap. It's also when the High Atlas passes — including the [Tizi n'Tichka](/blog/tizi-n-tichka-pass-guide) you'll cross to get there — are reliably clear of snow, so the drive itself is as easy as the destination. This is the season we get the most repeat questions about camel trek timing, since sunset rides are simply pleasant rather than a race to get everyone out of the heat before dark.",
      },
      {
        type: "h2",
        text: "June to August: hot, but not a dealbreaker",
        },
      {
        type: "p",
        text: "Merzouga regularly hits 40°C+ in midsummer, and standing in the open dunes at midday is genuinely punishing — not the kind of heat you push through on stubbornness alone. It's still workable if you plan around it: camel treks happen in the cooler evening rather than the afternoon, and a desert camp night still cools down noticeably once the sun's fully gone. If you're set on summer travel, consider our shorter [3-day desert tours](/tours?len=1-3) over longer ones, so you're spending less total time in the worst of it rather than four or five days baking through the hottest stretch of the year.",
      },
      {
        type: "h2",
        text: "September to November: our second recommendation",
        },
      {
        type: "p",
        text: "Autumn mirrors spring closely — warm days, cool nights, clear mountain passes — with the added bonus of noticeably lighter traffic on the road between Ouarzazate and Merzouga as the summer crowds thin out. Early September can still run hot, carrying over some of summer's intensity; by October the temperature has settled into something consistently comfortable, and it stays that way through most of November.",
      },
      {
        type: "h2",
        text: "December to February: cold nights, clear skies",
        },
      {
        type: "p",
        text: "Winter days in the desert are often pleasantly mild — jacket-off by midday, most of the time — but nights at a Sahara camp can drop close to freezing, cold enough that you'll want more than the blanket alone. It's one of the best times of year for stargazing: the same clear, dry air that lets the temperature fall also means almost no cloud cover between you and the sky. Pack real layers, though — this is the one season where a light jacket alone won't cut it. See our [Morocco in winter guide](/blog/morocco-in-winter-what-to-expect) for exactly what to bring.",
      },
      {
        type: "p",
        text: "For context on the wider Sahara's climate patterns beyond just the Erg Chebbi region our routes visit, [Wikipedia's overview of the Sahara](https://en.wikipedia.org/wiki/Sahara) is a useful primer on why the desert swings so hard between day and night temperatures. It comes down to the sand itself: unlike soil or water, it has almost no capacity to retain heat, so the moment the sun drops below the horizon, that heat radiates straight back out into a clear sky with nothing to hold it in.",
      },
    ],
    related: ["camel-trekking-merzouga-what-to-expect", "what-to-pack-sahara-desert-tour", "marrakech-to-sahara-desert-guide"],
  },
  {
    slug: "marrakech-to-sahara-desert-guide",
    title: "Marrakech to Sahara Desert: How to Get There and What to Expect",
    metaTitle: "Marrakech to Sahara Desert: How to Get There",
    description:
      "The real route from Marrakech to the Erg Chebbi dunes — the Tizi n'Tichka pass, Aït Ben Haddou, the gorges, and how long the drive actually takes.",
    keyword: "Marrakech to Sahara desert",
    scene: "dunes",
    origin: "Marrakech",
    date: "2026-09-10",
    readMins: 6,
    intro:
      "There's no direct road from Marrakech to Merzouga — the drive is the trip, winding through the High Atlas and along the kasbah road for two full days before the landscape finally opens into dunes. Here's what that route actually looks like, stage by stage, so you know what's coming before you're in the car.",
    blocks: [
      {
        type: "h2",
        text: "It's roughly two days of driving, not one",
        },
      {
        type: "p",
        text: "Merzouga, the gateway to the Erg Chebbi dunes, is about 560km from Marrakech by road — but almost nobody drives it in one push, and not because the roads are impassable. The route itself is most of the point, and cramming it into a single day would mean flying past the mountain pass, the ksar and the gorges that make the drive worth doing at all. Our [3-day Sahara desert tour from Marrakech](/tours/3-mar) splits it properly: Marrakech to the Dades Valley on day one, Dades to Merzouga on day two, and the return leg on day three.",
      },
      {
        type: "h2",
        text: "The Tizi n'Tichka pass comes first",
        },
      {
        type: "p",
        text: "Within the first couple of hours out of Marrakech, the road starts climbing into the High Atlas over the Tizi n'Tichka — at over 2,200m, one of the highest paved passes in North Africa, and one that announces itself with switchback after switchback carved into bare mountainside. Read our [full guide to the pass](/blog/tizi-n-tichka-pass-guide) if mountain driving is part of what you're curious, or a little nervous, about.",
      },
      {
        type: "h2",
        text: "Aït Ben Haddou and the kasbah road",
        },
      {
        type: "p",
        text: "On the far side of the pass, most routes stop at [Aït Ben Haddou](/blog/ait-ben-haddou-guide), the fortified earthen ksar that's appeared in a long list of film and television productions, before continuing through Ouarzazate — Morocco's film capital, and the last real town before the landscape empties out — and along what's commonly called the Road of a Thousand Kasbahs.",
      },
      {
        type: "h2",
        text: "The gorges, then the dunes",
        },
      {
        type: "p",
        text: "Depending on the exact itinerary, the second day usually threads through either the Dades Gorge, the Todgha Gorge, or both — narrow canyon roads squeezed between rock walls that are a complete change of scenery from the open desert plains waiting on the other side. By the time Merzouga appears, the transition to true Sahara dunes happens fast, often within the final 30 minutes of driving, as scrubby flatland gives way to the first golden ridgelines of Erg Chebbi.",
      },
      {
        type: "p",
        text: "For the geography of exactly which dune system you'll reach — Erg Chebbi, Morocco's most accessible major dune field, with peaks rising over 150 metres in places — the [overview of Morocco's desert regions](https://en.wikipedia.org/wiki/Erg_Chebbi) is a useful reference if you want the full picture before you go.",
      },
    ],
    related: ["tizi-n-tichka-pass-guide", "ait-ben-haddou-guide", "camel-trekking-merzouga-what-to-expect"],
  },
  {
    slug: "is-chefchaouen-worth-visiting",
    title: "Is Chefchaouen Worth Visiting? What the Blue City Is Really Like",
    metaTitle: "Is Chefchaouen Worth Visiting?",
    description:
      "A clear-eyed look at Chefchaouen beyond the Instagram photos — how blue it really is, how long to spend there, and how to fit it into a Morocco route.",
    keyword: "is Chefchaouen worth visiting",
    scene: "medina",
    origin: "Tangier",
    date: "2026-09-05",
    readMins: 5,
    intro:
      "Chefchaouen shows up on every Morocco itinerary photo, over and over, in nearly the same blue stairwell — which makes some travellers reasonably suspicious it's overhyped before they've even landed. Having driven through it more times than we can count, here's what it's actually like once you're standing in it rather than scrolling past it.",
    blocks: [
      {
        type: "h2",
        text: "Yes, it's really that blue",
        },
      {
        type: "p",
        text: "The blue-washed walls aren't limited to one photogenic street — they extend through most of the old medina, in a range running from pale sky-blue to deep cobalt depending on the building and how recently it's been repainted, with doorframes, steps and even flowerpots caught in the same wash. It photographs well because it genuinely looks like that in person; no filter involved, and no single angle doing all the work.",
      },
      {
        type: "h2",
        text: "How much time it actually needs",
        },
      {
        type: "p",
        text: "Half a day is enough to wander the main lanes and sit for a mint tea on Plaza Uta el-Hammam; a full day lets you add a hike out to the [Akchour waterfalls](https://en.wikipedia.org/wiki/Chefchaouen) in the hills above town, where the crowds thin out fast once you're past the first bridge. It's rarely the only stop on a route — most itineraries pair it with the Rif Mountains drive and either Fes or Tangier on either side, like our [6-day Marrakech Express from Tangier](/tours/6-tan-mar).",
      },
      {
        type: "h2",
        text: "Where it fits in a wider itinerary",
        },
      {
        type: "p",
        text: "Chefchaouen sits in the Rif Mountains in Morocco's north, which puts it naturally on routes starting or ending in Tangier, or as a detour worked into a Fes-based loop. It doesn't really work as a Marrakech day trip — the drive alone runs 8-plus hours each way — so it's worth building your route around it from the start rather than trying to bolt it on at the last minute.",
      },
      {
        type: "h2",
        text: "So, is it worth it?",
        },
      {
        type: "p",
        text: "Yes, with one caveat: don't stop at the one famous staircase and call it done. Walk the quieter residential lanes above the main square instead — they're just as blue, often more atmospheric with laundry strung between doorways and cats asleep on the steps, and hold a fraction of the crowd. If your trip already routes through the north, there's no real reason to skip it.",
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
      "Aït Ben Haddou is the single most photographed building on Morocco's desert road, and for good reason — it's one of the best-preserved examples of southern Moroccan earthen architecture still standing, its stacked towers and crenellated walls rising straight out of the riverbed below.",
    blocks: [
      {
        type: "h2",
        text: "What it is",
        },
      {
        type: "p",
        text: "A ksar — a fortified, communal earthen settlement — built into a hillside along the old caravan route between the Sahara and Marrakech, its walls raised from packed mud, straw and gravel using building techniques that go back centuries. It's a [UNESCO World Heritage Site](https://whc.unesco.org/en/list/444/), listed since 1987, and though most of the current residents have moved to the newer village across the river, a handful of families still live inside the old walls and keep a few small shops and guesthouses running among the ruins.",
      },
      {
        type: "h2",
        text: "Why it looks familiar",
        },
      {
        type: "p",
        text: "Its dramatic silhouette against the Atlas foothills has made it a repeated film location for decades — most visibly in Gladiator and several Game of Thrones sequences, thanks to the nearby Atlas Studios in Ouarzazate, one of the largest film studios in the world by surface area. You don't need to have seen any of them to appreciate the setting, but it explains why the site feels oddly familiar even on a first visit, like a place you've walked through before in someone else's story.",
      },
      {
        type: "h2",
        text: "How to visit it well",
        },
      {
        type: "p",
        text: "Most Marrakech-to-Sahara routes stop here on day one, typically mid-morning after crossing the [Tizi n'Tichka pass](/blog/tizi-n-tichka-pass-guide). Give it at least 45 minutes to an hour — enough time to cross the footbridge (or wade the river in dry months), climb through the ksar's narrow covered passages between its old kasbahs, and reach the top for the view back down over the valley. It's included as a stop on essentially every one of our [Marrakech-based desert tours](/tours?city=Marrakech).",
      },
      {
        type: "h2",
        text: "A quieter alternative nearby",
        },
      {
        type: "p",
        text: "If Aït Ben Haddou feels busy, the lesser-visited [Telouet Kasbah](/blog/tizi-n-tichka-pass-guide) — the former stronghold of the Glaoui family, who effectively ruled southern Morocco's trade routes for decades — sits on an old alternate road nearby and draws a fraction of the visitors, with interior tilework and painted ceilings that are arguably even more striking, just less famous.",
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
      "The Sahara's day-to-night temperature swing catches more travellers off guard than anything else about a desert tour — shorts-and-sunscreen weather by afternoon, genuine jacket weather two hours after sunset. Here's what actually earns a place in your bag, and what you can safely leave at the riad.",
    blocks: [
      {
        type: "h2",
        text: "Layers, always layers",
        },
      {
        type: "p",
        text: "Desert days can be hot even outside summer, and desert nights drop fast once the sun sets — sand has almost no ability to hold onto heat, so the swing between the two can be dramatic even within a single evening. A light long-sleeve layer for sun protection during the day, a warmer fleece or jacket for after dark, and a scarf or shemagh that doubles as both sun and wind protection cover most conditions you'll actually meet. See our [best-time-to-visit guide](/blog/best-time-to-visit-sahara-desert-morocco) for how much colder to expect by season.",
      },
      {
        type: "h2",
        text: "Sun protection that actually works",
        },
      {
        type: "p",
        text: "A wide-brimmed hat beats a cap in open dunes, since there's no shade anywhere to duck into and a cap leaves your ears and neck exposed. Sunscreen matters more than usual given how much reflected sun comes off pale sand from below as well as above, and sunglasses with real UV protection aren't optional — the glare off the dunes at midday is intense enough to give you a headache within the hour if you skip them.",
      },
      {
        type: "h2",
        text: "For the camel trek and camp",
        },
      {
        type: "p",
        text: "Closed shoes you don't mind filling with sand — it happens regardless of footwear choice, so don't bother hunting for the mythical sand-proof boot — plus a change of socks, and a headlamp or phone flashlight for moving around camp after dark, since desert camps generally run on limited generator or solar power rather than a lit path to every tent. See our [camel trekking guide](/blog/camel-trekking-merzouga-what-to-expect) for what the trek and camp night actually involve.",
      },
      {
        type: "h2",
        text: "The small stuff people forget",
        },
      {
        type: "p",
        text: "A portable phone charger or power bank, since camp power is limited and shared among everyone staying that night. Wet wipes, since running water at camp is basic at best. And a dust-resistant bag or cover for cameras and phones — fine Sahara sand finds its way into any zip, seam or lens left open, and it travels further than you'd expect on even a still night.",
      },
      {
        type: "p",
        text: "If your route also crosses the High Atlas beforehand, layer for the mountain pass too — the [Tizi n'Tichka](/blog/tizi-n-tichka-pass-guide) can be properly cold at altitude even on days when Merzouga itself is warm, so don't pack everything warm at the bottom of the bag assuming you'll only need it once you reach the dunes.",
      },
    ],
    related: ["best-time-to-visit-sahara-desert-morocco", "camel-trekking-merzouga-what-to-expect", "morocco-in-winter-what-to-expect"],
  },
  {
    slug: "fes-vs-marrakech",
    title: "Fes vs Marrakech: Which Imperial City Should You Visit First?",
    metaTitle: "Fes vs Marrakech: Which Should You Visit First?",
    description:
      "Comparing Fes and Marrakech for a Morocco trip — medina size, atmosphere, day trips, and which one to prioritise if you can only pick one.",
    keyword: "Fes vs Marrakech",
    scene: "medina",
    origin: "Fes",
    date: "2026-08-21",
    readMins: 6,
    intro:
      "Both are imperial cities with major medinas, both show up on nearly every Morocco itinerary, but walking through them feels nothing alike — different pace, different crowd, different sense of what century you're in. If your itinerary only has room for one, here's how to decide.",
    blocks: [
      {
        type: "h2",
        text: "Marrakech: livelier, more geared to visitors",
        },
      {
        type: "p",
        text: "Marrakech's medina is dense and commercial, centred on Jemaa el-Fnaa's food stalls, storytellers and snake charmers, with souks radiating outward in every direction. It's an easier first stop for jet-lagged travellers — more riads, more English spoken, an airport a short taxi ride from the old walls — and it's the starting point for most desert routes, including our [3-day](/tours/3-mar) and [5-day](/tours/5-mar) Sahara tours.",
      },
      {
        type: "h2",
        text: "Fes: older, quieter, more intact",
        },
      {
        type: "p",
        text: "Fes el-Bali is generally considered the [largest car-free urban area in the world](https://en.wikipedia.org/wiki/Fes_el_Bali), and it feels it the moment you step inside — narrower lanes, donkeys still doing the job vans do elsewhere, working artisan quarters rather than tourist-facing souks, and the Chouara tannery, one of the oldest in the world, still operating in full view of the terraces above it, dye pits and all.",
      },
      {
        type: "h2",
        text: "If you can only pick one",
        },
      {
        type: "p",
        text: "For a first Morocco trip focused on the Sahara, Marrakech makes more practical sense as your base — it's the standard starting point, and desert routes from there are noticeably shorter than from Fes. If your priority is medina atmosphere and history over logistics, Fes edges it out, particularly if you're also routing through [Chefchaouen](/blog/is-chefchaouen-worth-visiting) or the Rif, where Fes sits closer on the map.",
      },
      {
        type: "h2",
        text: "The good news: most longer routes include both",
        },
      {
        type: "p",
        text: "Anything 6 days or longer tends to connect them, so the either/or framing above mostly only bites on shorter trips. Our [6-day desert tour from Marrakech to Fes](/tours/6-mar-fes) and most [8–11 day grand tours](/tours?len=8-11) visit both cities on either side of the desert loop, which is the real answer for most travellers: don't choose, just sequence them properly.",
      },
    ],
    related: ["how-many-days-in-morocco", "best-moroccan-food-to-try", "riad-vs-hotel-morocco"],
  },
  {
    slug: "how-much-does-private-morocco-tour-cost",
    title: "How Much Does a Private Morocco Tour Cost? A Realistic Budget Breakdown",
    metaTitle: "How Much Does a Private Morocco Tour Cost?",
    description:
      "What actually drives the price of a private Morocco tour — vehicle, driver-guide, accommodation level, season and group size — and how quoting works.",
    keyword: "how much does a private Morocco tour cost",
    scene: "medina",
    origin: "Marrakech",
    date: "2026-08-16",
    readMins: 6,
    intro:
      "There's no single published price for a private Morocco tour, and that's a deliberate choice rather than a marketing dodge — several variables move the real quote far more than the headline number of days does.",
    blocks: [
      {
        type: "h2",
        text: "What's usually included",
        },
      {
        type: "p",
        text: "A private air-conditioned vehicle and driver-guide for the full trip, accommodation in riads and kasbahs plus a desert camp night, the Erg Chebbi camel trek, daily breakfast, local guides in the imperial cities, and all local taxes — the same baseline across every itinerary, adjusted only by length and the level of accommodation you choose. See the full included/excluded breakdown on any [tour's itinerary page](/tours); it's listed the same way on every route so you can compare properly.",
      },
      {
        type: "h2",
        text: "What usually isn't",
        },
      {
        type: "ul",
        items: [
          "International flights to and from Morocco",
          "Most lunches and dinners — breakfast is included, but leaving other meals open means you choose your own spot rather than eat wherever the itinerary decides",
          "Monument and museum entrance fees, which vary by site",
          "Tips for your driver-guide, at your discretion",
          "Travel insurance, which we'd recommend arranging before you travel",
        ],
      },
      {
        type: "h2",
        text: "The four things that actually move the price",
        },
      {
        type: "p",
        text: "Group size, since the cost of one private vehicle and driver splits per person, and a trip for 2 costs more per head than the identical route for 6. Season, since spring and autumn command slightly higher rates than deep summer's quieter months. Riad category, since a simple guesthouse and a boutique riad with a pool and a hammam are genuinely different price tiers. And trip length, which is the most obvious lever but rarely the only one. Two people travelling 5 days in April will get a meaningfully different quote than six people travelling the same 5 days in August, even on an identical route down to the last stop.",
      },
      {
        type: "h2",
        text: "Why we don't publish flat prices",
        },
      {
        type: "p",
        text: "Those four variables move the real number enough that a single published rate would end up either overcharging small groups travelling in low season or undercharging large groups booking at the peak of summer — neither of which is a number we're willing to put our name to. Message us on [WhatsApp](/contact) with your dates and traveller count and we'll send back a real, itemised quote built around your actual trip, not a vague starting-from teaser.",
      },
    ],
    related: ["private-driver-vs-group-tour-morocco", "riad-vs-hotel-morocco", "how-many-days-in-morocco"],
  },
  {
    slug: "camel-trekking-merzouga-what-to-expect",
    title: "Camel Trekking in Merzouga: What Actually Happens on a Desert Camp Night",
    metaTitle: "Camel Trekking in Merzouga: What to Expect",
    description:
      "A walk-through of what a Merzouga camel trek and Sahara desert camp night actually involve, from sunset ride to sunrise over the dunes.",
    keyword: "camel trekking Merzouga",
    scene: "dunes",
    origin: "Marrakech",
    date: "2026-08-11",
    readMins: 6,
    intro:
      "It's the single most-anticipated part of almost every Morocco itinerary, and also the part people have the least accurate mental picture of beforehand — expecting either a quick photo-op or an ordeal, when it's really neither. Here's what actually happens, from the moment you mount up to the moment you're back in the car the next morning.",
    blocks: [
      {
        type: "h2",
        text: "Late afternoon: the ride out",
        },
      {
        type: "p",
        text: "Camel treks into the Erg Chebbi dunes almost always leave in the late afternoon, timed deliberately so the ride to camp coincides with sunset rather than arriving in the dark or the midday heat. It's roughly an hour on the back of a [dromedary](https://en.wikipedia.org/wiki/Dromedary) — the one-humped camel used throughout North Africa — riding single file, led by a guide on foot who knows the dune line by memory. It's steadier and less physically demanding than it looks from the ground, though your legs and lower back will feel it the next day if you're not used to riding.",
      },
      {
        type: "h2",
        text: "Arrival at camp",
        },
      {
        type: "p",
        text: "Desert camps range from simple shared Berber tents to more comfortable private setups with real beds and en-suite tents, depending on which [tour](/tours) you've booked. Either way, expect a communal dinner cooked over an open fire, often with live drumming around it afterward, and properly dark skies once the sun's fully down — Merzouga sits far enough from any real light pollution that the Milky Way is visible to the naked eye on a clear night.",
      },
      {
        type: "h2",
        text: "Overnight",
        },
      {
        type: "p",
        text: "It gets cold fast once the sun sets, faster than most people expect from a desert — see our [packing guide](/blog/what-to-pack-sahara-desert-tour) for what to bring. Camps typically provide blankets, but layering your own clothing underneath rather than relying on the blanket alone makes a real difference to how well you actually sleep.",
      },
      {
        type: "h2",
        text: "Sunrise, and the trip out",
        },
      {
        type: "p",
        text: "Most itineraries have you up well before dawn to climb the dunes directly above camp and watch the sunrise from the top — worth the early alarm entirely on its own, and one of the few moments on a trip like this that's genuinely quiet. Some routes include a second night and a 4x4 excursion the following day, like our [4-day Marrakech desert tour](/tours/4-mar) with its added off-road day and nomad family visit, rather than heading straight back after just one night in camp.",
      },
    ],
    related: ["what-to-pack-sahara-desert-tour", "best-time-to-visit-sahara-desert-morocco", "marrakech-to-sahara-desert-guide"],
  },
  {
    slug: "is-morocco-safe-solo-female-travelers",
    title: "Is Morocco Safe for Solo Female Travelers? An Honest Guide",
    description:
      "A practical look at solo female travel in Morocco — what to expect, what helps, and why a private driver-guide changes the experience.",
    keyword: "is Morocco safe for solo female travelers",
    scene: "medina",
    origin: "Marrakech",
    date: "2026-08-06",
    readMins: 6,
    intro:
      "This is one of the most common questions we get, and it deserves a straight, specific answer rather than either blanket reassurance or blanket caution — both of which are easier to write than the truth.",
    blocks: [
      {
        type: "h2",
        text: "The baseline",
        },
      {
        type: "p",
        text: "Morocco is a widely visited, tourism-dependent country, and solo women travel it every day without incident — it's not a niche or unusual choice, whatever the question implies. That said, medina streets can involve more direct attention and unsolicited comments than many Western travellers are used to at home — mostly harmless but occasionally tiresome, particularly in the busiest souks of Marrakech and Fes where foot traffic and shop-front calling are constant. It's worth checking your own government's [current travel advice for Morocco](https://www.gov.uk/foreign-travel-advice/morocco) before you go, since those pages track region-specific updates we wouldn't otherwise think to flag.",
      },
      {
        type: "h2",
        text: "What actually helps",
        },
      {
        type: "ul",
        items: [
          "Modest dress in medinas and rural areas reduces attention noticeably, even though it's not strictly required anywhere",
          "A private driver-guide means you're never navigating an unfamiliar bus timetable or hailing a taxi alone after dark",
          "Booking accommodation inside a riad with its own locked door onto the medina, rather than a hotel fronting a busy commercial strip",
          "Having a local contact — your guide — who knows the area well enough to step in if a moment in a souk starts to feel uncomfortable",
        ],
      },
      {
        type: "h2",
        text: "Where a private tour changes the calculation",
        },
      {
        type: "p",
        text: "The biggest single safety factor for solo travel in almost any country is usually transport and logistics, not the underlying safety of the destination itself. A [private driver-guide](/blog/private-driver-vs-group-tour-morocco) for the whole trip removes the need to negotiate taxis, decode a bus schedule in a language you don't read, or navigate unfamiliar mountain roads alone after dark — which is a large part of why solo travellers make up a meaningful, steady share of our private bookings, not an exception we occasionally accommodate.",
      },
      {
        type: "h2",
        text: "The Sahara specifically",
        },
      {
        type: "p",
        text: "Desert camps are well-established and run by experienced local operators who do this every night of the season, not a one-off setup thrown together for tourists. Solo women join [camel treks and desert camp nights](/blog/camel-trekking-merzouga-what-to-expect) regularly and without issue, especially as part of a small private group with a known guide rather than an anonymous large one where nobody's really keeping track of anyone.",
      },
    ],
    related: ["private-driver-vs-group-tour-morocco", "riad-vs-hotel-morocco", "how-much-does-private-morocco-tour-cost"],
  },
  {
    slug: "tizi-n-tichka-pass-guide",
    title: "The Tizi n'Tichka Pass: Driving Morocco's Most Dramatic Mountain Road",
    metaTitle: "The Tizi n'Tichka Pass: A Driving Guide",
    description:
      "What the Tizi n'Tichka pass over the High Atlas actually involves — elevation, hairpin turns, the Telouet Kasbah detour, and what to expect.",
    keyword: "Tizi n'Tichka pass",
    scene: "dunes",
    origin: "Marrakech",
    date: "2026-08-01",
    readMins: 5,
    intro:
      "Every route from Marrakech to the Sahara has to cross the High Atlas somewhere, and the Tizi n'Tichka is the road that does it: a spectacular, relentlessly winding mountain pass that turns a transit day into one of the trip's genuine highlights.",
    blocks: [
      {
        type: "h2",
        text: "The numbers",
        },
      {
        type: "p",
        text: "The [pass](https://en.wikipedia.org/wiki/Tizi_n%27Tichka) tops out above 2,200 metres, making the N9 highway one of the highest paved roads in North Africa and a genuine feat of mountain engineering. The full climb and descent from Marrakech's side to Ouarzazate's takes a few hours including stops, working through a long series of switchbacks carved directly into the mountainside, with the valley falling further away below at every turn.",
      },
      {
        type: "h2",
        text: "What you'll actually see",
        },
      {
        type: "p",
        text: "Berber villages built directly into the hillsides, roadside stalls selling geodes and fossils pulled from the surrounding rock, and — weather depending — snow-capped peaks visible even in warmer months at the higher elevations. It's a different Morocco from the medinas entirely: rural, mountainous, sparsely populated, and quiet in a way the cities never are.",
      },
      {
        type: "h2",
        text: "The Telouet Kasbah detour",
        },
      {
        type: "p",
        text: "A worthwhile side trip on the eastern side of the pass is the Telouet Kasbah, the former stronghold of the Glaoui family, who effectively controlled the southern trade routes for decades from this one fortress. It draws far fewer visitors than [Aït Ben Haddou](/blog/ait-ben-haddou-guide) further along the same road, despite interiors of painted wood and zellige tilework that are every bit as striking, if noticeably more weathered.",
      },
      {
        type: "h2",
        text: "Practical notes",
        },
      {
        type: "p",
        text: "It's not a road to rush — hairpin turns come one after another and shoulders narrow to almost nothing in places, with a drop that gets your attention if you're in the front seat. Every one of our [Marrakech-based Sahara routes](/tours?city=Marrakech) crosses it with an experienced local driver-guide who knows the road's rhythm from doing it week in, week out, which matters more here than on almost any other stretch of Moroccan highway.",
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
      "A week is the sweet spot for a first Morocco trip — enough time to properly reach the Sahara and come back without rushing either leg, but short enough to fit most standard holiday schedules without using up an entire year's leave.",
    blocks: [
      {
        type: "h2",
        text: "Days 1 to 2: Marrakech to the Sahara's edge",
        },
      {
        type: "p",
        text: "Cross the [Tizi n'Tichka pass](/blog/tizi-n-tichka-pass-guide), stop at [Aït Ben Haddou](/blog/ait-ben-haddou-guide), and spend the first two nights working steadily through the Dades and Todgha gorges before the landscape finally opens up into Merzouga's dunes.",
      },
      {
        type: "h2",
        text: "Day 3: camel trek and desert camp",
        },
      {
        type: "p",
        text: "Sunset ride into Erg Chebbi, dinner and drumming around the fire at camp, then sunrise from the dune ridge above it the next morning — see our [camel trekking guide](/blog/camel-trekking-merzouga-what-to-expect) for the full sequence of what actually happens that night.",
      },
      {
        type: "h2",
        text: "Days 4 to 5: the return loop or onward to Fes",
        },
      {
        type: "p",
        text: "Depending on your exact route, day 4 either heads back toward Marrakech via a different stretch of the kasbah road than the one you arrived on, or continues north toward Fes through the cedar forests of the Middle Atlas, where you've a real chance of spotting Barbary macaques by the roadside. Our [7-day Sahara desert tour from Marrakech](/tours/7-mar) does the former; several of our [6-day routes](/tours?len=4-7) do the latter.",
      },
      {
        type: "h2",
        text: "Days 6 to 7: winding down",
        },
      {
        type: "p",
        text: "The last two days are typically lighter on driving — a full day in whichever city you end in, Marrakech or Fes, giving you real, unhurried time in the medina rather than just passing through with a suitcase in tow. This is deliberate pacing, not padding: back-to-back long drives every single day is the single biggest complaint we hear about badly planned Morocco trips, and it's an easy mistake to avoid once you know to watch for it.",
      },
      {
        type: "p",
        text: "If a week doesn't feel like quite enough once you've seen the route laid out, our [how many days in Morocco guide](/blog/how-many-days-in-morocco) breaks down exactly what an extra 3 to 5 days adds to the itinerary, and where those days are best spent.",
      },
    ],
    related: ["how-many-days-in-morocco", "marrakech-to-sahara-desert-guide", "camel-trekking-merzouga-what-to-expect"],
  },
  {
    slug: "casablanca-to-marrakech-worth-stopping",
    title: "Casablanca to Marrakech: Is It Worth Stopping, and What to See",
    metaTitle: "Casablanca to Marrakech: Is It Worth Stopping?",
    description:
      "What to actually do with time in Casablanca before heading to Marrakech — the Hassan II Mosque, and whether it's worth more than a half-day.",
    keyword: "Casablanca to Marrakech",
    scene: "medina",
    origin: "Casablanca",
    date: "2026-07-22",
    readMins: 5,
    intro:
      "Casablanca is where a lot of international flights land, which means a lot of travellers end up standing in an unfamiliar city on day one, working out how much time, if any, it deserves before heading on to Marrakech.",
    blocks: [
      {
        type: "h2",
        text: "What Casablanca is actually good for",
        },
      {
        type: "p",
        text: "It's Morocco's largest city and its economic capital, but it's not primarily a tourism destination, and the appeal is genuinely narrower than Marrakech or Fes — this is a working city first. The main reason to stop is the [Hassan II Mosque](https://en.wikipedia.org/wiki/Hassan_II_Mosque), one of the largest mosques in the world, built partly over the Atlantic itself, and one of the few in Morocco that non-Muslim visitors can enter on a guided tour.",
      },
      {
        type: "h2",
        text: "How much time it needs",
        },
      {
        type: "p",
        text: "Half a day covers it comfortably — the mosque, a walk along the corniche watching the Atlantic break against the seawall, maybe lunch somewhere nearby. It rarely justifies a full overnight stay unless your flight timing makes an early Casablanca departure or arrival genuinely unavoidable.",
      },
      {
        type: "h2",
        text: "How it fits into a route",
        },
      {
        type: "p",
        text: "Several of our [Casablanca-starting tours](/tours?city=Casablanca) route through it as a first-morning stop before heading toward Rabat and the north, or directly toward Marrakech and the desert beyond. It works well as a bookend to a longer trip rather than a standalone destination in its own right — see our [5-day Casablanca to Marrakech tour](/tours/5-casa-mar) for how that plays out in practice.",
      },
      {
        type: "h2",
        text: "The drive itself",
        },
      {
        type: "p",
        text: "Casablanca to Marrakech direct is about 3 hours on Morocco's toll highway — flat, fast and straightforward compared to the mountain roads further south, and a reasonable, gentle way to ease into a longer trip before the more dramatic driving that comes later.",
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
      "It's a word that shows up on every Morocco booking site next to half the listings, and it's worth understanding before you choose, since a riad and a hotel are different kinds of stay entirely, not just different price tiers of the same thing.",
    blocks: [
      {
        type: "h2",
        text: "What a riad actually is",
        },
      {
        type: "p",
        text: "A [riad](https://en.wikipedia.org/wiki/Riad) is a traditional Moroccan house or palace built around an interior courtyard or garden, historically designed with the family's private life turned inward and away from the street outside — a blank wall facing the alley, and everything worth seeing hidden behind the front door. Most riads operating as guesthouses today have been carefully restored, keeping features like carved plasterwork, hand-cut zellige tilework, and a central courtyard that often doubles as the breakfast room, sometimes open to the sky above it.",
      },
      {
        type: "h2",
        text: "Why they usually win inside a medina",
        },
      {
        type: "p",
        text: "Medina streets are narrow and vehicle-free in most sections, which large hotels simply can't be built into — riads, being converted historic houses rather than purpose-built towers, fit the space naturally because they were always meant to be there. Staying in one means genuine walking distance to the souks and main sights, rather than a taxi ride each way from a hotel district outside the old walls.",
      },
      {
        type: "h2",
        text: "Where hotels still make sense",
        },
      {
        type: "p",
        text: "Newer parts of cities like Casablanca's business district, or coastal towns like Essaouira and Agadir where beachfront access matters more than medina proximity, are where a conventional hotel — or a proper beach resort — often makes more practical sense than squeezing into a riad far from the water.",
      },
      {
        type: "h2",
        text: "What's included on a Kasbah Trails tour",
        },
      {
        type: "p",
        text: "Every private itinerary includes riad and kasbah accommodation as standard, plus a desert camp night for any route that reaches the Sahara — see any [tour's full inclusions](/tours) for exactly what's covered on that route. If you already have a specific riad in mind from your own research, mention it when you message us and we'll check availability for your dates before defaulting to our usual picks.",
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
      "Both canyons sit along the same general stretch of road between Ouarzazate and Merzouga, close enough that most longer itineraries visit both in a single day — but if you're weighing them against each other for a shorter trip, here's the real difference between the two.",
    blocks: [
      {
        type: "h2",
        text: "Todgha Gorge: narrower, more dramatic walls",
        },
      {
        type: "p",
        text: "[Todgha Gorge's](https://en.wikipedia.org/wiki/Todgha_Gorge) defining feature is how close its limestone walls press in overhead — up to 300 metres high in places, with the canyon floor narrowing to just a few dozen metres at its tightest point near Tinghir, where the road and a shallow river share almost the same strip of ground. It's a genuine walking destination rather than a drive-by viewpoint: a flat riverside path lets you go in on foot and properly feel the scale of the rock closing in above you.",
      },
      {
        type: "h2",
        text: "Dades Gorge: longer, more varied scenery",
        },
      {
        type: "p",
        text: "The Dades Valley unfolds more gradually, through rose-growing villages that perfume the air for a stretch each spring, unusual folded rock formations locals call the Monkey Fingers, and a winding road that climbs considerably higher than Todgha's before it's done. It rewards a slower drive with frequent stops, rather than one single dramatic photo point.",
      },
      {
        type: "h2",
        text: "If you can only pick one",
        },
      {
        type: "p",
        text: "Todgha for a dramatic, compact stop with a proper walk you can do in under an hour; Dades for scenic driving and a broader sense of the region unfolding around you. In practice, most of our [5-day and longer Sahara routes](/tours?len=4-7) visit both on the same day, since they sit roughly 50km apart along the same road corridor and neither takes long enough to justify skipping the other.",
      },
      {
        type: "h2",
        text: "Where they fit on the road to the Sahara",
        },
      {
        type: "p",
        text: "Both come after [Aït Ben Haddou](/blog/ait-ben-haddou-guide) and before Merzouga on the standard Marrakech-to-desert route, usually falling on day two of a multi-day itinerary, sandwiched between the kasbah road and the first sight of real dunes — see our [Marrakech to Sahara desert guide](/blog/marrakech-to-sahara-desert-guide) for how the full drive sequences from start to finish.",
      },
    ],
    related: ["marrakech-to-sahara-desert-guide", "ait-ben-haddou-guide", "tizi-n-tichka-pass-guide"],
  },
  {
    slug: "morocco-itinerary-from-tangier",
    title: "How to Plan a Morocco Itinerary From Tangier: A Port-City Guide",
    metaTitle: "How to Plan a Morocco Itinerary From Tangier",
    description:
      "Starting a Morocco trip in Tangier — what the city offers, and how routes typically flow south from the Strait of Gibraltar toward the Sahara.",
    keyword: "Morocco itinerary from Tangier",
    scene: "coast",
    origin: "Tangier",
    date: "2026-07-07",
    readMins: 6,
    intro:
      "Tangier is a different kind of entry point than Marrakech or Casablanca — a short ferry ride from Spain puts it on plenty of itineraries that combine Morocco with a wider European or North African trip, rather than standing alone as the whole holiday.",
    blocks: [
      {
        type: "h2",
        text: "What Tangier itself offers",
        },
      {
        type: "p",
        text: "A compact, walkable medina, the Kasbah Museum housed in the old sultan's palace, and views out over the [Strait of Gibraltar](https://en.wikipedia.org/wiki/Strait_of_Gibraltar) where the Atlantic meets the Mediterranean — on a genuinely clear day you can make out Spain's coastline across the water. It's worth a full day before heading further into the country, rather than treating it as a pure transit stop.",
      },
      {
        type: "h2",
        text: "The natural first move south: Chefchaouen",
        },
      {
        type: "p",
        text: "Nearly every Tangier-starting route climbs into the Rif Mountains toward [Chefchaouen](/blog/is-chefchaouen-worth-visiting) first, and for good reason — it's the logical next stop geographically, and it sets the tone for the mountain scenery that carries through to Fes and the rest of the country.",
      },
      {
        type: "h2",
        text: "How far south routes typically go",
        },
      {
        type: "p",
        text: "Shorter Tangier itineraries loop back north after Fes and Chefchaouen; longer ones push all the way south to the Sahara and Marrakech, turning the whole trip into a genuine coast-to-desert crossing. Our [6-day Marrakech Express from Tangier](/tours/6-tan-mar) does the full north-to-south run in under a week; the [14-day grand tour from Tangier](/tours/14-tan) adds the Atlantic coast on top and settles into a proper two-desert-night pace instead of rushing the Sahara leg.",
      },
      {
        type: "h2",
        text: "Practical notes for a Tangier start",
        },
      {
        type: "p",
        text: "If you're arriving by ferry from Tarifa or Algeciras in Spain, build in a real buffer — crossing times and border processing can add unpredictable hours to your first day, more than the ferry timetable alone suggests. Flying directly into Tangier Ibn Battouta airport sidesteps that variable entirely if your schedule is tight and you can't afford to lose a morning to a queue.",
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
      "Tagine gets all the international attention, and it deserves some of it — the slow-cooked stew really is that good when done properly — but [Moroccan cuisine](https://en.wikipedia.org/wiki/Moroccan_cuisine) is far more varied than the one dish most visitors arrive already knowing by name.",
    blocks: [
      {
        type: "h2",
        text: "Beyond tagine: what else to order",
        },
      {
        type: "ul",
        items: [
          "Pastilla — a savoury-sweet pigeon or chicken pie, its crisp pastry dusted with cinnamon and sugar, a Fes specialty that sounds like it shouldn't work and absolutely does",
          "Harira — the tomato-and-lentil soup that traditionally breaks the fast during Ramadan, thickened with flour or egg and worth ordering year-round, not just in season",
          "Msemen — a flaky, square pan-fried flatbread, folded in layers and usually eaten for breakfast with honey or cheese melted into the still-warm dough",
          "Mechoui — slow-roasted whole lamb, cooked for hours until it falls off the bone, a celebratory dish worth actively seeking out rather than expecting on a standard restaurant menu",
        ],
      },
      {
        type: "h2",
        text: "Street food worth trying",
        },
      {
        type: "p",
        text: "Jemaa el-Fnaa's food stalls in Marrakech are the obvious start — grilled meats sizzling over open coals, snail soup ladled from huge steaming pots, fresh orange juice pressed to order for less than the price of a bottled drink back home — but smaller towns along the desert routes often have equally good, far less crowded roadside stops that your driver-guide will already know and steer you toward.",
      },
      {
        type: "h2",
        text: "Regional differences worth knowing",
        },
      {
        type: "p",
        text: "Fes is generally considered the country's culinary capital, home to the most refined versions of pastilla and the kind of elaborate, hours-long slow-cooked dishes that built the city's reputation. Coastal towns like [Essaouira](/blog/essaouira-day-trip-from-marrakech) lean heavily on grilled fresh fish, caught that same morning and cooked simply. The south, closer to the Sahara, favours heartier, simpler cooking built around what actually keeps well in a hot, dry climate.",
      },
      {
        type: "h2",
        text: "Mint tea, properly done",
        },
      {
        type: "p",
        text: "Poured from a height that creates a thin layer of foam on top, sweetened generously with fresh mint and sugar, and offered constantly as a gesture of hospitality wherever you stop — refusing a first glass is mildly impolite, though nobody will push a second on you. It's less a drink than a small daily ritual, and one of the more consistent, reliable pleasures across every region of the country, from a roadside stall to a riad's rooftop terrace.",
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
      "[Essaouira](https://en.wikipedia.org/wiki/Essaouira) is the Atlantic answer to Marrakech's desert-facing itineraries — a fortified port town with a completely different atmosphere, salt air instead of dust, about 2.5 hours from the Red City by road.",
    blocks: [
      {
        type: "h2",
        text: "What makes it different from inland Morocco",
        },
      {
        type: "p",
        text: "Sea air, a working fishing harbour still hauling in the day's catch, and a medina laid out with wide blue-and-white streets rather than the tighter, denser lanes of Marrakech or Fes. The pace is different too — noticeably slower — and it's often several degrees cooler than inland even at the height of summer, thanks to a steady Atlantic wind that rarely fully drops.",
      },
      {
        type: "h2",
        text: "What to actually do there",
        },
      {
        type: "p",
        text: "Walk the Skala de la Ville ramparts overlooking the Atlantic, their old cannons still pointed out to sea, browse the thuya-wood workshops tucked into the medina's side streets, and watch the blue fishing boats unload the day's catch at the port — then eat it grilled at one of the harbourside stalls within the hour, about as fresh as fish gets.",
      },
      {
        type: "h2",
        text: "Day trip vs overnight",
        },
      {
        type: "p",
        text: "A day trip covers the highlights but feels rushed given the drive time each way eating into the hours you actually get on the ground. An overnight lets you catch golden hour on the ramparts and the medina at its quietest in early morning, before the day-trippers arrive from Marrakech and the streets fill back up. Several of our longer itineraries, like the [12-day tour from Marrakech](/tours/12-mar), build in a full overnight rather than a rushed same-day visit.",
      },
      {
        type: "h2",
        text: "Should you bother?",
        },
      {
        type: "p",
        text: "If your trip is otherwise entirely inland and desert-focused, yes — Essaouira is a genuine change of pace, not another medina wearing a slightly different coat of paint. Ask about adding it to any Marrakech-based [itinerary](/tours?city=Marrakech) if coastal time matters to you; it's a straightforward addition to most routes, not a detour that throws off the rest of the trip.",
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
      "Winter is an underrated season for Morocco: fewer crowds at every major site, clear desert skies for stargazing, and comfortable daytime temperatures across most regions — with a handful of real cold-weather caveats that are easy to miss if you're picturing the Sahara as uniformly hot.",
    blocks: [
      {
        type: "h2",
        text: "The Atlas Mountains: it does snow",
        },
      {
        type: "p",
        text: "The High Atlas, including sections of the [Tizi n'Tichka pass](/blog/tizi-n-tichka-pass-guide), genuinely can see snow between December and February, occasionally closing the road for a few hours after a heavy fall while it's cleared. It's rare enough not to derail most trips, but worth checking conditions if you're travelling through in deep winter, since the alternative routes add real time to the drive.",
      },
      {
        type: "h2",
        text: "The Sahara: cold nights, mild days",
        },
      {
        type: "p",
        text: "Daytime desert temperatures are often pleasantly mild in winter, warm enough to sit outside comfortably in the sun, but nights at a Merzouga desert camp can drop close to freezing once that sun is gone — see our [what to pack guide](/blog/what-to-pack-sahara-desert-tour) for the layering that actually helps. The upside is exceptionally clear night skies for stargazing, arguably the best of the year, since winter's dry, cold air holds almost no haze.",
      },
      {
        type: "h2",
        text: "The coast and cities: genuinely mild",
        },
      {
        type: "p",
        text: "Marrakech, Fes, and coastal towns like [Essaouira](/blog/essaouira-day-trip-from-marrakech) rarely drop below single digits even in January, and daytime temperatures are often comfortable enough that a light jacket covers most of the day rather than proper heavy winter wear.",
      },
      {
        type: "h2",
        text: "What to actually pack",
        },
      {
        type: "p",
        text: "A proper warm layer for evenings and the desert camp, a light jacket for city days, and closed shoes throughout. Worth knowing before you arrive: riads and older buildings aren't always centrally heated, so evenings indoors can be cooler than the daytime weather led you to expect, even in a city that never got close to freezing outside.",
      },
      {
        type: "p",
        text: "For a wider regional picture of Morocco's winter weather patterns beyond the routes we run, [Wikipedia's climate overview of Morocco](https://en.wikipedia.org/wiki/Morocco#Climate) is a useful starting point before you finalise what goes in the suitcase.",
      },
    ],
    related: ["what-to-pack-sahara-desert-tour", "best-time-to-visit-sahara-desert-morocco", "essaouira-day-trip-from-marrakech"],
  },
  {
    slug: "private-driver-vs-group-tour-morocco",
    title: "Private Driver vs Group Tour in Morocco: Which Is Right for You",
    metaTitle: "Private Driver vs Group Tour in Morocco",
    description:
      "Weighing a private driver-guide against a fixed group tour in Morocco — pace, cost per person, flexibility, and who each option actually suits.",
    keyword: "private driver vs group tour Morocco",
    scene: "medina",
    origin: "Marrakech",
    date: "2026-06-17",
    readMins: 6,
    intro:
      "It's the first real decision most people make when planning a Morocco trip, often before they've picked a single stop on the map, and it shapes everything else about how the days actually feel once you're there.",
    blocks: [
      {
        type: "h2",
        text: "What a group tour actually means",
        },
      {
        type: "p",
        text: "A fixed departure date chosen by the operator, not you, a bus or minivan shared with a rotating group of strangers, a set itinerary with little room to linger somewhere that's caught your interest or skip a stop that hasn't — and a genuinely lower per-person cost as the trade-off for all of it.",
      },
      {
        type: "h2",
        text: "What a private tour actually means",
        },
      {
        type: "p",
        text: "Your own vehicle and driver-guide, departure on your own dates rather than someone else's schedule, and the freedom to ask to stop somewhere unplanned, skip something that doesn't interest your group, or add an extra night wherever the trip is working better than expected. Every [Kasbah Trails itinerary](/tours) is built this way, start to finish — there's no fixed-departure option to fall back on, because we don't run them.",
      },
      {
        type: "h2",
        text: "Where the cost difference actually comes from",
        },
      {
        type: "p",
        text: "A private trip for 2 people costs more per person than the same route split across a 15-seat group bus, and there's no getting around that math. But for families or small groups of 4 to 6, the per-person gap narrows significantly, since you're already splitting the cost of one private vehicle between more people. See our [cost breakdown guide](/blog/how-much-does-private-morocco-tour-cost) for the specific factors that move the number up or down.",
      },
      {
        type: "h2",
        text: "Who each option actually suits",
        },
      {
        type: "p",
        text: "Group tours suit travellers prioritising the lowest possible cost and genuinely comfortable locking into someone else's fixed schedule months in advance. Private tours suit travellers who want real control over pace — especially [solo female travellers](/blog/is-morocco-safe-solo-female-travelers) or anyone uneasy navigating unfamiliar transport alone, families with kids who need flexible timing around naps and meltdowns, or anyone who's been burned before by a group itinerary that rushed straight past the one place they actually wanted more time at.",
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
