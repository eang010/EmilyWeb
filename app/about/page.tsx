import gtLogo from "@/components/images/GTlogo.gif";
import meHeadshot from "@/components/images/me-hs.jpg";
import ncsLogo from "@/components/images/ncs_logo.avif";
import SkeletonImage from "@/components/SkeletonImage";
import ToolsMarquee from "@/components/ToolsMarquee";
import { experiences } from "@/data/experience";

const education = [
  {
    credential: "Bachelor of Engineering (BE), Electrical and Electronics Engineering",
    school: "Nanyang Technological University Singapore",
    period: "2016 — 2019",
  },
  {
    credential: "Specialist Diploma, Counselling Psychology",
    school: "ACC Institute of Human Services",
    period: "2020 — 2021",
  },
  {
    credential: "Diploma, Audio and Visual Technology",
    school: "Ngee Ann Polytechnic",
    period: "2013 — 2016",
  },
];

export default function About() {
  return (
    <div className="about-page py-12 px-6 sm:pl-10 sm:pr-32 lg:py-16 lg:pl-16 lg:pr-48">
      <h1 className="scroll-reveal text-[15px] font-medium">About</h1>
      <div className="mt-10 grid gap-10 @2xl:grid-cols-[minmax(0,48rem)_auto] @2xl:items-start @2xl:justify-between @2xl:gap-x-16">
        <SkeletonImage
          src={meHeadshot}
          alt="Emily Ang"
          priority
          sizes="(min-width: 42rem) 288px, 100vw"
          wrapperClassName="scroll-reveal w-full rounded-2xl @2xl:col-start-2 @2xl:row-start-1 @2xl:w-72"
          className="h-auto w-full rounded-2xl"
        />
        <div className="min-w-0 max-w-3xl">
          <p className="scroll-reveal text-[15px] leading-relaxed text-foreground">
            Hello! I&apos;m Emily.
            <svg
              viewBox="0 0 40 40"
              aria-hidden="true"
              className="ml-1.5 inline-block h-[1.55em] w-[1.55em] rotate-[-8deg] align-[-0.32em]"
            >
              <path
                d="M21.2 5.4c-5.2-1.1-11.4 1.6-13.6 7.4-2.4 6.2-.6 12.6 4.2 16.2 4.6 3.4 11.2 4.2 16.2 1.4 5.4-3 7.8-9.6 6.2-15.2-1.4-4.8-6.2-8.6-11.2-9.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.6 6.8c-1.6.5-3.4 1.8-4.2 3.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <path
                d="M14.6 17.2c.2-.9 1.5-1.1 1.9-.1.3.7-.4 1.5-1.2 1.4-.7-.1-.9-.7-.7-1.3M23.4 16.2c.15-.85 1.45-.7 1.7.25.2.75-.45 1.4-1.15 1.3-.65-.1-.75-.85-.55-1.55"
                fill="currentColor"
              />
              <path
                d="M14.2 24.2c1.2 2.2 3.6 3.8 6.6 4.1 2.6.2 5.1-.8 6.8-2.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.15"
                strokeLinecap="round"
              />
            </svg>
          </p>
          <p className="scroll-reveal mt-5 text-[15px] leading-relaxed text-foreground">
            I&apos;m drawn to problems that make me think
          </p>
          <div className="scroll-reveal mt-6 h-px w-8 bg-foreground" aria-hidden="true" />
          <p className="scroll-reveal mt-6 text-display text-foreground">
            “there has to be
            <br />
            a better way.”
          </p>
          <div className="mt-10 space-y-5 text-[15px] leading-[1.65] text-pretty text-foreground">
            <p className="scroll-reveal">
              Most of the time, that turns into me making something, whether it&apos;s a quick automation or a whole digital experience that takes a bit of hassle out of someone&apos;s day, especially my own.
            </p>
            <p className="scroll-reveal">
              Sometimes I&apos;ll just watch how someone works and wonder why it&apos;s done that way, and whether it has to be. Once I spot the friction, I want to get rid of it.
            </p>
            <p className="scroll-reveal">
              Shoutout to AI for speeding all of this up. It's part of how I plan, test and build, and it helps me turn ideas into something real in half the time.
            </p>
            <p className="scroll-reveal">
              I think technology should make life easier,
              <span className="mt-2 block font-medium">and I'm happiest when something I've made gives someone a bit of their time back.</span>
            </p>
          </div>
        </div>
      </div>

      <h2 className="scroll-reveal mt-16 text-[15px] font-medium">Experience</h2>
      <div className="scroll-reveal mt-6 flex items-center gap-10">
        <SkeletonImage src={gtLogo} alt="GovTech" className="h-11 w-auto" />
        <SkeletonImage src={ncsLogo} alt="NCS" className="h-6 w-auto" />
      </div>
      <ul className="mt-6">
        {experiences.map((exp) => (
          <li key={exp.role} className="scroll-reveal border-t border-hairline py-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p className="text-[15px]">
                {exp.role}<span className="text-quiet">, {exp.company}</span>
              </p>
              <p className="text-[13px] text-quiet">{exp.period}</p>
            </div>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-foreground">
              {exp.description.map((part) =>
                part.accent ? (
                  <span key={part.text} className="font-medium">
                    {part.text}
                  </span>
                ) : (
                  part.text
                ),
              )}
            </p>
          </li>
        ))}
      </ul>

      <div className="scroll-reveal">
        <h2 className="mt-16 text-[15px] font-medium">Tools</h2>
        <ToolsMarquee />
      </div>

      <h2 className="scroll-reveal mt-16 text-[15px] font-medium">Education</h2>
      <ul className="mt-6">
        {education.map((item) => (
          <li key={item.school} className="scroll-reveal border-t border-hairline py-6">
            <div className="flex items-baseline justify-between gap-x-6">
              <p className="min-w-0 text-[15px]">
                {item.credential}
                <span className="mt-1 block text-quiet">{item.school}</span>
              </p>
              <p className="shrink-0 text-[13px] text-quiet">{item.period}</p>
            </div>
          </li>
        ))}
      </ul>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function () {
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
          if (CSS.supports("animation-timeline", "view()")) return;
          var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-shown");
              observer.unobserve(entry.target);
            });
          }, { rootMargin: "0px 0px -10% 0px", threshold: 0.2 });
          document.querySelectorAll(".about-page .scroll-reveal").forEach(function (node) {
            node.classList.add("scroll-reveal-js");
            observer.observe(node);
          });
        })();`,
        }}
      />
    </div>
  );
}
