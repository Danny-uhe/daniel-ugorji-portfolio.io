export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  content: string; // HTML format for rendering
}

export const blogPosts: BlogPost[] = [
  {
    slug: "full-stack-roadmap-frontend-to-backend",
    title: "The Full-Stack Roadmap: Upgrading from Frontend to Backend",
    excerpt: "My active journey of upgrading from creative frontend interfaces to server architectures, databases, and full-stack engineering.",
    date: "2026-06-18",
    readTime: "9 min",
    category: "Personal",
    featured: true,
    content: `
      <p>For the first few years of my tech journey, I was focused on the visual side of the web. I loved writing HTML, tuning CSS animations, and building interfaces in React. But as I built more complex projects, I kept hitting a wall: <em>how do I handle user accounts? Where do I store data? How do I write secure server logic?</em></p>
      
      <p>I realized that to build real-world products, I needed to upgrade my skills and learn backend engineering. Here is the roadmap I'm currently using to make the transition to full-stack development, and what I've learned so far.</p>

      <h3>Phase 1: Server Basics with Node.js & Express</h3>
      <p>Since I already knew JavaScript, Node.js was the perfect bridge. I started by understanding how servers listen to requests, process them, and return responses. Express.js made it simple to define clean REST routes. I learned how middleware functions act as checkpoints—handling JSON parsing, authentication, and error logging before requests reach controllers.</p>

      <h3>Phase 2: Database Modeling (MongoDB Atlas)</h3>
      <p>Data has to live somewhere. I chose MongoDB because its document-based structure maps naturally to JavaScript objects (JSON). Using MongoDB Atlas (cloud database) taught me how to host my database in the cloud, manage cluster access, and secure credentials using environment variables. I also learned Mongoose to enforce schemas and build relationships between collections.</p>

      <h3>Phase 3: Security & Auth</h3>
      <p>This is where backend gets serious. I learned how to hash user passwords using <code>bcrypt</code> before saving them to the database (never save plain text!). I then integrated JSON Web Token (JWT) authorization, allowing users to log in, receive a secure token, and access private API endpoints.</p>

      <h3>Current Focus: Scale and Architecture</h3>
      <p>Right now, I am focusing on cloud deployments, writing comprehensive unit tests for APIs, and learning database indexing to optimize query times. Moving from frontend to backend changed how I think about software. I no longer just think about how a button looks—I think about how the database handles that button's action. It's challenging, but incredibly rewarding.</p>
    `
  },
  {
    slug: "mastering-asynchronous-javascript-nodejs",
    title: "Mastering Asynchronous JavaScript: Callbacks, Promises, and Async/Await",
    excerpt: "A practical guide to handling asynchronous operations in Node.js — from callbacks to promises and async/await.",
    date: "2026-06-20",
    readTime: "6 min",
    category: "Backend",
    featured: true,
    content: `
      <p>As Node.js is built on an asynchronous, event-driven architecture, mastering asynchronous control flows is essential for writing efficient backend applications. Today, let's break down the evolution of asynchronous JavaScript: <strong>Callbacks</strong>, <strong>Promises</strong>, and <strong>Async/Await</strong>.</p>

      <h3>1. Callbacks: The Foundations</h3>
      <p>A callback is a function passed as an argument to another function, which is then executed after some asynchronous task completes. In Node.js, we see callbacks everywhere in file systems and networking:</p>
      <pre><code>const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File Content:', data);
});</code></pre>
      <p>While callbacks work, nesting multiple callbacks inside each other leads to the infamous <strong>"Callback Hell"</strong> (or the pyramid of doom), making code extremely hard to read and debug.</p>

      <h3>2. Promises: Escape from Callback Hell</h3>
      <p>Introduced in ES6, a Promise represents the eventual completion (or failure) of an asynchronous operation. Instead of nesting functions, we chain them using <code>.then()</code> and catch errors using <code>.catch()</code>:</p>
      <pre><code>const readFilePromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

readFilePromise('data.txt')
  .then(data => console.log('File Content:', data))
  .catch(err => console.error('Error:', err));</code></pre>

      <h3>3. Async / Await: Cleaner and Synchronous-Like</h3>
      <p>Async/Await, introduced in ES2017, is syntactic sugar built on top of Promises. It allows you to write asynchronous code that looks and behaves like synchronous code, using <code>try/catch</code> blocks for clean error handling:</p>
      <pre><code>async function run() {
  try {
    const data = await readFilePromise('data.txt');
    console.log('File Content:', data);
  } catch (err) {
    console.error('Error:', err);
  }
}

run();</code></pre>
      <p>Using <code>async/await</code> is the modern standard for writing clean, readable backend APIs in Node.js!</p>
    `
  },
  {
    slug: "why-typescript-changed-how-i-code",
    title: "Why TypeScript Changed How I Code: From JavaScript to Type-Safe React Components",
    excerpt: "A look at how TypeScript made my React apps self-documenting and virtually eliminated runtime type errors.",
    date: "2026-05-10",
    readTime: "7 min",
    category: "Frontend",
    featured: false,
    content: `
      <p>When I first started writing React applications with vanilla JavaScript, everything felt fast and fluid. But as my projects grew, I started facing frustrating issues: passing the wrong props to a component, spelling variable names wrong, or trying to access fields on <code>undefined</code> objects. These bugs would crash my app at runtime, making debugging a chore.</p>
      
      <p>That is when I adopted <strong>TypeScript</strong>. Here is why TypeScript is now a non-negotiable part of my frontend workflow.</p>

      <h3>1. Catching Bugs at Compile Time</h3>
      <p>With JavaScript, you only discover typos or reference errors when you run the app and click around. TypeScript acts as a compiler checkpoint, pointing out type mismatches or missing arguments <strong>in your editor</strong> before you ever save the file. It saves hours of manual browser testing.</p>

      <h3>2. Self-Documenting React Props</h3>
      <p>When working on complex components, it's easy to forget what arguments they expect. By defining strict TypeScript interfaces for component props, you get autocomplete in your IDE showing exactly what arguments are required and what types they should be:</p>
      <pre><code>interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary'; // Optional prop with union type
}

export const CustomButton = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
  return (
    &lt;button onClick={onClick} className={\`btn-\${variant}\`}&gt;
      {label}
    &lt;/button&gt;
  );
};</code></pre>

      <h3>3. Autocomplete and Confidence</h3>
      <p>TypeScript gives you intellisense. If you query an API, you can type the response data structure. When writing code, pressing <code>Ctrl + Space</code> instantly displays all properties available on that object. Refactoring code becomes incredibly safe because you can rename variables and immediately see compile errors wherever that variable was used.</p>
    `
  },
  {
    slug: "demystifying-react-state-lifecycle",
    title: "Demystifying React State: Props, State, and the Lifecycle Hook",
    excerpt: "How I mastered React data flows, component lifecycles, and managing side effects with useEffect.",
    date: "2025-11-28",
    readTime: "8 min",
    category: "Frontend",
    featured: false,
    content: `
      <p>Moving from static HTML/CSS to React requires a fundamental shift in how you think about website data. You no longer manually select HTML elements and change their text. Instead, you declare **State**, and React updates the screen automatically when that state changes.</p>
      
      <p>Understanding React's core data cycle—props, state, and hooks—was one of the biggest milestones in my frontend journey.</p>

      <h3>State vs. Props</h3>
      <p>Simply put:</p>
      <ul>
        <li><strong>Props:</strong> Short for properties. These are read-only variables passed down from a parent component to a child. They cannot be modified by the child.</li>
        <li><strong>State:</strong> Internal data managed inside the component itself. The component can change its own state using a setter function (e.g. <code>useState</code>). When state changes, the component re-renders.</li>
      </ul>

      <h3>Handling Side Effects with useEffect</h3>
      <p>When building real-world apps, you often need to perform actions that are outside of the render flow—like fetching data from a backend server, setting timers, or subscribing to events. These are called <strong>side effects</strong>, and React provides the <code>useEffect</code> hook to manage them safely.</p>
      <pre><code>useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/api/projects');
    const data = await response.json();
    setProjects(data);
  };
  fetchData();
}, []); // Empty dependency array means this runs only once when the component mounts</code></pre>

      <p>Mastering this cycle is what allowed me to transition from building simple web pages to writing interactive, dynamic web applications.</p>
    `
  },
  {
    slug: "deploying-react-apps-on-aws",
    title: "How I Deploy React Apps on AWS with S3, CloudFront & CI/CD",
    excerpt: "A step-by-step walkthrough of my production deployment pipeline — from building the app to automatic deployments via GitHub Actions.",
    date: "2026-04-15",
    readTime: "8 min",
    category: "Cloud",
    featured: false,
    content: `
      <p>Deploying a React single-page application (SPA) doesn't have to be expensive or complex. While platforms like Vercel and Netlify are popular, deploying directly on <strong>AWS (Amazon Web Services)</strong> gives you total control over caching, custom domains, and cost. In fact, hosting a typical React portfolio or small business site on AWS can cost less than <strong>$0.50 per month</strong>.</p>
      
      <h3>The Architecture</h3>
      <p>Our production-grade deployment relies on three primary AWS services:</p>
      <ul>
        <li><strong>Amazon S3:</strong> Holds our built static assets (HTML, JS, CSS, images).</li>
        <li><strong>Amazon CloudFront:</strong> A global CDN (Content Delivery Network) that caches our site at edge locations worldwide for sub-second load times and provides SSL encryption.</li>
        <li><strong>AWS Route 53:</strong> Manages our DNS records and routes our domain name to CloudFront.</li>
      </ul>

      <h3>Step 1: Setting up the S3 Bucket</h3>
      <p>First, we create an S3 bucket with the same name as our domain (e.g., <code>myportfolio.com</code>). We enable "Static website hosting" in the bucket properties, specifying <code>index.html</code> as the index document.</p>
      <p>Important: Keep the bucket public access blocked! We will configure CloudFront to access it securely using an <strong>Origin Access Control (OAC)</strong> policy, preventing users from bypassing our CDN.</p>

      <h3>Step 2: Securing with CloudFront and SSL</h3>
      <p>Next, we create a CloudFront distribution pointing to our S3 bucket. We use <strong>AWS Certificate Manager (ACM)</strong> to generate a free SSL certificate for our domain. In the CloudFront settings, we define our custom domain and select the SSL certificate.</p>
      <p>To make React Router work correctly, we configure a custom error response in CloudFront: when a <code>404 Not Found</code> error occurs, we redirect the response to <code>/index.html</code> with a <code>200 OK</code> status code. This allows client-side routing to handle pages correctly.</p>

      <h3>Step 3: Automating with GitHub Actions</h3>
      <p>Finally, we set up a CI/CD pipeline so that every push to the <code>main</code> branch automatically builds and deploys our code. Here is the workflow file we use:</p>
      <pre><code>name: Deploy React SPA
on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install & Build
        run: |
          npm ci
          npm run build
      - name: Deploy to S3
        uses: jakejarvis/s3-sync-action@master
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: \${{ secrets.AWS_BUCKET_NAME }}
          AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: 'us-east-1'
          SOURCE_DIR: 'dist'
      - name: Invalidate CloudFront Cache
        run: |
          aws cloudfront create-invalidation --distribution-id \${{ secrets.CLOUDFRONT_DIST_ID }} --paths "/*"
        env:
          AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_DEFAULT_REGION: 'us-east-1'</code></pre>

      <p>With this setup, deployments take under 2 minutes, and changes go live globally with zero downtime!</p>
    `
  },
  {
    slug: "building-restful-apis-with-nodejs",
    title: "Building Production-Ready RESTful APIs with Node.js & MongoDB",
    excerpt: "Lessons learned from building the Blog API — covering JWT auth, input validation, Swagger docs, and deployment on Render.",
    date: "2026-03-20",
    readTime: "12 min",
    category: "Backend",
    featured: false,
    content: `
      <p>Building a backend API that works on your local machine is easy. Building one that is secure, well-documented, and ready to scale in production is a completely different story. During the development of my recent Blog API project, I compiled several industry best practices that make APIs truly production-ready.</p>

      <h3>1. Security First: JWT Authentication & Refresh Tokens</h3>
      <p>Stateless authentication using <strong>JSON Web Tokens (JWT)</strong> is standard, but simply sending a token with a 30-day expiration is a major security risk. If a token is intercepted, the attacker has access for a month.</p>
      <p>Instead, implement a dual-token system:</p>
      <ul>
        <li><strong>Access Token:</strong> Short lifetime (e.g., 15 minutes), stored in memory or short-term state.</li>
        <li><strong>Refresh Token:</strong> Long lifetime (e.g., 7 days), stored securely in an <code>httpOnly</code>, secure cookie. When the access token expires, the client calls a refresh endpoint to get a new access token without forcing the user to log in again.</li>
      </ul>

      <h3>2. Input Validation at the Gate</h3>
      <p>Never trust user input. Malformed payloads can crash your server or corrupt your database. Use validation libraries like <strong>Joi</strong> or <strong>Zod</strong> to enforce strict schemas on all incoming requests before they reach your controllers.</p>
      <pre><code>const registerSchema = z.object({
  username: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(8),
});

app.post('/api/auth/register', (req, res) => {
  const result = registerSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }
  // proceed to save to MongoDB...
});</code></pre>

      <h3>3. Interactive API Documentation with Swagger</h3>
      <p>If developers can't easily figure out how to consume your API, they won't use it. Interactive documentation using <strong>Swagger (OpenAPI)</strong> allows users to test your API directly from their browser.</p>
      <p>By wiring Swagger UI middleware into Express, you expose a clean dashboard (like the one running live on my project) displaying all schemas, response codes, and authentication requirements.</p>

      <h3>4. Production Hosting on Render</h3>
      <p>For deployment, we used <strong>Render</strong>. It links directly to GitHub, builds automatically on push, and provides automatic TLS certificates. We configured environment variables securely and added rate limiting using <code>express-rate-limit</code> to protect the server from DDoS attacks.</p>
    `
  },
  {
    slug: "modern-css-techniques-2026",
    title: "Modern CSS Techniques Every Developer Should Know in 2026",
    excerpt: "From container queries to scroll-driven animations — here are the CSS features that changed how I build websites.",
    date: "2026-02-10",
    readTime: "6 min",
    category: "Frontend",
    featured: false,
    content: `
      <p>The pace at which CSS is evolving is incredible. In 2026, many design patterns that used to require heavy JavaScript libraries (like ScrollMagic, GSAP, or complex resize listeners) can now be implemented natively in CSS with just a few lines of code.</p>

      <h3>1. Native Scroll-Driven Animations</h3>
      <p>Scroll-driven animations link the animation progress directly to the user's scroll position. With the new <code>scroll-timeline</code> properties, you can create smooth parallax effects, reading progress bars, and fade-in animations on scroll natively:</p>
      <pre><code>@keyframes fade-in {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.animate-on-scroll {
  animation: fade-in linear;
  animation-timeline: view();
  animation-range: entry 10% cover 30%;
}</code></pre>

      <h3>2. Container Queries</h3>
      <p>For years, we relied on media queries which look at the width of the entire viewport. Container queries let us write styles based on the width of the **parent container** instead. This is extremely useful for modular design systems where a card needs to adjust its layout depending on whether it's placed in a narrow sidebar or a wide main feed.</p>
      <pre><code>.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-layout {
    flex-direction: row;
  }
}</code></pre>

      <h3>3. CSS Nesting and Color Mix</h3>
      <p>CSS nesting is now native, meaning you no longer need SASS/SCSS compiler steps just to nest child selectors. Additionally, <code>color-mix()</code> allows you to create color variations dynamically in the browser (e.g., blending primary color with 20% white for hover states) without writing separate hex codes.</p>
    `
  },
  {
    slug: "css-grid-vs-flexbox-layout-systems",
    title: "CSS Grid vs. Flexbox: Knowing When to Use Which Layout System",
    excerpt: "Demystifying CSS layout systems: a guide on choosing between Flexbox for 1D layouts and CSS Grid for 2D grids.",
    date: "2025-10-12",
    readTime: "6 min",
    category: "Frontend",
    featured: false,
    content: `
      <p>When I first started building web interfaces, laying out items on a page felt like guesswork. I struggled with floats, inline-blocks, and unexpected margin margins. Learning <strong>Flexbox</strong> and <strong>CSS Grid</strong> changed everything, giving me total control over alignment and spacing.</p>

      <h3>Flexbox: One-Dimensional Layouts</h3>
      <p>Flexbox (Flexible Box Layout) is designed for laying out items in a **single dimension**—either as a row or a column. It is perfect for headers, navigation bars, and aligning elements like icons and text within a card:</p>
      <pre><code>.navbar {
  display: flex;
  justify-content: space-between; /* push items to outer edges */
  align-items: center; /* center items vertically */
}</code></pre>

      <h3>CSS Grid: Two-Dimensional Layouts</h3>
      <p>CSS Grid is designed for **two-dimensional layouts**—meaning you want to align elements in rows AND columns simultaneously. It is ideal for main page layouts, galleries, and dashboards:</p>
      <pre><code>.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1-fraction));
  gap: 1.5rem;
}</code></pre>

      <h3>The Golden Rule</h3>
      <p>A simple way to decide: if you are laying out items in a straight line (horizontal or vertical), use <strong>Flexbox</strong>. If you are designing a full page layout or a grid structure where items need to align on both axes, use <strong>CSS Grid</strong>.</p>
    `
  },
  {
    slug: "from-figma-to-code",
    title: "From Figma to Code: My Design-to-Development Workflow",
    excerpt: "How I bridge the gap between design and development — tools, techniques, and tips for pixel-perfect implementations.",
    date: "2025-12-18",
    readTime: "9 min",
    category: "Workflow",
    featured: false,
    content: `
      <p>As a designer-developer, the transition from visual mockup to code is one of my favorite parts of a project. However, without a systematic workflow, translating designs can lead to layout discrepancies, inconsistent padding, and messy CSS. Here is the workflow I use to ensure a pixel-perfect implementation.</p>

      <h3>Step 1: The Design Token Audit</h3>
      <p>Before writing a single line of React code, I inspect my Figma file and map out my design tokens in Tailwind's configuration. This includes:</p>
      <ul>
        <li>Defining color variables (using HSL values for easy opacity manipulation).</li>
        <li>Setting up spacing scales (ensuring padding and margin are multiples of 4px).</li>
        <li>Mapping typography settings (font sizes, line heights, and weights).</li>
      </ul>

      <h3>Step 2: Designing Layout Grids First</h3>
      <p>I build layout structures using HTML semantic elements first. I map out main grids, flex containers, and responsive breakpoints before placing any text, images, or interactive buttons. This acts as the skeletal framework.</p>

      <h3>Step 3: Component Isolation</h3>
      <p>I build complex elements (like custom dropdowns, cards, or carousels) as isolated components in React. Using TypeScript ensures that each component accepts explicit props, making them highly reusable and stable throughout the project.</p>
    `
  },
  {
    slug: "why-i-chose-web-development",
    title: "Why I Chose Web Development — My Journey From Curiosity to Career",
    excerpt: "A personal story about how I went from knowing nothing about code to building full-stack applications and deploying them to the cloud.",
    date: "2025-11-05",
    readTime: "5 min",
    category: "Personal",
    featured: false,
    content: `
      <p>We all start somewhere. For me, web development began as pure curiosity. I wanted to understand how the web applications I used every day actually worked behind the scenes. That curiosity quickly grew into a passion, and eventually, a professional path.</p>

      <h3>The Spark</h3>
      <p>My journey began with HTML and CSS—learning how to position boxes, set colors, and make things responsive. There was something incredibly satisfying about typing code on the left side of the screen and immediately seeing a visual interface render on the right.</p>

      <h3>Stepping into JavaScript & React</h3>
      <p>Moving from static styling to dynamic scripting with JavaScript opened up a whole new world. I learned how to manage state, fetch data from external APIs, and build reactive components. React became my tool of choice due to its clean component-based structure and robust ecosystem.</p>

      <h3>Expanding to the Cloud</h3>
      <p>As I built more advanced projects, I realized that writing code was only half the battle; knowing how to host, scale, and secure it was equally crucial. This led me to study cloud computing, database integration (like MongoDB Atlas), and automated CI/CD pipelines on AWS.</p>

      <p>Today, as a Computer Science student and freelancer, I get to use these skills to help real businesses show up online with high-quality tech and creative direction. The journey from curiosity to career is ongoing, and I can't wait to see what comes next!</p>
    `
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

