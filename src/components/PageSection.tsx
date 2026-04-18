export default function PageSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        {eyebrow ? (
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-2 font-display text-3xl font-semibold text-foreground">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

