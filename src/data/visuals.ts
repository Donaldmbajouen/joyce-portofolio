// 👉 Pour ajouter un visuel à la galerie :
// 1. Déposez l'image dans `src/assets/visuels/` (formats : jpg, jpeg, png, webp, avif, gif).
// 2. C'est tout — la galerie est mise à jour AUTOMATIQUEMENT au prochain rechargement.
//
// 💡 Catégorie & titre dérivés du nom de fichier :
//   - Préfixez le fichier par la catégorie suivie d'un tiret bas, ex :
//       publication_promo-ete.jpg     → catégorie "Publication", titre "Promo ete"
//       story_lancement.png           → catégorie "Story",       titre "Lancement"
//       flyer_soiree.webp             → catégorie "Flyer",       titre "Soiree"
//   - Sans préfixe, la catégorie par défaut est "Visuel".

export interface Visual {
  id: number;
  title: string;
  category: string;
  src: string;
}

// Auto-import de toutes les images du dossier `src/assets/visuels/`.
const modules = import.meta.glob(
  "../assets/visuels/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP,AVIF,GIF}",
  { eager: true, import: "default", query: "?url" },
) as Record<string, string>;

const KNOWN_CATEGORIES = ["publication", "story", "flyer", "banniere", "bannière", "post", "reel", "carrousel", "logo"];

function prettify(s: string) {
  return s
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function parseName(filename: string): { category: string; title: string } {
  const base = filename.replace(/\.[^.]+$/, "");
  const sepIdx = base.search(/[_-]/);
  if (sepIdx > 0) {
    const head = base.slice(0, sepIdx).toLowerCase();
    if (KNOWN_CATEGORIES.includes(head)) {
      return {
        category: prettify(head === "banniere" ? "bannière" : head),
        title: prettify(base.slice(sepIdx + 1)) || prettify(head),
      };
    }
  }
  return { category: "Visuel", title: prettify(base) };
}

export const visuals: Visual[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src], i) => {
    const filename = path.split("/").pop() || `visuel-${i + 1}`;
    const { category, title } = parseName(filename);
    return { id: i + 1, title, category, src };
  });
