# 🌐 Daniel Uchechukwu Ugorji — Portfolio & Brand Showcase

Welcome to the official repository for Daniel Uchechukwu Ugorji's personal portfolio, creative brand showcase, and resume website. This is a premium, modern, responsive web application designed to highlight a diverse set of skills ranging from **Frontend Engineering** and **Cloud Deployments** to **Brand Identity** and **Full Stack Development**.

🔗 **Live Website:** [danielugorji.dev](https://danielugorji.dev)  
🔗 **Repository URL:** [daniel-ugorji-portfolio.io](https://github.com/Danny-uhe/daniel-ugorji-portfolio.io)

---

## ✨ Features

- **🚀 Modern Single-Page Navigation:** Fluid transitions between sections such as Hero, About, Projects, Services, Testimonials, and Contact.
- **💼 Interactive Project Showcase:** Dynamic filtering of projects by categories (`Web`, `Design`, `Cloud`, `Brand`, `Full Stack`).
- **🔍 Deep-Dive Case Studies:** Dedicated `/projects/:slug` routing highlighting the specific *Challenge*, *Solution*, and *Outcome* of each project.
- **📄 Interactive Digital Resume:** A sleek `/resume` page rendering a professional CV, fully responsive and optimized for clean readability and printing.
- **✍️ Personal Blog:** A clean `/blog` page layout designed for sharing tech insights, digital branding strategies, and reflections.
- **🎨 Premium Dark Aesthetics:** Styled with a tailored HSL dark-mode theme, sleek card hover effects, custom gradients, and micro-interactions.
- **📬 Integrated WhatsApp & Email Flows:** Frictionless booking and contact mechanisms optimized for high conversion.

---

## 🛠️ Technology Stack

The project is built using a modern, scalable frontend tech stack:

- **Core**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
- **Routing & State**: [React Router Dom v6](https://reactrouter.com/) + [@tanstack/react-query](https://tanstack.com/query/latest)
- **Icons & Motion**: [Lucide React](https://lucide.dev/) + [Framer Motion](https://www.framer.com/motion/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Testing & Quality**: [Vitest](https://vitest.dev/) + [ESLint](https://eslint.org/)

---

## 📁 Directory Structure

```text
├── public/                 # Static assets (favicons, manifest, etc.)
├── src/
│   ├── assets/             # Images, screenshots, and visual branding assets
│   ├── components/
│   │   ├── portfolio/      # Core sections (Hero, About, Projects, Contact, Footer)
│   │   └── ui/             # Reusable Shadcn UI design components
│   ├── data/
│   │   └── projects.ts     # Central database/source-of-truth for all projects
│   ├── hooks/              # Custom hooks (e.g., Theme/Context provider)
│   ├── pages/              # Routing entry points (Index, AllProjects, ProjectDetail, Blog, Resume)
│   ├── App.tsx             # Main App Router and Provider setup
│   ├── index.css           # Global CSS variables, custom glassmorphism styles
│   └── main.tsx            # App mount element
├── tailwind.config.ts      # Tailwind configuration with custom theme tokens
├── vite.config.ts          # Vite configuration
└── package.json            # Scripts & project dependencies
```

---

## 🚀 Getting Started

To run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Danny-uhe/daniel-ugorji-portfolio.io.git
   cd daniel-ugorji-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build the production bundle:**
   ```bash
   npm run build
   ```

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🏆 Featured Projects

Here are a few projects showcased on the platform:
1. **Glow Beauty Studio:** Premium website for a lash extension and microblading business in Port Harcourt with an integrated WhatsApp booking flow.
2. **MongoDB Atlas Blog API:** Full-stack blog API application built with Node.js/Express, MongoDB Atlas, and secure JWT auth.
3. **AWS Hosted Frontend:** Production frontend deployment on AWS utilizing CloudFront, S3 hosting, Route 53, and GitHub Actions CI/CD.
4. **Port Harcourt in Pictures:** A visually rich, performance-optimized landscape gallery landing page showcasing Port Harcourt.

---

## 📬 Contact & Connect

If you want to collaborate or have any inquiries:

- **📧 Email:** [danieluchechukwu57@gmail.com](mailto:danieluchechukwu57@gmail.com)
- **🌍 Website:** [danielugorji.dev](https://danielugorji.dev)
- **🐙 GitHub:** [@Danny-uhe](https://github.com/Danny-uhe)
