import BestSelling from "@/components/BestSelling";
import ClientReviews from "@/components/ClientReviews";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Materials from "@/components/Materials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyChooseUs />
      <BestSelling />
      <Experience />
      <Materials />
      <ClientReviews />
      <Footer />
    </main>
  );
}
