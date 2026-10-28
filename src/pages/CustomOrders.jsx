import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Gift,
  Palette,
  Ruler,
  PenLine,
} from "lucide-react";
import { categories } from "../data";
import { A, whatsapp } from "../utils";

// The custom orders page ("/custom-orders"). Its enquiry form doesn't
// send anything itself; it builds a WhatsApp message from the answers.
export default function CustomOrders() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    quantity: "",
    budget: "",
    occasion: "",
    notes: "",
  });
  // Shared change handler: stores each field's value under its `name`.
  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  // Turns the form answers into a WhatsApp message and opens it.
  const submit = (e) => {
    e.preventDefault();
    whatsapp(
      `Hello El Vaso, I'd like a custom order quotation.\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProduct: ${form.type}\nQuantity: ${form.quantity}\nBudget: ${form.budget || "Not specified"}\nOccasion: ${form.occasion || "Not specified"}\nNotes: ${form.notes || "None"}`,
    );
  };
  const options = [
    {
      icon: PenLine,
      title: "Custom engraving",
      desc: "Names, dates and messages",
    },
    {
      icon: Palette,
      title: "Custom colours",
      desc: "A palette personal to you",
    },
    { icon: Ruler, title: "Custom sizes", desc: "Designed for your space" },
    {
      icon: Gift,
      title: "Meaningful gifting",
      desc: "Personal and corporate",
    },
  ];
  return (
    <>
      <section className="page-hero custom-hero">
        <div>
          <div className="eyebrow">CUSTOM ORDERS</div>
          <h1>
            Design something
            <br />
            <em>uniquely yours.</em>
          </h1>
          <p>
            Celebrate the moments that matter with personalised, handcrafted
            glassware. Tell us what you're imagining.
          </p>
          <button
            className="btn btn-primary"
            onClick={() =>
              document
                .getElementById("enquiry-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start your custom design <ArrowRight size={16} />
          </button>
        </div>
        <img
          src={A + "custom-hero.webp"}
          alt="Glassware being customised by an artisan"
        />
      </section>
      <div className="custom-features container">
        {options.map(({ icon: Icon, title, desc }) => (
          <div key={title}>
            <Icon size={24} />
            <strong>{title}</strong>
            <small>{desc}</small>
          </div>
        ))}
      </div>
      <section className="section container">
        <div className="eyebrow">FROM IDEA TO FINISHED PIECE</div>
        <h2>How it works</h2>
        <p className="muted max-text">
          A simple, collaborative process to bring your ideas to life.
        </p>
        <div className="steps">
          {[
            [
              "01",
              "Share your idea",
              "Tell us what you envision, and how you plan to use it.",
            ],
            [
              "02",
              "We design it",
              "We work with you on colours, engraving and sizing.",
            ],
            [
              "03",
              "Handcrafted for you",
              "Our artisans carefully bring the design to life.",
            ],
            [
              "04",
              "Made to be treasured",
              "Receive a thoughtful piece, made especially for you.",
            ],
          ].map(([n, title, desc]) => (
            <div key={n}>
              <span className="step-number">{n}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section container inspiration">
        <div className="eyebrow">A LITTLE INSPIRATION</div>
        <h2>Made for every occasion.</h2>
        <div className="inspiration-grid">
          {[
            { name: "Weddings & events", image: "wedding" },
            { name: "Restaurants & hospitality", image: "hospitality" },
            { name: "Corporate gifts", image: "corporate" },
            { name: "Home styling", image: "styling" },
          ].map((c) => (
            <button
              key={c.name}
              onClick={() => {
                // Pre-fill the occasion and jump down to the form.
                setForm((f) => ({ ...f, occasion: c.name }));
                document
                  .getElementById("enquiry-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <img src={A + c.image + ".webp"} alt={c.name} />
              <span>
                {c.name}
                <ArrowUpRight size={17} />
              </span>
            </button>
          ))}
        </div>
      </section>
      <section className="form-section" id="enquiry-form">
        <div className="container form-layout">
          <div>
            <div className="eyebrow">LET'S CREATE TOGETHER</div>
            <h2>
              Tell us about
              <br />
              <em>your idea.</em>
            </h2>
            <p>
              Share a few details and we’ll help you explore the possibilities.
              Sending this form opens a WhatsApp message with your enquiry,
              ready for you to send.
            </p>
            <img src={A + "artisan.webp"} alt="Hand crafting upcycled glass" />
          </div>
          <form onSubmit={submit}>
            <h3>Custom order enquiry</h3>
            <div className="form-grid">
              <label>
                Full name *
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Your name"
                />
              </label>
              <label>
                Email address *
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Phone number *
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  placeholder="+254 ..."
                />
              </label>
              <label>
                Product type *
                <select
                  required
                  name="type"
                  value={form.type}
                  onChange={update}
                >
                  <option value="">Select product type</option>
                  {categories.map((c) => (
                    <option key={c.id}>{c.id}</option>
                  ))}
                  <option>Something else</option>
                </select>
              </label>
              <label>
                Quantity *
                <input
                  required
                  type="number"
                  min="1"
                  name="quantity"
                  value={form.quantity}
                  onChange={update}
                  placeholder="e.g. 20"
                />
              </label>
              <label>
                Estimated budget (KES)
                <select name="budget" value={form.budget} onChange={update}>
                  <option value="">Select a range</option>
                  <option>Under KES 5,000</option>
                  <option>KES 5,000–20,000</option>
                  <option>KES 20,000–50,000</option>
                  <option>Above KES 50,000</option>
                </select>
              </label>
              <label className="form-wide">
                Occasion / use
                <input
                  name="occasion"
                  value={form.occasion}
                  onChange={update}
                  placeholder="Wedding, restaurant, gift..."
                />
              </label>
              <label className="form-wide">
                Describe your idea
                <textarea
                  rows="4"
                  name="notes"
                  value={form.notes}
                  onChange={update}
                  placeholder="Colours, engraving, style, deadlines..."
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary full">
              Continue enquiry on WhatsApp <ArrowRight size={17} />
            </button>
            <p className="form-note">
              We won't store your details on this demo website. You'll confirm
              sending in WhatsApp.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
