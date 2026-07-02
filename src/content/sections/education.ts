import type { ContentItem } from '../../types/content.ts';
import { contentImages } from '../../images/index.ts';

export const education: ContentItem[] = [
  {
    id: 'bu-ms-ai',
    title: 'M.S. Artificial Intelligence',
    subtitle: 'Boston University',
    location: 'Boston, MA',
    image: contentImages.buTerrier,
    accent: '#cc0000',
    period: 'GPA 3.84 / 4.00',
    rating: 'Boston University',
    tags: ['AI', 'ML', 'NLP', 'Computer Vision'],
    summary:
      'M.S. in AI at BU—NLP, computer vision, Spark ML, and enough math to know when a model is lying.',
    details: [
      'GPA 3.84/4.00. Coursework: AI, ML, NLP, Image & Video Computing, Computational Tools in Data Science, Spark ML.',
      'The program that turned a hardware/electronics undergrad into someone who thinks in tensors.',
    ],
  },
  {
    id: 'mitwpu-btech',
    title: 'B.Tech. Electronics and Communication Engineering, AI Minor',
    subtitle: 'MIT World Peace University',
    location: 'Pune, India',
    image: contentImages.mitwpuLogo,
    accent: '#5a61c8',
    period: 'CGPA 9.79 / 10, Bronze Medalist',
    rating: 'MIT-WPU',
    tags: ['ECE', 'AI Minor', 'Bronze Medalist'],
    summary:
      'B.Tech in ECE with AI minor—bronze medalist, CGPA 9.79/10, and a foundation in signals, embedded systems, and the physics underneath the models.',
    details: [
      'MIT World Peace University, Pune. Four-year scholarship for academic excellence.',
      'Coursework spanned DSP, microcontrollers, computer vision, NLP, ANNs, and cloud computing.',
      'Also: classical music (Gandharwa exam), fine arts, and cultural team performances—because engineers should have hobbies outside a terminal.',
    ],
  },
];
