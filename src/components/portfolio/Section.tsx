import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" />
            {eyebrow}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gradient">{title}</span>
          </h2>
          {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
