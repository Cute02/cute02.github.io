export interface EmbeddingNode {
  id: string;
  label: string;
  category: "AI & LLM" | "ML & Data" | "Backend" | "IoT & Hardware" | "Core Identity";
  vector: number[]; // 6-dimensional latent semantic vector
  position: [number, number, number]; // 3D coordinates in embedding space
  description: string;
  status: "Core" | "Learning";
}

// 6 Latent Dimensions:
// [0] LLM Reasoning & Prompting
// [1] NLP & Transformers
// [2] Classical ML, Stats & Data Science
// [3] Relational Databases & SQL
// [4] Embedded Systems & IoT Protocols
// [5] Systems Engineering & Production Reliability

export const EMBEDDING_NODES: EmbeddingNode[] = [
  // --- Cluster 1: AI Agents & LLM (Dominant in Dim 0, 1, 3) ---
  {
    id: "llm-agents",
    label: "LLM Agents",
    category: "AI & LLM",
    vector: [0.95, 0.65, 0.35, 0.75, 0.15, 0.85],
    position: [1.8, 1.4, 0.8],
    description: "Autonomous reasoning loops, tool routing, and dynamic agent architectures.",
    status: "Core",
  },
  {
    id: "text-to-sql",
    label: "Text-to-SQL",
    category: "AI & LLM",
    vector: [0.92, 0.55, 0.40, 0.95, 0.10, 0.80],
    position: [2.1, 0.8, 1.2],
    description: "Natural language translation into AST-validated, schema-constrained SQL.",
    status: "Core",
  },
  {
    id: "delulu",
    label: "Delulu (Agent)",
    category: "Core Identity",
    vector: [0.96, 0.60, 0.45, 0.92, 0.10, 0.88],
    position: [2.4, 1.1, 0.6],
    description: "AI agent generating read-only SQL queries and synthesizing business insights.",
    status: "Core",
  },
  {
    id: "prompt-eng",
    label: "Prompt Engineering",
    category: "AI & LLM",
    vector: [0.88, 0.60, 0.20, 0.50, 0.05, 0.70],
    position: [1.4, 2.0, 0.4],
    description: "Few-shot system prompt design, guardrails, and structured output formatting.",
    status: "Core",
  },
  {
    id: "rag",
    label: "RAG Systems",
    category: "AI & LLM",
    vector: [0.85, 0.70, 0.50, 0.65, 0.05, 0.75],
    position: [1.9, 1.8, -0.6],
    description: "Retrieval-Augmented Generation using semantic vector indexing & grounding.",
    status: "Core",
  },
  {
    id: "faiss",
    label: "FAISS",
    category: "AI & LLM",
    vector: [0.70, 0.65, 0.60, 0.55, 0.05, 0.70],
    position: [1.5, 1.2, -1.2],
    description: "High-performance dense vector similarity indexing and cluster partitioning.",
    status: "Core",
  },
  {
    id: "langchain",
    label: "LangChain",
    category: "AI & LLM",
    vector: [0.82, 0.55, 0.30, 0.60, 0.08, 0.65],
    position: [1.1, 1.6, 1.1],
    description: "Compositional chains, document transformers, and agent memory management.",
    status: "Core",
  },
  {
    id: "langgraph",
    label: "LangGraph",
    category: "AI & LLM",
    vector: [0.85, 0.50, 0.35, 0.60, 0.10, 0.70],
    position: [1.3, 1.1, 1.6],
    description: "Cyclic multi-agent graph state transitions and workflow control.",
    status: "Learning",
  },

  // --- Cluster 2: NLP & Deep Learning (Dominant in Dim 1, 2) ---
  {
    id: "bert",
    label: "BERT",
    category: "AI & LLM",
    vector: [0.55, 0.95, 0.75, 0.25, 0.05, 0.80],
    position: [0.6, 2.2, -1.1],
    description: "Bidirectional Encoder Representations from Transformers for deep semantic context.",
    status: "Core",
  },
  {
    id: "transformers",
    label: "Transformers",
    category: "AI & LLM",
    vector: [0.65, 0.92, 0.70, 0.20, 0.05, 0.80],
    position: [0.9, 2.4, -0.5],
    description: "Hugging Face self-attention transformer pipelines and tokenizers.",
    status: "Core",
  },
  {
    id: "mitra",
    label: "Mitra (GoEmotions)",
    category: "Core Identity",
    vector: [0.60, 0.96, 0.72, 0.20, 0.05, 0.82],
    position: [0.4, 2.5, -1.4],
    description: "Fine-grained 28-class emotion detection app powered by BERT GoEmotions.",
    status: "Core",
  },
  {
    id: "pytorch",
    label: "PyTorch",
    category: "ML & Data",
    vector: [0.45, 0.80, 0.85, 0.20, 0.10, 0.75],
    position: [-0.4, 2.1, -1.2],
    description: "Deep learning tensor operations, computational graphs, and loss backprop.",
    status: "Learning",
  },

  // --- Cluster 3: Classical ML & Statistical Science (Dominant in Dim 2, 5) ---
  {
    id: "python",
    label: "Python",
    category: "ML & Data",
    vector: [0.80, 0.80, 0.88, 0.75, 0.70, 0.90],
    position: [0.1, 0.3, 0.2],
    description: "Core programming lingua franca binding data pipelines, agents, and hardware.",
    status: "Core",
  },
  {
    id: "scikit-learn",
    label: "scikit-learn",
    category: "ML & Data",
    vector: [0.35, 0.60, 0.95, 0.40, 0.10, 0.85],
    position: [-1.2, 1.3, -0.8],
    description: "Supervised modeling: Logistic Regression, KNN, Random Forests, and cross-val.",
    status: "Core",
  },
  {
    id: "pandas",
    label: "Pandas",
    category: "ML & Data",
    vector: [0.40, 0.50, 0.90, 0.80, 0.10, 0.80],
    position: [-1.0, 0.6, 0.4],
    description: "DataFrame manipulations, missing-value imputation, and feature transforms.",
    status: "Core",
  },
  {
    id: "numpy",
    label: "NumPy",
    category: "ML & Data",
    vector: [0.30, 0.55, 0.92, 0.35, 0.15, 0.85],
    position: [-1.5, 0.9, -0.3],
    description: "High-dimensional array linear algebra and vectorized operations.",
    status: "Core",
  },
  {
    id: "eda",
    label: "EDA & Statistics",
    category: "ML & Data",
    vector: [0.30, 0.50, 0.94, 0.60, 0.10, 0.85],
    position: [-1.4, 1.6, 0.2],
    description: "Exploratory data analysis, correlation testing, and variance analysis.",
    status: "Core",
  },
  {
    id: "zero-leakage",
    label: "Zero-Leakage ML",
    category: "Core Identity",
    vector: [0.35, 0.55, 0.95, 0.50, 0.10, 0.95],
    position: [-1.7, 1.2, -0.9],
    description: "Strict train-test separation before fitting scalers or transformers on UCI data.",
    status: "Core",
  },

  // --- Cluster 4: Databases & Backend (Dominant in Dim 3, 5) ---
  {
    id: "sql",
    label: "SQL",
    category: "Backend",
    vector: [0.85, 0.30, 0.55, 0.98, 0.15, 0.85],
    position: [0.8, -1.2, 1.4],
    description: "Complex relational queries, aggregations, schema DDL, and index strategies.",
    status: "Core",
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    category: "Backend",
    vector: [0.80, 0.25, 0.50, 0.96, 0.15, 0.88],
    position: [0.6, -1.6, 1.1],
    description: "ACID-compliant relational database management and schema partitioning.",
    status: "Core",
  },
  {
    id: "supabase",
    label: "Supabase",
    category: "Backend",
    vector: [0.75, 0.25, 0.40, 0.90, 0.20, 0.82],
    position: [1.1, -1.4, 0.7],
    description: "Managed Postgres, Row-Level Security policies, and instant API endpoints.",
    status: "Core",
  },
  {
    id: "c-lang",
    label: "C",
    category: "Backend",
    vector: [0.15, 0.10, 0.30, 0.40, 0.88, 0.92],
    position: [-0.6, -1.8, -1.2],
    description: "Low-level memory management, pointers, and embedded firmware logic.",
    status: "Core",
  },

  // --- Cluster 5: Smart Hardware & IoT (Dominant in Dim 4, 5) ---
  {
    id: "esp8266",
    label: "ESP8266",
    category: "IoT & Hardware",
    vector: [0.20, 0.10, 0.15, 0.30, 0.96, 0.80],
    position: [-1.4, -1.1, 1.5],
    description: "Wi-Fi microcontroller handling GPIO interrupts, relay toggles, and sensors.",
    status: "Core",
  },
  {
    id: "mqtt",
    label: "MQTT Protocol",
    category: "IoT & Hardware",
    vector: [0.35, 0.15, 0.25, 0.45, 0.94, 0.85],
    position: [-0.9, -0.8, 1.8],
    description: "Lightweight publish-subscribe telemetry protocol for voice automation.",
    status: "Core",
  },
  {
    id: "pir-sensors",
    label: "PIR Sensors",
    category: "IoT & Hardware",
    vector: [0.10, 0.05, 0.15, 0.15, 0.92, 0.75],
    position: [-1.8, -1.4, 1.2],
    description: "Passive infrared motion detection with debounced alarm trigger circuits.",
    status: "Core",
  },
  {
    id: "embedded-systems",
    label: "Embedded Systems",
    category: "IoT & Hardware",
    vector: [0.25, 0.10, 0.20, 0.35, 0.95, 0.85],
    position: [-1.2, -1.5, 0.8],
    description: "Hardware interfacing, sensor buses, actuators, and signal conditioning.",
    status: "Core",
  },

  // --- Central Synthesis Node ---
  {
    id: "ai-solution-builder",
    label: "Mary Neha (AI Solution Builder)",
    category: "Core Identity",
    vector: [0.90, 0.85, 0.85, 0.85, 0.75, 0.95],
    position: [0.0, 0.0, 0.0],
    description: "Bridging autonomous LLM agents, leakage-free ML models, and smart hardware.",
    status: "Core",
  },
];

/**
 * Calculates exact mathematical Cosine Similarity between two N-dimensional vectors:
 * sim(u, v) = (u . v) / (||u|| * ||v||)
 */
export function calculateCosineSimilarity(vecA: number[], vecB: number[]): number {
  if (vecA.length !== vecB.length) return 0;

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  const denominator = Math.sqrt(normA) * Math.sqrt(normB);
  if (denominator === 0) return 0;

  return dotProduct / denominator;
}

/**
 * Returns top-K semantically closest nodes sorted by cosine similarity
 */
export function getTopSimilarNodes(
  targetNodeId: string,
  topK: number = 5
): { node: EmbeddingNode; similarity: number }[] {
  const targetNode = EMBEDDING_NODES.find((n) => n.id === targetNodeId);
  if (!targetNode) return [];

  return EMBEDDING_NODES.filter((n) => n.id !== targetNodeId)
    .map((node) => ({
      node,
      similarity: calculateCosineSimilarity(targetNode.vector, node.vector),
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, topK);
}

