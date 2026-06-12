"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { scrollState, lenisRef } from "@/lib/scroll";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ({ progress, velocity }) => {
      scrollState.progress = progress;
      scrollState.velocity = velocity;
    });

    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null;
}
