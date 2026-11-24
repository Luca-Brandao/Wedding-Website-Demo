import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useCountdown } from "../hooks/useCountdown";
import type { GalleryImage } from "../types";

type Props = {
  date: string;
  displayDate: string;
  location: string;
  photos: GalleryImage[];
};

const flowers = [
  "hero-flower--one",
  "hero-flower--two",
  "hero-flower--three",
  "hero-flower--four",
  "hero-flower--five",
  "hero-flower--six",
  "hero-flower--seven",
  "hero-flower--eight"
];

const polaroidAngles = [-8, 7, 5, -6];

export function Hero({ date, displayDate, location, photos }: Props) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const countdown = useCountdown(date);

  return (
    <section id="home" ref={ref} tabIndex={-1} className="hero-section outline-none">
      <div className="hero-section__wash" aria-hidden="true" />
      {flowers.map((flower) => (
        <span key={flower} className={`hero-flower ${flower}`} aria-hidden="true" />
      ))}

      <div className="hero-polaroids" aria-hidden="true">
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.id}
            className={`hero-polaroid hero-polaroid--${index + 1}`}
            initial={reduceMotion ? false : { opacity: 0, y: 24, rotate: (polaroidAngles[index] ?? 0) * 0.35 }}
            animate={{ opacity: 1, y: 0, rotate: polaroidAngles[index] ?? 0 }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.12 + index * 0.08, ease: "easeOut" }}
          >
            <img src={photo.highResSrc ?? photo.src} alt="" loading={index === 0 ? "eager" : "lazy"} decoding="async" />
          </motion.figure>
        ))}
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.85, ease: "easeOut" }}
      >
        <h1 className="hero-title">
          Alex <span>&amp;</span> Taylor
        </h1>
        <div className="hero-announcement" aria-label="Are getting married">
          <p>Are getting married</p>
        </div>
        <div className="hero-divider" aria-hidden="true">
          <span className="hero-divider__heart" />
        </div>
        <time className="hero-date" dateTime="2030-06-15">
          {displayDate}
        </time>
        <p className="hero-location">{location}</p>

        <div className="hero-countdown" aria-label="Countdown to the wedding">
          {Object.entries(countdown).map(([label, value]) => (
            <div key={label} className="hero-countdown__item">
              <div className="hero-countdown__value">{value}</div>
              <div className="hero-countdown__label">{label}</div>
            </div>
          ))}
        </div>

        <a className="hero-rsvp-cta" href="#rsvp">
          RSVP
        </a>
      </motion.div>

      <a className="hero-scroll-cue" href="#story" aria-label="Scroll to our story">
        <span />
      </a>
    </section>
  );
}
