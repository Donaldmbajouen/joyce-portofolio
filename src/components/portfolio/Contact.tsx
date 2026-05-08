import { Mail, Phone, ArrowRight, MapPin, Linkedin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Nouveau projet — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:joycedjomgang@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Discutons de votre projet digital"
      description="Vous avez une idée, un besoin ou une vision ? Je vous accompagne de la conception à la mise en ligne. Réponse sous 24h."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-3">
          <a
            href="mailto:joycedjomgang@gmail.com"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-gradient-card p-5 hover:border-primary/50 transition-all"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-mono uppercase tracking-wider text-primary">Email</div>
                <div className="font-medium text-foreground truncate">joycedjomgang@gmail.com</div>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all shrink-0" />
          </a>

          <a
            href="tel:+237654233311"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-gradient-card p-5 hover:border-primary/50 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-primary">Téléphone</div>
                <div className="font-medium text-foreground">+237 654 233 311</div>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all" />
          </a>

          <a
            href="https://linkedin.com/in/joyce-wandja-djomgang"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-gradient-card p-5 hover:border-primary/50 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-primary">LinkedIn</div>
                <div className="font-medium text-foreground">joyce-wandja-djomgang</div>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all" />
          </a>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/30 p-5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Yassa, Douala — Cameroun · Disponible à distance
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 rounded-3xl border border-border bg-gradient-card p-7 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] font-mono uppercase tracking-wider text-primary">Nom</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="text-[11px] font-mono uppercase tracking-wider text-primary">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="vous@email.com"
              />
            </div>
          </div>
          <div>
            <label className="text-[11px] font-mono uppercase tracking-wider text-primary">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Parlez-moi de votre projet, vos objectifs, vos délais..."
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition-transform"
          >
            <Send className="h-4 w-4" />
            {sent ? "Message envoyé — merci !" : "Envoyer mon message"}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            En cliquant, votre client mail s'ouvrira avec le message pré-rempli.
          </p>
        </form>
      </div>

      <footer className="mt-14 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} WANDJA Joyce — Tous droits réservés.</p>
        <p className="font-mono text-xs">Conçu avec passion depuis Douala 🇨🇲</p>
      </footer>
    </Section>
  );
}
