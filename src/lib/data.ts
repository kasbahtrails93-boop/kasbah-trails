// Auto-generated from the original kasbah-trails.html data arrays. Edit here, not there.

export interface DayPlan {
  t: string;
  d: string;
}

export interface Tour {
  id: string;
  title: string;
  days: number;
  from: string;
  to: string;
  origin: string;
  cat: string;
  scene: "dunes" | "medina" | "coast";
  featured: boolean;
  blurb: string;
  highlights: string[];
  itin: DayPlan[];
}

export interface Destination {
  n: string;
  d: string;
  scene: "dunes" | "medina" | "coast";
  city: string;
}

export interface Review {
  q: string;
  n: string;
  s: string;
}

export const CONTACT = {
  "phoneDisplay": "+212 6XX-XX XX XX",
  "phoneTel": "+2126XXXXXXXX",
  "wa": "2126XXXXXXXX",
  "email": "hello@kasbahtrails.com"
};

export const INCLUDED: string[] = [
  "Private air-conditioned vehicle, fuel & tolls",
  "English-speaking driver-guide throughout",
  "Accommodation in riads, kasbahs & a desert camp",
  "Camel trek to the Erg Chebbi dunes",
  "Desert camp with dinner & breakfast",
  "Daily breakfast",
  "Local guides in the imperial cities",
  "All local taxes"
];

export const EXCLUDED: string[] = [
  "International flights",
  "Lunches & some dinners",
  "Monument & museum entrance fees",
  "Drinks & personal expenses",
  "Tips / gratuities",
  "Travel insurance"
];

export const TINT: Record<string, [string, string]> = {
  "Marrakech": [
    "#C56A2E",
    "#8A3A13"
  ],
  "Fes": [
    "#D8912F",
    "#A8481A"
  ],
  "Casablanca": [
    "#A9895C",
    "#6f5334"
  ],
  "Tangier": [
    "#6E7346",
    "#3f4527"
  ]
};

