/**
 * THESIS: The work is the homepage. A fixed left rail and a project grid carry the site, refusing the centered hero, floating pill nav, and a services pitch.
 * OWN-WORLD: White paper, black ink, IBM Plex Sans. EA monogram, Projects and About in the rail, LinkedIn and a mail mark bottom-left. 16:9 covers with the title underneath.
 * STORY: A recruiter or client sees the work first, opens a case, and reaches Emily from the corner.
 * FIRST VIEWPORT: Monogram and nav top-left. Project covers fill the rest. Mail slides the address out to the right.
 * FORM: Pinned to pennybanks.com. Sketchbook and Services omitted.
 */
import Link from "next/link";
import ProjectCover from "@/components/ProjectCover";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div>
      <h1 className="sr-only">Projects</h1>
      <ul className="grid grid-cols-1 gap-x-9 gap-y-9 md:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/works/${project.slug}`}
              className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
            >
              <ProjectCover slug={project.slug} />
              <p className="mt-2.5 text-[13px] leading-tight text-foreground">
                {project.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
