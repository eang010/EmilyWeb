import { trustedBy } from "@/data/trustedBy";

export default function TrustedByMarquee() {
  const items = [...trustedBy, ...trustedBy];

  return (
    <div className="overflow-hidden py-6">
      <p className="mb-4 text-center font-mono text-xs uppercase tracking-widest text-foreground/50">
        Trusted by
      </p>
      <div className="flex w-max animate-marquee gap-8">
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap rounded-full border border-muted px-5 py-2 text-sm text-foreground/70"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
