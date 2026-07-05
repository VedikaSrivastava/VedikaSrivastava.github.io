import type { ContentItem } from '../../types/content.ts';
import { contentImages } from '../../images/index.ts';

export const research: ContentItem[] = [
  {
    id: 'glycemic-response-modeling',
    title: 'Predicting Glycemic Responses to Dietary Intake Among Non-diabetic Adults',
    subtitle: 'Circulation, 2026',
    image: contentImages.ahaLogo,
    imageStyle: 'logo',
    tags: ['Healthcare AI', 'Glucose Modeling'],
    summary:
      'Modeling meal-informed glucose responses in non-diabetic adults using clinical and behavioral signals.',
    details: [],
    sections: [
      {
        label: 'Research question',
        body: 'Can dietary intake be used to predict glycemic response patterns in non-diabetic adults\u2014people whose glucose dynamics are rarely modeled because they aren\u2019t patients yet?',
      },
      {
        label: 'Approach',
        body: 'Link continuous glucose monitoring data with meal intake records to model individual glycemic trends over time.',
      },
      {
        label: 'Methods',
        body: 'CGM time-series modeling that integrates meal composition and timing as inputs, building on the forecasting work from my research scientist role at BU/BMC.',
      },
      {
        label: 'Result',
        body: 'Meal-informed models captured glycemic response patterns in non-diabetic adults, published in Circulation (2026).',
      },
    ],
    link: 'https://doi.org/10.1161/cir.153.suppl_1.23',
    linkLabel: 'Read publication',
  },
  {
    id: 'cerebral-edema-eeg',
    title: 'Automated Cerebral Edema Detection using EEG in Post-Cardiac Arrest Patients',
    subtitle: 'Research Square, 2026',
    image: contentImages.researchSquareLogo,
    imageStyle: 'logo',
    tags: ['EEG', 'Clinical AI', 'Time Series'],
    summary:
      'EEG-based cerebral edema prediction in post-cardiac-arrest patients using clinical time-series machine learning.',
    details: [],
    sections: [
      {
        label: 'Research question',
        body: 'Can continuous EEG monitoring detect cerebral edema early in post-cardiac-arrest patients\u2014a setting where false negatives carry real clinical consequences?',
      },
      {
        label: 'Approach',
        body: 'Treat multi-channel EEG as a clinical time-series problem and evaluate whether deep sequence models can flag edema at clinically useful horizons.',
      },
      {
        label: 'Methods',
        body: 'Transformer and LSTM pipelines over 18 bipolar EEG channels with rigorous cross-validation (30-fold experiments) on held-out clinical data.',
      },
      {
        label: 'Result',
        body: 'Approximately 0.80 AUC at shorter prediction horizons; preprint on Research Square (2026). The project also taught me that clinical AI is as much about data governance and clinician trust as it is about AUC.',
      },
    ],
    link: 'https://doi.org/10.21203/rs.3.rs-8532128/v1',
    linkLabel: 'Read publication',
  },
  {
    id: 'iss-geolocation-paper',
    title: 'Geolocating Earth Imagery from ISS',
    subtitle: 'arXiv, 2025',
    image: contentImages.arxivLogo,
    imageStyle: 'logo',
    tags: ['Computer Vision', 'Geospatial AI'],
    summary:
      'Machine learning for geolocating astronaut photography from the International Space Station.',
    details: [],
    sections: [
      {
        label: 'Research question',
        body: 'How do you geolocate astronaut photographs that have no location metadata, when cloud cover, unusual angles, and varied scales defeat straightforward matching?',
      },
      {
        label: 'Approach',
        body: 'Combine classical feature matching with LLM visual reasoning, letting each cover the other\u2019s blind spots.',
      },
      {
        label: 'Methods',
        body: 'VGG-16/ImageNet features and SIFT matching for landmark-rich images; GPT-4 Vision for interpretation when classical CV falls short; Mapbox and Google Maps integration for verification.',
      },
      {
        label: 'Result',
        body: '75%+ precise geolocation and 90%+ rough-location accuracy for the Windows on Earth program; published on arXiv (2025) with ties to environmental monitoring and global mapping use cases.',
      },
    ],
    link: 'https://arxiv.org/abs/2504.21194',
    linkLabel: 'Read publication',
  },
  {
    id: 'style-transfer-paper',
    title: 'A Comparative Study of Neural Style Transfer Models',
    subtitle: 'ACM ICIMMI, 2023',
    image: contentImages.acmLogo,
    imageStyle: 'logo',
    tags: ['Style Transfer', 'Computer Vision'],
    summary:
      'Comparative evaluation of neural style transfer models across visual quality, speed, and quantitative metrics.',
    details: [],
    sections: [
      {
        label: 'Research question',
        body: 'Across the major neural style transfer families\u2014NST, FST, CBST, and DFR\u2014which approach actually wins on quality versus speed, and what are the honest tradeoffs?',
      },
      {
        label: 'Approach',
        body: 'A head-to-head evaluation combining human judgment with quantitative metrics, rather than showcasing any single model at its best.',
      },
      {
        label: 'Methods',
        body: 'Human evaluation alongside FID, LPIPS, and SSIM across all four architectures on shared inputs.',
      },
      {
        label: 'Result',
        body: 'NST led on artistic fidelity, FST on inference speed, with CBST and DFR showing clear room to grow. Published at ACM ICIMMI 2023 and featured on Kudos.',
      },
    ],
    link: 'https://doi.org/10.1145/3647444.3652461',
    linkLabel: 'Read publication',
  },
  {
    id: 'sanskrit-voice-bot',
    title: 'NLP-Based AI-Powered Sanskrit Voice Bot',
    subtitle: 'Wiley, 2023',
    image: contentImages.wileyLogo,
    imageStyle: 'logo',
    tags: ['NLP', 'Voice AI'],
    summary:
      'NLP-based Sanskrit voice bot designed around language preservation and conversational access.',
    details: [],
    sections: [
      {
        label: 'Research question',
        body: 'Can modern NLP make Sanskrit a practical, conversational interface language rather than a scripture-only relic?',
      },
      {
        label: 'Approach',
        body: 'Build a working voice bot end to end\u2014data collection, preprocessing, and speech interaction\u2014and evaluate which algorithms handle Sanskrit\u2019s structure best.',
      },
      {
        label: 'Methods',
        body: 'Data scraped from 20+ sources, NLTK preprocessing pipelines, and evaluation across SVM, PCA, sequence models, and gradient-descent-based approaches.',
      },
      {
        label: 'Result',
        body: 'A functioning Sanskrit voice bot, published as Chapter 5 in AI Applications and Reconfigurable Architectures (Wiley, 2023).',
      },
    ],
    link: 'https://doi.org/10.1002/9781119857891.ch5',
    linkLabel: 'Read publication',
  },
  {
    id: 'drone-detection-paper',
    title: 'Drone Detection using YOLO and SSD',
    subtitle: 'IEEE IConSIP, 2022',
    image: contentImages.ieeeLogo,
    imageStyle: 'logo',
    tags: ['YOLO', 'SSD', 'Object Detection'],
    summary:
      'YOLO and SSD comparison for drone detection as a portable alternative to expensive sensing systems.',
    details: [],
    sections: [
      {
        label: 'Research question',
        body: 'Can computer vision on commodity GPUs detect drones reliably enough to serve as a portable alternative to expensive, hard-to-scale radar infrastructure?',
      },
      {
        label: 'Approach',
        body: 'Benchmark YOLO and SSD architectures on drone imagery and video under realistic deployment constraints.',
      },
      {
        label: 'Methods',
        body: 'Comparative training and evaluation of YOLOv5 and SSD, optimized for edge hardware rather than benchmark conditions.',
      },
      {
        label: 'Result',
        body: '97% detection success in our evaluation; published at IEEE IConSIP 2022.',
      },
    ],
    link: 'https://doi.org/10.1109/ICoNSIP49665.2022.10007489',
    linkLabel: 'Read publication',
  },
  {
    id: 'virtual-voice-assistant',
    title: 'Virtual Voice Assistant for Smart Devices',
    subtitle: 'ECS Transactions, IOP, 2022',
    image: contentImages.ecsLogo,
    imageStyle: 'logo',
    tags: ['Voice AI', 'Smart Devices'],
    summary:
      'Voice assistant architecture for smart-device interaction, command handling, and response generation.',
    details: [],
    sections: [
      {
        label: 'Research question',
        body: 'What does a voice assistant architecture need to get right for smart-device interaction\u2014and how much of the problem is listening accurately versus responding usefully?',
      },
      {
        label: 'Approach',
        body: 'Design around two core functions: accurate command detection and useful response generation, with custom directives defining the rest of the behavior.',
      },
      {
        label: 'Methods',
        body: 'A modular assistant architecture covering speech capture, command parsing, and response generation for smart-device contexts.',
      },
      {
        label: 'Result',
        body: 'Published in ECS Transactions (IOP, 2022), co-authored during undergrad.',
      },
    ],
    link: 'https://doi.org/10.1149/10701.4315ecst',
    linkLabel: 'Read publication',
  },
];
