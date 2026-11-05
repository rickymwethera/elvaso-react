// Product categories shown on the home page, collection tabs and footer.
// `id` must match the `category` field of the products below.
export const categories = [
  {
    id: "Glasses",
    name: "Glasses",
    sub: "Drinking glasses & tumblers",
    image: import.meta.env.BASE_URL + "images/cat-glasses.webp",
  },
  {
    id: "Home Essentials",
    name: "Home Essentials",
    sub: "Jars, holders, succulents & gifts",
    image: import.meta.env.BASE_URL + "images/cat-home.webp",
  },
  {
    id: "Vases",
    name: "Vases",
    sub: "Decorative & upcycled vases",
    image: import.meta.env.BASE_URL + "images/cat-vases.webp",
  },
  {
    id: "Services",
    name: "Services",
    sub: "Installations, workshops, cutting & etching",
    image: import.meta.env.BASE_URL + "images/cat-services.webp",
  },
];
// Items and prices from the El Vaso WhatsApp catalogue. `priceFrom` marks
// prices that are a starting point. `unit` says what the price covers.
export const products = [
  {
    id: "glass-set",
    name: "Glass Set (6 pieces)",
    category: "Glasses",
    price: 1050,
    unit: "Set of 6",
    image: import.meta.env.BASE_URL + "images/glass-set.webp",
    description:
      "Any six glasses, in one design or a mix of designs.",
  },
  {
    id: "short-whiskey-glasses",
    name: "Short / Whiskey Glasses",
    category: "Glasses",
    price: 200,
    unit: "Per glass",
    image: import.meta.env.BASE_URL + "images/whiskey-glasses.webp",
    description:
      "Short drinking glasses, perfect for whiskey.",
  },
  {
    id: "juice-glasses",
    name: "Juice Glasses",
    category: "Glasses",
    price: 200,
    unit: "Per glass",
    image: import.meta.env.BASE_URL + "images/juice-glasses.webp",
    description:
      "Simple upcycled glasses for everyday use at home or in a restaurant.",
  },
  {
    id: "thick-glasses",
    name: "Thick Glasses",
    category: "Glasses",
    price: 400,
    unit: "Per glass",
    image: import.meta.env.BASE_URL + "images/thick-glasses.webp",
    description:
      "Thick, quality glasses for whiskey fans.",
  },
  {
    id: "floral-glasses",
    name: "Floral Glasses",
    category: "Glasses",
    price: 200,
    unit: "Per glass",
    image: import.meta.env.BASE_URL + "images/floral-glasses.webp",
    description:
      "Upcycled from printed wine bottles, so the bottle's floral print becomes part of the glass.",
  },
  {
    id: "cocktail-tumblers",
    name: "Cocktail Tumblers (with wooden lids)",
    category: "Glasses",
    price: 500,
    unit: "Per tumbler",
    image: import.meta.env.BASE_URL + "images/cocktail-tumblers.webp",
    description:
      "Bottle tumblers with a fitted wooden lid and room for a straw.",
  },
  {
    id: "glasses-on-clearance",
    name: "Glasses On Clearance",
    category: "Glasses",
    price: 100,
    unit: "Per glass",
    image: import.meta.env.BASE_URL + "images/clearance-glasses.webp",
    description:
      "Glasses on sale while stocks last. Ask us what is available.",
  },
  {
    id: "decorative-vases",
    name: "Decorative Vases",
    category: "Vases",
    price: 999,
    unit: "Per vase",
    image: import.meta.env.BASE_URL + "images/decorative-vases.webp",
    description:
      "Upcycled vases finished with an art detail.",
  },
  {
    id: "upcycled-vases",
    name: "Upcycled Vases",
    category: "Vases",
    price: 700,
    unit: "Per vase",
    image: import.meta.env.BASE_URL + "images/upcycled-vases.webp",
    description:
      "Clear upcycled vases for flower lovers.",
  },
  {
    id: "storage-jars",
    name: "Storage Jars",
    category: "Home Essentials",
    price: 975,
    unit: "Per jar",
    image: import.meta.env.BASE_URL + "images/storage-jars.webp",
    description:
      "Upcycled glass jars with a wooden lid, for the kitchen, bathroom or office.",
  },
  {
    id: "succulent-sets",
    name: "Succulent Sets",
    category: "Home Essentials",
    price: 900,
    unit: "Per set",
    image: import.meta.env.BASE_URL + "images/succulent-sets.webp",
    description:
      "Your succulents deserve a cute home.",
  },
  {
    id: "serviette-holders",
    name: "Serviette Holders",
    category: "Home Essentials",
    price: 250,
    unit: "Per holder",
    image: import.meta.env.BASE_URL + "images/serviette-holders.webp",
    description:
      "Bottle-glass holders for serviettes, at home or on a restaurant table.",
  },
  {
    id: "wooden-accessories",
    name: "Wooden Accessories",
    category: "Home Essentials",
    price: 300,
    unit: "Per piece",
    image: import.meta.env.BASE_URL + "images/wooden-accessories.webp",
    description:
      "Wooden lids, coasters and bases designed to fit El Vaso pieces.",
  },
  {
    id: "curated-gift-sets",
    name: "Curated Gift Sets",
    category: "Home Essentials",
    price: 1999,
    priceFrom: true,
    unit: "Per set",
    image: import.meta.env.BASE_URL + "images/gift-sets.webp",
    description:
      "Curated sets of El Vaso pieces, ready to give. Sets range from KES 2,400 to 3,500 depending on what goes in.",
  },
  {
    id: "large-installations",
    name: "Large Installations",
    category: "Services",
    price: 15000,
    priceFrom: true,
    unit: "Per project",
    image: import.meta.env.BASE_URL + "images/large-installations.webp",
    description:
      "Bottle chandeliers, walls and statement pieces for homes and businesses. The price depends on the project.",
  },
  {
    id: "private-workshop-experience",
    name: "Private Workshop Experience",
    category: "Services",
    price: 2500,
    unit: "Per adult",
    image: import.meta.env.BASE_URL + "images/private-workshop.webp",
    description:
      "A private session in our workshop, making your own piece from a bottle. KES 2,500 per adult and KES 1,800 for kids under 15.",
  },
  {
    id: "bottle-cutting-services",
    name: "Bottle Cutting Services",
    category: "Services",
    price: 150,
    unit: "Per bottle",
    image: import.meta.env.BASE_URL + "images/bottle-cutting.webp",
    description:
      "Bring your own bottles. We cut, smoothen, resurface and clean each one.",
  },
  {
    id: "glass-hand-etching",
    name: "Glass Hand Etching",
    category: "Services",
    price: 550,
    priceFrom: true,
    unit: "Per glass",
    image: import.meta.env.BASE_URL + "images/glass-etching.webp",
    description:
      "Hand-etched designs on glasses. The price depends on the design and quantity.",
  },
  {
    id: "hand-etching-services",
    name: "Hand Etching Services",
    category: "Services",
    price: 1000,
    priceFrom: true,
    unit: "Per piece",
    image: import.meta.env.BASE_URL + "images/hand-etching.webp",
    description:
      "Detailed hand etching on bottles and larger pieces, from KES 1,000 depending on the design.",
  },
  {
    id: "machine-engraving",
    name: "Machine Engraving",
    category: "Services",
    price: 300,
    priceFrom: true,
    unit: "Per piece",
    image: import.meta.env.BASE_URL + "images/machine-engraving.webp",
    description:
      "Names, dates and logos engraved by machine. The price varies by size.",
  },
];
// Formats a number as Kenyan shillings, e.g. 1500 -> "KES 1,500".
export const money = (n) => `KES ${Number(n).toLocaleString("en-KE")}`;
// A product's price as shown to visitors, e.g. "From KES 550".
export const priceLabel = (p) => (p.priceFrom ? "From " : "") + money(p.price);
// El Vaso's WhatsApp number in international format, without the "+".
export const whatsappNumber = "254726881124";
// Set to true to bring back the cart, search, sorting/price filters and
// add-to-cart buttons. Prices show either way.
export const shopEnabled = false;
export const instagramUrl = "https://www.instagram.com/elvaso_glassware/";
export const pressUrl =
  "https://www.standardmedia.co.ke/environment-climate/article/2001556584/the-second-life-of-waste-turning-used-bottle-into-art-new-products";
export const tiktokUrl = "https://www.tiktok.com/@el.vaso.glassware";
