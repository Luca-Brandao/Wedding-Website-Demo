import type { GalleryImage, WeddingData } from "../types";
import { SectionShell } from "../components/SectionShell";

type Props = {
  story: WeddingData["story"];
  images: GalleryImage[];
};

function paragraphs(text: string) {
  return text.split("\n\n").filter(Boolean);
}

export function Story({ story, images }: Props) {
  const howWeMetImage = images[1];
  const mobileOpenerImage = images[2];
  const howWeMetSupportingImages = [images[12], images[14]].filter(Boolean) as GalleryImage[];
  const proposalImage = images[9];
  const proposalSupportingImages = [images[19], images[22]].filter(Boolean) as GalleryImage[];

  return (
    <SectionShell
      id="story"
      eyebrow="How It All Began"
      title="Our Story"
      intro="From a bold first message to a heart-warming proposal, this is the story that brought us here."
      className="bg-linen"
    >
      <div className="story-editorial">
        <div className="story-opener-divider" aria-hidden="true">
          <span />
        </div>
        {mobileOpenerImage ? (
          <figure className="story-mobile-opener-image">
            <img src={mobileOpenerImage.src} alt={mobileOpenerImage.alt} loading="lazy" decoding="async" />
          </figure>
        ) : null}
        <article className="story-panel">
          <div className="story-panel__media">
            <div className="story-panel__image">
              <img src={howWeMetImage?.src} alt={howWeMetImage?.alt || "Alex and Taylor"} loading="lazy" />
            </div>
            <div className="story-panel__supporting" aria-label="More engagement photos">
              {howWeMetSupportingImages.map((image) => (
                <img key={image.id} src={image.src} alt={image.alt} loading="lazy" />
              ))}
            </div>
          </div>
          <div className="story-panel__copy">
            <p className="story-panel__eyebrow">How We Met</p>
            <h3>A post, a message, a spark.</h3>
            <div className="story-panel__body">
              {paragraphs(story.howWeMet).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>

        <article className="story-panel story-panel--reverse">
          <div className="story-panel__copy">
            <p className="story-panel__eyebrow">The Proposal</p>
            <h3>The easiest yes.</h3>
            <div className="story-panel__body">
              {paragraphs(story.proposal).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="story-panel__media">
            <div className="story-panel__image">
              <img src={proposalImage?.src} alt={proposalImage?.alt || "Alex and Taylor"} loading="lazy" />
            </div>
            <div className="story-panel__supporting" aria-label="More proposal story photos">
              {proposalSupportingImages.map((image) => (
                <img key={image.id} src={image.src} alt={image.alt} loading="lazy" />
              ))}
            </div>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
