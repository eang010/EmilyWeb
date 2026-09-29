import { experiences } from "@/data/experience";

const tools = ["Figma", "Notion", "Jira", "SQL", "Miro", "Confluence"];

export default function About() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-[15px] font-medium">About</h1>
      <div className="mt-10 max-w-xl">
        <p className="text-[15px] leading-relaxed text-foreground">
          I&apos;m drawn to problems that make me think
        </p>
        <div className="mt-6 h-px w-8 bg-foreground" aria-hidden="true" />
        <p className="mt-6 text-display text-foreground">
          “there has to be
          <br />
          a better way.”
        </p>
        <div className="mt-10 max-w-[38rem] space-y-5 text-[15px] leading-[1.65] text-pretty text-foreground">
          <p>
            Most of the time, that turns into me making something, whether it&apos;s a quick automation or a whole digital experience that takes a bit of hassle out of someone&apos;s day or especially my own.
          </p>
          <p>
            Sometimes I&apos;ll just watch how someone works and wonder why it&apos;s done that way, and whether it has to be. Once I spot the friction, I want to get rid of it.
          </p>
          <p>
            I think technology should make life easier,
            <span className="mt-2 block font-medium">and I'm happiest when something I've made gives someone a bit of their time back.</span>
          </p>
        </div>
      </div>

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
