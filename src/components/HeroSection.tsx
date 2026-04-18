import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroHeading from "@/components/HeroHeading";

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m21 21-4.3-4.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Modern living room with minimalist furniture"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <Navbar variant="overlay" />

      <div className="relative z-[1] px-6 md:px-16 pt-28 md:pt-32">
        <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
          <HeroHeading
            title="Make Your Interior More Minimalistic & Modern"
            subtitle="Turn your room with panto into a lot more minimalist and modern with ease and speed."
          />

          <form
            className="mt-8 w-full max-w-md"
            role="search"
            action="#"
          >
            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur px-5 py-3">
              <input
                type="text"
                placeholder="Search furniture"
                aria-label="Search furniture"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-medium text-white hover:brightness-95 transition"
              >
                <SearchIcon className="h-4 w-4" />
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
