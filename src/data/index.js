export const NAV_LINKS = ["About", "Experience", "Skills", "Projects", "Achievements", "Contact"];

export const EXPERIENCES = [
  {
    role: "Software Engineer",
    company: "Confidential Tech Startup",
    location: "Dhaka, Bangladesh",
    period: "Oct 2025 – Present",
    points: [
      "Designed, developed, and maintained scalable RESTful backend services using Python and Django REST Framework for AI-powered business applications.",
      "Integrated third-party APIs and internal AI microservices; implemented JWT-based authentication and role-based access control for secure, production-ready systems.",
      "Optimized system performance, scalability, and reliability through Redis-based API caching, reducing average API response latency and improving overall throughput.",
      "Built reliable, non-blocking backend workflows using asynchronous programming and Celery/Redis background task processing, integrated with machine learning pipelines.",
      "Achieved 85% code coverage by writing comprehensive unit and integration tests using Pytest, adhering to Test-Driven Development (TDD) principles to ensure the stability of critical backend processes.",
      "Set up automated CI/CD pipelines using GitHub Actions and collaborated with an 11-person cross-functional engineering team for seamless Docker and AWS-based cloud deployments, ensuring 99.9% application uptime.",
    ],
  },
  {
    role: "Team Leader",
    company: "Vcube Soft and Tech Limited",
    location: "Dhaka, Bangladesh",
    period: "Jun 2019 – Oct 2024",
    points: [
      "Promoted from Operator to Project Quality Checker, Mentor, and Team Leader through consistent performance.",
      "Managed team coordination and quality assurance for 2D/3D building floor plan projects.",
      "Mentored and led a cross-functional team of 6 members, maintaining productive communication across remote and in-office environments and significantly reducing onboarding time for new hires.",
    ],
  },
];

export const SKILLS = [
  { category: "Languages", color: "indigo", items: ["Python", "JavaScript", "C", "C++"] },
  { category: "Frameworks & Libraries", color: "violet", items: ["Django", "DRF", "React", "Redux"] },
  { category: "Design & Styling", color: "amber", items: ["HTML", "CSS", "Tailwind", "Bootstrap"] },
  { category: "Databases", color: "cyan", items: ["PostgreSQL", "MySQL", "SQLite"] },
  { category: "Brokers & Cache", color: "emerald", items: ["Redis", "RabbitMQ", "Celery"] },
  { category: "Tools & Testing", color: "red", items: ["Git", "Docker", "VPS", "AWS", "CI/CD", "Postman", "Pytest"] },
  { 
    category: "System Architecture & Design", 
    color: "amber", 
    items: ["Microservices", "Event-Driven Architecture", "Message Brokers", "Pub/Sub", "CQRS", "API Gateway", "System Optimization"] 
  },
  { 
    category: "Backend Concepts", 
    color: "indigo", 
    items: ["RESTful API", "WebSocket", "Server-Sent Events (SSE)", "JWT & RBAC", "API Caching", "Throttling", "Asynchronous Programming", "AI Microservices"] 
  },
];

export const PROJECTS = [
  {
    name: "AI-Powered Insurance App",
    sub: "Clamea",
    client: "🇸🇪 Swedish Client",
    gradient: "from-indigo-500 to-violet-500",
    description: "Scalable insurance platform supporting 10,000+ potential users with a real-time WebSocket AI chatbot, social auth, in-app purchases, JWT throttling, cursor pagination, and weekly reminders via Celery/Redis.",
    stack: ["Django", "DRF", "WebSocket", "Django Channels", "AI Microservice", "Celery", "Redis", "API Throttling", "In-App Purchases", "Firebase Push Notifications", "PostgreSQL"],
  },
  {
    name: "Eat At Home",
    sub: "Nutrition Analytics",
    client: "🇺🇸 US Client",
    gradient: "from-cyan-500 to-blue-500",
    description: "Meal tracking and nutrition platform integrating Plaid API for bank transactions, featuring food photo AI analysis and Redis caching for AI responses decreasing latency by over 50%.",
    stack: ["Django", "DRF", "Plaid API", "PostgreSQL", "AI Microservice", "Redis Caching", "Celery", "Redis", "Firebase", "CI/CD", "AWS EC2"],
  },
  {
    name: "RnD Taxbot",
    sub: "Tax Automation",
    client: "🇦🇺 Australian Client",
    gradient: "from-emerald-500 to-cyan-500",
    description: "Tax rebate automation platform with AI-powered WebSocket interview flow and multi-role approval workflow. Designed secure document access control and optimized PostgreSQL schema for state management.",
    stack: ["Django", "DRF", "WebSocket", "Django Channels", "AI Microservice", "Celery", "Redis", "PostgreSQL", "RBAC", "VPS"],
  },
  {
    name: "Animal Service",
    sub: "Pet E-commerce",
    client: "🇸🇦 KSA Client",
    gradient: "from-amber-500 to-red-500",
    description: "Pet marketplace built to handle 5,000+ daily active users. Integrates Google Maps API for proximity-based transport matching, real-time push notifications, Telr payment, and Redis caching improving page load times by 40%.",
    stack: ["Django", "DRF", "Celery", "Redis Caching", "RabbitMQ", "Telr Payment", "Socket.IO", "Google Maps API", "OneSignal", "PostgreSQL", "Docker", "RBAC", "VPS"],
  },
];

export const ACHIEVEMENTS = [
  { value: "600+", label: "Problems Solved", sub: "Codeforces · LeetCode · HackerRank", color: "text-indigo-400" },
  { value: "38th", label: "CodeChef Weekly", sub: "All problems solved, June 2025", color: "text-cyan-400" },
  { value: "11th", label: "Inter Polytechnic", sub: "Programming Contest at IUBAT in 2016", color: "text-emerald-400" },
  { value: "4", label: "Live Projects", sub: "4 international clients", color: "text-amber-400" },
];

export const PROBLEM_SOLVING_PROFILES = [
  {
    platform: "LeetCode",
    username: "nadeemmaahmud",
    url: "https://leetcode.com/nadeemmaahmud/",
    color: "text-[#FFA116] border-[#FFA116]/30 bg-[#FFA116]/5 hover:bg-[#FFA116]/10",
  },
  {
    platform: "Codeforces",
    username: "nadeemmaahmud",
    url: "https://codeforces.com/profile/nadeemmaahmud/",
    color: "text-[#3B82F6] border-[#3B82F6]/30 bg-[#3B82F6]/5 hover:bg-[#3B82F6]/10",
  },
  {
    platform: "CodeChef",
    username: "nadeemmaahmud",
    url: "https://www.codechef.com/users/nadeemmaahmud/",
    color: "text-[#905a37] border-[#905a37]/30 bg-[#905a37]/5 hover:bg-[#905a37]/10",
  },
  {
    platform: "HackerRank",
    username: "nadeemmaahmud",
    url: "https://www.hackerrank.com/nadeemmaahmud/",
    color: "text-[#2EC866] border-[#2EC866]/30 bg-[#2EC866]/5 hover:bg-[#2EC866]/10",
  },
  {
    platform: "InterviewBit",
    username: "nadeemmaahmud",
    url: "https://www.interviewbit.com/profile/nadeemmaahmud/",
    color: "text-[#007AFF] border-[#007AFF]/30 bg-[#007AFF]/5 hover:bg-[#007AFF]/10",
  },
];