type LoadingRowProps = {
  label: string;
};

export default function LoadingRow({ label }: LoadingRowProps) {
  return (
    <section className="grid gap-4 px-4 pb-16 sm:px-8 md:grid-cols-3 lg:px-16" aria-label={label}>
      <span className="min-h-64 animate-shimmer rounded-2xl bg-linear-to-r from-panel via-[#222] to-panel bg-[length:200%_100%]" />
      <span className="min-h-64 animate-shimmer rounded-2xl bg-linear-to-r from-panel via-[#222] to-panel bg-[length:200%_100%]" />
      <span className="min-h-64 animate-shimmer rounded-2xl bg-linear-to-r from-panel via-[#222] to-panel bg-[length:200%_100%]" />
    </section>
  );
}
