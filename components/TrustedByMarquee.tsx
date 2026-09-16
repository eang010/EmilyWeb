import { trustedBy } from "@/data/trustedBy";

export default function TrustedByMarquee() {
  const items = [...trustedBy, ...trustedBy];

  return (
    <div className="overflow-hidden py-3 [@media(max-height:700px)]:py-2">
      <p className="mb-3 text-center font-mono text-xs uppercase tracking-widest text-foreground/50 [@media(max-height:700px)]:mb-2">
        Trusted by
      </p>
      <div className="flex w-max animate-marquee gap-6 [@media(max-height:700px)]:gap-4">
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap rounded-full border border-muted px-4 py-1.5 text-sm text-foreground/70 [@media(max-height:700px)]:px-3 [@media(max-height:700px)]:py-1 [@media(max-height:700px)]:text-xs"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
