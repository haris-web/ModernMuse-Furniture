import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[320px] md:h-[360px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <Navbar variant="overlay" />
        <div className="relative z-[1] h-full px-6 md:px-16 pt-24">
          <div className="mx-auto max-w-4xl h-full flex flex-col justify-center text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white">
              {title}
            </h1>
            <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

