export const categories = [
  {
    id: "Glassware",
    name: "Glassware",
    sub: "Tumblers, glasses & carafes",
    image: import.meta.env.BASE_URL + "images/glassware.webp",
  },
  {
    id: "Flower Vases",
    name: "Flower Vases",
    sub: "Statement pieces for every space",
    image: import.meta.env.BASE_URL + "images/vases.webp",
  },
  {
    id: "Bowls",
    name: "Bowls",
    sub: "Beautifully functional serving bowls",
    image: import.meta.env.BASE_URL + "images/bowls.webp",
  },
  {
    id: "Jewellery Racks",
    name: "Jewellery Racks",
    sub: "Artful displays and organisers",
    image: import.meta.env.BASE_URL + "images/jewellery.webp",
  },
];
// Demo catalogue data: replace names, stock, prices and photos with confirmed inventory.
export const products = [
  {
    id: "olive-green-tumbler",
    name: "Olive Green Tumbler",
    category: "Glassware",
    price: 1200,
    color: "Olive Green",
    colorHex: "#51672e",
    image: import.meta.env.BASE_URL + "images/green-tumbler.webp",
    description:
      "A timeless tumbler handmade from upcycled glass. The gently faceted surface catches the light beautifully.",
    size: "Approx. 300 ml",
  },
  {
    id: "amber-tumbler",
    name: "Amber Tumbler",
    category: "Glassware",
    price: 1200,
    color: "Amber",
    colorHex: "#ae581b",
    image: import.meta.env.BASE_URL + "images/amber-tumbler.webp",
    description:
      "Warm amber tones and an easy everyday shape make this handmade glass a table favourite.",
    size: "Approx. 300 ml",
  },
  {
    id: "tall-vase",
    name: "Tall Olive Vase",
    category: "Flower Vases",
    price: 2500,
    color: "Olive Green",
    colorHex: "#174b35",
    image: import.meta.env.BASE_URL + "images/tall-vase.webp",
    description:
      "An elegant tall vase crafted for branches, flowers, and considered interiors.",
    size: "Approx. 28 cm",
  },
  {
    id: "bud-vase",
    name: "Mini Bud Vase",
    category: "Flower Vases",
    price: 1800,
    color: "Natural Green",
    colorHex: "#c2a68d",
    image: import.meta.env.BASE_URL + "images/bud-vase.webp",
    description: "A small, sculptural vase for a single bloom or greenery.",
    size: "Approx. 15 cm",
  },
  {
    id: "serving-bowl",
    name: "Olive Serving Bowl",
    category: "Bowls",
    price: 2500,
    color: "Olive Green",
    colorHex: "#51672e",
    image: import.meta.env.BASE_URL + "images/serving-bowl.webp",
    description: "An expressive bowl for serving, displaying or gifting.",
    size: "Approx. 22 cm",
  },
  {
    id: "amber-bowl",
    name: "Amber Catch-All Bowl",
    category: "Bowls",
    price: 1800,
    color: "Amber",
    colorHex: "#ae581b",
    image: import.meta.env.BASE_URL + "images/amber-bowl.webp",
    description: "A warm, contemporary catch-all for your table or bedside.",
    size: "Approx. 18 cm",
  },
  {
    id: "jewellery-stand",
    name: "Jewellery Stand",
    category: "Jewellery Racks",
    price: 2500,
    color: "Olive Green",
    colorHex: "#51672e",
    image: import.meta.env.BASE_URL + "images/jewellery-stand.webp",
    description:
      "Give your favourite jewellery a beautifully organised place to live.",
    size: "Approx. 25 cm",
  },
  {
    id: "earring-rack",
    name: "Earring Rack",
    category: "Jewellery Racks",
    price: 1800,
    color: "Amber",
    colorHex: "#ae581b",
    image: import.meta.env.BASE_URL + "images/earring-rack.webp",
    description:
      "An easy-to-display handcrafted piece for everyday accessories.",
    size: "Approx. 18 cm",
  },
];
export const money = (n) => `KES ${Number(n).toLocaleString("en-KE")}`;
export const whatsappNumber = "254726881124";
// The site currently focuses on brand awareness. Set to true to bring back
// prices, cart, search, sorting/price filters and add-to-cart buttons.
export const shopEnabled = false;
export const instagramUrl = "https://www.instagram.com/elvaso_glassware/";
export const pressUrl =
  "https://www.standardmedia.co.ke/environment-climate/article/2001556584/the-second-life-of-waste-turning-used-bottle-into-art-new-products";
