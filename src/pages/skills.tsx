import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiAmazonwebservices,
  SiFigma,
  SiJavascript,
  SiExpress,
  SiRedux
} from "react-icons/si"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express", icon: <SiExpress className="text-foreground" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "GitHub", icon: <SiGithub className="text-foreground" /> },
        { name: "AWS", icon: <SiAmazonwebservices className="text-[#FF9900]" /> },
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/10 blur-[120px] -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Leveraging a modern tech stack to build powerful, scalable, and visually stunning applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass group hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-gradient">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group flex items-center gap-3 px-5 py-2.5 rounded-full glass border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_currentColor]">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
