import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
const engagementHandsThumbnail = "placeholder.svg";
import { SectionShell } from "../components/SectionShell";
import type { GalleryImage } from "../types";

type GalleryDirection = -1 | 1;

const photoVariants: Variants = {
  enter: (direction: GalleryDirection) => ({ opacity: 0, x: direction * 28 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: GalleryDirection) => ({ opacity: 0, x: direction * -28 }),
};

export function EngagementGallery({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [navigationDirection, setNavigationDirection] = useState<GalleryDirection>(1);
  const [activeOrientation, setActiveOrientation] = useState<"landscape" | "portrait">("landscape");
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const touchStartX = useRef(0);
  const reduceMotion = useReducedMotion();
  const visibleImages = useMemo(() => images.filter(Boolean), [images]);
  const activeImage = visibleImages[activeIndex] ?? visibleImages[0];

  const showPreviousImage = () => {
    setNavigationDirection(-1);
    setActiveIndex((index) => (index === 0 ? visibleImages.length - 1 : index - 1));
  };

  const showNextImage = () => {
    setNavigationDirection(1);
    setActiveIndex((index) => (index + 1) % visibleImages.length);
  };

  const openAlbum = () => {
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setActiveIndex(0);
    setNavigationDirection(1);
    setActiveOrientation("landscape");
    setOpen(true);
  };

  const closeAlbum = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAlbum();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus.current?.focus();
    };
  }, [open, visibleImages.length]);

  const handleTouchEnd = (clientX: number) => {
    const distance = touchStartX.current - clientX;
    if (Math.abs(distance) < 42) return;
    if (distance > 0) showNextImage();
    else showPreviousImage();
  };

  if (!visibleImages.length) return null;

  return (
    <SectionShell
      id="gallery"
      eyebrow="Moments Together"
      title="Memories Gallery"
      intro="A collection of favourite memories from our journey together."
      className="bg-linen"
    >
      <article className="album-preview">
        <div className="album-preview__image">
          <img src={engagementHandsThumbnail} alt="Taylor's engagement ring as she holds Alex's hand" loading="lazy" decoding="async" />
        </div>
        <button type="button" className="album-preview__button" onClick={openAlbum}>
          View Album <ArrowUpRight size={19} />
        </button>
      </article>

      <AnimatePresence>
        {open && (
          <motion.div
            className="album-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Memories album"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) closeAlbum();
            }}
          >
            <motion.div
              className="album-overlay__panel"
              initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.985 }}
              transition={{ duration: reduceMotion ? 0 : 0.36, ease: "easeOut" }}
            >
              <div className="album-overlay__topbar">
                <p>Memories Gallery</p>
                <span>
                  {String(activeIndex + 1).padStart(2, "0")} / {String(visibleImages.length).padStart(2, "0")}
                </span>
                <button ref={closeRef} type="button" onClick={closeAlbum} aria-label="Close memory album">
                  <X size={20} />
                </button>
              </div>

              <div
                className="album-overlay__viewer"
                onTouchStart={(event) => {
                  touchStartX.current = event.changedTouches[0]?.clientX ?? 0;
                }}
                onTouchEnd={(event) => {
                  handleTouchEnd(event.changedTouches[0]?.clientX ?? touchStartX.current);
                }}
              >
                <button
                  type="button"
                  className="album-overlay__arrow album-overlay__arrow--prev"
                  onClick={showPreviousImage}
                  aria-label="View previous memory photo"
                >
                  <ChevronLeft size={26} />
                </button>

                <AnimatePresence custom={navigationDirection} mode="wait" initial={false}>
                  <motion.figure
                    key={activeImage.id}
                    custom={navigationDirection}
                    className={`album-overlay__photo album-overlay__photo--${activeOrientation}`}
                    variants={photoVariants}
                    initial={reduceMotion ? false : "enter"}
                    animate="center"
                    exit={reduceMotion ? undefined : "exit"}
                    transition={{ duration: reduceMotion ? 0 : 0.26, ease: "easeOut" }}
                  >
                    <img
                      src={activeImage.highResSrc ?? activeImage.src}
                      alt={activeImage.alt}
                      decoding="async"
                      onLoad={(event) => {
                        const image = event.currentTarget;
                        setActiveOrientation(image.naturalHeight > image.naturalWidth ? "portrait" : "landscape");
                      }}
                    />
                  </motion.figure>
                </AnimatePresence>

                <button
                  type="button"
                  className="album-overlay__arrow album-overlay__arrow--next"
                  onClick={showNextImage}
                  aria-label="View next memory photo"
                >
                  <ChevronRight size={26} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}
