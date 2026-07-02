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
      'Geotagging astronaut photos for the Windows on Earth program—VGG-16, SIFT, and GPT-4 Vision working together when cloud cover makes geolocation genuinely hard.',
    details: [
      'Combined VGG-16/ImageNet features with SIFT matching; GPT-4 Vision (TerraByte) handled visual interpretation when classical CV fell short.',
      'Hit 75%+ precise geolocation and 90%+ rough-location accuracy despite varied scales and partial cloud cover.',
      'Integrated Mapbox and Google Maps APIs; Dockerized the pipeline for reproducible batch processing.',
      'Published as arXiv 2025—research born from a real NASA-adjacent use case, not a Kaggle dataset.',
    ],
  },
  {
    id: 'stock-investment-advisor',
    title: 'Conversational Stock Investment Advisor',
    subtitle: 'Prototype for investment exploration, not financial advice',
    image: contentImages.advisorbot,
    rating: 'NLP Prototype',
    tags: ['NLP', 'Conversational AI', 'Python', 'Rasa', 'BERT', 'DialoGPT', 'AWS'],
    summary:
      'A conversational stock explorer—not financial advice, just a well-built NLP prototype that hit 92% query accuracy on AWS.',
    details: [
      'Built with Rasa, NER, BERT, and DialoGPT; sentiment analysis to gauge whether users actually got what they asked for.',
      'Pulled live and historical data from Alpaca and Alpha Vantage APIs.',
      'Designed explicitly as an educational prototype—financial jargon and market volatility made this a fun NLP challenge, not a fintech product pitch.',
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
      'Led a 5-person team comparing YOLOv5, SSD, and CNN approaches for drone detection—97% success rate on resource-constrained hardware.',
    details: [
      'Motivation: drones are cheap and dangerous; radar-based detection is expensive and not portable. CV on commodity GPUs was the bet.',
      'Benchmarked YOLOv5 vs SSD vs classical CNN across imagery and video, optimizing for edge deployment constraints.',
      'Published through IEEE IConSIP 2022—my first paper, and still one of the most practically motivated.',
    ],
  },
  {
    id: 'style-transfer-study',
    title: 'Comparative Study of Neural Style Transfer Models',
    subtitle: 'Computer vision research project',
    image: contentImages.styleTransfer,
    rating: 'Published',
    tags: ['Computer Vision', 'Style Transfer', 'Deep Learning'],
    summary:
      'Compared four neural style transfer models—NST, FST, CBST, and DFR—across artistic quality, speed, and technical metrics like FID and LPIPS.',
    details: [
      'NST won on artistic fidelity; FST won on inference speed. CBST and DFR had room to grow—honest tradeoff analysis, not a single-model cheerleading session.',
      'Evaluated with human ratings plus FID, LPIPS, and SSIM.',
      'Published at ACM ICIMMI 2023; featured on Kudos.',
    ],
  },
  {
    id: 'text2live-3d',
    title: '3D Text2Live',
    subtitle: 'Text-guided localized 3D editing',
    image: contentImages.textToLive,
    rating: '3D AI',
    tags: ['3D AI', 'Text-Guided Editing', 'Computer Vision'],
    summary:
      'Text-guided localized editing for 3D scenes—change just the part you describe, not the whole model.',
    details: [
      'Explored volumetric rendering and implicit shape representations for localized 3D edits from natural language.',
      'Used gradient-descent optimization and image-to-image translation to steer appearance and structure changes.',
      'A research deep-dive into where text prompts meet 3D geometry—not a shipped product, but the kind of problem I keep thinking about.',
    ],
  },
  {
    id: 'neunet-project',
    title: 'Neunet AI Platform',
    subtitle: 'Agentic AI platform exploration',
    rating: 'Agentic AI',
    tags: ['LLMs', 'Agentic AI', 'RAG', 'Python', 'FastAPI', 'Vector Search'],
    summary:
      'Early agentic AI platform work at a stealth startup—multi-agent orchestration, vector retrieval, and CI/CD for LLM deployment before it was trendy.',
    details: [
      'Built multi-agent LLM architecture with distributed model coordination for automation workflows.',
      'Stack: OpenAI, Azure, CosmosDB, FAISS, and ChromaDB for real-time knowledge retrieval.',
      'Set up CI/CD pipelines for LLM apps and pushed on prompt engineering until system performance improved measurably.',
      'This is where I first learned that agent demos are easy and agent production is a different sport entirely.',
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
      'County-level prosecution data analysis—sentencing patterns, charge outcomes, and the disparities hiding in public records.',
    details: [
      'Collected and cleaned datasets from multiple counties; the messy part was half the project.',
      'Used statistical testing and visualization to surface patterns across demographic groups.',
      "Goal was making justice-system data legible to people who aren't data scientists.",
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
      'Voice assistant for smart devices—reminders, natural language commands, and the HCI questions that come with talking to a box.',
    details: [
      'Built voice interaction flows for reminders and hands-free device control.',
      'Published as ECS Transactions (IOP) 2022—one of my earliest papers, co-authored during undergrad.',
      'Predates the Alexa era hype; the hard part was always listening accurately, not responding cleverly.',
    ],
  },
  {
    id: 'density-traffic-system',
    title: 'Density-Based Traffic Signal System',
    subtitle: 'Vehicle-density traffic control',
    image: contentImages.trafficLights,
    tags: ['Computer Vision', 'Traffic AI', 'Python'],
    summary:
      'IR-sensor traffic lights that actually respond to density—built on a C8051F340 microcontroller, not a simulation.',
    details: [
      'Interfaced IR sensors with a microcontroller to read real-time traffic density per lane.',
      'Designed a four-junction hardware prototype with LED signal representation.',
      'Undergrad embedded systems project that made me respect how much harder hardware is than training a model.',
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
      'Bank churn prediction on an 11-feature dataset—logistic regression, decision trees, random forests, and recommendations the business could actually act on.',
    details: [
      'Chi-square tests on categorical variables; visualization to find patterns and outliers before modeling.',
      "Age, gender, balance, and geography mattered; credit score and salary surprisingly didn't.",
      'Proposed targeted retention strategies by segment—students, employed, high-balance accounts.',
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
      'Humane pest control with Arduino—ultrasonic sensors, a servo trap door, and buzzer feedback when something actually worked.',
    details: [
      'Ultrasonic detection triggers a servo to close the cage; LEDs and buzzer confirm a catch.',
      "Designed for rural areas where poison isn't ideal and live traps need automation.",
      'Hardware + software + PCB layout—my kind of weekend project before AI ate all my free time.',
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
      'LDR + 555 timer circuit for light-aware automation—street lights, solar highways, security alarms.',
    details: [
      '555 Timer IC drives a buzzer based on LDR resistance changes.',
      'Simple, cheap, and practical—also taught me that LDRs are slow and temperature-sensitive.',
      'Sometimes the best engineering is knowing when not to overcomplicate things.',
    ],
  },
  {
    id: 'mini-mindspark',
    title: 'Mini Mindspark',
    subtitle: 'Interactive learning application',
    image: contentImages.midspark,
    tags: ['Education', 'UI', 'Interactive Learning'],
    summary:
      'A Java clone of the Mindspark learning platform—random question generation, topic selection, and a GUI built in BlueJ.',
    details: [
      'Standalone desktop app with a main page and per-topic practice sessions.',
      '10 random questions per topic each session—simple idea, surprisingly fun to build.',
      'One of my first "software as product" experiences, before I discovered Python and never looked back (mostly).',
    ],
  },
];
