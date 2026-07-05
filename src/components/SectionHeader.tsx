type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  titleId: string;
  subtitle?: string;
};

export default function SectionHeader({ eyebrow, title, titleId, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-3 max-w-4xl border-l-2 border-signal/80 pl-4 sm:pl-5">
      <p className="mb-2 text-[0.68rem] font-black tracking-[0.18em] text-signal-hot uppercase">
        {eyebrow}
      </p>
      <h2 className="text-2xl leading-none font-black tracking-[-0.04em] sm:text-3xl" id={titleId}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70 sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
