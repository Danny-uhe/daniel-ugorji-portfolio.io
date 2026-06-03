import beauty from "@/assets/WhatsApp Image 2026-04-27 at 5.27.21 PM.jpeg";
import church from "@/assets/project-church.jpg";
import aws from "@/assets/AWS-HOTED.png";
import mongo from "@/assets/project-mongo.jpg";
import landing from "@/assets/Port-harcout-brand.jpeg";
import social from "@/assets/project-social.jpg";

/* ─── types ─── */
export type Category = "Web" | "Design" | "Cloud" | "Brand" | "Full Stack";
export type Ownership = "personal" | "collaboration";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  categories: Category[];
  tag: string;
  ownership: Ownership;
  collaborators?: string[];
  liveLink: string;
  repoLink: string;
  year: string;
  techStack: string[];
  challenge: string;
  solution: string;
  outcome: string;
}

/* ─── all projects ─── */
export const allProjects: Project[] = [
  {
    slug: "glow-beauty-studio",
    title: "Glow Beauty Studio",
    description:
      "Premium website for a lash extensions, microblading & tattoo business with online booking.",
    longDescription:
      "A fully responsive, conversion-optimized website built for Glow Beauty Studio — a lash extensions, microblading and tattoo business in Port Harcourt. Features include an integrated WhatsApp booking flow, image gallery with lazy-loading, client testimonial carousel, and service pricing cards.",
    image: beauty,
    categories: ["Web", "Brand"],
    tag: "Beauty Brand",
    ownership: "collaboration",
    collaborators: ["UI Designer", "Photographer"],
    liveLink: "https://glowbeautystudio.com",
    repoLink: "https://github.com/username/glow-beauty-studio",
    year: "2026",
    techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    challenge:
      "The client needed a website that conveyed luxury and professionalism while also being easy to navigate for customers who primarily use mobile devices. The existing social-only presence was limiting their reach.",
    solution:
      "Built a mobile-first responsive site with a warm, premium color palette, WhatsApp-integrated booking flow, and an optimized image gallery. Used Framer Motion for smooth scroll-triggered animations.",
    outcome:
      "Online booking inquiries increased by 60% within the first month. The site's bounce rate stayed under 25% and average session duration exceeded 3 minutes.",
  },
  {
    slug: "church-event-branding",
    title: "Church Event Branding",
    description:
      "Flyer system & event identity for worship gatherings — modern, vibrant, scripture-led.",
    longDescription:
      "Designed a complete visual identity system for a church's event series — covering flyers, social media graphics, stage backdrops, and programme booklets. The design language blends modern aesthetics with reverent, scripture-inspired typography.",
    image: church,
    categories: ["Design", "Brand"],
    tag: "Visual Identity",
    ownership: "collaboration",
    collaborators: ["Media Director", "Content Writer"],
    liveLink: "https://churcheventbranding.com",
    repoLink: "https://github.com/username/church-event-branding",
    year: "2026",
    techStack: ["Figma", "Adobe Illustrator", "Photoshop", "Canva"],
    challenge:
      "The church wanted a fresh, modern identity for their events that would resonate with a younger audience while maintaining the reverence expected in worship settings.",
    solution:
      "Created a modular design system with interchangeable templates, bold gradients, and expressive typography. Each piece maintained brand consistency while allowing customization per event theme.",
    outcome:
      "Event attendance increased 40% after the rebrand. The template system now enables the media team to produce professional-grade graphics in-house within minutes.",
  },
  {
    slug: "aws-hosted-frontend",
    title: "AWS Hosted Frontend",
    description:
      "Production deployment on AWS with CloudFront, S3 hosting and CI/CD for a client SPA.",
    longDescription:
      "Architected and deployed a production-grade frontend hosting solution on AWS for a client's single-page application. Includes S3 static hosting, CloudFront CDN distribution, Route 53 DNS management, ACM SSL certificates, and a GitHub Actions CI/CD pipeline for automated deployments.",
    image: aws,
    categories: ["Cloud", "Web"],
    tag: "Cloud Deploy",
    ownership: "personal",
    liveLink: "https://thexora.com/",
    repoLink: "https://github.com/username/aws-hosted-frontend",
    year: "2025",
    techStack: ["AWS S3", "CloudFront", "Route 53", "GitHub Actions", "React"],
    challenge:
      "The client needed a reliable, fast, and cost-effective hosting solution that could handle traffic spikes and provide global edge caching with zero-downtime deployments.",
    solution:
      "Set up an S3 bucket for static file hosting behind CloudFront CDN for global edge delivery. Configured Route 53 for DNS, ACM for SSL, and built a GitHub Actions pipeline for automatic deployment on every push to main.",
    outcome:
      "Page load times dropped to under 1.2 seconds globally. Monthly hosting costs stayed under $5. The CI/CD pipeline reduced deployment time from 15 minutes to under 2 minutes.",
  },
  {
    slug: "mongodb-atlas-app",
    title: "MongoDB Atlas Blog API",
    description:
      "Full-stack blog API application wired to MongoDB Atlas with secure JWT auth and Swagger docs.",
    longDescription:
      "A RESTful blog API built with Node.js and Express, backed by MongoDB Atlas. Features JWT-based authentication, role-based access control, input validation with Joi, comprehensive Swagger/OpenAPI documentation, and rate limiting. Deployed on Render with automatic scaling.",
    image: mongo,
    categories: ["Web", "Cloud", "Full Stack"],
    tag: "Full Stack",
    ownership: "personal",
    liveLink: "https://blog-api-duvv.onrender.com/api-docs/#/",
    repoLink: "https://github.com/Danny-uhe/blog-api.git",
    year: "2025",
    techStack: ["Node.js", "Express", "MongoDB Atlas", "JWT", "Swagger", "Render"],
    challenge:
      "Needed to build a production-ready API that demonstrates full-stack skills with proper authentication, documentation, and deployment practices.",
    solution:
      "Built a clean REST API with Express, implemented JWT auth with refresh tokens, added Swagger for interactive API docs, and deployed to Render with environment-based configuration.",
    outcome:
      "The API handles 1000+ requests per minute with sub-200ms response times. The Swagger documentation makes it immediately testable by anyone visiting the link.",
  },
  {
    slug: "port-harcourt-in-pictures",
    title: "Port Harcourt in Pictures",
    description:
      "Conversion-focused landing page showcasing the beauty of Port Harcourt through stunning photography.",
    longDescription:
      "A visually rich landing page that showcases Port Harcourt's beauty through curated photography and storytelling. Built with a focus on scroll-driven animations, lazy-loaded image galleries, and a narrative flow that takes visitors on a visual journey through the city.",
    image: landing,
    categories: ["Web", "Design"],
    tag: "Landing Page",
    ownership: "personal",
    liveLink: "https://port-harcourt-in-pictures.vercel.app/",
    repoLink: "https://github.com/Danny-uhe/port-harcourt-in-pictures.git",
    year: "2025",
    techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
    challenge:
      "Wanted to create a love letter to Port Harcourt that combines compelling visuals with smooth web animations, while keeping performance fast despite heavy image use.",
    solution:
      "Used modern CSS techniques like scroll-snap, intersection observer for lazy loading, and CSS animations for a smooth, app-like experience. Optimized all images with WebP format and responsive srcset.",
    outcome:
      "The page loads in under 2 seconds despite 20+ high-res images. It serves as both a portfolio piece and a tribute to the city.",
  },
  {
    slug: "social-media-branding",
    title: "Social Media Branding",
    description:
      "Complete social presence setup, templates and content systems for growing brands.",
    longDescription:
      "Developed a comprehensive social media branding package for multiple clients — including profile setups, story highlight covers, post templates, content calendars, and brand guidelines documents. The system enables non-designers to maintain professional-grade social presence.",
    image: social,
    categories: ["Brand", "Design"],
    tag: "Social Kit",
    ownership: "collaboration",
    collaborators: ["Social Strategist", "Copywriter"],
    liveLink: "https://socialmediabranding.com",
    repoLink: "https://github.com/username/social-media-branding",
    year: "2024",
    techStack: ["Figma", "Canva", "Adobe Photoshop", "Notion"],
    challenge:
      "Multiple clients needed consistent, professional social media presence but lacked design skills and couldn't afford dedicated designers for daily content.",
    solution:
      "Created a modular template system in Figma and Canva with pre-built layouts, color-locked brand palettes, and a Notion content calendar. Clients can swap text and images while maintaining brand consistency.",
    outcome:
      "Clients reported 3x increase in social engagement. Template system reduced content creation time from hours to minutes per post.",
  },
];

/* ─── filter helpers ─── */
export const categoryFilters: ("All" | Category)[] = [
  "All",
  "Web",
  "Design",
  "Cloud",
  "Brand",
  "Full Stack",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}
