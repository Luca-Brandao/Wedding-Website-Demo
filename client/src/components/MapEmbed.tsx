type Props = { query: string; title: string; className?: string };

export function MapEmbed({ title, className = "" }: Props) {
  return <div className={`map-frame ${className}`} role="img" aria-label={title}>
    <p style={{ padding: "2rem", textAlign: "center" }}>Map disabled in this fictional portfolio demo.</p>
  </div>;
}
