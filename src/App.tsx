import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Hero } from "./pages/hero";
import { About } from "./pages/about";
import { Portfolio } from "./pages/portfolio";
import { Skills } from "./pages/skills";
import { Testimonials } from "./pages/testimonials";
import { Contact } from "./pages/contact";
import { Navigation } from "@/components/navigation";
import { MovingBackground } from "@/components/ui/background";
import { LoadingScreen } from "@/components/ui/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen relative bg-[#020617]">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <MovingBackground />
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
