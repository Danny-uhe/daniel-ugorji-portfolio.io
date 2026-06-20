import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Github,
  Calendar,
  Users,
  User,
  Lightbulb,
  Target,
  Trophy,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { getProjectBySlug, allProjects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} — Daniel Uchechukwu Ugorji`;
    }
  }, [project]);

  if (!project) {
    return (
      <main className="relative min-h-screen">
        <Navbar />
        <section className="pt-40 pb-20">
          <div className="container text-center">
            <h1 className="font-display text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  // Get related projects (same category, excluding current)
  const related = allProjects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.categories.some((c) => project.categories.includes(c))
    )
    .slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-30" />
        <div className="absolute top-20 right-1/4 w-80 h-80 rounded-full bg-primary/20 blur-[120px] animate-blob" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-gold/15 blur-[100px] animate-blob" style={{ animationDelay: "5s" }} />

        <div className="container relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{project.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: Info */}
            <div className="flex-1 max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-widest">
                  <span className="h-1 w-6 bg-gradient-primary rounded-full" />
                  {project.tag}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${
                    project.ownership === "personal"
                      ? "bg-cyan/20 text-cyan border border-cyan/30"
                      : "bg-gold/20 text-gold border border-gold/30"
                  }`}
                >
                  {project.ownership === "personal" ? (
                    <User className="h-3 w-3" />
                  ) : (
                    <Users className="h-3 w-3" />
                  )}
                  {project.ownership === "personal" ? "Personal Project" : "Collaboration"}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
                {project.title}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.longDescription}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{project.year}</span>
                </div>
                {project.collaborators && (
                  <div className="glass rounded-xl px-4 py-3 flex items-center gap-2">
                    <Users className="h-4 w-4 text-gold" />
                    <span className="text-sm font-medium">
                      {project.collaborators.join(", ")}
                    </span>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-semibold shadow-glow hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live Project
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="w-full lg:w-[480px] flex-shrink-0">
              <div className="glow-card glass rounded-3xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-12 sm:py-16">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="glass-strong px-5 py-2.5 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study ── */}
      <section className="py-12 sm:py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Challenge */}
            <div className="glass rounded-3xl p-8 group hover:shadow-elegant transition-all duration-500">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mb-5">
                <Target className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">The Challenge</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="glass rounded-3xl p-8 group hover:shadow-elegant transition-all duration-500">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center mb-5">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">The Solution</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Outcome */}
            <div className="glass rounded-3xl p-8 group hover:shadow-elegant transition-all duration-500">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-5">
                <Trophy className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">The Outcome</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="py-12">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-6">Categories</h2>
          <div className="flex flex-wrap gap-3">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Projects ── */}
      {related.length > 0 && (
        <section className="py-16 sm:py-24 border-t border-border/40">
          <div className="container">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-widest mb-4">
                  <span className="h-1 w-6 bg-gradient-primary rounded-full" />
                  More Work
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold">
                  Related Projects
                </h2>
              </div>
              <Link
                to="/projects"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((p, i) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="glow-card glass rounded-3xl overflow-hidden group animate-fade-in block"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                    <span className="absolute top-4 left-4 glass-strong text-xs font-medium px-3 py-1.5 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-gradient transition-all">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default ProjectDetail;
