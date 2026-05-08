import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { getProjectBySlug, techProjects } from "@/data/projects";

export const Route = createFileRoute("/projets/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Projet WANDJA Joyce` : "Projet";
    const description = p?.longDescription?.slice(0, 160) ?? p?.solution ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(p?.cover ? [{ property: "og:image", content: p.cover }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-display font-bold">Projet introuvable</h1>
      <p className="mt-3 text-muted-foreground">Ce projet n'existe pas ou a été déplacé.</p>
      <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground">
        <ArrowLeft className="h-4 w-4" /> Retour au portfolio
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center p-8 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData() as { project: NonNullable<ReturnType<typeof getProjectBySlug>> };
  const gallery = project.gallery ?? [];
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    [gallery.length],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % gallery.length)),
    [gallery.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  const Icon = project.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-6 pt-32 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour au portfolio
        </Link>

        <header className="mt-8 grid lg:grid-cols-[auto_1fr] gap-6 items-start">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
            <Icon className="h-8 w-8" />
          </div>
          <div>
            <span className="inline-block text-xs font-mono uppercase tracking-wider text-primary">
              Projet Tech
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold">
              {project.title}
            </h1>
            {project.context && (
              <p className="mt-3 text-muted-foreground max-w-3xl">{project.context}</p>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </header>

        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border bg-gradient-card p-6">
            <div className="text-[11px] font-mono uppercase tracking-wider text-primary">Problème</div>
            <p className="mt-2 text-sm text-muted-foreground">{project.problem}</p>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-card p-6">
            <div className="text-[11px] font-mono uppercase tracking-wider text-primary">Solution</div>
            <p className="mt-2 text-sm text-muted-foreground">{project.solution}</p>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-gradient-card p-6">
            <div className="text-[11px] font-mono uppercase tracking-wider text-primary">Valeur</div>
            <p className="mt-2 text-sm text-foreground">{project.value}</p>
          </div>
        </section>

        {project.longDescription && (
          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-display font-bold">À propos du projet</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </section>
        )}

        {project.features && project.features.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-display font-bold">Fonctionnalités clés</h2>
            <ul className="mt-6 grid md:grid-cols-2 gap-3">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 rounded-2xl border border-border bg-gradient-card p-4 text-sm text-muted-foreground"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {gallery.length > 0 && (
          <section className="mt-16">
            <div className="flex items-end justify-between flex-wrap gap-3">
              <div>
                <h2 className="text-2xl font-display font-bold">Aperçu de l'application</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Captures d'écran issues de la maquette fonctionnelle du projet.
                </p>
              </div>
              <span className="text-xs text-muted-foreground">
                {gallery.length} image{gallery.length > 1 ? "s" : ""}
              </span>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((g, i) => (
                <button
                  key={g.src}
                  onClick={() => setActive(i)}
                  className="group text-left overflow-hidden rounded-3xl border border-border bg-gradient-card hover:border-primary/40 hover:shadow-elegant transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40">
                    <img
                      src={g.src}
                      alt={g.caption}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-primary">
                      Capture {i + 1}
                    </div>
                    <div className="mt-1 text-sm font-display font-semibold">{g.caption}</div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16 flex flex-wrap gap-3">
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-105 transition-transform"
            >
              <ExternalLink className="h-4 w-4" /> Voir la démo
            </a>
          )}
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-5 py-2.5 text-sm font-semibold hover:border-primary/50 hover:text-primary transition-colors"
          >
            Discuter d'un projet similaire
          </Link>
        </section>

        <nav className="mt-20 border-t border-border pt-8">
          <div className="text-xs font-mono uppercase tracking-wider text-primary">
            Autres projets
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {techProjects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  to="/projets/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-2xl border border-border bg-gradient-card p-5 hover:border-primary/40 transition-colors"
                >
                  <div className="text-sm font-display font-semibold group-hover:text-primary transition-colors">
                    {p.title}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground line-clamp-2">{p.solution}</div>
                </Link>
              ))}
          </div>
        </nav>
      </main>

      {active !== null && gallery[active] && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure
            className="relative max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-h-[80vh] rounded-2xl overflow-hidden border border-white/10 bg-black/40 flex items-center justify-center">
              <img
                src={gallery[active].src}
                alt={gallery[active].caption}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center">
              <div className="font-display font-semibold text-white">{gallery[active].caption}</div>
              <div className="mt-1 text-xs text-white/50">
                {active + 1} / {gallery.length}
              </div>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
