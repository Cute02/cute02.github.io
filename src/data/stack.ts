export interface StackItem {
  name: string;
  category: "AI & LLM" | "ML & Data" | "Backend & Data" | "Hardware & IoT" | "Dev Tools";
  status: "Core" | "Learning";
  description: string;
}

export const stackCategories = [
  "AI & LLM",
  "ML & Data",
  "Backend & Data",
  "Hardware & IoT",
  "Dev Tools",
] as const;

export type StackCategory = (typeof stackCategories)[number];

export const stackData: StackItem[] = [
  // AI & LLM
  {
    name: "LLM Agents",
    category: "AI & LLM",
    status: "Core",
    description: "Designing autonomous agent loops, tool-calling pipelines, and goal-directed workflows.",
  },
  {
    name: "Text-to-SQL",
    category: "AI & LLM",
    status: "Core",
    description: "Translating natural language queries into schema-valid, read-only SQL for relational databases.",
  },
  {
    name: "RAG",
    category: "AI & LLM",
    status: "Core",
    description: "Retrieval-Augmented Generation using semantic chunking, vector stores, and context grounding.",
  },
  {
    name: "Prompt Engineering",
    category: "AI & LLM",
    status: "Core",
    description: "System prompt architecture, few-shot prompting, schema-constrained outputs, and safety rules.",
  },
  {
    name: "LangChain",
    category: "AI & LLM",
    status: "Core",
    description: "Composing chains, retrievers, document loaders, and model integrations.",
  },
  {
    name: "LangGraph",
    category: "AI & LLM",
    status: "Learning",
    description: "Cyclic stateful multi-agent architectures and workflow orchestration graphs.",
  },
  {
    name: "Hugging Face Transformers",
    category: "AI & LLM",
    status: "Core",
    description: "Using pre-trained Transformer models, tokenizers, and pipelines for NLP tasks.",
  },
  {
    name: "BERT",
    category: "AI & LLM",
    status: "Core",
    description: "Bidirectional contextual text representations applied to multi-label emotion detection.",
  },
  {
    name: "FAISS",
    category: "AI & LLM",
    status: "Core",
    description: "High-performance vector similarity search and index management for embeddings.",
  },
  {
    name: "Claude Code",
    category: "AI & LLM",
    status: "Core",
    description: "Agentic development toolchains, automated refactoring, and AI-assisted workflows.",
  },

  // ML & Data
  {
    name: "Python",
    category: "ML & Data",
    status: "Core",
    description: "Primary programming language for data manipulation, ML modelling, and agent architectures.",
  },
  {
    name: "scikit-learn",
    category: "ML & Data",
    status: "Core",
    description: "Supervised classification, regression, preprocessing pipelines, cross-validation, and metrics.",
  },
  {
    name: "NumPy",
    category: "ML & Data",
    status: "Core",
    description: "N-dimensional array computations, vectorization, and linear algebra routines.",
  },
  {
    name: "Pandas",
    category: "ML & Data",
    status: "Core",
    description: "DataFrame manipulation, series operations, data cleaning, and feature transformations.",
  },
  {
    name: "Matplotlib",
    category: "ML & Data",
    status: "Core",
    description: "Data visualization, feature distribution plotting, and model evaluation curves.",
  },
  {
    name: "Statistics",
    category: "ML & Data",
    status: "Core",
    description: "Hypothesis testing, probability distributions, descriptive statistics, and variance analysis.",
  },
  {
    name: "EDA",
    category: "ML & Data",
    status: "Core",
    description: "Exploratory data analysis, missing-value imputation, outlier detection, and correlation mapping.",
  },
  {
    name: "PyTorch (CPU)",
    category: "ML & Data",
    status: "Learning",
    description: "Tensors, neural network layers, loss functions, and basic backpropagation on CPU.",
  },

  // Backend & Data
  {
    name: "SQL",
    category: "Backend & Data",
    status: "Core",
    description: "Relational database queries, complex joins, subqueries, aggregations, and schema DDL.",
  },
  {
    name: "PostgreSQL",
    category: "Backend & Data",
    status: "Core",
    description: "Open-source relational database management, indexing, constraints, and ACID transactions.",
  },
  {
    name: "Prisma",
    category: "Backend & Data",
    status: "Core",
    description: "Type-safe ORM for database modeling, migrations, and structured queries.",
  },
  {
    name: "Supabase",
    category: "Backend & Data",
    status: "Core",
    description: "Managed Postgres, Row-Level Security (RLS) policies, insert endpoints, and client SDKs.",
  },
  {
    name: "C",
    category: "Backend & Data",
    status: "Core",
    description: "Foundational low-level systems programming, memory management, and embedded logic.",
  },

  // Hardware & IoT
  {
    name: "ESP8266",
    category: "Hardware & IoT",
    status: "Core",
    description: "Wi-Fi enabled microcontrollers for IoT automation, sensor reading, and relay triggers.",
  },
  {
    name: "MQTT",
    category: "Hardware & IoT",
    status: "Core",
    description: "Lightweight publish-subscribe telemetry protocol for low-bandwidth IoT communication.",
  },
  {
    name: "PIR Sensors",
    category: "Hardware & IoT",
    status: "Core",
    description: "Passive infrared motion detection hardware, digital interrupts, and physical sensing.",
  },
  {
    name: "Embedded Systems",
    category: "Hardware & IoT",
    status: "Core",
    description: "Interfacing microcontrollers with sensors, actuators, serial buses, and circuits.",
  },

  // Dev Tools
  {
    name: "Git & GitHub",
    category: "Dev Tools",
    status: "Core",
    description: "Version control, branching strategies, commit hygiene, and collaborative repository hosting.",
  },
  {
    name: "Linux",
    category: "Dev Tools",
    status: "Core",
    description: "Command-line navigation, shell scripting, package management, and system administration.",
  },
  {
    name: "JupyterLab",
    category: "Dev Tools",
    status: "Core",
    description: "Interactive notebooks for data exploration, model experimentation, and visual reporting.",
  },
  {
    name: "VS Code",
    category: "Dev Tools",
    status: "Core",
    description: "Primary IDE configured with Python environments, linting, formatting, and Git integration.",
  },
  {
    name: "Conda",
    category: "Dev Tools",
    status: "Core",
    description: "Isolated virtual environment management and package resolution for ML workflows.",
  },
  {
    name: "Web (HTML/CSS/JS)",
    category: "Dev Tools",
    status: "Core",
    description: "Core frontend web technologies, responsive layouts, and modern DOM interfaces.",
  },
];

