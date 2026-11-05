import { useState } from "react";
import { Phone, Instagram, MapPin, MessageCircle, Send } from "lucide-react";
import { instagramUrl, tiktokUrl } from "../data";
import { whatsapp } from "../utils";

// The "Contact" page. The form opens WhatsApp with a pre-filled message.
export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    whatsapp(`Hello El Vaso, my name is ${form.name}.\n\n${form.message}`);
  };
  return (
    <>
      <section className="page-hero contact-hero">
        <div>
          <div className="eyebrow">CONTACT</div>
          <h1>
            Let's talk
            <br />
            <em>glass.</em>
          </h1>
          <p>
            Questions about a piece, a custom order or a bulk order for your
            venue? We'd love to hear from you.
          </p>
        </div>
      </section>
      <section className="section container contact-layout">
        <div className="contact-cards">
          <a href="tel:+254726881124" className="info-card">
            <span className="info-icon"><Phone size={22} /></span>
            <h3>Call us</h3>
            <p>+254 726 881 124</p>
          </a>
          <button className="info-card" onClick={() => whatsapp("Hello El Vaso!")}>
            <span className="info-icon"><MessageCircle size={22} /></span>
            <h3>WhatsApp</h3>
            <p>Chat with us directly</p>
          </button>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="info-card">
            <span className="info-icon"><Instagram size={22} /></span>
            <h3>Instagram</h3>
            <p>@elvaso_glassware</p>
          </a>
          <a href={tiktokUrl} target="_blank" rel="noreferrer" className="info-card">
            <span className="info-icon"><Send size={22} /></span>
            <h3>TikTok</h3>
            <p>@el.vaso.glassware</p>
          </a>
          <div className="info-card">
            <span className="info-icon"><MapPin size={22} /></span>
            <h3>Workshop</h3>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <h2>Send us a message</h2>
          <label>
            Your name
            <input required value={form.name} onChange={set("name")} />
          </label>
          <label>
            Message
            <textarea required rows={6} value={form.message} onChange={set("message")} />
          </label>
          <button className="btn btn-primary full" type="submit">
            Send via WhatsApp <MessageCircle size={16} />
          </button>
          <small className="form-note">
            This opens WhatsApp with your message ready to send.
          </small>
        </form>
      </section>
    </>
  );
}
