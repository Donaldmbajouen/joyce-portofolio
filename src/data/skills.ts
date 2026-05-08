// 🤖 AJOUT AUTOMATIQUE
// Dites simplement à Lovable une phrase comme :
//   « Ajoute React niveau avancé dans Tech »
//   « Retire PHP / Laravel »
//   « Change Django en niveau Expert »
// et ce fichier sera mis à jour automatiquement.
//
// Structure d'une compétence : { icon: <LucideIcon>, name: string, level: string }
// Catégories disponibles : "Tech", "Marketing", "Outils"
// Icônes : https://lucide.dev/icons
import {
  Boxes, Database, FileCode2, Globe, Palette, Server, Sparkles, Workflow,
  Megaphone, Share2, Image as ImageIcon, Video, BarChart3, Users,
  Wrench, Github, Code,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Skill {
  icon: LucideIcon;
  name: string;
  level: string;
}

export interface SkillCategory {
  eyebrow: string;
  title: string;
  items: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    eyebrow: "Tech",
    title: "Compétences techniques",
    items: [
      { icon: Workflow, name: "UML", level: "Modélisation système" },
      { icon: Server, name: "Django", level: "Framework Python" },
      { icon: FileCode2, name: "Python", level: "Logique métier & API" },
      { icon: Code, name: "PHP / Laravel", level: "Backend web" },
      { icon: Sparkles, name: "JavaScript", level: "Interfaces dynamiques" },
      { icon: Globe, name: "HTML5", level: "Structure sémantique" },
      { icon: Palette, name: "CSS3", level: "Design responsive" },
      { icon: Database, name: "MySQL · MongoDB", level: "Bases de données" },
    ],
  },
  {
    eyebrow: "Marketing",
    title: "Compétences marketing",
    items: [
      { icon: Megaphone, name: "Marketing digital", level: "Stratégie & E-commerce" },
      { icon: Share2, name: "Réseaux sociaux", level: "Gestion & community management" },
      { icon: ImageIcon, name: "Création de visuels", level: "Identité & supports" },
      { icon: Video, name: "Montage vidéo", level: "Contenu multimédia" },
      { icon: BarChart3, name: "Analyse digitale", level: "KPIs & performance" },
      { icon: Users, name: "Compréhension utilisateur", level: "Personas & insights" },
    ],
  },
  {
    eyebrow: "Outils",
    title: "Outils & environnements",
    items: [
      { icon: Code, name: "VS Code", level: "Éditeur principal" },
      { icon: Code, name: "PyCharm", level: "IDE Python" },
      { icon: Wrench, name: "PowerAMC", level: "Modélisation UML" },
      { icon: Github, name: "GitHub", level: "Versioning & CI" },
      { icon: Boxes, name: "Architecture", level: "Systèmes scalables" },
    ],
  },
];
