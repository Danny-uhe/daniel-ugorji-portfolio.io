import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Download, Briefcase, GraduationCap, Award, Code2, MapPin, Mail, Globe,
} from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education";
}

const timeline: TimelineItem[] = [
  {
    period: "2025 — Present",
    title: "Frontend Developer & Creative Designer",
    company: "Freelance",
    description: "Building premium websites, brand identities, and cloud-deployed applications for clients across Nigeria and beyond.",
    type: "work",
  },
  {
    period: "2024 — 2025",
    title: "Web Developer",
    company: "Thexora",
    description: "Developed and deployed production frontend applications on AWS. Managed CI/CD pipelines and CloudFront distributions.",
    type: "work",
  },
  {
    period: "2024 — Present",
    title: "Computer Science",
    company: "University",
    description: "Studying computer science with focus on software engineering, cloud computing, and full-stack development.",
    type: "education",
  },
  {
    period: "2023 — 2024",
    title: "Brand Designer",
    company: "Freelance",
    description: "Created visual identities, social media branding kits, and marketing materials for small businesses and churches.",
    type: "work",
  },
];

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "Vite", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT Auth"] },
  { category: "Cloud & DevOps", items: ["AWS S3", "CloudFront", "Route 53", "GitHub Actions", "Render", "Vercel"] },
  { category: "Design", items: ["Figma", "Adobe Photoshop", "Illustrator", "Canva", "UI/UX"] },
];

const certs = [
  "AWS Cloud Practitioner Essentials",
  "Meta Frontend Developer Certificate",
  "MongoDB University — Node.js Developer Path",
];

const Resume = () => {
  useEffect(() => {
    document.title = "Resume — Daniel Uchechukwu Ugorji";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-40" />
        <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-primary/20 blur-[120px] animate-blob" />
        <div className="container relative">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group print:hidden">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-widest mb-6">
                <span className="h-1 w-6 bg-gradient-primary rounded-full" />
                Resume
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
                My <span className="text-gradient">experience</span>.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Web developer, creative designer, and cloud enthusiast — here's a snapshot of my professional journey.
              </p>
            </div>
            <button 
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-semibold shadow-glow hover:scale-105 transition-all duration-300 self-start lg:self-auto print:hidden"
            >
              <Download className="h-4 w-4" />
              Print / Save CV
            </button>
          </div>

          {/* Contact pills */}
          <div className="flex flex-wrap gap-4 mt-10">
            {[
              { icon: MapPin, text: "Port Harcourt, Nigeria" },
              { icon: Mail, text: "danieluchechukwu57@gmail.com" },
              { icon: Globe, text: "danielugorji.dev" },
            ].map((item) => (
              <div key={item.text} className="glass rounded-xl px-4 py-3 flex items-center gap-2">
                <item.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-bold mb-10">Experience & Education</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-14 animate-fade-in" style={{ animationDelay: `${i * 120}ms` }}>
                  {/* Dot */}
                  <div className={`absolute left-2.5 top-1.5 h-[14px] w-[14px] rounded-full border-2 ${item.type === "work" ? "border-primary bg-primary/30" : "border-gold bg-gold/30"}`} />

                  <div className="glass rounded-2xl p-6 hover:shadow-elegant transition-all duration-500">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full ${item.type === "work" ? "bg-primary/15 text-primary" : "bg-gold/15 text-gold"}`}>
                        {item.type === "work" ? <Briefcase className="h-3 w-3" /> : <GraduationCap className="h-3 w-3" />}
                        {item.type === "work" ? "Work" : "Education"}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">{item.period}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{item.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 border-t border-border/40">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-10">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group) => (
              <div key={group.category} className="glass rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="h-4 w-4 text-primary" />
                  <h3 className="font-heading font-semibold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent text-accent-foreground">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 border-t border-border/40">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-bold mb-8">Certifications</h2>
          <div className="space-y-4">
            {certs.map((cert, i) => (
              <div key={i} className="glass rounded-2xl p-5 flex items-center gap-4 hover:shadow-elegant transition-all duration-500 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-heading font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 print:hidden">
        <div className="container">
          <div className="glass rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 mesh-bg opacity-30" />
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Like what you see?</h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">Let's connect and discuss how I can bring value to your team or project.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-2xl font-display font-semibold shadow-glow hover:scale-105 transition-all duration-300">
                  Contact Me
                </Link>
                <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 glass rounded-2xl font-display font-semibold hover:scale-105 transition-all duration-300">
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media print {
          header, footer, nav, button, .print\\:hidden {
            display: none !important;
          }
          body, main {
            background: transparent !important;
            color: black !important;
          }
          section {
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
            border: none !important;
          }
          .glass {
            background: transparent !important;
            border: 1px solid rgba(0, 0, 0, 0.15) !important;
            box-shadow: none !important;
            color: black !important;
          }
          .text-muted-foreground {
            color: #374151 !important;
          }
          .text-gradient {
            background: none !important;
            -webkit-text-fill-color: initial !important;
            color: black !important;
            font-weight: bold !important;
          }
        }
      `}</style>

      <Footer />
    </main>
  );
};

export default Resume;
