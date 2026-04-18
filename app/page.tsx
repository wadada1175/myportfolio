import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Works } from "@/components/works"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
      
      <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
        <p className="text-muted-foreground text-sm">
          © 2026 Daiki Wada.
        </p>
      </footer>
    </main>
  )
}
