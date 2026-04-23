"use client"

import { personalInfo, socialLinks } from "@/data/personal"
import { motion } from "framer-motion"
import { Github, Instagram, Linkedin } from "lucide-react"

const socialIcons = [
  { icon: Github, href: socialLinks.github, label: "GitHub" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  ...(socialLinks.instagram
    ? [{ icon: Instagram, href: socialLinks.instagram, label: "Instagram" }]
    : []),
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialIcons.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground text-center flex-wrap justify-center">
            <span>Built </span>
           
            <span>by {personalInfo?.name || "Developer"}</span>
            <span className="mx-2">|</span>
            <span>{currentYear}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
