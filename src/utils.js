import { whatsappNumber } from "./data";

// The site is served from a sub-folder on GitHub Pages, so every URL is
// prefixed with BASE (BASE_URL without its trailing slash).
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
// Returns the current page path with the BASE prefix removed, e.g. "/products".
export const route = () => window.location.pathname.slice(BASE.length) || "/";
// Folder holding the site's images (public/images).
export const A = import.meta.env.BASE_URL + "images/";
// Opens a WhatsApp chat with El Vaso in a new tab, with `message` pre-filled.
// All enquiries and orders on the site are sent this way.
export const whatsapp = (message) =>
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