export const TOURS: Tour[] = [
  {
    "id": "3-mar",
    "title": "3 Days Sahara Desert Tour from Marrakech",
    "days": 3,
    "from": "Marrakech",
    "to": "Marrakech",
    "origin": "Marrakech",
    "cat": "Desert",
    "scene": "dunes",
    "featured": true,
    "blurb": "The classic quick escape to the dunes — over the Atlas to Aït Ben Haddou, down the gorges and a night under the stars at Erg Chebbi.",
    "highlights": [
      "Tizi n'Tichka pass over the High Atlas",
      "The UNESCO ksar of Aït Ben Haddou",
      "Todgha Gorge canyon walk",
      "Camel trek & night in a Sahara camp"
    ],
    "itin": [
      {
        "t": "Marrakech → Aït Ben Haddou → Dadès Valley",
        "d": "Leave Marrakech after breakfast and climb the Tizi n'Tichka pass through Berber villages. Explore the earthen ksar of Aït Ben Haddou, cross Ouarzazate — Morocco's film capital — and follow the Road of a Thousand Kasbahs to the Dadès Valley for the night."
      },
      {
        "t": "Dadès → Todgha Gorge → Merzouga (Sahara camp)",
        "d": "Wind through the Dadès rock formations to Todgha Gorge, where 300-metre cliffs close in over a river path. Continue east through Tinghir and Rissani to Merzouga. As the light softens, ride a camel over the Erg Chebbi dunes to your camp for dinner, drums and a night beneath the desert sky."
      },
      {
        "t": "Sunrise → back to Marrakech",
        "d": "Wake for sunrise over the dunes, then the long, scenic drive back across the Atlas to Marrakech, arriving in the evening."
      }
    ]
  },
  {
    "id": "3-fes-mar",
    "title": "3 Days Sahara Desert Tour from Fes to Marrakech",
    "days": 3,
    "from": "Fes",
    "to": "Marrakech",
    "origin": "Fes",
    "cat": "Desert",
    "scene": "dunes",
    "featured": false,
    "blurb": "A one-way desert crossing from Fes to Marrakech — cedar forests, the Merzouga dunes and the gorges in between.",
    "highlights": [
      "Ifrane & the Middle Atlas cedar forests",
      "Barbary macaques near Azrou",
      "Night in the Erg Chebbi Sahara",
      "Todgha Gorge & Aït Ben Haddou"
    ],
    "itin": [
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Leave Fes for the Middle Atlas, pausing in Ifrane — with its alpine chalets and stone-lion statue — before the road climbs through cedar forest scattered with wild Barbary macaques. Push on through the Ziz Valley to Merzouga, where a camel trek carries you into the Erg Chebbi dunes for sunset, dinner and a night at a desert camp under the stars."
      },
      {
        "t": "Merzouga → Todgha Gorge → Dadès Valley",
        "d": "Rise for sunrise over the dunes, then drive west through Erfoud and Tinghir to Todgha Gorge, where 300-metre limestone walls close in over a shallow river — time for a walk into the canyon. Continue along the valley road, past kasbahs and palmeries, to overnight in the Dadès Valley among its rugged rock formations."
      },
      {
        "t": "Dadès Valley → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Road of a Thousand Kasbahs to Ouarzazate — Morocco's film capital — then stop at the earthen ksar of Aït Ben Haddou, a UNESCO World Heritage site straight out of the movies. Cross the High Atlas via the Tizi n'Tichka pass, with mountain villages and valley views on the descent into Marrakech by evening."
      }
    ]
  },
  {
    "id": "3-mar-fes",
    "title": "3 Days Sahara Desert Tour from Marrakech to Fes",
    "days": 3,
    "from": "Marrakech",
    "to": "Fes",
    "origin": "Marrakech",
    "cat": "Desert",
    "scene": "dunes",
    "featured": false,
    "blurb": "Start in Marrakech, sleep in the dunes and finish in Fes — the essential south-to-north desert route.",
    "highlights": [
      "Aït Ben Haddou kasbah",
      "Dadès & Todgha gorges",
      "Camel trek at Erg Chebbi",
      "Cedar forests into Fes"
    ],
    "itin": [
      {
        "t": "Marrakech → Aït Ben Haddou → Skoura → Dadès Valley",
        "d": "Climb the Tizi n'Tichka pass over the High Atlas, detouring to the hilltop Telouet Kasbah before reaching the earthen ksar of Aït Ben Haddou. Continue past Ouarzazate to the Skoura palm oasis and the Valley of Roses, then on to Kalaat M'Gouna and into the Dadès Valley for the night among its folded rock formations."
      },
      {
        "t": "Dadès Valley → Todgha Gorge → Merzouga (Sahara camp)",
        "d": "Head to Tinghir for a walk through Todgha Gorge, where sheer cliffs rise 300 metres above a narrow river path, then continue east via Erfoud and the market town of Rissani to Merzouga. As the light turns gold, ride a camel out to the Erg Chebbi dunes for dinner, drumming and a night at a desert camp."
      },
      {
        "t": "Merzouga → Ziz Valley → Ifrane → Fes",
        "d": "Watch the sunrise over the dunes, then drive north through Errachidia and the palm-lined Ziz Valley to Midelt and into the Middle Atlas cedar forests, keeping an eye out for wild Barbary macaques. Pass through the alpine town of Ifrane before the final descent to Fes, arriving in the late afternoon."
      }
    ]
  },
  {
    "id": "4-mar",
    "title": "4 Days Morocco Desert Tour from Marrakech",
    "days": 4,
    "from": "Marrakech",
    "to": "Marrakech",
    "origin": "Marrakech",
    "cat": "Desert",
    "scene": "dunes",
    "featured": false,
    "blurb": "An extra day over the 3-day classic — more time in the dunes, a 4x4 excursion and tea with a nomad family.",
    "highlights": [
      "Aït Ben Haddou & Ouarzazate",
      "4x4 off-road desert excursion",
      "Tea with a nomad family",
      "Two unhurried nights in the south"
    ],
    "itin": [
      {
        "t": "Marrakech → Aït Ben Haddou → Skoura → Dadès Valley",
        "d": "Cross the High Atlas via the Tizi n'Tichka pass, stopping at the earthen ksar of Aït Ben Haddou before Ouarzazate — Morocco's film capital. Continue through the Skoura palm oasis and the Valley of Roses to Kalaat M'Gouna, ending the day among the folded rock formations of the Dadès Valley."
      },
      {
        "t": "Dadès Valley → Todgha Gorge → Merzouga (Sahara camp)",
        "d": "Detour to Tinghir for Todgha Gorge, where 300-metre cliffs press in over a narrow river path, then continue east via Erfoud and Rissani to the edge of the Sahara. As the sun drops, ride a camel — or take a 4x4 — into the pink Erg Chebbi dunes for a campfire dinner and live music under the stars."
      },
      {
        "t": "A full day around Merzouga",
        "d": "After sunrise over the dunes, set out by 4x4 to visit a nomad family's tent for mint tea, cross a rocky plateau to the abandoned village of Mifis, and stop in Khamlia for a Gnaoua music session. Spend the second desert night in a comfortable riad in Merzouga, with time to explore the oasis on foot."
      },
      {
        "t": "Merzouga → Draa Valley → Marrakech",
        "d": "Head back west through Alnif and Tazarine, tracing the edge of the Anti-Atlas to Agdz, then climb into the Ait Saoun mountains for the last stretch to Marrakech — a long, scenic drive that closes the loop by evening."
      }
    ]
  },
  {
    "id": "4-fes-mar",
    "title": "4 Days Desert Tour from Fes to Marrakech",
    "days": 4,
    "from": "Fes",
    "to": "Marrakech",
    "origin": "Fes",
    "cat": "Desert",
    "scene": "dunes",
    "featured": false,
    "blurb": "A relaxed four-day crossing from Fes to Marrakech taking in the best of southern Morocco.",
    "highlights": [
      "Middle Atlas & Ziz Valley",
      "Merzouga dunes overnight",
      "Todgha & Dadès gorges",
      "Aït Ben Haddou"
    ],
    "itin": [
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas from Fes, stopping in the alpine town of Ifrane before driving on through cedar forest scattered with wild Barbary macaques. By the Ziz Valley the landscape turns to desert, and a sunset camel trek carries you into the Erg Chebbi dunes for dinner and a first night at a Sahara camp."
      },
      {
        "t": "A full day around Merzouga",
        "d": "Watch the sun rise over the dunes, then take a 4x4 out across a rocky plateau to the abandoned village of Mifis and a nomad family's tent for tea. Stop in Khamlia for a Gnaoua music session before returning to Merzouga for a second night, this time in a comfortable riad in the oasis."
      },
      {
        "t": "Merzouga → Todgha Gorge → Dadès Valley",
        "d": "Drive west through Erfoud and Tinghir to Todgha Gorge for a walk beneath its towering limestone walls, then follow the valley road — past the Monkey Fingers rock formations — into the Dadès Valley for the night."
      },
      {
        "t": "Dadès Valley → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Take the Road of a Thousand Kasbahs to Ouarzazate, with a stop at the film studios, then the UNESCO ksar of Aït Ben Haddou. Cross the High Atlas via the Tizi n'Tichka pass, past the Telouet Kasbah, and arrive in Marrakech by early evening."
      }
    ]
  },
  {
    "id": "4-mar-fes",
    "title": "4 Days Desert Tour from Marrakech to Fes",
    "days": 4,
    "from": "Marrakech",
    "to": "Fes",
    "origin": "Marrakech",
    "cat": "Desert",
    "scene": "dunes",
    "featured": false,
    "blurb": "Marrakech to Fes at a gentler pace, with a full evening and sunrise in the Sahara.",
    "highlights": [
      "Tizi n'Tichka & Aït Ben Haddou",
      "Rose Valley & Skoura oasis",
      "Erg Chebbi camp",
      "Cedar forests into Fes"
    ],
    "itin": [
      {
        "t": "Marrakech → Aït Ben Haddou → Skoura → Dadès Valley",
        "d": "Climb the Tizi n'Tichka pass over the High Atlas, detouring to the hilltop Telouet Kasbah before the earthen ksar of Aït Ben Haddou. Continue through the Skoura palm oasis and the Valley of Roses to Kalaat M'Gouna, overnighting in the Dadès Valley among its rugged rock formations."
      },
      {
        "t": "Dadès Valley → Todgha Gorge → Merzouga (Sahara camp)",
        "d": "Head to Tinghir for Todgha Gorge, walking beneath its towering canyon walls, then continue east via Erfoud and Rissani to the desert's edge. As evening falls, ride a camel into the Erg Chebbi dunes for a traditional dinner and a night at a Berber tent camp."
      },
      {
        "t": "A full day around Merzouga",
        "d": "Rise before dawn for sunrise over the dunes, then explore by 4x4 — crossing a rocky plateau to the abandoned village of Mifis, visiting a nomad family for tea and stopping in Khamlia for Gnaoua music and fossil hunting. Spend a second night in a riad in the Merzouga oasis."
      },
      {
        "t": "Merzouga → Ziz Valley → Ifrane → Fes",
        "d": "Drive north through Errachidia and the palm-lined Ziz Valley to Midelt, then into the Middle Atlas cedar forests where Barbary macaques roam. Pass through Ifrane before the final descent into Fes, arriving in the late afternoon."
      }
    ]
  },
  {
    "id": "5-mar",
    "title": "5 Days Sahara Desert Tour from Marrakech",
    "days": 5,
    "from": "Marrakech",
    "to": "Marrakech",
    "origin": "Marrakech",
    "cat": "Desert",
    "scene": "dunes",
    "featured": true,
    "blurb": "Our most popular round trip — the kasbahs, both great gorges, a 4x4 desert day and two unhurried nights in the south.",
    "highlights": [
      "Skoura oasis & the Valley of Roses",
      "Both Dadès and Todgha gorges",
      "4x4 excursion, Khamlia Gnaoua music & nomads",
      "Sunrise over Erg Chebbi"
    ],
    "itin": [
      {
        "t": "Marrakech → Aït Ben Haddou → Skoura → Dadès",
        "d": "Cross the Tizi n'Tichka into the south, explore Aït Ben Haddou and pass Ouarzazate to the Skoura palm oasis and its Amerhidil kasbah. Overnight in the Dadès Valley among the rose fields."
      },
      {
        "t": "Dadès → Valley of Roses → Todgha → Merzouga",
        "d": "Follow the Valley of Roses and the Dadès gorge road to Todgha Gorge for a canyon walk, then drive east to Merzouga. A sunset camel trek carries you into the Erg Chebbi dunes and your desert camp."
      },
      {
        "t": "A full day in the Sahara",
        "d": "After sunrise, head out by 4x4 to the black desert of Khamlia for Gnaoua music, visit a nomad family for tea, and take in the panoramas around Erg Chebbi. Try sandboarding before a second night in a comfortable desert kasbah."
      },
      {
        "t": "Merzouga → Rissani → Draa Valley → Ouarzazate",
        "d": "Browse the market town of Rissani, then travel the palm-lined Draa Valley and the Nkob road back to Ouarzazate, with time for the Taourirt Kasbah in the afternoon."
      },
      {
        "t": "Ouarzazate → Marrakech",
        "d": "A last look at Aït Ben Haddou or the remote Telouet kasbah, then the drive back over the Atlas to Marrakech."
      }
    ]
  },
  {
    "id": "5-casa-mar",
    "title": "5 Days Tour from Casablanca to Marrakech",
    "days": 5,
    "from": "Casablanca",
    "to": "Casablanca",
    "origin": "Casablanca",
    "cat": "Imperial & Culture",
    "scene": "medina",
    "featured": false,
    "blurb": "A compact imperial-cities loop from Casablanca — Chefchaouen's blue lanes, the great medina of Fes and a night in the dunes.",
    "highlights": [
      "Aït Ben Haddou & the kasbah road",
      "Guided Fes medina tour",
      "A night in the Merzouga Sahara",
      "Rabat's Hassan Tower & Kasbah of the Udayas"
    ],
    "itin": [
      {
        "t": "Casablanca → Marrakech → Aït Ben Haddou → Dadès Valley",
        "d": "After an early transfer from Casablanca, cross the High Atlas via the Tizi n'Tichka pass, stopping at the hilltop Telouet Kasbah and the earthen ksar of Aït Ben Haddou. Continue through the Skoura oasis and the Valley of Roses to Kalaat M'Gouna, arriving in the Dadès Valley for the night."
      },
      {
        "t": "Dadès Valley → Todgha Gorge → Merzouga (Sahara camp)",
        "d": "Drive to Tinghir for a walk through Todgha Gorge, then continue east via Erfoud and the market town of Rissani to the edge of the Sahara. As the sun sets, ride a camel — or take a 4x4 — into the Erg Chebbi dunes for a traditional dinner and a night at a desert camp."
      },
      {
        "t": "Merzouga → Ziz Valley → Ifrane → Fes",
        "d": "Watch the sunrise over the dunes before the long drive north through Errachidia and the palm-lined Ziz Valley to Midelt, then into Middle Atlas cedar forest. Pass through the alpine town of Ifrane on the way down to Fes, arriving by evening."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, a working pottery village and the carved cedar gateways of Nejjarine Square — with views over the tanneries and past the gates of the royal palace."
      },
      {
        "t": "Fes → Rabat → Casablanca",
        "d": "Head south to the capital, Rabat, for the Hassan Tower and the whitewashed Kasbah of the Udayas overlooking the Atlantic. From there it's a short run down the coast to Casablanca, where the tour ends with your drop-off."
      }
    ]
  },
  {
    "id": "6-mar-fes",
    "title": "6 Days Desert Tour from Marrakech to Fes",
    "days": 6,
    "from": "Marrakech",
    "to": "Fes",
    "origin": "Marrakech",
    "cat": "Desert",
    "scene": "dunes",
    "featured": false,
    "blurb": "The coast and the desert in one line — Essaouira's Atlantic ramparts, the kasbahs and a Sahara night, ending in Fes.",
    "highlights": [
      "Atlantic Essaouira",
      "Aït Ben Haddou & Ouarzazate",
      "Erg Chebbi desert camp",
      "Todgha Gorge into Fes"
    ],
    "itin": [
      {
        "t": "Arrival in Marrakech",
        "d": "Land in Marrakech and settle in — the rest of the day is free to catch your breath after the flight, with an easy first evening near the Jemaa el-Fnaa before six days on the road begin."
      },
      {
        "t": "Marrakech city",
        "d": "A guided day around the Red City: the maze of the medina, the Bahia Palace's carved courtyards, the bustling souks and the Koutoubia minaret, finishing as the food stalls light up Jemaa el-Fnaa at dusk."
      },
      {
        "t": "Marrakech → Essaouira → Marrakech",
        "d": "A day trip to the Atlantic — through argan forest and the village of Sidi el-Mokhtar to Essaouira, where fishing boats crowd the port beneath the Skala ramparts. Wander the blue-and-white medina and the beach before returning to Marrakech for the night."
      },
      {
        "t": "Marrakech → Aït Ben Haddou → Dadès Valley",
        "d": "Cross the High Atlas via the Tizi n'Tichka pass, detouring to the hilltop Telouet Kasbah before the earthen ksar of Aït Ben Haddou. Continue through the Skoura oasis and the Valley of Roses to Kalaat M'Gouna, overnighting in the Dadès Valley."
      },
      {
        "t": "Dadès Valley → Todgha Gorge → Merzouga (Sahara camp)",
        "d": "Head to Tinghir for Todgha Gorge, then drive on via Erfoud and Rissani to the edge of the Sahara. As evening falls, ride a camel into the Erg Chebbi dunes for a campfire dinner and a night at a desert camp."
      },
      {
        "t": "Merzouga → Ziz Valley → Ifrane → Fes",
        "d": "Rise for sunrise over the dunes, then drive north through Errachidia and the Ziz Valley to Midelt and the Middle Atlas cedar forests, pausing in the alpine town of Ifrane before the final stretch into Fes."
      }
    ]
  },
  {
    "id": "6-casa-mar",
    "title": "6 Day Private Tour from Casablanca to Marrakech",
    "days": 6,
    "from": "Casablanca",
    "to": "Marrakech",
    "origin": "Casablanca",
    "cat": "Imperial & Culture",
    "scene": "medina",
    "featured": false,
    "blurb": "Rabat, Chefchaouen and Fes, then over the Middle Atlas to the dunes and down through the gorges to Marrakech.",
    "highlights": [
      "Capital city Rabat",
      "Chefchaouen & imperial Fes",
      "Merzouga dunes",
      "Todgha & Dadès gorges"
    ],
    "itin": [
      {
        "t": "Casablanca → Rabat → Chefchaouen",
        "d": "Head north to Rabat for the Hassan Tower and the seafront Kasbah of the Udayas, then continue up into the Rif Mountains to Chefchaouen, arriving as the town's cobalt-blue lanes catch the evening light."
      },
      {
        "t": "Chefchaouen → Volubilis → Meknes → Fes",
        "d": "Wind down from the Rif to the Roman ruins of Volubilis, still scattered with mosaics, then the imperial city of Meknes and its monumental Bab Mansour gate, before finishing the day in Fes."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, a working pottery village and the ornate gateways of Nejjarine Square — one of the best-preserved old cities in the world."
      },
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas, pausing in the alpine town of Ifrane, before the road drops toward the Sahara. As the light softens, a camel trek carries you into the Erg Chebbi dunes for dinner and a night at a desert camp."
      },
      {
        "t": "Merzouga → Todgha Gorge → Dadès Valley",
        "d": "Watch the sunrise over the dunes, then drive west to Tinghir for a walk through Todgha Gorge, where towering cliffs close in over a narrow river. Continue along the valley road to overnight in the Dadès Valley."
      },
      {
        "t": "Dadès Valley → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Road of a Thousand Kasbahs to Ouarzazate, with a stop at the film studios, then the UNESCO ksar of Aït Ben Haddou and the hilltop Telouet Kasbah. Cross the High Atlas via the Tizi n'Tichka pass into Marrakech."
      }
    ]
  },
  {
    "id": "6-tan-mar",
    "title": "Marrakech Express — 6 Days from Tangier",
    "days": 6,
    "from": "Tangier",
    "to": "Marrakech",
    "origin": "Tangier",
    "cat": "Imperial & Culture",
    "scene": "medina",
    "featured": false,
    "blurb": "North to south at a brisk pace — Chefchaouen, Fes, the gorges and the Sahara, finishing in Marrakech.",
    "highlights": [
      "Chefchaouen blue city",
      "Guided Fes medina",
      "Todgha Gorge & Dadès Valley",
      "Erg Chebbi camel trek"
    ],
    "itin": [
      {
        "t": "Tangier → Cap Spartel → Chefchaouen",
        "d": "Start at the meeting point of the Atlantic and the Mediterranean, with a stop at Cap Spartel and the Hercules Caves, before climbing into the Rif Mountains. Arrive in Chefchaouen in time to wander its blue-washed lanes at dusk."
      },
      {
        "t": "Chefchaouen → Volubilis → Meknes → Fes",
        "d": "Descend from the Rif to the Roman ruins of Volubilis, then the imperial city of Meknes and its grand Bab Mansour gate, before continuing to Fes for the night."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide walks you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, a working pottery village and the carved gateways of Nejjarine Square."
      },
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas via the alpine town of Ifrane and its cedar forests, then drop toward the Sahara. As the sun sets, ride a camel into the Erg Chebbi dunes for dinner and a night under canvas at a desert camp."
      },
      {
        "t": "Merzouga → Todgha Gorge → Dadès Valley",
        "d": "Rise for sunrise over the dunes, then drive west to Tinghir for a walk through Todgha Gorge's towering canyon walls. Continue along the valley road to the Dadès Valley for the night."
      },
      {
        "t": "Dadès Valley → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Take the Road of a Thousand Kasbahs to Ouarzazate, with a stop at the film studios, then the UNESCO ksar of Aït Ben Haddou and the Telouet Kasbah. Cross the High Atlas via the Tizi n'Tichka pass into Marrakech, where the tour ends."
      }
    ]
  },
  {
    "id": "6-casa-fes",
    "title": "6 Days from Casablanca to Marrakech via Fes & Desert",
    "days": 6,
    "from": "Casablanca",
    "to": "Marrakech",
    "origin": "Casablanca",
    "cat": "Desert",
    "scene": "medina",
    "featured": false,
    "blurb": "The headline sights in six days — Fes, the Sahara and the kasbah road, bookended by Casablanca and Marrakech.",
    "highlights": [
      "Capital city Rabat & imperial Meknes",
      "Guided Fes medina",
      "Sahara desert night",
      "Aït Ben Haddou"
    ],
    "itin": [
      {
        "t": "Casablanca → Rabat → Meknes → Fes",
        "d": "Leave Casablanca for the capital, Rabat, with the Hassan Tower and the Kasbah of the Udayas, then continue to imperial Meknes and its Bab Mansour gate before finishing the day in Fes."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university and a working pottery village — one of the best-preserved old cities in the world."
      },
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas via the alpine town of Ifrane, then drop toward the Sahara. A sunset camel trek carries you into the Erg Chebbi dunes for dinner and a first night at a desert camp."
      },
      {
        "t": "A full day around Merzouga",
        "d": "Watch the sun rise over the dunes, then head out by 4x4 across a rocky plateau to the abandoned village of Mifis and a nomad family's tent for tea. Stop in Khamlia for a Gnaoua music session before a second night in the Merzouga oasis."
      },
      {
        "t": "Merzouga → Todgha Gorge → Dadès Valley",
        "d": "Drive west via Erfoud and Tinghir to Todgha Gorge for a walk beneath its towering limestone walls, then continue into the Dadès Valley to overnight among its folded rock formations."
      },
      {
        "t": "Dadès Valley → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Road of a Thousand Kasbahs to Ouarzazate, with a stop at the film studios, then the UNESCO ksar of Aït Ben Haddou. Cross the High Atlas via the Tizi n'Tichka pass into Marrakech, where the tour ends."
      }
    ]
  },
  {
    "id": "6-mar-sahara-fes",
    "title": "6 Days from Marrakech via Sahara Desert & Fes",
    "days": 6,
    "from": "Marrakech",
    "to": "Marrakech",
    "origin": "Marrakech",
    "cat": "Desert",
    "scene": "medina",
    "featured": false,
    "blurb": "A round trip that adds imperial Fes to the desert circuit before looping back to Marrakech.",
    "highlights": [
      "Aït Ben Haddou",
      "Merzouga desert excursion",
      "Guided Fes medina",
      "Middle Atlas cedar forests"
    ],
    "itin": [
      {
        "t": "Marrakech → Aït Ben Haddou → Dadès Valley",
        "d": "Cross the High Atlas via the Tizi n'Tichka pass, detouring to the hilltop Telouet Kasbah before the earthen ksar of Aït Ben Haddou. Continue through the Skoura oasis and the Valley of Roses to Kalaat M'Gouna, overnighting in the Dadès Valley."
      },
      {
        "t": "Dadès Valley → Merzouga (Sahara camp)",
        "d": "Follow the valley road east via Tinghir, Erfoud and Rissani to the edge of the Sahara. As the light turns gold, ride a camel into the Erg Chebbi dunes for a campfire dinner and a night at a desert camp."
      },
      {
        "t": "A full day around Merzouga",
        "d": "Watch the sunrise over the dunes, then head out by 4x4 to visit a nomad family's tent, cross the rocky plateau to the abandoned village of Mifis and stop in Khamlia for a Gnaoua music session, before a second night in the desert."
      },
      {
        "t": "Merzouga → Ziz Valley → Ifrane → Fes",
        "d": "Drive north through Errachidia and the palm-lined Ziz Valley to Midelt and the Middle Atlas cedar forests, pausing in the alpine town of Ifrane before the final descent into Fes."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide walks you through the medieval medina — the tanneries, the covered souks and the workshops of the artisan quarters — one of the best-preserved old cities in the world."
      },
      {
        "t": "Fes → Marrakech",
        "d": "A long, direct drive back south across the country returns you to Marrakech by evening, closing the loop after a week that took in the desert, the gorges and the imperial north."
      }
    ]
  },
  {
    "id": "7-tan-casa",
    "title": "7 Days from Tangier to Casablanca",
    "days": 7,
    "from": "Tangier",
    "to": "Casablanca",
    "origin": "Tangier",
    "cat": "Imperial & Culture",
    "scene": "medina",
    "featured": false,
    "blurb": "A grand north-to-Atlantic sweep — the blue city, Fes, a Sahara night and the kasbah road, ending in Casablanca.",
    "highlights": [
      "Chefchaouen",
      "Imperial Fes",
      "Merzouga Sahara",
      "Aït Ben Haddou & Marrakech"
    ],
    "itin": [
      {
        "t": "Tangier → Chefchaouen",
        "d": "Explore Tangier's medina and kasbah before heading out along the coast to the Hercules Caves, then climb into the Rif Mountains. Arrive in Chefchaouen as the light turns the town's blue-washed walls gold."
      },
      {
        "t": "Chefchaouen → Volubilis → Meknes → Fes",
        "d": "Descend from the Rif to the Roman ruins of Volubilis, still scattered with mosaics and toppled columns, then the imperial city of Meknes and its monumental Bab Mansour gate, before continuing to Fes for the night."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, a working pottery village and the carved gateways of Nejjarine Square — one of the world's best-preserved old cities."
      },
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas via the alpine town of Ifrane and its cedar forests, home to wild Barbary macaques, then drop through the Ziz Valley toward the Sahara. As the sun sets, ride a camel into the Erg Chebbi dunes for dinner and a night at a desert camp."
      },
      {
        "t": "Merzouga → Todgha Gorge → Boumalne Dadès",
        "d": "Drive west through Rissani and the palm groves around Tinghir to Todgha Gorge, where towering limestone walls press in over a narrow river. Continue on to Boumalne Dadès for the night, among the valley's folded rock formations."
      },
      {
        "t": "Boumalne Dadès → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Road of a Thousand Kasbahs to Ouarzazate, with a stop at the film studios, then the UNESCO ksar of Aït Ben Haddou. Cross the High Atlas via the Tizi n'Tichka pass into Marrakech for the night."
      },
      {
        "t": "Marrakech → Casablanca",
        "d": "A final transfer north to Casablanca, where the tour ends — with time, if your flight allows, for a last look at the Hassan II Mosque on the Atlantic before departure."
      }
    ]
  },
  {
    "id": "7-mar",
    "title": "7 Days Sahara Desert Tour from Marrakech",
    "days": 7,
    "from": "Marrakech",
    "to": "Marrakech",
    "origin": "Marrakech",
    "cat": "Desert",
    "scene": "dunes",
    "featured": true,
    "blurb": "A week to do the south properly — oases, both gorges, two desert nights and the Draa Valley, all at an easy pace.",
    "highlights": [
      "Skoura oasis & Valley of Roses",
      "Two nights in the Sahara",
      "Draa Valley & Zagora",
      "Telouet & Aït Ben Haddou kasbahs"
    ],
    "itin": [
      {
        "t": "Marrakech → Aït Ben Haddou → Ouarzazate",
        "d": "Over the Tizi n'Tichka to the ksar of Aït Ben Haddou, then a relaxed afternoon in Ouarzazate — the Taourirt Kasbah and the film studios — for the night."
      },
      {
        "t": "Ouarzazate → Skoura → Valley of Roses → Dadès",
        "d": "Explore the Skoura oasis and its kasbahs, follow the Valley of Roses and settle into the Dadès Gorge, with an evening walk among the rock formations."
      },
      {
        "t": "Dadès → Todgha Gorge → Merzouga",
        "d": "A morning in the towering Todgha Gorge, then east to Merzouga for a sunset camel trek into the Erg Chebbi dunes and a night at camp."
      },
      {
        "t": "A full day in the dunes",
        "d": "Sunrise over the sand, then a 4x4 day — Khamlia's Gnaoua musicians, a nomad family, sandboarding and desert viewpoints — before a second night in the Sahara."
      },
      {
        "t": "Merzouga → Rissani → Draa Valley → Zagora",
        "d": "Through the market at Rissani and across the Nkob pass into the long palm oasis of the Draa Valley, overnighting near Zagora."
      },
      {
        "t": "Zagora → Agdz → Ouarzazate → Aït Ben Haddou",
        "d": "Follow the Draa's kasbahs through Agdz back to Ouarzazate, ending the day at Aït Ben Haddou for golden hour."
      },
      {
        "t": "Telouet Kasbah → Marrakech",
        "d": "Take the old caravan road via the dramatic Telouet Kasbah before crossing the Atlas back to Marrakech."
      }
    ]
  },
  {
    "id": "7-tan-mar",
    "title": "7 Days from Tangier to Marrakech",
    "days": 7,
    "from": "Tangier",
    "to": "Marrakech",
    "origin": "Tangier",
    "cat": "Imperial & Culture",
    "scene": "medina",
    "featured": false,
    "blurb": "From the Strait of Gibraltar to the Red City — Chefchaouen, Fes, the dunes and the kasbahs in one week.",
    "highlights": [
      "Chefchaouen blue streets",
      "Imperial Fes",
      "Merzouga desert excursion",
      "Aït Ben Haddou"
    ],
    "itin": [
      {
        "t": "Tangier city",
        "d": "Settle into Tangier with a day exploring where the Mediterranean meets the Atlantic — the Kasbah Museum, the Dar el Makhzen and the American Legation, followed by the sea breeze along the Hercules Caves."
      },
      {
        "t": "Tangier → Chefchaouen",
        "d": "Climb into the Rif Mountains for Chefchaouen, wandering its blue-washed lanes around Place Outa el-Hammam and the red-walled kasbah before the evening settles over the medina."
      },
      {
        "t": "Chefchaouen → Volubilis → Meknes → Fes",
        "d": "Descend from the Rif to the Roman ruins of Volubilis, then the imperial city of Meknes and its Bab Mansour gate, before continuing to Fes for the night."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, a working pottery village and the carved gateways of Nejjarine Square."
      },
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas via the alpine town of Ifrane and cedar forest scattered with Barbary macaques, then drop through the Ziz Valley toward the Sahara. A sunset camel trek carries you into the Erg Chebbi dunes for dinner and a night at a desert camp."
      },
      {
        "t": "Merzouga → Todgha Gorge → Boumalne Dadès",
        "d": "Drive west through Rissani and the palm groves of Tinghir to Todgha Gorge for a walk beneath its towering canyon walls, then continue to Boumalne Dadès for the night."
      },
      {
        "t": "Boumalne Dadès → Valley of Roses → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Valley of Roses and the Road of a Thousand Kasbahs to Ouarzazate, with a stop at the film studios, then the UNESCO ksar of Aït Ben Haddou. Cross the High Atlas via the Tizi n'Tichka pass, arriving in Marrakech by evening."
      }
    ]
  },
  {
    "id": "7-casa-mar",
    "title": "7 Days from Casablanca to Marrakech via the Desert",
    "days": 7,
    "from": "Casablanca",
    "to": "Marrakech",
    "origin": "Casablanca",
    "cat": "Desert",
    "scene": "medina",
    "featured": false,
    "blurb": "Imperial cities and the Sahara from Casablanca — Fes, the gorges and a night at Erg Chebbi, ending in Marrakech.",
    "highlights": [
      "Imperial Fes",
      "Todgha Gorge",
      "Dadès Valley",
      "Night in the Merzouga dunes"
    ],
    "itin": [
      {
        "t": "Casablanca → Rabat → Meknes → Fes",
        "d": "Leave Casablanca for the capital, Rabat, then continue to imperial Meknes and its Bab Mansour gate before finishing the day in Fes."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, a working pottery village and the carved gateways of Nejjarine Square."
      },
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas via the alpine town of Ifrane, then drop toward the Sahara. As the sun sets, ride a camel into the Erg Chebbi dunes for dinner and a night at a desert camp."
      },
      {
        "t": "Merzouga → Todgha Gorge → Dadès Valley",
        "d": "Watch the sunrise over the dunes, then drive west to Todgha Gorge for a walk beneath its towering canyon walls before continuing into the Dadès Valley to overnight among its folded rock formations."
      },
      {
        "t": "Dadès Valley → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Road of a Thousand Kasbahs to Ouarzazate, with a stop at the film studios, then the UNESCO ksar of Aït Ben Haddou and the Telouet Kasbah. Cross the High Atlas via the Tizi n'Tichka pass into Marrakech."
      },
      {
        "t": "Marrakech city",
        "d": "A guided day around the Red City: the maze of the medina, the Bahia Palace's carved courtyards, the bustling souks and the Koutoubia minaret, finishing as the food stalls light up Jemaa el-Fnaa at dusk."
      },
      {
        "t": "Departure",
        "d": "Free time in Marrakech before your transfer to the airport, or on to Casablanca if that's where your flight departs."
      }
    ]
  },
  {
    "id": "8-tan-mar",
    "title": "8 Days from Tangier to Marrakech",
    "days": 8,
    "from": "Tangier",
    "to": "Marrakech",
    "origin": "Tangier",
    "cat": "Imperial & Culture",
    "scene": "medina",
    "featured": false,
    "blurb": "An eight-day north-to-south grand tour — the Rif, the imperial cities, camels in the Sahara and the Atlas kasbahs.",
    "highlights": [
      "Chefchaouen & Volubilis",
      "Guided Fes medina",
      "Camel trek in the Sahara",
      "Aït Ben Haddou & Marrakech"
    ],
    "itin": [
      {
        "t": "Tangier city",
        "d": "Settle into Tangier with a day tracing where the Mediterranean meets the Atlantic — the Kasbah Museum, the Dar el Makhzen and the American Legation — before a walk out to the Hercules Caves."
      },
      {
        "t": "Tangier → Chefchaouen",
        "d": "Climb into the Rif Mountains for Chefchaouen, wandering the market stalls around Place Outa el-Hammam, the red-walled kasbah and the Ethnographic Museum as evening settles over the blue lanes."
      },
      {
        "t": "Chefchaouen → Volubilis → Meknes → Fes",
        "d": "Descend from the Rif to the Roman ruins of Volubilis, then the imperial city of Meknes and its Bab Mansour gate, before continuing to Fes for the night."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, a working pottery village and the carved gateways of Nejjarine Square — with views over the royal palace gates."
      },
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas via the alpine town of Ifrane and cedar forest scattered with Barbary macaques, then drop through the Ziz Valley toward the Sahara. A sunset camel trek carries you into the Erg Chebbi dunes for dinner and a night at a desert camp."
      },
      {
        "t": "Merzouga → Todgha Gorge → Boumalne Dadès",
        "d": "Drive west through Rissani and the palm groves of Tinghir to Todgha Gorge for a walk beneath its towering canyon walls, then continue to Boumalne Dadès for the night."
      },
      {
        "t": "Boumalne Dadès → Valley of Roses → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Valley of Roses to the Amerhidil Kasbah, then the Road of a Thousand Kasbahs to Ouarzazate's film studios and the UNESCO ksar of Aït Ben Haddou. Cross the High Atlas via the Tizi n'Tichka pass into Marrakech."
      },
      {
        "t": "Departure",
        "d": "Free time in Marrakech before your transfer to the airport in Marrakech or Casablanca."
      }
    ]
  },
  {
    "id": "8-best-mar",
    "title": "Best of Morocco — 8 Days from Marrakech",
    "days": 8,
    "from": "Marrakech",
    "to": "Marrakech",
    "origin": "Marrakech",
    "cat": "Imperial & Culture",
    "scene": "medina",
    "featured": true,
    "blurb": "The whole country in a week and a day — the Sahara, Fes, Chefchaouen and Casablanca, looping back to Marrakech.",
    "highlights": [
      "Aït Ben Haddou & the Sahara",
      "Guided Fes medina",
      "Chefchaouen blue city",
      "Hassan II Mosque, Casablanca"
    ],
    "itin": [
      {
        "t": "Marrakech → Aït Ben Haddou → Ouarzazate → Dadès",
        "d": "Cross the High Atlas, explore Aït Ben Haddou and the kasbah road, and overnight in the Dadès Valley."
      },
      {
        "t": "Dadès → Todgha Gorge → Merzouga",
        "d": "Walk the Todgha Gorge, then ride camels into the Erg Chebbi dunes for a night at your Sahara camp."
      },
      {
        "t": "Merzouga → Midelt → Azrou → Fes",
        "d": "Sunrise in the dunes, then north through the Ziz Valley and the Middle Atlas cedar forests — with their Barbary macaques — to Fes."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina: the tanneries, the Al-Qarawiyyin university, the artisan quarters and the great gates."
      },
      {
        "t": "Fes → Chefchaouen",
        "d": "Cross the Rif Mountains to Chefchaouen and spend the afternoon wandering its cobalt-blue lanes."
      },
      {
        "t": "Chefchaouen → Volubilis → Rabat",
        "d": "Visit the Roman ruins of Volubilis en route to the capital, Rabat, for its kasbah and seafront."
      },
      {
        "t": "Rabat → Casablanca → Marrakech",
        "d": "See the vast Hassan II Mosque in Casablanca, then drive south to Marrakech for the evening."
      },
      {
        "t": "Marrakech medina → departure",
        "d": "A guided morning in the Marrakech medina — the souks, the Bahia Palace and Jemaa el-Fnaa — before your onward journey."
      }
    ]
  },
  {
    "id": "9-tan-mar",
    "title": "9 Days from Tangier to Marrakech",
    "days": 9,
    "from": "Tangier",
    "to": "Marrakech",
    "origin": "Tangier",
    "cat": "Imperial & Culture",
    "scene": "medina",
    "featured": false,
    "blurb": "Nine unhurried days from Tangier to Marrakech through the medinas, the mountains and the desert.",
    "highlights": [
      "Chefchaouen & Fes",
      "Volubilis Roman ruins",
      "Sahara desert night",
      "Gorges & Essaouira coast"
    ],
    "itin": [
      {
        "t": "Tangier city",
        "d": "Arrive in Tangier for a day among its layered history — the Kasbah Museum, the Dar el Makhzen and the American Legation Museum — with views out to the Strait of Gibraltar from the old fortifications."
      },
      {
        "t": "Tangier → Chefchaouen",
        "d": "Head up into the Rif Mountains to Chefchaouen, spending the afternoon in its blue-and-white medina, the red kasbah and the small Ethnographic Museum before the town's lanes settle into evening quiet."
      },
      {
        "t": "Chefchaouen → Volubilis → Meknes → Fes",
        "d": "Wind down from the Rif to the Roman ruins of Volubilis, still scattered with mosaics, then the imperial city of Meknes and its monumental Bab Mansour gate, before finishing the day in Fes."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide walks you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, the South Tower viewpoint, a working pottery village and the gateways of Nejjarine Square."
      },
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas via the alpine town of Ifrane and cedar forest home to wild Barbary macaques, then drop through the Ziz Valley toward the Sahara. As the sun sets, a camel trek carries you into the Erg Chebbi dunes for dinner and a night at a desert camp."
      },
      {
        "t": "Merzouga → Todgha Gorge → Boumalne Dadès",
        "d": "Drive west through the Tafilalet oasis and Tinghir's palm groves to Todgha Gorge, where limestone cliffs rise 300 metres above a narrow river, then continue on to Boumalne Dadès for the night."
      },
      {
        "t": "Boumalne Dadès → Valley of Roses → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Valley of Roses past the Amerhidil Kasbah and the Road of a Thousand Kasbahs to Ouarzazate's film studios, then the UNESCO ksar of Aït Ben Haddou. Cross the High Atlas via the Tizi n'Tichka pass into Marrakech."
      },
      {
        "t": "Marrakech → Essaouira",
        "d": "A guided morning in Marrakech — the Bahia Palace, the Saadian Tombs, the Koutoubia minaret and the theatre of Jemaa el-Fnaa — then an afternoon drive to the Atlantic port of Essaouira for the night."
      },
      {
        "t": "Essaouira → Marrakech",
        "d": "A slow morning among Essaouira's ramparts, harbour and art galleries before the drive back inland to Marrakech, where the tour ends."
      }
    ]
  },
  {
    "id": "9-casa",
    "title": "9 Days from Casablanca — Imperial Cities & Desert",
    "days": 9,
    "from": "Casablanca",
    "to": "Casablanca",
    "origin": "Casablanca",
    "cat": "Desert",
    "scene": "medina",
    "featured": false,
    "blurb": "A full imperial-and-Sahara loop from Casablanca — Rabat, Chefchaouen, Fes and a night camping at Erg Chebbi.",
    "highlights": [
      "Rabat & Chefchaouen",
      "Guided Fes medina",
      "Night camping in the Sahara",
      "Aït Ben Haddou & Marrakech"
    ],
    "itin": [
      {
        "t": "Arrival in Casablanca",
        "d": "Land in Casablanca and settle in for the night — the rest of the day is free to rest after the flight before the tour heads out the next morning."
      },
      {
        "t": "Casablanca → Rabat → Chefchaouen",
        "d": "Head north to Rabat for the Hassan Tower and the seafront Kasbah of the Udayas, then climb into the Rif Mountains to Chefchaouen, arriving as its blue-washed lanes catch the evening light."
      },
      {
        "t": "Chefchaouen → Meknes → Volubilis → Fes",
        "d": "Descend from the Rif to imperial Meknes and its monumental Bab Mansour gate, then the Roman ruins of Volubilis, before continuing to Fes for the night."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, a working pottery village and the carved gateways of Nejjarine Square."
      },
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas via the alpine town of Ifrane, then drop toward the Sahara. As the sun sets, a camel trek carries you into the Erg Chebbi dunes for dinner and a night camping under canvas."
      },
      {
        "t": "Merzouga → Todgha Gorge → Dadès Valley",
        "d": "Watch the sunrise over the dunes, then drive west to Todgha Gorge for a walk beneath its towering canyon walls before continuing into the Dadès Valley to overnight among its folded rock formations."
      },
      {
        "t": "Dadès Valley → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Road of a Thousand Kasbahs to Ouarzazate, with a stop at the film studios, then the UNESCO ksar of Aït Ben Haddou and the hilltop Telouet Kasbah. Cross the High Atlas via the Tizi n'Tichka pass into Marrakech."
      },
      {
        "t": "Marrakech city",
        "d": "A guided day around the Red City: the maze of the medina, the Bahia Palace's carved courtyards, the bustling souks and the Koutoubia minaret, finishing as the food stalls light up Jemaa el-Fnaa at dusk."
      },
      {
        "t": "Marrakech → Casablanca",
        "d": "A final drive north to Casablanca for your onward flight, closing the loop on a route that took in the imperial north, the Sahara and the Red City."
      }
    ]
  },
  {
    "id": "10-totally-mar",
    "title": "Totally Morocco — 10 Days from Marrakech",
    "days": 10,
    "from": "Marrakech",
    "to": "Marrakech",
    "origin": "Marrakech",
    "cat": "Grand Tour",
    "scene": "medina",
    "featured": true,
    "blurb": "The complete loop — desert, imperial cities, the blue city, the Atlantic coast and the Red City, all from Marrakech.",
    "highlights": [
      "Sahara desert & the kasbah road",
      "Fes & Chefchaouen",
      "Rabat & Casablanca",
      "Coastal Essaouira"
    ],
    "itin": [
      {
        "t": "Marrakech → Aït Ben Haddou → Ouarzazate",
        "d": "Over the Atlas to the ksar of Aït Ben Haddou and the kasbahs of Ouarzazate."
      },
      {
        "t": "Ouarzazate → Dadès → Todgha → Merzouga",
        "d": "Through both gorges to Merzouga, then a camel trek into the dunes and a night at camp."
      },
      {
        "t": "Merzouga → Midelt → Azrou → Fes",
        "d": "Sunrise, then north through the Ziz Valley and cedar forests to Fes."
      },
      {
        "t": "A full day in Fes",
        "d": "A guided walk through the medieval medina — tanneries, madrasas and the Al-Qarawiyyin."
      },
      {
        "t": "Fes → Chefchaouen",
        "d": "Across the Rif to the blue-washed lanes of Chefchaouen for the afternoon."
      },
      {
        "t": "Chefchaouen → Volubilis → Rabat",
        "d": "Roman Volubilis and imperial Meknes en route to the capital, Rabat."
      },
      {
        "t": "Rabat → Casablanca",
        "d": "The capital's landmarks, then Casablanca and the great Hassan II Mosque on the ocean."
      },
      {
        "t": "Casablanca → El Jadida → Essaouira",
        "d": "Down the Atlantic coast to the breezy port city of Essaouira for the night."
      },
      {
        "t": "Essaouira → Marrakech",
        "d": "A morning in Essaouira's ramparts and medina, then inland to Marrakech."
      },
      {
        "t": "Marrakech medina → departure",
        "d": "A guided morning in Marrakech — souks, palaces and Jemaa el-Fnaa — before you fly home."
      }
    ]
  },
  {
    "id": "10-casa",
    "title": "10 Days from Casablanca — Imperial Cities & Desert",
    "days": 10,
    "from": "Casablanca",
    "to": "Casablanca",
    "origin": "Casablanca",
    "cat": "Grand Tour",
    "scene": "medina",
    "featured": false,
    "blurb": "Ten days from Casablanca through Chefchaouen, Fes, the Sahara and the kasbah road, back via Marrakech.",
    "highlights": [
      "Chefchaouen blue city",
      "Imperial Fes & Meknes",
      "Sahara desert night",
      "Aït Ben Haddou, Marrakech & Essaouira"
    ],
    "itin": [
      {
        "t": "Arrival in Casablanca",
        "d": "Land in Casablanca and settle in for the night — the rest of the day is free to rest before the road trip begins in earnest the next morning."
      },
      {
        "t": "Casablanca → Rabat → Chefchaouen",
        "d": "See the vast Hassan II Mosque on the Atlantic before heading to the capital, Rabat, for the Hassan Tower and the Kasbah of the Udayas. Continue into the Rif Mountains, arriving in Chefchaouen as its blue-washed lanes catch the evening light."
      },
      {
        "t": "Chefchaouen → Volubilis → Meknes → Fes",
        "d": "Descend from the Rif to the Roman ruins of Volubilis, then imperial Meknes and its monumental Bab Mansour gate, before continuing to Fes for the night."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, a working pottery village and the carved gateways of Nejjarine Square."
      },
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas via the alpine town of Ifrane, then drop toward the Sahara. As the sun sets, a camel trek carries you into the Erg Chebbi dunes for dinner and a night at a desert camp."
      },
      {
        "t": "Merzouga → Todgha Gorge → Dadès Valley",
        "d": "Watch the sunrise over the dunes, then drive west to Todgha Gorge for a walk beneath its towering canyon walls before continuing into the Dadès Valley to overnight among its folded rock formations."
      },
      {
        "t": "Dadès Valley → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Road of a Thousand Kasbahs to Ouarzazate, with a stop at the film studios, then the UNESCO ksar of Aït Ben Haddou and the hilltop Telouet Kasbah. Cross the High Atlas via the Tizi n'Tichka pass into Marrakech."
      },
      {
        "t": "Marrakech city",
        "d": "A guided day around the Red City: the Bahia Palace's carved courtyards, the Saadian Tombs, the Koutoubia minaret and the bustling theatre of Jemaa el-Fnaa."
      },
      {
        "t": "Marrakech → Essaouira",
        "d": "A relaxed drive to the Atlantic coast, through argan forest to the fishing port of Essaouira. Spend the afternoon in its blue-and-white medina and along the ramparts before the night by the sea."
      },
      {
        "t": "Essaouira → Casablanca",
        "d": "A final drive up the coast to Casablanca for your departure, closing the loop on a route that took in the imperial cities, the Sahara and the Atlantic."
      }
    ]
  },
  {
    "id": "11-totally-mar",
    "title": "Totally Morocco — 11 Days from Marrakech",
    "days": 11,
    "from": "Marrakech",
    "to": "Marrakech",
    "origin": "Marrakech",
    "cat": "Grand Tour",
    "scene": "medina",
    "featured": false,
    "blurb": "An extra day on the complete loop — more time in the desert and the imperial cities before returning to Marrakech.",
    "highlights": [
      "Two nights in the Sahara",
      "Fes & Chefchaouen",
      "Rabat, Casablanca & Essaouira",
      "Akchour waterfalls hike"
    ],
    "itin": [
      {
        "t": "Arrival in Marrakech",
        "d": "Land in Marrakech and settle in — a free evening near Jemaa el-Fnaa to ease into the trip before eleven days on the road."
      },
      {
        "t": "Marrakech city",
        "d": "A guided day around the Red City — the maze of the medina, the Koutoubia minaret and the souks, finishing as the food stalls light up Jemaa el-Fnaa at dusk."
      },
      {
        "t": "Marrakech → Aït Ben Haddou → Boumalne Dadès",
        "d": "Cross the High Atlas via the Tizi n'Tichka pass, detouring to the hilltop Telouet Kasbah before the earthen ksar of Aït Ben Haddou, then on to Boumalne Dadès for the night."
      },
      {
        "t": "Boumalne Dadès → Todgha Gorge → Merzouga (Sahara camp)",
        "d": "Drive to Tinghir for a walk through Todgha Gorge, then continue east via Erfoud and Rissani to the desert's edge. As the light turns gold, ride a camel — or take a 4x4 — into the Erg Chebbi dunes for dinner and a night at a Berber camp."
      },
      {
        "t": "Merzouga → Ziz Valley → Ifrane → Fes",
        "d": "Watch the sunrise over the dunes, then drive north through Errachidia and the palm-lined Ziz Valley to Midelt and the Middle Atlas cedar forests, pausing in the alpine town of Ifrane before the final descent into Fes."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, a working pottery village and the carved gateways of Nejjarine Square."
      },
      {
        "t": "Fes → Meknes → Volubilis → Chefchaouen",
        "d": "Visit imperial Meknes and its Bab Mansour gate, then the Roman ruins of Volubilis, before climbing into the Rif Mountains to Chefchaouen for the night."
      },
      {
        "t": "Chefchaouen → Akchour waterfalls → Chefchaouen",
        "d": "A day at a gentler pace: hike out to the Akchour waterfalls and their turquoise pools in the Talassemtane hills, then return to Chefchaouen for a second night among its blue-washed streets."
      },
      {
        "t": "Chefchaouen → Rabat → Casablanca",
        "d": "Head south to the capital, Rabat, for the Hassan Tower, the Kasbah of the Udayas and the Mohammed V Mausoleum, then on to Casablanca to see the vast Hassan II Mosque on the ocean."
      },
      {
        "t": "Casablanca → Essaouira",
        "d": "Follow the Atlantic coast south to Essaouira, spending the afternoon in its ramparts, harbour and medina before a night by the sea."
      },
      {
        "t": "Essaouira → Marrakech",
        "d": "A last morning in Essaouira, then the drive back inland to Marrakech for your departure, closing the loop after a circuit of the whole country."
      }
    ]
  },
  {
    "id": "11-casa",
    "title": "11 Days Private Tour from Casablanca",
    "days": 11,
    "from": "Casablanca",
    "to": "Casablanca",
    "origin": "Casablanca",
    "cat": "Grand Tour",
    "scene": "medina",
    "featured": false,
    "blurb": "A wide loop from Casablanca taking in Marrakech, the Atlantic at Essaouira, the kasbahs and a Sahara night.",
    "highlights": [
      "Marrakech & Essaouira",
      "Aït Ben Haddou",
      "Night in the dunes",
      "Fes & Chefchaouen"
    ],
    "itin": [
      {
        "t": "Arrival in Casablanca",
        "d": "Land in Casablanca and settle in for the night, with the rest of the day free before the tour heads out the next morning."
      },
      {
        "t": "Casablanca → Rabat → Chefchaouen",
        "d": "See the Hassan II Mosque before heading to the capital, Rabat, for the Hassan Tower, the Mohammed V Mausoleum and the Kasbah of the Udayas. Continue into the Rif Mountains, arriving in Chefchaouen for the night."
      },
      {
        "t": "Chefchaouen → Volubilis → Meknes → Fes",
        "d": "Descend from the Rif to the Roman ruins of Volubilis, then imperial Meknes — the Bab Mansour gate and the Moulay Ismail Mausoleum — before continuing to Fes."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque, a working pottery village and the gateways of Nejjarine Square."
      },
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas via the alpine town of Ifrane, then drop toward the Sahara. As the sun sets, a camel trek carries you into the Erg Chebbi dunes for dinner and a night at a desert camp."
      },
      {
        "t": "Merzouga → Todgha Gorge → Dadès Valley",
        "d": "Watch the sunrise over the dunes, then drive west to Todgha Gorge for a walk beneath its towering canyon walls before continuing into the Dadès Valley to overnight in a riad."
      },
      {
        "t": "Dadès Valley → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Road of a Thousand Kasbahs to Ouarzazate, with a stop at the film studios, then the UNESCO ksar of Aït Ben Haddou and the hilltop Telouet Kasbah. Cross the High Atlas via the Tizi n'Tichka pass into Marrakech."
      },
      {
        "t": "Marrakech city",
        "d": "A guided walk through the Red City — the Bahia Palace, the Saadian Tombs, the Koutoubia minaret and the theatre of Jemaa el-Fnaa."
      },
      {
        "t": "Marrakech → Essaouira",
        "d": "A relaxed drive to the coast, through argan forest to the fishing port of Essaouira, for an afternoon in its medina and along the ramparts before a night by the sea."
      },
      {
        "t": "Essaouira → Casablanca",
        "d": "A free morning in Essaouira before the drive back up the coast to Casablanca for the night."
      },
      {
        "t": "Departure",
        "d": "Free time before your transfer to the airport."
      }
    ]
  },
  {
    "id": "11-fes",
    "title": "11 Day Private Tour from Fes — Imperial Cities & Desert",
    "days": 11,
    "from": "Fes",
    "to": "Fes",
    "origin": "Fes",
    "cat": "Grand Tour",
    "scene": "medina",
    "featured": false,
    "blurb": "A round trip from Fes across the imperial cities and deep into the Sahara — camel trekking and tea with nomads.",
    "highlights": [
      "Guided Fes medina",
      "Camel trek & nomad tea at Merzouga",
      "Kasbah road & Marrakech",
      "Chefchaouen & the coast"
    ],
    "itin": [
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas via the alpine town of Ifrane, then drop toward the Sahara. A sunset camel trek carries you into the Erg Chebbi dunes for dinner and a first night at a desert camp."
      },
      {
        "t": "A full day around Merzouga",
        "d": "Explore by 4x4 across a rocky plateau to the abandoned village of Mifis and a nomad family's tent for tea, then stop in Khamlia for a Gnaoua music session before a second night, this time in a riad in the Merzouga oasis."
      },
      {
        "t": "Merzouga → Todgha Gorge → Dadès Valley",
        "d": "Drive west via Erfoud and Tinghir to Todgha Gorge for a walk beneath its towering limestone walls, then continue into the Dadès Valley to overnight in a riad among its folded rock formations."
      },
      {
        "t": "Dadès Valley → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Road of a Thousand Kasbahs to Ouarzazate, with a stop at the film studios, then the UNESCO ksar of Aït Ben Haddou and the hilltop Telouet Kasbah. Cross the High Atlas via the Tizi n'Tichka pass into Marrakech."
      },
      {
        "t": "Marrakech city",
        "d": "A guided day around the Red City: the maze of the medina, the Bahia Palace's carved courtyards, the bustling souks and Jemaa el-Fnaa at dusk."
      },
      {
        "t": "Marrakech → Essaouira",
        "d": "A drive through argan forest to the Atlantic port of Essaouira, spending the afternoon among its ramparts, harbour and medina before a night by the sea."
      },
      {
        "t": "Essaouira → El Jadida → Casablanca",
        "d": "Follow the coast north through the Portuguese-built ramparts of El Jadida to Casablanca for the night."
      },
      {
        "t": "Casablanca → Rabat → Asilah → Tangier",
        "d": "See the Hassan II Mosque before heading to the capital, Rabat, then on up the coast through the whitewashed art town of Asilah to Tangier for the night."
      },
      {
        "t": "Tangier → Chefchaouen",
        "d": "Explore Tangier's medina, the Hercules Caves and Cap Spartel before climbing into the Rif Mountains to Chefchaouen, arriving as its blue-washed lanes catch the evening light."
      },
      {
        "t": "Chefchaouen → Akchour waterfalls → Chefchaouen",
        "d": "A gentler day: hike out to the Akchour waterfalls and their turquoise pools in the hills above town, then return to Chefchaouen for a second night."
      },
      {
        "t": "Chefchaouen → Volubilis → Meknes → Fes",
        "d": "Descend from the Rif to the Roman ruins of Volubilis, then imperial Meknes and its Bab Mansour gate, before the short drive back into Fes, where the tour ends."
      }
    ]
  },
  {
    "id": "11-tan-casa",
    "title": "11 Days from Tangier to Casablanca",
    "days": 11,
    "from": "Tangier",
    "to": "Casablanca",
    "origin": "Tangier",
    "cat": "Grand Tour",
    "scene": "medina",
    "featured": false,
    "blurb": "Eleven days coast to coast — the blue city, Fes, the Sahara, the kasbahs and Marrakech, finishing in Casablanca.",
    "highlights": [
      "Chefchaouen",
      "Imperial Fes",
      "Merzouga desert excursion",
      "Marrakech & Essaouira"
    ],
    "itin": [
      {
        "t": "Tangier → Chefchaouen",
        "d": "Explore Tangier's medina and the Hercules Caves before climbing into the Rif Mountains. Arrive in Chefchaouen as the light turns the town's blue-washed walls gold."
      },
      {
        "t": "Chefchaouen → Volubilis → Meknes → Fes",
        "d": "Descend from the Rif to the Roman ruins of Volubilis, then imperial Meknes and its Bab Mansour gate, before continuing to Fes for the night."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university and a working pottery village."
      },
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas via the alpine town of Ifrane and its cedar forests, then drop toward the Sahara for a first night at a desert camp."
      },
      {
        "t": "A full day around Merzouga",
        "d": "A day to properly explore the Erg Chebbi dunes — a camel ride out into the sand, time at a Berber camp, and a second night under canvas in the desert."
      },
      {
        "t": "Merzouga → Todgha Gorge → Boumalne Dadès",
        "d": "Drive west through Rissani and Tinghir's palm groves to Todgha Gorge for a walk beneath its towering canyon walls, then continue to Boumalne Dadès for the night."
      },
      {
        "t": "Boumalne Dadès → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Road of a Thousand Kasbahs to Ouarzazate's film studios, then the UNESCO ksar of Aït Ben Haddou. Cross the High Atlas via the Tizi n'Tichka pass into Marrakech."
      },
      {
        "t": "Marrakech city",
        "d": "A guided day around the Red City — the Bahia Palace, the Saadian Tombs, the Koutoubia minaret and the theatre of Jemaa el-Fnaa."
      },
      {
        "t": "Marrakech → Essaouira",
        "d": "A free day on the Atlantic coast — the fishing port, the Skala ramparts and the blue-and-white medina of Essaouira, with the afternoon yours to explore."
      },
      {
        "t": "Essaouira → Casablanca",
        "d": "Follow the coast north to Casablanca for the night, with time to see the Hassan II Mosque on the ocean."
      },
      {
        "t": "Departure from Casablanca",
        "d": "A free morning before your transfer to Casablanca's airport, closing out an eleven-day sweep from the Strait of Gibraltar to the Atlantic."
      }
    ]
  },
  {
    "id": "12-mar",
    "title": "12 Days Tour from Marrakech",
    "days": 12,
    "from": "Marrakech",
    "to": "Marrakech",
    "origin": "Marrakech",
    "cat": "Grand Tour",
    "scene": "medina",
    "featured": true,
    "blurb": "Twelve unhurried days from Marrakech — the kasbahs, the Sahara, Fes, Chefchaouen and the Atlantic, with time to breathe.",
    "highlights": [
      "Aït Ben Haddou & the gorges",
      "Two nights in the Sahara",
      "Fes & Chefchaouen",
      "Essaouira & the Marrakech medina"
    ],
    "itin": [
      {
        "t": "Marrakech city",
        "d": "A guided introduction to the Red City — the souks, the Koutoubia, the Bahia Palace and Jemaa el-Fnaa at dusk."
      },
      {
        "t": "Marrakech → Aït Ben Haddou → Ouarzazate",
        "d": "Over the Tizi n'Tichka to the ksar of Aït Ben Haddou and the kasbahs of Ouarzazate."
      },
      {
        "t": "Ouarzazate → Skoura → Dadès",
        "d": "The Skoura oasis and the Valley of Roses, ending in the Dadès Gorge."
      },
      {
        "t": "Dadès → Todgha → Merzouga",
        "d": "Todgha Gorge, then a camel trek into the Erg Chebbi dunes for the night."
      },
      {
        "t": "A full day in the Sahara",
        "d": "Sunrise, a 4x4 excursion, Khamlia music and nomad tea, then a second desert night."
      },
      {
        "t": "Merzouga → Midelt → Azrou → Fes",
        "d": "North through the Ziz Valley and the cedar forests to Fes."
      },
      {
        "t": "A full day in Fes",
        "d": "A guided day in the medieval medina — tanneries, madrasas and artisan quarters."
      },
      {
        "t": "Fes → Chefchaouen",
        "d": "Across the Rif to the blue city for an afternoon of wandering."
      },
      {
        "t": "Chefchaouen → Volubilis → Meknes → Rabat",
        "d": "Roman Volubilis and imperial Meknes en route to the capital."
      },
      {
        "t": "Rabat → Casablanca → Marrakech",
        "d": "The capital and the Hassan II Mosque, then south to Marrakech."
      },
      {
        "t": "Marrakech → Essaouira → Marrakech",
        "d": "A day on the Atlantic in Essaouira, or a relaxed day at leisure."
      },
      {
        "t": "Departure",
        "d": "Free time in Marrakech before your transfer to the airport."
      }
    ]
  },
  {
    "id": "12-casa",
    "title": "12 Days Tour from Casablanca",
    "days": 12,
    "from": "Casablanca",
    "to": "Casablanca",
    "origin": "Casablanca",
    "cat": "Grand Tour",
    "scene": "medina",
    "featured": false,
    "blurb": "Twelve days from Casablanca via Tangier, Chefchaouen, Fes, the Sahara and the kasbahs — the full national loop.",
    "highlights": [
      "Tangier & Chefchaouen",
      "Imperial Fes",
      "Night camping in the dunes",
      "Aït Ben Haddou, Marrakech & Essaouira"
    ],
    "itin": [
      {
        "t": "Arrival in Casablanca",
        "d": "Land in Casablanca and check in for the night — the rest of the day is free to rest before the twelve-day loop begins."
      },
      {
        "t": "Casablanca → Rabat → Asilah → Tangier",
        "d": "See the Hassan II Mosque before heading to the capital, Rabat, for its landmark squares, then up the coast through the whitewashed art town of Asilah to Tangier for the night."
      },
      {
        "t": "Tangier → Chefchaouen",
        "d": "Explore Tangier's Kasbah Museum, the Dar el Makhzen and the American Legation, with a stop at the Hercules Caves, before climbing into the Rif Mountains to Chefchaouen."
      },
      {
        "t": "Chefchaouen → Volubilis → Meknes → Fes",
        "d": "Descend from the Rif to the Roman ruins of Volubilis, then imperial Meknes and its monumental Bab Mansour gate, before continuing to Fes for the night."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, a working pottery village and the carved gateways of Nejjarine Square."
      },
      {
        "t": "Fes → Ifrane → Merzouga",
        "d": "Cross the Middle Atlas via the alpine town of Ifrane and its cedar forests, then drop through Midelt, Errachidia and the Ziz Valley toward Merzouga, arriving on the edge of the Sahara for the night."
      },
      {
        "t": "A full day in the Sahara",
        "d": "Watch the sunrise over the dunes, then head out by 4x4 to explore the Erg Chebbi landscape. As the light turns gold, ride a camel into the dunes for a campfire dinner and a night at a desert tent camp."
      },
      {
        "t": "Merzouga → Todgha Gorge → Boumalne Dadès",
        "d": "Drive west through Rissani and Tinghir's palm groves to Todgha Gorge for a walk beneath its towering canyon walls, then continue to Boumalne Dadès for the night."
      },
      {
        "t": "Boumalne Dadès → Aït Ben Haddou → Marrakech",
        "d": "Follow the kasbah road to the UNESCO ksar of Aït Ben Haddou, then cross the High Atlas via the Tizi n'Tichka pass into Marrakech."
      },
      {
        "t": "Marrakech city",
        "d": "A guided day around the Red City — the Bahia Palace, the Saadian Tombs, the Koutoubia minaret and the theatre of Jemaa el-Fnaa."
      },
      {
        "t": "Marrakech → Essaouira",
        "d": "A relaxed drive to the coast for an afternoon in Essaouira's fortified medina, its harbour and its artist galleries, with a night by the sea."
      },
      {
        "t": "Departure",
        "d": "Transfer back to Marrakech or Casablanca for your onward flight, closing out a loop that took in the whole country."
      }
    ]
  },
  {
    "id": "14-casa",
    "title": "14 Day Private Tour from Casablanca",
    "days": 14,
    "from": "Casablanca",
    "to": "Casablanca",
    "origin": "Casablanca",
    "cat": "Grand Tour",
    "scene": "medina",
    "featured": false,
    "blurb": "Two weeks to see it all from Casablanca — the vibrant cities, the ancient medinas and the deep desert.",
    "highlights": [
      "Imperial cities & medinas",
      "Two Sahara nights",
      "Akchour waterfalls hike",
      "Essaouira coast"
    ],
    "itin": [
      {
        "t": "Arrival in Casablanca",
        "d": "Land in Casablanca and settle in for the night, with the rest of the day free before two weeks on the road begin."
      },
      {
        "t": "Casablanca → Rabat → Asilah → Tangier",
        "d": "See the Hassan II Mosque before heading to the capital, Rabat, for the Hassan Tower and the Kasbah of the Udayas, then up the coast through the whitewashed art town of Asilah to Tangier for the night."
      },
      {
        "t": "Tangier → Chefchaouen",
        "d": "Explore Tangier's medina, the Hercules Caves and Cap Spartel, then climb into the Rif Mountains to Chefchaouen, arriving as its blue-washed lanes catch the evening light."
      },
      {
        "t": "Akchour waterfalls",
        "d": "A day at a gentler pace: hike out into the Talassemtane hills to the Akchour waterfalls and their turquoise pools, then return to Chefchaouen for a second night."
      },
      {
        "t": "Chefchaouen → Volubilis → Meknes → Fes",
        "d": "Descend from the Rif to the Roman ruins of Volubilis, then imperial Meknes — the Bab Mansour gate and the Moulay Ismail Mausoleum — before continuing to Fes."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, a working pottery village and the gateways of Nejjarine Square."
      },
      {
        "t": "Fes → Ifrane → Merzouga (Sahara camp)",
        "d": "Cross the Middle Atlas via the alpine town of Ifrane, then drop toward the Sahara. As the sun sets, a camel trek carries you into the Erg Chebbi dunes for dinner and a first night at a desert camp."
      },
      {
        "t": "A full day around Merzouga",
        "d": "Watch the sunrise over the dunes, then explore by 4x4 across a rocky plateau to the abandoned village of Mifis and a nomad family's tent for tea. Stop in Khamlia for a Gnaoua music session before a second night in a riad in the oasis."
      },
      {
        "t": "Merzouga → Todgha Gorge → Dadès Valley",
        "d": "Drive west via Erfoud and Tinghir to Todgha Gorge for a walk beneath its towering limestone walls, then continue into the Dadès Valley to overnight among its folded rock formations."
      },
      {
        "t": "Dadès Valley → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Road of a Thousand Kasbahs to Ouarzazate, with a stop at the film studios, then the UNESCO ksar of Aït Ben Haddou and the hilltop Telouet Kasbah. Cross the High Atlas via the Tizi n'Tichka pass into Marrakech."
      },
      {
        "t": "Marrakech city",
        "d": "A guided day around the Red City — the Bahia Palace, the Saadian Tombs, the Koutoubia minaret and the theatre of Jemaa el-Fnaa."
      },
      {
        "t": "Marrakech → Essaouira",
        "d": "A drive to the Atlantic coast, with time for Essaouira's fish market, the ramparts of Borj el-Baroud and views out to Mogador Island, before a night by the sea."
      },
      {
        "t": "Essaouira → Casablanca",
        "d": "A last morning exploring Essaouira's medina and harbour, then the drive back up the coast to Casablanca for the night."
      },
      {
        "t": "Departure",
        "d": "Free time before your transfer to Casablanca's airport, closing out a two-week circuit of the whole country."
      }
    ]
  },
  {
    "id": "14-tan",
    "title": "14 Days from Tangier — Grand Morocco Tour",
    "days": 14,
    "from": "Tangier",
    "to": "Tangier",
    "origin": "Tangier",
    "cat": "Grand Tour",
    "scene": "medina",
    "featured": false,
    "blurb": "A grand round trip from Tangier — Rabat, Casablanca, Essaouira, Marrakech, the kasbahs and the Sahara.",
    "highlights": [
      "Rabat & Casablanca",
      "Essaouira & Marrakech",
      "Aït Ben Haddou",
      "Merzouga desert excursion"
    ],
    "itin": [
      {
        "t": "Tangier city",
        "d": "Settle into Tangier with a day tracing where the Mediterranean meets the Atlantic — the Kasbah Museum, the Dar el Makhzen and the American Legation — with a walk out to the Hercules Caves."
      },
      {
        "t": "Tangier → Asilah → Rabat → Casablanca",
        "d": "Follow the coast through the whitewashed art town of Asilah to the capital, Rabat, for the Kasbah of the Udayas, the Hassan Tower and the Mohammed V Mausoleum, then on to Casablanca to see the Hassan II Mosque on the ocean."
      },
      {
        "t": "Casablanca → El Jadida → Safi → Essaouira",
        "d": "Head down the Atlantic coast through the Portuguese ramparts of El Jadida and the pottery town of Safi, arriving in Essaouira for the night."
      },
      {
        "t": "Essaouira at leisure",
        "d": "A slow day among Essaouira's ramparts, harbour and medina — time to browse the galleries, watch the fishing boats or simply enjoy the sea breeze."
      },
      {
        "t": "Essaouira → Marrakech",
        "d": "A relaxed drive inland through argan forest to Marrakech, arriving in time to settle in before the evening crowds gather at Jemaa el-Fnaa."
      },
      {
        "t": "Marrakech city",
        "d": "A guided day around the Red City — the Bahia Palace, the Saadian Tombs, the Koutoubia minaret and the theatre of Jemaa el-Fnaa."
      },
      {
        "t": "Marrakech → Aït Ben Haddou → Skoura → Boumalne Dadès",
        "d": "Cross the High Atlas via the Tizi n'Tichka pass, detouring to the Telouet Kasbah before the earthen ksar of Aït Ben Haddou. Continue through the Skoura oasis and the Valley of Roses to Boumalne Dadès for the night."
      },
      {
        "t": "Boumalne Dadès → Todgha Gorge → Merzouga (Sahara camp)",
        "d": "Drive to Tinghir for Todgha Gorge, then continue east via Erfoud and Rissani to the desert's edge. As evening falls, a camel trek carries you into the Erg Chebbi dunes for a first night at a desert camp."
      },
      {
        "t": "A full day around Merzouga",
        "d": "Watch the sunrise over the dunes, then spend the day exploring further — a camel trek, a visit to a nomad family and a campfire dinner under the stars for a second night in the desert."
      },
      {
        "t": "Merzouga → Ziz Valley → Ifrane → Fes",
        "d": "Drive north through Errachidia and the palm-lined Ziz Valley to Midelt and the Middle Atlas cedar forests, pausing in the alpine town of Ifrane before the final descent into Fes."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, a working pottery village and the carved gateways of Nejjarine Square."
      },
      {
        "t": "Fes → Meknes → Volubilis → Chefchaouen",
        "d": "Visit imperial Meknes and its Bab Mansour gate, then the Roman ruins of Volubilis, before climbing into the Rif Mountains to Chefchaouen for the night."
      },
      {
        "t": "Akchour waterfalls",
        "d": "A gentler day: hike out into the hills above town to the Akchour waterfalls and their turquoise pools, then return to Chefchaouen for a second night among its blue-washed streets."
      },
      {
        "t": "Chefchaouen → Tangier",
        "d": "A final drive back down from the Rif to Tangier, where the tour ends — with time, if your flight allows, for a last look at the strait before departure."
      }
    ]
  },
  {
    "id": "15-grand-mar",
    "title": "15 Days Grand Morocco Tour",
    "days": 15,
    "from": "Marrakech",
    "to": "Marrakech",
    "origin": "Marrakech",
    "cat": "Grand Tour",
    "scene": "medina",
    "featured": true,
    "blurb": "Our most complete journey — a fortnight from Marrakech through every region, with off-road desert and tea with nomads.",
    "highlights": [
      "Every region of Morocco",
      "Two nights in the Sahara",
      "Fes, Chefchaouen, Rabat & Casablanca",
      "Essaouira & the Atlas kasbahs"
    ],
    "itin": [
      {
        "t": "Marrakech city",
        "d": "A guided day in the Red City — souks, Koutoubia, Bahia Palace and Jemaa el-Fnaa."
      },
      {
        "t": "Marrakech → Aït Ben Haddou → Ouarzazate",
        "d": "Over the High Atlas to the ksar of Aït Ben Haddou and the kasbahs of Ouarzazate."
      },
      {
        "t": "Ouarzazate → Skoura → Valley of Roses → Dadès",
        "d": "The Skoura oasis and rose valley, ending in the Dadès Gorge."
      },
      {
        "t": "Dadès → Todgha → Merzouga",
        "d": "Todgha Gorge and a sunset camel trek into the Erg Chebbi dunes."
      },
      {
        "t": "A full day in the Sahara",
        "d": "Sunrise, a 4x4 off-road day, Khamlia Gnaoua music and tea with a nomad family; second desert night."
      },
      {
        "t": "Merzouga → Ziz Valley → Midelt → Fes",
        "d": "North through the palm-filled Ziz Valley and the Middle Atlas to Fes."
      },
      {
        "t": "A full day in Fes",
        "d": "A guided walk through the medieval medina and its living crafts."
      },
      {
        "t": "Fes → Chefchaouen",
        "d": "Across the Rif to the blue city for the afternoon."
      },
      {
        "t": "Chefchaouen → Volubilis → Meknes → Fes/Rabat",
        "d": "Roman Volubilis and imperial Meknes; overnight toward the capital."
      },
      {
        "t": "→ Rabat",
        "d": "The capital's kasbah, mausoleum and seafront."
      },
      {
        "t": "Rabat → Casablanca",
        "d": "The Hassan II Mosque and the Atlantic corniche."
      },
      {
        "t": "Casablanca → El Jadida → Essaouira",
        "d": "Down the coast to the port city of Essaouira."
      },
      {
        "t": "Essaouira at leisure",
        "d": "A slow day among the ramparts, the harbour and the beaches."
      },
      {
        "t": "Essaouira → Marrakech",
        "d": "Inland via the argan groves back to Marrakech."
      },
      {
        "t": "Departure",
        "d": "Free time before your airport transfer."
      }
    ]
  },
  {
    "id": "15-grand-casa",
    "title": "Grand 15 Days Private Tour from Casablanca",
    "days": 15,
    "from": "Casablanca",
    "to": "Casablanca",
    "origin": "Casablanca",
    "cat": "Grand Tour",
    "scene": "medina",
    "featured": false,
    "blurb": "A fortnight's grand loop from Casablanca, immersing you in every corner of Morocco's landscape and culture.",
    "highlights": [
      "Imperial cities & the Rif",
      "Two Sahara nights",
      "Kasbah road & gorges",
      "Marrakech & the Atlantic coast"
    ],
    "itin": [
      {
        "t": "Arrival in Casablanca",
        "d": "Land in Casablanca and settle in for the night, with the rest of the day free before the grand loop begins."
      },
      {
        "t": "Casablanca → Rabat → Chefchaouen",
        "d": "See the Hassan II Mosque before heading to the capital, Rabat, then climb into the Rif Mountains to Chefchaouen, arriving as its blue-washed lanes catch the evening light."
      },
      {
        "t": "Akchour waterfalls",
        "d": "A day at a gentler pace: hike out into the Talassemtane hills to the Akchour waterfalls and their turquoise pools, then return to Chefchaouen for a second night."
      },
      {
        "t": "Chefchaouen → Volubilis → Moulay Idriss → Meknes → Fes",
        "d": "Descend from the Rif to the Roman ruins of Volubilis, then the hillside holy town of Moulay Idriss and imperial Meknes, before continuing to Fes for the night."
      },
      {
        "t": "A full day in Fes",
        "d": "A local guide leads you through the medieval medina — the Bou Inania madrasa, the Al-Qarawiyyin mosque and university, a working pottery village and the carved gateways of Nejjarine Square."
      },
      {
        "t": "Fes → Ifrane → Merzouga",
        "d": "Cross the Middle and High Atlas via the alpine town of Ifrane and its cedar forests, arriving at the edge of the Sahara to overnight in a kasbah near Merzouga."
      },
      {
        "t": "A full day in the Sahara",
        "d": "Watch the sunrise over the dunes, visit a nomad family's tent for tea, then ride a camel out into the Erg Chebbi dunes for a campfire dinner and a night at a desert camp."
      },
      {
        "t": "Merzouga → Todgha Gorge → Dadès Gorge",
        "d": "Drive west via Erfoud and Tinghir to Todgha Gorge for a walk beneath its towering limestone walls, then continue into the Dadès Gorge to overnight in Boumalne Dadès."
      },
      {
        "t": "A day around Boumalne Dadès",
        "d": "A quieter day among the rock formations of the Dadès Gorge — a canyon hike and a visit to a Berber village, with a second night in Boumalne Dadès."
      },
      {
        "t": "Boumalne Dadès → Ouarzazate → Aït Ben Haddou → Marrakech",
        "d": "Follow the Road of a Thousand Kasbahs to Ouarzazate, then the UNESCO ksar of Aït Ben Haddou. Cross the High Atlas via the Tizi n'Tichka pass into Marrakech."
      },
      {
        "t": "Marrakech city",
        "d": "A guided day around the Red City — the maze of the medina, the Koutoubia minaret and the souks, finishing as the food stalls light up Jemaa el-Fnaa at dusk."
      },
      {
        "t": "Marrakech → Essaouira",
        "d": "A relaxed drive through argan forest to the Atlantic coast, arriving in Essaouira for an evening among its ramparts and medina."
      },
      {
        "t": "Essaouira at leisure",
        "d": "A slow day among Essaouira's harbour, beaches and galleries — time to browse the medina or simply enjoy the sea air before the drive back begins."
      },
      {
        "t": "Essaouira → El Jadida → Casablanca",
        "d": "Follow the coast north through the Portuguese-built ramparts of El Jadida to Casablanca for the night."
      },
      {
        "t": "Departure",
        "d": "Free time before your transfer to Casablanca's airport, closing out a fortnight that took in every corner of the country."
      }
    ]
  }
];

