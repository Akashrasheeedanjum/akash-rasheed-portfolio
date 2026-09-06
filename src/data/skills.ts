export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "NestJS",
      "Django",
      "Django REST Framework",
      "Python",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "Azure", "Docker", "Vercel", "S3"],
  },
  {
    title: "Tools & Integrations",
    skills: ["Git", "GitHub", "Stripe", "Swagger", "NATS", "Brevo", "Jest"],
  },
];
