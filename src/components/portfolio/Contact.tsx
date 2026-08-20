import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { EMAIL, LINKEDIN, GITHUB } from "@/components/portfolio/data";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in every field.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your mail app…");
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-neon/60";

  return (
    <section id="contact" className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs tracking-widest text-neon uppercase">05 / contact</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let&apos;s build something</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Open to internships, junior MERN roles and freelance work. Drop a message and I&apos;ll
            get back to you.
          </p>

          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-neon" />
              <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-neon">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-neon" />
              <a href="tel:+201090745097" className="transition-colors hover:text-neon">
                +20 109 074 5097
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 text-neon" />
              Zagazig, El Sharkia, Egypt
            </li>
          </ul>

          <div className="mt-8 flex gap-3">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="glass rounded-full p-3 transition-all hover:-translate-y-1 hover:border-neon/60 hover:text-neon"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="glass rounded-full p-3 transition-all hover:-translate-y-1 hover:border-neon/60 hover:text-neon"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Send an email"
              className="glass rounded-full p-3 transition-all hover:-translate-y-1 hover:border-neon/60 hover:text-neon"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-6 sm:p-8">
          <div>
            <label htmlFor="name" className="font-mono text-xs text-muted-foreground">
              name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={`mt-1.5 ${inputClass}`}
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-xs text-muted-foreground">
              email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`mt-1.5 ${inputClass}`}
            />
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-xs text-muted-foreground">
              message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project…"
              className={`mt-1.5 resize-none ${inputClass}`}
            />
          </div>
          <button
            type="submit"
            className="neon-glow inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" />
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export function SocialDock() {
  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-3">
      <a
        href={LINKEDIN}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="glass rounded-full p-3 transition-all hover:-translate-y-1 hover:border-neon/60 hover:text-neon"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        href={GITHUB}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="glass rounded-full p-3 transition-all hover:-translate-y-1 hover:border-neon/60 hover:text-neon"
      >
        <Github className="h-4 w-4" />
      </a>
      <a
        href={`mailto:${EMAIL}`}
        aria-label="Email"
        className="glass rounded-full p-3 transition-all hover:-translate-y-1 hover:border-neon/60 hover:text-neon"
      >
        <Mail className="h-4 w-4" />
      </a>
    </div>
  );
}
