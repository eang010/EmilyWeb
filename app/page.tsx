import Link from "next/link";
import Avatar from "@/components/Avatar";
import GetInTouch from "@/components/GetInTouch";
import TrustedByMarquee from "@/components/TrustedByMarquee";

export default function Home() {
  return (
    <div>
      <section className="mx-auto flex min-h-[85vh] max-w-5xl flex-col justify-center px-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
          <Avatar size={72} />
          <div>
            <p className="font-mono text-sm text-accent">Emily Ang</p>
            <h1 className="text-3xl font-medium tracking-tight sm:text-6xl">
              Digital Business Analyst
            </h1>
          </div>
        </div>
        <p className="mt-6 max-w-xl text-lg text-foreground/70">
          Placeholder positioning line — one sentence on the mechanism that
          makes your work distinct, to be replaced with real copy.
        </p>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/works"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
          >
            See the work
          </Link>
          <GetInTouch variant="outline" />
        </div>
      </section>

      <footer className="mx-auto max-w-5xl px-6 pb-16">
        <TrustedByMarquee />
      </footer>
    </div>
  );
}
