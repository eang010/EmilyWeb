import Link from "next/link";
import Avatar from "@/components/Avatar";
import GetInTouch from "@/components/GetInTouch";
import TrustedByMarquee from "@/components/TrustedByMarquee";

export default function Home() {
  return (
    <div>
      <section className="mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-6 pt-[calc(4.5rem+env(safe-area-inset-top))] pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:min-h-[85svh] sm:px-6 sm:pt-0 sm:pb-0">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
          <Avatar size={72} className="size-14 sm:size-[72px]" />
          <div>
            <p className="font-mono text-sm text-accent">Emily Ang</p>
            <h1 className="text-[clamp(1.75rem,6.5vw,3.75rem)] font-medium tracking-tight sm:text-6xl">
              Digital Business Analyst
            </h1>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-base text-foreground/70 sm:mt-6 sm:text-lg">
          Placeholder positioning line — one sentence on the mechanism that
          makes your work distinct, to be replaced with real copy.
        </p>
        <div className="mt-6 flex max-w-full flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
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
