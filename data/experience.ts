// One entry per company, most recent first. Dates follow LinkedIn:
// GovTech as a single Digital Business Analyst role from Feb 2023, and
// NCS as Application Consultant across Jul 2019 – Jan 2023.
export type ExperiencePart = {
  text: string;
  accent?: boolean;
};

export const experiences: {
  role: string;
  company: string;
  period: string;
  description: ExperiencePart[];
}[] = [
  {
    role: "Digital Business Analyst",
    company: "GovTech",
    period: "Feb 2023 — Present",
    description: [
      { text: "I bridge business needs with technical solutions through " },
      { text: "user-centric design and low-code development", accent: true },
      {
        text: ", and I take work from stakeholder engagement and requirements through prototyping, testing, and implementation. Journey mapping is how I get stakeholders looking at the same workflow, so the pain points and the options are visible before we commit. With the Marketing Group, that has included VisitSingapore.com, the Singapore Tourism Awards site, and the Data Management Platform — the GCC 2.0 migration from STB Cloud, the ",
      },
      { text: "VS.com 3.0 revamp and launch", accent: true },
      { text: ", and a vendor audit that closed with " },
      { text: "zero findings", accent: true },
      { text: "." },
    ],
  },
  {
    role: "Application Consultant",
    company: "NCS Group",
    period: "Jul 2019 — Jan 2023",
    description: [
      { text: "I gathered requirements and weighed " },
      { text: "impact and cost", accent: true },
      { text: " before a change went ahead, then ran " },
      { text: "UAT sessions", accent: true },
      {
        text: " and IT briefings with the stakeholders who would use it. I translated those needs into technical requirements for the development team, wrote the operational guides, and spent time in the business so the proposal matched how they actually worked. I also developed and shipped fixes in ",
      },
      { text: "C#, ASP.NET WebForms, and MSSQL", accent: true },
      {
        text: ", and coordinated the backend around them — server set-up, batch job onboarding, enhancement and incident deployments, and downtime checks.",
      },
    ],
  },
];
