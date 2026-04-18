const features = [
  {
    title: "Luxury facilities",
    description:
      "The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities.",
  },
  {
    title: "Affordable Price",
    description:
      "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
  },
  {
    title: "Many Choices",
    description:
      "We provide many unique workspace choices so that you can choose the workspace to your liking.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6 md:px-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:gap-16 items-start">
        <h2 className="font-display text-3xl font-bold leading-tight text-foreground">
          Why
          <br />
          Choosing Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title}>
              <h4 className="text-base font-semibold mb-2 text-foreground">
                {feature.title}
              </h4>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {feature.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:opacity-80 transition-opacity"
              >
                More Info <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

