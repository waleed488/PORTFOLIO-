"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Folder } from "lucide-react"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects I&apos;ve worked on, showcasing my skills in
            full-stack development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-video rounded-lg overflow-hidden bg-secondary border border-border group"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Folder className="h-16 w-16 text-muted-foreground/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>

              <div
                className={`order-2 space-y-4 ${index % 2 === 1 ? "md:order-1 md:text-right" : "md:order-2"}`}
              >
                <p className="text-primary text-sm font-medium">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div
                  className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "md:justify-end" : ""}`}
                >
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className={`flex items-center gap-4 pt-2 ${index % 2 === 1 ? "md:justify-end" : ""}`}
                >
                  {project.github && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-foreground text-center">
            Other Noteworthy Projects
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <Folder className="h-10 w-10 text-primary" />
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
