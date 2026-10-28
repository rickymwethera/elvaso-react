import { ArrowUpRight, Instagram } from "lucide-react";
import { instagramUrl } from "../data";
import { A } from "../utils";

// Grid of images that link to the El Vaso Instagram page.
export default function InstaStrip() {
  return (
    <section className="section container insta">
      <div className="section-heading">
        <div>
          <div className="eyebrow">FOLLOW ALONG</div>
          <h2>@elvaso_glassware</h2>
        </div>
        <a
          className="text-link"
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          Follow on Instagram <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="insta-grid">
        {["hero", "vases", "styling", "bowls"].map((n) => (
          <a
            key={n}
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="See El Vaso on Instagram"
          >
            <img src={A + n + ".webp"} alt="" loading="lazy" />
            <Instagram size={24} />
          </a>
        ))}
      </div>
    </section>
  );
}
