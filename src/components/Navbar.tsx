"use client";

import { useEffect, useMemo, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    updateTheme();

    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme") updateTheme();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isSolid = variant === "solid" || (isOverlay && scrolled);

  const wrapperClassName = useMemo(() => {
    const base =
      "fixed top-0 left-0 right-0 z-30 px-6 md:px-16 py-5 transition-colors duration-300";
    if (!isSolid) return `${base} bg-transparent`;
    return `${base} bg-background/90 backdrop-blur border-b border-foreground/10 shadow-sm`;
  }, [isSolid]);

  const linkClassName = useMemo(() => {
    return isSolid
      ? "text-foreground/80 hover:text-foreground transition-colors"
      : "text-white/90 hover:text-white transition-colors";
  }, [isSolid]);

  const logoClassName = useMemo(() => {
    return isSolid
      ? "font-display text-xl font-semibold tracking-wide text-foreground"
      : "font-display text-xl font-semibold tracking-wide text-white";
  }, [isSolid]);

  const iconButtonClassName = useMemo(() => {
    return isSolid
      ? "relative grid place-items-center h-10 w-10 rounded-full bg-light border border-foreground/10 text-gold hover:brightness-95 transition"
      : "relative grid place-items-center h-10 w-10 rounded-full bg-white/10 backdrop-blur border border-white/15 text-gold hover:bg-white/15 transition-colors";
  }, [isSolid]);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <header className={wrapperClassName}>
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <a href="/" className={logoClassName}>
          Panto
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm">
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

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={iconButtonClassName}
          >
            {isDark ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5 text-gold"
              >
                <path
                  d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M19 5l-1.6 1.6M6.6 17.4 5 19M19 19l-1.6-1.6M6.6 6.6 5 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5 text-gold"
              >
                <path
                  d="M21 13.2A7.4 7.4 0 0 1 10.8 3a6.8 6.8 0 1 0 10.2 10.2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

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
      </div>
    </header>
  );
}
