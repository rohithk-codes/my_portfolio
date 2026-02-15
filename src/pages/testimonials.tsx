
// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronRight, Star } from "lucide-react"

// import { SectionHeader } from "@/components/ui/section-header"

// export function Testimonials() {
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Product Manager at TechCorp",
//       content:
//         "Rohith delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise made the project a huge success.",
//       rating: 5,
//       avatar: "/professional-woman-headshot.png",
//     },
//     {
//       name: "Michael Chen",
//       role: "CEO at StartupXYZ",
//       content:
//         "Working with Rohith was a game-changer for our startup. He transformed our ideas into a beautiful, functional application that our users love.",
//       rating: 5,
//       avatar: "/professional-man-headshot.png",
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "Design Director at CreativeAgency",
//       content:
//         "Rohith has an incredible ability to bring designs to life. His code is clean, his communication is excellent, and he always delivers on time.",
//       rating: 5,
//       avatar: "/professional-woman-designer-headshot.png",
//     },
//   ]

//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   return (
//     <section id="testimonials" className="py-24 relative overflow-hidden bg-[radial-gradient(circle_at_center,oklch(0.65_0.25_320_/_0.05),transparent_70%)]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <SectionHeader
//           title="What Clients Say"
//           subtitle="Real stories from people I've worked with, showcasing the impact of technical precision and creative design."
//         />

//         <div className="max-w-4xl mx-auto">
//           <Card className="glass-neon-border glass relative overflow-hidden">
//             <div className="absolute top-0 right-0 p-10 opacity-5">
//               <Star className="w-32 h-32 text-neon-purple" />
//             </div>
//             <CardContent className="p-10 md:p-16 text-center">
//               <div className="flex justify-center mb-8 gap-1">
//                 {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
//                   <Star key={i} className="h-6 w-6 text-neon-cyan fill-neon-cyan/20 drop-shadow-[0_0_8px_rgba(103,232,249,0.5)]" />
//                 ))}
//               </div>

//               <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-10 text-pretty leading-relaxed italic">
//                 "{testimonials[currentIndex].content}"
//               </blockquote>

//               <div className="flex items-center justify-center gap-6">
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan rounded-full blur-md opacity-50" />
//                   <img
//                     src={testimonials[currentIndex].avatar || "/placeholder.svg"}
//                     alt={testimonials[currentIndex].name}
//                     className="w-16 h-16 rounded-full object-cover border-2 border-white/20 relative z-10"
//                   />
//                 </div>
//                 <div className="text-left">
//                   <div className="text-xl font-bold text-foreground tracking-tight">{testimonials[currentIndex].name}</div>
//                   <div className="text-sm font-semibold text-gradient uppercase tracking-widest">{testimonials[currentIndex].role}</div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <div className="flex justify-center items-center gap-8 mt-12">
//             <Button variant="neon-outline" size="icon" onClick={prevTestimonial} className="w-14 h-14 rounded-full">
//               <ChevronLeft className="h-6 w-6" />
//             </Button>

//             <div className="flex gap-3">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? "w-8 bg-gradient-to-r from-neon-pink to-neon-purple shadow-[0_0_10px_rgba(168,85,247,0.5)]" : "w-2 bg-white/10"
//                     }`}
//                   onClick={() => setCurrentIndex(index)}
//                 />
//               ))}
//             </div>

//             <Button variant="neon-outline" size="icon" onClick={nextTestimonial} className="w-14 h-14 rounded-full">
//               <ChevronRight className="h-6 w-6" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
