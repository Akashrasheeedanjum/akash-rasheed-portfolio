export const siteConfig = {
  name: "Akash Rasheed",
  title: "Full-Stack Software Engineer",
  specialization: "Next.js · NestJS · Django",
  email: "YOUR_EMAIL@gmail.com", // Replace with your email
  github: "https://github.com/YOUR_GITHUB", // Replace with your GitHub URL
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN", // Replace with your LinkedIn URL
  url: "https://akashrasheed.dev", // Replace with your production URL
  description:
    "Akash Rasheed is a Full-Stack Software Engineer specializing in Next.js, NestJS, Django, TypeScript, Python, and scalable web application development.",
  positioning:
    "I build scalable web applications, backend systems, REST APIs, and real-world digital products using modern frontend and backend technologies.",
  technologies: [
    "Next.js",
    "NestJS",
    "Django",
    "TypeScript",
    "Python",
  ] as const,
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
