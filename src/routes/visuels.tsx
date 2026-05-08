import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Image as ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { visuals } from "@/data/visuals";

export const Route = createFileRoute("/visuels")({
  head: () => ({
    meta: [
      { title: "Galerie de visuels — WANDJA Joyce" },
      {
        name: "description",
        content:
          "Sélection de visuels créés pour les pages clients lors de mon stage chez CJM Digital Agency.",
      },
      { property: "og:title", content: "Galerie de visuels — WANDJA Joyce" },
      {
        property: "og:description",
        content:
          "Création graphique pour réseaux sociaux : publications, flyers et templates.",
      },
    ],
  }),
  component: VisuelsPage,
});

function VisuelsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + visuals.length) % visuals.length)),
    [],
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % visuals.length)),
    [],
  );

  useEffect(() => {
    if (activeIndex === null) return;
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
  }, [activeIndex, close, prev, next]);

  const active = activeIndex !== null ? visuals[activeIndex] : null;

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

        <header className="mt-8 max-w-3xl">
          <span className="inline-block text-xs font-mono uppercase tracking-wider text-primary">
            Galerie · Création visuelle
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold">
            Visuels créés <span className="text-gradient">pour les pages clients</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Sélection de visuels conçus durant mon stage chez CJM Digital Agency, pour
            l'animation des pages Facebook et Instagram des clients de l'agence.
          </p>
        </header>

        {visuals.length === 0 && (
          <div className="mt-12 rounded-3xl border border-dashed border-border bg-gradient-card p-10 text-center">
            <ImageIcon className="mx-auto h-10 w-10 text-primary" />
            <p className="mt-4 font-display font-semibold">Aucun visuel pour le moment</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Déposez vos images dans <code className="text-primary">src/assets/visuels/</code> — la galerie se met à jour automatiquement.
              <br />
              Astuce : nommez vos fichiers <code className="text-primary">publication_xxx.jpg</code>, <code className="text-primary">story_xxx.png</code>, <code className="text-primary">flyer_xxx.webp</code> pour catégoriser automatiquement.
            </p>
          </div>
        )}

        <section className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visuals.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setActiveIndex(i)}
              className="group text-left overflow-hidden rounded-3xl border border-border bg-gradient-card hover:border-primary/40 hover:shadow-elegant transition-all"
            >
              <div className="relative aspect-square flex items-center justify-center overflow-hidden">
                {v.src ? (
                  <img
                    src={v.src}
                    alt={v.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent" />
                    <ImageIcon className="relative h-12 w-12 text-primary-foreground/70 group-hover:scale-110 transition-transform" />
                  </>
                )}
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-primary">
                    {v.category}
                  </div>
                  <h3 className="mt-1 font-display font-semibold">{v.title}</h3>
                </div>
                <span className="text-xs text-muted-foreground">Voir</span>
              </div>
            </button>
          ))}
        </section>

        <p className="mt-10 text-center text-xs text-muted-foreground italic">
          Galerie auto-mise à jour : déposez vos images dans <code className="text-primary">src/assets/visuels/</code>.
        </p>
      </main>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
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
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full aspect-square sm:aspect-video max-h-[75vh] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 via-accent/20 to-background border border-white/10 flex items-center justify-center">
              {active.src ? (
                <img src={active.src} alt={active.title} className="h-full w-full object-contain" />
              ) : (
                <ImageIcon className="h-24 w-24 text-white/40" />
              )}
            </div>
            <figcaption className="mt-4 text-center">
              <div className="text-[11px] font-mono uppercase tracking-wider text-primary">
                {active.category}
              </div>
              <div className="mt-1 font-display font-semibold text-white">
                {active.title}
              </div>
              <div className="mt-1 text-xs text-white/50">
                {(activeIndex ?? 0) + 1} / {visuals.length}
              </div>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
