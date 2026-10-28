import { Leaf, Recycle, HeartHandshake } from "lucide-react";

// Row of the three brand values (upcycled, local artisans, thoughtfully made).
export default function Values() {
  return (
    <div className="values">
      <div>
        <Leaf />
        <span>
          <strong>100% upcycled glass</strong>
          <small>Giving bottles a second life</small>
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
          <strong>Thoughtfully made</strong>
          <small>Less waste, more possibility</small>
        </span>
      </div>
    </div>
  );
}
