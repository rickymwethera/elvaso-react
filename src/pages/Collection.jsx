import { useEffect, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { categories, products, money, shopEnabled } from "../data";
import { A, BASE } from "../utils";
import { useApp } from "../AppContext";
import LinkButton from "../components/LinkButton";
import ProductCard from "../components/ProductCard";

// The collection page ("/products"). Shows products filtered by category
// (read from ?category= in the URL) and, when shopEnabled, by price and sort order.
export default function Collection() {
  const { path } = useApp();
  let initial =
    new URLSearchParams(window.location.search).get("category") || "All";
  const [category, setCategory] = useState(initial);
  const [sort, setSort] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);
  const [maxPrice, setMaxPrice] = useState(5000);
  useEffect(
    () =>
      setCategory(
        new URLSearchParams(window.location.search).get("category") || "All",
      ),
    [path],
  );
  // Products that pass the current filters, in the chosen sort order.
  const matched = products
    .filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!shopEnabled || p.price <= maxPrice),
    )
    .sort((a, b) =>
      sort === "low"
        ? a.price - b.price
        : sort === "high"
          ? b.price - a.price
          : 0,
    );
  return (
    <>
      <section className="page-hero">
        <div>
          <div className="eyebrow">HANDMADE WITH PURPOSE</div>
          <h1>
            Our <em>Collection</em>
          </h1>
          <h3>Handcrafted from glass, made to be loved.</h3>
          <p>
            Explore pieces full of character, thoughtfully crafted from
            discarded glass bottles in Kenya.
          </p>
        </div>
        <img src={A + "hero.webp"} alt="Green and amber handmade glassware" />
      </section>
      <main className="container shop-area">
        <div className="category-tabs">
          {["All", ...categories.map((c) => c.name)].map((c) => (
            <button
              key={c}
              className={category === c ? "active" : ""}
              onClick={() => {
                setCategory(c);
                // Update the URL so the selected category survives a refresh,
                // without adding a new entry to the browser history.
                window.history.replaceState(
                  {},
                  "",
                  BASE +
                    (c === "All"
                      ? "/products"
                      : `/products?category=${encodeURIComponent(c)}`),
                );
              }}
            >
              {c === "All" ? "All products" : c}
            </button>
          ))}
        </div>
        <div className="shop-toolbar">
          <span>{matched.length} products</span>
          {shopEnabled && (
            <div>
              <button
                className="filter-mobile"
                onClick={() => setFilterOpen((x) => !x)}
              >
                <SlidersHorizontal size={17} />
                Filters
              </button>
              <label>
                Sort by{" "}
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="low">Price: low to high</option>
                  <option value="high">Price: high to low</option>
                </select>
              </label>
            </div>
          )}
        </div>
        <div className={"shop-content" + (shopEnabled ? "" : " no-filters")}>
          {shopEnabled && (
            <aside className={"filters " + (filterOpen ? "open" : "")}>
              <div className="filter-head">
                <strong>Filters</strong>
                <button
                  onClick={() => {
                    setCategory("All");
                    setMaxPrice(5000);
                  }}
                >
                  Clear all
                </button>
              </div>
              <div className="filter-group">
                <h4>Category</h4>
                {categories.map((c) => (
                  <label key={c.id}>
                    <input
                      type="checkbox"
                      checked={category === c.id}
                      onChange={() =>
                        setCategory(category === c.id ? "All" : c.id)
                      }
                    />
                    {c.name}
                  </label>
                ))}
              </div>
              <div className="filter-group">
                <h4>Maximum price</h4>
                <input
                  type="range"
                  min="1000"
                  max="5000"
                  step="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <div className="range-label">Up to {money(maxPrice)}</div>
              </div>
            </aside>
          )}
          <div className="products-grid">
            {matched.map((p) => (
              <ProductCard p={p} key={p.id} />
            ))}
            {!matched.length && (
              <p className="empty-state">
                No items match your filters. Try a different category
                {shopEnabled ? " or price" : ""}.
              </p>
            )}
          </div>
        </div>
      </main>
      <section className="collection-bottom">
        <div>
          <div className="eyebrow">CUSTOM ORDERS</div>
          <h2>Something uniquely yours?</h2>
          <p>Personalised glassware for your home, event or business.</p>
          <LinkButton to="/custom-orders">Start a custom order</LinkButton>
        </div>
        <img src={A + "custom-hero.webp"} alt="Handmade personalised glass" />
      </section>
    </>
  );
}
