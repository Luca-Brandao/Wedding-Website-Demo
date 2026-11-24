import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  id: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  className?: string;
}>;

export function SectionShell({ id, eyebrow, title, intro, className = "", children }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={`scroll-mt-28 px-4 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px -10% 0px" }}
          transition={{ duration: reduceMotion ? 0 : 0.58, ease: "easeOut" }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.34em] text-steel">{eyebrow}</p>
          <h2 className="font-display text-4xl font-semibold text-ink sm:text-6xl">{title}</h2>
          {intro && <p className="mt-5 text-base leading-8 text-ink/68 sm:text-lg">{intro}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
