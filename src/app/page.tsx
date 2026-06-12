import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import VelocityMarquee from "@/components/VelocityMarquee";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Works from "@/components/sections/Works";
import Journal from "@/components/sections/Journal";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <VelocityMarquee
          text="Portfolio — Two Thousand Twenty-Six"
          className="stroke-text border-t border-line py-10 font-serif text-[11vw] italic leading-none md:py-14 md:text-[7vw]"
        />
        <About />
        <Works />
        <Journal />
        <VelocityMarquee
          text="Say hello — Let's talk"
          baseVelocity={1.6}
          className="stroke-text border-t border-line py-10 font-serif text-[11vw] italic leading-none md:py-14 md:text-[7vw]"
        />
        <Contact />
      </main>
    </>
  );
}
