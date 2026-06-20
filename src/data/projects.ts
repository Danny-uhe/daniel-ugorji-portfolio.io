import beauty from "@/assets/WhatsApp Image 2026-04-27 at 5.27.21 PM.jpeg";
import church from "@/assets/project-church.jpg";
import aws from "@/assets/AWS-HOTED.png";
import mongo from "@/assets/project-mongo.jpg";
import landing from "@/assets/Port-harcout-brand.jpeg";
import social from "@/assets/project-social.jpg";
import realEstate from "@/assets/project-real-estate.png";
import altPortfolio from "@/assets/project-alt-portfolio.png";

/* ─── types ─── */
export type Category = "Web" | "Design" | "Cloud" | "Full Stack";
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
    categories: ["Web", "Design"],
    tag: "Web & Design",
    ownership: "collaboration",
    collaborators: ["UI Designer", "Photographer"],
    liveLink: "https://glowbeautystudio.com",
    repoLink: "https://github.com/Danny-uhe/daniel-ugorji-portfolio.io",
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
    slug: "church-event-flyers",
    title: "Church Event Flyer Designs",
    description:
      "Flyer system and event graphics for worship gatherings — modern, vibrant, generated with AI tools.",
    longDescription:
      "Designed a series of modern, high-impact event flyers and social graphics for church worship gatherings. Using advanced AI image generation and graphic design tools, the flyers blend high-quality creative concepts with reverent, clean layout presentation.",
    image: church,
    categories: ["Design"],
    tag: "AI Flyer Design",
    ownership: "personal",
    liveLink: "https://github.com/Danny-uhe",
    repoLink: "https://github.com/Danny-uhe",
    year: "2026",
    techStack: ["Midjourney", "Canva", "Photoshop", "Figma"],
    challenge:
      "Needed a rapid, cost-effective way to generate custom, high-concept visual assets that resonate emotionally with event themes without spending weeks on manual illustration.",
    solution:
      "Leveraged AI image generation for bespoke background imagery and blended it with modern typography, branding principles, and layout grids in Photoshop and Figma.",
    outcome:
      "Created professional, print-ready church event flyers with extremely fast turnaround times, demonstrating hybrid creative design and AI integration capabilities.",
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
    repoLink: "https://github.com/Danny-uhe/daniel-ugorji-portfolio.io",
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
    slug: "social-media-graphic-designs",
    title: "Social Media Flyer Designs",
    description:
      "Flyer templates, marketing graphics, and custom visual assets generated with AI tools.",
    longDescription:
      "Developed an AI-powered visual asset design kit containing promotional flyers, banner templates, and social graphics. Utilizing AI generation models for high-quality background and focal assets, combined with editorial text layout styles, to create a premium social presence.",
    image: social,
    categories: ["Design"],
    tag: "AI Flyer Kit",
    ownership: "personal",
    liveLink: "https://github.com/Danny-uhe",
    repoLink: "https://github.com/Danny-uhe",
    year: "2024",
    techStack: ["AI Image Models", "Photoshop", "Canva", "Figma"],
    challenge:
      "Creating highly customized, atmospheric flyer graphics for promotional campaigns is time-consuming and often requires custom digital art resources.",
    solution:
      "Co-created graphics with AI art generators, upscale networks, and vector layouts to produce rich, atmospheric marketing cards ready for social publishing.",
    outcome:
      "Produced a complete social graphics kit that elevates digital campaigns with high-concept artwork, showcasing how AI and digital design can work hand-in-hand.",
  },
  {
    slug: "real-estate-company-site",
    title: "Real Estate Company Site",
    description:
      "Modern property search and listing landing page featuring active filter controls.",
    longDescription:
      "A clean, responsive real estate landing page featuring a hero search interface for addresses, cities, and ZIP codes. Built to demonstrate layout styling, custom navigation headers, and advanced property search filters.",
    image: realEstate,
    categories: ["Web", "Design"],
    tag: "Real Estate",
    ownership: "personal",
    liveLink: "https://real-estate-company-site.vercel.app/",
    repoLink: "https://github.com/Danny-uhe/Real-Estate-Company.git",
    year: "2025",
    techStack: ["React", "Tailwind CSS", "Vite"],
    challenge:
      "Implementing a modern, high-contrast property search bar with advanced toggle filters, and maintaining a clean visual balance with background hero imagery.",
    solution:
      "Used React components for a modular layout, created a responsive navigation header (Home, Properties, Contacts, Login), and structured a search input field with advanced action triggers.",
    outcome:
      "A highly engaging real estate search landing page with a responsive layout that looks professional across all devices.",
  },
  {
    slug: "portfolio-website-design",
    title: "Alternative Portfolio Design",
    description:
      "Minimalist dark-themed developer portfolio concept with high-contrast UI details.",
    longDescription:
      "An alternative dark-mode portfolio concept exploring typography-driven headers, quick action buttons ('View Projects', 'Get in Touch'), and a floating social icon deck.",
    image: altPortfolio,
    categories: ["Web", "Design"],
    tag: "UI Concept",
    ownership: "personal",
    liveLink: "https://v0-portfolio-website-design-two-liard.vercel.app/",
    repoLink: "https://github.com/Danny-uhe/daniel-ugorji-portfolio.io",
    year: "2025",
    techStack: ["React", "Tailwind CSS", "v0.dev", "Figma"],
    challenge:
      "Designing a high-impact developer homepage that guides visitors to key actions ('Hire Me', 'View Projects') immediately while keeping a clean, low-clutter layout.",
    solution:
      "Implemented a high-contrast cyan color theme for primary CTA buttons, built a floating footer for social profiles (GitHub, LinkedIn, Twitter), and included a dynamic 'Available for new opportunities' status badge.",
    outcome:
      "A sleek developer landing page template highlighting modern minimalist web layouts and fast-loading web structure.",
  },
  {
    slug: "crumbs-co",
    title: "Crumbs Co. Bakery",
    description:
      "Vibrant landing page for a baking restaurant and pastry bakery with a custom menu.",
    longDescription:
      "A colorful, modern web presence built for Crumbs Co. — a premium baking restaurant and dessert house. Features custom menus, chef profiles, and interactive reservation card options.",
    image: beauty,
    categories: ["Web", "Design"],
    tag: "Bakery & Cafe",
    ownership: "personal",
    liveLink: "https://crumb-co-zeta.vercel.app/",
    repoLink: "https://github.com/Danny-uhe/-Crumb-Co..git",
    year: "2025",
    techStack: ["HTML", "CSS", "JavaScript", "Vite"],
    challenge:
      "Creating an appetite-inducing design system that highlights pastries and menus with clean visual hierarchy.",
    solution:
      "Crafted a warm, engaging color scheme with rich typography and structured the menu cards using CSS Grid.",
    outcome:
      "Launched a fast-loading landing page that elevates local restaurant branding with an interactive menu experience.",
  },
];

/* ─── filter helpers ─── */
export const categoryFilters: ("All" | Category)[] = [
  "All",
  "Web",
  "Design",
  "Cloud",
  "Full Stack",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

