"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

type Props = {
  text: string;
  className?: string;
};

// characters come into focus one by one, driven by scroll position —
// reading pace and scrolling pace become the same thing
export default function ScrollRevealText({ text, className }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });

  const chars = Array.from(text);

  return (
    <p ref={ref} className={className}>
      {chars.map((char, i) => (
        <Char
          key={i}
          char={char}
          progress={scrollYProgress}
          range={[i / chars.length, Math.min(1, i / chars.length + 0.1)]}
        />
      ))}
    </p>
  );
}
