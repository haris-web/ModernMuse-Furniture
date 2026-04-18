import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageSection from "@/components/PageSection";
import ShopCatalog from "@/components/ShopCatalog";

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Shop"
        subtitle="Browse best-selling pieces curated for modern, minimal interiors."
        imageSrc="https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Modern living room interior with neutral furniture"
      />

      <PageSection eyebrow="PRODUCTS" title="Best picks for your space">
        <ShopCatalog />
      </PageSection>

      <Footer />
    </main>
  );
}
