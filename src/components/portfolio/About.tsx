import { Code2, Palette, Rocket, Globe } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend Engineering", desc: "HTML, CSS, JavaScript & monorepos" },
  { icon: Globe, label: "Cloud Deployments", desc: "AWS hosting & MongoDB Atlas" },
  { icon: Palette, label: "Brand & Design", desc: "Visual identity & flyer design" },
  { icon: Rocket, label: "Scalable Solutions", desc: "Building systems that grow with your business" },
];

export const About = () => (
  <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
    <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
    <div className="container relative">
      <div className="grid lg:grid-cols-12 gap-14 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-widest">
            <span className="h-1 w-6 bg-gradient-primary rounded-full" />
            About
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
            Where <span className="text-gradient">code, faith</span> & creative direction meet.
          </h2>
          <p className="text-muted-foreground text-lg">
            A creative technologist building products and brands that feel as good as they perform.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm <span className="text-foreground font-semibold">Daniel Uchechukwu Ugorji</span> — a
              Nigerian creative tech professional and entrepreneur. Over the years I've built and
              deployed websites, set up cloud infrastructure on <span className="text-foreground">AWS</span>,
              wired up <span className="text-foreground">MongoDB Atlas</span> databases, and shipped
              monorepo projects that scale.
            </p>
            <p>
              Beyond engineering, I lead branding and visual identity work — designing church event
              flyers, social media kits, and full business identities. I've helped a beauty business
              specializing in lash extensions, microblading and tattoos build a premium online presence
              that converts.
            </p>
            <p>
              I'm deeply curious about <span className="text-foreground">modern web development, UI/UX design, and digital branding systems</span> — and how technology can build scalable online businesses and real-world solutions. Strong communication and clear creative direction are how I turn ambitious ideas into products that ship and brands that stick.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="glow-card glass rounded-2xl p-5 group">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-heading font-semibold">{label}</div>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
