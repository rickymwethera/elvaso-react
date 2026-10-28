import { ArrowRight, X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import { money } from "../data";
import { whatsapp } from "../utils";
import { useApp } from "../AppContext";

// Slide-out cart panel. Clicking the dark overlay outside it closes it.
// Checkout sends the order as a WhatsApp message.
export default function CartPanel({
  cart,
  cartCount,
  total,
  changeQty,
  onClose,
}) {
  const { shop } = useApp();
  return (
    <div
      className="overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <aside className="cart-panel">
        <div className="cart-header">
          <h2>
            Your bag <span>({cartCount})</span>
          </h2>
          <button onClick={onClose} aria-label="Close cart">
            <X />
          </button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag size={37} />
              <h3>Your bag is empty</h3>
              <p>Discover something beautiful for your space.</p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  onClose();
                  shop();
                }}
              >
                Explore collection
              </button>
            </div>
          ) : (
            cart.map((p) => (
              <div className="cart-item" key={p.id}>
                <img src={p.image} alt="" />
                <div>
                  <strong>{p.name}</strong>
                  <small>{money(p.price)}</small>
                  <div className="mini-stepper">
                    <button onClick={() => changeQty(p.id, p.qty - 1)}>
                      <Minus size={14} />
                    </button>
                    {p.qty}
                    <button onClick={() => changeQty(p.id, p.qty + 1)}>
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <button
                  className="remove"
                  title="Remove"
                  onClick={() => changeQty(p.id, 0)}
                >
                  <Trash2 size={17} />
                </button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-summary">
            <div>
              <span>Estimated subtotal</span>
              <strong>{money(total)}</strong>
            </div>
            <p>
              Demo prices. Final availability, delivery and payment are
              confirmed directly with El Vaso.
            </p>
            <button
              className="btn btn-primary full"
              onClick={() =>
                whatsapp(
                  `Hello El Vaso! I'd like to order:\n${cart.map((p) => `${p.qty} × ${p.name} (${money(p.qty * p.price)})`).join("\n")}\nEstimated total: ${money(total)}. Please confirm availability and delivery.`,
                )
              }
            >
              Enquire about this order <ArrowRight size={16} />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
