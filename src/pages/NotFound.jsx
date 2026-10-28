import { useApp } from "../AppContext";

// Shown for any path that doesn't match a page.
export default function NotFound() {
  const { go } = useApp();
  return (
    <div className="container not-found">
      <h1>Page not found</h1>
      <button className="btn btn-primary" onClick={() => go("/")}>
        Back home
      </button>
    </div>
  );
}
