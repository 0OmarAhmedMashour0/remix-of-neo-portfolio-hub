import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/components/portfolio/data";

export function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-neon uppercase">04 / projects</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Selected work</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="glass group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-neon/50 hover:shadow-[0_24px_70px_-30px_var(--neon)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-44 w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-neon">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-neon/25 bg-neon/10 px-2.5 py-1 font-mono text-[11px] text-neon-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-neon/60 hover:text-neon"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-neon/60 hover:text-neon"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
