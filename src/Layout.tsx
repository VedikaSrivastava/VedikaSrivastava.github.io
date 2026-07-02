import { Suspense, lazy, useMemo, useState } from 'react';
import SiteHeader from './components/SiteHeader.tsx';
import HeroSection from './components/HeroSection.tsx';
import ItemDetailModal from './components/ItemDetailModal.tsx';
import SectionLoadingFallback from './components/SectionLoadingFallback.tsx';
import SiteFooter from './components/SiteFooter.tsx';
import { siteContent } from './content/site-content.ts';
import type { ContentItem } from './types/content.ts';

const BrowseRow = lazy(() => import('./components/BrowseRow.tsx'));
const ExperienceRow = lazy(() => import('./components/ExperienceRow.tsx'));

export default function Layout() {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const heroSpotlightItem = useMemo(() => siteContent.experience[0], []);

  return (
    <div className="min-h-dvh overflow-x-hidden bg-void bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.16),transparent_30rem),linear-gradient(180deg,#050505_0%,#050505_62%,#020202_100%)] font-sans text-copy">
      <SiteHeader />
      <main>
        <HeroSection item={heroSpotlightItem} onOpen={setSelectedItem} />
        <Suspense fallback={<SectionLoadingFallback label="Loading site sections" />}>
          <ExperienceRow items={siteContent.experience} onOpen={setSelectedItem} />
          <BrowseRow
            sectionId="research"
            eyebrow="Research"
            title="Research"
            subtitle="Seven papers across healthcare AI, geospatial CV, NLP, and voice systems. I like research that connects to something real—not just benchmark chasing."
            items={siteContent.research}
            onOpen={setSelectedItem}
            variant="compact"
          />
          <BrowseRow
            sectionId="projects"
            eyebrow="Selected AI Projects"
            title="Projects"
            subtitle="Side quests and deep dives—from ISS geolocation and Sanskrit voice bots to Arduino traps and traffic lights."
            items={siteContent.projects}
            onOpen={setSelectedItem}
          />
          <BrowseRow
            sectionId="skills"
            eyebrow="Technical Stack"
            title="Technical Stack"
            subtitle="Tools I use to build, ship, evaluate, and maintain AI systems."
            items={siteContent.skills}
            onOpen={setSelectedItem}
            variant="compact"
          />
          <BrowseRow
            sectionId="education"
            eyebrow="Education"
            title="Education"
            items={siteContent.education}
            onOpen={setSelectedItem}
            variant="wide"
          />
        </Suspense>
      </main>
      <SiteFooter />
      <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
