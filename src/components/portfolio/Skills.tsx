import { Section } from "./Section";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Compétences"
      title="Une double expertise tech & marketing"
      description="Une stack technique solide combinée à une réelle maîtrise du marketing digital pour livrer des produits qui performent."
    >
      <div className="space-y-14">
        {skillCategories.map((cat) => (
          <div key={cat.title}>
            <div className="mb-7 flex items-baseline gap-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary">
                {cat.eyebrow}
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                {cat.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {cat.items.map((s) => (
                <div
                  key={s.name}
                  className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card p-5 hover:border-primary hover:shadow-elegant transition-all hover:-translate-y-1"
                >
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-4 font-display font-bold text-base text-foreground">
                      {s.name}
                    </h4>
                    <p className="mt-1 text-sm text-foreground/70">{s.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
