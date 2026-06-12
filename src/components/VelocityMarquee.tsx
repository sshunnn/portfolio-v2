"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "motion/react";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return min + ((((v - min) % range) + range) % range);
};

type Props = {
  text: string;
  baseVelocity?: number;
  className?: string;
};

// endless strip that drifts slowly, then accelerates and flips direction
// with the user's scroll velocity
export default function VelocityMarquee({
  text,
  baseVelocity = 1.2,
  className = "",
}: Props) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });
  const direction = useRef(-1);

  useAnimationFrame((t, delta) => {
    const vf = velocityFactor.get();
    if (vf < 0) direction.current = 1;
    else if (vf > 0) direction.current = -1;

    let moveBy = direction.current * baseVelocity * (delta / 1000);
    moveBy += moveBy * Math.abs(vf);
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      aria-hidden
    >
      <motion.div className="inline-flex" style={{ x }}>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="block">
            {text}&nbsp;—&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
}
