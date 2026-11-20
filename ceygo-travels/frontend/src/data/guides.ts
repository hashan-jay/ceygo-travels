import { photos } from "@/data/photos";
import type { Guide } from "@/data/types";

export const guides: Guide[] = [
  {
    slug: "first-time-sri-lanka",
    title: "Sri Lanka for a first visit",
    excerpt:
      "How long to come, what to skip, and why the map is more optimistic than the roads.",
    read: "7 min",
    image: photos.sigiriya.src,
    updated: "2026-04-01",
    sections: [
      {
        id: "how-long",
        heading: "How long the island actually takes",
        paragraphs: [
          "Seven days can be a beautiful first look if you choose a lane: the Cultural Triangle and Kandy, or the hills and the south. It cannot be both without turning the holiday into a shuttle.",
          "Ten to fourteen days is the range CeyGo suggests for a first international trip that includes a fortress, the hills, and the coast. Two weeks is where empty afternoons start to survive.",
        ],
      },
      {
        id: "order",
        heading: "A sensible order",
        paragraphs: [
          "Most flights land at Bandaranaike, north of Colombo. Start there or in Negombo. Move inland to Sigiriya while you are fresh. Continue to Kandy and the hills, then descend to the south if your dates suit that coast.",
          "The east coast replaces the south between roughly May and September. Jaffna is a reward for a longer trip or a second visit, not a same-week whim from Galle.",
        ],
      },
      {
        id: "with-a-host",
        heading: "Why the car has a person in it",
        paragraphs: [
          "Self-drive is legal and possible. For a first multi-city trip, a private driver-host is the difference between watching the country and managing it. Roads are shared with buses, dogs, school runs, and weather.",
          "Trains are for the hills, as an experience. They are a poor way to move luggage across the whole island. CeyGo puts bags in the car and people on the scenic section.",
        ],
      },
      {
        id: "what-we-skip",
        heading: "What a good first plan leaves out",
        paragraphs: [
          "Three ancient cities and a safari and a fort in four days is a plan that looks efficient and feels like freight. We would rather you remember Pidurangala at dusk than a list of ticket stubs.",
          "If you tell us what you refuse to miss, we will protect it and cut something else in the open.",
        ],
      },
    ],
    seo: {
      title: "First Time in Sri Lanka — Planning Guide",
      description:
        "How many days a first Sri Lanka trip needs, which coast matches your dates, and what a private itinerary should leave out.",
    },
  },
  {
    slug: "when-to-visit",
    title: "When to come, coast by coast",
    excerpt:
      "The island does not have one season. The coast you want depends on the month you can travel.",
    read: "6 min",
    image: photos.trinco.src,
    updated: "2026-04-01",
    sections: [
      {
        id: "two-monsoons",
        heading: "Two monsoons, not one climate",
        paragraphs: [
          "Sri Lanka sits in the path of two rainy seasons that favor opposite coasts. From about May to September the southwest — Colombo, Galle, Mirissa — is more likely to be wet and the sea rougher, while the east around Trincomalee and Arugam Bay is often calmer.",
          "From about November to March the pattern tends to reverse. December through March is the popular window for the south and west. These are tendencies, not contracts. A week can include bright days in the wet months and a violent hour in the dry ones.",
        ],
      },
      {
        id: "hills",
        heading: "The hills are a third climate",
        paragraphs: [
          "Kandy, Nuwara Eliya, and Ella are cooler throughout the year and can be misty when the coasts are clear. Pack a layer. Tea country is not a beach wardrobe moved uphill.",
          "The Cultural Triangle is hot on the rock at midday in every month. Opening hour matters more than the name of the season.",
        ],
      },
      {
        id: "wildlife-windows",
        heading: "Animals and boats",
        paragraphs: [
          "Whale boats from Mirissa usually operate from about November into April. Trincomalee has its own offshore season, often discussed in the first half of the year. Ask for the specific week. Do not buy a guarantee.",
          "Elephant gatherings at the great tanks are stronger in drier months, often mid-year into October. Yala is visited year-round. Clearer ground from about February to June can make sightings easier. Easier is not certain.",
        ],
      },
      {
        id: "choose",
        heading: "Choose the coast before the hotels",
        paragraphs: [
          "Tell CeyGo the dates first. If they are August, we will talk about Trincomalee before we talk about Mirissa. If they are January, the south coast leads. Fighting the monsoon for a photograph is a poor use of a long-haul ticket.",
        ],
      },
    ],
    seo: {
      title: "Best Time to Visit Sri Lanka, by Coast",
      description:
        "Sri Lanka’s seasons explained for international travelers: south coast, east coast, hills, wildlife, and whale boats.",
    },
  },
  {
    slug: "getting-around",
    title: "Getting around the island",
    excerpt:
      "Airports, private cars, trains, and why a short line on the map can take half a day.",
    read: "6 min",
    image: photos.ellaArches.src,
    updated: "2026-04-01",
    sections: [
      {
        id: "airports",
        heading: "Where you land",
        paragraphs: [
          "Almost all long-haul flights use Bandaranaike International Airport, code CMB, beside Negombo. A few services use Mattala in the south. Unless your ticket says otherwise, plan for CMB.",
          "A late arrival belongs in Negombo. Colombo is for when you want the city, not as a default after fourteen hours in the air.",
        ],
      },
      {
        id: "roads",
        heading: "Private car, honestly",
        paragraphs: [
          "Highways have shortened some west-coast and Kandy runs. The hills, the east, and the far south are still winding, shared, and occasionally slowed by weather or a procession. Build the day around one long transfer, not two.",
          "Your driver-host is not only a chauffeur. They watch the time, the temples’ dress codes, and the moment when everyone in the back seat has had enough.",
        ],
      },
      {
        id: "trains",
        heading: "Trains worth taking",
        paragraphs: [
          "The Kandy–Ella line is the one to ride, for the landscape. Reserved seats in the better carriages sell out. We request them and keep the car as backup so a full train does not break the journey.",
          "Other trains can be useful and slow. They are rarely the way to catch a flight.",
        ],
      },
      {
        id: "flights-inside",
        heading: "Domestic flights",
        paragraphs: [
          "Short hops exist, including toward the north and sometimes the east or south. They save a day only when the timetable matches your hotels. Often the road, with a proper stop, is the more reliable beautiful option. We will say which for your dates.",
        ],
      },
    ],
    seo: {
      title: "Getting Around Sri Lanka — Cars, Trains, Airports",
      description:
        "How international visitors actually move around Sri Lanka: CMB airport, private drivers, the hill train, and domestic flights.",
    },
  },
  {
    slug: "temples-and-customs",
    title: "Temples, dress, and being a good guest",
    excerpt:
      "Shoulders, shoes, and the difference between a ruin and a place that is still in worship.",
    read: "6 min",
    image: photos.kandyTemple.src,
    updated: "2026-04-01",
    sections: [
      {
        id: "dress",
        heading: "What to wear",
        paragraphs: [
          "At Buddhist and Hindu places of worship, cover shoulders and knees. Sarongs and shawls are a backup, not a plan. Bring clothes that already work so you are not adjusting a scarf in a queue.",
          "Shoes and hats come off before you enter. Point your feet away from Buddha images when you sit. A simple rule: if devotees are dressed more modestly than you, you are not finished dressing.",
        ],
      },
      {
        id: "conduct",
        heading: "How to stand",
        paragraphs: [
          "Do not pose with your back to a Buddha or a stupa. Do not climb what is in worship. Ask before photographing people, monks, or inner shrines. Some rooms are simply off limits to cameras.",
          "At Nallur and other Hindu temples, local custom for men can include removing shirts in inner areas. CeyGo confirms the day’s rule before you arrive so nobody is surprised or disrespectful.",
        ],
      },
      {
        id: "ruins",
        heading: "Ruins that are still sacred",
        paragraphs: [
          "Anuradhapura is both an archaeological landscape and a pilgrimage city. Polonnaruwa and Dambulla ask for the same double vision. Sigiriya is primarily an archaeological site. The behavior changes with the place, and your host will mark the change out loud.",
        ],
      },
      {
        id: "everyday",
        heading: "Away from the shrine",
        paragraphs: [
          "A smile and a slower pace solve more problems than volume. Public affection is better kept modest. The head is considered respectful space. Do not touch someone’s head, including children, as a greeting.",
          "If you are unsure, ask. Guests who ask are easy to host.",
        ],
      },
    ],
    seo: {
      title: "Sri Lanka Temple Dress Code and Customs",
      description:
        "What to wear and how to behave at Sri Lanka’s Buddhist and Hindu sites, written for international visitors.",
    },
  },
  {
    slug: "food-money-connection",
    title: "Food, money, and staying connected",
    excerpt:
      "Rice and curry without the fear, rupees versus cards, and a SIM that works in the hills.",
    read: "7 min",
    image: photos.pettah.src,
    updated: "2026-04-01",
    sections: [
      {
        id: "food",
        heading: "How the island eats",
        paragraphs: [
          "Rice and curry is the everyday meal: a plate of rice, several curries, sambol, and something crisp. Heat is adjustable. Say mild, medium, or the real thing. Hoppers, kottu, string hoppers, and short eats are the other vocabulary worth learning in week one.",
          "Vegetarians eat well if the kitchen knows before the pot is full. Seafood is excellent on the coast. Jaffna crab is its own pilgrimage. Drink bottled or filtered water. Wash fruit you buy at the roadside.",
        ],
      },
      {
        id: "money",
        heading: "Money without fuss",
        paragraphs: [
          "The currency is the Sri Lankan rupee. Cards work in many hotels and city restaurants and fade as you get more rural. Carry cash for parkside shops, temples’ small stalls, and tips.",
          "CeyGo quotes private journeys in US dollars so international travelers can compare. You will still spend rupees on the ground. ATMs are common in towns. Tell your bank you are traveling.",
        ],
      },
      {
        id: "tips",
        heading: "Tipping",
        paragraphs: [
          "There is no single national percentage. A thank-you for a driver-host at the end of a journey, for a naturalist after a good safari, and for hotel staff who looked after you is appreciated. We include guidance in your final briefing rather than a rigid script.",
        ],
      },
      {
        id: "phones",
        heading: "SIM, plugs, power",
        paragraphs: [
          "A local SIM at the airport is straightforward for most passports and worth more than roaming once you are in the hills. Coverage is good in cities and thinner on some park roads and ridges.",
          "Plugs are mostly types D and G. A universal adapter covers you. Power cuts happen. Decent hotels have backup for lights and fans. Pack a small torch anyway.",
        ],
      },
    ],
    seo: {
      title: "Sri Lanka Food, Money, and SIM Cards",
      description:
        "Practical notes for visitors: rice and curry, rupees, tipping, local SIMs, and plug types in Sri Lanka.",
    },
  },
  {
    slug: "wildlife-with-care",
    title: "Wildlife, with care",
    excerpt:
      "Leopards, elephants, whales, and the habits that keep a safari worthy of the animal.",
    read: "5 min",
    image: photos.yala.src,
    updated: "2026-04-01",
    sections: [
      {
        id: "promise",
        heading: "No promises, on purpose",
        paragraphs: [
          "Any itinerary that guarantees a leopard is selling a story the park did not sign. CeyGo books licensed jeeps and trackers, enters at opening, and treats a sighting as luck plus good habits.",
        ],
      },
      {
        id: "in-the-jeep",
        heading: "In the jeep",
        paragraphs: [
          "Stay seated. Keep voices low. Do not ask the driver to leave the track. Neutral clothing helps you and the other people sharing the animal. Put the drone away. Parks are not airspace for hobbies.",
          "Elephants at a tank are wild even when they look calm. Distance is the experience.",
        ],
      },
      {
        id: "sea",
        heading: "On the water",
        paragraphs: [
          "Whale and dolphin boats should brief you on approach distances and then obey them. If a crew is racing another boat, the morning has already failed. We change operators rather than argue at sea.",
          "Snorkelling at places such as Pigeon Island requires permits and feet that stay off the coral.",
        ],
      },
      {
        id: "monkeys",
        heading: "The animals at the hotel",
        paragraphs: [
          "Monkeys, peacocks, and the occasional monitor lizard live beside lodges. Do not feed them. Food in an open bag is an invitation. A fed monkey is how a nice terrace becomes a problem.",
        ],
      },
    ],
    seo: {
      title: "Responsible Wildlife Watching in Sri Lanka",
      description:
        "How to visit Yala, Minneriya, and whale boats in Sri Lanka without chasing animals or believing guarantees.",
    },
  },
];

export function getGuide(slug: string) {
  return guides.find((item) => item.slug === slug);
}
