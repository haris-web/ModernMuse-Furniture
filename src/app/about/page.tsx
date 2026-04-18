import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageSection from "@/components/PageSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="About Panto"
        subtitle="We design furniture that feels calm, modern, and made to last — with materials, comfort, and craft at the center."
        imageSrc="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Minimal modern living room with warm neutral furniture"
      />

      <PageSection eyebrow="OUR STORY" title="Minimal design, maximum comfort">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <p className="text-sm md:text-base text-muted leading-relaxed">
            Panto was created to make modern interiors feel effortless. We focus
            on quiet forms, thoughtful proportions, and warm materials — so your
            space stays clean, inviting, and functional.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "Craft", value: "Detail-first builds" },
              { label: "Materials", value: "Responsible sourcing" },
              { label: "Comfort", value: "Everyday usability" },
              { label: "Support", value: "Friendly guidance" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                  {item.label}
                </div>
                <div className="mt-2 text-base font-semibold text-foreground">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <section className="bg-light py-16 px-6 md:px-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Design-led",
              desc: "A modern aesthetic that stays timeless across seasons.",
            },
            {
              title: "Quality you feel",
              desc: "Premium finishes and durable construction for daily life.",
            },
            {
              title: "Simple delivery",
              desc: "Clear timelines, careful packaging, and easy setup.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-base font-semibold text-foreground">
                {card.title}
              </div>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {card.desc}
              </p>
              <a
                href="/shop"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold hover:opacity-80 transition-opacity"
              >
                Explore products <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

