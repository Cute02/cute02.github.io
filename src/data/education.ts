export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: "In progress" | "Completed";
  grade?: string;
  gradeBadge?: string;
  description: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  type: "Buildathon" | "Application" | "Academic";
  description: string;
  statusBadge: string;
  requiresConfirmation?: boolean;
}

export const educationList: EducationItem[] = [
  {
    id: "jain-bca",
    degree: "BCA in Machine Learning & AI",
    institution: "Jain University (ODL)",
    location: "Online / Distance Learning",
    period: "2026 – 2029",
    status: "In progress",
    description:
      "Undergraduate degree focusing on core computer science foundations, algorithm design, probability, statistical modeling, machine learning paradigms, and artificial intelligence systems.",
    highlights: [
      "Machine Learning & Artificial Intelligence Specialization",
      "Discrete Mathematics, Linear Algebra, and Statistical Inference",
      "Object-Oriented Programming and Data Structures",
    ],
  },
  {
    id: "brototype-ai",
    degree: "AI Solution Builder (ML & AI, 1-year intensive)",
    institution: "Brototype",
    location: "Kochi, Kerala, India",
    period: "2026 – 2027",
    status: "In progress",
    description:
      "Rigorous hands-on software and AI training program. Focuses on shipping production-grade LLM applications, autonomous agent workflows, end-to-end machine learning pipelines, and deep engineering discipline.",
    highlights: [
      "Building practical LLM agents, Text-to-SQL systems, and RAG architectures",
      "Supervised & unsupervised ML pipelines with strict leakage-free evaluation",
      "Pair programming, code reviews, and industry-grade engineering workflows",
    ],
  },
  {
    id: "assisi-higher-sec",
    degree: "Higher Secondary (Class XII) — Computer Science",
    institution: "Assisi Vidyaniketan Public School",
    location: "Kochi, Kerala",
    period: "2024 – 2026",
    status: "Completed",
    grade: "86.4%",
    gradeBadge: "Distinction",
    description:
      "Higher secondary certification with focused coursework in Computer Science, Mathematics, Physics, and Chemistry. Established foundational programming concepts and logical problem solving.",
    highlights: [
      "Achieved 86.4% Distinction mark in Computer Science stream",
      "Foundation in C/C++, basic algorithms, and computational logic",
      "Analytical problem-solving and science foundation",
    ],
  },
  {
    id: "marello-secondary",
    degree: "Secondary Education (Class X)",
    institution: "Marello Public School",
    location: "Kerala, India",
    period: "2024",
    status: "Completed",
    grade: "95.6%",
    gradeBadge: "Distinction",
    description:
      "High school graduation with exceptional academic record. Demonstrated academic excellence across mathematics, general science, and computational studies.",
    highlights: [
      "Achieved 95.6% Distinction overall",
      "Top percentile academic performance",
      "Active participation in science exhibitions and technical clubs",
    ],
  },
];

export const achievementsList: AchievementItem[] = [
  {
    id: "hired-buildathon",
    title: "Participant, Buildathon",
    organization: "HireD & Brototype",
    year: "2026",
    type: "Buildathon",
    description:
      "Participated in the competitive engineering buildathon conducted collaboratively by HireD and Brototype, designing and implementing rapid technical solutions under time-constrained sprint conditions.",
    statusBadge: "Verified Participant",
  },
];

