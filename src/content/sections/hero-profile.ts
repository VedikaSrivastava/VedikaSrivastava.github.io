import type { ContentItem, HeroCopy } from '../../types/content.ts';

export const heroCopy: HeroCopy = {
  label: 'An Original',
  name: 'Vedika Srivastava',
  role: 'Applied AI & Machine Learning Engineer',
  description:
    'I build production AI systems that have to survive real users, messy data, weird APIs, and operational constraints. My work spans LangGraph agents, RAG, creative generation, real-time ML APIs, multi-tenant SaaS, and clinical AI research.',
  secondaryDescription:
    'I am most interested in the part after the demo: connecting models to products, data, workflows, evaluation, observability, and the edge cases that only appear once people start using what you built.',
  metadata: ['98% Match', 'Builder + Researcher', '7 Papers', 'Production AI'],
  sidebar: [
    {
      label: 'Starring',
      value:
        'LangGraph agents, RAG systems, production ML APIs, clinical AI, full-stack product engineering, and platform integrations',
    },
    {
      label: 'Genres',
      value:
        'Production AI, Agentic Workflows, Healthcare ML, Full-Stack SaaS, Research Engineering',
    },
    {
      label: 'Built with',
      value:
        'Python, TypeScript, PyTorch, LangGraph, FastAPI, Next.js, Postgres, Supabase, AWS, Inngest, Sentry, LangSmith',
    },
    {
      label: 'This engineer is',
      value:
        'curious, systems-minded, visual, product-aware, and stubborn about making things work reliably',
    },
  ],
};

export const heroProfile: ContentItem = {
  id: 'hero-profile',
  title: 'More about Vedika',
  subtitle: 'Applied AI & Machine Learning Engineer',
  rating: 'About',
  tags: [
    'curious about brains',
    'messy systems',
    'language',
    'visual details',
    'crime thrillers',
    'swimming',
    'plants',
    'dogs',
  ],
  summary: 'I am most at home where research, product, and systems engineering overlap.',
  details: [
    'I am most interested in the part after the demo: connecting models to products, APIs, data, people, and the edge cases that only appear in production. My work spans agentic LLM systems, RAG, creative generation, multimodal AI, and clinical ML.',
    'I am also very visual. I sketch, paint, notice tiny interface details, and care about the difference between a system that technically works and one that feels clear and trustworthy to use.',
    'Outside the screen, I swim, read crime thrillers, keep too many plants, and try to befriend every dog I meet.',
  ],
};
