import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCover from "@/components/ProjectCover";
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
    <article>
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
        <h1 className="text-[15px] font-medium">{project.title}</h1>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-quiet underline underline-offset-4 hover:text-foreground"
          >
            {project.url.includes("github.com") ? "View on GitHub" : "Visit live site"}
          </a>
        )}
      </div>
      <p className="mt-2 text-[13px] text-quiet">{project.tags.join(" · ")}</p>

      <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-3">
        <section>
          <h2 className="text-[15px] font-medium">Product &amp; problem</h2>
          <p className="mt-3 text-[15px] leading-relaxed">{project.problem}</p>
        </section>
        <section>
          <h2 className="text-[15px] font-medium">My role</h2>
          <p className="mt-3 text-[15px] leading-relaxed">{project.role}</p>
        </section>
        <section>
          <h2 className="text-[15px] font-medium">Decisions</h2>
          <ul className="mt-3 space-y-3 text-[15px] leading-relaxed">
            {project.decisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-10 max-w-2xl">
        <h2 className="text-[15px] font-medium">Outcome</h2>
        <p className="mt-3 text-[15px] leading-relaxed">{project.outcome}</p>
      </section>

      <hr className="mt-12 border-hairline" />

      <div className="mt-10">
        <ProjectCover slug={project.slug} />
      </div>

      <p className="mt-8 text-[13px] text-quiet">
        <Link href="/" className="underline underline-offset-4 hover:text-foreground">
          All projects
        </Link>
      </p>
    </article>
  );
}
