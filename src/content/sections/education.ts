import type { ContentItem } from '../../types/content.ts';
import { contentImages } from '../../images/index.ts';

export const education: ContentItem[] = [
  {
    id: 'bu-ms-ai',
    title: 'M.S. in Artificial Intelligence',
    subtitle: 'Boston University',
    location: 'Boston, MA',
    image: contentImages.buTerrier,
    imageStyle: 'logo',
    accent: '#cc0000',
    period: 'GPA 3.84 / 4',
    rating: 'Boston University',
    tags: ['Artificial Intelligence', 'GPA 3.84 / 4'],
    summary: 'M.S. in Artificial Intelligence with a GPA of 3.84 / 4.',
    details: ['Boston University, Boston, MA. GPA 3.84 / 4.'],
  },
  {
    id: 'mitwpu-btech',
    title: 'B.Tech. in Electronics and Communication Engineering',
    subtitle: 'MIT World Peace University',
    location: 'Pune, India',
    image: contentImages.mitwpuLogo,
    imageStyle: 'logo',
    accent: '#5a61c8',
    period: 'CGPA 9.79 / 10',
    rating: 'MIT-WPU',
    tags: ['Artificial Intelligence Minor', 'Bronze Medalist'],
    summary: 'Artificial Intelligence Minor, CGPA 9.79 / 10, Bronze Medalist.',
    details: [
      'MIT World Peace University, Pune, India.',
      'B.Tech. in Electronics and Communication Engineering with an Artificial Intelligence Minor. CGPA 9.79 / 10. Bronze Medalist.',
    ],
  },
];
