import { Section } from "./Section";
import { Lightbulb, Target, Globe2 } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Analyse & Conception",
    text: "Modélisation UML rigoureuse et architecture pensée pour la performance, la scalabilité et la maintenabilité.",
  },
  {
    icon: Target,
    title: "Vision Business",
    text: "Chaque ligne de code sert un objectif : croissance, efficacité opérationnelle et satisfaction utilisateur.",
  },
  {
    icon: Globe2,
    title: "Impact Africain",
    text: "Construire des solutions adaptées au contexte africain, pour transformer les entreprises locales en références.",
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="À propos" title="Bâtir le digital africain de demain">
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Passionnée par le génie logiciel et l'innovation, je transforme des idées complexes en{" "}
            <span className="text-foreground font-medium">systèmes digitaux robustes</span> et en applications web modernes qui apportent une valeur réelle aux entreprises.
          </p>
          <p>
            Forte d'une solide expertise en <span className="text-primary font-medium">analyse UML</span>, en conception de systèmes et en développement web, j'accompagne les organisations dans leur transformation numérique — de la modélisation initiale jusqu'au déploiement.
          </p>
          <p>
            Mon ambition : faire émerger une nouvelle génération de produits digitaux conçus en Afrique, pensés pour le marché africain, et capables de rayonner à l'international.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl border border-border bg-gradient-card p-5 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
