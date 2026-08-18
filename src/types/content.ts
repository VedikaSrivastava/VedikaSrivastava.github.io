export type DetailSection = {
  label: string;
  body: string;
};

export type ContentItem = {
  id: string;
  title: string;
  subtitle: string;
  location?: string;
  period?: string;
  image?: string;
  imageAlt?: string;
  /** How the modal billboard renders the image: full-bleed cover (default) or a contained logo chip. */
  imageStyle?: 'cover' | 'logo';
  rating?: string;
  tags: string[];
  summary: string;
  details: string[];
  /** Labeled modal sections (Context / What I built / Impact, etc.). Preferred over `details` when present. */
  sections?: DetailSection[];
  link?: string;
  linkLabel?: string;
  /** Brand color used to tint the tile backdrop (e.g. school color). */
  accent?: string;
  /** Short proof point surfaced directly on a recruiter-facing card. */
  proof?: string;
};

export type HeroCopy = {
  label: string;
  name: string;
  role: string;
  description: string;
  secondaryDescription: string;
  metadata: string[];
  sidebar: Array<{ label: string; value: string }>;
};

export type SiteContent = {
  heroProfile: ContentItem;
  heroCopy: HeroCopy;
  projects: ContentItem[];
  experience: ContentItem[];
  research: ContentItem[];
  education: ContentItem[];
};

export type ContactPlatform = 'email' | 'linkedin' | 'github' | 'scholar' | 'medium';

export type ContactLink = {
  label: string;
  shortLabel?: string;
  href: string;
  platform: ContactPlatform;
};

export type BrowseRowVariant = 'standard' | 'wide' | 'compact';

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
};
