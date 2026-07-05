import type { ContentItem } from '../../types/content.ts';
import { contentImages } from '../../images/index.ts';

export const projects: ContentItem[] = [
  {
    id: 'iss-earth-imagery',
    title: 'ISS Earth Imagery Geolocation',
    subtitle: 'Geospatial computer vision for astronaut imagery',
    image: contentImages.issGeolocate,
    rating: 'CV Project',
    tags: ['Computer Vision', 'Geospatial AI', 'VGG-16', 'SIFT', 'GPT-4 Vision', 'Docker'],
    summary:
      'Geotagging astronaut photos from the ISS using computer vision, feature matching, and GPT-4 Vision.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Astronaut photography from the ISS often has no location metadata, and cloud cover, odd angles, and varied scales make automated geolocation genuinely difficult. The Windows on Earth program needed a way to place these photos on the map.',
      },
      {
        label: 'Approach',
        body: 'Combine classical computer vision with modern visual reasoning: VGG-16/ImageNet features and SIFT matching handle the cases with clear landmarks, and GPT-4 Vision steps in for interpretation when classical CV falls short.',
      },
      {
        label: 'What I built',
        body: 'A Dockerized pipeline for reproducible batch processing, integrated with Mapbox and Google Maps APIs for verification and display.',
      },
      {
        label: 'Result',
        body: 'Reached 75%+ precise geolocation and 90%+ rough-location accuracy despite partial cloud cover, and the work was published on arXiv in 2025.',
      },
    ],
    link: 'https://arxiv.org/abs/2504.21194',
    linkLabel: 'Read the paper',
  },
  {
    id: 'stock-investment-advisor',
    title: 'Conversational Stock Investment Advisor',
    subtitle: 'Prototype for investment exploration, not financial advice',
    image: contentImages.advisorbot,
    rating: 'NLP Prototype',
    tags: ['NLP', 'Conversational AI', 'Python', 'Rasa', 'BERT', 'DialoGPT', 'AWS'],
    summary:
      'Conversational NLP prototype for exploring stocks through intent detection, entity extraction, sentiment, and market-data APIs.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Market data is dense and jargon-heavy. The experiment: could a conversational interface make exploring stocks approachable\u2014explicitly as an educational prototype, not financial advice?',
      },
      {
        label: 'Approach',
        body: 'Intent detection and entity extraction with Rasa and BERT, response generation with DialoGPT, and sentiment analysis to gauge whether users actually got what they asked for.',
      },
      {
        label: 'What I built',
        body: 'An end-to-end conversational pipeline deployed on AWS, pulling live and historical market data from the Alpaca and Alpha Vantage APIs.',
      },
      {
        label: 'Result',
        body: 'The prototype hit 92% query accuracy, and financial jargon plus market volatility made it a genuinely fun NLP stress test.',
      },
    ],
  },
  {
    id: 'real-time-drone-detection',
    title: 'Real-Time Drone Detection',
    subtitle: 'Resource-constrained object detection',
    image: contentImages.droneSwarm,
    rating: 'Object Detection',
    tags: ['YOLOv5', 'SSD', 'CNN', 'Computer Vision', 'Object Detection'],
    summary:
      'Object detection project comparing YOLOv5, SSD, and CNN approaches for drone detection on constrained hardware.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Drones are cheap and increasingly a security concern, but radar-based detection is expensive and hard to move. Computer vision on commodity GPUs looked like a practical alternative.',
      },
      {
        label: 'Approach',
        body: 'Benchmark YOLOv5, SSD, and a classical CNN across still imagery and video, optimizing for edge-deployment constraints rather than leaderboard numbers.',
      },
      {
        label: 'What I built',
        body: 'Led a 5-person team through dataset preparation, training, and evaluation across the three architectures.',
      },
      {
        label: 'Result',
        body: 'Achieved a 97% detection success rate in our evaluation, published at IEEE IConSIP 2022\u2014my first paper, and still one of the most practically motivated.',
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
    tags: ['Computer Vision', 'Style Transfer', 'Deep Learning'],
    summary:
      'Published comparison of neural style transfer models across visual quality, speed, and evaluation metrics.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Style transfer papers usually showcase a single model at its best. What was missing was an honest side-by-side: which approach actually wins on quality, which on speed, and how do the tradeoffs land?',
      },
      {
        label: 'Approach',
        body: 'Evaluate four models\u2014NST, FST, CBST, and DFR\u2014using both human ratings and quantitative metrics: FID, LPIPS, and SSIM.',
      },
      {
        label: 'What I built',
        body: 'The full evaluation pipeline and analysis comparing artistic fidelity, inference speed, and metric scores across all four architectures.',
      },
      {
        label: 'Result',
        body: 'NST won on artistic fidelity, FST on inference speed, and CBST/DFR showed clear room for improvement. Published at ACM ICIMMI 2023 and featured on Kudos.',
      },
    ],
    link: 'https://doi.org/10.1145/3647444.3652461',
    linkLabel: 'Read the paper',
  },
  {
    id: 'text2live-3d',
    title: '3D Text2Live',
    subtitle: 'Text-guided localized 3D editing',
    image: contentImages.textToLive,
    rating: '3D AI',
    tags: ['3D AI', 'Text-Guided Editing', 'Computer Vision'],
    summary:
      'Text-guided 3D editing project focused on changing localized scene regions from natural language prompts.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Text-guided editing works well on 2D images, but 3D scenes are harder: how do you change just the region a prompt describes without disturbing the rest of the geometry?',
      },
      {
        label: 'Approach',
        body: 'Explore volumetric rendering and implicit shape representations for localized edits, steering appearance and structure changes with gradient-descent optimization and image-to-image translation.',
      },
      {
        label: 'What I built',
        body: 'A research prototype connecting natural-language prompts to localized 3D scene modifications.',
      },
      {
        label: 'Result',
        body: 'A deep dive into where text prompts meet 3D geometry\u2014not a shipped product, but the kind of problem I keep coming back to.',
      },
    ],
  },
  {
    id: 'neunet-project',
    title: 'Neunet AI Platform',
    subtitle: 'Agentic AI platform exploration',
    image: contentImages.neunetAiPlatform,
    rating: 'Agentic AI',
    tags: ['LLMs', 'Agentic AI', 'RAG', 'Python', 'FastAPI', 'Vector Search'],
    summary:
      'Early agentic AI platform work involving multi-agent orchestration, retrieval workflows, and backend LLM service architecture.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Agent demos are easy; agent platforms are not. The challenge was coordinating multiple LLM agents and retrieval systems into automation workflows that behave predictably.',
      },
      {
        label: 'Approach',
        body: 'Multi-agent architecture with distributed model coordination, backed by real-time knowledge retrieval and iterative prompt engineering measured against actual system performance.',
      },
      {
        label: 'What I built',
        body: 'Agent orchestration and retrieval infrastructure on OpenAI and Azure with CosmosDB, FAISS, and ChromaDB, plus CI/CD pipelines for deploying LLM applications.',
      },
      {
        label: 'Result',
        body: 'Measurable system-performance improvements from prompt and retrieval iteration\u2014and a lasting lesson that agent production is a different sport from agent demos.',
      },
    ],
  },
  {
    id: 'biased-prosecution',
    title: 'Biased Prosecution Project',
    subtitle: 'Data analysis for prosecution outcomes',
    image: contentImages.biasedProsecution,
    rating: 'Data Project',
    tags: ['Data Analysis', 'Visualization', 'Statistics', 'Policy Analytics'],
    summary:
      'County-level prosecution analysis exploring sentencing patterns, charge outcomes, and disparities in public legal data.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Public prosecution records hold patterns about sentencing and charge outcomes, but the data is messy, inconsistent across counties, and illegible to most people it affects.',
      },
      {
        label: 'Approach',
        body: 'Collect and clean multi-county datasets\u2014the messy half of the project\u2014then apply statistical testing and visualization to surface patterns across demographic groups.',
      },
      {
        label: 'What I built',
        body: 'A cleaned, comparable multi-county dataset and a set of visualizations designed to make justice-system data legible to non-data-scientists.',
      },
      {
        label: 'Result',
        body: 'Surfaced sentencing and charge-outcome disparities across demographic groups in public legal data.',
      },
    ],
  },
  {
    id: 'zoya-voice-assistant',
    title: 'Zoya Voice Assistant',
    subtitle: 'Smart-device voice interaction',
    image: contentImages.zoya,
    rating: 'Voice AI',
    tags: ['Voice AI', 'NLP', 'Speech', 'Assistant Systems'],
    summary:
      'Voice assistant project for smart-device interactions, reminders, natural language commands, and human-computer interaction.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Talking to a device raises more HCI questions than it answers: the hard part was always listening accurately, not responding cleverly.',
      },
      {
        label: 'Approach',
        body: 'Build voice interaction flows for reminders and hands-free device control, focusing on command detection accuracy first.',
      },
      {
        label: 'What I built',
        body: 'The voice interaction layer for a smart-device assistant, covering natural-language commands, reminders, and device control.',
      },
      {
        label: 'Result',
        body: 'Published in ECS Transactions (IOP) in 2022\u2014one of my earliest papers, co-authored during undergrad.',
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
    tags: ['Embedded Systems', 'IR Sensors', 'C8051F340'],
    summary:
      'Microcontroller-based traffic signal project that adjusted lights using vehicle-density sensing.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Fixed-timer traffic lights waste everyone\u2019s time when lanes have wildly different traffic. Could signals respond to actual density\u2014in hardware, not simulation?',
      },
      {
        label: 'Approach',
        body: 'Interface IR sensors with a C8051F340 microcontroller to read real-time per-lane vehicle density and adjust signal timing accordingly.',
      },
      {
        label: 'What I built',
        body: 'A four-junction hardware prototype with LED signal representation and live density-based switching logic.',
      },
      {
        label: 'Result',
        body: 'A working embedded prototype\u2014and a lasting respect for how much harder hardware is than training a model.',
      },
    ],
  },
  {
    id: 'churn-modelling',
    title: 'Churn Modelling',
    subtitle: 'Customer churn prediction',
    image: contentImages.churn,
    rating: 'ML Project',
    tags: ['Machine Learning', 'Classification', 'Python', 'Analytics'],
    summary:
      'Bank churn prediction project comparing classical ML models and translating predictions into business recommendations.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'A bank wants to know who is about to leave and why\u2014and a model is only useful if its predictions translate into retention actions someone can take.',
      },
      {
        label: 'Approach',
        body: 'Chi-square testing on categorical variables and exploratory visualization before modeling, then a comparison of logistic regression, decision trees, and random forests on an 11-feature dataset.',
      },
      {
        label: 'What I built',
        body: 'The full analysis pipeline from feature exploration through model comparison and segment-level recommendations.',
      },
      {
        label: 'Result',
        body: 'Age, gender, balance, and geography mattered; credit score and salary surprisingly didn\u2019t. Proposed targeted retention strategies by segment\u2014students, employed, and high-balance accounts.',
      },
    ],
  },
  {
    id: 'smart-rodent-trap',
    title: 'Smart Rodent Trap',
    subtitle: 'Arduino-based pest control prototype',
    image: contentImages.rodent,
    rating: 'IoT Project',
    tags: ['Arduino', 'IoT', 'Sensors', 'Embedded Systems'],
    summary:
      'Arduino-based humane pest-control prototype using ultrasonic sensing, servo actuation, and alert feedback.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'In rural areas, poison isn\u2019t ideal and live traps only work if someone checks them. A humane trap needs automation: detect, close, notify.',
      },
      {
        label: 'Approach',
        body: 'Ultrasonic detection triggers a servo to close the cage door, with LEDs and a buzzer confirming a catch.',
      },
      {
        label: 'What I built',
        body: 'The complete prototype: hardware, software, and PCB layout.',
      },
      {
        label: 'Result',
        body: 'A working humane-trap prototype\u2014my kind of weekend project before AI ate all my free time.',
      },
    ],
  },
  {
    id: 'automated-light-sensor',
    title: 'Automated Light Sensor Circuit',
    subtitle: 'Electronics automation project',
    image: contentImages.lightSensor,
    rating: 'Hardware',
    tags: ['Electronics', 'Sensors', 'Circuit Design', 'Automation'],
    summary:
      'Light-aware automation circuit using an LDR and 555 timer for streetlight and security applications.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Plenty of automation needs are simple: react when the light changes. Street lights, solar highways, and security alarms don\u2019t need a microcontroller for that.',
      },
      {
        label: 'Approach',
        body: 'A 555 Timer IC drives the output based on LDR resistance changes\u2014cheap, simple, and reliable.',
      },
      {
        label: 'What I built',
        body: 'The complete circuit design and working build.',
      },
      {
        label: 'Result',
        body: 'A practical light-aware circuit, plus two lessons: LDRs are slow and temperature-sensitive, and the best engineering is often knowing when not to overcomplicate things.',
      },
    ],
  },
  {
    id: 'mini-mindspark',
    title: 'Mini Mindspark',
    subtitle: 'Interactive learning application',
    image: contentImages.midspark,
    tags: ['Java', 'BlueJ', 'Education', 'UI'],
    summary:
      'Java learning-app clone with random question generation, topic selection, and a simple GUI.',
    details: [],
    sections: [
      {
        label: 'Problem',
        body: 'Recreate the core loop of the Mindspark learning platform as a standalone desktop app\u2014topic selection, practice sessions, and enough variety to stay interesting.',
      },
      {
        label: 'Approach',
        body: 'A Java GUI built in BlueJ with a main page, per-topic practice sessions, and 10 randomly generated questions per topic each session.',
      },
      {
        label: 'What I built',
        body: 'The full desktop application: question generation, topic navigation, and the interface.',
      },
      {
        label: 'Result',
        body: 'One of my first \u201csoftware as product\u201d experiences\u2014before I discovered Python and never looked back (mostly).',
      },
    ],
  },
];
