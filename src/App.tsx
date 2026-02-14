import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { MovingBackground } from "@/components/ui/background";
import { LoadingScreen } from "@/components/ui/loader";

const Hero = lazy(() => import("./pages/hero").then(module => ({ default: module.Hero })));
const About = lazy(() => import("./pages/about").then(module => ({ default: module.About })));
const Portfolio = lazy(() => import("./pages/portfolio").then(module => ({ default: module.Portfolio })));
const Skills = lazy(() => import("./pages/skills").then(module => ({ default: module.Skills })));
const Testimonials = lazy(() => import("./pages/testimonials").then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import("./pages/contact").then(module => ({ default: module.Contact })));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Wait for critical resources if needed, but remove manual 1.5s delay
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <main className="min-h-screen relative bg-[#020617]">
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <MovingBackground />
      <Navigation />

      {/* Hero section stays animated as requested */}
      <Suspense fallback={<div className="min-h-[80vh] bg-[#020617]" />}>
        <Hero />
      </Suspense>

      {/* Non-hero sections have animations disabled on mobile for performance */}
      <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
        <Suspense fallback={<div className="min-h-[60vh] bg-[#020617]" />}>
          <About />
        </Suspense>

        <Suspense fallback={<div className="min-h-[80vh] bg-[#020617]" />}>
          <Portfolio />
        </Suspense>

        <Suspense fallback={<div className="min-h-[60vh] bg-[#020617]" />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<div className="min-h-[60vh] bg-[#020617]" />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<div className="min-h-[60vh] bg-[#020617]" />}>
          <Contact />
        </Suspense>
      </MotionConfig>
    </main>
  );
}
