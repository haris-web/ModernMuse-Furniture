import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageSection from "@/components/PageSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Contact"
        subtitle="Questions about products, delivery, or recommendations? We’ll help you find the right fit."
        imageSrc="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Modern workspace style interior with minimal decor"
      />

      <PageSection eyebrow="GET IN TOUCH" title="We’d love to hear from you">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <form
            className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-8"
            action="#"
            method="post"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className="text-sm text-foreground/80">
                Full name
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </label>
              <label className="text-sm text-foreground/80">
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm text-foreground/80">
              Subject
              <input
                name="subject"
                type="text"
                placeholder="How can we help?"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </label>

            <label className="mt-5 block text-sm text-foreground/80">
              Message
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your space..."
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gold resize-none"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-dark px-6 py-3 text-sm font-medium text-white hover:brightness-110 transition"
            >
              Send message
            </button>
          </form>

          <aside className="rounded-2xl bg-light border border-gray-100 p-6 md:p-8">
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
              CONTACT
            </div>
            <div className="mt-3 text-base font-semibold text-foreground">
              Support hours
            </div>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Mon–Fri: 9:00–18:00
              <br />
              Sat: 10:00–14:00
            </p>

            <div className="mt-6 text-base font-semibold text-foreground">
              Email
            </div>
            <a
              href="mailto:support@panto.example"
              className="mt-2 block text-sm text-foreground/80 hover:text-gold transition-colors"
            >
              support@panto.example
            </a>

            <div className="mt-6 text-base font-semibold text-foreground">
              Phone
            </div>
            <a
              href="tel:+10000000000"
              className="mt-2 block text-sm text-foreground/80 hover:text-gold transition-colors"
            >
              +1 (000) 000-0000
            </a>

            <div className="mt-6 text-base font-semibold text-foreground">
              Quick links
            </div>
            <div className="mt-3 flex flex-col gap-2">
              {[
                { label: "Shop", href: "/shop" },
                { label: "Furniture", href: "/furniture" },
                { label: "About Us", href: "/about" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </PageSection>

      <Footer />
    </main>
  );
}

