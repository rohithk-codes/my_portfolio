import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import ThreeD from "@/components/3dscene"
export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-muted"
    >
      
  <ThreeD />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Hi, I'm <span className="text-primary">Rohith Krishnan</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty">
            Full-Stack Developer 
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            I create beautiful, functional, and user-centered digital experiences that solve real-world problems with
            clean code and thoughtful design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-3">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a href="https://github.com/rohithk-codes" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="http://www.linkedin.com/in/rohithkrishnan1" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="rohithk.krishnan@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}



