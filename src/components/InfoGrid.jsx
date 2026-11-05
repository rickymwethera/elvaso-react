// A grid of icon cards: used for objectives, reasons to choose El Vaso and
// the customers we serve. `items` is a list of [Icon, title, description].
export default function InfoGrid({ items, dark = false }) {
  return (
    <div className={"info-grid" + (dark ? " info-grid-dark" : "")}>
      {items.map(([Icon, title, desc]) => (
        <article key={title} className="info-card">
          <span className="info-icon">
            <Icon size={24} />
          </span>
          <h3>{title}</h3>
          <p>{desc}</p>
        </article>
      ))}
    </div>
  );
}
