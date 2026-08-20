const ITEMS = [
  {
    period: "2025 — Present",
    title: "MERN Stack Developer (Self-driven & Freelance Projects)",
    place: "Remote",
    points: [
      "Building full-stack applications with React, Node.js, Express and MongoDB.",
      "Implementing JWT authentication, REST APIs and reusable component libraries.",
    ],
  },
  {
    period: "2025",
    title: "Web Development Training — ITI",
    place: "Information Technology Institute",
    points: [
      "Built a full-stack blog application with PHP, Laravel and MySQL.",
      "Practiced secure authentication and content management workflows.",
    ],
  },
  {
    period: "2022 — 2027 (expected)",
    title: "B.Sc. in Computer Engineering",
    place: "Zagazig University — GPA 3.0 / 4.0",
    points: [
      "Coursework: Data Structures, Algorithms, Databases, Operating Systems, Computer Networks.",
      "Hardware & systems: Logic Design, Embedded Systems, Computer Organization.",
    ],
  },
];

export function Timeline() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs tracking-widest text-neon uppercase">
          03 / experience & education
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The path so far</h2>

        <ol className="relative mt-12 border-l border-border pl-6 sm:pl-10">
          {ITEMS.map((item) => (
            <li key={item.title} className="group relative pb-10 last:pb-0">
              <span className="absolute -left-[31px] mt-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-neon transition-transform duration-300 group-hover:scale-125 sm:-left-[47px]">
                <span className="h-3.5 w-3.5 animate-ping rounded-full bg-neon/40" />
              </span>
              <div className="glass rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/50">
                <span className="font-mono text-xs text-neon">{item.period}</span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.place}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-neon">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
