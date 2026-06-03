import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  const quickLinks = [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/#contact" },
  ];

  const renderLink = (l: { label: string; href: string }) => {
    if (l.href.startsWith("/#") && location.pathname === "/") {
      return (
        <a href={l.href.replace("/", "")} className="text-muted-foreground hover:text-primary transition-colors">
          {l.label}
        </a>
      );
    }
    return (
      <Link to={l.href} className="text-muted-foreground hover:text-primary transition-colors">
        {l.label}
      </Link>
    );
  };

  return (
    <footer className="relative border-t border-border/60 pt-16 pb-10 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="container relative">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">D</span>
              Daniel<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Creative tech professional building premium digital experiences for ambitious brands.
            </p>
          </div>

          <div>
            <div className="font-heading font-semibold mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>{renderLink(l)}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-heading font-semibold mb-4">Connect</div>
            <div className="flex gap-3 mb-4">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">daniel.ugorji@email.com</p>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Daniel Uchechukwu Ugorji. All rights reserved.</p>
          <p className="font-mono text-xs">Crafted with intention · Faith · Code</p>
        </div>
      </div>
    </footer>
  );
};
