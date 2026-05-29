export const NAV_LINKS = ["About", "Experience", "Skills", "Projects", "Contact"];

export const EXPERIENCES = [
  {
    role: "Jr. Backend Developer",
    company: "Join Venture AI",
    location: "Dhaka, Bangladesh",
    period: "Oct 2025 – Present",
    points: [
      "Designed and maintained scalable RESTful backend services for AI-powered applications using Python and DRF.",
      "Integrated AI microservices, implemented JWT authentication and role-based access control.",
      "Optimized PostgreSQL performance via query tuning and efficient schema design.",
      "Built async workflows using Celery and Redis integrated with ML pipelines.",
      "Deployed with Docker on AWS following clean architecture practices.",
    ],
  },
  {
    role: "Team Leader",
    company: "Vcube Soft and Tech Limited",
    location: "Dhaka, Bangladesh",
    period: "Jun 2019 – Oct 2024",
    points: [
      "Promoted from Operator to Team Leader through consistent performance.",
      "Managed quality assurance and workflow optimization for 2D/3D floor plan projects.",
      "Mentored new team members across remote and in-office settings.",
    ],
  },
];

export const SKILLS = [
  { category: "Languages", color: "indigo", items: ["Python", "JavaScript", "HTML", "CSS"] },
  { category: "Frameworks", color: "violet", items: ["Django", "DRF", "FastAPI (learning)", "Bootstrap", "Tailwind"] },
  { category: "Databases", color: "cyan", items: ["PostgreSQL", "MySQL", "SQLite"] },
  { category: "Brokers & Cache", color: "emerald", items: ["Redis", "RabbitMQ", "Celery"] },
  { category: "Backend & Architecture", color: "amber", items: ["REST API", "WebSocket", "JWT", "RBAC", "AI Microservice"] },
  { category: "Tools & DevOps", color: "red", items: ["Git", "Docker", "AWS", "CI/CD", "Postman", "VPS"] },
];

export const PROJECTS = [
  {
    name: "AI Insurance Platform",
    sub: "Clamea",
    client: "🇸🇪 Swedish Client",
    gradient: "from-indigo-500 to-violet-500",
    description: "Freemium insurance guidance platform. Free users chat with a real-time AI agent via WebSocket; premium users upload documents for AI-driven guidance with automated weekly reminders.",
    stack: ["Django", "Django Channels", "WebSocket", "Celery", "Redis", "Firebase", "PostgreSQL"],
  },
  {
    name: "Eat At Home",
    sub: "Nutrition Analytics",
    client: "🇺🇸 US Client",
    gradient: "from-cyan-500 to-blue-500",
    description: "Meal tracking platform integrating Plaid API to pull real bank transaction data for accurate restaurant spending tracking and automated food expense categorization.",
    stack: ["Django", "DRF", "Plaid API", "PostgreSQL", "Celery", "Firebase"],
  },
  {
    name: "RnD Taxbot",
    sub: "Tax Automation",
    client: "🇦🇺 Australian Client",
    gradient: "from-emerald-500 to-cyan-500",
    description: "Tax rebate automation with AI-powered interview flow via WebSocket. Multi-role approval: submission → AI scoring → approve/reject with resubmission flow.",
    stack: ["Django", "WebSocket", "Celery", "Redis", "PostgreSQL", "RBAC"],
  },
  {
    name: "Animal Service",
    sub: "Pet E-commerce",
    client: "🇸🇦 KSA Client",
    gradient: "from-amber-500 to-red-500",
    description: "Full-featured pet marketplace with auction system, digital wallet, real-time 1-on-1 chat, vet appointments, and Stripe payment integration.",
    stack: ["Django", "RabbitMQ", "Stripe", "WebSocket", "Digital Wallet", "PostgreSQL", "RBAC"],
  },
];

export const ACHIEVEMENTS = [
  { value: "600+", label: "Problems Solved", sub: "Codeforces · LeetCode · HackerRank", color: "text-indigo-400" },
  { value: "38th", label: "CodeChef Weekly", sub: "All problems solved, June 2025", color: "text-cyan-400" },
  { value: "11th", label: "Inter Polytechnic", sub: "Programming Contest at IUBAT", color: "text-emerald-400" },
  { value: "4", label: "Live Projects", sub: "3 international clients", color: "text-amber-400" },
];