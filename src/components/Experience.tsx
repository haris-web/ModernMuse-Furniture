import Image from "next/image";
import MotionInView from "@/components/MotionInView";

export default function Experience() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
      <MotionInView className="relative min-h-[320px] md:min-h-full" delay={0.05}>
        <Image
          src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Modern interior with premium furniture and soft lighting"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </MotionInView>

      <MotionInView
        className="bg-[#f0ede8] flex flex-col justify-center px-6 md:px-16 py-16"
        delay={0.1}
      >
        <div className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">
          EXPERIENCES
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold leading-snug text-foreground mb-5">
          We Provide You The Best Experience
        </h2>
        <p className="text-sm text-muted leading-relaxed max-w-sm mb-6">
          You don&apos;t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and luxurious style.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:opacity-80 transition-opacity w-fit"
        >
          More Info <span aria-hidden="true">→</span>
        </a>
      </MotionInView>
    </section>
  );
}
