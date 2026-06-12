"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// hidden on coarse pointers via media query; listeners are also never
// attached there, so the dots just stay parked off-screen
const TOUCH_HIDDEN = "[@media(pointer:coarse)]:hidden";

export default function Cursor() {
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element | null;
      setHovering(!!target?.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[99] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ${TOUCH_HIDDEN}`}
        style={{ x, y }}
      />
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/60 mix-blend-difference ${TOUCH_HIDDEN}`}
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 56 : 28,
          height: hovering ? 56 : 28,
          opacity: hovering ? 1 : 0.7,
        }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}
