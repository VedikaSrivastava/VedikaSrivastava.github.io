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
    <div className="min-h-dvh overflow-x-hidden bg-void font-sans text-copy">
      <SiteHeader />
      <main>
        <HeroSection
          copy={siteContent.heroCopy}
          profile={siteContent.heroProfile}
          onOpen={setSelectedItem}
        />
        <ExperienceRow items={siteContent.experience} onOpen={setSelectedItem} />
        <BrowseRow
          sectionId="research"
          eyebrow="Research"
          title="Research"
          subtitle="Seven peer-reviewed publications and preprints across clinical AI, computer vision, NLP, and voice systems, including EEG cerebral-edema prediction, glycemic-response modeling, and ISS imagery geolocation."
          items={siteContent.research}
          onOpen={setSelectedItem}
        />
        <BrowseRow
          sectionId="projects"
          eyebrow="Selected AI Projects"
          title="Projects"
          subtitle="Selected work across multimodal AI, NLP, 3D vision, and public-interest data, including both published research and exploratory systems."
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
      <ItemDetailModal
        key={selectedItem?.id ?? 'closed'}
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
