import { Recycle, Scissors, Sparkles, Wine, Utensils } from "lucide-react";

// Steps shown in the Journey section: [icon, title, description].
const journey = [
  [
    Wine,
    "Collected",
    "Empty bottles from bars, restaurants and members of the public.",
  ],
  [Scissors, "Cut", "Each bottle is cut by machine in our Nairobi workshop."],
  [
    Sparkles,
    "Finished",
    "Edges are smoothed so every piece is safe and ready to use.",
  ],
  [Utensils, "On your table", "A one-of-a-kind piece, made for everyday use."],
  [
    Recycle,
    "Nothing wasted",
    "Offcuts are crushed for reuse, with glass terrazzo coming next.",
  ],
];
// The numbered steps showing how a bottle becomes a finished piece.
export default function Journey() {
  return (
    <section className="section journey">
      <div className="container">
        <div className="eyebrow">THE JOURNEY OF A BOTTLE</div>
        <h2>
          From the bin
          <br />
          <em>to your table.</em>
        </h2>
        <ol className="journey-steps">
          {journey.map(([Icon, title, desc], i) => (
            <li key={title}>
              <span className="journey-icon">
                <Icon size={26} />
              </span>
              <small>0{i + 1}</small>
              <h3>{title}</h3>
              <p>{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
