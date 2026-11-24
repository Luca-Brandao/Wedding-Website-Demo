import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CakeSlice, Clock3, Disc3, DoorOpen, Gem, Sparkles, Utensils } from "lucide-react";
import { SectionShell } from "../components/SectionShell";
import type { ScheduleItem } from "../types";

const scheduleIcons = {
  "Guests Arrive": Clock3,
  Ceremony: Gem,
  "Canapés & Cake Cutting": CakeSlice,
  "Guests to Move Into Reception Hall": DoorOpen,
  Dinner: Utensils,
  "Dance Floor Open": Disc3,
  "Strictly End": Sparkles
};

const scheduleItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: "easeOut",
      staggerChildren: 0.08
    }
  }
};

const scheduleChildVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.36, ease: "easeOut" }
  }
};

const scheduleIconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 24 }
  }
};

export function Schedule({ items }: { items: ScheduleItem[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="schedule"
      eyebrow="Wedding Day"
      title="Schedule"
      intro="A gentle outline of the celebration, from guest arrival through to the final send-off."
      className="bg-petal/45"
    >
      <div className="schedule-timeline mx-auto max-w-3xl">
        {items.map((item, index) => (
          <motion.div
            key={`${item.time}-${item.title}`}
            className="schedule-timeline__item grid grid-cols-[4.6rem_2.75rem_minmax(0,1fr)] items-start gap-3 sm:grid-cols-[5.5rem_3rem_minmax(0,1fr)] sm:gap-5"
            variants={scheduleItemVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.36 }}
          >
            <motion.div
              className="schedule-timeline__time pt-5 text-right font-display text-xl font-semibold leading-none text-steel sm:pt-6 sm:text-2xl"
              variants={scheduleChildVariants}
            >
              {item.time}
            </motion.div>
            <div className="schedule-timeline__spine relative flex self-stretch justify-center pt-3 sm:pt-4">
              {index !== items.length - 1 && (
                <motion.span
                  className="schedule-timeline__line schedule-timeline__line--after absolute bottom-0 top-[2.125rem] w-0.5 rounded-full bg-steel/45 sm:top-[2.375rem]"
                  aria-hidden="true"
                  initial={reduceMotion ? false : { opacity: 0.35, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: reduceMotion ? 0 : 0.56, ease: "easeOut", delay: 0.12 }}
                  style={{ transformOrigin: "50% 0%" }}
                />
              )}
              {index !== 0 && (
                <motion.span
                  className="schedule-timeline__line schedule-timeline__line--before absolute top-0 h-[2.125rem] w-0.5 rounded-full bg-steel/45 sm:h-[2.375rem]"
                  aria-hidden="true"
                  initial={reduceMotion ? false : { opacity: 0.35, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: reduceMotion ? 0 : 0.38, ease: "easeOut" }}
                  style={{ transformOrigin: "50% 0%" }}
                />
              )}
              <motion.span
                className="schedule-timeline__icon relative z-10 grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-white text-steel shadow-soft ring-4 ring-petal"
                variants={scheduleIconVariants}
              >
                {(() => {
                  const Icon = scheduleIcons[item.title as keyof typeof scheduleIcons] ?? Sparkles;
                  return <Icon size={20} strokeWidth={1.9} aria-hidden="true" />;
                })()}
              </motion.span>
            </div>
            <motion.div className="schedule-timeline__content pb-8 sm:pb-9" variants={scheduleChildVariants}>
              <article className="schedule-timeline__card rounded-3xl border border-gold/35 bg-white/90 p-4 shadow-soft sm:p-5">
                <p className="font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">{item.title}</p>
                <p className="mt-2 text-ink/68">{item.details}</p>
              </article>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
