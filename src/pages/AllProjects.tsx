import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Users, User, Layers, Filter } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { allProjects, categoryFilters, type Category, type Ownership } from "@/data/projects";

type OwnershipFilter = "all" | Ownership;

const ownershipTabs: { key: OwnershipFilter; label: string; icon: typeof Layers }[] = [
  { key: "all", label: "All Projects", icon: Layers },
  { key: "personal", label: "Personal", icon: User },
  { key: "collaboration", label: "Collaborations", icon: Users },
];

const AllProjectsPage = () => {
  const [ownership, setOwnership] = useState<OwnershipFilter>("all");
  const [category, setCategory] = useState<"All" | Category>("All");

  useEffect(() => {
    document.title = "All Projects — Daniel Uchechukwu Ugorji";
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const ownerMatch = ownership === "all" || p.ownership === ownership;
      const catMatch = category === "All" || p.categories.includes(category as Category);
      return ownerMatch && catMatch;
    });
  }, [ownership, category]);

  const personalCount = allProjects.filter((p) => p.ownership === "personal").length;
  const collabCount = allProjects.filter((p) => p.ownership === "collaboration").length;

  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-40" />
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-[120px] animate-blob" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-gold/15 blur-[140px] animate-blob" style={{ animationDelay: "4s" }} />
        <div className="container relative">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-widest mb-6">
              <span className="h-1 w-6 bg-gradient-primary rounded-full" />
              Portfolio
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
              All my <span className="text-gradient">creative</span> works.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              From personal passion projects to collaborative team efforts — here's everything I've designed, developed and deployed.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { label: "Total Projects", value: allProjects.length },
              { label: "Personal", value: personalCount },
              { label: "Collaborations", value: collabCount },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl px-6 py-4 flex items-center gap-3">
                <span className="font-display text-2xl font-bold text-gradient">{s.value}</span>
                <span className="text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative pb-6">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Filter className="h-4 w-4" />Filter by:
            </div>
            <div className="flex flex-wrap gap-2">
              {ownershipTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button key={tab.key} onClick={() => setOwnership(tab.key)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${ownership === tab.key ? "bg-gradient-primary text-primary-foreground shadow-glow" : "glass hover:scale-105"}`}>
                    <Icon className="h-4 w-4" />{tab.label}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((c) => (
              <button key={c} onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${category === c ? "bg-foreground text-background" : "glass-strong hover:scale-105 text-muted-foreground"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative py-12 sm:py-16">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="glass rounded-3xl p-12 max-w-md">
                <Layers className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">No projects found</h3>
                <p className="text-sm text-muted-foreground">Try adjusting your filters.</p>
                <button onClick={() => { setOwnership("all"); setCategory("All"); }}
                  className="mt-4 px-5 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium">
                  Reset Filters
                </button>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p, i) => (
                <article key={p.slug} className="glow-card glass rounded-3xl overflow-hidden group animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <Link to={`/projects/${p.slug}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                      <span className="absolute top-4 left-4 glass-strong text-xs font-medium px-3 py-1.5 rounded-full">{p.tag}</span>
                      <span className={`absolute top-4 right-4 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${p.ownership === "personal" ? "bg-cyan/20 text-cyan border border-cyan/30" : "bg-gold/20 text-gold border border-gold/30"}`}>
                        {p.ownership === "personal" ? <User className="h-3 w-3" /> : <Users className="h-3 w-3" />}
                        {p.ownership === "personal" ? "Personal" : "Collab"}
                      </span>
                      <span className="absolute bottom-4 right-4 text-xs font-mono text-muted-foreground/80">{p.year}</span>
                    </div>
                  </Link>
                  <div className="p-6">
                    <Link to={`/projects/${p.slug}`}>
                      <h3 className="font-display text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">{p.title}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                    {p.collaborators && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.collaborators.map((c) => (
                          <span key={c} className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent text-accent-foreground">{c}</span>
                        ))}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.categories.map((c) => (
                        <span key={c} className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full glass text-muted-foreground">{c}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={p.liveLink} target="_blank" rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-primary text-primary-foreground rounded-xl font-medium text-sm shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                        <ExternalLink className="h-3.5 w-3.5" />Live Demo
                      </a>
                      <a href={p.repoLink} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 glass rounded-xl font-medium text-sm hover:scale-[1.02] transition-all duration-300">
                        <Github className="h-3.5 w-3.5" />Code
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
          {filtered.length > 0 && (
            <div className="text-center mt-12 text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> of <span className="font-semibold text-foreground">{allProjects.length}</span> projects
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AllProjectsPage;
