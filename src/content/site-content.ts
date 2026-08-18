import type { SiteContent } from '../types/content.ts';
import { education } from './sections/education.ts';
import { experience } from './sections/experience.ts';
import { heroCopy, heroProfile } from './sections/hero-profile.ts';
import { projects } from './sections/projects.ts';
import { research } from './sections/research.ts';

export const siteContent: SiteContent = {
  heroProfile,
  heroCopy,
  projects,
  experience,
  research,
  education,
};
