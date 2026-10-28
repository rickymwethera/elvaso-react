import {
  ArrowRight,
  Leaf,
  Recycle,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";
import { categories, products, shopEnabled } from "../data";
import { A } from "../utils";
import { useApp } from "../AppContext";
import LinkButton from "../components/LinkButton";
import ProductCard from "../components/ProductCard";
import Values from "../components/Values";
import BottleSlider from "../components/BottleSlider";
import Journey from "../components/Journey";
import Press from "../components/Press";
import BottleDrop from "../components/BottleDrop";
import InstaStrip from "../components/InstaStrip";

// The home page ("/"), made up of the sections above plus a few of its own.
export default function Home() {
  const { shop } = useApp();
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">HANDMADE · UPCYCLED · KENYAN CRAFT</div>
          <h1>
            From
            <br />
            Undesirable
            <br />
            <em>to Desirable.</em>
          </h1>
          <p>
            We turn discarded glass bottles into beautiful, functional pieces.
            Thoughtful design, local craft and a brighter future.
          </p>
          <div className="actions">
            <LinkButton to="/products">
              {shopEnabled ? "Shop the collection" : "See what we make"}
            </LinkButton>
            <LinkButton to="/our-story" outline>
              Our story
            </LinkButton>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={A + "hero.webp"}
            alt="Artfully arranged green and amber upcycled glassware"
          />
        </div>
      </section>
      <Values />
      <BottleSlider />
      <section className="section container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">OUR COLLECTION</div>
            <h2>
              Functional beauty,
              <br />
              <em>a kinder tomorrow.</em>
            </h2>
          </div>
          <button className="text-link" onClick={() => shop()}>
            View all products <ArrowRight size={17} />
          </button>
        </div>
        <div className="category-grid">
          {categories.map((c) => (
            <button
              key={c.id}
              className="category-card"
              onClick={() => shop(c.id)}
            >
              <img src={c.image} alt={c.name} />
              <span>
                <strong>{c.name}</strong>
                <small>{c.sub}</small>
                <ChevronRight size={17} />
              </span>
            </button>
          ))}
        </div>
      </section>
      <Journey />
      <Press />
      <section className="story-band">
        <div className="story-copy">
          <div className="eyebrow gold">OUR STORY</div>
          <h2>
            Where waste
            <br />
            becomes wonder.
          </h2>
          <p>
            At El Vaso, we see potential in what others discard. Our artisans
            transform used bottles into thoughtful pieces that feel at home in
            any space.
          </p>
          <LinkButton to="/our-story" outline>
            Discover our story
          </LinkButton>
        </div>
        <img
          src={A + "artisan.webp"}
          alt="Local artisan carefully working on upcycled glass"
        />
        <div className="story-benefits">
          <div className="eyebrow">THE EL VASO DIFFERENCE</div>
          <h3>Made with intention.</h3>
          <p>
            <Leaf size={20} /> Less waste
          </p>
          <p>
            <HeartHandshake size={20} /> Local craftsmanship
          </p>
          <p>
            <Recycle size={20} /> A more circular future
          </p>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">CURATED FOR YOU</div>
            <h2>Pieces to fall in love with.</h2>
          </div>
          <button className="text-link" onClick={() => shop()}>
            {shopEnabled ? "Shop all" : "View all"} <ArrowRight size={16} />
          </button>
        </div>
        <div className="products-grid home-products">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
      <BottleDrop />
      <section className="custom-cta">
        <div>
          <div className="eyebrow">PERSONAL. THOUGHTFUL. YOURS.</div>
          <h2>
            Make something
            <br />
            uniquely yours.
          </h2>
          <p>
            From custom gifts to hospitality collections, let’s create something
            beautiful together.
          </p>
          <LinkButton to="/custom-orders">Explore custom orders</LinkButton>
        </div>
        <img
          src={A + "custom-hero.webp"}
          alt="Artisan personalising a glass tumbler"
        />
      </section>
      <InstaStrip />
    </>
  );
}
