import { photos } from "@/data/photos";
import type { Destination } from "@/data/types";

export const destinations: Destination[] = [
  {
    slug: "colombo",
    name: "Colombo",
    region: "west",
    tagline: "A working capital, best taken neighborhood by neighborhood.",
    excerpt:
      "Start or finish here for galleries, seafront walks, and a first plate of rice and curry before the island opens up.",
    stay: "1–2 nights",
    bestTime: "Year-round. December to March is the drier window on the west coast.",
    pace: "A half day can cover one neighborhood well. A full day is better.",
    bestFor: ["Arrival and departure", "Food", "City walks"],
    image: photos.colombo.src,
    gallery: [photos.colombo, photos.pettah, photos.negombo],
    overview: [
      "Colombo is not a postcard stop you tick and leave. It is where Sri Lanka meets the sea as a real city: colonial warehouses turned into galleries, a long green face along Galle Face, and markets that still feed the island.",
      "For most international trips it is the bookend. Land, sleep, eat, and use a short stay to adjust to the heat and the left-hand traffic before a driver takes you inland. On the way home, a last night here keeps the airport honest.",
    ],
    highlights: [
      {
        title: "Galle Face at dusk",
        text: "The lawn by the Indian Ocean is where the city walks, flies kites, and eats short eats while the light drops.",
      },
      {
        title: "Pettah and the Fort edge",
        text: "A guided hour in Pettah is plenty. The lanes are dense, the spice stalls are serious, and a local host keeps it comfortable.",
      },
      {
        title: "A first rice and curry",
        text: "Ask for the heat you actually want. Colombo kitchens range from hotel dining rooms to family spots that have cooked the same menu for decades.",
      },
    ],
    gettingThere:
      "Bandaranaike International Airport is north of the city, near Negombo. The drive into Colombo often takes longer than the map suggests, especially late afternoon. If you land after dark, Negombo is the calmer first night.",
    know: [
      "Use hotel cars or a CeyGo vehicle at night rather than figuring out street hail while jet-lagged.",
      "Dress for air-conditioned rooms and warm streets. A light layer is useful.",
      "Friday evenings and Sunday afternoons change the pace of some neighborhoods. The desk times arrivals around that.",
    ],
    seo: {
      title: "Colombo, Sri Lanka — City Stay for International Travelers",
      description:
        "How to use Colombo on a Sri Lanka vacation: neighborhoods, food, and the airport link, planned by CeyGo Travels for visitors from abroad.",
    },
  },
  {
    slug: "negombo",
    name: "Negombo",
    region: "west",
    tagline: "The gentle first night, a lagoon away from the runway.",
    excerpt:
      "Fishermen, a long beach, and a short transfer when the flight lands late or leaves early.",
    stay: "1 night",
    bestTime: "December to April for beach time. Useful year-round as an airport night.",
    pace: "Treat it as a soft landing, not a resort week, unless you ask for one.",
    bestFor: ["Late arrivals", "Early flights", "A first swim"],
    image: photos.negombo.src,
    gallery: [photos.negombo, photos.colombo, photos.mirissa],
    overview: [
      "Negombo sits close to the international airport, on a lagoon that has fed a Catholic fishing town for generations. It is the practical, pleasant answer to a midnight landing.",
      "The beach is long and local. It is not Mirissa and it is not trying to be. Stay once on the way in, walk the lagoon in the morning, and leave inland while the day is still cool.",
    ],
    highlights: [
      {
        title: "Lagoon morning",
        text: "Boats, net mending, and a fish market that starts before most hotels serve breakfast.",
      },
      {
        title: "A reset swim",
        text: "Enough sea to shake off the flight if the southwest is calm. If it is rough, the pool and an early departure are the better plan.",
      },
      {
        title: "The Dutch canal edge",
        text: "A short look at the old canal quarter if you have a spare hour and do not want to rush the rock fortress the same day.",
      },
    ],
    gettingThere:
      "Often under an hour from the airport, traffic allowing. That is why CeyGo uses it as the arrival night on almost every first itinerary.",
    know: [
      "Beach sellers are part of the scene. A simple no, with a smile, is enough.",
      "Do not plan Sigiriya on the morning after a long-haul night landing.",
      "Seafood is the local point. Say how hot you like it.",
    ],
    seo: {
      title: "Negombo for Your First Night in Sri Lanka",
      description:
        "Why international arrivals often start in Negombo: a short airport transfer, lagoon life, and an easy start to a CeyGo journey.",
    },
  },
  {
    slug: "sigiriya",
    name: "Sigiriya",
    region: "triangle",
    tagline: "A palace rock that still organizes the whole plain.",
    excerpt:
      "Climb the fifth-century citadel early, then let the rest of the day belong to Pidurangala, tanks, and village lanes.",
    stay: "2 nights",
    bestTime: "Year-round. Go up at opening, especially in the hotter months from February to May.",
    pace: "One serious climb, then an easy day. Do not stack it with a long transfer.",
    bestFor: ["First trips", "History", "Sunrise and sunset"],
    image: photos.sigiriya.src,
    gallery: [photos.sigiriya, photos.sigiriyaView, photos.elephants],
    overview: [
      "Sigiriya is the picture most people carry of Sri Lanka before they land: a rust-red monolith with the remains of a palace on top and water gardens at its feet. It earns the reputation if you give it time and an early start.",
      "The area around the rock is the point of staying two nights. Pidurangala faces the fortress at sunset. Village walks, a reservoir, and a possible elephant gathering at Minneriya sit within reach without turning the day into a rally.",
    ],
    highlights: [
      {
        title: "The rock at opening",
        text: "Stairs, fresco pockets, the mirror wall, and the lion paws. The view from the summit is the reason for the early alarm.",
      },
      {
        title: "Pidurangala",
        text: "A rougher, shorter climb opposite Sigiriya. Sunset here, with the fortress in profile, is the photograph people mean to take.",
      },
      {
        title: "A reservoir afternoon",
        text: "When the season is right, Minneriya or Kaudulla can hold large elephant herds. Sightings are never promised. The landscape is worth the drive anyway.",
      },
    ],
    gettingThere:
      "About four hours from Colombo or Negombo with a private driver, longer if you stop at a spice garden or Dambulla. From Kandy, allow three hours or more.",
    know: [
      "The summit stairs are real exercise. Tell the desk if knees or heat are a concern. There is still a rich visit in the gardens and museum.",
      "Shoulders and knees covered is the respectful default at religious sites nearby. Sigiriya itself is an archaeological site, and sun protection matters more there.",
      "Drones are a poor idea at the rock. Assume they are not allowed.",
    ],
    seo: {
      title: "Sigiriya Travel Guide for a Private Sri Lanka Trip",
      description:
        "Visit Sigiriya with time to spare: the rock fortress, Pidurangala, and nearby reservoirs, paced for international travelers by CeyGo Travels.",
    },
  },
  {
    slug: "dambulla",
    name: "Dambulla",
    region: "triangle",
    tagline: "Cave temples painted gold, usually paired with the rock.",
    excerpt:
      "A living Buddhist cave complex above the plains, best as a focused visit rather than a rushed add-on.",
    stay: "Day visit, or 1 night if you want the triangle slower",
    bestTime: "Morning, before coach groups and before the cave steps feel hotter.",
    pace: "Ninety minutes inside is a good visit. Combine it with Sigiriya, not with three other sites.",
    bestFor: ["Temple art", "Cultural Triangle routing", "Photography"],
    image: photos.dambulla.src,
    gallery: [photos.dambulla, photos.sigiriya, photos.polonnaruwa],
    overview: [
      "The cave temples at Dambulla have been in use for centuries. Inside, rows of seated Buddhas sit under ceilings that drip with painted pattern. It is close enough to Sigiriya that many itineraries try to do both before lunch. That is how the place gets flattened.",
      "CeyGo schedules it on its own morning, shoes off, voices low, with a host who knows which cave to linger in. The golden dagoba outside catches the light when you come back down.",
    ],
    highlights: [
      {
        title: "The painted caves",
        text: "Five caves, hundreds of statues, and ceilings that reward a slow look rather than a circuit.",
      },
      {
        title: "The stair approach",
        text: "A steady climb. Take water. The view back over the tank and the town explains why this ridge was chosen.",
      },
      {
        title: "A market lunch nearby",
        text: "Dambulla town feeds the surrounding farms. A simple rice and curry after the caves beats a late dash to the next ruin.",
      },
    ],
    gettingThere:
      "A short drive from Sigiriya. Easy to include on the way between the rock and Kandy or Polonnaruwa if the rest of the day stays light.",
    know: [
      "Shoulders and knees covered. Shoes come off and stay off. Photography rules inside can change — follow the attendants.",
      "Do not pose with your back to Buddha images, and do not treat statues as props.",
      "The stone can be slippery after rain.",
    ],
    seo: {
      title: "Dambulla Cave Temple on a Sri Lanka Itinerary",
      description:
        "Plan a respectful visit to Dambulla cave temple from a private Sri Lanka trip, with timing that keeps the caves unhurried.",
    },
  },
  {
    slug: "polonnaruwa",
    name: "Polonnaruwa",
    region: "triangle",
    tagline: "A medieval capital you can bicycle, if the heat allows.",
    excerpt:
      "Gal Vihara’s stone Buddhas, lotus ponds, and a ruined city that reads clearly from a bike saddle.",
    stay: "1 night, or a full day from Sigiriya",
    bestTime: "Start soon after opening. The site is exposed.",
    pace: "A full day. A two-hour dash only shows the parking areas.",
    bestFor: ["Ruins", "Cycling", "Travelers who liked Sigiriya"],
    image: photos.polonnaruwa.src,
    gallery: [photos.polonnaruwa, photos.elephants, photos.anuradhapura],
    overview: [
      "Polonnaruwa was a royal capital when Sri Lanka’s irrigation engineering was at a high pitch. The ruins are spread through trees and grass, which is why a bicycle — with a support vehicle nearby — is the right tool in the cooler hours.",
      "Gal Vihara is the emotional center: colossal Buddhas cut from a single ridge of rock, including a reclining figure that photographs never quite scale. See it before the day gets loud.",
    ],
    highlights: [
      {
        title: "Gal Vihara",
        text: "Four rock-cut figures. Stand back before you move close. The scale is the point.",
      },
      {
        title: "The Quadrangle",
        text: "A compact sacred precinct of circular and stone shrines. This is where a guide earns the morning.",
      },
      {
        title: "The reservoir edge",
        text: "Parakrama Samudra is the great tank beside the city. It explains how this capital fed itself.",
      },
    ],
    gettingThere:
      "Roughly an hour and a half from Sigiriya, depending on stops. Far enough that a same-day return plus a rock climb is a long ask. Pick one major site for the hard hours.",
    know: [
      "Hire bikes on site through the desk so the fit is sorted before you arrive.",
      "Carry more water than you think. Shade is occasional.",
      "Tickets and photography rules are confirmed before the day, not guessed at the gate.",
    ],
    seo: {
      title: "Polonnaruwa by Bicycle — Ancient City Guide",
      description:
        "See Polonnaruwa properly: Gal Vihara, the Quadrangle, and a cycling plan for international visitors on a private Sri Lanka journey.",
    },
  },
  {
    slug: "anuradhapura",
    name: "Anuradhapura",
    region: "triangle",
    tagline: "A sacred city still in worship, older than most maps feel.",
    excerpt:
      "Great stupas, bodhi trees, and monastic ruins. This is a pilgrimage landscape, not an empty museum.",
    stay: "1 night",
    bestTime: "Morning and late afternoon. Midday belongs indoors.",
    pace: "Slow. Choose a few sacred places and leave the rest.",
    bestFor: ["Pilgrimage and history", "Quiet travelers", "A northbound route"],
    image: photos.anuradhapura.src,
    gallery: [photos.anuradhapura, photos.polonnaruwa, photos.jaffna],
    overview: [
      "Anuradhapura was a capital for more than a thousand years and never stopped being holy. White-clad pilgrims walk the same paths as visitors who came for the architecture. The difference matters: this is not a backdrop.",
      "Ruwanwelisaya’s white dome, the Sri Maha Bodhi, and the brick mass of Jetavanaramaya are enough for one thoughtful day. CeyGo does not try to collect every monastery.",
    ],
    highlights: [
      {
        title: "Ruwanwelisaya",
        text: "A vast white stupa. Circumambulate with the pilgrims, shoes off, and let the scale settle.",
      },
      {
        title: "Sri Maha Bodhi",
        text: "A sacred fig tree grown from a cutting of the tree under which the Buddha awakened, brought to the island in the third century BCE. Dress and behave as a guest.",
      },
      {
        title: "The ancient tanks",
        text: "The city’s water works are as impressive as its shrines. A late drive along a tank bund is the right way to end.",
      },
    ],
    gettingThere:
      "North of Sigiriya and Dambulla, often combined with a night here before Jaffna or before turning back toward Kandy. The drive from Negombo can be a first full day if you leave early.",
    know: [
      "White clothing is what many local pilgrims wear. You do not have to match it. Covered shoulders and knees are expected, and some shrines ask for more.",
      "Do not turn your back on stupas for a posed photo. Do not climb what is in worship.",
      "A bicycle works in the cooler part of the day. A vehicle between far-flung sites is kinder after 11.",
    ],
    seo: {
      title: "Anuradhapura Sacred City — Visitor Guide",
      description:
        "Visit Anuradhapura with care: stupas, the Sri Maha Bodhi, and how CeyGo Travels paces a sacred city for travelers from abroad.",
    },
  },
  {
    slug: "kandy",
    name: "Kandy",
    region: "hills",
    tagline: "The lake city where the island’s most revered relic is kept.",
    excerpt:
      "Temple of the Tooth, an evening by the water, and the gateway to tea country.",
    stay: "2 nights",
    bestTime: "Year-round. Expect short rains. Mornings are clearest for the botanic gardens.",
    pace: "One temple-focused day, one softer day. The city rewards not rushing.",
    bestFor: ["Culture", "First trips", "Train connections"],
    image: photos.kandy.src,
    gallery: [photos.kandy, photos.kandyTemple, photos.tea],
    overview: [
      "Kandy was the last seat of the Kandyan kingdom and still carries itself like a capital. The lake is the center. Above it, the Temple of the Sacred Tooth Relic draws pilgrims every day, and travelers who give the ritual room to be itself.",
      "Two nights lets you attend the temple without watching the clock, walk the lakeside after dark, and leave toward the hills on a morning train or a scenic drive. One night reduces Kandy to a fuel stop.",
    ],
    highlights: [
      {
        title: "Temple of the Tooth",
        text: "The relic is kept in an inner chamber. You will not see it uncovered. The drumming, flowers, and crowd of devotees are the visit. Go with a host and a covered dress code.",
      },
      {
        title: "Peradeniya Botanic Gardens",
        text: "A grand avenue of palms and a lawn of flying foxes in the trees. Best before the day heats.",
      },
      {
        title: "A Kandyan performance",
        text: "Drumming and dance, staged for visitors but rooted in real forms. CeyGo picks a shorter, well-run show rather than a long tourist marathon.",
      },
    ],
    gettingThere:
      "About three hours from Colombo via the highway in good traffic, longer at rush hour. From Sigiriya, a half day on the road with a spice or craft stop if you want one. The train from Kandy toward Ella is the famous continuation.",
    know: [
      "The temple has a dress code and security checks. Leave the daypack light.",
      "The lake loop is walkable. Hills around it are steeper than they look.",
      "Ask before photographing people at worship.",
    ],
    seo: {
      title: "Kandy and the Temple of the Tooth — Trip Planning",
      description:
        "Plan two nights in Kandy: the Temple of the Tooth, the lake, and the start of Sri Lanka’s tea country, arranged for international guests.",
    },
  },
  {
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    region: "hills",
    tagline: "Tea country air, a lake, and nights cool enough for a jacket.",
    excerpt:
      "Walk a working estate, taste what that slope actually produces, and sleep above the heat of the plains.",
    stay: "1–2 nights",
    bestTime: "January to April is the clearest. The hills can be damp and romantic in other months.",
    pace: "Slow on purpose. The drive up is part of the day.",
    bestFor: ["Tea", "Cool weather", "Couples and slow trips"],
    image: photos.tea.src,
    gallery: [photos.tea, photos.ella, photos.kandy],
    overview: [
      "Nuwara Eliya sits high enough that the island changes character. Tudor-style bungalows, a racecourse, and vegetable plots sit among tea. It was a colonial hill station. The estates around it are a living industry, not a stage set.",
      "A good visit is one estate that will actually show you the leaf-to-cup path, a walk that is not only a factory driveway, and a night cold enough to explain why people built fireplaces here.",
    ],
    highlights: [
      {
        title: "A working tea estate",
        text: "Plucking, withering, rolling, firing. Go early. Buy a tea you tasted, not a gift-shop blend you did not.",
      },
      {
        title: "Gregory Lake",
        text: "A flat, easy walk when you want movement without another viewpoint climb.",
      },
      {
        title: "The drive from Kandy",
        text: "Waterfalls, stalls of strawberries and vegetables, and a steady gain in altitude. Sit in the front if you like mountain roads. Say so if you do not.",
      },
    ],
    gettingThere:
      "A scenic half day from Kandy. The train can reach Nanu Oya, with a short road transfer up to town. Seats on the scenic trains should be requested early. There is always a road backup.",
    know: [
      "Pack a light jacket. Hotels know, visitors sometimes do not.",
      "Some estate roads are narrow. Motion-sensitive travelers should tell the desk before the routing is fixed.",
      "Factory visits close on certain holidays. The plan stays flexible.",
    ],
    seo: {
      title: "Nuwara Eliya Tea Country Stay",
      description:
        "Stay in Nuwara Eliya for tea estates, cool air, and the hill drive from Kandy, planned as part of a private Sri Lanka vacation.",
    },
  },
  {
    slug: "ella",
    name: "Ella",
    region: "hills",
    tagline: "A small hill town with one perfect railway bridge.",
    excerpt:
      "Nine Arches, a short ridge walk, and the scenic train — then leave before the town feels crowded.",
    stay: "2 nights",
    bestTime: "January to April for views. The bridge is worth it in mist, too.",
    pace: "Easy walks. Ella is not a summit expedition unless you want Little Adam’s Peak at sunrise.",
    bestFor: ["Train journeys", "Short hikes", "First trips"],
    image: photos.ella.src,
    gallery: [photos.ella, photos.ellaArches, photos.tea],
    overview: [
      "Ella became famous for good reasons and then became busy for the same reasons. Nine Arches Bridge is a genuine piece of engineering in a genuine forest. The ridge walks are short. The main street is full of cafes aimed at travelers.",
      "CeyGo uses Ella as a two-night pause, not a base for a week. Arrive by train if seats exist, walk once to the bridge when the day is quiet, and keep the rest unscheduled.",
    ],
    highlights: [
      {
        title: "Nine Arches Bridge",
        text: "Time a visit for a train if you want the classic scene, and also see it empty. Both are worth having.",
      },
      {
        title: "Little Adam’s Peak",
        text: "A moderate walk with a wide view. Go early. The path is shared with a lot of people later on.",
      },
      {
        title: "The Kandy–Ella railway",
        text: "One of the world’s lovely hill rides. It is also a real train with real demand. The desk requests seats and keeps a car in the plan.",
      },
    ],
    gettingThere:
      "By train from Kandy or Nanu Oya, or by road from the south coast and Yala. Road time from Yala is a half day. Do not schedule a safari and a hill arrival as if they were neighbors.",
    know: [
      "Cafe culture is easy here. Temple manners still apply if you visit a shrine.",
      "Monkeys on the walks are wild animals. Do not feed them.",
      "Two nights is the sweet spot for most international itineraries.",
    ],
    seo: {
      title: "Ella, Nine Arches Bridge, and the Hill Train",
      description:
        "Plan Ella without the rush: Nine Arches Bridge, Little Adam’s Peak, and the scenic Sri Lanka railway, with a backup if the train is full.",
    },
  },
  {
    slug: "galle",
    name: "Galle",
    region: "south",
    tagline: "A walled fort you can cross on foot before dinner.",
    excerpt:
      "Dutch ramparts, courtyard hotels, and the south-coast road that leads to stilts, cinnamon, and the sea.",
    stay: "2 nights",
    bestTime: "December to March for swimming. The fort is good in any season.",
    pace: "Walkable. Keep one day with almost nothing planned.",
    bestFor: ["Architecture", "Food", "Couples"],
    image: photos.galle.src,
    gallery: [photos.galle, photos.galleLight, photos.stilts],
    overview: [
      "Galle Fort is a peninsula town inside seventeenth-century walls: churches, a lighthouse, family houses, and new restaurants sharing the same grid of lanes. You do not need a vehicle inside. You need good shoes and a willingness to turn down side streets.",
      "Outside the walls, the south coast keeps going — stilt fishermen on certain beaches, cinnamon country inland, and better swimming beaches a short drive away when the fort rampart is too rough for a swim.",
    ],
    highlights: [
      {
        title: "Rampart loop",
        text: "Do it twice. Once in hard light to see the stone, once at dusk when the town comes up to sit.",
      },
      {
        title: "A lane without a list",
        text: "The fort is small enough to get slightly lost in, which is the correct method.",
      },
      {
        title: "Stilts and cinnamon",
        text: "A half day along the coast toward Koggala or inland to a cinnamon garden. It is optional. The fort alone justifies the stay.",
      },
    ],
    gettingThere:
      "About two and a half to three hours from Colombo on the expressway in normal traffic. From Mirissa or the south, it is a short hop. Leaving for the airport needs a generous buffer. Say your flight time early.",
    know: [
      "The fort is a living town. Ask before photographing people at their doors.",
      "Rampart edges are real edges. Watch children near the sea wall.",
      "Swim flags and local advice beat a guidebook when the southwest swell is up.",
    ],
    seo: {
      title: "Galle Fort — South Coast Stay in Sri Lanka",
      description:
        "Stay inside Galle Fort and along the south coast: ramparts, food, and day trips, arranged for travelers visiting Sri Lanka from abroad.",
    },
  },
  {
    slug: "mirissa",
    name: "Mirissa",
    region: "south",
    tagline: "A cove for doing very little, and boats when the season is right.",
    excerpt:
      "Swim, eat, sleep. Between November and April, whale boats leave from this stretch of coast.",
    stay: "2–3 nights",
    bestTime: "December to March for calmer seas. Whale boats usually run about November through April.",
    pace: "This is the rest in the itinerary. Protect it.",
    bestFor: ["Beach time", "Whale season", "Honeymoons"],
    image: photos.mirissa.src,
    gallery: [photos.mirissa, photos.mirissaCove, photos.galleLight],
    overview: [
      "Mirissa is a curve of sand and a headland on the south coast. It is social in the middle and quieter at the edges. CeyGo uses the quieter edges, with enough of a beach to justify staying still.",
      "Whale watching is the famous extra, not the reason to suffer a bad boat. In season, the desk books operators who brief properly and do not chase animals. Out of season, the coast is still the point.",
    ],
    highlights: [
      {
        title: "A protected swim",
        text: "Coves and beach breaks change with the monsoon. The host will say where to swim that week, not where a blog swam last year.",
      },
      {
        title: "Whale boats, in season",
        text: "Blue and sperm whales move through these waters in the northern winter months. Sightings are wildlife, not a guarantee.",
      },
      {
        title: "Evenings that end early",
        text: "Seafood, a walk, and sleep. If you want nightlife, say so. The default here is rest.",
      },
    ],
    gettingThere:
      "East of Galle along the south-coast road, a short drive. From Yala or Ella, it is a longer transfer and should be the main event of that day.",
    know: [
      "Boat mornings start very early. Book the next day as a slow one.",
      "Reef-friendly sunscreen and no standing on coral if you snorkel elsewhere.",
      "Peak weeks in January fill the better guesthouses. The earlier the dates, the better the fit.",
    ],
    seo: {
      title: "Mirissa Beach and Whale Season in Sri Lanka",
      description:
        "Plan a Mirissa stay on Sri Lanka’s south coast, including seasonal whale watching and quiet beach time for international travelers.",
    },
  },
  {
    slug: "yala",
    name: "Yala",
    region: "south",
    tagline: "Dry scrub, tanks, and the best-known leopards on the island.",
    excerpt:
      "A national park on the southeast edge. Go for the landscape and the birds, and treat a leopard as a privilege.",
    stay: "1–2 nights",
    bestTime: "February to June is often clearer for wildlife. Animals do not keep a calendar.",
    pace: "Early jeep, long lunch, early sleep. That is the whole design.",
    bestFor: ["Wildlife", "Photographers", "Travelers adding the deep south"],
    image: photos.yala.src,
    gallery: [photos.yala, photos.elephants, photos.mirissa],
    overview: [
      "Yala National Park is a mosaic of scrub, rock, and coastal wetland in the island’s southeast. It is famous for leopards and busy because of that fame. A good safari is still a good day if the leopard stays hidden: elephants, crocodiles, painted storks, and the particular light of the dry zone.",
      "CeyGo books licensed jeeps and trackers, enters when the park opens, and does not ask drivers to race other vehicles toward a sighting. Two nights gives you a second morning. One night is possible if the routing is tight.",
    ],
    highlights: [
      {
        title: "An opening-hour drive",
        text: "The first hours are the point. Breakfast can wait.",
      },
      {
        title: "More than one species",
        text: "Ask the tracker what the block has been holding: elephant, sloth bear if you are fortunate, and a serious bird list.",
      },
      {
        title: "A quiet lodge afternoon",
        text: "The park closes over the middle of the day. Use it. Do not fill it with another excursion.",
      },
    ],
    gettingThere:
      "From Ella, a half-day drive. From Mirissa or Galle, longer. The closest airport is not a reason to fly unless the rest of the route demands it. Road, with stops, is the normal way.",
    know: [
      "Stay inside the vehicle. Do not ask for off-track driving.",
      "Neutral clothing, binoculars if you have them, and a layer for the pre-dawn start.",
      "Park blocks and permits are arranged ahead. Entry rules are followed exactly.",
    ],
    seo: {
      title: "Yala National Park Safari, Planned Properly",
      description:
        "A respectful Yala safari for visitors to Sri Lanka: timing, leopards without promises, and how it fits a private south-coast journey.",
    },
  },
  {
    slug: "trincomalee",
    name: "Trincomalee",
    region: "east",
    tagline: "A deepwater bay and a beach season of its own.",
    excerpt:
      "When the southwest monsoon roughs up the south, the east is often calm. Forts, swimming, and a different pace.",
    stay: "3 nights",
    bestTime: "About May to September for swimming. The town is interesting beyond that, the sea less so.",
    pace: "Slow. This is a coast chapter, not a stopover.",
    bestFor: ["Swimming season", "Repeat visitors", "Travelers avoiding crowds"],
    image: photos.trinco.src,
    gallery: [photos.trinco, photos.arugam, photos.jaffna],
    overview: [
      "Trincomalee holds one of the finest natural harbors in the region, a living Hindu and Buddhist coastline, and beaches such as Uppuveli and Nilaveli that come into their own when the west is wet.",
      "It is farther from the classic south-coast loop than many first itineraries allow. CeyGo would rather give you three real nights here than a symbolic afternoon. Pigeon Island snorkel and, in season, a whale boat are extras the week can absorb — or skip.",
    ],
    highlights: [
      {
        title: "Uppuveli and Nilaveli",
        text: "Long sand and, in the right months, water clear enough to make you cancel a planned ruin.",
      },
      {
        title: "Fort Frederick",
        text: "A headland with a military past and a temple to Koneswaram above the bay. Dress modestly. Photography rules vary.",
      },
      {
        title: "A boat with conditions",
        text: "Pigeon Island is a marine national park. Go only with permits, and only if the sea is fit. Coral is not a standing platform.",
      },
    ],
    gettingThere:
      "A long drive from Kandy or the Cultural Triangle — treat it as the day’s work. Do not pair it with a summit climb. Return to Colombo is also a full travel day.",
    know: [
      "East-coast season is not south-coast season. If your dates are December, Mirissa is usually the better swim.",
      "Cover up away from the beach. Temple towns and swim towns share a road.",
      "Three nights is the minimum that feels fair to the distance.",
    ],
    seo: {
      title: "Trincomalee and Sri Lanka’s East Coast",
      description:
        "When to choose Trincomalee: east-coast beaches, the bay, and how CeyGo builds it into a private Sri Lanka itinerary.",
    },
  },
  {
    slug: "arugam-bay",
    name: "Arugam Bay",
    region: "east",
    tagline: "A surf town at the end of a long, worthwhile road.",
    excerpt:
      "A bay with a point break, lagoon light, and days that are allowed to be unstructured.",
    stay: "3 nights",
    bestTime: "About May to September for surf and swim weather.",
    pace: "Unstructured on purpose. The journey there is the structured part.",
    bestFor: ["Surf", "Slow beach trips", "Travelers who have seen the south"],
    image: photos.arugam.src,
    gallery: [photos.trinco, photos.ella, photos.mirissa],
    overview: [
      "Arugam Bay is a village bent around a right-hand point on the east coast. Surfers know it. Everyone else can still love it for the lagoon, the seafood, and the fact that the day does not come with a monument checklist.",
      "It is remote relative to Colombo. Getting there crosses a lot of island. CeyGo plans that crossing as its own day, with a stop that makes the distance feel like travel rather than transit.",
    ],
    highlights: [
      {
        title: "The point, even if you do not surf",
        text: "Watch the lineup in the morning. Take a lesson only from a local teacher if you want to try. The sea is not a pool.",
      },
      {
        title: "Lagoon hours",
        text: "A boat or a walk depending on the week. Birds and still water, a different temperature from the bay.",
      },
      {
        title: "Nothing, scheduled",
        text: "One completely open day is part of the itinerary, written down so nobody fills it.",
      },
    ],
    gettingThere:
      "From Ella or the hill country the drive is long but logical. From Colombo it is a full day. Flying into the region is sometimes possible and not always worth the connection. The desk will say which.",
    know: [
      "Cash matters more here than in Colombo. Cards are not a personality.",
      "Respect local surf order if you paddle out. Lessons first if you are new.",
      "Road conditions on the approach can change after heavy rain. Buffers exist for that.",
    ],
    seo: {
      title: "Arugam Bay on an East Coast Sri Lanka Trip",
      description:
        "Stay at Arugam Bay for surf, lagoon light, and slow days, routed honestly for travelers who have the time to cross the island.",
    },
  },
  {
    slug: "jaffna",
    name: "Jaffna",
    region: "north",
    tagline: "Tamil Sri Lanka, a peninsula, and food that resets the palate.",
    excerpt:
      "Nallur temple, island causeways, palmyrah, and crab. A different chapter from the southern beaches.",
    stay: "2 nights",
    bestTime: "January to March is kinder. The north has its own monsoon rhythm later in the year.",
    pace: "Curious and unhurried. This is not a beach add-on.",
    bestFor: ["Repeat visitors", "Food", "Culture beyond the classic loop"],
    image: photos.jaffna.src,
    gallery: [photos.jaffna, photos.anuradhapura, photos.trinco],
    overview: [
      "Jaffna is the cultural heart of the Tamil north: a dense temple town, a peninsula of islands, and a cuisine built on crab, palmyrah, and spices that taste different from a Kandyan curry. It is also a place with a recent history of war. A good host does not turn that into spectacle, and does not pretend it is not there.",
      "Two nights lets you visit Nallur Kandaswamy with time to dress and behave correctly, eat a serious meal, and cross a causeway to an island if the day is kind.",
    ],
    highlights: [
      {
        title: "Nallur Kandaswamy",
        text: "A major Hindu temple. Men may be asked to go bare-chested in the inner areas, as local devotees do. Confirm current custom before you enter. Follow it.",
      },
      {
        title: "Islands and causeways",
        text: "A drive toward Kayts or Karainagar shows the peninsula’s flat light, fishing communities, and forts.",
      },
      {
        title: "Jaffna crab",
        text: "Order it where the desk eats, not where a sign shouts. Spice level is a conversation, not a dare.",
      },
    ],
    gettingThere:
      "A long road from Anuradhapura, which is the natural pairing, or a domestic flight when the schedule truly helps. The road is the better introduction if you have the day.",
    know: [
      "Ask before photographing people, temples, or military areas. Some places simply say no.",
      "Alcohol and meat customs vary by household and temple street. Read the room.",
      "This region suits travelers who have already done, or do not need, a beach-heavy first trip.",
    ],
    seo: {
      title: "Jaffna and Northern Sri Lanka for Travelers",
      description:
        "Plan Jaffna with context: Nallur temple, peninsula islands, and northern food on a private journey beyond Sri Lanka’s classic south.",
    },
  },
];

export function getDestination(slug: string) {
  return destinations.find((item) => item.slug === slug);
}

export function regionName(id: Destination["region"]) {
  const names: Record<Destination["region"], string> = {
    west: "Colombo & the West",
    triangle: "Cultural Triangle",
    hills: "Hill Country",
    south: "South Coast",
    east: "East Coast",
    north: "The North",
  };
  return names[id];
}
