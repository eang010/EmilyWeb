import Reveal from "@/components/Reveal";
import WorkExperienceTree from "@/components/WorkExperienceTree";

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          About
        </h1>
        <div>
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-muted px-5 py-2.5 text-sm font-medium"
          >
            Download CV
          </a>
          <p className="mt-2 text-xs text-foreground/40">
            Placeholder link — add the real PDF at public/resume.pdf
          </p>
        </div>
      </div>

      <Reveal className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          About me
        </h2>
        <p className="mt-4 max-w-2xl text-foreground/70">
          Placeholder — a short paragraph on who you are, what you care about,
          and how you approach business analysis and design.
        </p>
      </Reveal>

      <WorkExperienceTree />

      <Reveal className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Tools
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Figma", "Notion", "Jira", "SQL", "Miro", "Confluence"].map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-muted px-4 py-1.5 text-sm text-foreground/70"
            >
              {tool}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Education
        </h2>
        <ul className="mt-4 space-y-6">
          {[1, 2].map((i) => (
            <Reveal
              key={i}
              as="li"
              delay={i * 0.08}
              className="flex flex-wrap justify-between gap-2 border-b border-muted pb-6"
            >
              <div>
                <p className="font-medium">Placeholder Degree {i}</p>
                <p className="text-sm text-foreground/60">Placeholder Institution {i}</p>
              </div>
              <p className="font-mono text-xs text-foreground/40">20XX</p>
            </Reveal>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
