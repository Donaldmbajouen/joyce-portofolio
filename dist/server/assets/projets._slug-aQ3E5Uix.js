import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-Ck2t0dRJ.js";
import { R as Route, L as Link, t as techProjects } from "./router-CfQW7UgC.js";
import { N as Navbar } from "./Navbar-C7Z-z4m4.js";
import { A as ArrowLeft } from "./arrow-left-BCGefUc8.js";
import { E as ExternalLink } from "./external-link-C6GzxCNW.js";
import { X, C as ChevronLeft, a as ChevronRight } from "./x-BpwS8CIw.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ProjectDetailPage() {
  const {
    project
  } = Route.useLoaderData();
  const gallery = project.gallery ?? [];
  const [active, setActive] = reactExports.useState(null);
  const close = reactExports.useCallback(() => setActive(null), []);
  const prev = reactExports.useCallback(() => setActive((i) => i === null ? i : (i - 1 + gallery.length) % gallery.length), [gallery.length]);
  const next = reactExports.useCallback(() => setActive((i) => i === null ? i : (i + 1) % gallery.length), [gallery.length]);
  reactExports.useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-6 pt-32 pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        "Retour au portfolio"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mt-8 grid lg:grid-cols-[auto_1fr] gap-6 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-mono uppercase tracking-wider text-primary", children: "Projet Tech" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-4xl md:text-5xl font-display font-bold", children: project.title }),
          project.context && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-3xl", children: project.context }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: project.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground", children: t }, t)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12 grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-gradient-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono uppercase tracking-wider text-primary", children: "Problème" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: project.problem })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-gradient-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono uppercase tracking-wider text-primary", children: "Solution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: project.solution })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-primary/30 bg-gradient-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono uppercase tracking-wider text-primary", children: "Valeur" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-foreground", children: project.value })
        ] })
      ] }),
      project.longDescription && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12 max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold", children: "À propos du projet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: project.longDescription })
      ] }),
      project.features && project.features.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold", children: "Fonctionnalités clés" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 grid md:grid-cols-2 gap-3", children: project.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 rounded-2xl border border-border bg-gradient-card p-4 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
        ] }, f)) })
      ] }),
      gallery.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold", children: "Aperçu de l'application" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Captures d'écran issues de la maquette fonctionnelle du projet." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            gallery.length,
            " image",
            gallery.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: gallery.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActive(i), className: "group text-left overflow-hidden rounded-3xl border border-border bg-gradient-card hover:border-primary/40 hover:shadow-elegant transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/3] overflow-hidden bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.src, alt: g.caption, className: "h-full w-full object-cover group-hover:scale-105 transition-transform", loading: "lazy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-mono uppercase tracking-wider text-primary", children: [
              "Capture ",
              i + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-display font-semibold", children: g.caption })
          ] })
        ] }, g.src)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16 flex flex-wrap gap-3", children: [
        project.demo && project.demo !== "#" && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: project.demo, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-105 transition-transform", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" }),
          " Voir la démo"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "contact", className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-5 py-2.5 text-sm font-semibold hover:border-primary/50 hover:text-primary transition-colors", children: "Discuter d'un projet similaire" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mt-20 border-t border-border pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono uppercase tracking-wider text-primary", children: "Autres projets" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid md:grid-cols-2 gap-4", children: techProjects.filter((p) => p.slug !== project.slug).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projets/$slug", params: {
          slug: p.slug
        }, className: "group rounded-2xl border border-border bg-gradient-card p-5 hover:border-primary/40 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-display font-semibold group-hover:text-primary transition-colors", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground line-clamp-2", children: p.solution })
        ] }, p.slug)) })
      ] })
    ] }),
    active !== null && gallery[active] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in", onClick: close, role: "dialog", "aria-modal": "true", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
        e.stopPropagation();
        close();
      }, className: "absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors", "aria-label": "Fermer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
        e.stopPropagation();
        prev();
      }, className: "absolute left-3 md:left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors", "aria-label": "Précédent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
        e.stopPropagation();
        next();
      }, className: "absolute right-3 md:right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors", "aria-label": "Suivant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative max-w-6xl w-full flex flex-col items-center", onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-h-[80vh] rounded-2xl overflow-hidden border border-white/10 bg-black/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: gallery[active].src, alt: gallery[active].caption, className: "max-h-[80vh] w-auto object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-white", children: gallery[active].caption }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-white/50", children: [
            active + 1,
            " / ",
            gallery.length
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  ProjectDetailPage as component
};
