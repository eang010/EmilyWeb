/**
 * THESIS: The work is the homepage. A fixed left rail and a project grid carry the site, refusing the centered hero, floating pill nav, and a services pitch.
 * OWN-WORLD: White paper, black ink, IBM Plex Sans. EA monogram, Projects and About in the rail, LinkedIn and a mail mark bottom-left. A bento of covers with the title underneath.
 * STORY: A recruiter or client sees the work first, opens a case, and reaches Emily from the corner.
 * FIRST VIEWPORT: Monogram and nav top-left. Project covers fill the rest. Mail slides the address out to the right.
 * FORM: Pinned to pennybanks.com. Sketchbook and Services omitted.
 */
import Link from "next/link";
import ProjectCover from "@/components/ProjectCover";
import { projects } from "@/data/projects";

const tiles = [
  {
    slug: "chope",
    shape: "portrait",
    cell: "@2xl:order-1 @min-[56rem]:order-none @min-[56rem]:col-start-1 @min-[56rem]:row-start-1 @min-[56rem]:row-span-2",
  },
  {
    slug: "merlimuse",
    shape: "landscape",
    cell: "@2xl:order-3 @2xl:col-span-2 @min-[56rem]:order-none @min-[56rem]:col-start-2 @min-[56rem]:col-span-2 @min-[56rem]:row-start-1",
  },
  {
    slug: "digital-concierge",
    shape: "landscape",
    cell: "@2xl:order-4 @2xl:col-span-2 @min-[56rem]:order-none @min-[56rem]:col-start-2 @min-[56rem]:col-span-2 @min-[56rem]:row-start-2",
  },
  {
    slug: "stb-attraction-pass",
    shape: "landscape",
    cell: "@2xl:order-5 @2xl:col-span-2 @min-[56rem]:order-none @min-[56rem]:col-start-1 @min-[56rem]:col-span-2 @min-[56rem]:row-start-3",
  },
  {
    slug: "bill-splitter",
    shape: "portrait",
    cell: "@2xl:order-2 @min-[56rem]:order-none @min-[56rem]:col-start-3 @min-[56rem]:row-start-3 @min-[56rem]:row-span-2",
  },
  {
    slug: "save-the-date",
    shape: "landscape",
    cell: "@2xl:order-6 @2xl:col-span-2 @min-[56rem]:order-none @min-[56rem]:col-start-1 @min-[56rem]:col-span-2 @min-[56rem]:row-start-4",
  },
] as const;

export default function Home() {
  const bySlug = new Map(projects.map((project) => [project.slug, project]));

  return (
    <div>
      <h1 className="sr-only">Projects</h1>
      <ul className="grid grid-cols-1 gap-x-9 gap-y-9 @2xl:grid-cols-2 @min-[56rem]:grid-cols-3 @min-[56rem]:grid-rows-[22rem_22rem_22rem_22rem]">
        {tiles.map(({ slug, shape, cell }) => {
          const project = bySlug.get(slug);
          if (!project) return null;

          return (
            <li key={slug} className={`flex min-h-0 ${cell}`}>
              <Link
                href={`/works/${slug}`}
                className="group flex min-h-0 w-full flex-1 flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                <ProjectCover slug={slug} shape={shape} />
                <p className="mt-2.5 shrink-0 text-[13px] leading-tight text-foreground">
                  {project.title}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
