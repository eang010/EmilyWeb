import GetInTouch from "@/components/GetInTouch";

const services = [
  {
    label: "Ready",
    title: "Placeholder productized package",
    description:
      "Placeholder — a fixed-scope, fixed-price offering with a defined deliverable and timeline.",
    features: [
      "Placeholder deliverable one",
      "Placeholder deliverable two",
      "Placeholder deliverable three",
    ],
  },
  {
    label: "Customized",
    title: "Placeholder bespoke engagement",
    description:
      "Placeholder — an open-ended engagement scoped around a specific business or product need.",
    features: [
      "Placeholder scope area one",
      "Placeholder scope area two",
      "Placeholder scope area three",
    ],
  },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
        Services
      </h1>
      <p className="mt-4 max-w-xl text-foreground/70">
        Placeholder — a short intro to how you work with clients.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.label}
            className="rounded-2xl border border-muted p-6"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              {service.label}
            </p>
            <h2 className="mt-3 text-xl font-medium">{service.title}</h2>
            <p className="mt-2 text-sm text-foreground/70">
              {service.description}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/70">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-accent">—</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-muted pt-10">
        <p className="mb-3 text-foreground/70">
          Have a business engagement in mind?
        </p>
        <GetInTouch />
      </div>
    </div>
  );
}
