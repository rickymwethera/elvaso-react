import { Heart, Plus } from "lucide-react";
import { money, shopEnabled } from "../data";
import { useApp } from "../AppContext";

// A product tile used in product grids. Price, favourite and add-to-cart
// controls only show when shopEnabled is true.
export default function ProductCard({ p }) {
  const { go, add, favorites, toggleFavorite } = useApp();
  return (
    <article className="product-card">
      <button
        className="product-picture"
        onClick={() => go("/products/" + p.id)}
        aria-label={"View " + p.name}
      >
        <img src={p.image} alt={p.name} loading="lazy" />
      </button>
      {shopEnabled && (
        <button
          className={"favorite " + (favorites.includes(p.id) ? "liked" : "")}
          onClick={() => toggleFavorite(p.id)}
          aria-label="Toggle favourite"
        >
          <Heart
            size={19}
            fill={favorites.includes(p.id) ? "currentColor" : "none"}
          />
        </button>
      )}
      <div className="product-info">
        <div className="product-title-line">
          <button
            className="product-name"
            onClick={() => go("/products/" + p.id)}
          >
            {p.name}
          </button>
          <span className="swatch" style={{ background: p.colorHex }} />
        </div>
        <p>
          {p.size} · {p.color}
        </p>
        {shopEnabled && (
          <div className="price-row">
            <strong>{money(p.price)}</strong>
            <button
              onClick={() => add(p)}
              title="Add to cart"
              aria-label={"Add " + p.name + " to cart"}
            >
              <Plus size={18} />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