export const DEST: Destination[] = [
  {
    "n": "Marrakech",
    "d": "The Red City — souks, palaces & Jemaa el-Fnaa",
    "scene": "medina",
    "city": "Marrakech"
  },
  {
    "n": "The Sahara",
    "d": "Erg Chebbi dunes, camel treks & desert camps",
    "scene": "dunes",
    "city": "Marrakech"
  },
  {
    "n": "Fes",
    "d": "The world's great medieval medina",
    "scene": "medina",
    "city": "Fes"
  },
  {
    "n": "Chefchaouen",
    "d": "The blue city in the Rif Mountains",
    "scene": "medina",
    "city": "Tangier"
  },
  {
    "n": "Aït Ben Haddou",
    "d": "The fortified ksar on the caravan road",
    "scene": "medina",
    "city": "Marrakech"
  },
  {
    "n": "Essaouira",
    "d": "Atlantic ramparts, harbour & sea breeze",
    "scene": "coast",
    "city": "Casablanca"
  }
];

export const REVS: Review[] = [
  {
    "q": "They rebuilt the whole itinerary around what we actually wanted — slower mornings, more time in the desert. Our guide felt like a friend by the end.",
    "n": "Placeholder — Sarah",
    "s": "Replace with a verified review"
  },
  {
    "q": "Every riad was beautiful, the driving was calm and safe, and we saw sunrise over the dunes with barely another soul around. Faultless.",
    "n": "Placeholder — Daniel",
    "s": "Replace with a verified review"
  },
  {
    "q": "Booked at short notice and everything still ran perfectly. Honest pricing, no pressure, and endless patience with our questions.",
    "n": "Placeholder — Amara",
    "s": "Replace with a verified review"
  }
];
