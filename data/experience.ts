export interface Experience {
  id: string
  company: string
  role: string
  duration: string
  description: string
  skills: string[]
  certificateImage?: string
}

export const experiences: Experience[] = [
  {
    id: "elite-tech",
    company: "Elite Tech",
    role: "Full Stack Developer Intern",
    duration: "Jan 2026 – March 2026",
    description:
      "Worked on developing and maintaining web applications using React.js and Node.js. Collaborated with senior developers to implement new features and optimize existing codebase.",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Git"],
    certificateImage: "/elite.png",
  },
]

export const totalExperience = "2 Years"
