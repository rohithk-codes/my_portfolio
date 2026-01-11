import { Suspense, lazy } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

const ComputersCanvas = lazy(() => import("@/components/canvas/computer"))

export function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "https://drive.google.com/uc?export=download&id=1LRtHMcKI-XCsZU3v_oZiMYg9_U6QlJvs"
    link.download = "Rohith_Krishnan_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[radial-gradient(circle_at_top_right,oklch(0.65_0.25_320_/_0.15),transparent_40%),radial-gradient(circle_at_bottom_left,oklch(0.7_0.2_200_/_0.15),transparent_40%)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-float">
            <div className="text-center md:text-left">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tighter leading-none">
                Hi, I'm <span className="text-gradient">Rohith Krishnan</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-medium text-foreground/80 mb-8 tracking-tight">
                Crafting Next-Gen Digital Experiences
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto md:mx-0 text-pretty leading-relaxed">
                Full-stack developer architecting beautiful, functional, and user-centered solutions with a focus on premium design and clean code.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start items-center mb-12">
                <Button variant="neon" size="lg" className="px-10" asChild>
                  <a href="#portfolio">View Projects</a>
                </Button>
                <Button variant="neon-outline" size="lg" className="px-10" onClick={handleDownloadResume}>
                  My Resume
                </Button>
              </div>

              <div className="flex justify-center md:justify-start space-x-8 mb-16">
                {[
                  { icon: Github, href: "https://github.com/rohithk-codes" },
                  { icon: Linkedin, href: "http://www.linkedin.com/in/rohithkrishnan1" },
                  { icon: Mail, href: "mailto:rohithk.krishnan@gmail.com" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="p-3 rounded-full glass hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 group"
                  >
                    <social.icon className="h-6 w-6 text-foreground/60 group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 w-full h-[400px] md:h-[600px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-transparent blur-[100px] -z-10" />
            <Suspense fallback={
              <div className="w-full h-full flex flex-col items-center justify-center glass rounded-3xl border border-white/10 overflow-hidden relative">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink animate-pulse" />
                <span className="text-foreground/40 font-mono tracking-widest animate-pulse">SYSTEM_INITIALIZING</span>
              </div>
            }>
              <ComputersCanvas />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce glass p-2 rounded-full cursor-pointer hover:bg-white/5 transition-colors">
        <ArrowDown className="h-6 w-6 text-foreground/60" />
      </div>
    </section>
  )
}



