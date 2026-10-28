import { ArrowRight } from "lucide-react";
import { useApp } from "../AppContext";

// A styled button with an arrow that navigates to `to` when clicked.
export default function LinkButton({ children, to, outline = false }) {
  const { go } = useApp();
  return (
    <button
      className={"btn " + (outline ? "btn-outline" : "btn-primary")}
      onClick={() => go(to)}
    >
      {children}
      <ArrowRight size={16} />
    </button>
  );
}
