import { useState } from "react";
import { ChevronDown, ExternalLink, Star } from "lucide-react";
const accommodationImage01 = "placeholder.svg";
const accommodationImage02 = "placeholder.svg";
const accommodationImage03 = "placeholder.svg";
const accommodationImage04 = "placeholder.svg";
const accommodationImage05 = "placeholder.svg";
import { MapEmbed } from "../components/MapEmbed";
import { SectionShell } from "../components/SectionShell";
import type { Accommodation as AccommodationType } from "../types";

const accommodationStripImages = [
  {
    src: accommodationImage01,
    alt: "Alex and Taylor holding hands beneath the trees"
  },
  {
    src: accommodationImage02,
    alt: "Alex and Taylor smiling together during their engagement shoot"
  },
  {
    src: accommodationImage03,
    alt: "Alex and Taylor sharing an affectionate moment outdoors"
  },
  {
    src: accommodationImage04,
    alt: "Alex and Taylor laughing together in the garden"
  },
  {
    src: accommodationImage05,
    alt: "Alex and Taylor kissing under soft evening light"
  }
];

export function Accommodation({ items }: { items: AccommodationType[] }) {
  const [showAccommodation, setShowAccommodation] = useState(false);

  return (
    <SectionShell
      id="accommodation"
      eyebrow="Nearby Stays"
      title="Accommodation"
      intro="Fictional accommodation cards demonstrate the layout and responsive controls. No real booking services or contact details are connected."
      className="bg-linen"
    >
      <button
        type="button"
        className={`accommodation-toggle${showAccommodation ? " is-open" : ""}`}
        aria-controls="accommodation-options"
        aria-expanded={showAccommodation}
        onClick={() => setShowAccommodation((isOpen) => !isOpen)}
      >
        <span>View accommodation options</span>
        <ChevronDown size={18} aria-hidden="true" />
      </button>

      <div id="accommodation-options" className={`accommodation-list-shell${showAccommodation ? " is-open" : ""}`}>
        <div className="accommodation-list grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article key={item.name} className="accommodation-card">
              <MapEmbed
                query={`${item.name}, Sample City, South Africa`}
                title={`Map showing ${item.name}`}
                className="accommodation-card__map rounded-none border-0 shadow-none"
              />
              <div className="accommodation-card__body">
                <h3>{item.name}</h3>
                <div className="accommodation-card__meta">
                  <p className="accommodation-card__rating">
                    <Star size={15} /> {item.rating.toFixed(1)} star rating
                  </p>
                  <p className="accommodation-card__distance">{item.distance}</p>
                </div>
                <p className="accommodation-card__description">{item.description}</p>
                <div className="accommodation-card__actions">
                  {item.website ? (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                      className="accommodation-card__button accommodation-card__button--website"
                    >
                      Website <ExternalLink size={16} />
                    </a>
                  ) : null}
                  <span className="accommodation-card__button accommodation-card__button--directions">
                    Demonstration only
                  </span>
                </div>
              </div>
            </article>
          ))}
          <p className="accommodation-notice">
            <strong>Please note:</strong> These venues are fictional examples for this portfolio demo.
          </p>
        </div>
      </div>

      <div className="accommodation-intro">
        <div className="accommodation-film-strip" aria-label="Engagement photo film strip">
          {accommodationStripImages.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className={`accommodation-film-strip__item accommodation-film-strip__item--${index + 1}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
