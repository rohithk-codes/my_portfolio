import { Hero } from "./pages/hero"
import { About } from "./pages/about"
import { Portfolio } from "./pages/portfolio"
import { Skills } from "./pages/skills"
import { Testimonials } from "./pages/testimonials"
import { Contact } from "./pages/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  )
}



 