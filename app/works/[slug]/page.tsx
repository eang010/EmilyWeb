import Link from "next/link";
import { notFound } from "next/navigation";
import GetInTouch from "@/components/GetInTouch";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <Link href="/works" className="text-sm text-foreground/50">
        ← Back to works
      </Link>

      <div className="mt-6 flex aspect-video items-center justify-center rounded-2xl bg-muted/40 text-sm text-foreground/40">
        Project image placeholder
      </div>

      <div className="mt-8 mb-2 flex flex-wrap gap-2 font-mono text-xs text-foreground/50">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-muted px-5 py-2.5 text-sm font-medium"
          >
            {project.url.includes("github.com") ? "View on GitHub" : "Visit live site"} ↗
          </a>
        )}
      </div>

      <section className="mt-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Product &amp; problem
        </h2>
        <p className="mt-3 text-foreground/70">{project.problem}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          My role &amp; contribution
        </h2>
        <p className="mt-3 text-foreground/70">{project.role}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Key design decisions
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/70">
          {project.decisions.map((decision) => (
            <li key={decision}>{decision}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 border-b border-muted pb-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Outcome
        </h2>
        <p className="mt-3 text-foreground/70">{project.outcome}</p>
      </section>

      <div className="mt-10">
        <p className="mb-3 text-foreground/70">Interested in working together?</p>
        <GetInTouch />
      </div>
    </div>
  );
}
