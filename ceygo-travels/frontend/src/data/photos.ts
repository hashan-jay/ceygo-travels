import type { Photo } from "@/data/types";

function photo(src: string, alt: string, file: string): Photo {
  return {
    src,
    alt,
    credit: "Wikimedia Commons",
    source: `https://commons.wikimedia.org/wiki/File:${file}`,
  };
}

export const photos = {
  sigiriya: photo(
    "/media/sigiriya.jpg",
    "Sigiriya rock fortress rising above the trees",
    "Sigiriya_Rock_Fortress_2.jpg",
  ),
  sigiriyaView: photo(
    "/media/sigiriya-view.jpg",
    "Sigiriya seen from Pidurangala rock",
    "Sigiriya_Rock_Fortress_View_from_Pidurangala_Rock.jpg",
  ),
  dambulla: photo(
    "/media/dambulla.jpg",
    "Golden dagoba at Dambulla cave temple",
    "Golden_dagoba_at_Dambulla_(Sri_Lanka)_2015.jpg",
  ),
  anuradhapura: photo(
    "/media/anuradhapura.jpg",
    "Ruwanwelisaya stupa in Anuradhapura",
    "Ruwanwelisaya_Anuradhapura_Sri_Lanka_1.jpg",
  ),
  polonnaruwa: photo(
    "/media/polonnaruwa.jpg",
    "Reclining Buddha carved in stone at Gal Vihara, Polonnaruwa",
    "Gal_Vihara_Polonnaruwa_1.jpg",
  ),
  kandy: photo(
    "/media/kandy.jpg",
    "Temple of the Sacred Tooth Relic beside Kandy Lake",
    "SL_Kandy_asv2020-01_img34_Sacred_Tooth_Temple.jpg",
  ),
  kandyTemple: photo(
    "/media/kandy-temple.jpg",
    "The Temple of the Tooth in Kandy",
    "Sacred_Tooth_Relic_Temple_2.jpg",
  ),
  tea: photo(
    "/media/tea.jpg",
    "Tea estate near Nuwara Eliya",
    "Sri_Lanka,_Tea_plantations_near_Nuwara_Eliya,_Tea_estate.jpg",
  ),
  teaPick: photo(
    "/media/tea.jpg",
    "Tea estate near Nuwara Eliya",
    "Sri_Lanka,_Tea_plantations_near_Nuwara_Eliya,_Tea_estate.jpg",
  ),
  ella: photo(
    "/media/ella.jpg",
    "Nine Arches Bridge in Ella, surrounded by forest",
    "Nine_Arches_Bridge_in_Ella.jpg",
  ),
  ellaArches: photo(
    "/media/ella-arches.jpg",
    "The nine arches of the Ella railway bridge",
    "Nine_arch_bridge,_Ella,_Sri_lanka.jpg",
  ),
  colombo: photo(
    "/media/colombo.jpg",
    "Colombo skyline along the water",
    "Colombo_Skyline_Jan_2022.jpg",
  ),
  colomboNight: photo(
    "/media/colombo.jpg",
    "Colombo skyline along the water",
    "Colombo_Skyline_Jan_2022.jpg",
  ),
  pettah: photo(
    "/media/pettah.jpg",
    "Pettah Floating Market in Colombo",
    "Pettah_Floating_Market_2.jpg",
  ),
  negombo: photo(
    "/media/negombo.jpg",
    "Fishing boats on Negombo lagoon",
    "Negombo,_Lagoon,_2025-08_CN-05.jpg",
  ),
  galle: photo(
    "/media/galle.jpg",
    "Ramparts and streets inside Galle Fort",
    "SL_Galle_Fort_asv2020-01_img24.jpg",
  ),
  galleLight: photo(
    "/media/galle-light.jpg",
    "Galle lighthouse on the fort ramparts",
    "Galle_Lighthouse_1.jpg",
  ),
  stilts: photo(
    "/media/stilts.jpg",
    "Stilt fishermen on the southern coast near Galle",
    "Fishermen_practicing_traditional_stilt_fishing_near_Galle,_southern_Sri_Lanka,_20260207_1420_9464.jpg",
  ),
  mirissa: photo(
    "/media/mirissa.jpg",
    "The sea at Mirissa on Sri Lanka's south coast",
    "Mirissa_sea_1.jpg",
  ),
  mirissaCove: photo(
    "/media/mirissa-cove.jpg",
    "A quiet stretch of Mirissa coastline",
    "Mirissa_sea_2.jpg",
  ),
  yala: photo(
    "/media/yala.jpg",
    "A Sri Lankan leopard in Yala National Park",
    "Sri_Lankan_Leopard_At_Yala_National_Park.jpg",
  ),
  elephants: photo(
    "/media/elephants.jpg",
    "A herd of elephants beside a reservoir in Minneriya National Park",
    "Minneriya_National_Park,_herd_of_elephants_with_lake.jpg",
  ),
  trinco: photo(
    "/media/trinco.jpg",
    "Uppveli beach in Trincomalee",
    "Uppveli_Beach_in_Trincomalee,_Sri_Lanka.jpg",
  ),
  arugam: photo(
    "/media/trinco.jpg",
    "Uppveli beach in Trincomalee, on the east coast in swimming season",
    "Uppveli_Beach_in_Trincomalee,_Sri_Lanka.jpg",
  ),
  jaffna: photo(
    "/media/jaffna.jpg",
    "Entrance tower of Nallur Kandaswamy temple in Jaffna",
    "Nallur_Kandasamy_front_entrance.jpg",
  ),
} as const;

export const allPhotos: Photo[] = Object.values(photos);
