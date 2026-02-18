import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export function Portfolio() {
  const projects = [
    {
      title: "PepperPot - Food Ordering App",
      description:
        "A full-stack food ordering application built using the Repository and Service Layer patterns for clean architecture and scalability. Features include real-time order updates with WebSockets, secure Razorpay payment integration, dynamic menu browsing, cart management, and an admin dashboard for restaurant management.",
      image: "/pepper-pot.png",
      tags: [
        "Node.js",
        "React",
        "MongoDB",
        "Express.js",
        "WebSocket",
        "Razorpay",
        "JavaScript",
      ],
      liveUrl: "https://pepperpotrestaurant.com",
      githubUrl: "#",
    },
    {
      title: "Smart Agro - E-Commerce Platform ",
      description:
        "A full-featured agricultural e-commerce platform developed using the MVC architecture. Includes product catalog management, dynamic filtering and search, secure authentication, order processing, payment integration, and an admin dashboard for managing products, users, and sales.",
      image: "/smartagro.webp",
      tags: ["Node.js", "React", "MongoDB", "Express.js", "MVC"],
      liveUrl: "https://smartagro.store",
      githubUrl: "#",
    },

    {
      title: "CrackIt-Interview Preparation Platform",
      description:
        "A scalable interview preparation platform built using Repository and Service Layer patterns to ensure modular and maintainable backend architecture. Provides categorized questions, coding practice modules, progress tracking, and user authentication with a clean and responsive interface.",
      image: "/interview-prep.png",
      tags: ["Node.js", "React", "MongoDB", "Express.js"],
      liveUrl: "https://github.com/rohithk-codes/interview-preparation-app",
      githubUrl: "https://github.com/rohithk-codes/interview-preparation-app",
    },

    {
      title: "Gym Buddy — E-Commerce Platform",
      description:
        "A full-stack gym equipment e-commerce platform built using the MVC architecture. The backend was developed with Node.js and Express, while the frontend uses EJS for server-side rendering. Features include product and category management, variant-based pricing, user authentication, cart and checkout flow, order management, and secure Razorpay payment integration, along with an admin dashboard for complete store control.",
      image: "/gy-buddy.png",
      tags: ["Node.js", "Express.js", "MongoDB", "EJS", "MVC", "Razorpay"],
      liveUrl: "https://github.com/rohithk-codes/Gym-buddy",
      githubUrl: "https://github.com/rohithk-codes/Gym-buddy",
    },

    {
      title: "Web-Design-Challenge",
      description:"This is a webdesign challenge that is created with react",
      image: "/drug-free.png",
      tags: ["Node.js", "React", "Mongodb", "Express.js"],
      liveUrl: "https://github.com/rohithk-codes/say-no-to-drug",
      githubUrl: "https://github.com/rohithk-codes/say-no-to-drug",
    },
    {
      title: "Hotel-website",
      description:
        "A responsive static website built with React, TypeScript, and TailwindCSS, showcasing hotel rooms, amenities, and services with a clean, modern design.",
      image: "/rajadhanirooms.webp",
      tags: ["React", "TailwindCSS", "TypeScript"],
      liveUrl: "https://rajadhanirooms.online",
      githubUrl: "#",
    },
    {
      title: "KTM-website-Clone",
      description:
        "A responsive KTM website clone built using HTML, CSS, Bootstrap, and JavaScript. This project replicates the official KTM website UI with modern design practices, smooth navigation, interactive components, and mobile-friendly layouts to deliver a seamless user experience.",
      image: "/ktm.png",
      tags: ["HTML", "CSS", "Bootstrap", "Javascript"],
      liveUrl: "https://ktm-smoky.vercel.app/#",
      githubUrl: "#",
    },
    {
      title: "LinkedIn-website-Clone",
      description:
        "A responsive LinkedIn clone built using HTML, CSS, and JavaScript. This project recreates the core LinkedIn UI including feed layout, profile sections, and navigation with interactive components and mobile-first responsive design.",
      image: "/linkedin.png",
      tags: ["HTML", "CSS", "Javascript"],
      liveUrl: "https://linked-in-two-delta.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "MudBricks-Website",
      description:
        "A responsive static website built with React, TypeScript, and TailwindCSS, showcasing product detailes, services with a clean, modern design.",
      image: "/mudbricks.png",
      tags: ["React", "TailwindCSS", "TypeScript"],
      liveUrl: "https://www.chaithanniyamudbricks.org.in/",
      githubUrl: "https://github.com/rohithk-codes/static-web",
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple/10 blur-[120px] -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work, blending technical excellence with immersive user experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-2xl h-52 mb-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <Button
                    variant="glass"
                    size="sm"
                    className="h-10 px-4 rounded-full"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="glass"
                    size="sm"
                    className="h-10 px-4 rounded-full border-white/20"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="px-1">
                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 text-xs font-semibold rounded-full glass border-white/10 text-foreground/80 hover:border-neon-purple/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
