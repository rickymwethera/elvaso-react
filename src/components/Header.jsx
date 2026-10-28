import { useState } from "react";
import { ArrowRight, Menu, X, Search, ShoppingBag } from "lucide-react";
import { products, money, shopEnabled } from "../data";
import { useApp } from "../AppContext";

// Main menu links: [label, path].
const nav = [
  ["Home", "/"],
  ["Our collection", "/products"],
  ["Our story", "/our-story"],
  ["Custom orders", "/custom-orders"],
];

// Announcement bar and site header: logo, navigation (collapsible on mobile)
// and, when shopEnabled, the search box and cart button.
export default function Header({
  menu,
  setMenu,
  searchOpen,
  setSearchOpen,
  cartCount,
  openCart,
}) {
  const { path, go, shop } = useApp();
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="announcement">
        Handmade in Kenya <span>✦</span> Reimagined from discarded glass
      </div>
      <header className="header">
        <div className="container header-inner">
          <button
            className="mobile-menu"
            aria-label="Open menu"
            onClick={() => setMenu((x) => !x)}
          >
            {menu ? <X /> : <Menu />}
          </button>
          <button className="wordmark" onClick={() => go("/")}>
            EL VASO
          </button>
          <nav className={menu ? "open" : ""}>
            {nav.map(([label, to]) => (
              <button
                key={to}
                className={path === to ? "nav-active" : ""}
                onClick={() => go(to)}
              >
                {label}
              </button>
            ))}
          </nav>
          {!shopEnabled && (
            <span className="header-spacer" aria-hidden="true" />
          )}
          {shopEnabled && (
            <div className="header-tools">
              <button
                aria-label="Search products"
                onClick={() => setSearchOpen((x) => !x)}
              >
                <Search size={21} />
              </button>
              <button
                className="bag-button"
                aria-label="Open cart"
                onClick={openCart}
              >
                <ShoppingBag size={21} />
                {cartCount > 0 && <span>{cartCount}</span>}
              </button>
            </div>
          )}
        </div>
        {shopEnabled && searchOpen && (
          <div className="search-popover">
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search handmade glassware..."
            />
            <button
              onClick={() => {
                const found = products.find((p) =>
                  p.name.toLowerCase().includes(search.toLowerCase()),
                );
                if (found) go("/products/" + found.id);
                else shop();
              }}
            >
              Search <ArrowRight size={16} />
            </button>
            {search && (
              <div>
                {products
                  .filter((p) =>
                    p.name.toLowerCase().includes(search.toLowerCase()),
                  )
                  .slice(0, 4)
                  .map((p) => (
                    <button key={p.id} onClick={() => go("/products/" + p.id)}>
                      {p.name} · {money(p.price)}
                    </button>
                  ))}
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
}
