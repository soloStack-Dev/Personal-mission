export const site = {
  name: "Faleel H",
  displayName: "FALEEL H",
  handle: "thequitesch1ar__",
  role: "Java Developer & AI Engineer",
  location: "Thiruvarur, Tamil Nadu, India",
  email: "faleelmr4@gmail.com",
  phone: "+91 97909 33818",
  phoneHref: "+919790933818",
  linkedin: "linkedin.com/in/faleel-h-b772a1416",
  linkedinHref: "https://www.linkedin.com/in/faleel-h-b772a1416/",
  availability: "Open to work",
  summary:
    "BCA graduate specializing in Spring Boot, RAG applications, and enterprise backend development.",
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
    items: ["Java", "SQL", "HTMX"],
  },
  {
    command: "backend --list",
    label: "Backend",
    items: [
      "Spring Boot",
      "Spring AI",
      "REST APIs",
      "Spring Data JPA",
      "WebSocket",
      "Nginx",
    ],
  },
  {
    command: "ai-rag --list",
    label: "AI & RAG",
    items: [
      "Spring AI",
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
    items: ["HTMX", "CSS3", "Tailwind CSS", "Thymeleaf"],
  },
  {
    command: "devops --list",
    label: "DevOps",
    items: ["Git", "GitHub", "Docker", "Maven", "JUnit"],
  },
];

export const codeSnippet = `public class Developer {
  private final String name = "Faleel H";
  private final String role = "Java Developer & AI Engineer";
  private final String[] focus = { "Spring Boot", "Spring AI", "RAG" };
  private final boolean openToWork = true;

  public String build(String problem) {
    return architect(problem)
        .develop()
        .integrate()
        .test()
        .deploy();
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
        href: "https://github.com/",
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
      "Next.js",
      "TypeScript",
      "GSAP",
      "Material UI",
      "tRPC",
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
        label: "Request Case Study",
        href: "mailto:faleelmr4@gmail.com?subject=SSS%20Auto%20Spares%20case%20study",
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
