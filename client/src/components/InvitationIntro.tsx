import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

const InvitationFlorals = lazy(() => import("./InvitationFlorals"));

type Phase = "sealed" | "opening" | "card" | "leaving";

const INTRO_HAS_LOADED_KEY = "alex-taylor-invitation-intro-has-loaded";

interface InvitationIntroProps {
  onComplete: () => void;
}

function hasLoadedIntroBefore() {
  try {
    return window.localStorage.getItem(INTRO_HAS_LOADED_KEY) === "true";
  } catch {
    return false;
  }
}

export function InvitationIntro({ onComplete }: InvitationIntroProps) {
  const [phase, setPhase] = useState<Phase>("sealed");
  const [canSkipIntro, setCanSkipIntro] = useState(hasLoadedIntroBefore);
  const reduceMotion = useReducedMotion();
  const sealRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    sealRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const hadLoadedIntro = hasLoadedIntroBefore();
    setCanSkipIntro(hadLoadedIntro);

    try {
      window.localStorage.setItem(INTRO_HAS_LOADED_KEY, "true");
    } catch {
      // Private browsing or strict storage settings can block this; the intro still works without it.
    }
  }, []);

  const openInvitation = () => {
    if (phase !== "sealed") return;

    if (reduceMotion) {
      setPhase("card");
      return;
    }

    setPhase("opening");
    window.setTimeout(() => setPhase("card"), 1450);
  };

  const enterWebsite = () => {
    if (reduceMotion) {
      onComplete();
      return;
    }

    setPhase("leaving");
    window.setTimeout(onComplete, 700);
  };

  return (
    <motion.div
      className="invitation-intro"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "leaving" ? 0 : 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.65 }}
      role="dialog"
      aria-modal="true"
      aria-label="Wedding invitation"
    >
      <div className="invitation-intro__wash" aria-hidden="true" />

      <AnimatePresence mode="wait">
        {phase === "sealed" || phase === "opening" ? (
          <motion.div
            key="envelope"
            className="invitation-envelope-stage"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30, scale: 0.97 }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
          >
            <p className="invitation-kicker">A special invitation for you</p>
            <div
              className={`invitation-envelope${phase === "opening" ? " is-opening" : ""}`}
              aria-live="polite"
            >
              <span className="invitation-envelope__lining" aria-hidden="true" />
              <span className="invitation-envelope__letter" aria-hidden="true" />
              <span className="invitation-envelope__front" aria-hidden="true" />
              <span className="invitation-envelope__flap" aria-hidden="true" />
              <button
                ref={sealRef}
                type="button"
                className="invitation-envelope__seal"
                onClick={openInvitation}
                disabled={phase !== "sealed"}
                aria-label="Open wedding invitation"
              >
                A & T
              </button>
            </div>
            {canSkipIntro && phase === "sealed" && (
              <button type="button" className="invitation-skip-button" onClick={enterWebsite}>
                Skip intro
              </button>
            )}
          </motion.div>
        ) : (
          <motion.article
            key="card"
            className="invitation-card"
            initial={{ opacity: 0, y: 126, scale: reduceMotion ? 1 : 0.48 }}
            animate={
              reduceMotion
                ? { opacity: 1, y: 0, scale: 1 }
                : {
                    opacity: [0, 1, 1],
                    y: [126, 46, 0],
                    scale: [0.48, 0.48, 1]
                  }
            }
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: reduceMotion ? 0 : 1.45, times: [0, 0.54, 1], ease: [0.19, 1, 0.22, 1] }}
          >
            <Suspense fallback={null}>
              <InvitationFlorals autoplay={!reduceMotion} />
            </Suspense>

            <div className="invitation-card__content">
              <p className="invitation-card__eyebrow">
                You are warmly invited to celebrate the wedding of
              </p>
              <h1>
                Alex <span>&amp;</span> Taylor
              </h1>
              <div className="invitation-card__rule" aria-hidden="true">
                <span />
              </div>
              <time dateTime="2030-06-15">15 June 2030</time>
              <p className="invitation-card__venue">
                Willowmere Garden Estate
                <span>Rosewood Valley</span>
              </p>
              <button type="button" className="invitation-enter-button" onClick={enterWebsite}>
               - Enter Website -
              </button>
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
