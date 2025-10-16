"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "Rohith delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise made the project a huge success.",
      rating: 5,
      avatar: "/professional-woman-headshot.png",
    },
    {
      name: "Michael Chen",
      role: "CEO at StartupXYZ",
      content:
        "Working with Rohith was a game-changer for our startup. He transformed our ideas into a beautiful, functional application that our users love.",
      rating: 5,
      avatar: "/professional-man-headshot.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director at CreativeAgency",
      content:
        "Rohith has an incredible ability to bring designs to life. His code is clean, his communication is excellent, and he always delivers on time.",
      rating: 5,
      avatar: "/professional-woman-designer-headshot.png",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">What Clients Say</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Don't just take my word for it. Here's what some of my clients have to say about working with me.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="relative">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg text-muted-foreground mb-6 text-pretty">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
