"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoadFeedback() {
  const [open, setOpen] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = window.setTimeout(() => setOpen(false), 750);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center px-6"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
        >
          <motion.div
            className="w-full max-w-sm rounded-3xl border border-gray-200 bg-background/90 backdrop-blur p-7 shadow-lg"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between">
              <div className="font-display text-xl font-semibold text-foreground">
                Panto
              </div>
              <div
                className="h-6 w-6 rounded-full border-2 border-gold/30 border-t-gold animate-spin"
                aria-label="Loading"
                role="status"
              />
            </div>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Preparing a minimal, modern experience…
            </p>
            <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-light">
              <div className="h-full w-2/3 rounded-full bg-gold animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

