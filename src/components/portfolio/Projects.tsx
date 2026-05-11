import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import beauty from "@/assets/project-beauty.jpg";
import church from "@/assets/project-church.jpg";
import aws from "@/assets/project-aws.jpg";
import mongo from "@/assets/project-mongo.jpg";
import landing from "@/assets/project-landing.jpg";
import social from "@/assets/project-social.jpg";

type Cat = "All" | "Web" | "Design" | "Cloud" | "Brand";

const projects: { title: string; desc: string; img: string; cat: Cat[]; tag: string }[] = [
  { title: "Glow Beauty Studio", desc: "Premium website for a lash extensions, microblading & tattoo business with online booking.", img: beauty, cat: ["Web", "Brand"], tag: "Beauty Brand" },
  { title: "Church Event Branding", desc: "Flyer system & event identity for worship gatherings — modern, vibrant, scripture-led.", img: church, cat: ["Design", "Brand"], tag: "Visual Identity" },
  { title: "AWS Hosted Frontend", desc: "Production deployment on AWS with CloudFront, S3 hosting and CI/CD for a client SPA.", img: aws, cat: ["Cloud", "Web"], tag: "Cloud Deploy" },
  { title: "MongoDB Atlas App", desc: "Full-stack application wired to MongoDB Atlas with secure auth and live data sync.", img: mongo, cat: ["Web", "Cloud"], tag: "Full Stack" },
  { title: "Business Landing Pages", desc: "Conversion-focused landing pages for service businesses and digital startups.", img: landing, cat: ["Web", "Design"], tag: "Landing" },
  { title: "Social Media Branding", desc: "Complete social presence setup, templates and content systems for growing brands.", img: social, cat: ["Brand", "Design"], tag: "Social Kit" },
];

const cats: Cat[] = ["All", "Web", "Design", "Cloud", "Brand"];

export const Projects = () => {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat.includes(active));

  return (
    <section id="work" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-widest mb-5">
              <span className="h-1 w-6 bg-gradient-primary rounded-full" />
              Selected Work
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
              Projects shipped with <span className="text-gradient">intention</span>.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === c
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "glass hover:scale-105"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.title}
              className="glow-card glass rounded-3xl overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <span className="absolute top-4 left-4 glass-strong text-xs font-medium px-3 py-1.5 rounded-full">
                  {p.tag}
                </span>
                <a
                  href="#contact"
                  className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
