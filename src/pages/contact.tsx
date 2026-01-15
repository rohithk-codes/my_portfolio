
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/ui/section-header"
import emailjs from "@emailjs/browser"

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty("Please enter name")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name should contain only letters"),
  email: z
    .string()
    .trim()
    .nonempty("Please enter email")
    .email("Invalid email format")
    .max(100, "Email too long")
    .refine(
      (val) => !val.startsWith("0"),
      "Email should not start with 0"
    ),
  subject: z
    .string()
    .trim()
    .nonempty("Please enter subject")
    .min(5, "Subject too short")
    .max(100, "Subject too long")
    .refine(
      (val) => !val.startsWith("0"),
      "Subject should not start with 0"
    ),

  message: z
    .string()
    .trim()
    .nonempty("Please enter message")
    .min(10, "Message too short")
    .max(1000, "Message too long")
    .refine(
      (val) => !val.startsWith("0"),
      "Message should not start with 0"
    )
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    console.log("EmailJS Pre-flight Check:", {
      serviceId: serviceId ? "Present" : "Missing",
      templateId: templateId ? "Present" : "Missing",
      publicKey: publicKey ? "Present" : "Missing",
    })

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus("error")
      setErrorMessage("System configuration error: EmailJS credentials missing in .env")
      setIsSubmitting(false)
      return
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          // email: "rohithkrishnan997@gmail.com",
          name: data.name,
          email: data.email,
          title: data.subject,
          message: data.message,
        },
        publicKey
      )

      if (result.status === 200) {
        setSubmitStatus("success")
        reset()
      } else {
        throw new Error(`Unexpected status: ${result.status}`)
      }
    } catch (error: any) {
      console.error("EmailJS Submission Error:", error)
      setSubmitStatus("error")
      setErrorMessage(error?.text || error?.message || "An unexpected error occurred.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitStatus("idle")
        setErrorMessage("")
      }, 7000)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/5 blur-[150px] -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get In Touch"
          subtitle="Ready to start your next project? I'd love to hear from you. Let's discuss how we can bring your ideas to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="glass-neon-border glass shadow-[0_0_50px_rgba(0,0,0,0.3)]">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gradient">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-bold text-foreground/80 ml-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="John Doe"
                        disabled={isSubmitting}
                        className={cn(
                          "glass h-14 border-white/10 focus:border-neon-purple/50 focus:ring-neon-purple/20 transition-all text-lg",
                          errors.name ? "border-red-500/50" : ""
                        )}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 font-medium ml-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-bold text-foreground/80 ml-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="john@example.com"
                        disabled={isSubmitting}
                        className={cn(
                          "glass h-14 border-white/10 focus:border-neon-cyan/50 focus:ring-neon-cyan/20 transition-all text-lg",
                          errors.email ? "border-red-500/50" : ""
                        )}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 font-medium ml-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-sm font-bold text-foreground/80 ml-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="Project Inquiry"
                      disabled={isSubmitting}
                      className={cn(
                        "glass h-14 border-white/10 focus:border-neon-pink/50 focus:ring-neon-pink/20 transition-all text-lg",
                        errors.subject ? "border-red-500/50" : ""
                      )}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400 font-medium ml-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-bold text-foreground/80 ml-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      rows={6}
                      placeholder="Tell me about your amazing project..."
                      disabled={isSubmitting}
                      className={cn(
                        "glass border-white/10 focus:border-neon-purple/50 focus:ring-neon-purple/20 transition-all text-lg resize-none",
                        errors.message ? "border-red-500/50" : ""
                      )}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 font-medium ml-1">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-6">
                    <Button type="submit" variant="neon" size="lg" className="w-full h-16" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-6 w-6 mr-3 animate-spin" />
                          Sending Signal...
                        </>
                      ) : (
                        <>
                          <Send className="h-6 w-6 mr-3" />
                         Reach Out
                        </>
                      )}
                    </Button>

                    {submitStatus === "success" && (
                      <div className="flex items-center gap-4 glass text-green-400 p-5 rounded-2xl border-green-500/20 animate-in fade-in zoom-in duration-300">
                        <CheckCircle2 className="h-7 w-7 shrink-0" />
                        <span className="font-bold">Message sent! I'll be get back to you shortly.</span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex flex-col gap-3 glass text-red-400 p-5 rounded-2xl border-red-500/20 animate-in fade-in zoom-in duration-300">
                        <div className="flex items-center gap-3 font-bold">
                          <AlertCircle className="h-7 w-7 shrink-0" />
                          <span>Interference Detected. Failed to transmit.</span>
                        </div>
                        {errorMessage && <p className="text-sm font-medium opacity-80 pl-10">{errorMessage}</p>}
                      </div>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-6 animate-float" style={{ animationDelay: "1s" }}>
            {[
              { icon: Mail, label: "Email", val: "rohithkrishnan.dev@gmail.com", href: "mailto:rohithkrishnan.dev@gmail.com", color: "neon-purple" },
              { icon: Phone, label: "Phone", val: "+91 9645 950059", href: "tel:+919645950059", color: "neon-cyan" }
            ].map((item, i) => (
              <Card key={i} className="glass group hover:bg-white/5 transition-all duration-300 cursor-pointer overflow-hidden relative">
                <div className={`absolute top-0 left-0 w-1 h-full bg-${item.color}`} />
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-2xl bg-${item.color}/10 glass group-hover:scale-110 transition-transform`}>
                      <item.icon className={`h-8 w-8 text-${item.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground opacity-60 uppercase tracking-widest text-xs mb-1">{item.label}</h3>
                      <a href={item.href} className="text-xl font-bold text-foreground group-hover:text-gradient transition-all break-all">{item.val}</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}


            <div className="mt-4 glass p-8 rounded-3xl text-center border-white/5 opacity-60">
              <a
                href="https://www.linkedin.com/in/rohithkrishnan1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 group"
              >
                <Linkedin className="text-cyan-400 text-lg group-hover:scale-110 transition" />

                <p className="text-sm font-medium italic group-hover:text-cyan-400 transition">
                  Looking for a developer? Let’s connect!
                </p>
              </a>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
