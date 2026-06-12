"use client";

import { motion } from "motion/react";

// preloader (~2s) が捌けてから走る
const BASE_DELAY = 2.1;

function Line({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.1,
          delay: BASE_DELAY + delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center px-6 md:px-12">
      <motion.p
        className="mb-6 font-mono text-[11px] tracking-[0.3em] text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: BASE_DELAY, duration: 1 }}
      >
        ( 001 ) — INTRODUCTION
      </motion.p>

      <h1 className="font-display font-bold leading-[0.92] tracking-tight">
        <Line delay={0.05} className="text-[16vw] md:text-[12vw]">
          SHUN<span className="text-accent">.</span>
        </Line>
        <Line delay={0.18} className="text-[8.5vw] md:text-[6vw]">
          SOFTWARE ENGINEER
        </Line>
        <Line delay={0.31} className="text-[8.5vw] outline-text md:text-[6vw]">
          &amp; CREATIVE DEVELOPER
        </Line>
      </h1>

      <motion.div
        className="mt-10 flex flex-col gap-3 md:mt-14 md:flex-row md:items-end md:justify-between"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: BASE_DELAY + 0.55, duration: 1 }}
      >
        <p className="max-w-md font-jp text-sm leading-loose text-muted">
          コードで、未来の手触りをつくる。
          <br />
          Building tactile futures with code — based in Tokyo, Japan.
        </p>
        <p className="font-mono text-[11px] tracking-[0.25em] text-muted">
          ARCHIVE v2.0 / EST. 2026
        </p>
      </motion.div>
    </section>
  );
}
