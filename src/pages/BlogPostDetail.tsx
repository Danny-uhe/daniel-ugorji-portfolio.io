import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, BookOpen, Share2, Mail, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { getPostBySlug } from "@/data/blogPosts";
import portrait from "@/assets/hero-portrait.jpg";
import { toast } from "sonner";

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

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Daniel Uchechukwu Ugorji`;
    } else {
      document.title = "Post Not Found — Daniel Uchechukwu Ugorji";
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <main className="relative min-h-screen">
        <Navbar />
        <section className="container pt-44 pb-24 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you are looking for does not exist or has been moved.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Article link copied to clipboard!");
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Decorative blobs */}
      <div className="absolute top-24 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[28rem] h-[28rem] rounded-full bg-cyan/10 blur-[150px] pointer-events-none" />

      {/* Article Container */}
      <article className="relative pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="container max-w-4xl">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors glass px-3 py-1.5 rounded-xl hover:scale-105"
            >
              <Share2 className="h-3.5 w-3.5" />
              Share
            </button>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className={`text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${catColors[post.category] || "glass"}`}>
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} read
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-balance">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 py-6 border-y border-border/40">
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
                <img
                  src={portrait}
                  alt="Daniel Uchechukwu Ugorji"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-heading font-semibold text-sm">Daniel Uchechukwu Ugorji</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {fmtDate(post.date)}
                </div>
              </div>
            </div>
          </header>

          {/* Main Content Body */}
          <section
            className="blog-content text-base sm:text-lg leading-relaxed text-muted-foreground mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* About Author Card */}
          <section className="glass rounded-3xl p-6 sm:p-10 border border-glass-border">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border-2 border-primary/20 flex-shrink-0">
                <img
                  src={portrait}
                  alt="Daniel Uchechukwu Ugorji"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center sm:text-left space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-gradient">Daniel Uchechukwu Ugorji</h3>
                  <p className="text-sm text-muted-foreground mt-1">Web Developer & Creative Designer</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  A Computer Science student and digital brand strategist building premium web applications, 
                  responsive systems, and visual layouts. I help creators and companies design online experiences that match their ambition.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                  <a
                    href="mailto:danieluchechukwu57@gmail.com"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 bg-gradient-primary text-primary-foreground rounded-xl shadow-glow hover:scale-105 transition-all duration-300"
                  >
                    <Mail className="h-3.5 w-3.5" /> Email Me
                  </a>
                  <a
                    href="https://wa.me/2349112183658"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 glass rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    <MessageSquare className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* Embedded Custom Styles */}
      <style>{`
        .blog-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: hsl(var(--muted-foreground));
        }
        .blog-content strong {
          color: hsl(var(--foreground));
          font-weight: 600;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
          font-family: var(--font-display);
        }
        .blog-content ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1.75rem;
          color: hsl(var(--muted-foreground));
          line-height: 1.8;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
        }
        .blog-content code {
          background-color: hsl(var(--accent));
          color: hsl(var(--primary));
          padding: 0.15rem 0.4rem;
          border-radius: 0.375rem;
          font-family: monospace;
          font-size: 0.85em;
          border: 1px solid hsl(var(--border) / 0.5);
        }
        .blog-content pre {
          background-color: hsl(var(--accent) / 0.4);
          padding: 1.25rem;
          border-radius: 1rem;
          overflow-x: auto;
          margin-top: 1rem;
          margin-bottom: 1.75rem;
          border: 1px solid hsl(var(--border) / 0.4);
        }
        .blog-content pre code {
          background-color: transparent;
          border: none;
          padding: 0;
          border-radius: 0;
          color: hsl(var(--foreground));
          font-size: 0.9em;
        }
      `}</style>

      <Footer />
    </main>
  );
};

export default BlogPostDetail;
