import { useEffect } from "react";
import Lenis from "lenis";

import "./App.css";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Menu } from "./components/Menu";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { setLenis } from "./utils/scroll";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.11,
      smoothWheel: true,
    });

    setLenis(lenis);

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream text-bark">
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Menu />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;