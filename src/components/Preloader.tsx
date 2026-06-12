"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const DURATION = 1800;

export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      // ease-out so the counter decelerates near 100
      const eased = 1 - Math.pow(1 - t, 3);
      setPct(Math.round(eased * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-between bg-bg p-6 md:p-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="font-mono text-xs tracking-widest text-muted">
            <p>SHUN.PROG — PERSONAL ARCHIVE</p>
            <p className="mt-1">INITIALIZING EXHIBITION SPACE…</p>
          </div>
          <span className="font-display text-7xl font-bold tabular-nums md:text-9xl">
            {pct}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
