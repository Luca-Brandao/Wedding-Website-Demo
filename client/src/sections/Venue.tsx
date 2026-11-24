import { Building2, CalendarHeart, Car, Clock, ExternalLink, MapPin, Shirt, Wine } from "lucide-react";
import { MapEmbed } from "../components/MapEmbed";
import { SectionShell } from "../components/SectionShell";
const ceremonyHall = "placeholder.svg";
const receptionHall = "placeholder.svg";
import type { WeddingData } from "../types";
import type { ReactNode } from "react";

type DetailItem = {
  icon: typeof CalendarHeart;
  label: string;
  value: string;
  description?: ReactNode;
};

export function Venue({ venue }: { venue: WeddingData["venue"] }) {
  const mapsUrl = "#venue";
  const detailItems: DetailItem[] = [
    {
      icon: CalendarHeart,
      label: "Date",
      value: "Saturday, 15 June 2030"
    },
    {
      icon: Building2,
      label: "Venue",
      value: venue.name,
      description: "The ceremony and reception will both take place at this venue."
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Fictional demo venue - no real address"
    },
    {
      icon: Clock,
      label: "Time",
      value: "14:00 - 23:30",
      description: (
        <>
          See the <a href="#schedule">schedule</a> below for more details.
        </>
      )
    },
    {
      icon: Shirt,
      label: "Dress Code",
      value: "Formal",
      description:
        "To maintain a beautiful, cohesive look for our special day, we ask guests to avoid wearing solid white, blue, or yellow."
    },
    {
      icon: Wine,
      label: "Beverages",
      value: "Hosted Bar Tab",
      description:
        "To celebrate with you, we've provided a hosted bar tab for selected beverages. Once the tab has been reached, or for beverages not included, drinks may be purchased at the cash bar."
    },
    {
      icon: Car,
      label: "Parking Information",
      value: "For Guests Who Are Driving",
      description:
        "Please note that the venue provides secure on-site parking with dedicated security personnel."
    }
  ];

  return (
    <SectionShell
      id="venue"
      eyebrow="Join Us"
      title="Wedding Details"
      intro="Everything you need to know for the ceremony and reception, gathered into one graceful place."
      className="bg-powder/35"
    >
      <div className="venue-feature">
        <div className="venue-feature__copy">
          <div className="venue-feature__heading">
            <h3>
              <span>Ceremony & Reception</span>
              <span>Information</span>
            </h3>
          </div>
          <div className="venue-feature__details">
            {detailItems.map(({ icon: Icon, label, value, description }) => (
              <article key={label}>
                <span className="venue-feature__detail-icon">
                  <Icon size={18} />
                </span>
                <div>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  {description ? <p>{description}</p> : null}
                </div>
              </article>
            ))}
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="venue-feature__map-link"
          >
            Demo venue <ExternalLink size={17} />
          </a>
        </div>
        <div className="venue-feature__images" aria-label="Sample Garden venue photos">
          <figure className="venue-feature__image venue-feature__image--ceremony">
            <img src={ceremonyHall} alt="Sample Garden ceremony hall with white chairs and floral arch" loading="lazy" decoding="async" />
          </figure>
          <figure className="venue-feature__image venue-feature__image--reception">
            <img src={receptionHall} alt="Sample Garden reception hall prepared for a wedding celebration" loading="lazy" decoding="async" />
          </figure>
        </div>
        <div className="venue-feature__map">
          <MapEmbed
            query={`${venue.name}, ${venue.receptionAddress}`}
            title={`Map showing ${venue.name}`}
            className="venue-feature__map-frame"
          />
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="venue-feature__map-link venue-feature__map-link--mobile"
        >
          Demo venue <ExternalLink size={17} />
        </a>
      </div>
    </SectionShell>
  );
}
