export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <p className="text-primary mb-4 text-sm tracking-wider">{"// hello, world"}</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
          Daiki Wada
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
          Frontend Engineer / M2 Researcher
        </h2>
        <p className="text-foreground/80 max-w-2xl leading-relaxed text-base md:text-lg">
          Building performant web applications and researching distributed systems. 
          Passionate about crafting elegant user interfaces with modern technologies 
          while exploring the frontiers of computing.
        </p>
        <div className="mt-12 flex gap-6">
          <a 
            href="#works" 
            className="text-primary hover:text-primary/80 transition-colors duration-200 underline underline-offset-4"
          >
            View Works
          </a>
          <a 
            href="#contact" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
