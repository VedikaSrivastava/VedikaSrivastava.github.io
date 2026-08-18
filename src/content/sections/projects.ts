import type { ContentItem } from '../../types/content.ts';
import { contentImages } from '../../images/index.ts';
import { legacyProjects } from './legacy-projects.ts';

const featuredProjects: ContentItem[] = [
  {
    id: 'iss-earth-imagery',
    title: 'ISS Earth Imagery Geolocation',
    subtitle: 'Geospatial computer vision for astronaut imagery',
    image: contentImages.issGeolocate,
    imageAlt: 'Earth imagery viewed from orbit.',
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
    imageAlt: 'Colorful three-dimensional scene rendering.',
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
