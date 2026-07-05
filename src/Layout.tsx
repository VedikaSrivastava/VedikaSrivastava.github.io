import { useState } from 'react';
import BrowseRow from './components/BrowseRow.tsx';
import ExperienceRow from './components/ExperienceRow.tsx';
import HeroSection from './components/HeroSection.tsx';
import ItemDetailModal from './components/ItemDetailModal.tsx';
import SiteFooter from './components/SiteFooter.tsx';
import SiteHeader from './components/SiteHeader.tsx';
import { siteContent } from './content/site-content.ts';
import type { ContentItem } from './types/content.ts';

export default function Layout() {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  return (
    <div className="min-h-dvh overflow-x-hidden bg-void bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.16),transparent_30rem),linear-gradient(180deg,#050505_0%,#050505_62%,#020202_100%)] font-sans text-copy">
      <SiteHeader />
      <main>
        <HeroSection profile={siteContent.heroProfile} onOpen={setSelectedItem} />
        <ExperienceRow items={siteContent.experience} onOpen={setSelectedItem} />
        <BrowseRow
          sectionId="research"
          eyebrow="Research"
          title="Research"
          subtitle="Seven papers across healthcare AI research, geospatial computer vision, NLP, drone detection, style transfer, and voice systems. I like research that connects model behavior to real-world utility."
          items={siteContent.research}
          onOpen={setSelectedItem}
          variant="compact"
        />
        <BrowseRow
          sectionId="projects"
          eyebrow="Selected AI Projects"
          title="Projects"
          subtitle="Side quests and deep dives across geospatial AI, Sanskrit NLP, agentic platforms, computer vision, embedded systems, and human-facing prototypes."
          items={siteContent.projects}
          onOpen={setSelectedItem}
        />
        <BrowseRow
          sectionId="education"
          eyebrow="Education"
          title="Education"
          items={siteContent.education}
          onOpen={setSelectedItem}
          variant="wide"
        />
      </main>
      <SiteFooter />
      <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
