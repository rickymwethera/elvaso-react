import { MessageCircle } from "lucide-react";
import { whatsapp } from "../utils";

// Call to action asking people to donate their empty bottles via WhatsApp.
export default function BottleDrop() {
  return (
    <section className="bottle-drop">
      <div className="container bottle-drop-inner">
        <div>
          <div className="eyebrow">GOT EMPTY BOTTLES?</div>
          <h2>Bring us your bottles.</h2>
          <p>
            We collect bottles from members of the public as well as bars and
            restaurants, and we're working on public drop-off points. Message us
            and we'll arrange a collection.
          </p>
        </div>
        <button
          className="btn"
          onClick={() =>
            whatsapp(
              "Hello El Vaso! I have some empty bottles for you. Where can I drop them off?",
            )
          }
        >
          <MessageCircle size={17} /> Arrange a drop-off
        </button>
      </div>
    </section>
  );
}
