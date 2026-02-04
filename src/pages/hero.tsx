import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiRedux,
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiTypescript,
  SiAmazonwebservices,
} from "react-icons/si"

export function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "https://drive.google.com/uc?export=download&id=1LRtHMcKI-XCsZU3v_oZiMYg9_U6QlJvs"
    link.download = "Rohith_Krishnan_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Galaxy Layers
  const innerSkills = [
    { icon: SiReact, color: "text-[#61DAFB]", delay: "0s" },
    { icon: SiTypescript, color: "text-[#3178C6]", delay: "-3.75s" },
    { icon: SiNodedotjs, color: "text-[#339933]", delay: "-7.5s" },
    { icon: SiJavascript, color: "text-[#F7DF1E]", delay: "-11.25s" },
  ]

  const middleSkills = [

    { icon: SiTailwindcss, color: "text-[#06B6D4]", delay: "-5s" },
    { icon: SiMongodb, color: "text-[#47A248]", delay: "-10s" },
    { icon: SiPostgresql, color: "text-[#4169E1]", delay: "-15s" },
    { icon: SiRedux, color: "text-[#764ABC]", delay: "-20s" },
  ]

  const outerSkills = [
    { icon: SiAmazonwebservices, color: "text-[#FF9900]", delay: "0s" },
    { icon: SiGithub, color: "text-white", delay: "-10s" },


  ]

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[radial-gradient(circle_at_top_right,oklch(0.65_0.25_320_/_0.15),transparent_40%),radial-gradient(circle_at_bottom_left,oklch(0.7_0.2_200_/_0.15),transparent_40%)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1 animate-float">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tighter leading-none">
                Hi, I'm <span className="text-gradient">Rohith Krishnan</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-medium text-foreground/80 mb-8 tracking-tight">
                Crafting Next-Gen Digital Experiences
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                Full-stack developer architecting beautiful, functional, and user-centered solutions with a focus on premium design and clean code.
              </p>

              {/* Achievements Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 mb-12">
                {[
                  { label: "Projects", value: "10+" },
                  { label: "Clients", value: "5+" },
                  { label: "Years Exp", value: "1+" },
                ].map((stat, i) => (
                  <div key={i} className="glass p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                    <div className="text-2xl md:text-3xl font-black text-gradient mb-1 group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-12">
                <Button variant="neon" size="lg" className="px-10" asChild>
                  <a href="#portfolio">View Projects</a>
                </Button>
                <Button variant="neon-outline" size="lg" className="px-10" onClick={handleDownloadResume}>
                  My Resume
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6 mb-16">
                {[
                  { icon: SiGithub, href: "https://github.com/rohithk-codes" },
                  { icon: SiLinkedin, href: "http://www.linkedin.com/in/rohithkrishnan1" },
                  { icon: SiGmail, href: "mailto:rohithkrishnan.dev@gmail.com" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 group"
                  >
                    <social.icon className="h-6 w-6 text-foreground/60 group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>


            </div>
          </div>

          {/* Galaxy Side */}
          <div className="order-1 lg:order-2 w-full h-[500px] lg:h-[650px] relative flex items-center justify-center pt-24">

            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-transparent blur-[120px] -z-10" />

            <div className="relative w-full h-full flex items-center justify-center">
              {/* Central Core Glow */}
              <div className="absolute w-20 h-20 bg-neon-purple rounded-full blur-[40px] animate-pulse-core z-0 opacity-50" />
              <div className="absolute w-32 h-32 bg-neon-cyan rounded-full blur-[60px] animate-pulse-core z-0 opacity-30" style={{ animationDelay: '-2s' }} />

              {/* Tech Arsenal Circular Core */}
              <div className="relative z-10 flex flex-col items-center justify-center">

                <div className="relative group cursor-default">
                  {/* Multiple Glow Layers for Depth */}
                  <div className="absolute -inset-8 bg-neon-purple rounded-full blur-3xl opacity-20 animate-pulse" />
                  <div className="absolute -inset-4 bg-neon-cyan rounded-full blur-2xl opacity-20 animate-pulse" style={{ animationDelay: '-1s' }} />

                  {/* The circular core */}
                  <div className="relative  flex items-end w-32 h-32 md:w-40 md:h-40 glass rounded-full border border-white/20 bg-black/60 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] transition-shadow duration-700 overflow-hidden">
                    {/* Inner texture/shine */}
                    <img
                      src="/profile.webp"
                      alt="Tech Arsenal"
                      className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 via-transparent to-neon-cyan/20 animate-rotate-slow" />

                    <div className="relative text-center p-4 ">
                      <span className="block text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-gradient filter drop-shadow-[0_0_5px_rgba(168,85,247,0.8)] leading-tight">
                        Tech<br />Arsenal
                      </span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Inner Ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {innerSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="absolute animate-orbit-inner"
                    style={{ animationDelay: skill.delay, willChange: "transform" }}
                  >
                    <div className="glass p-2.5 rounded-xl border border-white/10 shadow-lg group bg-[#020617]/40 backdrop-blur-md pointer-events-auto">
                      <skill.icon className={`h-5 w-5 lg:h-6 lg:w-6 ${skill.color} drop-shadow-[0_0_8px_currentColor]`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Middle Ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {middleSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="absolute animate-orbit-middle"
                    style={{ animationDelay: skill.delay, willChange: "transform" }}
                  >
                    <div className="glass p-3 rounded-2xl border border-white/10 shadow-lg group bg-[#020617]/40 backdrop-blur-md pointer-events-auto">
                      <skill.icon className={`h-6 w-6 lg:h-7 lg:w-7 ${skill.color} drop-shadow-[0_0_8px_currentColor]`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Outer Ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {outerSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="absolute animate-orbit-outer"
                    style={{ animationDelay: skill.delay, willChange: "transform" }}
                  >
                    <div className="glass p-3.5 rounded-2xl border border-white/10 shadow-lg group bg-[#020617]/40 backdrop-blur-md pointer-events-auto">
                      <skill.icon className={`h-7 w-7 lg:h-8 lg:w-8 ${skill.color} drop-shadow-[0_0_8px_currentColor]`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce glass p-2 rounded-full cursor-pointer hover:bg-white/5 transition-colors">
        <ArrowDown className="h-6 w-6 text-foreground/60" />
      </div>
    </section>
  )
}
