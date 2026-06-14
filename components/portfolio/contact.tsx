"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactInfo, emailjsConfig } from "@/data/contact"
import { personalInfo, socialLinks } from "@/data/personal"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle, Loader2, Mail, MapPin, Send } from "lucide-react"
import { useRef, useState } from "react"

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    if (
      !emailjsConfig.serviceId ||
      !emailjsConfig.templateId ||
      !emailjsConfig.publicKey
    ) {
      console.error("EmailJS not configured")
      setStatus("error")
      return
    }

    setIsSubmitting(true)
    setStatus("idle")

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      )

      setStatus("success")
      formRef.current.reset()
    } catch (error) {
      console.error("EmailJS error:", error)
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {contactInfo.heading}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {contactInfo.subheading}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold">Let’s work together</h3>

            <p className="text-muted-foreground">
              I'm open to projects, freelance work, and collaborations.
            </p>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href={`mailto:${personalInfo.email}`}>
                {personalInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-4">
              {socialLinks.github && (
                <a href={socialLinks.github} target="_blank">GitHub</a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank">LinkedIn</a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank">Instagram</a>
              )}
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 border p-6 rounded-xl bg-card"
            >

              {/* NAME */}
              <Input
                name="name"
                placeholder="Your Name"
                required
                disabled={isSubmitting}
              />

              {/* EMAIL */}
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                disabled={isSubmitting}
              />

              {/* MESSAGE */}
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                disabled={isSubmitting}
              />

              {/* STATUS */}
              {status === "success" && (
                <div className="text-green-500 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Message sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="text-red-500 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Failed to send message.
                </div>
              )}

              {/* BUTTON */}
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}