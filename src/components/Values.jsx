import { Leaf, Recycle, HeartHandshake } from "lucide-react";

// Row of the three brand values (upcycled, local artisans, thoughtfully made).
export default function Values() {
  return (
    <div className="values">
      <div>
        <Leaf />
        <span>
          <strong>100% upcycled glass</strong>
          <small>Every piece starts as a bottle</small>
        </span>
      </div>
      <div>
        <HeartHandshake />
        <span>
          <strong>Made by local artisans</strong>
          <small>Crafted with care in Kenya</small>
        </span>
      </div>
      <div>
        <Recycle />
        <span>
          <strong>Finished by hand</strong>
          <small>Smooth, safe edges</small>
        </span>
      </div>
    </div>
  );
}
