"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lenisRef } from "@/lib/scroll";

const SCROLL_NAV = [
  { label: "About", target: "#about" },
  { label: "Contact", target: "#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const jumpTo = (target: string | number) => {
    if (isHome) {
      lenisRef.current?.scrollTo(target, { duration: 1.4 });
    } else {
      window.location.href = `/${target}`;
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="font-serif text-xl italic tracking-tight">
          shun.
        </Link>
        <nav className="flex items-center gap-5 text-[13px] text-muted md:gap-8">
          <Link
            href="/projects"
            className="transition-colors hover:text-ink"
          >
            Projects
          </Link>
          {SCROLL_NAV.map((item) => (
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
