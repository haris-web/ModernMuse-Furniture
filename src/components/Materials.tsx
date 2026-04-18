import Image from "next/image";
import MotionInView from "@/components/MotionInView";

export default function Materials() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
      <MotionInView
        className="flex flex-col justify-center px-6 md:px-16 py-16"
        delay={0.05}
      >
        <div className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">
          MATERIALS
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold leading-snug text-foreground mb-5">
          Very Serious Materials For Making Furniture
        </h2>
        <p className="text-sm text-muted leading-relaxed max-w-sm mb-6">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:opacity-80 transition-opacity w-fit"
        >
          More Info <span aria-hidden="true">→</span>
        </a>
      </MotionInView>

      <MotionInView
        className="grid grid-cols-2 grid-rows-2 gap-2 p-6 md:p-8"
        delay={0.1}
      >
        <div className="relative row-span-2 overflow-hidden rounded-xl">
          <Image
            src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Minimal living room corner with modern furniture"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="https://images.pexels.com/photos/4846109/pexels-photo-4846109.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Modern seating area with warm tones"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="https://images.pexels.com/photos/17238309/pexels-photo-17238309.jpeg"
            alt="Minimal chair detail in a modern interior"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover"
          />
        </div>
      </MotionInView>
    </section>
  );
}
