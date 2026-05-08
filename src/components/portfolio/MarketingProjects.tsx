import { Section } from "./Section";
import { Link } from "@tanstack/react-router";
import { TrendingUp, Image as ImageIcon, Megaphone, Sparkles, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface MProject {
  icon: LucideIcon;
  title: string;
  context: string;
  actions: string[];
  results: { label: string; value: string }[];
}

const projects: MProject[] = [
  {
    icon: Megaphone,
    title: "Gestion de pages — Stage CJM Digital Agency",
    context: "Durant mon stage chez CJM Digital Agency, j'ai eu en charge la gestion de plusieurs pages clients sur Facebook et Instagram.",
    actions: [
      "Animation quotidienne des pages confiées",
      "Création de visuels et publications adaptées",
      "Planification du calendrier éditorial",
      "Suivi des interactions et reporting simple",
    ],
    results: [
      { label: "Pages gérées", value: "Plusieurs" },
      { label: "Régularité", value: "Quotidienne" },
      { label: "Engagement", value: "En hausse" },
    ],
  },
  {
    icon: ImageIcon,
    title: "Création de visuels & supports digitaux",
    context: "Conception de visuels pour les réseaux sociaux et supports de communication des clients accompagnés en stage.",
    actions: [
      "Visuels pour publications Facebook & Instagram",
      "Flyers et bannières simples",
      "Templates réutilisables pour les pages",
      "Respect de l'identité visuelle de chaque marque",
    ],
    results: [
      { label: "Cohérence", value: "✓" },
      { label: "Outils", value: "Canva" },
      { label: "Livraison", value: "Régulière" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Community management & contenu",
    context: "Accompagnement quotidien des communautés des pages clients : modération, réponses et idées de contenu.",
    actions: [
      "Réponses aux commentaires et messages",
      "Propositions d'idées de publications",
      "Stories et contenus interactifs",
      "Échanges réguliers avec l'équipe CJM",
    ],
    results: [
      { label: "Réactivité", value: "Quotidienne" },
      { label: "Posture", value: "Professionnelle" },
      { label: "Apprentissage", value: "Terrain" },
    ],
  },
];

export function MarketingProjects() {
  return (
    <Section
      id="marketing"
      eyebrow="Projets Marketing"
      title="Des marques qui gagnent en visibilité"
      description="Stratégie, création et community management — des résultats mesurables au service de la croissance."
    >
      <div className="grid lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-7 hover:border-primary/40 hover:shadow-elegant transition-all hover:-translate-y-2"
          >
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-display font-bold text-foreground">{p.title}</h3>

              <div className="mt-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-primary">Contexte</div>
                <p className="mt-1 text-sm text-muted-foreground">{p.context}</p>
              </div>

              <div className="mt-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-primary">Actions</div>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {p.actions.map((a) => (
                    <li key={a} className="flex gap-2">
                      <Sparkles className="h-3.5 w-3.5 mt-1 text-primary shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-border bg-background/30 p-3">
                {p.results.map((r) => (
                  <div key={r.label} className="text-center">
                    <div className="font-display text-lg font-bold text-gradient">{r.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <Link
          to="/visuels"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
        >
          Voir la galerie de visuels
          <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="text-center text-xs text-muted-foreground italic max-w-xl">
          Expériences acquises lors de mon stage chez CJM Digital Agency. Les visuels des marques accompagnées sont anonymisés par respect de la confidentialité.
        </p>
      </div>
    </Section>
  );
}
