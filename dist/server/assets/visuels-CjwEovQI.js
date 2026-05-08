import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-Ck2t0dRJ.js";
import { L as Link } from "./router-CfQW7UgC.js";
import { N as Navbar } from "./Navbar-C7Z-z4m4.js";
import { A as ArrowLeft } from "./arrow-left-BCGefUc8.js";
import { I as Image } from "./image-CLCx7svq.js";
import { X, C as ChevronLeft, a as ChevronRight } from "./x-BpwS8CIw.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const modules = /* @__PURE__ */ Object.assign({});
const KNOWN_CATEGORIES = ["publication", "story", "flyer", "banniere", "bannière", "post", "reel", "carrousel", "logo"];
function prettify(s) {
  return s.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim().replace(/\b\w/g, (c) => c.toUpperCase());
}
function parseName(filename) {
  const base = filename.replace(/\.[^.]+$/, "");
  const sepIdx = base.search(/[_-]/);
  if (sepIdx > 0) {
    const head = base.slice(0, sepIdx).toLowerCase();
    if (KNOWN_CATEGORIES.includes(head)) {
      return {
        category: prettify(head === "banniere" ? "bannière" : head),
        title: prettify(base.slice(sepIdx + 1)) || prettify(head)
      };
    }
  }
  return { category: "Visuel", title: prettify(base) };
}
const visuals = Object.entries(modules).sort(([a], [b]) => a.localeCompare(b)).map(([path, src], i) => {
  const filename = path.split("/").pop() || `visuel-${i + 1}`;
  const { category, title } = parseName(filename);
  return { id: i + 1, title, category, src };
});
function VisuelsPage() {
  const [activeIndex, setActiveIndex] = reactExports.useState(null);
  const close = reactExports.useCallback(() => setActiveIndex(null), []);
  const prev = reactExports.useCallback(() => setActiveIndex((i) => i === null ? i : (i - 1 + visuals.length) % visuals.length), []);
  const next = reactExports.useCallback(() => setActiveIndex((i) => i === null ? i : (i + 1) % visuals.length), []);
  reactExports.useEffect(() => {
    if (activeIndex === null) return;
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
  }, [activeIndex, close, prev, next]);
  const active = activeIndex !== null ? visuals[activeIndex] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-6 pt-32 pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        "Retour au portfolio"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mt-8 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-mono uppercase tracking-wider text-primary", children: "Galerie · Création visuelle" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 text-4xl md:text-5xl font-display font-bold", children: [
          "Visuels créés ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "pour les pages clients" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Sélection de visuels conçus durant mon stage chez CJM Digital Agency, pour l'animation des pages Facebook et Instagram des clients de l'agence." })
      ] }),
      visuals.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 rounded-3xl border border-dashed border-border bg-gradient-card p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "mx-auto h-10 w-10 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display font-semibold", children: "Aucun visuel pour le moment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
          "Déposez vos images dans ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-primary", children: "src/assets/visuels/" }),
          " — la galerie se met à jour automatiquement.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Astuce : nommez vos fichiers ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-primary", children: "publication_xxx.jpg" }),
          ", ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-primary", children: "story_xxx.png" }),
          ", ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-primary", children: "flyer_xxx.webp" }),
          " pour catégoriser automatiquement."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: visuals.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveIndex(i), className: "group text-left overflow-hidden rounded-3xl border border-border bg-gradient-card hover:border-primary/40 hover:shadow-elegant transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-square flex items-center justify-center overflow-hidden", children: v.src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: v.src, alt: v.title, className: "h-full w-full object-cover group-hover:scale-105 transition-transform" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "relative h-12 w-12 text-primary-foreground/70 group-hover:scale-110 transition-transform" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono uppercase tracking-wider text-primary", children: v.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display font-semibold", children: v.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Voir" })
        ] })
      ] }, v.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 text-center text-xs text-muted-foreground italic", children: [
        "Galerie auto-mise à jour : déposez vos images dans ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-primary", children: "src/assets/visuels/" }),
        "."
      ] })
    ] }),
    active && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in", onClick: close, role: "dialog", "aria-modal": "true", "aria-label": active.title, children: [
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative max-w-5xl w-full flex flex-col items-center", onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-square sm:aspect-video max-h-[75vh] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 via-accent/20 to-background border border-white/10 flex items-center justify-center", children: active.src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: active.src, alt: active.title, className: "h-full w-full object-contain" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-24 w-24 text-white/40" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono uppercase tracking-wider text-primary", children: active.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display font-semibold text-white", children: active.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-white/50", children: [
            (activeIndex ?? 0) + 1,
            " / ",
            visuals.length
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  VisuelsPage as component
};
