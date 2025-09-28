import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description:
        "Crafting beautiful and intuitive user interfaces that delight users.",
    },
    {
      icon: Smartphone,
      title: "Responsive",
      description:
        "Building applications that work seamlessly across all devices and screen sizes.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and user experience.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            I'm a passionate full-stack developer with 1+ years of experience
            creating digital solutions that bridge the gap between design and
            technology. I love turning complex problems into simple, beautiful,
            and intuitive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-pretty">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
