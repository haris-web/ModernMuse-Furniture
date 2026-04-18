"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function HeroHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const reduceMotion = useReducedMotion();
  const words = title.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.045, delayChildren: 0.12 },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <>
      <motion.h1
        className="font-display text-4xl md:text-5xl font-bold leading-tight text-white"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {words.map((w, i) => (
          <motion.span
            key={`${w}-${i}`}
            className="inline-block"
            variants={word}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              ease: "easeOut",
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="mt-4 max-w-md text-sm md:text-base text-white/70 leading-relaxed"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut", delay: 0.35 }}
      >
        {subtitle}
      </motion.p>
    </>
  );
}

