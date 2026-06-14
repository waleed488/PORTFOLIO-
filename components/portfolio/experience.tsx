"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, ImageIcon } from "lucide-react"
import { experiences, totalExperience } from "@/data/experience"
import Image from "next/image"

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience
          </h2>
          <p className="text-muted-foreground">
            {totalExperience} of professional experience building web
            applications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <Briefcase className="h-3 w-3 text-primary-foreground" />
              </div>

              <div className="space-y-4 pb-8">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Certificate Placeholder */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mt-4 relative aspect-[16/9] max-w-md rounded-lg overflow-hidden bg-card border border-border group cursor-pointer"
                >
                  {exp.certificateImage ? (
                    <Image
                      src={exp.certificateImage}
                      alt={`${exp.company} Certificate`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                      <ImageIcon className="h-10 w-10" />
                      <span className="text-sm">Certificate Placeholder</span>
                      <span className="text-xs">Upload your certificate</span>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
