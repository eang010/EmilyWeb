import WorksShowcase from "@/components/WorksShowcase";
import { projects } from "@/data/projects";

export default function Works() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
        Works
      </h1>
      <p className="mt-4 max-w-xl text-foreground/70">
        Cases I can stand behind — public-sector AI, an internal tool that
        replaced a messy process, and products people actually used.
      </p>
      <p className="mt-3 font-mono text-xs text-foreground/40">
        <span className="hidden lg:inline">
          Hover a title to inspect · Click to open the case
        </span>
        <span className="lg:hidden">
          Swipe the titles to browse · Read the case when you want the full story
        </span>
      </p>

      <WorksShowcase projects={projects} />
    </div>
  );
}
