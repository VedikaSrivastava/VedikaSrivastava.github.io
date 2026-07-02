import type { ContentItem } from '../../types/content.ts';
import { contentImages } from '../../images/index.ts';

export const research: ContentItem[] = [
  {
    id: 'glycemic-response-modeling',
    title: 'Predicting Glycemic Responses to Dietary Intake Among Non-diabetic Adults',
    subtitle: 'Circulation, 2026',
    image: contentImages.ahaLogo,
    tags: ['Healthcare AI', 'Glucose Modeling'],
    summary:
      'Modeling glycemic responses to meals in non-diabetic adults—the clinical follow-up to my CGM prediction work at BU/BMC.',
    details: [
      'Evaluated modeling approaches linking dietary intake to glucose response patterns.',
      'Connects directly to the meal-informed CGM forecasting I built during my research scientist role.',
      'Circulation, 2026.',
    ],
    link: 'https://doi.org/10.1161/cir.153.suppl_1.23',
    linkLabel: 'Read publication',
  },
  {
    id: 'cerebral-edema-eeg',
    title: 'Automated Cerebral Edema Detection using EEG in Post-Cardiac Arrest Patients',
    subtitle: 'Research Square, 2026',
    image: contentImages.researchSquareLogo,
    tags: ['EEG', 'Clinical AI', 'Time Series'],
    summary:
      'Automated EEG-based cerebral edema detection for post-cardiac-arrest patients—clinical time-series ML where false negatives have real consequences.',
    details: [
      'Transformer/LSTM pipelines over multi-channel EEG with rigorous cross-validation.',
      'Preprint on Research Square, 2026; builds on the BU/BMC research program.',
      'The project that taught me clinical AI is as much about data governance and clinician trust as about AUC.',
    ],
    link: 'https://doi.org/10.21203/rs.3.rs-8532128/v1',
    linkLabel: 'Read publication',
  },
  {
    id: 'iss-geolocation-paper',
    title: 'Geolocating Earth Imagery from ISS',
    subtitle: 'arXiv, 2025',
    image: contentImages.arxivLogo,
    tags: ['Computer Vision', 'Geospatial AI'],
    summary:
      'ML for geolocating astronaut photography from the ISS—VGG-16, SIFT, and GPT-4 Vision for the Windows on Earth program.',
    details: [
      'Combines classical CV feature matching with LLM visual reasoning for geospatial identification.',
      'arXiv, 2025—research tied to environmental monitoring and global mapping use cases.',
    ],
    link: 'https://arxiv.org/abs/2504.21194',
    linkLabel: 'Read publication',
  },
  {
    id: 'style-transfer-paper',
    title: 'A Comparative Study of Neural Style Transfer Models',
    subtitle: 'ACM ICIMMI, 2023',
    image: contentImages.acmLogo,
    tags: ['Style Transfer', 'Computer Vision'],
    summary:
      'Head-to-head comparison of NST, FST, CBST, and DFR style transfer models—speed vs quality, with FID/LPIPS/SSIM to back it up.',
    details: [
      'Human evaluation plus technical metrics; honest tradeoff analysis across four approaches.',
      'ACM ICIMMI 2023; featured on Kudos.',
    ],
    link: 'https://doi.org/10.1145/3647444.3652461',
    linkLabel: 'Read publication',
  },
  {
    id: 'sanskrit-voice-bot',
    title: 'NLP-Based AI-Powered Sanskrit Voice Bot',
    subtitle: 'Wiley, 2023',
    image: contentImages.wileyLogo,
    tags: ['NLP', 'Voice AI'],
    summary:
      'A Sanskrit voice bot—because preserving an ancient language through modern NLP felt worth doing.',
    details: [
      'Explored SVM, PCA, sequence models, and gradient descent for Sanskrit speech interaction.',
      'Goal: make Sanskrit a practical interface language, not just a scripture-only relic.',
      'Wiley, 2023—Chapter 5 in AI Applications and Reconfigurable Architectures.',
    ],
    link: 'https://doi.org/10.1002/9781119857891.ch5',
    linkLabel: 'Read publication',
  },
  {
    id: 'drone-detection-paper',
    title: 'Drone Detection using YOLO and SSD',
    subtitle: 'IEEE IConSIP, 2022',
    image: contentImages.ieeeLogo,
    tags: ['YOLO', 'SSD', 'Object Detection'],
    summary:
      'YOLO vs SSD for drone detection—portable, GPU-friendly CV as an alternative to expensive radar systems.',
    details: [
      'Motivated by real security concerns: cheap drones, hard-to-scale detection infrastructure.',
      '97% detection success in our evaluation; published IEEE IConSIP 2022.',
    ],
    link: 'https://doi.org/10.1109/ICoNSIP49665.2022.10007489',
    linkLabel: 'Read publication',
  },
  {
    id: 'virtual-voice-assistant',
    title: 'Virtual Voice Assistant for Smart Devices',
    subtitle: 'ECS Transactions, IOP, 2022',
    image: contentImages.ecsLogo,
    tags: ['Voice AI', 'Smart Devices'],
    summary:
      'Virtual voice assistant architecture for smart devices—the listening-and-responding problem, before everyone had an Echo.',
    details: [
      'Two core functions: detect commands accurately, respond usefully. Custom directives defined the rest.',
      'Co-authored during undergrad; ECS Transactions (IOP), 2022.',
    ],
    link: 'https://doi.org/10.1149/10701.4315ecst',
    linkLabel: 'Read publication',
  },
];
