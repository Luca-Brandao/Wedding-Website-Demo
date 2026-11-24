import { useEffect, useMemo, useState } from "react";
import { ArrowUp } from "lucide-react";
import { fallbackAccommodation, fallbackWedding } from "../assets/data/fallback";
import { InvitationIntro } from "../components/InvitationIntro";
import { Navbar } from "../components/Navbar";
import { Accommodation } from "../sections/Accommodation";
import { EngagementGallery } from "../sections/EngagementGallery";
import { Gifts } from "../sections/Gifts";
import { Hero } from "../sections/Hero";
import { Rsvp } from "../sections/Rsvp";
import { Schedule } from "../sections/Schedule";
import { Story } from "../sections/Story";
import { Venue } from "../sections/Venue";
import { localGalleryImages, localMemoryGalleryImages } from "../utils/gallery";

export default function WeddingApp() {
  const wedding = fallbackWedding;
  const accommodation = fallbackAccommodation;
  const gallery = useMemo(() => localGalleryImages(), []);
  const memoryGallery = useMemo(() => localMemoryGalleryImages(), []);
  const [showInvitation, setShowInvitation] = useState(true);
  const heroPhotos = [gallery[0], gallery[4], gallery[7], gallery[10]].filter(Boolean);

  const completeInvitation = () => {
    setShowInvitation(false);
    window.requestAnimationFrame(() => document.getElementById("home")?.focus({ preventScroll: true }));
  };

  const returnToPageTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {showInvitation && <InvitationIntro onComplete={completeInvitation} />}

      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-gold px-5 py-3 font-semibold text-ink transition focus:translate-y-0"
      >
        Skip to content
      </a>

      <div
        className={`min-h-screen bg-linen font-sans text-ink transition-opacity duration-700 ${
          showInvitation ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden={showInvitation}
        inert={showInvitation}
      >
        <Navbar />
        <div className="scroll-progress" aria-hidden="true">
          <span style={{ transform: `scaleY(${Math.min(Math.max(scrollProgress, 0), 1)})` }} />
        </div>
        <main id="main-content">
          <Hero
            date={wedding.date}
            displayDate={wedding.displayDate}
            location={wedding.location}
            photos={heroPhotos}
          />
          <Story story={wedding.story} images={gallery} />
          <Venue venue={wedding.venue} />
          <Schedule items={wedding.schedule} />
          <Accommodation items={accommodation} />
          <Gifts />
          <EngagementGallery images={memoryGallery} />
          <Rsvp />
        </main>
        <footer className="wedding-footer">
          <span className="wedding-footer__heart" aria-hidden="true" />
          <p className="wedding-footer__names">Alex &amp; Taylor</p>
          <p className="wedding-footer__date">15 . 06 . 2030</p>
          <p className="wedding-footer__made">
            Website made with <span aria-hidden="true">♥</span> by Luca Brandao
          </p>
          <a
            className="wedding-footer__back-to-start"
            href="#home"
            aria-label="Back to the start of the website"
            onClick={returnToPageTop}
          >
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </footer>
      </div>
    </>
  );
}

