import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { useScrollRail } from '../hooks/useScrollRail.ts';

type ScrollRailProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  children: ReactNode;
};

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg aria-hidden="true" className="scroll-rail-arrow-icon" fill="none" viewBox="0 0 24 24">
      <path
        d={direction === 'left' ? 'm15 6-7.5 6L15 18' : 'm9 6 7.5 6L9 18'}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

type ScrollArrowProps = {
  direction: 'left' | 'right';
  visible: boolean;
  onClick: () => void;
};

function ScrollArrow({ direction, visible, onClick }: ScrollArrowProps) {
  const label = direction === 'left' ? 'Scroll left' : 'Scroll right';

  return (
    <button
      className="scroll-rail-arrow focus-ring"
      type="button"
      aria-label={label}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      data-can-scroll={visible}
      onClick={onClick}
    >
      <ChevronIcon direction={direction} />
    </button>
  );
}

export default function ScrollRail({ children, className = '', ...rest }: ScrollRailProps) {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByDirection } = useScrollRail();

  return (
    <div className="scroll-rail-section -mx-4 flex min-w-0 items-stretch sm:-mx-8 lg:-mx-12">
      <div className="scroll-rail-gutter">
        <ScrollArrow
          direction="left"
          visible={canScrollLeft}
          onClick={() => scrollByDirection('left')}
        />
      </div>

      <div className="scroll-rail-viewport relative min-w-0 flex-1">
        <div ref={scrollRef} className={`rail-scroll ${className}`.trim()} {...rest}>
          {children}
        </div>
        <div
          aria-hidden="true"
          className="scroll-rail-fade scroll-rail-fade--left"
          data-active={canScrollLeft || undefined}
        />
        <div
          aria-hidden="true"
          className="scroll-rail-fade scroll-rail-fade--right"
          data-active={canScrollRight || undefined}
        />
      </div>

      <div className="scroll-rail-gutter">
        <ScrollArrow
          direction="right"
          visible={canScrollRight}
          onClick={() => scrollByDirection('right')}
        />
      </div>
    </div>
  );
}
