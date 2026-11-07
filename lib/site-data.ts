export const site = {
  name: "Faleel H",
  displayName: "FALEEL H",
  handle: "thequitesch1ar__",
  role: "AI Full Stack Developer",
  location: "Thiruvarur, Tamil Nadu, India",
  email: "faleelmr4@gmail.com",
  phone: "+91 97909 33818",
  phoneHref: "+919790933818",
  linkedin: "linkedin.com/in/faleel-h-b772a1416",
  linkedinHref: "https://www.linkedin.com/in/faleel-h-b772a1416/",
  availability: "Open to work",
  summary:
    "BCA graduate specializing in Full Stack Application, RAG applications, and AI Implementations.",
};

export const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 1, suffix: "+", label: "RAG Projects" },
  { value: 5, suffix: "+", label: "Core Technologies" },
  { value: 2026, suffix: "", label: "Graduate" },
];

export type SkillGroup = {
  command: string;
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    command: "languages --list",
    label: "Languages",
    items: ["Nuxt js", "Vue", "SQL", "Javascript", "Typescript"],
  },
  {
    command: "backend --list",
    label: "Backend",
    items: [
      "Express js",
      "REST APIs",
      "Drizzle ORM",
      "WebSocket",
      "Nginx",
    ],
  },
  {
    command: "ai-rag --list",
    label: "AI & RAG",
    items: [
      "MCP",
      "RAG",
      "Generative AI",
      "Embeddings",
      "Vector Search",
      "LLM",
    ],
  },
  {
    command: "database --list",
    label: "Database",
    items: ["MySQL", "Redis", "Chroma Vector Database"],
  },
  {
    command: "frontend --list",
    label: "Frontend",
    items: ["Nuxt js", "Vue", "Tailwind CSS", "HTMX", "UI Frameworks", "Pinia", "Tanstack Query"],
  },
  {
    command: "Full Stack --list",
    label: "Full Stack",
    items: ["Nuxt js"],
  },
  {
    command: "devops --list",
    label: "DevOps",
    items: ["Git", "GitHub", "Docker", "Vitest", "Unit Testing jest"],
  },
];

export const codeSnippet = `export class Developer {
  private readonly name: string = "Faleel H";
  private readonly role: string = "AI Full Stack Developer";
  private readonly focus: string[] = ["Nuxt", "Vue", "Typescript", "Javascript"];
  private readonly openToWork: boolean = true;

  public build(problem: string): string {
    return this.architect(problem)
      .develop()
      .integrate()
      .test()
      .deploy();
  }

  private architect(problem: string): ArchitecturePipeline {
    return new ArchitecturePipeline(problem);
  }
}`;

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
  icon: "github" | "external" | "mail";
};

