import { Section } from "./Section";
import { Briefcase, Code2, Megaphone } from "lucide-react";

const experiences = [
  {
    icon: Megaphone,
    period: "03/2026",
    role: "Stagiaire en Marketing Digital",
    company: "CJM Digital Agency",
    points: [
      "Création de visuels marketing à fort impact",
      "Gestion de contenus pour réseaux sociaux",
      "Participation aux campagnes digitales",
      "Analyse des performances des publications",
      "Contribution à la stratégie digitale globale",
    ],
    tag: "Marketing",
  },
  {
    icon: Code2,
    period: "07/2025 – 09/2025",
    role: "Stagiaire en Développement Web",
    company: "Vision Pub",
    points: [
      "Conception d'une plateforme multi-entreprise de gestion des congés",
      "Modélisation UML : cas d'utilisation, classes, séquence",
      "Élaboration d'une base de données centralisée",
      "Développement front-end et back-end complet",
    ],
    tag: "Développement",
  },
  {
    icon: Briefcase,
    period: "07/2024 – 09/2024",
    role: "Stagiaire Analyste Concepteur",
    company: "Vision Pub",
    points: [
      "Analyse des besoins client et conception fonctionnelle",
      "Création des diagrammes UML détaillés",
      "Rédaction du cahier de charges et du plan de travail",
    ],
    tag: "Analyse",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Expérience"
      title="Un parcours entre technique et stratégie"
      description="Des expériences professionnelles concrètes au croisement du génie logiciel, de l'analyse système et du marketing digital."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:-translate-x-px" />
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={exp.role}
              className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-start ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
                  {exp.period}
                </span>
                <h3 className="mt-2 text-2xl font-display font-bold text-foreground">{exp.role}</h3>
                <p className="mt-1 text-muted-foreground">{exp.company}</p>
              </div>
              <div className="pl-12 md:pl-0">
                <div className="rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                      <exp.icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-primary">{exp.tag}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
