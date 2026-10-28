import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { A } from "../utils";

// "Before and after" image comparison. Dragging the range input changes
// `pos`, which is passed to the CSS as --pos to reveal more of one image.
export default function BottleSlider() {
  const [pos, setPos] = useState(50);
  return (
    <section className="section container transform">
      <div className="transform-copy">
        <div className="eyebrow">FROM BOTTLE TO GLASS</div>
        <h2>
          Same glass.
          <br />
          <em>New purpose.</em>
        </h2>
        <p>
          Every El Vaso piece starts life as a bottle someone threw away. Drag
          the slider to see what it becomes.
        </p>
      </div>
      <div className="compare" style={{ "--pos": pos + "%" }}>
        <img
          src={A + "bottle-after.svg"}
          alt="The bottom of the bottle, cut and finished into a drinking glass"
        />
        <img
          className="compare-before"
          src={A + "bottle-before.svg"}
          alt="An empty green glass bottle"
        />
        <span className="compare-tag before">Before: an empty bottle</span>
        <span className="compare-tag after">After: a glass for your table</span>
        <span className="compare-handle" aria-hidden="true">
          <ChevronsLeftRight size={20} />
        </span>
        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Drag to compare the bottle before and after"
        />
      </div>
    </section>
  );
}
