export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: "AI Agents & LLM" | "ML" | "Computer Vision" | "IoT";
  tags: string[];
  status: "Completed" | "In progress";
  githubUrl?: string; // only if confirmed, otherwise undefined -> shows "Private / Coming soon"
  featured: boolean;
  problem: string;
  approach: string;
  techStack: string[];
  keyHighlights: string[];
  architectureNotes?: string;
  timeline?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "delulu",
    title: "Delulu",
    tagline:
      "AI agent that answers business questions in plain English by generating and running SQL on an organization's existing database (Text-to-SQL), then turning results into clear insights.",
    category: "AI Agents & LLM",
    tags: ["LLM Agents", "Text-to-SQL", "SQL", "Python"],
    status: "In progress",
    featured: true,
    githubUrl: undefined, // Private / Coming soon
    problem:
      "Business stakeholders frequently need answers from operational databases but face bottlenecks waiting for data analysts to write custom SQL queries. Non-technical users need direct, natural language access to their database while preventing hallucinated queries and unauthorized data modifications.",
    approach:
      "Designed an end-to-end Text-to-SQL agent workflow that ingests schema metadata, evaluates user questions through prompt-engineered query synthesis, validates generated SQL for syntax and safety, executes against the target database with read-only constraints, and synthesizes raw query results into actionable, natural language insights.",
    techStack: [
      "Python",
      "LLM Agents",
      "Text-to-SQL",
      "SQL",
      "PostgreSQL",
      "Prompt Engineering",
    ],
    keyHighlights: [
      "Translates complex natural language prompts into syntactically valid SQL queries",
      "Zero-shot schema adaptation for existing organization relational databases",
      "Read-only execution safety sandboxing to prevent destructive queries",
      "Automatic data summarization converting tabular SQL results into business insights",
    ],
    architectureNotes:
      "User Question → Schema Context Injection → LLM Reasoning & SQL Generation → Syntax & Safety AST Validator → Read-Only DB Execution → Natural Language Insight Synthesis",
    timeline: "2026",
  },
  {
    id: "02",
    slug: "mitra",
    title: "Mitra",
    tagline: "Emotion-detection app using BERT (GoEmotions).",
    category: "AI Agents & LLM",
    tags: ["NLP", "BERT", "Transformers", "Python"],
    status: "In progress",
    featured: true,
    githubUrl: undefined, // Private / Coming soon
    problem:
      "Standard sentiment analysis flattens human emotion into simplistic positive, negative, or neutral buckets. Fine-grained human communication requires detecting nuanced affective states such as curiosity, gratitude, relief, or concern to power empathetic conversational agents.",
    approach:
      "Building a fine-grained emotion detection system powered by bidirectional transformer representations (BERT) trained on the 58k Reddit comment GoEmotions dataset (28 emotion categories). Focuses on token-level contextual understanding and multi-label emotion prediction.",
    techStack: [
      "Python",
      "Hugging Face Transformers",
      "BERT",
      "PyTorch (CPU)",
      "GoEmotions Dataset",
      "NLP Preprocessing",
    ],
    keyHighlights: [
      "Leverages deep contextual representations from pre-trained BERT",
      "Multi-label emotion classification across nuanced emotional dimensions",
      "Custom inference pipeline with tokenization and confidence thresholding",
      "Designed for integration into conversational systems and empathetic agents",
    ],
    architectureNotes:
      "Raw Text Input → BertTokenizer → Bidirectional Self-Attention Transformer Layers → Classification Head (28 Emotion Logits) → Sigmoid Thresholding → Emotion Probability Distribution",
    timeline: "2026",
  },
  {
    id: "03",
    slug: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    tagline:
      "End-to-end supervised ML on the UCI Heart Disease dataset. Compared Logistic Regression, KNN, Decision Tree, and Random Forest, with EDA and leakage-free preprocessing (split before feature engineering).",
    category: "ML",
    tags: ["scikit-learn", "EDA", "Pandas"],
    status: "Completed",
    featured: true,
    githubUrl: undefined, // Private / Coming soon
    problem:
      "Cardiovascular diseases are the leading cause of mortality globally. Clinical risk assessment models often suffer from data leakage during development, yielding artificially high training scores that fail to generalize to unseen patient cohorts.",
    approach:
      "Constructed a rigorous, leakage-free end-to-end machine learning pipeline on the UCI Heart Disease dataset. Enforced strict train-test separation before any feature engineering, imputation, or scaling. Conducted comprehensive Exploratory Data Analysis (EDA) on clinical markers (chest pain type, resting ECG, cholesterol, ST depression), followed by systematic benchmarking across four distinct classifier architectures.",
    techStack: [
      "Python",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Exploratory Data Analysis",
    ],
    keyHighlights: [
      "100% data-leakage-free preprocessing (strict train/test split before fitting transformers)",
      "Comprehensive EDA identifying key correlations across 14 clinical features",
      "Systematic comparison of 4 algorithms: Logistic Regression, KNN, Decision Tree, and Random Forest",
      "Evaluation using Confusion Matrices, Precision-Recall tradeoffs, and ROC-AUC curves",
    ],
    architectureNotes:
      "UCI Clinical Data → Strict Train/Test Separation (80/20) → Pipeline Transformers (StandardScaler & OneHotEncoder fit strictly on Train) → Model Training (LogReg, KNN, DT, RF) → Cross-Validated Evaluation",
    timeline: "2026",
  },
  {
    id: "04",
    slug: "glowtrace",
    title: "GlowTrace",
    tagline:
      "AI skincare analysis app using computer vision, documented against a full ML lifecycle.",
    category: "Computer Vision",
    tags: ["Computer Vision", "ML Lifecycle"],
    status: "In progress",
    featured: false,
    githubUrl: undefined, // Private / Coming soon
    problem:
      "Skincare assessments are often subjective or inaccessible. Building computer vision systems for dermatological feature analysis requires structured lifecycle discipline—from ethical dataset curation to model interpretability and deployment edge constraints.",
    approach:
      "Structuring GlowTrace against the comprehensive Machine Learning lifecycle: problem framing, data acquisition and privacy consent, image normalization, feature segmentation, model evaluation, and lifecycle documentation for production readiness.",
    techStack: [
      "Python",
      "Computer Vision",
      "ML Lifecycle Documentation",
      "EDA",
      "PyTorch (CPU)",
    ],
    keyHighlights: [
      "Formulated according to formal industry ML lifecycle governance",
      "Explores image processing pipelines for facial zone segmentation",
      "Comprehensive documentation covering dataset bias and edge deployment hurdles",
      "Designed for privacy-first, on-device image evaluation",
    ],
    architectureNotes:
      "Image Ingestion → Lighting Normalization → Region of Interest (ROI) Localization → Feature Extraction → Diagnostic Assessment Scoring → ML Lifecycle Tracking",
    timeline: "2026",
  },
  {
    id: "05",
    slug: "motion-detection-alarm",
    title: "Motion Detection Alarm System",
    tagline: "PIR motion sensor triggers an audible alarm.",
    category: "IoT",
    tags: ["PIR Sensor", "Python", "Embedded Systems"],
    status: "Completed",
    featured: false,
    githubUrl: undefined, // Private / Coming soon
    problem:
      "Physical security setups require instant, low-latency intrusion detection without complex high-overhead computer vision setups in resource-constrained environments.",
    approach:
      "Implemented a reliable hardware intrusion detection system using Passive Infrared (PIR) sensors coupled with embedded microcontrollers and Python logic. The system continuously samples infrared radiation changes within its field of view and fires an immediate audible alarm circuit upon trigger threshold violation.",
    techStack: [
      "Python",
      "PIR Sensor",
      "Embedded Systems",
      "GPIO Interfacing",
      "Hardware Debugging",
    ],
    keyHighlights: [
      "Hardware interrupt-driven motion sensing with zero idle polling lag",
      "Integrated software debounce to filter environmental false positives",
      "Direct buzzer/alarm actuator triggering with fail-safe circuit design",
      "Tested and verified in real-world physical deployment",
    ],
    architectureNotes:
      "PIR Sensor (Pyroelectric Element) → Digital GPIO State Change Interrupt → Python Controller Logic (Debounce Filter) → Audible Alarm Actuator",
    timeline: "2025",
  },
  {
    id: "06",
    slug: "voice-controlled-light",
    title: "Voice Controlled Light Automation",
    tagline:
      "Hands-free light control via voice, using MQTT and an ESP8266.",
    category: "IoT",
    tags: ["MQTT", "ESP8266", "IoT", "Python"],
    status: "Completed",
    featured: false,
    githubUrl: undefined, // Private / Coming soon
    problem:
      "Smart home devices often depend on proprietary cloud ecosystems with noticeable latency and external privacy vulnerabilities. Local or lightweight protocol-based voice control provides faster, independent home automation.",
    approach:
      "Developed a responsive voice-activated lighting automation unit leveraging an ESP8266 Wi-Fi microcontroller and the MQTT (Message Queuing Telemetry Transport) publish-subscribe messaging protocol. Commands captured via microphone are routed through Python to an MQTT broker, instantaneously triggering relay actuation on the ESP8266.",
    techStack: [
      "ESP8266",
      "MQTT",
      "IoT",
      "Python",
      "C / C++ (Embedded)",
      "Relay Actuation",
    ],
    keyHighlights: [
      "Ultra-low latency message delivery using lightweight MQTT publish/subscribe",
      "Wi-Fi connected ESP8266 controlling high-voltage relay safely with optocoupler isolation",
      "Python integration bridge linking voice speech processing to broker topics",
      "Resilient reconnection routines handling intermittent network dropouts",
    ],
    architectureNotes:
      "Voice Input → Python Voice Processor → MQTT Broker (Topic Publish) → ESP8266 Wi-Fi Subscriber → Optoisolated Relay Module → Light State Toggle",
    timeline: "2025",
  },
];

