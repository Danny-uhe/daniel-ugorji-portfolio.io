import { useEffect, useState } from "react";
import { ArrowRight, Mail, Github, Facebook, Instagram, Twitter, Sparkles } from "lucide-react";
import portrait from "@/assets/hero-portrait.jpg";

const titles = ["Web Developer", "Creative Designer", "Digital Brand Strategist", "Tech Enthusiast"];

export const Hero = () => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[i];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setI((p) => (p + 1) % titles.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden noise">
      {/* Animated mesh background */}
      <div className="absolute inset-0 mesh-bg opacity-70" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyan/20 blur-3xl animate-blob [animation-delay:3s]" />
      <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-gold/20 blur-3xl animate-blob [animation-delay:6s]" />

      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium animate-fade-in-down">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new projects
              <Sparkles className="h-3.5 w-3.5 text-gold" />
            </div>

            <div className="space-y-4 animate-slide-up">
              <p className="font-heading text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Hello, I'm
              </p>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] text-balance">
                Daniel <br className="hidden sm:block" />
                <span className="text-gradient">Uchechukwu</span>
                <br />
                Ugorji.
              </h1>
              <div className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-heading font-medium min-h-[2.5rem]">
                <span className="text-muted-foreground">I'm a</span>
                <span className="text-foreground">{text}</span>
                <span className="inline-block w-[3px] h-7 lg:h-8 bg-primary animate-type-cursor" />
              </div>
            </div>

            <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in [animation-delay:300ms]">
              Crafting premium digital experiences at the intersection of code, design and brand strategy.
              I help businesses, creators and ministries show up online with intention, clarity and class.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in [animation-delay:500ms]">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-7 py-4 font-semibold text-primary-foreground shadow-glow hover:shadow-elegant hover:scale-[1.03] transition-all duration-300"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-2xl glass-strong px-7 py-4 font-semibold hover:scale-[1.03] transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-5 pt-4 animate-fade-in [animation-delay:700ms]">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Follow</span>
              <div className="h-px w-10 bg-border" />
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: "https://github.com/Danny-uhe", label: "GitHub" },
                  { icon: Facebook, href: "https://www.facebook.com/lurdz.milli", label: "Facebook" },
                  { icon: Twitter, href: "https://x.com/DUchechukw68865", label: "Twitter" },
                  { icon: Instagram, href: "https://www.instagram.com/dannystechsolutions?utm_source=qr&igsh=MXdqc3JnbTIzMmNkYw==", label: "Instagram" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-scale-in [animation-delay:300ms] px-4 sm:px-0">
            <div className="relative mx-auto max-w-md">
              {/* Decorative ring */}
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-primary opacity-30 blur-2xl animate-blob" />
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-primary p-[2px] animate-spin-slow [animation-duration:25s]">
                <div className="h-full w-full rounded-[2.4rem] bg-background" />
              </div>

              <div className="relative overflow-hidden rounded-[2.5rem] border border-glass-border shadow-elegant">
                <img
                  src={portrait}
                  alt="Daniel Uchechukwu Ugorji"
                  width={1024}
                  height={1280}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-2 sm:-right-4 glass-strong rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-card animate-float">
                <div className="text-xl sm:text-2xl font-display font-bold text-gradient">3+</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground">Years Crafting</div>
              </div>
              <div className="absolute -bottom-4 -left-2 sm:-left-4 glass-strong rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-card animate-float [animation-delay:2s]">
                <div className="text-xl sm:text-2xl font-display font-bold text-gradient">50+</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground">Projects Shipped</div>
              </div>
              <div className="absolute top-1/2 -left-3 sm:-left-6 glass-strong rounded-full p-2.5 sm:p-3 shadow-card animate-float [animation-delay:1s]">
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
