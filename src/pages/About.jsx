import {
  ArrowRight,
  Recycle,
  Leaf,
  Users,
  HeartHandshake,
  Gem,
  Palette,
  Factory,
  ShieldCheck,
  GraduationCap,
  Home as HomeIcon,
  Hotel,
  Briefcase,
  Scissors,
  Globe,
  Eye,
  Target,
} from "lucide-react";
import { A } from "../utils";
import { useApp } from "../AppContext";
import Values from "../components/Values";
import InfoGrid from "../components/InfoGrid";

const objectives = [
  [Recycle, "Transform glass waste", "Turning discarded glass bottles into beautiful, functional products."],
  [Leaf, "Environmental sustainability", "Reducing landfill waste and minimising our environmental impact."],
  [Users, "Community empowerment", "Creating employment opportunities, especially for marginalised women."],
  [HeartHandshake, "Social responsibility", "Supporting community development through sustainable practices."],
];

const reasons = [
  [Gem, "Unique, sustainable pieces", "Repurposed glass products that reduce waste and support a healthier environment."],
  [Users, "Social impact", "Every order creates opportunities for artisans and marginalised communities."],
  [Palette, "Made to your brief", "Personalised engraving, colours and custom sizes."],
  [Factory, "Eco-friendly production", "Upcycling keeps our environmental footprint small."],
  [ShieldCheck, "Quality and durability", "Premium craftsmanship and smooth, safe edges built to last."],
  [GraduationCap, "Education and awareness", "Workshops and community events that promote sustainable living."],
];

const audiences = [
  [Leaf, "Eco-conscious consumers", "People who prefer recycled, handmade and one-of-a-kind home decor."],
  [HomeIcon, "Home decor lovers", "Fans of artistic, modern, rustic and bohemian interiors."],
  [Hotel, "Hospitality businesses", "Hotels, restaurants and bars looking for sustainable glassware and decor."],
  [Briefcase, "Corporate and event planners", "Eco-friendly gifts and customised event pieces."],
  [Scissors, "DIY and craft enthusiasts", "Makers who love creative, handmade materials."],
  [Globe, "Zero-waste communities", "Everyone working towards a more circular way of living."],
];

// The "About" page: who El Vaso is, vision and mission, objectives,
// reasons to choose us and who we serve.
export default function About() {
  const { go, shop } = useApp();
  return (
    <>
      <section className="page-hero story-hero">
        <div>
          <div className="eyebrow">ABOUT EL VASO GLASSWARE</div>
          <h1>
            Where waste
            <br />
            <em>becomes wonder.</em>
          </h1>
          <p>
            El Vaso Glassware transforms discarded glass bottles into stylish,
            functional products through innovative upcycling. We combine
            sustainability, creativity and social responsibility by supporting
            local artisans and empowering marginalised communities in Nairobi.
          </p>
          <div className="actions">
            <button className="btn btn-primary" onClick={() => go("/our-story")}>
              Read our story <ArrowRight size={16} />
            </button>
            <button className="btn btn-outline" onClick={() => shop()}>
              See what we make
            </button>
          </div>
        </div>
        <img src={A + "artisan.webp"} alt="Artisan shaping upcycled glass in the El Vaso workshop" />
      </section>
      <Values />

      <section className="section container">
        <div className="vision-mission">
          <article>
            <Eye size={28} />
            <div className="eyebrow">OUR VISION</div>
            <h2>A leader in upcycled glass.</h2>
            <p>
              To be a leading provider of upcycled glass products while making
              a positive impact on society and the environment.
            </p>
          </article>
          <article>
            <Target size={28} />
            <div className="eyebrow">OUR MISSION</div>
            <h2>Beauty with responsibility.</h2>
            <p>
              To promote environmental responsibility by creating unique
              products from discarded bottles while empowering communities and
              supporting local artisans.
            </p>
          </article>
        </div>
      </section>

      <section className="section info-band">
        <div className="container">
          <div className="eyebrow">WHAT DRIVES US</div>
          <h2>
            Our company
            <br />
            <em>objectives.</em>
          </h2>
          <InfoGrid items={objectives} dark />
        </div>
      </section>

      <section className="section container">
        <div className="eyebrow">THE EL VASO DIFFERENCE</div>
        <h2>Why choose El Vaso?</h2>
        <InfoGrid items={reasons} />
      </section>

      <section className="section soft-band">
        <div className="container">
          <div className="eyebrow">WHO WE SERVE</div>
          <h2>
            Crafted for
            <br />
            <em>conscious living.</em>
          </h2>
          <InfoGrid items={audiences} />
        </div>
      </section>

      <section className="custom-cta">
        <div>
          <div className="eyebrow">READY WHEN YOU ARE</div>
          <h2>
            Ready to bring
            <br />
            beauty home?
          </h2>
          <p>
            Explore our handmade upcycled glassware or design a custom piece
            that tells your story.
          </p>
          <div className="actions">
            <button className="btn btn-primary" onClick={() => shop()}>
              Explore the collection <ArrowRight size={16} />
            </button>
            <button className="btn btn-outline" onClick={() => go("/custom-orders")}>
              Create a custom design
            </button>
          </div>
        </div>
        <img src={A + "custom-hero.webp"} alt="Artisan personalising a glass tumbler" />
      </section>
    </>
  );
}
