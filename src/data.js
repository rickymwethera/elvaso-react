// Product categories shown on the home page, collection tabs and footer.
// `id` must match the `category` field of the products below.
export const categories = [
  {
    id: "Glassware",
    name: "Glassware",
    sub: "Tumblers & everyday glasses",
    image: import.meta.env.BASE_URL + "images/cat-glassware.webp",
  },
  {
    id: "Flower Vases",
    name: "Flower Vases",
    sub: "Statement pieces for every space",
    image: import.meta.env.BASE_URL + "images/cat-vases.webp",
  },
  {
    id: "Jars & Canisters",
    name: "Jars & Canisters",
    sub: "Storage with bamboo lids",
    image: import.meta.env.BASE_URL + "images/cat-jars.webp",
  },
  {
    id: "Planters & Decor",
    name: "Planters & Decor",
    sub: "Planters, holders & accents",
    image: import.meta.env.BASE_URL + "images/cat-planters.webp",
  },
];
// Catalogue: product photos are El Vaso's own. Names, prices and sizes are
// still placeholders to confirm with El Vaso.
export const products = [
  {
    id: "green-bottle-tumbler",
    name: "Green Bottle Tumbler",
    category: "Glassware",
    price: 1200,
    color: "Bottle Green",
    colorHex: "#2f7d32",
    image: import.meta.env.BASE_URL + "images/green-tumblers.webp",
    description:
      "Cut from green wine bottles and smoothed by hand. A bright, sturdy everyday glass.",
    size: "Approx. 350 ml",
  },
  {
    id: "engraved-elephant-glass",
    name: "Engraved Elephant Glass",
    category: "Glassware",
    price: 1800,
    color: "Bottle Green",
    colorHex: "#3d6b2a",
    image: import.meta.env.BASE_URL + "images/elephant-glass.webp",
    description:
      "A tall bottle glass hand-engraved with an elephant scene. A favourite gift.",
    size: "Approx. 500 ml",
  },
  {
    id: "everyday-clear-tumbler",
    name: "Everyday Clear Tumbler",
    category: "Glassware",
    price: 1000,
    color: "Clear",
    colorHex: "#d9dfdc",
    image: import.meta.env.BASE_URL + "images/everyday-glass.webp",
    description:
      "A simple clear tumbler for juice, water or cocktails, made from a reclaimed bottle.",
    size: "Approx. 400 ml",
  },
  {
    id: "green-bottle-vase",
    name: "Green Bottle Vase",
    category: "Flower Vases",
    price: 2200,
    color: "Bottle Green",
    colorHex: "#2f7d32",
    image: import.meta.env.BASE_URL + "images/green-vase.webp",
    description:
      "A slim vase cut from a green bottle, made for single stems and loose bouquets.",
    size: "Approx. 25 cm",
  },
  {
    id: "black-diamond-vase",
    name: "Black Diamond Vase",
    category: "Flower Vases",
    price: 2500,
    color: "Black",
    colorHex: "#1e1e1e",
    image: import.meta.env.BASE_URL + "images/black-vase.webp",
    description:
      "A dark, faceted vase that makes white and pale flowers stand out.",
    size: "Approx. 24 cm",
  },
  {
    id: "lace-etched-vase",
    name: "Lace-Etched Vase",
    category: "Flower Vases",
    price: 2500,
    color: "Clear",
    colorHex: "#d9dfdc",
    image: import.meta.env.BASE_URL + "images/lace-vase.webp",
    description:
      "A tall clear vase with a delicate white lace pattern.",
    size: "Approx. 30 cm",
  },
  {
    id: "bamboo-lid-canister",
    name: "Bamboo-Lid Canister",
    category: "Jars & Canisters",
    price: 1500,
    color: "Green, black or clear",
    colorHex: "#2f4f3a",
    image: import.meta.env.BASE_URL + "images/canisters.webp",
    description:
      "Bottle glass with a fitted bamboo lid, for coffee, sugar, spices or bathroom bits.",
    size: "Approx. 15 cm",
  },
  {
    id: "bottle-trough-planter",
    name: "Bottle Trough Planter",
    category: "Planters & Decor",
    price: 2000,
    color: "Bottle Green",
    colorHex: "#2f7d32",
    image: import.meta.env.BASE_URL + "images/trough-planter.webp",
    description:
      "A whole bottle laid on its side and opened up into a planter for succulents.",
    size: "Approx. 30 cm",
  },
];
// Formats a number as Kenyan shillings, e.g. 1500 -> "KES 1,500".
export const money = (n) => `KES ${Number(n).toLocaleString("en-KE")}`;
// El Vaso's WhatsApp number in international format, without the "+".
export const whatsappNumber = "254726881124";
// The site currently focuses on brand awareness. Set to true to bring back
// prices, cart, search, sorting/price filters and add-to-cart buttons.
export const shopEnabled = false;
export const instagramUrl = "https://www.instagram.com/elvaso_glassware/";
export const pressUrl =
  "https://www.standardmedia.co.ke/environment-climate/article/2001556584/the-second-life-of-waste-turning-used-bottle-into-art-new-products";
export const tiktokUrl = "https://www.tiktok.com/@el.vaso.glassware";
