import { Quote, Star } from "lucide-react";

const items = [
  {
    name: "Amaka O.",
    role: "Founder, Glow Beauty Studio",
    quote: "Daniel built our website and rebranded our entire online presence. Bookings doubled within two months. Premium, premium work.",
  },
  {
    name: "Pastor Emeka I.",
    role: "Worship Lead",
    quote: "Every flyer he designs for our events feels intentional and anointed. His creativity carries excellence — and he delivers fast.",
  },
  {
    name: "Tunde A.",
    role: "Tech Startup Founder",
    quote: "He handled our AWS deployment and frontend buildout end-to-end. Communication was 10/10 and the result felt agency-grade.",
  },
  {
    name: "Chiamaka N.",
    role: "Beauty Entrepreneur",
    quote: "Beyond the design, Daniel gave my brand a voice. Clients now describe my page as 'luxury' — that's all him.",
  },
  {
    name: "Samuel K.",
    role: "Creative Director",
    quote: "Rare to find someone who codes and designs at this level. Sharp eye, fast hands, and zero ego. A real pro.",
  },
  {
    name: "Joy E.",
    role: "Online Coach",
    quote: "He set up my socials, website and brand kit in one sweep. Everything finally feels cohesive and premium.",
  },
];

export const Testimonials = () => (
  <section className="relative py-24 sm:py-32 overflow-hidden">
    <div className="absolute inset-0 mesh-bg opacity-40" />
    <div className="container relative">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-widest mb-5">
          <span className="h-1 w-6 bg-gradient-primary rounded-full" />
          Testimonials
        </span>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
          Words from <span className="text-gradient">people I've built with</span>.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <figure
            key={t.name}
            className="glow-card glass rounded-3xl p-7 flex flex-col animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <Quote className="h-8 w-8 text-primary/40 mb-4" />
            <blockquote className="text-foreground/90 leading-relaxed flex-1">
              "{t.quote}"
            </blockquote>
            <div className="flex gap-0.5 mt-5 mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <figcaption className="flex items-center gap-3 pt-4 border-t border-border/60">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-display font-bold">
                {t.name[0]}
              </div>
              <div>
                <div className="font-heading font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
