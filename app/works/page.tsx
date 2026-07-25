import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Works() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
        Works
      </h1>
      <p className="mt-4 max-w-xl text-foreground/70">
        Placeholder — a short intro to how you pick and approach projects.
      </p>

      <h2 className="mt-14 font-mono text-xs uppercase tracking-widest text-foreground/50">
        Spotlight
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <h2 className="mt-16 font-mono text-xs uppercase tracking-widest text-foreground/50">
        More work
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
