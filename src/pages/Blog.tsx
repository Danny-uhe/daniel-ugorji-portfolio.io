import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, BookOpen } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { blogPosts } from "@/data/blogPosts";

const catColors: Record<string, string> = {
  Cloud: "bg-cyan/20 text-cyan border-cyan/30",
  Backend: "bg-green-500/20 text-green-400 border-green-500/30",
  Frontend: "bg-primary/20 text-primary border-primary/30",
  Design: "bg-gold/20 text-gold border-gold/30",
  Workflow: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Personal: "bg-pink-500/20 text-pink-400 border-pink-500/30",
};

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const Blog = () => {
  useEffect(() => {
    document.title = "Blog — Daniel Uchechukwu Ugorji";
    window.scrollTo(0, 0);
  }, []);

  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-40" />
        <div className="absolute top-32 left-1/3 w-72 h-72 rounded-full bg-primary/20 blur-[120px] animate-blob" />
        <div className="container relative">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-widest mb-6">
              <span className="h-1 w-6 bg-gradient-primary rounded-full" />
              Blog
            </span>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Thoughts & <span className="text-gradient">insights</span>.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Writing about web development, cloud deployment, design, and my journey as a creative technologist.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 mt-10">
            <div className="glass rounded-2xl px-6 py-4 flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="font-display text-2xl font-bold text-gradient">{blogPosts.length}</span>
              <span className="text-sm text-muted-foreground">Articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-16">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {featured.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className={`glow-card glass rounded-3xl p-8 group cursor-pointer animate-fade-in block ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-full border ${catColors[post.category] || "glass"}`}>{post.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                  </div>
                  <h3 className={`font-display font-bold mb-3 group-hover:text-gradient transition-all duration-300 ${i === 0 ? "text-2xl sm:text-3xl" : "text-xl"}`}>{post.title}</h3>
                  <p className={`text-muted-foreground leading-relaxed flex-1 ${i === 0 ? "text-base" : "text-sm"}`}>{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/40">
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" />{fmtDate(post.date)}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">Read<ArrowUpRight className="h-4 w-4" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 border-t border-border/40">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-8">All Articles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {rest.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="glow-card glass rounded-3xl p-8 group cursor-pointer animate-fade-in block"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-full border ${catColors[post.category] || "glass"}`}>{post.category}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" />{fmtDate(post.date)}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">Read<ArrowUpRight className="h-4 w-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="glass rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 mesh-bg opacity-30" />
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Want to work together?</h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
              <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-2xl font-display text-lg font-semibold shadow-glow hover:scale-105 transition-all duration-300">
                Get in Touch <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;

