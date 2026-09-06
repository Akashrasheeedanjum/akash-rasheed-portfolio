export const siteConfig = {
  name: "Akash Rasheed",
  title: "Full-Stack Software Engineer",
  specialization: "Next.js · NestJS · Django",
  email: "akashanjum721@gmail.com",
  phone: "" as string, // Optional: e.g. "+92 3XX XXXXXXX"
  location: "Faisalabad, Pakistan",
  github: "https://github.com/Akashrasheeedanjum",
  linkedin: "https://www.linkedin.com/in/akash-rasheed-37bb16241/",
  url: "https://akash-rasheed-portfolio.netlify.app",
  resumePath: "/api/resume",
  avatarInitials: "AR",
  avatarImage: "/images/akash-rasheed.jpg",
  description:
    "Akash Rasheed is a Full-Stack Software Engineer specializing in Next.js, NestJS, Django, TypeScript, Python, and scalable web application development.",
  positioning:
    "I build scalable web applications, backend systems, REST APIs, and real-world digital products using modern frontend and backend technologies.",
  about: [
    "I'm a Full-Stack Software Engineer focused on building reliable, scalable web applications and backend systems.",
    "I work primarily with Next.js, NestJS, and Django, building everything from responsive user interfaces and REST APIs to database architecture, authentication, payments, and third-party integrations.",
    "I enjoy turning complex requirements into simple, maintainable and production-ready software.",
  ] as const,
  technologies: [
    "Next.js",
    "NestJS",
    "Django",
    "TypeScript",
    "Python",
  ] as const,
} as const;

export type TabId = "about" | "resume" | "portfolio" | "contact";

export const tabs: { id: TabId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export const navLinks = tabs.map((tab) => ({
  label: tab.label,
  href: `#${tab.id}`,
}));

export const services = [
  {
    title: "Web App Development",
    description:
      "Production-ready interfaces and full-stack applications with Next.js and React.",
  },
  {
    title: "API & Backend Systems",
    description:
      "Scalable REST APIs, auth, and business logic with NestJS and Django.",
  },
  {
    title: "Database Architecture",
    description:
      "Reliable data models and workflows across MongoDB, PostgreSQL, and MySQL.",
  },
  {
    title: "Payments & Integrations",
    description:
      "Stripe, email, cloud storage, messaging, and third-party service integrations.",
  },
  {
    title: "Business Automation",
    description:
      "Custom tools and desktop utilities that streamline day-to-day operations.",
  },
  {
    title: "System Design",
    description:
      "Clear application structure from requirements to maintainable production systems.",
  },
] as const;
