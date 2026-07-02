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
  featured?: boolean;
};

export type ContentMetric = {
  value: string;
  label: string;
};

export type SiteContent = {
  featuredWork: ContentItem[];
  projects: ContentItem[];
  experience: ContentItem[];
  research: ContentItem[];
  skills: ContentItem[];
  education: ContentItem[];
  metrics: ContentMetric[];
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
  label: string;
  href: string;
};
