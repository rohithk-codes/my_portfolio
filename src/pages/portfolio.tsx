import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

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
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.",
      image: "/preview/project4.png",
      tags: ["Vue.js", "D3.js", "Weather API", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Analytics",
      description:
        "Comprehensive analytics platform for social media management with real-time insights and reporting.",
      image: "/social-media-analytics-dashboard.png",
      tags: ["React", "FastAPI", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with course management, progress tracking, and interactive learning modules.",
      image: "/lms-interface.png",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate Platform",
      description:
        "Property listing and management platform with advanced search, virtual tours, and agent tools.",
      image: "/real-estate-website.png",
      tags: ["React", "Express", "MongoDB", "Mapbox"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            My Portfolio
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Here are some of my recent projects that showcase my skills in
            full-stack development, UI/UX design, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
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
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-pretty">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/20 text-primary-foreground text-sm rounded-full"
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
