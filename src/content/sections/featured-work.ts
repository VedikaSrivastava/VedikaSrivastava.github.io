import type { ContentItem } from '../../types/content.ts';

export const featuredWork: ContentItem[] = [
  {
    id: 'production-ai-creative-workflows',
    title: 'Production AI Creative Workflows',
    subtitle: 'Multi-tenant SaaS, creative AI, publishing workflows',
    rating: 'Production System',
    tags: ['LangGraph', 'TypeScript', 'Next.js', 'Supabase', 'Inngest'],
    summary:
      'The core of my work at Extuitive: LangGraph chatbots that help marketers create ads, plus the editing and publishing pipeline that turns AI output into live Meta campaigns.',
    details: [
      'Built stateful multi-turn flows on LangGraph—checkpointing, state management, and conversation logic that survived real user sessions, not just happy-path demos.',
      'Wired in competitor analysis, product microsegmentation, and live market/social trend data so ad creation felt informed, not generic.',
      'After a product pivot, owned the path from ad generation through AI image creation, variant editing, and one-click publish into Meta campaigns and ad sets.',
      'Shipped human-in-the-loop review so marketers could approve, tweak, and track edit history before anything went live.',
      'Cared as much about draft validation and edge cases as about the model calls themselves.',
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
      'Turned a research-team ad-scoring model into product infrastructure—scores that update in real time as users generate and edit ads.',
    details: [
      'Built the API layer that sits between the research model and the frontend, with typed contracts so scores were predictable and debuggable.',
      'Triggered scoring on every generation and edit event, not as a batch job users had to wait on.',
      'Used Node.js and AWS Lambda for the orchestration; the frontend got scores without knowing (or caring) about the model internals.',
      'This was the unglamorous but essential work: making ML output feel like a native product feature.',
    ],
  },
  {
    id: 'platform-integrations-reliability',
    title: 'Platform Integrations and Reliability',
    subtitle: 'Integrations, RBAC, billing, analytics, observability',
    rating: 'Platform',
    tags: ['Meta API', 'Shopify', 'HubSpot', 'Stripe', 'Anrok', 'RBAC', 'Sentry', 'PostHog'],
    summary:
      'The platform layer underneath the AI features—integrations, billing, auth, background jobs, and the observability that kept incidents from becoming rituals.',
    details: [
      'Owned 5+ third-party integrations: Meta Marketing API, Shopify, HubSpot, Stripe, and Anrok—each with its own auth quirks and failure modes.',
      'Built onboarding, workspace RBAC, and multi-tenant data isolation so the product could actually sell to teams.',
      'Shipped 10+ production workflows across 4 core surfaces using Node.js, Inngest, and AWS Lambda.',
      'Set up Sentry and PostHog so we could see what broke before users emailed us.',
      'Cut recurring production incidents by ~99% through validation, unit tests, and actually reading the error logs.',
    ],
  },
  {
    id: 'eeg-cerebral-edema',
    title: 'EEG Cerebral Edema Prediction',
    subtitle: 'Clinical time-series modeling with EEG signals',
    rating: 'Healthcare AI',
    tags: ['PyTorch', 'Transformers', 'EEG', 'Clinical AI', 'Time Series', 'CUDA'],
    summary:
      'Clinical time-series ML on EEG signals—predicting cerebral edema in post-cardiac-arrest patients, with the rigor HIPAA-aware hospital research demands.',
    details: [
      'Built Transformer and LSTM pipelines over 18 bipolar EEG channels; ran controlled 30-fold experiments with probability-based AUC reporting (~0.80 at shorter horizons).',
      'Engineered features from entropy, frequency bands, alpha/delta ratios, spike frequency, and burst suppression—clinical signals, not just raw waveforms.',
      'Trained on BU SCC GPU clusters with PyTorch/CUDA, mixed precision, and Optuna/HyperOpt tuning.',
      'Worked alongside biostatisticians and clinicians; learned that a good model paper and a deployable clinical tool are different problems.',
    ],
  },
  {
    id: 'my-phoenyx-conversational-ai',
    title: 'My Phoenyx Conversational AI',
    subtitle: 'Bilingual learning companion for children',
    rating: 'Multi-Agent AI',
    tags: ['AutoGen', 'Azure OpenAI', 'FastAPI', 'WebSockets', 'Gemini', 'GPT', 'AWS Polly'],
    summary:
      'My Phoenyx—a bilingual AI learning companion for kids. Multi-agent LLMs, voice interaction, and the backend to run it on actual hardware.',
    details: [
      'Designed multi-agent architecture with AutoGen and Azure OpenAI; led a 3-person team and bumped AI workflow throughput by 25%.',
      "Built interactive storytelling with GPT, Gemini, AWS Polly, and Dialogflow CX—voice that could stop, listen, and adapt to a child's age.",
      'Deployed to Raspberry Pi/ESP32 devices via AWS EC2/Lambda, targeting 100+ smart devices with multithreaded backend delivery.',
      'Set up CI/CD and code review practices for LLM apps—because agent code needs the same discipline as any other production system.',
    ],
    link: 'https://www.myphoenyx.com',
    linkLabel: 'Open product',
  },
];
