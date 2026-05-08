import { T as jsxRuntimeExports } from "./worker-entry-Ck2t0dRJ.js";
import { L as Link } from "./router-CfQW7UgC.js";
import { A as ArrowLeft } from "./arrow-left-BCGefUc8.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center text-center p-8", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-display font-bold", children: "Projet introuvable" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Ce projet n'existe pas ou a été déplacé." }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
    " Retour au portfolio"
  ] })
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
