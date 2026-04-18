const navLinks = [
  { label: "Furniture", href: "/furniture" },
  { label: "Shop", href: "/shop" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function CartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.5 7h14l-1.5 8.5a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.6L5 4H3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 20a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8ZM16.5 20a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Navbar({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const isOverlay = variant === "overlay";
  const wrapperClassName = isOverlay
    ? "absolute top-0 left-0 right-0 z-10 px-6 md:px-16 py-5"
    : "sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-gray-100 px-6 md:px-16 py-5";

  const linkClassName = isOverlay
    ? "hover:text-white transition-colors"
    : "text-foreground/80 hover:text-foreground transition-colors";

  const logoClassName = isOverlay
    ? "font-display text-xl font-semibold tracking-wide text-white"
    : "font-display text-xl font-semibold tracking-wide text-foreground";

  const iconButtonClassName = isOverlay
    ? "relative grid place-items-center h-10 w-10 rounded-full bg-white/10 backdrop-blur border border-white/15 text-gold hover:bg-white/15 transition-colors"
    : "relative grid place-items-center h-10 w-10 rounded-full bg-light border border-gray-200 text-gold hover:bg-[#efeae0] transition-colors";

  return (
    <header className={wrapperClassName}>
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <a href="/" className={logoClassName}>
          Panto
        </a>

        <nav
          className={
            isOverlay
              ? "hidden md:flex items-center gap-10 text-sm text-white/90"
              : "hidden md:flex items-center gap-10 text-sm"
          }
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={linkClassName}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Cart"
          className={iconButtonClassName}
        >
          <CartIcon className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-white text-[10px] font-semibold grid place-items-center">
            0
          </span>
        </button>
      </div>
    </header>
  );
}
