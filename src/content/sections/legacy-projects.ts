import type { ContentItem } from '../../types/content.ts';
import { contentImages } from '../../images/index.ts';

export const legacyProjects: ContentItem[] = [
  {
    id: 'real-time-drone-detection',
    title: 'Real-Time Drone Detection',
    subtitle: 'Resource-constrained object detection',
    image: contentImages.droneSwarm,
    rating: 'Published',
    tags: ['YOLOv5', 'SSD', 'CNN', 'Computer Vision'],
    summary: 'Compared YOLOv5, SSD, and CNN approaches for portable real-time drone detection.',
    proof: '97% detection success',
    details: [],
    sections: [
      {
        label: 'What I Built',
        body: 'Co-led a 5-person team through dataset preparation, training, and evaluation across CNN, YOLOv5, and SSD architectures for resource-constrained hardware.',
      },
      {
        label: 'Result',
        body: 'Reached 97% detection success in the evaluation and published the work at IEEE IConSIP 2022.',
      },
    ],
    link: 'https://doi.org/10.1109/ICoNSIP49665.2022.10007489',
    linkLabel: 'Read the paper',
  },
  {
    id: 'style-transfer-study',
    title: 'Comparative Study of Neural Style Transfer Models',
    subtitle: 'Computer vision research project',
    image: contentImages.styleTransfer,
    rating: 'Published',
    tags: ['NST', 'FST', 'CBST', 'DFR', 'FID', 'LPIPS', 'SSIM'],
    summary: 'Compared four style-transfer families across visual quality, speed, and metrics.',
    details: [],
    sections: [
      {
        label: 'Approach',
        body: 'Evaluated NST, FST, CBST, and DFR through human ratings and FID, LPIPS, and SSIM.',
      },
      {
        label: 'Result',
        body: 'NST led on artistic fidelity and FST on inference speed. Published at ACM ICIMMI 2023.',
      },
    ],
    link: 'https://doi.org/10.1145/3647444.3652461',
    linkLabel: 'Read the paper',
  },
  {
    id: 'neunet-project',
    title: 'Neunet AI Platform',
    subtitle: 'Agentic AI platform exploration',
    image: contentImages.neunetAiPlatform,
    rating: 'Agentic AI',
    tags: ['LLMs', 'Multi-Agent Systems', 'RAG', 'FastAPI', 'FAISS', 'ChromaDB'],
    summary: 'Early work on multi-agent orchestration, retrieval, and backend LLM services.',
    details: [],
    sections: [
      {
        label: 'What I Built',
        body: 'Built agent orchestration and retrieval infrastructure on OpenAI and Azure with Cosmos DB, FAISS, ChromaDB, FastAPI, and CI/CD pipelines.',
      },
      {
        label: 'What I Learned',
        body: 'Reliable agent platforms need measurable retrieval behavior, deployment discipline, and predictable coordination, not only strong prompts.',
      },
    ],
  },
  {
    id: 'zoya-voice-assistant',
    title: 'Zoya Voice Assistant',
    subtitle: 'Smart-device voice interaction',
    image: contentImages.zoya,
    rating: 'Voice AI',
    tags: ['Voice AI', 'NLP', 'Speech', 'Smart Devices'],
    summary: 'Voice assistant for natural-language commands, reminders, and device interaction.',
    details: [],
    sections: [
      {
        label: 'What I Built',
        body: 'Built the speech interaction layer for smart-device commands, reminders, and response generation.',
      },
      {
        label: 'Result',
        body: 'Published as Virtual Voice Assistant for Smart Devices in ECS Transactions in 2022.',
      },
    ],
    link: 'https://doi.org/10.1149/10701.4315ecst',
    linkLabel: 'Read the paper',
  },
  {
    id: 'density-traffic-system',
    title: 'Density-Based Traffic Signal System',
    subtitle: 'Vehicle-density traffic control',
    image: contentImages.trafficLights,
    rating: 'Embedded',
    tags: ['Embedded Systems', 'IR Sensors', 'C8051F340'],
    summary: 'Hardware prototype that adjusted signal timing from real-time lane density.',
    details: [],
    sections: [
      {
        label: 'What I Built',
        body: 'Built a four-junction prototype using IR sensors and a C8051F340 microcontroller to switch signals from live vehicle-density measurements.',
      },
    ],
  },
  {
    id: 'churn-modelling',
    title: 'Churn Modelling',
    subtitle: 'Customer churn prediction',
    image: contentImages.churn,
    rating: 'ML Project',
    tags: ['Classification', 'Python', 'Statistics', 'Analytics'],
    summary: 'Compared classical models and translated churn predictions into retention ideas.',
    details: [],
    sections: [
      {
        label: 'Approach',
        body: 'Used chi-square testing, exploratory analysis, logistic regression, decision trees, and random forests on an 11-feature banking dataset.',
      },
      {
        label: 'Result',
        body: 'Identified useful churn patterns across age, gender, balance, and geography and proposed segment-specific retention strategies.',
      },
    ],
  },
  {
    id: 'smart-rodent-trap',
    title: 'Smart Rodent Trap',
    subtitle: 'Arduino-based humane trap',
    image: contentImages.rodent,
    rating: 'IoT',
    tags: ['Arduino', 'Ultrasonic Sensor', 'Servo', 'PCB'],
    summary: 'Automated humane-trap prototype that detected, closed, and signaled a catch.',
    details: [],
    sections: [
      {
        label: 'What I Built',
        body: 'Built the hardware, control software, and PCB layout using ultrasonic detection, servo actuation, LEDs, and a buzzer.',
      },
    ],
  },
  {
    id: 'automated-light-sensor',
    title: 'Automated Light Sensor Circuit',
    subtitle: 'Electronics automation project',
    image: contentImages.lightSensor,
    rating: 'Hardware',
    tags: ['LDR', '555 Timer', 'Circuit Design'],
    summary: 'Light-aware automation circuit for streetlight and security applications.',
    details: [],
    sections: [
      {
        label: 'What I Built',
        body: 'Designed and built a 555 Timer circuit driven by LDR resistance changes for simple, low-cost light automation.',
      },
    ],
  },
  {
    id: 'mini-mindspark',
    title: 'Mini Mindspark',
    subtitle: 'Interactive learning application',
    image: contentImages.midspark,
    rating: 'Early Build',
    tags: ['Java', 'BlueJ', 'Education', 'UI'],
    summary: 'Java learning app with topic selection and randomized practice sessions.',
    details: [],
    sections: [
      {
        label: 'What I Built',
        body: 'Built the desktop interface, topic navigation, and random question generation for ten-question practice sessions.',
      },
    ],
  },
];
