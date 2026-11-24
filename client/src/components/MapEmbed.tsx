type Props = { query: string; title: string; className?: string };

export function MapEmbed({ title, className = "" }: Props) {
  return <div className={`map-frame ${className}`} role="img" aria-label={`${title} — illustrative venue plan, not directions`}>
    <svg viewBox="0 0 640 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="640" height="360" fill="#e8ede6" />
      <path d="M-20 285Q180 250 320 285T670 250" fill="none" stroke="#fffaf0" strokeWidth="42" />
      <path d="M320 290V180H455" fill="none" stroke="#fffaf0" strokeWidth="22" />
      <g fill="#afc1aa"><circle cx="75" cy="65" r="40"/><circle cx="170" cy="115" r="32"/><circle cx="550" cy="60" r="38"/><circle cx="570" cy="190" r="29"/><circle cx="70" cy="200" r="24"/></g>
      <rect x="355" y="90" width="145" height="92" rx="8" fill="#8b9fa9" stroke="#fffaf0" strokeWidth="5"/>
      <path d="M190 168V105L250 65 310 105V168Z" fill="#b19b78" stroke="#fffaf0" strokeWidth="5"/>
      <rect x="170" y="305" width="135" height="40" rx="7" fill="#b7c2bd"/>
      <g fill="#344b52" fontFamily="Georgia,serif" textAnchor="middle"><text x="250" y="205" fontSize="20">Garden chapel</text><text x="427" y="211" fontSize="20">The Glasshouse</text><text x="237" y="333" fontSize="16">Guest parking</text><text x="320" y="32" fontSize="17">An illustrated guide to the celebration</text></g>
    </svg>
  </div>;
}
