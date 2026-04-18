import MotionInView from "@/components/MotionInView";

const services = ["Email Marketing", "Campaigns", "Branding"];
const furniture = [
  { label: "Beds", href: "/furniture" },
  { label: "Chair", href: "/furniture" },
  { label: "All", href: "/shop" },
];
const socials = ["Facebook", "Twitter", "Instagram"];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-14 pb-8 px-6 md:px-16">
      <MotionInView className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
          <div>
            <div className="font-display text-xl font-bold text-foreground">
              Panto
            </div>
            <p className="mt-3 max-w-xs text-sm text-gray-500 leading-relaxed">
              The advantage of hiring a workspace with us is that it gives you
              comfortable service and all-around facilities.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold mb-4 text-foreground">
              Services
            </div>
            {services.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm text-gray-400 mb-2 hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div>
            <div className="text-sm font-semibold mb-4 text-foreground">
              Furniture
            </div>
            {furniture.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-gray-400 mb-2 hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div>
            <div className="text-sm font-semibold mb-4 text-foreground">
              Follow Us
            </div>
            {socials.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm text-gray-400 mb-2 hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-t border-gray-100 pt-6">
          <div className="text-xs text-gray-400">Copyright © 2025</div>
          <div className="text-xs text-gray-400">
            <a href="#" className="hover:text-gold transition-colors">
              Terms &amp; Conditions
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </MotionInView>
    </footer>
  );
}
