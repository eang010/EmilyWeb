import { experiences } from "@/data/experience";

const tools = ["Figma", "Notion", "Jira", "SQL", "Miro", "Confluence"];

export default function About() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-[15px] font-medium">About</h1>
      <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-foreground">
        Placeholder — a short paragraph on who you are, what you care about,
        and how you approach business analysis and design.
      </p>

      <h2 className="mt-16 text-[15px] font-medium">Experience</h2>
      <ul className="mt-6">
        {experiences.map((exp) => (
          <li key={exp.role} className="border-t border-hairline py-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p className="text-[15px]">
                {exp.role}<span className="text-quiet">, {exp.company}</span>
              </p>
              <p className="text-[13px] text-quiet">{exp.period}</p>
            </div>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground">
              {exp.description}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="mt-16 text-[15px] font-medium">Tools</h2>
      <p className="mt-4 text-[15px] leading-relaxed">{tools.join(", ")}</p>

      <h2 className="mt-16 text-[15px] font-medium">Education</h2>
      <ul className="mt-6">
        {[1, 2].map((i) => (
          <li key={i} className="border-t border-hairline py-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p className="text-[15px]">
                Placeholder Degree {i}<span className="text-quiet">, Placeholder Institution {i}</span>
              </p>
              <p className="text-[13px] text-quiet">20XX</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
