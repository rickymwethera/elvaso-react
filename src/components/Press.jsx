import { ArrowUpRight, Newspaper } from "lucide-react";
import { pressUrl } from "../data";

// Quote and link to the article about El Vaso in The Standard.
export default function Press() {
  return (
    <section className="press">
      <div className="container press-inner">
        <Newspaper size={34} />
        <div>
          <div className="eyebrow">AS FEATURED IN THE STANDARD</div>
          <blockquote>
            “Every single bottle that we collect doesn't get back into the
            dumpsite, irrespective of how small the pieces are.”
          </blockquote>
          <p>Judith Ririani, CEO of El Vaso</p>
        </div>
        <a
          className="btn btn-outline"
          href={pressUrl}
          target="_blank"
          rel="noreferrer"
        >
          Read the article <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
