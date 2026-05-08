// 🤖 AJOUT AUTOMATIQUE
// Dites simplement à Lovable une phrase comme :
//   « Ajoute un projet "Plateforme RH" : problème = ..., solution = ..., valeur = ..., techs = Django, React »
//   « Retire le projet ... »
// et ce fichier sera mis à jour automatiquement.
//
// Icônes : https://lucide.dev/icons
import { CalendarDays, UtensilsCrossed, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import tablebookLogin from "@/assets/tablebook/01-login.png";
import tablebookAccueil from "@/assets/tablebook/02-accueil.png";
import tablebookRestaurants from "@/assets/tablebook/03-restaurants.png";
import tablebookDetail from "@/assets/tablebook/04-detail-restaurant.png";

import vpUsecaseGlobal from "@/assets/vision-pub/01-usecase-global.png";
import vpUsecaseGerer from "@/assets/vision-pub/02-usecase-gerer-demande.png";
import vpClasse from "@/assets/vision-pub/03-diagramme-classe.png";
import vpActSoumettre from "@/assets/vision-pub/04-activite-soumettre-demande.png";
import vpActGerer from "@/assets/vision-pub/05-activite-gerer-conge.png";
import vpSeqSoumettre from "@/assets/vision-pub/06-sequence-soumettre-demande.png";
import vpSeqGerer from "@/assets/vision-pub/07-sequence-gerer-conge.png";

import cgAccueil from "@/assets/conges-app/01-accueil.jpg";
import cgAbonnement from "@/assets/conges-app/02-abonnement.png";
import cgCreation from "@/assets/conges-app/03-creation-compte.jpg";
import cgSuperAdmin from "@/assets/conges-app/04-super-admin.jpg";
import cgTableauBord from "@/assets/conges-app/05-tableau-bord-admin.jpg";
import cgPortail from "@/assets/conges-app/06-portail-employe.jpg";

export interface ProjectGalleryItem {
  src: string;
  caption: string;
}

export interface TechProject {
  slug: string;
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
  value: string;
  tech: string[];
  accent: string;
  demo?: string;
  code?: string;
  // Détail enrichi pour la page projet
  context?: string;
  longDescription?: string;
  features?: string[];
  gallery?: ProjectGalleryItem[];
  cover?: string;
}

export const techProjects: TechProject[] = [
  {
    slug: "table-book",
    icon: UtensilsCrossed,
    title: "Table Book",
    problem:
      "À Yaoundé, les nouveaux arrivants peinent à trouver un restaurant adapté à leurs goûts et à réserver une table sans devoir se déplacer ou multiplier les appels.",
    solution:
      "Une plateforme web de réservation qui centralise les restaurants de la ville, leurs spécialités, horaires, localisation et la disponibilité des tables, avec un parcours de réservation en ligne simple et rapide.",
    value:
      "Une expérience fluide pour les clients et plus de visibilité pour les restaurants locaux — la restauration camerounaise se digitalise.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
    accent: "from-primary/20 to-primary-glow/10",
    cover: tablebookAccueil,
    context:
      "Projet personnel conçu pour répondre à un besoin réel des habitants et visiteurs de Yaoundé : trouver et réserver un restaurant en quelques clics.",
    longDescription:
      "Table Book est un site web de réservation de tables dans les restaurants à Yaoundé. Le projet a été conçu pour aider les utilisateurs, notamment les nouveaux arrivants, à trouver facilement un restaurant adapté à leurs besoins grâce à des informations claires : spécialités culinaires, horaires d'ouverture, localisation et disponibilité des tables. L'application permet de rechercher des restaurants, consulter leurs informations et effectuer des réservations en ligne de manière simple et rapide. Elle vise également à améliorer la visibilité des restaurants locaux et à moderniser la gestion des réservations dans le secteur de la restauration au Cameroun.",
    features: [
      "Authentification sécurisée des utilisateurs (inscription / connexion).",
      "Page d'accueil mettant en avant les restaurants partenaires de Yaoundé.",
      "Catalogue de restaurants avec spécialités, horaires et localisation.",
      "Fiche détaillée par restaurant : présentation, menu, photos et disponibilité.",
      "Système de réservation de table en ligne, simple et rapide.",
      "Interface responsive pensée pour mobile et desktop.",
    ],
    gallery: [
      { src: tablebookLogin, caption: "Page de connexion / inscription" },
      { src: tablebookAccueil, caption: "Page d'accueil de la plateforme" },
      { src: tablebookRestaurants, caption: "Liste des restaurants disponibles" },
      { src: tablebookDetail, caption: "Page détaillée d'un restaurant" },
    ],
  },
  {
    slug: "conges-vision-pub",
    icon: Building2,
    title: "Gestion des congés — Cas Vision Pub",
    problem:
      "Vision Pub, une petite entreprise, gérait les congés de ses employés de façon manuelle, ce qui rendait difficile le suivi précis des congés, entraînait des pertes de données et affectait la productivité.",
    solution:
      "Analyse et conception complète d'un système de gestion des congés : modélisation UML détaillée (cas d'utilisation, classes, séquences, activités) avec PowerAMC, et rédaction des spécifications fonctionnelles et techniques répondant aux besoins réels de Vision Pub.",
    value:
      "Une étude rigoureuse qui automatise le processus, centralise les informations et augmente la transparence dans la gestion des congés des employés.",
    tech: ["UML", "PowerAMC", "Analyse fonctionnelle", "Modélisation"],
    accent: "from-accent/20 to-primary/10",
    cover: vpUsecaseGlobal,
    context:
      "Projet d'analyse et de conception réalisé pour Vision Pub, une petite entreprise camerounaise, afin de poser les bases d'une future application web de gestion des congés.",
    longDescription:
      "Analyse et conception complète d'un système de gestion des congés des employés pour la petite entreprise Vision Pub. Le projet comprend l'élaboration de diagrammes UML détaillés, la modélisation des processus métiers et la rédaction de spécifications fonctionnelles et techniques. L'objectif était de réaliser une analyse complète permettant de concevoir une application répondant aux besoins de l'entreprise : améliorer la gestion des congés des employés en automatisant le processus, en centralisant les informations et en augmentant la transparence — afin de répondre à la problématique de la mauvaise gérance des congés, qui causait des difficultés à suivre précisément les demandes, entraînait des pertes de données et affectait la productivité.",
    features: [
      "Employé — Saisie et soumission d'une demande de congé.",
      "Employé — Consultation de l'état de ses demandes (en attente, approuvée, refusée) avec possibilité d'annulation tant que la demande est en attente.",
      "Employé — Suivi de la progression de ses congés : total demandé, jours restants et jours épuisés.",
      "Administrateur — Consultation des demandes en cours et de l'historique des congés des employés.",
      "Administrateur — Validation ou refus des demandes de congé.",
      "Administrateur — Gestion des différents types de congés (payés, RTT, maladie).",
      "Administrateur — Gestion des comptes employés et envoi de notifications par email.",
    ],
    gallery: [
      { src: vpUsecaseGlobal, caption: "Diagramme de cas d'utilisation global" },
      { src: vpUsecaseGerer, caption: "Cas d'utilisation — Gérer demande de congé" },
      { src: vpClasse, caption: "Diagramme de classes" },
      { src: vpActSoumettre, caption: "Diagramme d'activité — Soumettre une demande" },
      { src: vpActGerer, caption: "Diagramme d'activité — Gérer un congé" },
      { src: vpSeqSoumettre, caption: "Diagramme de séquence — Soumettre une demande" },
      { src: vpSeqGerer, caption: "Diagramme de séquence — Gérer un congé" },
    ],
  },
  {
    slug: "conges-intelligents",
    icon: CalendarDays,
    title: "Gestion intelligente des congés",
    problem:
      "Les PME peinent à gérer les congés de leurs employés : processus manuels, erreurs de suivi, manque de visibilité sur les soldes et lenteur des validations RH.",
    solution:
      "Plateforme SaaS multi-entreprise avec workflow d'approbation, soldes automatiques, portails personnalisés employé/admin/super-admin, plans d'abonnement et notifications SMS via Twilio.",
    value:
      "Gain de temps, transparence et fiabilité dans la gestion des congés — chaque entreprise dispose de son propre espace personnalisé.",
    tech: ["Django", "Python", "HTML", "CSS", "Bootstrap", "Twilio"],
    accent: "from-primary/20 to-accent/10",
    cover: cgAccueil,
    context:
      "Application web SaaS de gestion des congés permettant à plusieurs entreprises de souscrire, créer leurs comptes et gérer indépendamment les congés de leurs employés.",
    longDescription:
      "Plateforme intelligente de gestion des congés pensée comme un service en ligne pour les entreprises. Chaque entreprise s'inscrit, choisit un plan d'abonnement, puis dispose d'un espace dédié pour gérer ses employés et leurs demandes de congés. Les employés bénéficient d'un portail personnalisé en fonction de leur entreprise, les administrateurs disposent d'un tableau de bord pour valider les demandes, et un super-administrateur supervise l'ensemble des entreprises clientes. Les notifications sont envoyées via Twilio.",
    features: [
      "Page d'accueil publique présentant la plateforme et ses bénéfices.",
      "Plans d'abonnement pour les entreprises clientes.",
      "Formulaire de création de compte par entreprise.",
      "Interface Super Admin pour superviser toutes les entreprises inscrites.",
      "Tableau de bord administrateur pour gérer employés et demandes de congés.",
      "Portail employé personnalisé selon l'entreprise et le profil de l'utilisateur.",
      "Workflow de validation des demandes (en attente, approuvée, refusée).",
      "Notifications automatiques par SMS via Twilio.",
    ],
    gallery: [
      { src: cgAccueil, caption: "Page d'accueil de la plateforme" },
      { src: cgAbonnement, caption: "Plans d'abonnement" },
      { src: cgCreation, caption: "Formulaire de création de compte d'entreprise" },
      { src: cgSuperAdmin, caption: "Interface Super Admin" },
      { src: cgTableauBord, caption: "Tableau de bord administrateur" },
      { src: cgPortail, caption: "Portail employé personnalisé" },
    ],
  },
];

export function getProjectBySlug(slug: string): TechProject | undefined {
  return techProjects.find((p) => p.slug === slug);
}
