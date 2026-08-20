const STACK = [
  { name: "MongoDB", hint: "Schema & aggregation" },
  { name: "Express.js", hint: "REST APIs" },
  { name: "React", hint: "Component UI" },
  { name: "Node.js", hint: "Server runtime" },
  { name: "Redux", hint: "State management" },
  { name: "Tailwind CSS", hint: "Design systems" },
];

const MARQUEE = [
  "JavaScript ES6+",
  "Mongoose",
  "JWT Auth",
  "REST APIs",
  "MySQL",
  "PHP / Laravel",
  "Bootstrap",
  "Git & GitHub",
  "Postman",
  "OOP",
  "Data Structures",
  "Algorithms",
];

export function TechStack() {
  return (
    <section id="stack" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-neon uppercase">01 / tech stack</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The tools I ship with</h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {STACK.map((item) => (
            <div
              key={item.name}
              className="glass group rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-neon/50"
            >
              <span className="font-mono text-xs text-neon">{"</>"}</span>
              <h3 className="mt-2 text-lg font-semibold transition-colors group-hover:text-neon">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.hint}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-3">
          {[...MARQUEE, ...MARQUEE].map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="glass rounded-full px-5 py-2 font-mono text-xs whitespace-nowrap text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
