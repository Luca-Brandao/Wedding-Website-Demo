import { SectionShell } from "../components/SectionShell";

export function Rsvp() {
  return <SectionShell id="rsvp" eyebrow="Portfolio Demo" title="RSVP" intro="A presentation of the RSVP section, with no live form or external widget." className="rsvp-section">
    <div className="rsvp-experience"><div className="rsvp-widget-card"><div className="rsvp-closed-card" role="status">
      <span>Demonstration only</span><p>No guest information is collected or submitted. The original event and RSVP integration are not connected.</p>
    </div></div></div>
  </SectionShell>;
}
