export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  contribution: string[];
  architecture: string[];
  technologies: string[];
  features: string[];
  challenges: string[];
  result: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  accent: string;
  accentMuted: string;
  /** Live demo / deployed app — leave empty if private */
  liveUrl?: string;
  /** GitHub repository — leave empty if private */
  githubUrl?: string;
  caseStudy: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    id: "immigration-marketplace",
    title: "Immigration Marketplace",
    tagline: "Scalable marketplace platform",
    description:
      "A scalable marketplace platform connecting immigration seekers, advisors, and companies through profiles, services, bookings, payments, communication, and verification workflows.",
    category: "Platform",
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "Azure Communication Services",
      "AWS S3",
      "NATS",
      "Swagger",
      "Brevo",
    ],
    features: [
      "Multi-role profiles",
      "Authentication and authorization",
      "Service marketplace",
      "Service requests",
      "Booking system",
      "Payment processing",
      "Stripe Connect",
      "Webhooks",
      "Refunds and disputes",
      "Video communication",
      "Chat",
      "File management",
      "Email notifications",
      "API documentation",
      "Verification workflows",
    ],
    accent: "#3D8BFF",
    accentMuted: "rgba(61, 139, 255, 0.12)",
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      overview:
        "A multi-sided marketplace connecting immigration seekers, advisors, and companies. The platform supports profiles, service listings, bookings, payments, messaging, video calls, and verification workflows in a single production system.",
      problem:
        "Immigration services are fragmented across advisors, companies, and seekers. Coordinating profiles, service discovery, bookings, payments, communication, and verification typically requires multiple disconnected tools—creating friction, trust gaps, and operational overhead.",
      solution:
        "Built an end-to-end marketplace with role-based access, a service catalog, request and booking flows, Stripe-powered payments (including Connect), real-time and async communication, file storage, and verification workflows—backed by a documented NestJS API and event-driven messaging.",
      contribution: [
        "Designed and implemented multi-role authentication and authorization",
        "Built marketplace flows for services, requests, and bookings",
        "Integrated Stripe payments, Connect, webhooks, refunds, and disputes",
        "Connected Azure Communication Services for video and chat",
        "Implemented file management with AWS S3",
        "Set up NATS for event-driven communication between services",
        "Documented APIs with Swagger and email notifications via Brevo",
      ],
      architecture: [
        "Next.js frontend for responsive, role-aware interfaces",
        "NestJS backend exposing documented REST APIs",
        "MongoDB with Mongoose for flexible multi-role data models",
        "Stripe for payments and Connect marketplace payouts",
        "NATS for asynchronous messaging between components",
        "AWS S3 for document and media storage",
        "Azure Communication Services for video and chat",
      ],
      technologies: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "Stripe",
        "Azure Communication Services",
        "AWS S3",
        "NATS",
        "Swagger",
        "Brevo",
      ],
      features: [
        "Multi-role profiles for seekers, advisors, and companies",
        "Secure authentication and authorization",
        "Service marketplace and service request flows",
        "Booking system with payment processing",
        "Stripe Connect, webhooks, refunds, and disputes",
        "Video communication and chat",
        "File management and email notifications",
        "API documentation and verification workflows",
      ],
      challenges: [
        "Modeling multi-role access without coupling business logic to a single user type",
        "Reliable payment flows with Connect, webhooks, refunds, and dispute handling",
        "Coordinating bookings with payments, messaging, and verification states",
        "Keeping communication features (chat/video) integrated with core marketplace events",
      ],
      result:
        "Delivered a production-oriented marketplace covering discovery, bookings, payments, communication, and verification in one cohesive platform—built for real multi-party immigration workflows rather than a single-role demo.",
    },
  },
  {
    id: "milk-store-management",
    title: "Milk Store Management System",
    tagline: "Custom business operations platform",
    description:
      "A customized business management platform designed to streamline day-to-day milk store operations.",
    category: "Business",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "Django Templates",
      "SQL",
    ],
    features: [
      "Secure authentication",
      "Role-based access",
      "Admin, Manager, Staff roles",
      "Sales management",
      "Purchase management",
      "Customer management",
      "Supplier management",
      "Payment management",
      "Employee management",
    ],
    accent: "#2DD4A8",
    accentMuted: "rgba(45, 212, 168, 0.12)",
    liveUrl: "",
    githubUrl: "https://github.com/Akashrasheeedanjum/Awan_milk_point",
    caseStudy: {
      overview:
        "A tailored operations platform for milk store businesses—covering sales, purchases, customers, suppliers, payments, and employees with role-based access for admin, manager, and staff.",
      problem:
        "Day-to-day milk store operations often rely on manual ledgers or disconnected tools. Tracking sales, purchases, inventory-related parties, payments, and staff access becomes error-prone and hard to audit as the business grows.",
      solution:
        "Built a Django-based management system with secure authentication, role-based permissions, and dedicated modules for sales, purchases, customers, suppliers, payments, and employees—presented through server-rendered templates and REST endpoints where needed.",
      contribution: [
        "Implemented secure authentication and role-based access (Admin, Manager, Staff)",
        "Built sales and purchase management modules",
        "Developed customer and supplier management workflows",
        "Added payment and employee management features",
        "Structured the application for maintainable business operations",
      ],
      architecture: [
        "Django application with role-aware views and permissions",
        "SQL database for relational business data",
        "Django Templates for operational UI",
        "Django REST Framework for API endpoints where required",
      ],
      technologies: [
        "Python",
        "Django",
        "Django REST Framework",
        "Django Templates",
        "SQL",
      ],
      features: [
        "Secure authentication with role-based access",
        "Admin, Manager, and Staff roles",
        "Sales and purchase management",
        "Customer and supplier management",
        "Payment and employee management",
      ],
      challenges: [
        "Mapping real store workflows into clear, role-appropriate modules",
        "Enforcing permissions so staff see only what they need",
        "Keeping sales, purchases, and payments consistent as operational data",
      ],
      result:
        "Delivered a practical business management system that centralizes milk store operations—sales, purchases, parties, payments, and staff—under secure, role-based access instead of fragmented manual processes.",
    },
  },
  {
    id: "bulk-email-sender",
    title: "Bulk Email Sender",
    tagline: "Desktop campaign automation",
    description:
      "A desktop application that helps companies import customer data and automate bulk email campaigns.",
    category: "Desktop",
    technologies: ["Python", "Tkinter", "PyQt", "Excel", "PyInstaller"],
    features: [
      "Excel import",
      "Email templates",
      "Bulk email sending",
      "Desktop GUI",
      "Standalone executable",
      "Cross-machine deployment",
    ],
    accent: "#F5A524",
    accentMuted: "rgba(245, 165, 36, 0.12)",
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      overview:
        "A desktop tool for importing customer lists from Excel, composing templates, and sending bulk email campaigns—packaged as a standalone executable for easy deployment across machines.",
      problem:
        "Companies often need to run email campaigns from local customer spreadsheets without standing up a full web stack. Spreadsheet-to-email workflows are tedious when done manually and hard to standardize across team machines.",
      solution:
        "Built a Python desktop application with a GUI for Excel import, email templates, and bulk sending. Packaged with PyInstaller so teams can run a standalone executable without a complex install process.",
      contribution: [
        "Designed desktop GUI workflows for campaign setup",
        "Implemented Excel import for customer data",
        "Built email template support and bulk sending logic",
        "Packaged the app as a standalone executable with PyInstaller",
      ],
      architecture: [
        "Python desktop application with Tkinter/PyQt GUI",
        "Excel-based data import pipeline",
        "Template-driven email composition",
        "PyInstaller packaging for cross-machine deployment",
      ],
      technologies: ["Python", "Tkinter", "PyQt", "Excel", "PyInstaller"],
      features: [
        "Excel customer data import",
        "Email templates and bulk sending",
        "Desktop GUI for non-technical operators",
        "Standalone executable deployment",
      ],
      challenges: [
        "Making bulk campaigns usable from a simple desktop interface",
        "Handling spreadsheet import edge cases cleanly",
        "Packaging a reliable standalone executable for different machines",
      ],
      result:
        "Delivered a practical desktop utility that turns Excel customer lists into runnable bulk email campaigns—deployable as a standalone app without requiring a web infrastructure.",
    },
  },
  {
    id: "matchvault",
    title: "MatchVault",
    tagline: "Live full-stack web application",
    description:
      "A TypeScript web application with a deployed production frontend — built for real user-facing workflows and modern full-stack delivery.",
    category: "Web",
    technologies: ["TypeScript", "Next.js", "React", "Vercel"],
    features: [
      "Deployed live application",
      "TypeScript codebase",
      "Modern frontend architecture",
      "Production hosting on Vercel",
    ],
    accent: "#8B7CFF",
    accentMuted: "rgba(139, 124, 255, 0.12)",
    liveUrl: "https://match-vault.vercel.app",
    githubUrl: "https://github.com/Akashrasheeedanjum/MatchVault",
    caseStudy: {
      overview:
        "MatchVault is a live TypeScript web application deployed on Vercel, demonstrating end-to-end delivery from codebase to production URL.",
      problem:
        "Many portfolio projects never reach a shareable production environment. Recruiters and clients need proof that an engineer can ship working software, not only local demos.",
      solution:
        "Built and deployed MatchVault as a production web app with a public live URL and an open GitHub repository for review.",
      contribution: [
        "Implemented the application in TypeScript",
        "Prepared the project for production deployment",
        "Published a live demo for evaluation and feedback",
      ],
      architecture: [
        "TypeScript application structure",
        "Frontend deployed to Vercel",
        "Source available on GitHub for review",
      ],
      technologies: ["TypeScript", "Next.js", "React", "Vercel"],
      features: [
        "Public live demo",
        "GitHub source access",
        "Production deployment workflow",
      ],
      challenges: [
        "Shipping a stable public build suitable for demos",
        "Keeping frontend and deployment configuration aligned",
      ],
      result:
        "A live, shareable web application that demonstrates production deployment and modern TypeScript development.",
    },
  },
  {
    id: "pos-system",
    title: "POS System",
    tagline: "Point of sale frontend + backend",
    description:
      "A point-of-sale style system with separate frontend and backend repositories — including a live frontend demo for business operations workflows.",
    category: "Web",
    technologies: ["TypeScript", "React", "Node.js", "Vercel"],
    features: [
      "Separate frontend and backend services",
      "Live frontend demo",
      "TypeScript across the stack",
      "Business operations UI",
    ],
    accent: "#2DD4A8",
    accentMuted: "rgba(45, 212, 168, 0.14)",
    liveUrl: "https://pos-frontend-five-rust.vercel.app",
    githubUrl: "https://github.com/Akashrasheeedanjum/POS_Frontend",
    caseStudy: {
      overview:
        "A POS-oriented platform split into frontend and backend codebases, with a deployed frontend for interactive demos of sales/operations workflows.",
      problem:
        "Retail and operations tools need reliable UI and API separation so teams can iterate on business workflows without tightly coupling presentation and server logic.",
      solution:
        "Built POS_Frontend and POS_Backend as dedicated TypeScript services, with the frontend deployed for live demonstration.",
      contribution: [
        "Developed the POS frontend experience",
        "Implemented supporting backend service structure",
        "Deployed a live frontend demo for review",
      ],
      architecture: [
        "Frontend application (POS_Frontend)",
        "Backend API service (POS_Backend)",
        "Vercel-hosted frontend demo",
      ],
      technologies: ["TypeScript", "React", "Node.js", "Vercel"],
      features: [
        "Live frontend demo",
        "Separated frontend/backend repositories",
        "TypeScript implementation",
      ],
      challenges: [
        "Keeping frontend and backend contracts aligned across repos",
        "Preparing a stable public demo environment",
      ],
      result:
        "A demonstrable POS-style system with clear frontend/backend separation and a live URL for impressions.",
    },
  },
  {
    id: "food-safety-backend",
    title: "Food Safety Quality Backend",
    tagline: "Backend API for quality workflows",
    description:
      "A TypeScript backend focused on food safety and quality workflows — built for structured API delivery and maintainable server-side logic.",
    category: "Backend",
    technologies: ["TypeScript", "NestJS", "Node.js", "REST APIs"],
    features: [
      "Backend API structure",
      "TypeScript implementation",
      "Quality/safety domain workflows",
      "Maintainable server architecture",
    ],
    accent: "#F5A524",
    accentMuted: "rgba(245, 165, 36, 0.12)",
    liveUrl: "",
    githubUrl: "https://github.com/Akashrasheeedanjum/food-safety-quality-backend",
    caseStudy: {
      overview:
        "A backend service for food safety and quality-related workflows, implemented in TypeScript and organized for API-driven application support.",
      problem:
        "Food safety and quality processes require reliable server-side rules, structured data handling, and APIs that frontends can depend on.",
      solution:
        "Built a dedicated backend repository focused on quality/safety domain logic and API structure rather than a throwaway prototype.",
      contribution: [
        "Implemented backend application structure in TypeScript",
        "Organized API-oriented modules for quality workflows",
        "Maintained a reviewable GitHub codebase",
      ],
      architecture: [
        "TypeScript backend service",
        "REST-oriented API design",
        "Domain-focused module organization",
      ],
      technologies: ["TypeScript", "NestJS", "Node.js", "REST APIs"],
      features: [
        "Backend-focused architecture",
        "GitHub source for technical review",
        "Domain-oriented workflow support",
      ],
      challenges: [
        "Modeling quality workflows cleanly on the server",
        "Keeping the API structure maintainable as features grow",
      ],
      result:
        "A backend codebase that demonstrates API-oriented engineering for food safety/quality workflows.",
    },
  },
];
