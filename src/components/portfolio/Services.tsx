import { Code, Megaphone, Palette, Share2, Cloud, PenTool, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Code, title: "Website Development", desc: "Custom, responsive websites built with modern stacks — fast, accessible and scalable." },
  { icon: Megaphone, title: "Business Branding", desc: "Identity systems that position your business as premium from the first impression." },
  { icon: Palette, title: "UI / UX Design", desc: "Interfaces that look stunning and convert — designed around real user journeys." },
  { icon: Share2, title: "Social Media Setup", desc: "Profile design, templates and growth-ready systems for your social presence." },
  { icon: Cloud, title: "AWS Deployment", desc: "Production hosting, CI/CD and cloud architecture support on AWS infrastructure." },
  { icon: PenTool, title: "Graphic Design", desc: "Flyers, posters, social creatives and event branding with editorial polish." },
];

export const Services = () => (
  <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
    <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
    <div className="container relative">
      <div className="max-w-2xl mb-16">
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-widest mb-5">
          <span className="h-1 w-6 bg-gradient-primary rounded-full" />
          Services
        </span>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
          What I can <span className="text-gradient">build</span> for you.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            className="glow-card glass relative rounded-3xl p-7 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow group-hover:rotate-6 transition-transform duration-500">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{desc}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Start a project <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
