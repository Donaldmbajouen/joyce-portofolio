import { Section } from "./Section";
import { Brain, Briefcase, Rocket, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Brain,
    title: "Analyse système",
    text: "Une expertise en modélisation UML pour cadrer le besoin avant d'écrire la première ligne de code.",
    metric: "100%",
    metricLabel: "des projets cadrés en UML",
  },
  {
    icon: Briefcase,
    title: "Pensée business",
    text: "Chaque solution sert un ROI : croissance, productivité ou expérience client.",
    metric: "ROI",
    metricLabel: "au cœur de chaque livrable",
  },
  {
    icon: Rocket,
    title: "Idée → produit",
    text: "Je transforme une idée brute en produit digital scalable, prêt à conquérir un marché.",
    metric: "0→1",
    metricLabel: "spécialiste du lancement",
  },
  {
    icon: ShieldCheck,
    title: "Qualité & rigueur",
    text: "Code propre, architecture documentée, communication claire. Du sérieux, sans la complexité.",
    metric: "A+",
    metricLabel: "standards de livraison",
  },
];

export function Value() {
  return (
    <Section
      id="value"
      eyebrow="Pourquoi moi"
      title="La différence qui fait gagner du temps et de l'argent"
      description="Plus qu'une développeuse : une partenaire stratégique pour vos enjeux digitaux."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {values.map((v) => (
          <div
            key={v.title}
            className="group relative rounded-3xl border border-border bg-gradient-card p-6 overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1"
          >
            <div className="absolute -bottom-8 -right-8 text-7xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
              {v.metric}
            </div>
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              <p className="mt-4 text-[11px] font-mono uppercase tracking-wider text-primary">{v.metricLabel}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
