import { Section } from "./Section";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { techProjects } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projets Tech"
      title="Des solutions qui transforment des secteurs"
      description="Une sélection de projets conçus pour répondre à des problématiques réelles d'entreprises et d'utilisateurs."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {techProjects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 hover:border-primary/40 hover:shadow-elegant transition-all hover:-translate-y-2"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <p.icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-display font-bold text-foreground">{p.title}</h3>

              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="text-[11px] font-mono uppercase tracking-wider text-primary">Problème</dt>
                  <dd className="mt-1 text-muted-foreground">{p.problem}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-mono uppercase tracking-wider text-primary">Solution</dt>
                  <dd className="mt-1 text-muted-foreground">{p.solution}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-mono uppercase tracking-wider text-primary">Valeur</dt>
                  <dd className="mt-1 text-foreground">{p.value}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/projets/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:scale-105 transition-transform"
                >
                  Voir le projet
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                {p.demo && p.demo !== "#" && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-2 text-xs font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Démo
                  </a>
                )}
                {p.code && p.code !== "#" && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-2 text-xs font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
