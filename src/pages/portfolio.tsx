import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution built with Node.js, featuring dynamic-filtering and searching option, payment processing, and admin dashboard.",
      image: "/smartagro-ecom-home.png",
      tags: ["Node.js", "TypeScript", "Stripe", "Mongodb"],
      liveUrl: "https://smartagro.store",
      githubUrl: "#",
    },
    {
      title: "Hotel-website",
      description:
        "A responsive static website built with React, TypeScript, and TailwindCSS, showcasing hotel rooms, amenities, and services with a clean, modern design.",
      image: "/rajadhani-hotel-home.png",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://rajadhanirooms.online",
      githubUrl: "#",
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
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <Button variant="glass" size="sm" className="h-10 px-4 rounded-full" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="glass" size="sm" className="h-10 px-4 rounded-full border-white/20" asChild>
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
