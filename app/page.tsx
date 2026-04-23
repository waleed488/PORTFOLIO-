import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { TechStack } from "@/components/portfolio/tech-stack"
import { Projects } from "@/components/portfolio/projects"
import { Experience } from "@/components/portfolio/experience"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
