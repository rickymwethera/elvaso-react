import { ArrowRight } from "lucide-react";
import { pressUrl } from "../data";
import { A } from "../utils";
import { useApp } from "../AppContext";
import Values from "../components/Values";
import Journey from "../components/Journey";
import BottleDrop from "../components/BottleDrop";

// The "Our story" page (also shown for /about and /sustainability).
export default function Story() {
  const { go, shop } = useApp();
  return (
    <>
      <section className="page-hero story-hero">
        <div>
          <div className="eyebrow">OUR STORY</div>
          <h1>
            Where waste
            <br />
            <em>becomes wonder.</em>
          </h1>
          <p>
            Beauty doesn't always begin with something new. At El Vaso, we
            celebrate the potential of discarded glass and the people who give
            it new life.
          </p>
          <button className="btn btn-primary" onClick={() => shop()}>
            Explore our collection <ArrowRight size={16} />
          </button>
        </div>
        <img src={A + "artisan.webp"} alt="Artisan crafting glass" />
      </section>
      <Values />
      <section className="section container story-body">
        <div className="eyebrow">CRAFTED WITH PURPOSE</div>
        <h2>
          A little less waste.
          <br />A lot more possibility.
        </h2>
        <p>
          We transform discarded bottles into beautiful, functional glassware.
          Every piece speaks to thoughtful design, Kenyan craftsmanship and a
          desire to make more from what already exists.
        </p>
        <p>
          El Vaso began with a problem at a hospitality venue in Nairobi: empty
          bottles from the bar were piling up. Our CEO, Judith Ririani, and her
          daughter started cutting them into drinking glasses for the venue to
          use. When outsourcing the cutting became too expensive, they
          researched the machinery to do it themselves, and what started in
          Judith's backyard grew into El Vaso Glassware.
        </p>
        <p>
          Today we collect bottles from bars, restaurants and members of the
          public, and cut them into functional pieces for the home. Cutting
          leaves offcuts behind, so we've invested in a glass-crushing machine
          to keep as much of every bottle in production as possible, with glass
          terrazzo planned as our next step. We're also exploring public
          collection points where you can drop off unwanted bottles.
        </p>
        <blockquote className="story-quote">
          “Every single bottle that we collect doesn't get back into the
          dumpsite, irrespective of how small the pieces are.”
          <cite>
            Judith Ririani, CEO ·{" "}
            <a href={pressUrl} target="_blank" rel="noreferrer">
              as featured in The Standard
            </a>
          </cite>
        </blockquote>
        <button
          className="btn btn-primary"
          onClick={() => go("/custom-orders")}
        >
          Work with us <ArrowRight size={16} />
        </button>
      </section>
      <Journey />
      <BottleDrop />
    </>
  );
}
