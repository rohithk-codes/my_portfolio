import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { MovingBackground } from "@/components/ui/background";
import { LoadingScreen } from "@/components/ui/loader";
import { SectionSkeleton, SkillsSkeleton } from "@/components/section-skeletons";

// Eager load top sections for instant visibility
import { Hero } from "./pages/hero";
import { About } from "./pages/about";

// Keep later sections lazy
const Portfolio = lazy(() => import("./pages/portfolio").then(module => ({ default: module.Portfolio })));
const Skills = lazy(() => import("./pages/skills").then(module => ({ default: module.Skills })));
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
    // Wait for critical resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Small buffer to ensure components are ready to paint

    const handleLoad = () => {
      clearTimeout(timer);
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <main className="min-h-screen relative bg-[#020617]">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <MovingBackground />
      <Navigation />

      {/* Top sections are now pre-loaded */}
      <Hero />

      <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
        <About />

        <Suspense fallback={<SectionSkeleton />}>
          <Portfolio />
        </Suspense>

        <Suspense fallback={<SkillsSkeleton />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </MotionConfig>
    </main>
  );
}
