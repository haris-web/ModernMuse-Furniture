import Image from "next/image";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageSection from "@/components/PageSection";

const categories = [
  {
    title: "Chairs",
    desc: "Accent, dining, and lounge chairs in warm materials.",
    imageSrc:
      "https://images.pexels.com/photos/17238309/pexels-photo-17238309.jpeg",
    imageAlt: "Minimal chair detail in a modern interior",
  },
  {
    title: "Sofas",
    desc: "Soft silhouettes that keep the room feeling open.",
    imageSrc:
      "https://images.pexels.com/photos/4846109/pexels-photo-4846109.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Modern sofa with pillows in a bright interior",
  },
  {
    title: "Beds",
    desc: "Clean lines and calm tones for restful bedrooms.",
    imageSrc:
      "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Minimal bed with neutral bedding in a modern bedroom",
  },
  {
    title: "Lamps",
    desc: "Warm lighting to soften the edges of your space.",
    imageSrc:
      "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Modern floor lamp in a minimalist room",
  },
];

export default function FurniturePage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Furniture"
        subtitle="Explore categories designed for a minimalist, modern lifestyle."
        imageSrc="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Modern interior with a sofa and warm decor"
      />

      <PageSection eyebrow="CATEGORIES" title="Find your next favorite piece">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="/shop"
              className="group rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden hover:-translate-y-0.5 transition"
            >
              <div className="relative h-44 w-full bg-gray-100">
                <Image
                  src={cat.imageSrc}
                  alt={cat.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="text-base font-semibold text-foreground">
                  {cat.title}
                </div>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {cat.desc}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold">
                  Browse <span aria-hidden="true">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </PageSection>

      <section className="bg-light py-16 px-6 md:px-16">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                GUIDANCE
              </div>
              <h2 className="mt-2 font-display text-3xl font-semibold text-foreground">
                Not sure what fits your room?
              </h2>
              <p className="mt-3 text-sm text-muted leading-relaxed max-w-md">
                Tell us your style, room size, and budget — we&apos;ll recommend
                combinations that look clean and feel comfortable.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-dark px-6 py-3 text-sm font-medium text-white hover:brightness-110 transition"
              >
                Contact us
              </a>
            </div>
            <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Minimal living room corner with modern furniture"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

