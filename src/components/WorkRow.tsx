"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import type { Work } from "@/data/works";

// list row with a colour-swatch preview that follows the cursor —
// stands in for a project screenshot until real images land
export default function WorkRow({ work }: { work: Work }) {
  const wip = work.status === "wip";
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const px = useSpring(x, { stiffness: 250, damping: 28 });
  const py = useSpring(y, { stiffness: 250, damping: 28 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left + 28);
    y.set(e.clientY - rect.top - 80);
  };

  const row = (
    <div className="group grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-line py-10 md:grid-cols-[6rem_1fr_auto] md:py-12">
      <span className="text-xs text-muted">{work.index}</span>
      <div>
        <h3
          className={`font-serif text-3xl tracking-tight transition-colors duration-300 md:text-5xl ${
            wip ? "text-muted/60" : "group-hover:text-accent"
          }`}
        >
          {work.title}
          {wip && (
            <em className="ml-3 text-xl md:text-2xl">— coming soon</em>
          )}
        </h3>
        {work.description && (
          <p className="mt-3 max-w-md font-jp text-sm leading-relaxed text-muted">
            {work.description}
          </p>
        )}
      </div>
      <div className="col-start-2 mt-3 text-xs leading-relaxed text-muted md:col-start-3 md:mt-0 md:text-right">
        <p>{work.year}</p>
        <p className="mt-1">{wip ? work.role : work.tags.join(" / ")}</p>
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className="relative"
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {work.url ? (
        <a href={work.url} target="_blank" rel="noreferrer">
          {row}
        </a>
      ) : (
        row
      )}

      {!wip && work.gradient && (
        <motion.div
          className="pointer-events-none absolute left-0 top-0 z-10 hidden h-36 w-56 items-end overflow-hidden rounded-xl p-4 [@media(hover:hover)]:flex"
          style={{ x: px, y: py, background: work.gradient }}
          initial={false}
          animate={{
            opacity: hover ? 1 : 0,
            scale: hover ? 1 : 0.85,
            rotate: hover ? -2 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-serif text-sm italic text-ink/70">
            {work.title} — {work.year}
          </span>
        </motion.div>
      )}
    </div>
  );
}
