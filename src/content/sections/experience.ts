import type { ContentItem } from '../../types/content.ts';

export const experience: ContentItem[] = [
  {
    id: 'extuitive',
    title: 'Machine Learning Engineer II, Founding Team',
    subtitle: 'Extuitive / Flagship Pioneering',
    location: 'Boston, MA',
    period: 'Jun 2025 - Jun 2026',
    rating: 'Founding Team',
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
      'Stripe',
      'Anrok',
      'Meta API',
      'Shopify',
      'HubSpot',
      'Sentry',
      'PostHog',
    ],
    summary:
      'Founding-team machine learning engineer on a production multi-tenant SaaS platform, building LangGraph agentic workflows, ad pipelines, model scoring APIs, integrations, and reliability systems.',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'Joined as part of the founding engineering team at an AI creative SaaS startup within Flagship Pioneering. Over one year the product went through three major pivots\u2014each one meant rethinking workflows, carrying forward the infrastructure worth keeping, and shipping the new direction quickly without breaking what users already relied on.',
      },
      {
        label: 'What I built',
        body: 'Owned entire workflows end-to-end with minimal guidance: LangGraph-based agent systems with checkpointing and multi-turn state, competitor analysis and product microsegmentation, live market and social trend feeds for ad creation, and the full ad-generation-to-publishing pipeline\u2014AI image generation, a variant editor with history, and direct publishing to Meta campaigns and ad sets. Also productionized the research team\u2019s ad-scoring model into a real-time API on Node.js and AWS Lambda with typed contracts.',
      },
      {
        label: 'Impact',
        body: 'Shipped 10+ workflows across 4 product surfaces and owned 5+ platform integrations (Shopify, Meta, HubSpot, Stripe, Anrok). Helped the team move smoothly through each pivot by keeping systems modular enough to repurpose rather than rebuild. Reliability work with validation, Sentry, PostHog, and unit tests cut recurring production incidents by roughly 99%.',
      },
    ],
  },
  {
    id: 'bu-bmc',
    title: 'Research Scientist',
    subtitle: 'Boston University / Boston Medical Center',
    location: 'Boston, MA',
    period: 'Sep 2024 - Jun 2025',
    rating: 'Healthcare AI',
    tags: [
      'PyTorch',
      'CUDA',
      'Transformers',
      'LSTMs',
      'EEG',
      'Clinical AI',
      'Time Series',
      'Knowledge Graphs',
      'RAG',
      'PubMed',
      'Optuna',
      'HyperOpt',
    ],
    summary:
      'Clinical AI research across EEG cerebral edema prediction, meal-informed glucose modeling, and knowledge-graph retrieval for medical literature.',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'Three concurrent clinical AI projects run jointly between Boston University and Boston Medical Center, all under HIPAA-aware data workflows with real patient signals.',
      },
      {
        label: 'What I built',
        body: 'Transformer and LSTM pipelines over 18 bipolar EEG channels for cerebral edema prediction (30-fold experiments, ~0.80 AUC at shorter horizons); a CGM glucose forecasting model that incorporates meal intake, later published in Circulation; and PubMed-derived knowledge-graph retrieval to ground LLM clinical question-answering, including experiments with GAN-based graph augmentation.',
      },
      {
        label: 'Impact',
        body: 'The glucose work was published in Circulation (2026) and the EEG work is under review. Mentored 7 graduate researchers on clinical ML, data processing, and evaluation methodology along the way.',
      },
    ],
  },
  {
    id: 'bespoke-care',
    title: 'Lead AI Engineer',
    subtitle: 'BeSpoke Care Inc., My Phoenyx',
    location: 'Boston, MA',
    period: 'Jun 2024 - Feb 2025',
    rating: 'Product AI',
    tags: [
      'My Phoenyx',
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
      'Lead AI engineer for My Phoenyx, building multi-agent LLM, voice AI, and smart-device workflows for a bilingual learning companion.',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'My Phoenyx is a bilingual learning companion for children that runs on physical smart devices, which means voice, multi-agent AI, and edge hardware all have to work together in one product.',
      },
      {
        label: 'What I built',
        body: 'A multi-agent architecture using AutoGen, Azure OpenAI, FastAPI, and WebSockets; interactive multilingual, age-adaptive storytelling with GPT-4o Mini, Gemini, AWS Polly, Dialogflow CX, and Ludwig; and a multithreaded AWS backend (EC2, Lambda) serving Raspberry Pi and ESP32 devices that supported a 100-device target environment.',
      },
      {
        label: 'Impact',
        body: 'Led a 3-person team and improved AI workflow throughput by about 25%. Also introduced CI/CD and code review practices for the LLM stack\u2014agents need the same engineering discipline as any other production system.',
      },
    ],
  },
  {
    id: 'time-machine-learning',
    title: 'AI Engineer',
    subtitle: 'Time Machine Learning Inc.',
    location: 'Boston, MA',
    period: 'Mar 2024 - Jun 2024',
    tags: ['RAG', 'Vector Search', 'Mistral', 'Azure MLOps', 'Python', 'SaaS'],
    summary:
      'Built RAG and vector-search infrastructure for a SaaS onboarding product using Mistral, Azure MLOps, and production-oriented retrieval workflows.',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'A short, focused engagement building the retrieval layer for a SaaS onboarding product\u2014where RAG had to serve a real user flow rather than a chatbot demo.',
      },
      {
        label: 'What I built',
        body: 'Vector database architecture using all-mpnet-base-v2 embeddings, retrieval-augmented onboarding flows, and Azure MLOps pipelines around Mistral models.',
      },
      {
        label: 'Impact',
        body: 'The redesigned retrieval architecture improved scalability by roughly 35%, and the project shaped how I think about connecting RAG to actual product workflows.',
      },
    ],
  },
  {
    id: 'igs-nrel',
    title: 'Data Science Fellow',
    subtitle: 'Institute for Global Sustainability / NREL',
    location: 'Boston, MA',
    period: 'May 2023 - Jul 2023',
    tags: ['Python', 'scikit-learn', 'spaCy', 'Plotly', 'Data Science', 'Policy Analytics'],
    summary:
      'Analyzed energy-policy datasets and built dashboards that helped stakeholders explore RECS, Justice40, and LEAD data.',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'A fellowship with NREL advisors focused on energy inequality and justice\u2014turning federal datasets into something policymakers could actually explore.',
      },
      {
        label: 'What I built',
        body: 'An energy planning tool integrating RECS, Justice40, and LEAD data, plus 20+ interactive Plotly Dash visualizations designed for policymakers rather than data scientists. Python, scikit-learn, and spaCy throughout.',
      },
      {
        label: 'Impact',
        body: 'Presented findings on energy inequality and justice implications to 50+ stakeholders.',
      },
    ],
  },
  {
    id: 'bu-teaching-assistant',
    title: 'Teaching Assistant',
    subtitle: 'Boston University',
    location: 'Boston, MA',
    period: 'Jan 2023 - Dec 2023',
    tags: ['Teaching', 'Mentorship', 'AI', 'ML', 'Python', 'TensorFlow', 'NLP'],
    summary:
      'Supported 200+ students across AI/ML labs, debugging, grading, and project mentorship.',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'TA for Computational Tools for Data Science\u2014weekly labs, office hours, and a steady stream of code that needed debugging.',
      },
      {
        label: 'What I built',
        body: 'Ran 30+ hands-on labs covering Python, scikit-learn, TensorFlow, and PyTorch, and mentored 10+ BU Spark! NLP/ML projects spanning K-means, KNN, SVM, GMM, TF-IDF, Word2Vec, and GANs.',
      },
      {
        label: 'Impact',
        body: 'Received 95% positive student evaluations. Teaching also forces you to know what you actually understand\u2014some of my clearest mental models came from explaining them badly the first time.',
      },
    ],
  },
  {
    id: 'ibm',
    title: 'SDE Intern',
    subtitle: 'IBM',
    location: 'Pune, India',
    period: 'Jan 2022 - Jul 2022',
    tags: ['Java', 'Quarkus', 'OpenJDK', 'Microservices', 'Backend Engineering'],
    summary:
      'Optimized an IBM Security Verify Java microservice through Quarkus migration, reducing resource usage and improving efficiency.',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'An enterprise backend internship on IBM Security Verify, working with a cross-functional team based in Singapore.',
      },
      {
        label: 'What I built',
        body: 'Migrated a legacy Java microservice to Quarkus on OpenJDK 11, restructuring it for faster startup and a smaller runtime footprint.',
      },
      {
        label: 'Impact',
        body: 'Cut resource usage by about 50% and improved efficiency by 13%\u2014performance gains that showed up in real infrastructure costs, which was a formative first look at engineering at enterprise scale.',
      },
    ],
  },
  {
    id: 'tech-mahindra',
    title: 'NLP Research Intern',
    subtitle: 'Tech Mahindra',
    location: 'Pune, India',
    period: 'Oct 2020 - Jan 2021',
    tags: ['NLP', 'Python', 'BeautifulSoup', 'NLTK', 'Multilingual AI'],
    summary:
      'Built a Sanskrit voice-bot pipeline using scraping, NLP preprocessing, backend development, and multilingual algorithm evaluation.',
    details: [],
    sections: [
      {
        label: 'Context',
        body: 'A research internship exploring whether modern NLP could make Sanskrit a usable interface language\u2014part engineering problem, part language preservation.',
      },
      {
        label: 'What I built',
        body: 'A voice-bot pipeline built from scratch: data scraped from 20+ web sources with BeautifulSoup, NLTK preprocessing, a MySQL backend, and benchmarking of 11+ NLP algorithms for accuracy and scalability across multilingual workflows.',
      },
      {
        label: 'Impact',
        body: 'The work was later published as a Wiley book chapter (2023), and it\u2019s the project that convinced me NLP could preserve languages rather than just automate them away.',
      },
    ],
  },
];
