import { Instagram, Phone, MapPin, Send } from "lucide-react";
import { categories, whatsappNumber, instagramUrl, tiktokUrl } from "../data";
import { useApp } from "../AppContext";

// Site footer with navigation links, categories and contact details.
export default function Footer() {
  const { go, shop } = useApp();
  return (
    <footer className="footer">
      <div className="container footer-columns">
        <div className="footer-brand">
          <button className="wordmark" onClick={() => go("/")}>
            EL VASO
          </button>
          <p>
            Every bottle deserves a second life. Thoughtfully upcycled glassware,
            handmade in Kenya.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <button onClick={() => shop()}>Our collection</button>
          <button onClick={() => go("/about")}>About</button>
          <button onClick={() => go("/our-story")}>Our story</button>
          <button onClick={() => go("/sustainability")}>Sustainability</button>
          <button onClick={() => go("/custom-orders")}>Custom orders</button>
          <button onClick={() => go("/contact")}>Contact</button>
        </div>
        <div>
          <h4>Categories</h4>
          {categories.map((c) => (
            <button key={c.id} onClick={() => shop(c.id)}>
              {c.name}
            </button>
          ))}
        </div>
        <div>
          <h4>Get in touch</h4>
          <a
            href={"https://wa.me/" + whatsappNumber}
            target="_blank"
            rel="noreferrer"
          >
            <Phone size={15} /> +254 726 881 124
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <Instagram size={15} /> @elvaso_glassware
          </a>
          <a href={tiktokUrl} target="_blank" rel="noreferrer">
            <Send size={15} /> @el.vaso.glassware
          </a>
          <span>
            <MapPin size={15} /> Nairobi, Kenya
          </span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} El Vaso Glassware. All rights reserved.
        </span>
        <span>Handmade with purpose · Crafted for the planet</span>
      </div>
    </footer>
  );
}
