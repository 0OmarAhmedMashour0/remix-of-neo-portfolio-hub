import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail } from "lucide-react";
import cvAsset from "@/assets/cv.pdf.asset.json";

const LINES = [
  "> npm start portfolio --stack mern",
  "{",
  '  "name": "Omar Ahmed Mashour",',
  '  "role": "MERN Stack Developer",',
  '  "stack": ["MongoDB", "Express", "React", "Node"],',
  '  "focus": ["REST APIs", "JWT Auth", "Data Modeling"],',
  '  "open_to": "Internships & Junior roles"',
  "}",
];

function useTypewriter(lines: string[]) {
  const [done, setDone] = useState<string[]>([]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    let line = 0;
    let char = 0;
    const id = setInterval(() => {
      if (line >= lines.length) return;
      char += 1;
      setCurrent(lines[line]!.slice(0, char));
      if (char >= lines[line]!.length) {
        const finished = lines[line]!;
        setDone((prev) => [...prev, finished]);
        setCurrent("");
        line += 1;
        char = 0;
      }
    }, 26);
    return () => clearInterval(id);
  }, [lines]);

  return { done, current };
}

export function Hero() {
  const { done, current } = useTypewriter(LINES);

  return (
    <section id="home" className="relative overflow-hidden px-5 pt-28 pb-20 sm:px-8 lg:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-neon/20 blur-[110px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-neon-soft">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-neon" />
            available for internships
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-bold sm:text-6xl">
            Building fast, secure <span className="neon-text">MERN</span> products end to end.
          </h1>

          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            I&apos;m Omar Ahmed Mashour, a Computer Engineering student at Zagazig University
            (expected 2027) and a MERN stack developer. I turn ideas into full-stack web apps —
            React interfaces on the front, Node, Express and MongoDB on the back.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={cvAsset.url}
              download="Omar_Ahmed_Mashour_CV.pdf"
              className="neon-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:border-neon/60 hover:text-neon"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="glass animate-float-slow rounded-2xl p-1 shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-destructive/80" />
            <span className="h-3 w-3 rounded-full bg-chart-4/80 [background:oklch(0.8_0.15_85)]" />
            <span className="h-3 w-3 rounded-full bg-neon/80" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">omar@portfolio: ~</span>
          </div>
          <pre className="min-h-[280px] overflow-x-auto rounded-xl bg-background/70 p-5 font-mono text-[13px] leading-6 text-neon-soft">
            {done.map((line) => (
              <div key={line}>{line}</div>
            ))}
            <div>
              {current}
              <span className="animate-blink">▋</span>
            </div>
          </pre>
        </div>
      </div>

      <a
        href="#stack"
        className="relative mx-auto mt-16 flex w-fit items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-neon"
      >
        scroll <ArrowDown className="h-3.5 w-3.5" />
      </a>
    </section>
  );
}
