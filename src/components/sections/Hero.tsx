"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import CanvasRoot from "@/components/CanvasRoot";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // text and pearl leave the viewport at different speeds while
  // dissolving — a gentle parallax exit
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      <div className="aurora" aria-hidden />

      <motion.div
        className="absolute inset-y-0 right-0 w-full opacity-60 md:left-1/3 md:w-auto md:opacity-100"
        style={{ y: blobY, scale: blobScale }}
      >
        <CanvasRoot />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.p
          className="label mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Shun — Software Engineer, Tokyo
        </motion.p>

        <h1 className="max-w-4xl font-serif text-[13vw] leading-[1.04] tracking-tight md:text-[6.6vw]">
          {[
            <>Crafting <em className="gradient-text">digital</em></>,
            <>experiences,</>,
            <>with <em>care</em>.</>,
          ].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "108%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.3 + i * 0.12, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-10 max-w-md font-jp text-sm leading-loose text-muted md:text-base"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: EASE }}
        >
          コードで、心地よい体験をつくる。
          ウェブの設計から、インタラクション、リアルタイムグラフィックスまで。
        </motion.p>
      </motion.div>

      <motion.p
        className="label absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        Scroll
      </motion.p>
    </section>
  );
}
