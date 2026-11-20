import { photos } from "@/data/photos";
import type { Experience } from "@/data/types";

export const experiences: Experience[] = [
  {
    slug: "sigiriya-at-opening",
    title: "Sigiriya at opening hour",
    destination: "sigiriya",
    duration: "Half day",
    interest: "culture",
    image: photos.sigiriya.src,
    excerpt:
      "The fortress before the heat and the coaches, with time for the gardens on the way down.",
    story: [
      "The rock is the symbol of the island for a reason, and it is also a stair climb in the sun. Meeting it when the gate opens changes the day. You hear the steps, the swifts, and your own pace instead of a queue.",
      "A host walks the sequence with you: water gardens, boulder gardens, the fresco pocket, the mirror wall, the lion paws, the summit. Nothing is rushed for a photograph, and nothing is skipped for a schedule that was never realistic.",
    ],
    unfolds: [
      "Leave the hotel before the day feels busy, with water and a small breakfast already eaten.",
      "Climb in the order the site gives you, pausing where the frescoes and the paws need quiet.",
      "Spend real time on the summit, then descend through the gardens rather than treating them as a lobby.",
      "Rest at the hotel. Pidurangala, if you want it, belongs to late afternoon.",
    ],
    includes: [
      "Private host and vehicle for the morning",
      "Entry tickets arranged ahead",
      "Cold water and a timing plan",
    ],
    excludes: [
      "Hotel breakfast beyond an early bite",
      "Pidurangala, unless you add it",
      "Drone footage — leave the aircraft at home",
    ],
    know: [
      "Tell us about knees, heart conditions, or a fear of exposed stairs before we lock the day.",
      "Hats help. The summit is bare rock.",
      "Guides on site are licensed. Your host and the site guide have different jobs, and both are useful.",
    ],
    seo: {
      title: "Sigiriya Sunrise and Opening-Hour Visit",
      description:
        "Climb Sigiriya when it opens, with a private host, tickets sorted, and the rest of the day left quiet.",
    },
  },
  {
    slug: "pidurangala-sunset",
    title: "Pidurangala at sunset",
    destination: "sigiriya",
    duration: "2–3 hours",
    interest: "culture",
    image: photos.sigiriyaView.src,
    excerpt:
      "The opposite rock, a short rough climb, and Sigiriya in profile as the light goes.",
    story: [
      "Pidurangala is the view people think they took from the fortress itself. It faces the monolith. The path is less groomed, the reward is the angle, and the last twenty minutes ask for your hands as well as your feet.",
    ],
    unfolds: [
      "Drive across in the late afternoon with daylight to spare.",
      "Pass the cave temple at the base with shoes off and shoulders covered.",
      "Climb to the plateau and wait. The rock changes color. You do not need to fill the silence.",
    ],
    includes: ["Private transfer", "Timed departure so you are not rushing the steps in the dark", "Tickets"],
    excludes: ["Climbing shoes — bring trainers with a grip", "A picnic that attracts monkeys"],
    know: [
      "Monkeys live here. Keep food packed away.",
      "Descent after sunset needs a torch. We bring one. You should still watch your feet.",
      "This pairs with a morning on Sigiriya, not with a third major site.",
    ],
    seo: {
      title: "Pidurangala Sunset opposite Sigiriya",
      description:
        "Watch Sigiriya from Pidurangala at sunset on a private, properly timed climb.",
    },
  },
  {
    slug: "minneriya-elephants",
    title: "A reservoir morning with elephants",
    destination: "sigiriya",
    duration: "Half day",
    interest: "wildlife",
    image: photos.elephants.src,
    excerpt:
      "Minneriya or a sister park, in a licensed jeep, with no promise except attention.",
    story: [
      "In the drier months, elephants gather on the grasslands of Minneriya and nearby tanks as water pulls inward. It can be one of the great wildlife sights in Asia. It can also be a quiet morning of birds and a herder in the distance. Both are real days.",
      "We book a licensed jeep, enter without theatrics, and keep distance. Nobody asks an animal to turn its head.",
    ],
    unfolds: [
      "Leave early from Sigiriya or Habarana.",
      "Spend the permitted hours in the park with a tracker.",
      "Return for lunch and a still afternoon. The evening can be Pidurangala or nothing.",
    ],
    includes: ["Park jeep and tracker", "Park tickets", "Hotel pickup from the Sigiriya area"],
    excludes: ["A guaranteed herd", "Long lenses we do not lend", "Off-road requests"],
    know: [
      "The gathering is seasonal, often stronger from about July into October. We will say if your dates are a poor fit.",
      "Neutral colors. Stay seated.",
      "Children who need a short drive should do a shorter block. Say their ages.",
    ],
    seo: {
      title: "Minneriya Elephant Gathering, Without the Rush",
      description:
        "A licensed jeep morning at Minneriya or a nearby tank, timed for season and paced without chasing wildlife.",
    },
  },
  {
    slug: "polonnaruwa-bicycle",
    title: "Polonnaruwa by bicycle",
    destination: "polonnaruwa",
    duration: "Full day",
    interest: "culture",
    image: photos.polonnaruwa.src,
    excerpt:
      "Gal Vihara first, then the ruined city on two wheels while the shade still helps.",
    story: [
      "Polonnaruwa makes sense from a saddle. The sacred precincts are far enough apart to feel like a city, close enough to cycle if you start before the ground radiates heat.",
    ],
    unfolds: [
      "Gal Vihara on foot, early, before the bikes.",
      "A fitted bicycle and a loop of the main ruins with a host.",
      "A support vehicle for water, bags, and anyone who would rather sit one stretch out.",
      "Lunch in town, not on a sacred lawn.",
    ],
    includes: ["Bikes and helmets", "Entry", "Host and support vehicle", "Water"],
    excludes: ["E-bikes unless requested", "A second ancient city the same day"],
    know: [
      "Basic balance is enough. Racing is not the mood.",
      "Cover shoulders and knees. You will step off at shrines.",
      "We cancel the bikes and use the vehicle if the heat or rain says so.",
    ],
    seo: {
      title: "Cycle the Ruins of Polonnaruwa",
      description:
        "Spend a full day in Polonnaruwa, starting at Gal Vihara and continuing by bicycle with a support vehicle.",
    },
  },
  {
    slug: "temple-of-the-tooth",
    title: "Temple of the Tooth, with time",
    destination: "kandy",
    duration: "2–3 hours",
    interest: "culture",
    image: photos.kandy.src,
    excerpt:
      "The evening ritual at Sri Lanka’s most revered Buddhist temple, attended as a guest.",
    story: [
      "The Sacred Tooth Relic is the religious heart of Kandy. The temple around it is busy with devotees, drummers, and flowers. You are welcome if you arrive covered, patient, and uninterested in turning a ritual into content.",
    ],
    unfolds: [
      "Dress check at the hotel. Sarongs and shawls are available if your clothes miss.",
      "Enter with the puja, not against it.",
      "Walk the lake afterward when the air has cooled.",
    ],
    includes: ["Host", "Temple contribution and tickets as required", "A clothing backup"],
    excludes: ["A view of the relic uncovered — that is not how the temple works", "Flash photography"],
    know: [
      "Security checks are normal. Travel light.",
      "Shoulders, knees, and a calm voice.",
      "If a Kandyan dance is the same night, we keep a gap so neither is rushed.",
    ],
    seo: {
      title: "Temple of the Tooth Visit in Kandy",
      description:
        "Attend the Temple of the Tooth in Kandy with the right dress, timing, and a host who treats the ritual as living worship.",
    },
  },
  {
    slug: "hill-railway",
    title: "The hill railway toward Ella",
    destination: "ella",
    duration: "Half to full day",
    interest: "tea",
    image: photos.ella.src,
    excerpt:
      "Tea slopes from the window, requested seats, and a car waiting if the railway has other plans.",
    story: [
      "The ride from the Kandy highlands toward Ella is famous because the engineering is beautiful: bridges, cuttings, and tea at arm’s length. It is also a public train. Seats in the best carriages disappear. A good operator plans both versions of the day.",
    ],
    unfolds: [
      "Seats requested as early as the railway allows.",
      "A morning departure timed to the working timetable, not a blog’s memory of it.",
      "Your vehicle moves ahead with the luggage.",
      "If the train is full or delayed past usefulness, the same road becomes a scenic drive with stops. You still reach Ella.",
    ],
    includes: ["Seat requests", "Station help", "Luggage transfer", "A road backup"],
    excludes: ["A private carriage — this is a shared train", "A promise of the observation car on peak weeks"],
    know: [
      "Sit on the side we recommend for your direction of travel.",
      "Food on the train is part of the fun and not a meal plan. Eat before.",
      "Tell us if motion sickness is an issue. Some sections curve constantly.",
    ],
    seo: {
      title: "Kandy to Ella Train, With a Backup Plan",
      description:
        "Ride Sri Lanka’s hill railway toward Ella with seats requested early and a private vehicle ready if the train is full.",
    },
  },
  {
    slug: "tea-estate-morning",
    title: "A working tea estate",
    destination: "nuwara-eliya",
    duration: "Half day",
    interest: "tea",
    image: photos.tea.src,
    excerpt:
      "Leaf, factory, and a cup from the slope you just walked. Not a gift-shop tour.",
    story: [
      "Ceylon tea is a landscape and a job. The better visits are on estates that still welcome guests onto the floor where the leaf is withered, rolled, and fired, then taste what that day’s manufacture produced.",
    ],
    unfolds: [
      "A short walk among bushes with someone who works the field, when the estate allows.",
      "The factory sequence, which smells greener than people expect.",
      "A tasting with enough time to tell two leaves apart.",
      "Optional purchase. No pressure, and no suitcase of tea you will not drink.",
    ],
    includes: ["Estate access", "Tasting", "Private transfer"],
    excludes: ["A guarantee of plucking photos with workers — only if they agree", "Factory entry on closure days"],
    know: [
      "Wear shoes that can handle damp ground.",
      "Some factories close on religious holidays. We reshuffle rather than pretend.",
      "The air is cool. A layer belongs in the car.",
    ],
    seo: {
      title: "Nuwara Eliya Tea Estate Visit",
      description:
        "Walk a working Ceylon tea estate near Nuwara Eliya and taste the leaf, on a private half day.",
    },
  },
  {
    slug: "galle-fort-on-foot",
    title: "Galle Fort on foot",
    destination: "galle",
    duration: "Half day",
    interest: "coast",
    image: photos.galle.src,
    excerpt:
      "Ramparts, lanes, and a lighthouse, without a vehicle inside the walls.",
    story: [
      "The fort is small and dense. A host for the first hour shows you how the streets fit together — churches, courts, family houses, the sea wall — and then leaves you to get pleasantly lost before dinner.",
    ],
    unfolds: [
      "Enter by the main gate and walk the rampart in the kinder direction for the wind that day.",
      "Step into a courtyard or a small museum if it adds to the story, not to fill a quota.",
      "Finish at the lighthouse end for the light, then release the afternoon.",
    ],
    includes: ["A host for the opening hour", "Recommended tables for lunch or dinner"],
    excludes: ["A golf-cart circuit of a walkable town", "Shop commissions you did not ask for"],
    know: [
      "The walls are high. Hold children by the hand.",
      "Evenings are the social hour. Mornings belong to residents and to you.",
      "Swim elsewhere if the fort sea is rough. We will point to the right beach.",
    ],
    seo: {
      title: "Walk Galle Fort with a Local Host",
      description:
        "See Galle Fort on foot: ramparts, lanes, and a lighthouse, then an unscheduled afternoon inside the walls.",
    },
  },
  {
    slug: "south-coast-stilts",
    title: "Stilts, cinnamon, and a swim",
    destination: "galle",
    duration: "Half day",
    interest: "coast",
    image: photos.stilts.src,
    excerpt:
      "A short coast day from Galle: traditional stilt fishing where it is still practiced, then a garden and a beach.",
    story: [
      "Stilt fishing along the south is both a living skill and a scene that knows it is photographed. We visit without staging anyone’s work, then shift inland to cinnamon — bark, oil, and the difference between a tourist bottle and a real one — and end in the water if the flags allow.",
    ],
    unfolds: [
      "A coast stop for the stilts, kept brief and respectful.",
      "A cinnamon garden that will show you the peel.",
      "A swim at a beach that is behaving that morning.",
    ],
    includes: ["Private vehicle and host", "Garden visit", "Beach time"],
    excludes: ["Paying fishermen to pose", "Jet skis"],
    know: [
      "If no one is fishing, we do not invent it. The coast still has the morning.",
      "Cinnamon estates vary. We use ones that are comfortable with visitors.",
      "Reef-safe habits if you snorkel. Ask before you stand.",
    ],
    seo: {
      title: "South Coast Day from Galle Fort",
      description:
        "A half day from Galle for stilt fishermen, cinnamon, and a swim, planned around the sea that morning.",
    },
  },
  {
    slug: "mirissa-whales",
    title: "Whale boats from Mirissa",
    destination: "mirissa",
    duration: "Early morning",
    interest: "wildlife",
    image: photos.mirissa.src,
    excerpt:
      "A seasonal boat for blue and sperm whales, booked with operators who brief before they speed.",
    story: [
      "From about November into April, boats leave this coast looking for whales. A good morning is an animal at a legal, sensible distance and a crew that knows when to stop. A poor morning is a chase. We do not book the second kind.",
    ],
    unfolds: [
      "A very early pickup and a proper briefing on land.",
      "Several hours at sea. Sightings are hoped for and never sold as certain.",
      "Back before lunch, with the rest of the day cleared.",
    ],
    includes: ["Boat with a vetted operator", "Port fees as charged", "Hotel transfer"],
    excludes: ["Seasickness certainty — the Indian Ocean moves", "A guaranteed whale"],
    know: [
      "Out of season we will not pretend. The beach is the plan instead.",
      "Tell us about pregnancy, back trouble, or children. Some boats are the wrong tool.",
      "Bring a layer. Dawn at sea is cooler than the hotel suggested.",
    ],
    seo: {
      title: "Mirissa Whale Watching in Season",
      description:
        "Seasonal whale watching from Mirissa with a careful operator, clear expectations, and a quiet afternoon after.",
    },
  },
  {
    slug: "yala-morning-safari",
    title: "Yala at opening",
    destination: "yala",
    duration: "Half day",
    interest: "wildlife",
    image: photos.yala.src,
    excerpt:
      "A licensed jeep in the dry zone. Leopards if the morning offers them. A real park either way.",
    story: [
      "Yala’s reputation pulls too many jeeps onto the same tracks. The way through is an early entry, a tracker you trust, and a refusal to race. Leopards are the headline. Elephants, birds, and the scrub itself are the article.",
    ],
    unfolds: [
      "Pre-dawn tea, then the gate.",
      "A full morning block inside the permitted area.",
      "Back to the lodge before the heat becomes the only subject.",
    ],
    includes: ["Jeep, tracker, and tickets", "Lodge or hotel pickup nearby", "A briefing the night before"],
    excludes: ["Private off-road", "A second safari the same day unless you insist and the schedule can bear it"],
    know: [
      "Stay inside the jeep. No calls that spook an animal for a frame.",
      "Neutral clothing and closed shoes.",
      "Two nights in Yala gives you a second morning, which is the grown-up version.",
    ],
    seo: {
      title: "Yala National Park Morning Safari",
      description:
        "Enter Yala at opening in a licensed jeep, with leopards treated as wildlife rather than a product.",
    },
  },
  {
    slug: "colombo-kitchen",
    title: "Colombo kitchens and Pettah",
    destination: "colombo",
    duration: "Half day",
    interest: "food",
    image: photos.pettah.src,
    excerpt:
      "A market hour and a rice-and-curry lesson in how the island actually eats.",
    story: [
      "Most visitors meet Sri Lankan food as a hotel buffet. The better introduction is a guided pass through Pettah — spices, dried fish, a density you would not navigate jet-lagged — followed by a cook or a serious lunch that explains each curry on the plate.",
    ],
    unfolds: [
      "Pettah with a host, kept to a duration that stays interesting.",
      "Either a home-style cook or a seated rice and curry, depending on the day and your energy.",
      "A short list of dishes to order again in Kandy and Galle, so the country keeps tasting specific.",
    ],
    includes: ["Host", "Market walk", "The meal or class", "Water"],
    excludes: ["A forced shopping list", "Extremely spicy food unless you ask"],
    know: [
      "Say if you are vegetarian, vegan, or avoiding seafood. The island can cook for you. It needs a minute of notice.",
      "The market is crowded and wonderful and not for everyone on hour six after landing. We move it to the departure stay if so.",
      "Street snacks are chosen, not random.",
    ],
    seo: {
      title: "Colombo Food Walk and Rice and Curry",
      description:
        "Eat Colombo properly: a hosted Pettah walk and a rice-and-curry introduction for first-time visitors.",
    },
  },
  {
    slug: "jaffna-table",
    title: "Jaffna temple and table",
    destination: "jaffna",
    duration: "Full day",
    interest: "food",
    image: photos.jaffna.src,
    excerpt:
      "Nallur with the right clothes and conduct, then crab, palmyrah, and a causeway.",
    story: [
      "The north asks for a different attention. Nallur Kandaswamy is a major Hindu temple, not a viewpoint. Afterward the city eats differently from the south: crab, a fiercer spice logic, sweets made from palmyrah.",
    ],
    unfolds: [
      "A briefing on dress before you leave the hotel. Customs for men inside the temple are specific. We confirm them for the day.",
      "The temple, then a quieter lane so the visit can land.",
      "Lunch that is the point of the day, not a break in it.",
      "A causeway drive if the light and your energy agree.",
    ],
    includes: ["Host", "Temple guidance", "Lunch", "Private vehicle"],
    excludes: ["Drone shots", "Homes or memorials you were not invited to"],
    know: [
      "Ask before any photograph of people.",
      "Alcohol is not the companion to a temple morning.",
      "This day is a poor fit if you want only a beach extension. We will say so.",
    ],
    seo: {
      title: "Jaffna Temple Visit and Northern Food",
      description:
        "Spend a day in Jaffna at Nallur temple and a serious northern table, with conduct and dress handled in advance.",
    },
  },
  {
    slug: "trinco-sea-day",
    title: "A Trincomalee sea day",
    destination: "trincomalee",
    duration: "Full day",
    interest: "coast",
    image: photos.trinco.src,
    excerpt:
      "Swim, a headland temple, and a boat only if the east-coast sea is fit.",
    story: [
      "Trincomalee’s best days are simple. A long swim at Uppuveli or Nilaveli, a respectful visit above the bay, and maybe Pigeon Island if permits and swell agree. If they do not, nobody pretends a boat is a good idea.",
    ],
    unfolds: [
      "Morning swim while the sand is still quiet.",
      "Koneswaram or the fort headland with covered dress.",
      "An optional permitted snorkel, or lunch and a second swim instead.",
    ],
    includes: ["Private vehicle", "Host for the temple hour", "Beach time"],
    excludes: ["Boats in poor sea", "Standing on coral", "Unlicensed island landings"],
    know: [
      "This experience is a season decision. December dates usually belong on the south coast.",
      "Reef shoes and a rash of sunscreen are not a conservation plan. We will brief you.",
      "Keep one evening with no plan. The bay is the plan.",
    ],
    seo: {
      title: "Trincomalee Beach and Bay Day",
      description:
        "A full east-coast day in Trincomalee: swimming, a headland temple, and a boat only when the sea agrees.",
    },
  },
  {
    slug: "ayurveda-half-day",
    title: "A first Ayurveda afternoon",
    destination: "galle",
    duration: "Half day",
    interest: "wellness",
    image: photos.galle.src,
    excerpt:
      "A consultation and a treatment that matches it, not a spa menu chosen like cocktails.",
    story: [
      "Ayurveda on this island is a medical tradition, not only a hotel scent. A first afternoon should start with a practitioner who asks questions, then a treatment that follows the answer. CeyGo uses established houses on the south coast and in the hills, and does not sell seven-day cures to people who have a flight on Tuesday.",
    ],
    unfolds: [
      "A consultation. Be honest about pregnancy, blood pressure, and medication.",
      "One treatment chosen from that conversation.",
      "Quiet afterward. No fort walk scheduled on top.",
    ],
    includes: ["Consultation", "One treatment", "Transfers"],
    excludes: ["Medical claims", "Herbal courses you did not discuss", "Same-day drinking"],
    know: [
      "This is not a substitute for your doctor at home.",
      "Some oils and heat are wrong in pregnancy. Tell us early.",
      "If you want a longer retreat, we will design the journey around it instead of inserting an hour.",
    ],
    seo: {
      title: "Ayurveda Afternoon on the South Coast",
      description:
        "A first Ayurveda consultation and treatment in Sri Lanka, scheduled with rest around it and no medical promises.",
    },
  },
];

export function getExperience(slug: string) {
  return experiences.find((item) => item.slug === slug);
}
