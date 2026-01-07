import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import ThreeD from "@/components/3dscene"
import ComputersCanvas from "@/components/canvas/computer"
export function Hero() {
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "https://drive.google.com/file/d/1LRtHMcKI-XCsZU3v_oZiMYg9_U6QlJvs/view?usp=drive_link"
    link.download = "Rohith_Krishnan_Resume.pdf" // Name of the downloaded file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative bg-gradient-to-br from-background to-muted py-20 md:py-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
                Hi, I'm <span className="text-primary">Rohith Krishnan</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty">
                Full-Stack Developer 
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto md:mx-0 text-pretty">
                I create beautiful, functional, and user-centered digital experiences that solve real-world problems with
                clean code and thoughtful design.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12">
                {/* <Button size="lg" className="text-lg px-8 py-3">
                  View My Work
                </Button> */}
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent" onClick={handleDownloadResume}>
                  Download Resume
                </Button>
              </div>

              <div className="flex justify-center md:justify-start space-x-6 mb-16">
                <a href="https://github.com/rohithk-codes" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="http://www.linkedin.com/in/rohithkrishnan1" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:rohithk.krishnan@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 w-full h-full">
            <ComputersCanvas />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}



