import type { ContentItem } from '../../types/content.ts';
import { contentImages } from '../../images/index.ts';

export const experience: ContentItem[] = [
  {
    id: 'extuitive',
    title: 'Machine Learning Engineer II, Founding Team',
    subtitle: 'Extuitive / Flagship Pioneering',
    location: 'Boston, MA',
    period: 'Jun 2025 - Present',
    image: contentImages.extuitive,
    imageAlt: 'Abstract AI workflow system with scoring nodes and integration pipelines.',
    rating: 'Featured',
    tags: [
      'LangGraph',
      'TypeScript',
      'Next.js',
      'React',
      'Node.js',
      'Supabase',
      'Postgres',
      'Inngest',
      'AWS Lambda',
      'Sentry',
      'LangSmith',
      'PostHog',
    ],
    summary:
      'Founding-team engineer owning agentic workflows, creative generation, real-time model APIs, platform integrations, and customer-facing reliability.',
    proof: '~99% fewer recurring incidents',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'Founding-team machine learning engineer on a multi-tenant AI SaaS platform within Flagship Pioneering, owning systems from model integration through customer-facing product behavior.',
      },
      {
        label: 'What I Built',
        body: "Built a LangGraph conversational system for audience microsegment discovery, competitor analysis, and market-trend exploration. Owned AI creative generation and editing, human review, version history, and publishing to Meta campaigns and ad sets. Productionized the research team's ad-scoring model through real-time APIs surfaced directly in product flows.",
      },
      {
        label: 'System Design',
        body: 'Used persistent state, tool calling, dynamic context, guardrails, Inngest-based orchestration, dynamic prompting, and prompt caching. Integrated Meta, Shopify, HubSpot, Stripe, and Anrok across publishing, commerce, CRM, billing, and tax workflows.',
      },
      {
        label: 'Impact',
        body: 'Worked directly with customers to reproduce issues and translate feedback into fixes. Strengthened testing, CI/CD, and observability with Sentry, LangSmith, and PostHog, reducing recurring incidents by approximately 99%.',
      },
      {
        label: 'Technical Stack',
        body: 'LangGraph, TypeScript, Next.js, React, Node.js, Postgres, Supabase, Inngest, AWS Lambda, Sentry, LangSmith, PostHog, Meta, Shopify, HubSpot, Stripe, and Anrok.',
      },
    ],
  },
  {
    id: 'bu-bmc',
    title: 'Research Scientist',
    subtitle: 'Boston University / Boston Medical Center',
    location: 'Boston, MA',
    period: 'Sep 2024 - Jun 2025',
    image: contentImages.buBmc,
    imageAlt: 'Abstract clinical AI scene with EEG signals and connected medical data.',
    rating: 'Clinical AI',
    tags: [
      'PyTorch',
      'CUDA',
      'Transformers',
      'LSTMs',
      'EEG',
      'Time Series',
      'Knowledge Graphs',
      'RAG',
      'Optuna',
      'HyperOpt',
    ],
    summary:
      'Built clinical AI systems for EEG cerebral-edema prediction, meal-informed glucose modeling, and literature-grounded knowledge retrieval.',
    proof: '~0.80 AUC at shorter EEG horizons',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'Clinical AI research across EEG, continuous glucose monitoring, and medical literature in a joint Boston University and Boston Medical Center environment.',
      },
      {
        label: 'What I Built',
        body: 'Built Transformer and LSTM models over 18 bipolar EEG channels for cerebral-edema prediction, meal-informed glucose-response models for non-diabetic adults, and PubMed-derived knowledge graphs and retrieval pipelines for literature-grounded clinical question answering.',
      },
      {
        label: 'System Design',
        body: 'Ran controlled 30-fold experiments and GPU-cluster workloads using PyTorch, CUDA, mixed precision, Optuna, and HyperOpt. Injected retrieved entities and subgraphs into LLM context for clinical analysis.',
      },
      {
        label: 'Impact',
        body: 'Achieved approximately 0.80 AUC at shorter EEG prediction horizons. The glucose work was published in Circulation in 2026, and I mentored graduate researchers across clinical AI projects.',
      },
      {
        label: 'Technical Stack',
        body: 'PyTorch, CUDA, Transformers, LSTMs, time-series ML, knowledge graphs, RAG, PubMed, Optuna, and HyperOpt.',
      },
    ],
  },
  {
    id: 'bespoke-care',
    title: 'Lead AI Engineer',
    subtitle: 'BeSpoke Care Inc.',
    location: 'Boston, MA / Contract',
    period: 'Jun 2024 - Feb 2025',
    image: contentImages.phoenyx,
    imageAlt: 'Abstract multimodal voice AI system connected to smart devices.',
    rating: 'Voice AI',
    tags: [
      'AutoGen',
      'Azure OpenAI',
      'FastAPI',
      'WebSockets',
      'Gemini',
      'GPT',
      'AWS Polly',
      'Dialogflow CX',
      'Ludwig',
      'AWS',
      'Raspberry Pi',
      'ESP32',
    ],
    summary:
      'Architected multi-agent and multimodal voice AI for context-aware smart-device experiences.',
    proof: 'Led 3 engineers; ~100-device target',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'Lead AI engineer for a bilingual learning companion that combined conversational models, voice interaction, and physical smart devices.',
      },
      {
        label: 'What I Built',
        body: 'Architected multi-agent LLM workflows and multimodal conversational AI for voice interaction, interactive storytelling, and context-aware smart-device experiences.',
      },
      {
        label: 'System Design',
        body: 'Connected AutoGen and Azure OpenAI to FastAPI and WebSockets, then linked AWS EC2 and Lambda to Raspberry Pi and ESP32 devices for asynchronous content delivery.',
      },
      {
        label: 'Impact',
        body: 'Led a 3-person engineering team across implementation and deployment while supporting a target environment of approximately 100 devices.',
      },
      {
        label: 'Technical Stack',
        body: 'AutoGen, Azure OpenAI, FastAPI, WebSockets, GPT, Gemini, Dialogflow CX, AWS Polly, Ludwig, AWS EC2/Lambda, Raspberry Pi, and ESP32.',
      },
    ],
  },
  {
    id: 'time-machine-learning',
    title: 'AI Engineer',
    subtitle: 'Time Machine Learning Inc.',
    location: 'Boston, MA / Contract',
    period: 'Mar 2024 - Jun 2024',
    image: contentImages.timeMachine,
    imageAlt: 'Abstract retrieval system with document blocks and vector connections.',
    rating: 'RAG',
    tags: ['RAG', 'Vector Search', 'Mistral', 'Azure MLOps', 'Python', 'SaaS'],
    summary:
      'Designed a RAG-based SaaS onboarding system using Mistral, vector search, and Azure MLOps.',
    proof: '35% better onboarding scalability',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'Built the retrieval layer for a SaaS onboarding product where RAG served a real user workflow.',
      },
      {
        label: 'What I Built',
        body: 'Designed retrieval-augmented onboarding flows with Mistral, vector search, and Azure MLOps.',
      },
      {
        label: 'System Design',
        body: 'Connected model inference, vector retrieval, and deployment pipelines into a scalable product onboarding flow.',
      },
      {
        label: 'Impact',
        body: 'Improved onboarding scalability by 35%.',
      },
      {
        label: 'Technical Stack',
        body: 'Mistral, vector search, Azure MLOps, Python, and SaaS workflow architecture.',
      },
    ],
  },
  {
    id: 'igs-nrel',
    title: 'Data Science Fellow',
    subtitle: 'Institute for Global Sustainability / NREL',
    location: 'Boston, MA',
    period: 'May 2023 - Jul 2023',
    image: contentImages.nrel,
    imageAlt: 'Abstract energy policy analytics with data grids and chart lines.',
    rating: 'Data Science',
    tags: ['Python', 'scikit-learn', 'spaCy', 'Plotly', 'Policy Analytics'],
    summary:
      'Analyzed federal energy datasets and built models and dashboards for energy-policy stakeholders.',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'A fellowship with NREL advisors focused on energy inequality and justice.',
      },
      {
        label: 'What I Built',
        body: 'Analyzed RECS, Justice40, and LEAD datasets and built regression, classification, and Plotly dashboard workflows.',
      },
      {
        label: 'Impact',
        body: 'Surfaced interpretable energy-policy insights for stakeholder review.',
      },
      {
        label: 'Technical Stack',
        body: 'Python, scikit-learn, spaCy, Plotly, regression, classification, and policy analytics.',
      },
    ],
  },
  {
    id: 'bu-research-assistant',
    title: 'Research Assistant',
    subtitle: 'Boston University',
    location: 'Boston, MA',
    period: 'Jan 2023 - Dec 2023',
    image: contentImages.buTeaching,
    imageAlt: 'Abstract collaborative machine-learning research environment.',
    rating: 'Research',
    tags: ['Python', 'Docker', 'NLP', 'Deep Learning', 'Feature Engineering'],
    summary:
      'Supported 10+ BU Spark! AI/ML projects across data pipelines, model development, evaluation, and reproducible workflows.',
    proof: '10+ AI/ML projects',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'Research support across more than 10 BU Spark! AI and machine-learning projects.',
      },
      {
        label: 'What I Built',
        body: 'Built data-processing and feature-engineering pipelines and contributed to model development and evaluation across NLP and deep-learning projects.',
      },
      {
        label: 'System Design',
        body: 'Used Docker to create reproducible project workflows across collaborators.',
      },
      {
        label: 'Technical Stack',
        body: 'Python, Docker, NLP, deep learning, feature engineering, and model evaluation.',
      },
    ],
  },
  {
    id: 'ibm',
    title: 'SDE Intern',
    subtitle: 'IBM',
    location: 'Pune, India',
    period: 'Jan 2022 - Jul 2022',
    image: contentImages.ibm,
    imageAlt: 'Abstract backend service architecture with cloud infrastructure connections.',
    rating: 'Backend',
    tags: ['Java', 'Quarkus', 'OpenJDK 11', 'Microservices'],
    summary:
      'Reengineered a Java microservice with Quarkus and OpenJDK 11 for a smaller, faster runtime.',
    proof: '50% less resource use; 13% more efficient',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'Enterprise backend engineering on an IBM Security Verify Java service.',
      },
      {
        label: 'What I Built',
        body: 'Reengineered the microservice using Quarkus and OpenJDK 11.',
      },
      {
        label: 'Impact',
        body: 'Reduced resource usage by 50% and improved overall efficiency by 13%.',
      },
      {
        label: 'Technical Stack',
        body: 'Java, Quarkus, OpenJDK 11, and microservices.',
      },
    ],
  },
  {
    id: 'tech-mahindra',
    title: 'Research Intern',
    subtitle: 'Tech Mahindra',
    location: 'Pune, India',
    period: 'Oct 2020 - Dec 2021',
    image: contentImages.techMahindra,
    imageAlt: 'Abstract multilingual NLP and computer-vision research signals.',
    rating: 'NLP + CV',
    tags: ['Python', 'BeautifulSoup', 'NLTK', 'CNN', 'YOLOv5', 'SSD'],
    summary:
      'Built a Sanskrit NLP voice assistant and co-led computer-vision evaluation for real-time drone detection.',
    proof: '11+ NLP approaches; 97% drone detection',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'Research spanning multilingual language technology and resource-constrained computer vision.',
      },
      {
        label: 'What I Built',
        body: 'Built a Sanskrit voice assistant using Python, BeautifulSoup, NLTK, database connectors, and backend APIs, and evaluated 11+ approaches for multilingual intent and language processing. Co-led a 5-person team comparing CNN, YOLOv5, and SSD for real-time drone detection.',
      },
      {
        label: 'Impact',
        body: 'The Sanskrit work became a Wiley book chapter in 2023. The vision evaluation achieved 97% drone-detection success and was published at IEEE IConSIP in 2022.',
      },
      {
        label: 'Technical Stack',
        body: 'Python, BeautifulSoup, NLTK, backend APIs, CNN, YOLOv5, and SSD.',
      },
    ],
  },
];
