"use client";

import { useEffect, useState } from "react";
import { scrollState, lenisRef } from "@/lib/scroll";

const NAV = [
  { label: "WORKS", target: "#works" },
  { label: "JOURNAL", target: "#journal" },
  { label: "ABOUT", target: "#about" },
  { label: "CONTACT", target: "#contact" },
];

export default function Hud() {
  const [time, setTime] = useState("--:--:--");
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const updateClock = () =>
      setTime(
        new Date().toLocaleTimeString("ja-JP", {
          hour12: false,
          timeZone: "Asia/Tokyo",
        })
      );
    updateClock();
    const clock = setInterval(updateClock, 1000);

    let frame: number;
    const poll = () => {
      const next = Math.round(scrollState.progress * 100);
      setPct((prev) => (prev === next ? prev : next));
      frame = requestAnimationFrame(poll);
    };
    frame = requestAnimationFrame(poll);

    return () => {
      clearInterval(clock);
      cancelAnimationFrame(frame);
    };
  }, []);

  const jumpTo = (target: string) => {
    lenisRef.current?.scrollTo(target, { duration: 1.6 });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-start justify-between p-6 font-mono text-[11px] tracking-[0.2em] md:p-8">
        <button
          onClick={() => lenisRef.current?.scrollTo(0, { duration: 1.6 })}
          className="text-left leading-relaxed"
          data-cursor
        >
          <span className="block font-bold text-ink">SHUN.PROG</span>
          <span className="block text-muted">CREATIVE DEVELOPER</span>
        </button>
        <nav className="flex flex-col items-end gap-1 md:flex-row md:gap-8">
          {NAV.map((item, i) => (
            <button
              key={item.label}
              onClick={() => jumpTo(item.target)}
              className="group flex items-baseline gap-2 text-muted transition-colors hover:text-ink"
              data-cursor
            >
              <span className="text-[9px] text-accent">0{i + 1}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <footer className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex items-end justify-between p-6 font-mono text-[11px] tracking-[0.2em] text-muted md:p-8">
        <p className="hidden leading-relaxed md:block">
          35.6762° N, 139.6503° E
          <br />
          TOKYO, JAPAN
        </p>
        <p className="leading-relaxed md:text-right">
          JST {time}
          <br />
          SCROLL {String(pct).padStart(3, "0")}%
        </p>
      </footer>

      <div className="pointer-events-none fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 md:block">
        <p className="font-mono text-[10px] tracking-[0.4em] text-muted [writing-mode:vertical-rl]">
          SCROLL TO EXPLORE ↓
        </p>
      </div>
    </>
  );
}
