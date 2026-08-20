const LINKS = [
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex max-w-4xl items-center justify-between rounded-full px-5 py-2.5">
        <a href="#home" className="font-mono text-sm font-semibold text-neon">
          omar<span className="text-foreground">.dev</span>
        </a>
        <ul className="hidden gap-6 text-sm text-muted-foreground md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-neon">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-neon/40 px-4 py-1.5 text-xs font-semibold text-neon transition-colors hover:bg-neon/10"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
