import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Inter,
  Zen_Kaku_Gothic_New,
  Shippori_Mincho,
} from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen",
  preload: false,
});

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-shippori",
  preload: false,
});

export const metadata: Metadata = {
  title: "Shun — Software Engineer",
  description:
    "Software engineer based in Tokyo. コードで、心地よい体験をつくる。",
  openGraph: {
    title: "Shun — Software Engineer",
    description: "Software engineer based in Tokyo.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f3ec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${fraunces.variable} ${inter.variable} ${zenKaku.variable} ${shippori.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-sans text-ink">{children}</body>
    </html>
  );
}
