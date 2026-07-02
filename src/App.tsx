import { Suspense, lazy, useMemo, useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import DetailModal from './components/DetailModal.tsx';
import LoadingRow from './components/LoadingRow.tsx';
import SiteFooter from './components/SiteFooter.tsx';
import { portfolio, type PortfolioItem } from './data/portfolio.ts';

const ContentRow = lazy(() => import('./components/ContentRow.tsx'));
const ExperienceTimeline = lazy(() => import('./components/ExperienceTimeline.tsx'));

export default function App() {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const featuredItem = useMemo(
    () => portfolio.featuredWork.find((item) => item.featured) ?? portfolio.featuredWork[0],
    [],
  );

  return (
    <div className="min-w-80 overflow-x-hidden bg-void bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.16),transparent_30rem),linear-gradient(180deg,#050505_0%,#050505_62%,#020202_100%)] font-sans text-copy">
      <Header />
      <main>
        <Hero item={featuredItem} onOpen={setActiveItem} />
        <Suspense fallback={<LoadingRow label="Loading portfolio sections" />}>
          <ContentRow
            sectionId="work"
            eyebrow="Featured Work"
            title="Production and AI Systems"
            subtitle="A few systems and projects that best represent how I work: practical AI, strong engineering, and measurable product impact."
            items={portfolio.featuredWork}
            onOpen={setActiveItem}
            variant="wide"
          />
          <ExperienceTimeline items={portfolio.experience} onOpen={setActiveItem} />
          <ContentRow
            sectionId="projects"
            eyebrow="Selected AI Projects"
            title="Projects"
            subtitle="A single browsable row of applied AI, research, data, hardware, and earlier technical work."
            items={portfolio.projects}
            onOpen={setActiveItem}
          />
          <ContentRow
            sectionId="research"
            eyebrow="Research"
            title="Research"
            subtitle="My research background spans healthcare AI, NLP, computer vision, voice assistants, drone detection, and style transfer. I care most about work that connects model performance with real-world utility."
            items={portfolio.research}
            onOpen={setActiveItem}
            variant="compact"
          />
          <ContentRow
            sectionId="skills"
            eyebrow="Technical Stack"
            title="Technical Stack"
            subtitle="Tools I use to build, ship, evaluate, and maintain AI systems."
            items={portfolio.skills}
            onOpen={setActiveItem}
            variant="compact"
          />
          <ContentRow
            sectionId="education"
            eyebrow="Education"
            title="Education"
            items={portfolio.education}
            onOpen={setActiveItem}
            variant="wide"
          />
        </Suspense>
      </main>
      <SiteFooter />
      <DetailModal item={activeItem} onClose={() => setActiveItem(null)} />
    </div>
  );
}
