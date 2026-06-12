"use client";

import { lenisRef } from "@/lib/scroll";

const NAV = [
  { label: "Works", target: "#works" },
  { label: "Journal", target: "#journal" },
  { label: "About", target: "#about" },
  { label: "Contact", target: "#contact" },
];

export default function Header() {
  const jumpTo = (target: string | number) => {
    lenisRef.current?.scrollTo(target, { duration: 1.4 });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <button
          onClick={() => jumpTo(0)}
          className="font-serif text-xl italic tracking-tight"
        >
          shun.
        </button>
        <nav className="flex items-center gap-5 text-[13px] text-muted md:gap-8">
          {NAV.map((item) => (
            <button
              key={item.label}
              onClick={() => jumpTo(item.target)}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
