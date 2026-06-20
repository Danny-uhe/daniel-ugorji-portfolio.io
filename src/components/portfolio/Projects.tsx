import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { allProjects } from "@/data/projects";
import type { Category } from "@/data/projects";

type Cat = "All" | Category;
const cats: Cat[] = ["All", "Web", "Design", "Cloud"];

export const Projects = () => {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.categories.includes(active as Category));

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

          <div className="flex flex-nowrap overflow-x-auto gap-2 pb-3 -mx-4 px-4 scrollbar-none sm:-mx-0 sm:px-0 sm:flex-wrap sm:pb-0 w-full sm:w-auto">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === c
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
          {filtered.slice(0, 6).map((p, i) => (
            <article
              key={p.slug}
              className="glow-card glass rounded-3xl overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Link to={`/projects/${p.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
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
                </div>
              </Link>
              <div className="p-6">
                <Link to={`/projects/${p.slug}`}>
                  <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                </Link>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="flex gap-4 mt-4">
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects link */}
        <div className="flex justify-center mt-14">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-display text-lg font-semibold shadow-glow hover:scale-105 transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
