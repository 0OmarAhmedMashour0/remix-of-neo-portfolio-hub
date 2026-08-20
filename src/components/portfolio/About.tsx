const BACKEND = [
  {
    title: "RESTful APIs",
    body: "Designing resource-based endpoints with Express.js, clean routing, validation and consistent error handling.",
  },
  {
    title: "JWT Authentication",
    body: "Token-based auth flows with protected routes, role checks, hashed credentials and refresh-friendly sessions.",
  },
  {
    title: "Database Modeling",
    body: "Mongoose schemas, relationships and indexes for MongoDB, plus relational modeling with MySQL.",
  },
];

export function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-neon uppercase">02 / about</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
          Frontend polish, backend depth
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          I&apos;m a Computer Engineering student in Zagazig, El Sharkia, deeply passionate about
          web technologies. Beyond building React interfaces, I spend most of my time on the server
          side — shaping data, protecting it, and exposing it through clean APIs.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {BACKEND.map((item) => (
            <article
              key={item.title}
              className="glass rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/50"
            >
              <h3 className="text-lg font-semibold text-neon-soft">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
