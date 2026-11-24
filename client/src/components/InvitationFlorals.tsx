export default function InvitationFlorals({ autoplay: _autoplay }: { autoplay: boolean }) {
  return <>{["top-left", "bottom-right"].map(position =>
    <svg key={position} className={`invitation-card__floral invitation-card__floral--${position}`} viewBox="0 0 200 200" aria-hidden="true">
      <path d="M25 185Q55 80 175 20M55 130Q10 90 45 65Q80 70 55 130M100 70Q105 15 150 25Q155 60 100 70" fill="none" stroke="#a6bcb3" strokeWidth="5" />
      <circle cx="88" cy="112" r="19" fill="#e6caca" /><circle cx="145" cy="52" r="15" fill="#eadcc5" />
    </svg>
  )}</>;
}
