import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { MarketingProjects } from "@/components/portfolio/MarketingProjects";
import { Value } from "@/components/portfolio/Value";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WANDJA Joyce — Ingénieure Génie Logiciel & Marketing Digital" },
      {
        name: "description",
        content:
          "Portfolio de WANDJA Joyce, ingénieure en génie logiciel, analyste UML, développeuse web et stratège marketing digital basée à Douala, Cameroun.",
      },
      { property: "og:title", content: "WANDJA Joyce — Tech × Marketing Digital" },
      {
        property: "og:description",
        content:
          "Conception de systèmes intelligents et de solutions digitales performantes adaptées aux entreprises africaines.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <MarketingProjects />
        <Value />
        <Contact />
      </main>
    </div>
  );
}