export type Project = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  features: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    number: "01",
    title: "RAG Enterprise Knowledge Assistant",
    category: "AI / Full-Stack",
    year: "2026",
    description:
      "A full-stack RAG application that turns enterprise documents into a searchable knowledge base with PDF processing, vector embeddings, semantic search, and AI-generated source-grounded answers.",
    features: [
      "PDF upload and document processing",
      "Vector-based semantic search",
      "AI question-answering workflow",
      "Document and chat management",
      "JUnit integration tests",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring AI",
      "Gemini",
      "MySQL",
      "Chroma",
      "Thymeleaf",
      "HTMX",
      "Tailwind CSS",
    ],
    image: "/images/projects/rag-enterprise-dashboard.png",
    imageAlt:
      "RAG Enterprise Knowledge Dashboard interface showing uploaded documents and AI chat",
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/soloStack-Dev/Rag_webapp.git",
        external: true,
        icon: "github",
      },
    ],
  },
  {
    number: "02",
    title: "SSS Auto Spares",
    category: "Business Website",
    year: "2025",
    description:
      "A production business website for a Chennai-based auto parts dealer, built as a digital catalog and lead generation platform with enquiry workflows, local SEO, and a mobile-first catalog experience.",
    features: [
      "Catalog showcase by category",
      "Enquiry and lead generation flow",
      "WhatsApp and direct call integration",
      "Local SEO and Google Maps",
      "Responsive, image-optimized pages",
    ],
    stack: [
      "Nuxt",
      "TypeScript",
      "GSAP",
      "Material UI",
      "tRPC",
      "Pinia",
      "Supabase",
      "PostgreSQL",
      "Vercel",
    ],
    image: "/images/projects/sss-autospares.jpeg",
    imageAlt: "SSS Auto Spares automotive parts catalog website preview",
    links: [
      {
        label: "Live Website",
        href: "https://www.sssautospare.com/",
        external: true,
        icon: "external",
      },
      {
        label: "GitHub Repository",
        href: "https://github.com/soloStack-Dev/sss-autosphere.git",
        external: true,
        icon: "github",
      },
      {
        label: "Request Case Study",
        href: "mailto:faleelmr4@gmail.com?subject=SSS%20Auto%20Spares%20case%20study",
        icon: "mail",
      },
    ],
  },
  {
    number: "03",
    title: "Aurelle Female Dress",
    category: "Fashion E-Commerce",
    year: "2026",
    description:
      "A cinematic fashion e-commerce storefront concept designed around premium women's fashion, editorial storytelling, and immersive shopping experiences. Built with modern web technologies, featuring interactive product collections, animated 3D visuals, dynamic product previews, and a sophisticated luxury-inspired design.",
    features: [
      "Interactive fashion collections and product catalog",
      "Product filtering, price sorting, and quick-view previews",
      "Shopping bag and wishlist interactions",
      "Immersive 3D hero visuals and scroll-triggered animations",
      "Editorial fashion journal and brand storytelling",
      "Membership pricing and contact enquiry pages",
      "Responsive design, accessibility, and SEO optimization",
    ],
    stack: [
      "Nuxt",
      "Vue",
      "TypeScript",
      "Tailwind CSS v4",
      "Three.js",
      "GSAP",
      "Lenis",
      "Motion",
      "anime.js",
      "Pinia",
      "Tanstack Query",
      "Leaflet",
      "Vercel",
    ],
    image: "/images/projects/aurelle-female-dress.png",
    imageAlt: "Aurelle Female Dress cinematic fashion storefront preview",
    links: [
      {
        label: "Live Website",
        href: "https://aurelle-female-dress-all-in-one.vercel.app/",
        external: true,
        icon: "external",
      },
      {
        label: "GitHub Repository",
        href: "https://github.com/soloStack-Dev/Aurelle_female_dress_all_in_one.git",
        external: true,
        icon: "github",
      },
      {
        label: "Request Case Study",
        href: "mailto:faleelmr4@gmail.com?subject=Aurelle%20Female%20Dress%20Case%20Study",
        icon: "mail",
      },
    ],
  },
  {
    number: "04",
    title: "Cortex",
    category: "Real-Time Chat App",
    year: "2026",
    description:
      "A real-time multilingual chat app where every message is translated into the author's selected language. One shared room, five Indian languages — no copy-paste or language silos. Features live presence, room locks, invite links, Markdown export, and local account management.",
    features: [
      "Multilingual rooms (English, Tamil, Malayalam, Kannada, Telugu)",
      "Author-led translation with Sarvam Mayura",
      "Real-time messaging over WebSocket",
      "Room locks with hashed 4-digit passwords",
      "Live presence and invite links",
      "Markdown export and account workspace",
    ],
    stack: [
      "Nuxt",
      "Vue",
      "Pinia",
      "Tanstack Query",
      "TypeScript",
      "Tailwind CSS",
      "Bun",
      "WebSocket",
      "Sarvam Mayura",
      "GSAP",
      "Lenis",
    ],
    image: "/images/projects/cortex-chat.png",
    imageAlt: "Cortex real-time multilingual chat app preview",
    links: [
      {
        label: "Live Website",
        href: "https://chat-web-app-nine-dusky.vercel.app/",
        external: true,
        icon: "external",
      },
      {
        label: "GitHub Repository",
        href: "https://github.com/soloStack-Dev/Chat_web_app.git",
        external: true,
        icon: "github",
      },
      {
        label: "Request Case Study",
        href: "mailto:faleelmr4@gmail.com?subject=Cortex%20Chat%20App%20Case%20Study",
        icon: "mail",
      },
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Bharath College of Science and Management, Thanjavur",
  expected: "Expected May 2026",
  cgpa: "7.58 / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DBMS",
    "Web Development",
    "AI / ML",
    "Software Engineering",
  ],
};

export const certifications = [
  {
    title: "AI for Business Professionals",
    issuer: "HP Foundation",
    date: "June 2026",
  },
  {
    title: "Generative AI with IBM",
    issuer: "Naan Mudhalvan",
    date: "Nov 2025",
  },
  {
    title: "MCP Fundamentals",
    issuer: "Hugging Face",
    date: "Feb 2026",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Feb 2026",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Architect",
    description:
      "Design scalable backend systems, data models, and clean service boundaries before writing code.",
  },
  {
    number: "02",
    title: "Develop",
    description:
      "Build maintainable APIs and features with Java, Spring Boot, and clean, testable code.",
  },
  {
    number: "03",
    title: "Integrate",
    description:
      "Connect databases, third-party APIs, and AI services into one reliable system.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Validate behavior with JUnit, integration tests, and structured debugging.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Ship production-ready builds using Docker, Git, and repeatable deployment workflows.",
  },
];
