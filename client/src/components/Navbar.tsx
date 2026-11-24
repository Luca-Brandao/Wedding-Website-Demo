import { useEffect, useState } from "react";

const links = [
  ["Home", "home"],
  ["Our Story", "story"],
  ["Details", "venue"],
  ["Schedule", "schedule"],
  ["Accommodation", "accommodation"],
  ["Gifts", "gifts"],
  ["Gallery", "gallery"],
  ["RSVP", "rsvp"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const sectionAnchor = window.scrollY + Math.min(window.innerHeight * 0.38, 340);
      const sections = links
        .map(([, id]) => document.getElementById(id))
        .filter((element): element is HTMLElement => Boolean(element));

      const current = sections.reduce((selected, section) => {
        if (section.offsetTop <= sectionAnchor) return section;
        return selected;
      }, sections[0]);

      if (current?.id) setActive(current.id);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const navItems = (
    <>
      {links.map(([label, id]) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={() => setOpen(false)}
          className={`rounded-full px-3 py-2 text-sm transition ${
            active === id ? "bg-steel text-white shadow-glow" : "text-ink/75 hover:bg-powder/45 hover:text-ink"
          }`}
        >
          {label}
        </a>
      ))}
    </>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Wedding website navigation"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-powder/70 bg-white/85 px-4 py-3 shadow-soft backdrop-blur-xl"
      >
        <a href="#home" className="font-display text-2xl font-semibold text-ink">
          A <span className="text-gold">&</span> T
        </a>
        <div className="hidden items-center gap-1 lg:flex">{navItems}</div>
        <button
          className={`mobile-menu-button ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>
      <div id="mobile-navigation" className={`mobile-navigation ${open ? "is-open" : ""}`} inert={!open}>
        {navItems}
      </div>
    </header>
  );
}
