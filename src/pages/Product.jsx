import { useEffect, useState } from "react";
import {
  ArrowRight,
  ShoppingBag,
  Leaf,
  Recycle,
  HeartHandshake,
  ChevronDown,
  ChevronRight,
  Minus,
  Plus,
  MessageCircle,
} from "lucide-react";
import { products, money, priceLabel, shopEnabled } from "../data";
import { A, whatsapp } from "../utils";
import { useApp } from "../AppContext";
import ProductCard from "../components/ProductCard";

// A single product's page ("/products/<id>"): photo gallery, details,
// price, enquiry button and related products.
export default function Product({ p }) {
  const { go, shop, add } = useApp();
  const [qty, setQty] = useState(1);
  const [image, setImage] = useState(p.image);
  // Reset the quantity and photo when moving to a different product.
  useEffect(() => {
    setQty(1);
    setImage(p.image);
  }, [p.id]);
  const related = [
    ...products.filter((x) => x.category === p.category && x.id !== p.id),
    ...products.filter((x) => x.category !== p.category),
  ].slice(0, 4);
  return (
    <main className="container product-page">
      <div className="breadcrumbs">
        <button onClick={() => go("/")}>Home</button>
        <ChevronRight size={12} />
        <button onClick={() => shop()}>Products</button>
        <ChevronRight size={12} />
        <button onClick={() => shop(p.category)}>{p.category}</button>
        <ChevronRight size={12} />
        <span>{p.name}</span>
      </div>
      <div className="product-main">
        <div className="gallery">
          <div className="large-photo">
            <img src={image} alt={p.name} />
          </div>
          {p.category !== "Services" && (
            <div className="material-story">
              <img src={A + "workshop.webp"} alt="The El Vaso workshop" />
              <div>
                <div className="eyebrow gold">HOW IT'S MADE</div>
                <h3>Made from a reclaimed bottle</h3>
                <p>
                  Crafted with care, designed to be enjoyed and made to help
                  reduce waste.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="details">
          <div className="eyebrow">HANDCRAFTED IN KENYA</div>
          <h1>{p.name}</h1>
          <div className="detail-price">
            {priceLabel(p)} <small>{p.unit.toLowerCase()}</small>
          </div>
          <p className="detail-description">
            {p.description}
            {p.category !== "Services" && " Every piece has its own subtle character."}
          </p>
          <div className="detail-values">
            <span>
              <Leaf />
              Upcycled glass
            </span>
            <span>
              <HeartHandshake />
              Made locally
            </span>
            <span>
              <Recycle />
              Less waste
            </span>
          </div>
          {shopEnabled && (
            <>
              <div className="purchase-row">
                <label>
                  Quantity
                  <div className="stepper">
                    <button
                      aria-label="Decrease quantity"
                      onClick={() => setQty(Math.max(1, qty - 1))}
                    >
                      <Minus size={16} />
                    </button>
                    <span>{qty}</span>
                    <button
                      aria-label="Increase quantity"
                      onClick={() => setQty(Math.min(99, qty + 1))}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </label>
                <span className="available">
                  <span />
                  Made to order / enquire for stock
                </span>
              </div>
              <button
                className="btn btn-primary full"
                onClick={() => add(p, qty)}
              >
                <ShoppingBag size={17} /> Add to cart
              </button>
            </>
          )}
          <button
            className="btn btn-whatsapp full"
            onClick={() =>
              whatsapp(
                shopEnabled
                  ? `Hello El Vaso! I'd like to enquire about ${qty} × ${p.name} (${money(p.price)} each).`
                  : `Hello El Vaso! I'd love to know more about the ${p.name} (${priceLabel(p)}).`,
              )
            }
          >
            <MessageCircle size={17} /> Enquire via WhatsApp
          </button>
          <div className="info-accordion">
            {[
              ["Product details", p.description],
              ...(p.category === "Services"
                ? []
                : [
                    [
                      "Care",
                      "Handwash gently. As each piece is handmade, minor variations may occur.",
                    ],
                  ]),
              [
                "Sustainability",
                "Our glassware is thoughtfully repurposed from discarded glass bottles by local artisans in Kenya.",
              ],
              ...(shopEnabled
                ? [
                    [
                      "Delivery & orders",
                      "Please confirm delivery charges, availability and timelines with the El Vaso team before placing an order.",
                    ],
                  ]
                : []),
            ].map(([title, description], i) => (
              <details key={title} open={i === 0}>
                <summary>
                  {title}
                  <ChevronDown size={18} />
                </summary>
                <p>{description}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
      <section className="section recommendations">
        <div className="section-heading">
          <h2>You may also like</h2>
          <button onClick={() => shop()} className="text-link">
            View all products <ArrowRight size={15} />
          </button>
        </div>
        <div className="products-grid home-products">
          {related.map((x) => (
            <ProductCard p={x} key={x.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
