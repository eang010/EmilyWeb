import Link from "next/link";
import Avatar from "@/components/Avatar";
import GetInTouch from "@/components/GetInTouch";
import TrustedByMarquee from "@/components/TrustedByMarquee";

export default function Home() {
  return (
    <div className="-mb-[calc(7rem+env(safe-area-inset-bottom))] flex h-[100svh] max-h-[100svh] flex-col overflow-hidden px-6 pt-[calc(3.75rem+env(safe-area-inset-top))] pb-[calc(5.75rem+env(safe-area-inset-bottom))] sm:pt-8 sm:pb-[calc(7.5rem+env(safe-area-inset-bottom))] [@media(max-height:700px)]:pt-[calc(3.25rem+env(safe-area-inset-top))] [@media(max-height:700px)]:pb-[calc(5.25rem+env(safe-area-inset-bottom))]">
      <section className="mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col justify-center [@media(max-height:700px)]:justify-start">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5 [@media(max-height:700px)]:gap-2">
          <Avatar size={72} className="size-14 sm:size-[72px] [@media(max-height:700px)]:size-12" />
          <div>
            <p className="font-mono text-sm text-accent">Emily Ang</p>
            <h1 className="text-[clamp(1.625rem,6.5vw,3.75rem)] font-medium tracking-tight sm:text-6xl [@media(max-height:700px)]:text-[clamp(1.5rem,7vw,2rem)]">
              Digital Business Analyst
            </h1>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-base text-foreground/70 sm:mt-6 sm:text-lg [@media(max-height:700px)]:mt-3 [@media(max-height:700px)]:text-sm">
          Placeholder positioning line — one sentence on the mechanism that
          makes your work distinct, to be replaced with real copy.
        </p>
        <div className="mt-6 flex max-w-full flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:flex-wrap [@media(max-height:700px)]:mt-4 [@media(max-height:700px)]:gap-2">
          <Link
            href="/works"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
          >
            See the work
          </Link>
          <GetInTouch variant="outline" />
        </div>
      </section>

      <footer className="mx-auto w-full max-w-5xl shrink-0 sm:pb-2">
        <TrustedByMarquee />
      </footer>
    </div>
  );
}
