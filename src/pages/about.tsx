
import { SectionHeader } from "@/components/ui/section-header";
import { ProfilePhoto } from "@/components/ui/profile-photo";

export function About() {

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-pink/10 blur-[120px] -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <ProfilePhoto src="/profile.webp" />

          <div className="text-center lg:text-left">
            <SectionHeader
              title="About Me"
              subtitle="I'm a passionate full-stack developer with 1+ years of experience creating digital solutions that bridge the gap between design and technology."
              className="mb-8 lg:mx-0 lg:text-left"
              animate={false}
            />
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Based in India, I specialize in building high-performance web applications using modern technologies like React, Node.js, and Three.js. My goal is to deliver seamless digital experiences that combine technical excellence with artistic flair.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {/* {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center group hover:scale-105 transition-all duration-500"
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl glass mb-6 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-neon-purple group-hover:text-neon-cyan transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))} */}
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gradient">Professional Journey</h2>
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neon-purple/50 before:to-transparent">
            {[
              { year: "2026 - Present", role: "Full-Stack Developer", company: "Freelance", desc: "Building high-performance web applications with React and Node.js." },

              {
                year: "Aug 2024 - 2025 ",
                role: "Software Developer Trainee",
                company: "Brototype",
                desc: "Joined Brototype self-learning platform to build real-world projects and strengthen full-stack development skills."
              },

              {
                year: "2023 - 2024",
                role: "Development Manager",
                company: "SBI Life Insurance",
                desc: "Managed 15+ agents, developed leadership, communication, and analytical skills."
              },

              {
                year: "2021 - 2022",
                role: "Marketing Executive",
                company: "Elanadu Milk Pvt Ltd",
                desc: "Recruited agents and coordinated sales operations to improve market reach and sales performance."
              },

              {
                year: "2021",
                role: "MBA (Finance & Marketing)",
                company: "University",
                desc: "Completed MBA specialization in Finance and Marketing."
              },

            ].map((exp, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-background shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 animation-pulse-glow">
                  <div className="w-3 h-3 rounded-full bg-neon-purple" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-3xl hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-neon-cyan">{exp.year}</span>
                    <span className="text-xs font-medium px-2 py-1 rounded-full glass border-white/10">{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
