import { ArrowRight, Recycle, Leaf, Trash2, Users } from "lucide-react";
import { A } from "../utils";
import { useApp } from "../AppContext";
import Journey from "../components/Journey";
import BottleSlider from "../components/BottleSlider";
import BottleDrop from "../components/BottleDrop";

const stats = [
  ["100%", "Upcycled glass"],
  ["Handmade", "By local artisans"],
  ["Zero", "Waste to landfill"],
];

const pillars = [
  [Trash2, "Less glass in dumpsites", "Every bottle we collect stays out of the dumpsite, however small the pieces end up."],
  [Recycle, "Nothing wasted", "Offcuts are crushed and kept in production, with glass terrazzo planned next."],
  [Leaf, "A smaller footprint", "Cutting and finishing existing glass uses far less energy than making new glass."],
  [Users, "People first", "Our workshop creates steady, skilled work, especially for women in our community."],
];

// The "Sustainability" page: our environmental impact and process.
export default function Sustainability() {
  const { go } = useApp();
  return (
    <>
      <section className="page-hero story-hero">
        <div>
          <div className="eyebrow">SUSTAINABILITY</div>
          <h1>
            A second life
            <br />
            <em>for every bottle.</em>
          </h1>
          <p>
            Glass can take a million years to break down in a landfill. We give
            discarded bottles from bars, restaurants and homes across Nairobi a
            new purpose on your table instead.
          </p>
          <div className="stat-row">
            {stats.map(([n, l]) => (
              <div key={l}>
                <strong>{n}</strong>
                <small>{l}</small>
              </div>
            ))}
          </div>
        </div>
        <img src={A + "bottle-store.webp"} alt="Shelves of collected bottles waiting to be cut" />
      </section>
      <section className="section container">
        <div className="eyebrow">OUR COMMITMENTS</div>
        <h2>
          Good for the planet,
          <br />
          <em>good for people.</em>
        </h2>
        <div className="info-grid four">
          {pillars.map(([Icon, t, d]) => (
            <article key={t} className="info-card">
              <span className="info-icon">
                <Icon size={24} />
              </span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <BottleSlider />
      <Journey />
      <BottleDrop />
      <section className="section container story-body">
        <h2>Want to bring upcycled glass to your business?</h2>
        <p>
          We supply hotels, restaurants, bars and event planners with
          sustainable glassware and custom pieces.
        </p>
        <button className="btn btn-primary" onClick={() => go("/custom-orders")}>
          Start a custom order <ArrowRight size={16} />
        </button>
      </section>
    </>
  );
}
