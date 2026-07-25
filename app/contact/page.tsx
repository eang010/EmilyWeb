const EMAIL = "3mily.ang@gmail.com";

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
        Get in touch
      </h1>
      <p className="mt-4 max-w-xl text-foreground/70">
        Placeholder — whether it&apos;s a business engagement, a role, or just
        to say hi, this is the place to reach out.
      </p>

      <div className="mt-12 space-y-4">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-block rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
        >
          {EMAIL}
        </a>
        <p className="text-xs text-foreground/40">
          Add LinkedIn/other links here when ready.
        </p>
      </div>
    </div>
  );
}
