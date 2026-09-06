export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  detail: string;
}

export const experience: ExperienceItem[] = [
  {
    role: "Python (Django) Developer",
    company: "Ai Soft",
    period: "Jan 2024 — Mar 2025",
    responsibilities: [
      "Developed and maintained web applications using Django",
      "Implemented CRUD functionality",
      "Built scalable client-focused solutions",
      "Developed desktop applications using Python",
      "Worked with SQL databases",
      "Built machine-learning related applications using TensorFlow and Keras",
      "Contributed to secure, maintainable and high-performance software",
    ],
  },
];

export const education: EducationItem = {
  degree: "Bachelor of Computer Science",
  institution: "University of Engineering and Technology (UET), Lahore",
  detail: "CGPA: 3.4",
};

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Requirements, users, business goals and technical constraints.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Database design, API architecture and application structure.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Frontend, backend, integrations and core functionality.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Validation, edge cases, API testing and reliability.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Production deployment, monitoring and continuous improvement.",
  },
] as const;
