"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/data/personal"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-lg font-semibold text-foreground"
          whileHover={{ scale: 1.02 }}
        >
          {personalInfo.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  )
}
