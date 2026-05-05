export function PolicyPage({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: { title: string; body: string[] }[];
}) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-5">
        <h1 className="font-serif text-5xl font-semibold leading-tight text-[var(--ink)]">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
          {description}
        </p>
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-2xl font-bold text-[var(--ink)]">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-[var(--muted)]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
