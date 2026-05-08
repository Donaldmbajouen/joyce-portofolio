import { ArrowRight, Download, Eye, MapPin, Sparkles } from "lucide-react";
import joycePhoto from "@/assets/joyce.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-glow" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container relative mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs text-muted-foreground animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Disponible pour de nouveaux projets
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-up">
              <span className="text-foreground">WANDJA</span>{" "}
              <span className="text-gradient">Joyce</span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-primary font-medium animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Ingénieure en Génie Logiciel · Analyste UML · Développeuse Web · Marketing Digital
            </p>

            <p className="mt-5 text-lg text-muted-foreground max-w-2xl lg:mx-0 mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Je conçois des systèmes intelligents et des solutions digitales performantes adaptées aux entreprises africaines.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="/cv-joyce-wandja.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-105 transition-transform"
              >
                <Download className="h-4 w-4" />
                Télécharger mon CV
              </a>
              <a
                href="/cv-joyce-wandja.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                <Eye className="h-4 w-4 text-primary" />
                Voir le CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Voir mes projets
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                Me contacter
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-xs text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> Douala, Cameroun
              </span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Tech × Marketing × IA</span>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-[2.5rem] blur-2xl opacity-40 animate-glow" />
              <div className="absolute -inset-1 bg-gradient-primary rounded-[2rem] opacity-80" />
              <div className="relative rounded-[1.85rem] overflow-hidden border-2 border-border bg-card w-72 h-80 md:w-80 md:h-96">
                <img
                  src={joycePhoto}
                  alt="Portrait professionnel de WANDJA Joyce, ingénieure en génie logiciel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass border border-border rounded-2xl px-4 py-3 shadow-elegant">
                <div className="text-[10px] font-mono uppercase tracking-wider text-primary">Basée à</div>
                <div className="text-sm font-semibold">Douala 🇨🇲</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
