import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-20 grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 transition-all duration-200 ease-out sm:gap-5 sm:px-8 lg:px-12 ${
        isScrolled
          ? 'border-b border-line bg-void/95 backdrop-blur-xl'
          : 'bg-linear-to-b from-black/90 to-transparent'
      }`}
    >
      <a className="inline-flex min-w-0 items-center gap-3 font-black tracking-[-0.04em]" href="#top" aria-label="Vedika Srivastava home">
        <span className="grid size-9 shrink-0 place-items-center rounded-sm bg-signal text-xs shadow-[0_0_28px_rgba(229,9,20,0.45)]">VS</span>
        <span className="hidden truncate text-xl text-signal-hot uppercase sm:inline lg:text-2xl">Vedika</span>
      </a>
      <nav className="rail-scroll order-3 col-span-full flex gap-4 overflow-x-auto pb-1 text-xs font-semibold whitespace-nowrap text-white/80 sm:gap-6 md:order-none md:col-span-1 md:overflow-visible md:pb-0" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a className="transition hover:-translate-y-px hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="justify-self-end whitespace-nowrap rounded-sm bg-white px-3 py-2 text-xs font-black text-void transition hover:-translate-y-px hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-4" href="#contact">
        Get in touch
      </a>
    </header>
  );
}
