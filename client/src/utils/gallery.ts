import type { GalleryImage } from "../types";

// Local illustration only; the original private photographs are excluded.
const images: GalleryImage[] = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  src: "placeholder.svg",
  highResSrc: "placeholder.svg",
  alt: `Fictional portfolio illustration ${index + 1}`
}));

export function localGalleryImages(): GalleryImage[] { return images; }
export function localMemoryGalleryImages(): GalleryImage[] { return images; }
