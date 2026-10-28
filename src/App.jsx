import { useEffect, useState } from "react";
import { products, shopEnabled } from "./data";
import { BASE, route } from "./utils";
import { AppContext } from "./AppContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartPanel from "./components/CartPanel";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import CustomOrders from "./pages/CustomOrders";
import Story from "./pages/Story";
import NotFound from "./pages/NotFound";

// Root component. It holds the shared state (current page, cart, favourites,
// menu and search) and handles routing without a router library. Pages and
// components read the shared state and actions through AppContext.
export default function App() {
  const [path, setPath] = useState(route());
  const [routeKey, setRouteKey] = useState(0);
  const [menu, setMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  // Keep the page in sync when the user presses the browser back/forward buttons.
  useEffect(() => {
    const f = () => {
      setPath(route());
      setRouteKey((k) => k + 1);
      setMenu(false);
    };
    window.addEventListener("popstate", f);
    return () => window.removeEventListener("popstate", f);
  }, []);
  // Navigates to another page: updates the URL, re-renders and scrolls to the top.
  // `to` is a path without the BASE prefix, e.g. "/our-story".
  const go = (to) => {
    const next = new URL(to, window.location.origin);
    if (route() + window.location.search !== next.pathname + next.search) {
      window.history.pushState({}, "", BASE + to);
      setPath(next.pathname);
      setRouteKey((k) => k + 1);
    }
    setMenu(false);
    setSearchOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Adds a product to the cart (or increases its quantity) and opens the cart panel.
  const add = (p, qty = 1) => {
    setCart((old) => {
      const match = old.find((i) => i.id === p.id);
      return match
        ? old.map((i) => (i.id === p.id ? { ...i, qty: i.qty + qty } : i))
        : [...old, { ...p, qty }];
    });
    setCartOpen(true);
  };
  // Sets a cart item's quantity. Items that reach 0 are removed from the cart.
  const changeQty = (id, q) =>
    setCart((c) =>
      c
        .map((i) => (i.id === id ? { ...i, qty: Math.max(0, q) } : i))
        .filter((i) => i.qty > 0),
    );
  // Adds or removes a product from the favourites list.
  const toggleFavorite = (id) =>
    setFavorites((x) =>
      x.includes(id) ? x.filter((i) => i !== id) : [...x, id],
    );
  // Totals shown in the header badge and the cart panel.
  const cartCount = cart.reduce((s, p) => s + p.qty, 0);
  const total = cart.reduce((s, p) => s + p.qty * p.price, 0);
  // Opens the collection page, optionally filtered to one category.
  const shop = (cat) =>
    go(cat ? `/products?category=${encodeURIComponent(cat)}` : "/products");
  // On a product page (/products/<id>), this is the product being viewed.
  const currentProduct = path.startsWith("/products/")
    ? products.find((p) => "/products/" + p.id === path)
    : null;
  return (
    <AppContext.Provider
      value={{ path, go, shop, add, favorites, toggleFavorite }}
    >
      <Header
        menu={menu}
        setMenu={setMenu}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        cartCount={cartCount}
        openCart={() => setCartOpen(true)}
      />
      {/* Choose which page to show based on the current path. Collection gets
          a new key on each navigation so its filters reset. */}
      {path === "/" ? (
        <Home />
      ) : path === "/products" ? (
        <Collection key={routeKey} />
      ) : currentProduct ? (
        <Product p={currentProduct} />
      ) : path === "/custom-orders" ? (
        <CustomOrders />
      ) : path === "/our-story" ||
        path === "/about" ||
        path === "/sustainability" ? (
        <Story />
      ) : (
        <NotFound />
      )}
      <Footer />
      {shopEnabled && cartOpen && (
        <CartPanel
          cart={cart}
          cartCount={cartCount}
          total={total}
          changeQty={changeQty}
          onClose={() => setCartOpen(false)}
        />
      )}
    </AppContext.Provider>
  );
}
