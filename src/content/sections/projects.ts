import type { ContentItem } from '../../types/content.ts';
import { contentImages } from '../../images/index.ts';
import { legacyProjects } from './legacy-projects.ts';

const featuredProjects: ContentItem[] = [
  {
    id: 'rxgap',
    title: 'RxGap',
    subtitle: 'Pharmacy closure impact explorer',
    image: contentImages.rxgap,
    imageAlt:
      'RxGap map UI showing H3 demand cells and a selected pharmacy closure scenario in Greater Boston.',
    rating: 'Geospatial Product',
    tags: ['Geospatial', 'Overture Maps', 'H3', 'React', 'Python', 'DuckDB'],
    summary:
      'Interactive geospatial tool modeling how pharmacy closures affect walking access for no-vehicle households across Greater Boston.',
    proof: 'Live at rxgap.vercel.app',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Permanent pharmacy closures can leave no-vehicle households without a reasonable walk to a licensed storefront. Planners and residents need a clearer picture than a list of remaining pins.',
      },
      {
        label: 'Approach',
        body: 'Combined Overture Maps transportation, buildings, and places with ACS no-vehicle household data, H3 aggregation, pedestrian-network routing, and Massachusetts licensed pharmacy records.',
      },
      {
        label: 'What I Built',
        body: 'Built an end-to-end pipeline and React app where a user selects a walk-in pharmacy, sets a max walking threshold, simulates permanent closure, and sees which households lose access and how much farther the next licensed pharmacy becomes.',
      },
      {
        label: 'Result',
        body: 'Shipped a deployed public product at rxgap.vercel.app covering a 22-municipality Greater Boston study area.',
      },
    ],
    link: 'https://rxgap.vercel.app/',
    linkLabel: 'Live demo',
    secondaryLink: 'https://github.com/VedikaSrivastava/rxgap',
    secondaryLinkLabel: 'View on GitHub',
  },
  {
    id: 'slack-qa-agent',
    title: 'Slack QA Agent',
    subtitle: 'Grounded multi-turn Slack agent',
    image: contentImages.slackQaAgent,
    imageAlt:
      'Slack QA Agent product card showing grounded LangGraph retrieval flow, progress streaming, multi-turn memory, and native stop.',
    rating: 'Agent Infrastructure',
    tags: ['LangGraph', 'Slack', 'Retrieval', 'Inngest', 'PostgreSQL', 'Docker'],
    summary:
      'Grounded Slack agent with multi-turn retrieval, streaming progress, cancellation, evaluation, and production-style orchestration.',
    proof: 'Offline evaluation harness included',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Slack Q&A bots often answer without evidence, lose thread context, or lack the operational controls needed for reliable multi-turn use.',
      },
      {
        label: 'Approach',
        body: 'Designed the agent around grounded retrieval, bounded LangGraph execution, durable turn routing with Inngest, and Slack-native progress plus cooperative stop handling.',
      },
      {
        label: 'What I Built',
        body: 'Built a Dockerized stack with Postgres, read-only knowledge-base retrieval, source-aware answers, thread follow-ups, abstention when evidence is thin, optional Langfuse tracing, and a repeatable evaluation harness.',
      },
      {
        label: 'Result',
        body: 'A production-style agent path that favors measurable behavior over chatbot demos, including offline benchmarks and documented guarantees versus best-effort behavior.',
      },
    ],
    link: 'https://github.com/VedikaSrivastava/slack-qa-agent',
    linkLabel: 'View on GitHub',
    secondaryLink:
      'https://drive.google.com/file/d/1rVp5-6ADHC9LO_stpBdYzfSEDQwUxOn3/view?usp=sharing',
    secondaryLinkLabel: 'Watch demo',
  },
  {
    id: 'voice-agent-eval',
    title: 'Voice Agent Eval',
    subtitle: 'Post-call voice agent evaluation toolkit',
    image: contentImages.voiceAgentEval,
    imageAlt:
      'Voice Agent Eval scorecard dashboard with overall score, response-quality metrics, conversation timeline, and pip install command.',
    rating: 'Evaluation Toolkit',
    tags: ['Python', 'LLM Evaluation', 'Audio Analysis', 'OpenAI', 'Streamlit', 'PyPI'],
    summary:
      'Open-source toolkit for evaluating voice agents across response quality, latency, turn-taking, factuality, and voice delivery.',
    proof: 'Available on PyPI · pip install voice-agent-eval',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'A transcript can look fine while the call feels broken, and smooth audio can hide weak answers. Voice-agent quality needs both deterministic interaction metrics and structured response review.',
      },
      {
        label: 'Approach',
        body: 'Separated audio and text signals in one report: timing, interruptions, and voice-delivery features from the recording, plus LLM-based scoring of task handling, relevance, context retention, and factual coverage.',
      },
      {
        label: 'What I Built',
        body: 'Shipped an installable Python package, CLI, and Streamlit app with a typed report pipeline, speaker-aware evaluation, and CI validation around the audio and packaging path.',
      },
      {
        label: 'Result',
        body: 'Published as voice-agent-eval on PyPI so teams can evaluate recorded customer/agent calls from code, the command line, or a local app.',
      },
    ],
    link: 'https://pypi.org/project/voice-agent-eval/',
    linkLabel: 'View on PyPI',
    secondaryLink: 'https://github.com/VedikaSrivastava/voice-agent-eval',
    secondaryLinkLabel: 'View on GitHub',
  },
  {
    id: 'iss-earth-imagery',
    title: 'ISS Earth Imagery Geolocation',
    subtitle: 'Geospatial computer vision for astronaut imagery',
    image: contentImages.issGeolocate,
    imageAlt:
      'ISS geolocation match showing a Cape Cod query image, best-matched map tile, and broader area of interest.',
    rating: 'Multimodal AI',
    tags: ['VGG-16', 'ImageNet', 'SIFT', 'GPT-4 Vision', 'Docker'],
    summary:
      'Dockerized geotagging system combining visual features, classical matching, and multimodal reasoning.',
    proof: '75%+ precise; 90%+ rough-location accuracy',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Astronaut photography from the ISS often has no location metadata, while cloud cover, unusual angles, and varied scales make matching difficult.',
      },
      {
        label: 'Approach',
        body: 'Combined VGG-16/ImageNet features and SIFT matching with GPT-4 Vision for cases where classical computer vision alone fell short.',
      },
      {
        label: 'What I Built',
        body: 'Built a Dockerized geotagging pipeline with mapping integrations for reproducible processing and verification.',
      },
      {
        label: 'Result',
        body: 'Reached 75%+ precise geolocation and 90%+ rough-location accuracy. The work was published on arXiv in 2025.',
      },
    ],
    link: 'https://arxiv.org/abs/2504.21194',
    linkLabel: 'Read the paper',
    secondaryLink: 'https://github.com/VedikaSrivastava/ml-terc-image-geolocation',
    secondaryLinkLabel: 'View on GitHub',
  },
  {
    id: 'stock-investment-advisor',
    title: 'Conversational Stock Investment Advisor',
    subtitle: 'NLP assistant for investment exploration',
    image: contentImages.advisorbot,
    imageAlt: 'Conversational finance assistant interface.',
    rating: 'Conversational AI',
    tags: [
      'Python',
      'Rasa',
      'NER',
      'BERT',
      'DialoGPT',
      'Sentiment Analysis',
      'Alpaca',
      'Alpha Vantage',
      'AWS',
    ],
    summary:
      'AWS-deployed NLP assistant combining intent, entities, sentiment, and live market-data APIs.',
    proof: '92% query accuracy',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Explore whether a conversational interface could make dense market data easier to navigate as an educational prototype, not financial advice.',
      },
      {
        label: 'Approach',
        body: 'Used Rasa, NER, BERT, DialoGPT, and sentiment analysis to interpret questions and compose responses.',
      },
      {
        label: 'What I Built',
        body: 'Built and deployed the assistant on AWS with Alpaca and Alpha Vantage integrations for market data.',
      },
      {
        label: 'Result',
        body: 'Reached 92% query accuracy.',
      },
    ],
  },
  {
    id: 'text2live-3d',
    title: '3D Text2Live',
    subtitle: 'Text-guided localized 3D editing',
    image: contentImages.textToLive,
    imageAlt: '3D Text2LIVE result showing a ship on fire from multiple camera angles.',
    rating: '3D Vision',
    tags: ['NeRF', 'CLIP', 'Text-Guided Editing', '3D Rendering'],
    summary:
      'Text-guided 3D editing pipeline for localized semantic edits and renderings from natural-language prompts.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Translate natural-language edits into localized changes without disturbing the rest of a 3D scene.',
      },
      {
        label: 'Approach',
        body: 'Used NeRF and CLIP to connect prompt semantics to volumetric scene representations.',
      },
      {
        label: 'What I Built',
        body: 'Built a pipeline that generated localized semantic edits and 3D renderings from natural-language prompts.',
      },
    ],
    link: 'https://github.com/animikhaich/3D-Text2LIVE',
    linkLabel: 'View on GitHub',
  },
  {
    id: 'biased-prosecution',
    title: 'Biased Prosecution Analysis',
    subtitle: 'Public-interest data analysis with CPCS',
    image: contentImages.biasedProsecution,
    imageAlt: 'Data visualization for public legal records.',
    rating: 'Public Interest',
    tags: ['Data Analysis', 'Visualization', 'Chi-Square Testing', 'Policy Analytics'],
    summary:
      'Analysis of DAMION case data with the Committee for Public Counsel Services to study disparities and judicial bias.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Study patterns of racial disparity and judicial bias in complex public legal records.',
      },
      {
        label: 'Approach',
        body: 'Cleaned and analyzed DAMION case data using visualization and chi-square testing.',
      },
      {
        label: 'What I Built',
        body: 'Produced an interpretable analysis with the Committee for Public Counsel Services to surface patterns for public-interest review.',
      },
    ],
  },
];

export const projects: ContentItem[] = [...featuredProjects, ...legacyProjects];
