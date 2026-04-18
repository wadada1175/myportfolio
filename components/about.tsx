export function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl">
        <h2 className="text-sm text-primary mb-8 tracking-wider">{"// about"}</h2>
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            {"I'm"} a frontend engineer and Master&apos;s student based in Tokyo, 
            passionate about building accessible, pixel-perfect user interfaces 
            that blend thoughtful design with robust engineering.
          </p>
          <p>
            My work lies at the intersection of development and research, 
            creating web experiences that are not only visually compelling 
            but also built for performance and scalability. Currently pursuing 
            my M2 degree, I focus on distributed systems and large language models.
          </p>
          <p>
            When {"I'm"} not coding, you can find me reading technical papers, 
            experimenting with new frameworks, or contributing to open-source projects.
          </p>
        </div>
      </div>
    </section>
  )
}
