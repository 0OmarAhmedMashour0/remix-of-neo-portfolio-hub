import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { TechStack } from "@/components/portfolio/TechStack";
import { About } from "@/components/portfolio/About";
import { Timeline } from "@/components/portfolio/Timeline";
import { Projects } from "@/components/portfolio/Projects";
import { Contact, SocialDock } from "@/components/portfolio/Contact";

const title = "Omar Ahmed Mashour — MERN Stack Developer";
const description =
  "Portfolio of Omar Ahmed Mashour, MERN stack developer building React interfaces and Node.js, Express and MongoDB APIs with JWT authentication.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <SocialDock />
      <footer className="border-t border-border px-5 py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Omar Ahmed Mashour — built with React & Tailwind CSS
      </footer>
    </div>
  );
}
