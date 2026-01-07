"use client"


import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
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
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
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
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Ready to start your next project? I'd love to hear from you. Let's discuss how we can bring your ideas to
            life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground">
                        Name
                      </label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Your name"
                        disabled={isSubmitting}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="Project inquiry"
                      disabled={isSubmitting}
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-500">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      rows={6}
                      placeholder="Tell me about your project..."
                      disabled={isSubmitting}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {submitStatus === "success" && (
                      <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md border border-green-200">
                        <CheckCircle2 className="h-5 w-5" />
                        <span>Message sent successfully! I'll get back to you soon.</span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex flex-col gap-2 text-red-600 bg-red-50 p-3 rounded-md border border-red-200">
                        <div className="flex items-center gap-2 font-semibold">
                          <AlertCircle className="h-5 w-5" />
                          <span>Failed to send message.</span>
                        </div>
                        {errorMessage && <p className="text-sm opacity-90">{errorMessage}</p>}
                        <p className="text-xs">
                          Please check the console for details or try emailing directly below.
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                   
                     <a href="mailto:rohithk.krishnan@gmail.com">rohithk.krishnan@gmail.com</a>
                     
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:+919645950059" className="text-muted-foreground">+91 9645950059</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  )
}
