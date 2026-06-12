import CanvasRoot from "@/components/CanvasRoot";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Hud from "@/components/Hud";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Works from "@/components/sections/Works";
import Journal from "@/components/sections/Journal";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <Cursor />
      <CanvasRoot />
      <div className="gridlines" />
      <Hud />
      <main className="relative z-10">
        <Hero />
        <About />
        <Works />
        <Journal />
        <Contact />
      </main>
    </>
  );
}
