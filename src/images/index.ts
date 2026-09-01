import type { ContentImage } from '../types/content.ts';
import acmLogo from './acm-logo.svg';
import advisorbot from './advisorbot.webp';
import advisorbotCard from './advisorbot-800.webp';
import ahaLogo from './aha-logo.svg';
import arxivLogo from './arxiv-logo.svg';
import biasedProsecution from './bias_proce.webp';
import biasedProsecutionCard from './bias_proce-800.webp';
import buTerrier from './boston-university-terrier-secondary-logo.webp';
import ecsLogo from './ecs-logo.webp';
import ieeeLogo from './ieee-logo.svg';
import researchSquareLogo from './research-square-logo.svg';
import wileyLogo from './wiley-logo.svg';
import churn from './chrun.webp';
import churnCard from './chrun-800.webp';
import droneSwarm from './drone-swarm.webp';
import droneSwarmCard from './drone-swarm-800.webp';
import issGeolocate from './iss_geolocate.webp';
import issGeolocateCard from './iss_geolocate-800.webp';
import lightSensor from './light_sensor.webp';
import lightSensorCard from './light_sensor-800.webp';
import midspark from './midspark.webp';
import midsparkCard from './midspark-800.webp';
import mitwpuLogo from './mit-world-peace-university-logo.webp';
import neunetAiPlatform from './neunet-ai-platform.webp';
import neunetAiPlatformCard from './neunet-ai-platform-800.webp';
import rodent from './rodent.webp';
import rodentCard from './rodent-800.webp';
import styleTransfer from './style_transfer.webp';
import styleTransferCard from './style_transfer-800.webp';
import textToLive from './text_to_live.webp';
import textToLiveCard from './text_to_live-800.webp';
import trafficLights from './traffic_lights.webp';
import trafficLightsCard from './traffic_lights-800.webp';
import zoya from './zoya.webp';
import zoyaCard from './zoya-800.webp';
import extuitive from './experience/extuitive-ai-saas.webp';
import extuitiveCard from './experience/extuitive-ai-saas-800.webp';
import buBmc from './experience/bu-bmc-healthcare-ai.webp';
import buBmcCard from './experience/bu-bmc-healthcare-ai-800.webp';
import phoenyx from './experience/my-phoenyx-voice-ai.webp';
import phoenyxCard from './experience/my-phoenyx-voice-ai-800.webp';
import timeMachine from './experience/time-machine-rag.webp';
import timeMachineCard from './experience/time-machine-rag-800.webp';
import nrel from './experience/nrel-energy-data.webp';
import nrelCard from './experience/nrel-energy-data-800.webp';
import buTeaching from './experience/bu-teaching-ai.webp';
import buTeachingCard from './experience/bu-teaching-ai-800.webp';
import ibm from './experience/ibm-backend-systems.webp';
import ibmCard from './experience/ibm-backend-systems-800.webp';
import techMahindra from './experience/techmahindra-nlp.webp';
import techMahindraCard from './experience/techmahindra-nlp-800.webp';

function photo(src: string, card: string, width: number): ContentImage {
  return {
    src,
    srcSet: `${card} 800w, ${src} ${width}w`,
  };
}

function logo(src: string): ContentImage {
  return { src };
}

export const contentImages = {
  acmLogo: logo(acmLogo),
  advisorbot: photo(advisorbot, advisorbotCard, 1024),
  ahaLogo: logo(ahaLogo),
  arxivLogo: logo(arxivLogo),
  biasedProsecution: photo(biasedProsecution, biasedProsecutionCard, 1024),
  buTerrier: logo(buTerrier),
  ecsLogo: logo(ecsLogo),
  ieeeLogo: logo(ieeeLogo),
  researchSquareLogo: logo(researchSquareLogo),
  wileyLogo: logo(wileyLogo),
  churn: photo(churn, churnCard, 1024),
  droneSwarm: photo(droneSwarm, droneSwarmCard, 1024),
  issGeolocate: photo(issGeolocate, issGeolocateCard, 1024),
  lightSensor: photo(lightSensor, lightSensorCard, 1024),
  midspark: photo(midspark, midsparkCard, 1024),
  mitwpuLogo: logo(mitwpuLogo),
  neunetAiPlatform: photo(neunetAiPlatform, neunetAiPlatformCard, 1024),
  rodent: photo(rodent, rodentCard, 1024),
  styleTransfer: photo(styleTransfer, styleTransferCard, 1024),
  textToLive: photo(textToLive, textToLiveCard, 1024),
  trafficLights: photo(trafficLights, trafficLightsCard, 1024),
  zoya: photo(zoya, zoyaCard, 1024),
  extuitive: photo(extuitive, extuitiveCard, 1200),
  buBmc: photo(buBmc, buBmcCard, 1200),
  phoenyx: photo(phoenyx, phoenyxCard, 1200),
  timeMachine: photo(timeMachine, timeMachineCard, 1200),
  nrel: photo(nrel, nrelCard, 1200),
  buTeaching: photo(buTeaching, buTeachingCard, 1200),
  ibm: photo(ibm, ibmCard, 1200),
  techMahindra: photo(techMahindra, techMahindraCard, 1200),
} as const;
