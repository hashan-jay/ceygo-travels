import { photos } from "@/data/photos";
import type { Journey } from "@/data/types";

export const journeys: Journey[] = [
  {
    slug: "first-island-week",
    title: "The First Island Week",
    subtitle: "Rock, lake city, hill train, and a fort — a first Sri Lanka that still breathes.",
    days: 8,
    pace: "balanced",
    priceFrom: 1680,
    interests: ["culture", "tea", "coast"],
    bestMonths: [1, 2, 3, 4, 8, 9, 12],
    route: ["negombo", "sigiriya", "kandy", "ella", "galle", "colombo"],
    summary:
      "The classic first route, edited. You meet the fortress, Kandy, the hill railway, and Galle without pretending the island is small.",
    idealFor:
      "First-time visitors with about a week and a half, who want the famous places and a private car between them.",
    image: photos.sigiriya.src,
    includes: [
      "Private vehicle and English-speaking driver-host",
      "Handpicked hotels in the sample plan, swapped to your budget",
      "Sigiriya and temple entries listed in the day plan",
      "Train seats requested on the hill line, with a road backup",
      "Daily breakfast and a welcome brief",
    ],
    excludes: [
      "International flights",
      "Lunches and dinners, unless you ask to include them",
      "Travel insurance, which you should buy at home",
      "Tips, visas, and personal drinks",
    ],
    daysPlan: [
      {
        title: "Land and go no farther than the lagoon",
        place: "Negombo",
        text: "Meet at the airport and sleep in Negombo. A swim if the light allows. No fortress today.",
      },
      {
        title: "Inland to the rock",
        place: "Sigiriya",
        text: "A private drive into the Cultural Triangle with one stop, not four. Arrive with energy left for a village walk.",
      },
      {
        title: "Sigiriya at opening",
        place: "Sigiriya",
        text: "The climb early. Gardens on the way down. The afternoon is a pool, or Pidurangala if you still want a view.",
      },
      {
        title: "To the lake city",
        place: "Kandy",
        text: "Drive to Kandy and attend the Temple of the Tooth in proper dress. The evening is the lake, not another sight.",
      },
      {
        title: "Into the hills",
        place: "Ella",
        text: "Scenic train toward Ella if seats are confirmed. Luggage goes by road. If the train fails, the drive is the plan, not a crisis.",
      },
      {
        title: "Nine Arches, then rest",
        place: "Ella",
        text: "The bridge and an optional short ridge walk. The rest of the day stays open on purpose.",
      },
      {
        title: "Down to the fort",
        place: "Galle",
        text: "A long but beautiful transfer to Galle. Walk the ramparts before dinner. This is why the day has only one job.",
      },
      {
        title: "Colombo or the airport",
        place: "Colombo",
        text: "A last city hour if your flight is late. Airport transfers are timed backward from check-in, with a buffer.",
      },
    ],
    seo: {
      title: "8-Day First Sri Lanka Itinerary",
      description:
        "A private 8-day Sri Lanka journey for first-time visitors: Negombo, Sigiriya, Kandy, Ella, and Galle, with room to breathe.",
    },
  },
  {
    slug: "tea-rail-south",
    title: "Tea, Rail, and the South",
    subtitle: "Estates, the hill train, then real beach nights.",
    days: 10,
    pace: "balanced",
    priceFrom: 2140,
    interests: ["tea", "coast", "wellness"],
    bestMonths: [1, 2, 3, 4, 12],
    route: ["negombo", "kandy", "nuwara-eliya", "ella", "mirissa", "galle"],
    summary:
      "For travelers who came for the green hills and intend to finish in the sea. December to March is the honest window.",
    idealFor:
      "Couples and friends who want scenery first and a few unscheduled beach days at the end.",
    image: photos.tea.src,
    includes: [
      "Private vehicle and driver-host",
      "Tea estate morning",
      "Hill-train requests and luggage transfer",
      "South-coast hotels with actual beach access",
      "Breakfasts and planning support",
    ],
    excludes: [
      "Flights and insurance",
      "Whale-boat tickets, quoted in season if you want them",
      "Ayurveda treatments, easy to add",
      "Most lunches and dinners",
    ],
    daysPlan: [
      { title: "Arrive on the west coast", place: "Negombo", text: "Airport to a lagoon hotel. Sleep is the activity." },
      { title: "Up to Kandy", place: "Kandy", text: "A highway morning and an afternoon that belongs to the lake and the temple." },
      { title: "Kandy, unhurried", place: "Kandy", text: "Botanic gardens or a cook, then the tooth temple if you did not go yesterday." },
      { title: "Into the tea", place: "Nuwara Eliya", text: "The climb to Nuwara Eliya. Stop for a waterfall view, not for every stall." },
      { title: "Estate morning", place: "Nuwara Eliya", text: "A working tea factory and a tasting. Afternoon by Gregory Lake or a fireplace." },
      { title: "Rail toward Ella", place: "Ella", text: "The famous train if seats exist. The car carries bags and is the backup." },
      { title: "Ella on foot", place: "Ella", text: "Nine Arches and a short walk. No safari added to prove efficiency." },
      { title: "Descend to the south", place: "Mirissa", text: "A full travel day down to Mirissa. Arrive, swim, stop." },
      { title: "A sea day", place: "Mirissa", text: "Nothing required. In season, a whale boat can take the morning and must leave the afternoon empty." },
      { title: "Fort, then fly", place: "Galle", text: "A last night in Galle Fort or a Colombo airport hotel if the flight is early. We choose based on your ticket." },
    ],
    seo: {
      title: "10-Day Tea Country and South Coast Itinerary",
      description:
        "Ten private days from Kandy’s hills to Mirissa and Galle, with the scenic train and beach time that is actually free.",
    },
  },
  {
    slug: "cultural-triangle",
    title: "The Triangle, Unhurried",
    subtitle: "Sacred cities and the rock, without collecting them like stamps.",
    days: 7,
    pace: "slow",
    priceFrom: 1490,
    interests: ["culture", "wellness"],
    bestMonths: [1, 2, 5, 6, 7, 8, 9, 11, 12],
    route: ["negombo", "anuradhapura", "sigiriya", "polonnaruwa", "dambulla", "kandy"],
    summary:
      "A week for ruins, pilgrimage landscapes, and Kandy. No beach is promised, and none is squeezed in.",
    idealFor:
      "Travelers who care more about Anuradhapura and Polonnaruwa than about a checklist of beaches.",
    image: photos.anuradhapura.src,
    includes: [
      "Private vehicle and host",
      "Ancient-city tickets in the plan",
      "Bicycle arrangement in Polonnaruwa",
      "Hotels near the sites so mornings start cool",
      "Dressing guidance for each shrine",
    ],
    excludes: [
      "Flights and insurance",
      "A south-coast extension — ask if you have more days",
      "Most meals beyond breakfast",
      "Donations you may wish to make yourself",
    ],
    daysPlan: [
      { title: "Soft landing", place: "Negombo", text: "Arrive and stay by the lagoon. The north can wait until morning." },
      { title: "The sacred city", place: "Anuradhapura", text: "Drive north and spend the late day on one stupa and the bodhi tree, not the entire map." },
      { title: "Anuradhapura by bicycle and vehicle", place: "Anuradhapura", text: "A second morning for the sites that deserved more than a photograph." },
      { title: "South to the rock", place: "Sigiriya", text: "Travel to Sigiriya. Sunset at Pidurangala if the sky is kind." },
      { title: "The fortress", place: "Sigiriya", text: "Opening hour on the rock. A quiet afternoon. Optional reservoir if the season suits wildlife." },
      { title: "Polonnaruwa, then caves", place: "Polonnaruwa", text: "Cycle the medieval city. Dambulla’s caves only if the day still feels generous. Otherwise they move to tomorrow’s drive." },
      { title: "Kandy and away", place: "Kandy", text: "Temple of the Tooth and a departure via Colombo timed to your flight. Early flights overnight nearer the airport instead." },
    ],
    seo: {
      title: "7-Day Cultural Triangle Itinerary",
      description:
        "A slow private week through Anuradhapura, Sigiriya, Polonnaruwa, Dambulla, and Kandy for culture-first travelers.",
    },
  },
  {
    slug: "wildlife-and-south",
    title: "Wildlife and the South",
    subtitle: "Elephants if the season agrees, leopards if they appear, then the coast.",
    days: 9,
    pace: "balanced",
    priceFrom: 1980,
    interests: ["wildlife", "culture", "coast"],
    bestMonths: [2, 3, 4, 5, 6, 7],
    route: ["negombo", "sigiriya", "kandy", "ella", "yala", "mirissa"],
    summary:
      "A wildlife-leaning first or second trip. Parks are treated as parks. The south coast is the reward, not a midnight add-on.",
    idealFor:
      "Travelers who want animals and are willing to wake up early, then stop moving.",
    image: photos.yala.src,
    includes: [
      "Private vehicle and host",
      "Licensed park jeeps and trackers",
      "Sigiriya entry",
      "South-coast finish",
      "Breakfasts",
    ],
    excludes: [
      "Guaranteed animal sightings",
      "Flights, insurance, most meals",
      "A second park unless your dates and budget want Udawalawe as a swap",
    ],
    daysPlan: [
      { title: "Arrive", place: "Negombo", text: "Airport night. Early start tomorrow, so the hotel is close." },
      { title: "To Sigiriya", place: "Sigiriya", text: "Drive inland. Feet up on arrival." },
      { title: "Rock, then a look at the tanks", place: "Sigiriya", text: "Fortress at opening. If the elephant season is real for your dates, a jeep takes a separate morning — we will not stack it on the climb." },
      { title: "Reservoir or village", place: "Sigiriya", text: "The wildlife morning, or a village and lake morning if the parks are a poor fit that week." },
      { title: "Kandy in passing, done properly", place: "Kandy", text: "One night. Temple and lake. The hills start tomorrow." },
      { title: "Ella", place: "Ella", text: "Train or drive. Nine Arches if you arrive in time. If not, it waits until a short stop on the way down." },
      { title: "Into Yala", place: "Yala", text: "Transfer to the park edge. Briefing at dusk. Sleep early." },
      { title: "Opening hour in the park", place: "Yala", text: "Jeep at dawn. Lodge afternoon. No other plans." },
      { title: "The coast, then home", place: "Mirissa", text: "Drive to Mirissa or Galle for a last night, or to Colombo if the flight demands it." },
    ],
    seo: {
      title: "9-Day Wildlife and South Coast Itinerary",
      description:
        "Nine private days combining Sigiriya, a seasonal elephant park, Yala, and the south coast without stacked dawns.",
    },
  },
  {
    slug: "triangle-and-east",
    title: "Triangle and the East",
    subtitle: "Ancient cities, then a real stay on the bay when the east coast is in season.",
    days: 12,
    pace: "slow",
    priceFrom: 2620,
    interests: ["culture", "coast", "wellness"],
    bestMonths: [5, 6, 7, 8, 9],
    route: ["negombo", "anuradhapura", "sigiriya", "polonnaruwa", "kandy", "trincomalee", "colombo"],
    summary:
      "The right answer for May to September, when the south is often rough and Trincomalee is the swim. Distances are respected.",
    idealFor:
      "Travelers with nearly two weeks whose dates fall in the east-coast season.",
    image: photos.trinco.src,
    includes: [
      "Private vehicle and host throughout",
      "Cultural Triangle entries",
      "Three nights on the east coast",
      "Breakfasts and permit advice for any boat day",
      "Airport timing in both directions",
    ],
    excludes: [
      "Flights and insurance",
      "Marine-park boats unless the sea is fit",
      "A south-coast fort night — possible only by dropping something else",
    ],
    daysPlan: [
      { title: "Negombo", place: "Negombo", text: "Land and stay near the airport. No heroics." },
      { title: "Anuradhapura", place: "Anuradhapura", text: "North to the sacred city. A first stupa in the late light." },
      { title: "Sacred city, continued", place: "Anuradhapura", text: "A slow morning among the monasteries you actually want." },
      { title: "Sigiriya", place: "Sigiriya", text: "South to the rock. Sunset optional at Pidurangala." },
      { title: "The climb", place: "Sigiriya", text: "Opening hour on Sigiriya. Afternoon off." },
      { title: "Polonnaruwa", place: "Polonnaruwa", text: "A cycling day in the medieval capital, then back toward a Sigiriya or Habarana night." },
      { title: "Kandy", place: "Kandy", text: "Drive to Kandy. Temple of the Tooth." },
      { title: "Cross to the bay", place: "Trincomalee", text: "The long drive east is the only task. Arrive, swim if the light remains, sleep." },
      { title: "Beach", place: "Trincomalee", text: "Uppuveli or Nilaveli. Nothing else is required." },
      { title: "Bay and headland", place: "Trincomalee", text: "A temple hour and, only if permits and swell agree, a snorkel. Otherwise lunch and more sea." },
      { title: "Another open day", place: "Trincomalee", text: "Written into the plan so it survives contact with enthusiasm." },
      { title: "Return west", place: "Colombo", text: "A full travel day toward Colombo or Negombo for the flight. Early flights use an extra airport night instead of this day’s drive." },
    ],
    seo: {
      title: "12-Day East Coast and Cultural Triangle",
      description:
        "A May-to-September Sri Lanka journey: Anuradhapura, Sigiriya, Kandy, and three nights in Trincomalee.",
    },
  },
  {
    slug: "the-long-way",
    title: "The Long Way Round",
    subtitle: "Two weeks, the full classic arc, still with empty afternoons.",
    days: 14,
    pace: "full",
    priceFrom: 3120,
    interests: ["culture", "tea", "wildlife", "coast", "food"],
    bestMonths: [1, 2, 3, 4],
    route: ["negombo", "anuradhapura", "sigiriya", "polonnaruwa", "kandy", "nuwara-eliya", "ella", "yala", "mirissa", "galle", "colombo"],
    summary:
      "The island’s greatest hits, in an order that a driver can actually drive. Best in the drier months on the south and west.",
    idealFor:
      "Travelers who can give Sri Lanka two weeks and want cities, hills, a park, and the fort in one private loop.",
    image: photos.galle.src,
    includes: [
      "Private vehicle and host for the full loop",
      "Park jeep in Yala",
      "Train request in the hills",
      "Key cultural entries",
      "A Colombo food hour if the last day allows",
      "Breakfasts",
    ],
    excludes: [
      "International flights and insurance",
      "A Jaffna extension — that is a different journey",
      "All meals, tips, and visas",
    ],
    daysPlan: [
      { title: "Arrival", place: "Negombo", text: "Airport, lagoon, sleep." },
      { title: "North", place: "Anuradhapura", text: "Drive to the sacred city and keep the first visit short." },
      { title: "Stupas", place: "Anuradhapura", text: "A fuller morning, then south toward Sigiriya." },
      { title: "The rock", place: "Sigiriya", text: "Arrive and do Pidurangala or nothing. The fortress is tomorrow." },
      { title: "Summit", place: "Sigiriya", text: "Opening-hour climb. Afternoon free." },
      { title: "Medieval city", place: "Polonnaruwa", text: "Cycle Polonnaruwa and overnight back near Dambulla or move toward Kandy if energy is high." },
      { title: "Kandy", place: "Kandy", text: "Caves at Dambulla on the way if they were not forced yesterday. Temple in the evening." },
      { title: "Tea", place: "Nuwara Eliya", text: "Climb into the estates." },
      { title: "Factory and train", place: "Ella", text: "Estate morning, then rail or road to Ella." },
      { title: "Bridge", place: "Ella", text: "Nine Arches and a quiet second half." },
      { title: "Park edge", place: "Yala", text: "Down to Yala. Early night." },
      { title: "Safari, then coast", place: "Mirissa", text: "Dawn jeep. Afternoon transfer only as far as comfort allows — Mirissa if the day starts early enough, otherwise a park-edge night and the coast tomorrow." },
      { title: "Sea", place: "Mirissa", text: "Swim. Whale boat only in season and only if yesterday was not already a 4 a.m. start." },
      { title: "Fort and flight", place: "Galle", text: "Galle ramparts and a Colombo departure timed with a buffer. Very early flights skip the fort and use an airport hotel." },
    ],
    seo: {
      title: "14-Day Private Sri Lanka Itinerary",
      description:
        "Two weeks around Sri Lanka by private vehicle: cultural cities, tea country, Yala, Mirissa, and Galle, in a drivable order.",
    },
  },
];

export function getJourney(slug: string) {
  return journeys.find((item) => item.slug === slug);
}

export const paceLabel: Record<Journey["pace"], string> = {
  slow: "Slow",
  balanced: "Balanced",
  full: "Full, still private",
};
