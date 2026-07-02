import { images } from './images.ts';

export type PortfolioItem = {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  image?: string;
  rating?: string;
  tags: string[];
  summary: string;
  details: string[];
  link?: string;
  linkLabel?: string;
  featured?: boolean;
};

export type Metric = {
  value: string;
  label: string;
};

export type PortfolioData = {
  featuredWork: PortfolioItem[];
  projects: PortfolioItem[];
  experience: PortfolioItem[];
  research: PortfolioItem[];
  skills: PortfolioItem[];
  education: PortfolioItem[];
  metrics: Metric[];
};

export const portfolio: PortfolioData = {
  featuredWork: [
    {
      id: 'production-ai-creative-workflows',
      title: 'Production AI Creative Workflows',
      subtitle: 'Multi-tenant SaaS, creative AI, publishing workflows',
      rating: 'Production System',
      tags: ['LangGraph', 'TypeScript', 'Next.js', 'Supabase', 'Inngest'],
      summary:
        'Built and shipped AI-powered creative workflows, content editing systems, draft validation, AI image generation, and human-in-the-loop review flows in a multi-tenant SaaS environment.',
      details: [
        'Worked on the company core conversational product on LangGraph, including stateful chatbot behavior, checkpointing, state management, and multi-turn flows.',
        'Helped drive ad creation through product microsegmentation, competitor analysis, and live market and social trend insights.',
        'Owned parts of the ad-generation-to-publishing pipeline after the product pivot.',
        'Built AI-powered editor flows with edit-variant history and direct publishing into Meta campaigns and ad sets.',
        'Kept implementation product-focused, not just prototype-focused.',
      ],
      featured: true,
    },
    {
      id: 'ad-scoring-model-api',
      title: 'Ad Scoring and Model API Infrastructure',
      subtitle: 'Model outputs turned into product infrastructure',
      rating: 'Model API',
      tags: ['Node.js', 'AWS Lambda', 'APIs', 'Typed Contracts', 'AI Scoring'],
      summary:
        'Built API infrastructure that productionized a research ad-scoring model, triggering scoring on generation and editing events and delivering real-time scores to the frontend.',
      details: [
        'Converted research model behavior into frontend-ready product infrastructure.',
        'Triggered scoring across generation and editing workflows.',
        'Delivered real-time scoring outputs to product surfaces.',
        'Built typed data contracts and backend orchestration so model outputs were usable in the SaaS product.',
      ],
    },
    {
      id: 'platform-integrations-reliability',
      title: 'Platform Integrations and Reliability',
      subtitle: 'Integrations, RBAC, billing, analytics, observability',
      rating: 'Platform',
      tags: ['Meta API', 'Shopify', 'HubSpot', 'Stripe', 'Anrok', 'RBAC', 'Sentry', 'PostHog'],
      summary:
        'Owned production integrations and platform systems across Meta, Shopify, HubSpot, Stripe, Anrok, onboarding, workspace/RBAC, background jobs, analytics, and observability.',
      details: [
        'Delivered full-stack platform foundations for a multi-tenant AI SaaS product.',
        'Shipped 10+ production workflows across 4 core surfaces.',
        'Owned 5+ third-party integrations across Shopify, Meta Marketing API, HubSpot, Stripe, and Anrok.',
        'Built backend orchestration and API layers with Node.js, Inngest, AWS Lambda, and typed data contracts.',
        'Reduced recurring production incidents by around 99% across key product surfaces using validation, observability, unit testing, and workflow-level debugging.',
      ],
    },
    {
      id: 'eeg-cerebral-edema',
      title: 'EEG Cerebral Edema Prediction',
      subtitle: 'Clinical time-series modeling with EEG signals',
      rating: 'Healthcare AI',
      tags: ['PyTorch', 'Transformers', 'EEG', 'Clinical AI', 'Time Series', 'CUDA'],
      summary:
        'Built Transformer and LSTM pipelines for EEG-based cerebral edema prediction using multi-channel clinical time-series data.',
      details: [
        'Modeled 18 bipolar EEG channels with controlled 30-fold experiments.',
        'Used probability-based AUC reporting, reaching approximately 0.80 AUC at shorter prediction horizons.',
        'Worked with entropy, regularity, frequency bands, alpha/delta ratios, spike frequency, and burst suppression features.',
        'Optimized GPU training on BU SCC clusters using PyTorch/CUDA, mixed precision, and hyperparameter tuning.',
        'Collaborated across biostatistics, healthcare, and AI research.',
      ],
    },
    {
      id: 'my-phoenyx-conversational-ai',
      title: 'My Phoenyx Conversational AI',
      subtitle: 'Bilingual learning companion for children',
      rating: 'Multi-Agent AI',
      tags: ['AutoGen', 'Azure OpenAI', 'FastAPI', 'WebSockets', 'Gemini', 'GPT', 'AWS Polly'],
      summary:
        'Built multi-agent LLM systems, multimodal smart-device AI features, and backend workflows for My Phoenyx, an AI-powered bilingual learning companion for children.',
      details: [
        'Engineered multi-agent LLM architecture with prompt/tool design and backend orchestration.',
        'Built voice interaction, stop-and-listen behavior, age-centric media support, and interactive storytelling features.',
        'Supported smart-device workflows involving Raspberry Pi/ESP32 patterns, AWS EC2/Lambda patterns, and multithreaded backend components.',
      ],
      link: 'https://www.myphoenyx.com',
      linkLabel: 'Open product',
    },
  ],
  projects: [
    {
      id: 'iss-earth-imagery',
      title: 'ISS Earth Imagery Geolocation',
      subtitle: 'Geospatial computer vision for astronaut imagery',
      image: images.issGeolocate,
      rating: 'CV Project',
      tags: ['Computer Vision', 'Geospatial AI', 'VGG-16', 'SIFT', 'GPT-4 Vision', 'Docker'],
      summary:
        'Built a Dockerized geotagging system for astronaut imagery using VGG-16/ImageNet, SIFT, and GPT-4 Vision, achieving 75%+ precise geolocation and 90%+ rough-location accuracy.',
      details: [
        'Combined VGG-16/ImageNet feature extraction with SIFT-based matching for geolocation.',
        'Used GPT-4 Vision to support visual interpretation and rough-location reasoning.',
        'Packaged the workflow in Docker for reproducible image processing.',
      ],
    },
    {
      id: 'stock-investment-advisor',
      title: 'Conversational Stock Investment Advisor',
      subtitle: 'Prototype for investment exploration, not financial advice',
      image: images.advisorbot,
      rating: 'NLP Prototype',
      tags: ['NLP', 'Conversational AI', 'Python', 'Rasa', 'BERT', 'DialoGPT', 'AWS'],
      summary:
        'Built an AWS-deployed NLP assistant for stock and investment exploration using Python, Rasa, NER, BERT, DialoGPT, sentiment analysis, Alpaca, and Alpha Vantage, reaching 92% query accuracy.',
      details: [
        'Built a Rasa-based conversational assistant with NER, BERT, DialoGPT, and sentiment analysis.',
        'Integrated Alpaca and Alpha Vantage for market-data exploration.',
        'Designed the project as an educational prototype, not a financial advice product.',
      ],
    },
    {
      id: 'real-time-drone-detection',
      title: 'Real-Time Drone Detection',
      subtitle: 'Resource-constrained object detection',
      image: images.droneSwarm,
      rating: 'Object Detection',
      tags: ['YOLOv5', 'SSD', 'CNN', 'Computer Vision', 'Object Detection'],
      summary:
        'Led a 5-person engineering team evaluating CNN, YOLOv5, and SSD models for resource-constrained drone detection, reaching a 97% success rate.',
      details: [
        'Evaluated CNN, YOLOv5, and SSD approaches across drone imagery and video scenarios.',
        'Worked on model tradeoffs for resource-constrained detection.',
        'Contributed to a drone detection research prototype with a 5-person engineering team.',
      ],
    },
    {
      id: 'style-transfer-study',
      title: 'Comparative Study of Neural Style Transfer Models',
      subtitle: 'Computer vision research project',
      image: images.styleTransfer,
      rating: 'Published',
      tags: ['Computer Vision', 'Style Transfer', 'Deep Learning'],
      summary:
        'Research project comparing neural style transfer approaches and their behavior across visual outputs.',
      details: [
        'Compared neural style transfer approaches across visual quality and model behavior.',
        'Published the work through ACM ICIMMI.',
      ],
    },
    {
      id: 'text2live-3d',
      title: '3D Text2Live',
      subtitle: 'Text-guided localized 3D editing',
      image: images.textToLive,
      rating: '3D AI',
      tags: ['3D AI', 'Text-Guided Editing', 'Computer Vision'],
      summary:
        'Text-guided localized editing project for manipulating 3D scenes using natural language prompts.',
      details: [
        'Explored natural-language editing workflows for localized 3D scene changes.',
        'Studied how text prompts can guide appearance and structure changes in 3D environments.',
      ],
    },
    {
      id: 'neunet-project',
      title: 'Neunet AI Platform',
      subtitle: 'Agentic AI platform exploration',
      rating: 'Agentic AI',
      tags: ['LLMs', 'Agentic AI', 'RAG', 'Python', 'FastAPI', 'Vector Search'],
      summary:
        'Early-stage agentic AI product work involving LLM orchestration, retrieval workflows, prompt design, and backend AI service architecture.',
      details: [
        'Worked on agentic workflow patterns for product-facing AI behavior.',
        'Explored retrieval, prompt workflows, and backend service architecture.',
        'Kept the work framed as project-based AI platform exploration.',
      ],
    },
    {
      id: 'biased-prosecution',
      title: 'Biased Prosecution Project',
      subtitle: 'Data analysis for prosecution outcomes',
      image: images.biasedProsecution,
      rating: 'Data Project',
      tags: ['Data Analysis', 'Visualization', 'Statistics', 'Policy Analytics'],
      summary:
        'Analyzed county-level prosecution data to study sentencing patterns, disparities, and charge outcomes across demographic groups.',
      details: [
        'Collected, cleaned, and analyzed prosecution datasets from multiple counties.',
        'Used statistical testing and visualization to present patterns in sentencing and disposition outcomes.',
        'Focused on making complex justice-system data easier to inspect and communicate.',
      ],
    },
    {
      id: 'zoya-voice-assistant',
      title: 'Zoya Voice Assistant',
      subtitle: 'Smart-device voice interaction',
      image: images.zoya,
      rating: 'Voice AI',
      tags: ['Voice AI', 'NLP', 'Speech', 'Assistant Systems'],
      summary:
        'Voice assistant project for smart-device interactions, reminders, and natural language commands.',
      details: [
        'Built smart-device voice interactions for reminders and natural language command flows.',
        'Focused on practical assistant behavior and human-device interaction.',
      ],
    },
    {
      id: 'density-traffic-system',
      title: 'Density-Based Traffic Signal System',
      subtitle: 'Vehicle-density traffic control',
      image: images.trafficLights,
      tags: ['Computer Vision', 'Traffic AI', 'Python'],
      summary:
        'Computer vision project for traffic signal control based on vehicle density and road-scene analysis.',
      details: [
        'Explored dynamic traffic signal timing based on vehicle density.',
        'Used computer vision concepts for road-scene analysis.',
      ],
    },
    {
      id: 'churn-modelling',
      title: 'Churn Modelling',
      subtitle: 'Customer churn prediction',
      image: images.churn,
      rating: 'ML Project',
      tags: ['Machine Learning', 'Classification', 'Python', 'Analytics'],
      summary:
        'Built churn prediction workflows to identify customer retention risk using supervised machine learning.',
      details: [
        'Explored feature engineering and classification models for churn prediction.',
        'Used model outputs to reason about customer retention and business risk.',
      ],
    },
    {
      id: 'smart-rodent-trap',
      title: 'Smart Rodent Trap',
      subtitle: 'Arduino-based pest control prototype',
      image: images.rodent,
      rating: 'IoT Project',
      tags: ['Arduino', 'IoT', 'Sensors', 'Embedded Systems'],
      summary:
        'Built an Arduino-based smart pest-control prototype using sensor-triggered detection and control logic.',
      details: [
        'Designed sensor-based trigger logic for an embedded hardware prototype.',
        'Connected electronics, control flow, and practical automation for pest-control use cases.',
      ],
    },
    {
      id: 'automated-light-sensor',
      title: 'Automated Light Sensor Circuit',
      subtitle: 'Electronics automation project',
      image: images.lightSensor,
      rating: 'Hardware',
      tags: ['Electronics', 'Sensors', 'Circuit Design', 'Automation'],
      summary:
        'Designed an automated light-sensor circuit for environment-aware switching and basic hardware automation.',
      details: [
        'Built a sensor-driven circuit for light-based response behavior.',
        'Focused on practical electronics fundamentals and automation logic.',
      ],
    },
    {
      id: 'mini-mindspark',
      title: 'Mini Mindspark',
      subtitle: 'Interactive learning application',
      image: images.midspark,
      tags: ['Education', 'UI', 'Interactive Learning'],
      summary:
        'Interactive learning application designed to make educational content more engaging and accessible.',
      details: [
        'Designed an interactive learning experience for accessible education content.',
        'Focused on usability and learner engagement.',
      ],
    },
  ],
  experience: [
    {
      id: 'extuitive',
      title: 'Machine Learning Engineer II, Founding Team',
      subtitle: 'Extuitive / Flagship Pioneering, Boston, MA',
      period: 'Jun 2025 - Jun 2026',
      rating: 'Primary Role',
      tags: ['LangGraph', 'TypeScript', 'Next.js', 'React', 'Node.js', 'Supabase', 'Postgres', 'Inngest', 'AWS Lambda', 'Stripe', 'Anrok', 'Meta API', 'Shopify', 'HubSpot', 'Sentry', 'PostHog'],
      summary:
        'Built production AI and SaaS systems across LangGraph conversational workflows, ad-generation-to-publishing pipelines, AI editing, model scoring infrastructure, integrations, billing, onboarding, RBAC, background jobs, analytics, and observability.',
      details: [
        'Contributed to the company core conversational product on LangGraph, including checkpointing, state management, and multi-turn flows for ad creation, product microsegmentation, competitor analysis, and live market/social-trend insights.',
        'Owned the end-to-end ad-generation-to-publishing pipeline after the product pivot, including AI image generation, an AI-powered editor with edit-variant history, and direct publishing into Meta campaigns and ad sets.',
        'Built API infrastructure that productionized the research team ad-scoring model, triggering scoring on each generation/edit and delivering real-time scores to the frontend.',
        'Delivered full-stack platform foundations for a multi-tenant AI SaaS product, shipping 10+ production workflows across 4 core surfaces.',
        'Owned 5+ third-party integrations across Shopify, Meta Marketing API, HubSpot, Stripe, and Anrok.',
        'Reduced recurring production incidents by around 99% across key product surfaces through validation, Sentry/PostHog observability, unit testing, and workflow-level debugging.',
      ],
    },
    {
      id: 'bu-bmc',
      title: 'Research Scientist',
      subtitle: 'Boston University / Boston Medical Center, Boston, MA',
      period: 'Sep 2024 - Jun 2025',
      rating: 'Healthcare AI',
      tags: ['PyTorch', 'CUDA', 'Transformers', 'LSTMs', 'EEG', 'Clinical AI', 'Time Series', 'Knowledge Graphs', 'RAG', 'PubMed', 'Optuna', 'HyperOpt'],
      summary:
        'Led clinical AI research across EEG-based cerebral edema prediction, meal-informed glucose modeling, and knowledge-graph-enhanced LLM retrieval under HIPAA-aware workflows.',
      details: [
        'Built Transformer/LSTM pipelines over 18 bipolar EEG channels with controlled 30-fold experiments and probability-based AUC reporting, reaching approximately 0.80 AUC at shorter prediction horizons.',
        'Developed biomedical knowledge-graph and retrieval workflows using PubMed data, integrating literature-derived entities/subgraphs into LLM context for more grounded clinical QA and analysis.',
        'Optimized GPU training on BU SCC clusters using PyTorch/CUDA, mixed precision, and Optuna/HyperOpt hyperparameter tuning.',
        'Mentored 7 graduate researchers across clinical ML, data processing, model evaluation, and research workflows.',
      ],
    },
    {
      id: 'bespoke-care',
      title: 'Lead AI Engineer',
      subtitle: 'BeSpoke Care Inc., My Phoenyx, Boston, MA',
      period: 'Jun 2024 - Feb 2025',
      rating: 'Product AI',
      tags: ['My Phoenyx', 'AutoGen', 'Azure OpenAI', 'FastAPI', 'WebSockets', 'Gemini', 'GPT', 'AWS Polly', 'Dialogflow CX', 'Ludwig', 'AWS', 'Raspberry Pi', 'ESP32'],
      summary:
        'Built multi-agent LLM systems, multimodal smart-device AI features, and backend workflows for My Phoenyx, an AI-powered bilingual learning companion for children.',
      details: [
        'Engineered multi-agent LLM architecture using AutoGen, Azure OpenAI, FastAPI, WebSockets, and prompt/tool design, leading a 3-person team and increasing AI workflow throughput by 25%.',
        'Built deployment and review workflows for LLM applications, including API orchestration, code-review practices, and CI/CD support for iterative agent development.',
        'Built multimodal smart-device AI features for voice interaction, stop-and-listen behavior, age-centric media support, and interactive storytelling using Gemini, GPT, AWS Polly, Dialogflow CX, and Ludwig.',
        'Supported dynamic content delivery across Raspberry Pi/ESP32 device workflows using AWS EC2/Lambda patterns and multithreaded backend components for a 100-device target environment.',
      ],
    },
    {
      id: 'time-machine-learning',
      title: 'AI Engineer',
      subtitle: 'Time Machine Learning Inc.',
      period: 'Mar 2024 - Jun 2024',
      tags: ['RAG', 'Vector Search', 'Mistral', 'Azure MLOps', 'Python', 'SaaS'],
      summary:
        'Designed RAG-based SaaS onboarding architecture with vector search, Mistral, and Azure MLOps.',
      details: [
        'Built LLM-backed onboarding architecture using retrieval workflows and vector search.',
        'Worked with Mistral, Azure MLOps, and SaaS product architecture.',
        'Improved onboarding scalability by 35%.',
      ],
    },
    {
      id: 'igs-nrel',
      title: 'Data Science Fellow',
      subtitle: 'Institute for Global Sustainability / NREL, Boston, MA',
      period: 'May 2023 - Jul 2023',
      tags: ['Python', 'scikit-learn', 'spaCy', 'Plotly', 'Data Science', 'Policy Analytics'],
      summary:
        'Analyzed energy and policy datasets using Python, machine learning, NLP, and visualization workflows.',
      details: [
        'Analyzed RECS, Justice40, and LEAD datasets.',
        'Used Python, scikit-learn, spaCy, regression/classification, and visualization workflows.',
        'Built Plotly dashboards for energy-policy stakeholders.',
      ],
    },
    {
      id: 'bu-teaching-assistant',
      title: 'Teaching Assistant',
      subtitle: 'Boston University, Boston, MA',
      period: 'Jan 2023 - Dec 2023',
      tags: ['Teaching', 'Mentorship', 'AI', 'ML', 'Python', 'TensorFlow', 'NLP'],
      summary:
        'Supported AI and ML coursework and BU Spark! projects through labs, office hours, grading, and debugging support.',
      details: [
        'Led 30+ AI and ML labs for 200+ students.',
        'Supported 10+ BU Spark! NLP/ML projects.',
        'Helped students work with TensorFlow, Keras, Gensim, TF-IDF, Word2Vec, and TextBlob.',
      ],
    },
    {
      id: 'ibm',
      title: 'SDE Intern',
      subtitle: 'IBM, Pune, India',
      period: 'Jan 2022 - Jul 2022',
      tags: ['Java', 'Quarkus', 'OpenJDK', 'Microservices', 'Backend Engineering'],
      summary:
        'Worked on enterprise software engineering and backend service optimization.',
      details: [
        'Reengineered a Java microservice using Quarkus and OpenJDK 11.',
        'Reduced resource usage by 50%.',
        'Improved overall efficiency by 13%.',
      ],
    },
    {
      id: 'tech-mahindra',
      title: 'NLP Research Intern',
      subtitle: 'Tech Mahindra, Pune, India',
      period: 'Oct 2020 - Jan 2021',
      tags: ['NLP', 'Python', 'BeautifulSoup', 'NLTK', 'Multilingual AI'],
      summary:
        'Built a Sanskrit voice-bot pipeline and evaluated multilingual NLP workflows.',
      details: [
        'Built NLP pipelines using web scraping, BeautifulSoup, NLTK, Python DB connectors, and backend development.',
        'Evaluated 11+ algorithms across multilingual NLP workflows.',
        'Gained early experience translating applied AI ideas into working systems.',
      ],
    },
  ],
  research: [
    {
      id: 'glycemic-response-modeling',
      title: 'Predicting Glycemic Responses to Dietary Intake Among Non-diabetic Adults',
      subtitle: 'Circulation, 2026',
      tags: ['Healthcare AI', 'Glucose Modeling'],
      summary:
        'Evaluation of modeling approaches for predicting glycemic response patterns in non-diabetic adults.',
      details: ['Research publication focused on applied modeling for dietary intake and glycemic response prediction.'],
      link: 'https://doi.org/10.1161/cir.153.suppl_1.23',
      linkLabel: 'Read publication',
    },
    {
      id: 'cerebral-edema-eeg',
      title: 'Automated Cerebral Edema Detection using EEG in Post-Cardiac Arrest Patients',
      subtitle: 'Research Square, 2026',
      tags: ['EEG', 'Clinical AI', 'Time Series'],
      summary:
        'Clinical AI work on EEG-based cerebral edema detection in post-cardiac arrest patients.',
      details: ['Preprint focused on EEG modeling and automated detection workflows for clinical time-series data.'],
      link: 'https://doi.org/10.21203/rs.3.rs-8532128/v1',
      linkLabel: 'Read publication',
    },
    {
      id: 'iss-geolocation-paper',
      title: 'Geolocating Earth Imagery from ISS',
      subtitle: 'arXiv, 2025',
      tags: ['Computer Vision', 'Geospatial AI'],
      summary:
        'Machine learning for astronaut photography mapping using computer vision and geospatial reasoning.',
      details: ['Research paper on geolocating astronaut imagery captured from the International Space Station.'],
      link: 'https://arxiv.org/abs/2504.21194',
      linkLabel: 'Read publication',
    },
    {
      id: 'style-transfer-paper',
      title: 'A Comparative Study of Neural Style Transfer Models',
      subtitle: 'ACM ICIMMI, 2023',
      tags: ['Style Transfer', 'Computer Vision'],
      summary:
        'Comparative research on neural style transfer approaches and visual output behavior.',
      details: ['Published in ACM ICIMMI proceedings.'],
      link: 'https://doi.org/10.1145/3647444.3652461',
      linkLabel: 'Read publication',
    },
    {
      id: 'sanskrit-voice-bot',
      title: 'NLP-Based AI-Powered Sanskrit Voice Bot',
      subtitle: 'Wiley, 2023',
      tags: ['NLP', 'Voice AI'],
      summary:
        'Voice-bot research focused on Sanskrit language interaction using NLP workflows.',
      details: ['Published in AI Applications and Reconfigurable Architectures.'],
      link: 'https://doi.org/10.1002/9781119857891.ch5',
      linkLabel: 'Read publication',
    },
    {
      id: 'drone-detection-paper',
      title: 'Drone Detection using YOLO and SSD',
      subtitle: 'IEEE IConSIP, 2022',
      tags: ['YOLO', 'SSD', 'Object Detection'],
      summary:
        'Comparative study of YOLO and SSD methods for drone detection.',
      details: ['Published through IEEE IConSIP.'],
      link: 'https://doi.org/10.1109/ICoNSIP49665.2022.10007489',
      linkLabel: 'Read publication',
    },
    {
      id: 'virtual-voice-assistant',
      title: 'Virtual Voice Assistant for Smart Devices',
      subtitle: 'ECS Transactions, IOP, 2022',
      tags: ['Voice AI', 'Smart Devices'],
      summary:
        'Research on virtual voice assistant systems for smart-device interactions.',
      details: ['Published in ECS Transactions through IOP.'],
      link: 'https://doi.org/10.1149/10701.4315ecst',
      linkLabel: 'Read publication',
    },
  ],
  skills: [
    {
      id: 'llm-agentic-systems',
      title: 'LLM and Agentic Systems',
      subtitle: 'Production model workflows',
      tags: ['LangGraph', 'LangChain', 'AutoGen', 'RAG', 'Multi-Agent Systems', 'ReAct', 'Tool Calling', 'Prompt/Tool Design', 'Guardrails', 'Human-in-the-Loop Review', 'LLM Evaluation', 'GPT', 'Gemini', 'Mistral', 'Azure OpenAI'],
      summary:
        'LLM workflows for product features, agent behavior, retrieval, evaluation, and human review.',
      details: ['LangGraph, LangChain, AutoGen, RAG, Multi-Agent Systems, ReAct, Tool Calling, Prompt/Tool Design, Guardrails, Human-in-the-Loop Review, LLM Evaluation, GPT, Gemini, Mistral, Azure OpenAI.'],
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      subtitle: 'Modeling, evaluation, and applied research',
      tags: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face Transformers', 'CUDA', 'NLP', 'Computer Vision', 'Time Series', 'Vector Search', 'Knowledge Graphs', 'Model Evaluation', 'Feature Engineering'],
      summary:
        'Applied machine learning across NLP, computer vision, time-series modeling, clinical AI, and evaluation.',
      details: ['PyTorch, TensorFlow, Keras, Hugging Face Transformers, CUDA, NLP, Computer Vision, Time Series, Vector Search, Knowledge Graphs, Model Evaluation, Feature Engineering.'],
    },
    {
      id: 'engineering',
      title: 'Engineering',
      subtitle: 'Full-stack product and platform work',
      tags: ['Python', 'TypeScript', 'SQL', 'FastAPI', 'Node.js', 'Next.js', 'React', 'REST APIs', 'WebSockets', 'OAuth 2.0', 'RBAC', 'Multi-Tenant SaaS', 'Distributed Systems'],
      summary:
        'Frontend, backend, API, auth, and multi-tenant product engineering for AI systems.',
      details: ['Python, TypeScript, SQL, FastAPI, Node.js, Next.js, React, REST APIs, WebSockets, OAuth 2.0, RBAC, Multi-Tenant SaaS, Distributed Systems.'],
    },
    {
      id: 'data-infrastructure',
      title: 'Data and Infrastructure',
      subtitle: 'Storage, retrieval, cloud, and deployment',
      tags: ['Postgres', 'Supabase', 'FAISS', 'ChromaDB', 'Docker', 'AWS', 'Azure', 'GCP', 'Vercel', 'AWS Lambda', 'Inngest'],
      summary:
        'Data infrastructure, vector stores, cloud services, and deployment workflows for production AI.',
      details: ['Postgres, Supabase, FAISS, ChromaDB, Docker, AWS, Azure, GCP, Vercel, AWS Lambda, Inngest.'],
    },
    {
      id: 'product-reliability',
      title: 'Product Reliability',
      subtitle: 'Observability and workflow hardening',
      tags: ['Sentry', 'PostHog', 'CI/CD', 'GitHub Actions', 'MLOps', 'Background Jobs', 'Retry-Safe Ingestion', 'Observability', 'Analytics', 'Testing'],
      summary:
        'Reliability practices for model-powered product surfaces, background jobs, and production workflows.',
      details: ['Sentry, PostHog, CI/CD, GitHub Actions, MLOps, Background Jobs, Retry-Safe Ingestion, Observability, Analytics, Testing.'],
    },
    {
      id: 'integrations',
      title: 'Integrations',
      subtitle: 'Product and business systems',
      tags: ['Meta Marketing API', 'Shopify', 'HubSpot', 'Stripe', 'Anrok', 'SendGrid'],
      summary:
        'Third-party product integrations across marketing, commerce, CRM, payments, tax, and email.',
      details: ['Meta Marketing API, Shopify, HubSpot, Stripe, Anrok, SendGrid.'],
    },
  ],
  education: [
    {
      id: 'bu-ms-ai',
      title: 'M.S. Artificial Intelligence',
      subtitle: 'Boston University, Boston, MA',
      period: 'GPA 3.84 / 4.00',
      tags: ['AI', 'ML', 'NLP', 'Computer Vision'],
      summary:
        'Graduate study focused on artificial intelligence, machine learning, NLP, computer vision, and applied data science.',
      details: ['Boston University, M.S. Artificial Intelligence, GPA 3.84 / 4.00.'],
    },
    {
      id: 'mitwpu-btech',
      title: 'B.Tech. Electronics and Communication Engineering, AI Minor',
      subtitle: 'MIT World Peace University',
      period: 'CGPA 9.79 / 10, Bronze Medalist',
      tags: ['ECE', 'AI Minor', 'Bronze Medalist'],
      summary:
        'Engineering foundation across electronics, signal processing, embedded systems, machine learning, and AI.',
      details: ['MIT World Peace University, CGPA 9.79 / 10, Bronze Medalist.'],
    },
  ],
  metrics: [
    { value: '10+', label: 'Production workflows shipped' },
    { value: '4', label: 'Core product surfaces owned' },
    { value: '5+', label: 'Third-party integrations owned' },
    { value: '~99%', label: 'Reduction in recurring production incidents across key surfaces' },
    { value: '7', label: 'Peer-reviewed and preprint publications' },
    { value: '200+', label: 'Students supported as a BU Teaching Assistant' },
  ],
};

export const contactLinks = [
  { label: 'Email', href: 'mailto:vedikas3012@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vedika-srivastava/' },
  { label: 'GitHub', href: 'https://github.com/vedikaSrivastava' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=cPLpZOYAAAAJ&hl=en' },
  { label: 'Medium', href: 'https://medium.com/@vedikas3012' },
];
