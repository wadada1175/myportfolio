import { Mail } from "lucide-react"
import { SiGithub, SiX, SiInstagram } from "@icons-pack/react-simple-icons"

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24 bg-card/30">
      <div className="max-w-4xl">
        <h2 className="text-sm text-primary mb-8 tracking-wider">{"// contact"}</h2>
        
        <p className="text-foreground/80 mb-12 leading-relaxed max-w-xl">
          Interested in collaborating or just want to say hello? 
          Feel free to reach out through any of the channels below.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <a
            href="https://github.com/daiki-wada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
          >
            <SiGithub color="currentColor" className="w-5 h-5" />
            <span className="underline underline-offset-4 decoration-border group-hover:decoration-primary">
              github.com/daiki-wada
            </span>
          </a>
          
          <a
            href="mailto:daiki@example.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
          >
            <Mail className="w-5 h-5" />
            <span className="underline underline-offset-4 decoration-border group-hover:decoration-primary">
              daiki@example.com
            </span>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-sm text-muted-foreground">{"// social"}</span>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/daiki_wada"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
              aria-label="X"
            >
              <SiX color="currentColor" className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/daiki-wada"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/daiki_wada"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
              aria-label="Instagram"
            >
              <SiInstagram color="currentColor" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
