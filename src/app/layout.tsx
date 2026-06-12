import type { Metadata, Viewport } from "next";
import {
  Syne,
  Space_Grotesk,
  IBM_Plex_Mono,
  Zen_Kaku_Gothic_New,
} from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-zen",
  preload: false,
});

export const metadata: Metadata = {
  title: "SHUN — Creative Developer",
  description:
    "Software engineer & creative developer based in Tokyo. コードで未来の手触りをつくる。",
  openGraph: {
    title: "SHUN — Creative Developer",
    description: "Software engineer & creative developer based in Tokyo.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${syne.variable} ${grotesk.variable} ${plexMono.variable} ${zenKaku.variable} h-full antialiased`}
    >
      <body className="noise min-h-full bg-bg font-body text-ink">
        {children}
      </body>
    </html>
  );
}
