export type ContentItem = {
  id: string;
  title: string;
  subtitle: string;
  location?: string;
  period?: string;
  image?: string;
  rating?: string;
  tags: string[];
  summary: string;
  details: string[];
  link?: string;
  linkLabel?: string;
  /** Brand color used to tint the tile backdrop (e.g. school color). */
  accent?: string;
};

export type SiteContent = {
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
