export type Project = {
  slug: string;
  title: string;
  type: string;
  blurb: string;
  tags: string[];
  problem: string;
  role: string;
  decisions: string[];
  outcome: string;
  url?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "merlimuse",
    title: "MerliMUSE",
    type: "AI",
    blurb: "An LLM-based multi-agent writing assistant for drafting budget papers.",
    tags: ["GovTech AI Champions Bootcamp", "2024"],
    problem:
      "Drafting budget papers is slow and repetitive for public officers, and most LLM tools require prompt-crafting skill that gets in the way of everyday adoption.",
    role: "Built as a proof of concept for the GovTech AI Champions Bootcamp, showcased at Innovation Day for Public Officers 2024.",
    decisions: [
      "Eliminated prompt crafting entirely — parameters are predefined in the backend so users just focus on content",
      "Delivered an end-to-end drafting flow — initial input, tailored feedback, final draft — in just four clicks",
      "Designed for the everyday public officer: prioritised simplicity, adaptability, and inclusivity over configurability",
    ],
    outcome:
      "A proof of concept that significantly boosted drafting productivity with little to no learning curve, integrating smoothly into existing workflows.",
  },
  {
    slug: "digital-concierge",
    title: "Digital Concierge",
    type: "AI",
    blurb: "A handsfree, GenAI-powered concierge for the Singapore Visitor Centre.",
    tags: ["STB", "GenAI", "2023"],
    problem:
      "Assessing whether Generative AI could meaningfully support Singapore's tourism industry, with no existing playbook for speech-driven visitor interactions.",
    role: "Part of the task force pioneering STB's Generative AI exploration — a proof of concept built in partnership with Google, building on their talking character project.",
    decisions: [
      "Combined speech-to-text and text-to-speech with crafted character backstories and prompt engineering for richer, contextual responses",
      "Added chat history logging and user disclaimers to keep the experience responsible and transparent",
      "Integrated STB's Tourism Information and Services Hub API with OpenAI to turn structured POI data into human-readable narratives",
    ],
    outcome:
      "A successful POC that surfaced concrete strengths and limitations of Google PaLM 2, OpenAI, LangChain, and Vext — setting the foundation for STB's later GenAI initiatives.",
  },
  {
    slug: "stb-attraction-pass",
    title: "STB Corporate Attraction Pass Portal",
    type: "Internal Tool",
    blurb: "A self-service portal that replaced a manual HR booking process.",
    tags: ["STB", "Power Platform"],
    problem:
      "STB's Corporate Attraction Pass process relied on manual HR coordination, creating unnecessary overhead for a routine, recurring request.",
    role: "Designed and developed the self-service system end to end using Microsoft Power Platform (Power Apps, Power Automate, and SharePoint).",
    decisions: [
      "Chose a low-code Power Platform build to move fast without a dedicated development team",
      "Automated the manual coordination steps that previously required direct HR action",
      "Prioritised an intuitive, self-service flow over feature breadth",
    ],
    outcome:
      "A self-service portal that cut manual coordination and improved cost efficiency for a previously manual HR process.",
    featured: true,
  },
  {
    slug: "bill-splitter",
    title: "Bill Splitter",
    type: "Web App",
    blurb: "A personal productivity PWA for splitting bills fairly, item by item.",
    tags: ["Side project", "PWA"],
    problem:
      "Splitting a shared bill fairly — with tax, discounts, and who-ordered-what — is a small but recurring source of friction after group meals.",
    role: "Designed and built solo, end to end, as a passion project to practice and showcase UX and product thinking outside of work.",
    decisions: [
      "Let people assign individual items rather than just splitting the total evenly",
      "Built tax and discount handling into the core flow instead of as an afterthought",
      "Shipped as an installable PWA so it's usable at the table without an app store detour",
    ],
    outcome:
      "A working productivity tool actively used at group meals, live at bill-splitter-v3.netlify.app.",
    url: "https://bill-splitter-v3.netlify.app/home",
    featured: true,
  },
  {
    slug: "save-the-date",
    title: "Save the Date",
    type: "Web App",
    blurb: "A bespoke wedding website built as a gift for a close friend.",
    tags: ["Side project"],
    problem:
      "A couple needed one place for guests to find RSVP details, the event schedule, and their story — without it feeling like a generic wedding-site template.",
    role: "Designed and built as a personal gift for a close friend's wedding, handling everything from concept to launch as part of an unofficial campaign for Best Maid of Honor.",
    decisions: [
      "Built RSVP management and event schedules as functional tools, not just static pages",
      "Wove in a love-story timeline and dress code guidance so guests had everything in one place",
      "Balanced sentimentality with clean UX so the site stayed easy for guests of all ages to use",
    ],
    outcome:
      "A live wedding site guests actually used to RSVP and stay informed, at whyx-savethedate.netlify.app.",
    url: "https://whyx-savethedate.netlify.app/",
  },
  {
    slug: "chope",
    title: "Chope",
    type: "Full-Stack App",
    blurb: "A mobile-first PWA for workplace colleagues to give away spare items and reserve what they want.",
    tags: ["{build} Hackathon 2026", "Solo project", "PWA"],
    problem:
      "Office colleagues constantly have spare items worth passing on — extra snacks, stationery, a spare seat at an event — with no lightweight way to offer them around or claim one before it's gone.",
    role: "Solo-built end to end for {build} Hackathon 2026 — sole author across all 46 commits, from the data model and auth through to the full giveaway/chope UI and PWA install flow, over about a week.",
    decisions: [
      "Kept auth intentionally lightweight — email lookup against a seeded users table plus localStorage — instead of a full OAuth/IdP integration, matching the hackathon's scope and timeline",
      "Modeled reservations as their own table decrementing a listing's remaining quantity, so multiple colleagues can each claim a unit of the same giveaway",
      "Built the Singapore office-culture voice ('lobang', 'chope', 'lah') into the product itself rather than treating copy as an afterthought",
      "Shipped as an installable PWA (Serwist service worker + manifest) so colleagues could add it to their home screen without an app store",
    ],
    outcome:
      "A fully working four-tab app — Home, Lobang (browse), Give Away, My Stuff — backed by real Supabase data, with image upload (including iOS HEIC handling), auto-archiving expired listings, and an installable PWA.",
    url: "https://github.com/eang010/chope_v2",
    featured: true,
  },
];
