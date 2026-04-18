---
name: panto-furniture-landing
description: Build a pixel-perfect Panto-style furniture landing page in Next.js + Tailwind CSS with split components. Use this skill whenever the user asks to build a furniture website, landing page with hero/navbar/product sections, or any multi-section Next.js page with component architecture. Triggers on: "furniture landing page", "Next.js landing page", "split into components", "pixel perfect UI", "hero section with nav", "product carousel", "testimonial cards".
---
# https://www.pexels.com/ use the image search term "modern interior" for all background and card images in this project. Use `next/image` with `fill` prop for all background images, and `object-cover` for card images. Add appropriate `alt` text describing the scene (e.g. "Modern living room with minimalist furniture") for accessibility.
# Panto Furniture Landing Page — Next.js + Tailwind

Build a **pixel-perfect** furniture landing page in Next.js (App Router) + Tailwind CSS.
Split every section into its own component inside `src/components/`.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout (fonts, metadata)
│   └── page.tsx            ← Assembles all sections
├── components/
│   ├── Navbar.tsx          ← Logo + Nav links + Icon
│   ├── HeroSection.tsx     ← Full-screen bg image + heading + search
│   ├── WhyChooseUs.tsx     ← Split: heading left | 3 cards right
│   ├── BestSelling.tsx     ← Tabs + 4 product cards + auto carousel
│   ├── Experience.tsx      ← Split: image left | text right
│   ├── Materials.tsx       ← Split: text left | image grid right (opposite)
│   ├── ClientReviews.tsx   ← Centered heading + 4 review cards
│   └── Footer.tsx          ← 4-column footer
└── styles/
    └── globals.css         ← Tailwind base imports
```

---

## Design Tokens (use these consistently)

```
Colors:
  --gold:   #C9974A   (accent, stars, CTAs, "More Info" links)
  --dark:   #1a1a2e   (navbar bg, dark text, buttons)
  --light:  #f8f6f2   (section backgrounds)
  --muted:  #777777   (body text, subtitles)
  --white:  #ffffff

Fonts:
  Display: 'Playfair Display' (headings, logo)
  Body:    'DM Sans' (nav, body, cards)

Spacing rhythm:
  Section padding: py-16 px-16  (desktop)
  Card gap: gap-6
  Section gap: gap-12
```

---

## Section-by-Section Instructions

### 1. HeroSection + Navbar (combined in HeroSection.tsx)

**Layout**: Full viewport height (`min-h-screen`), single background image, dark overlay.

**Navbar** sits inside HeroSection at the top:
- LEFT: Logo ("Panto") — Playfair Display, white, text-xl
- CENTER: Nav links — Furniture, Shop, About Us, Contact — equal spacing, white, text-sm
- RIGHT: Notification/cart icon — gold circle with icon inside
- Use `flex justify-between items-center` with `absolute top-0 left-0 right-0 z-10 px-16 py-5`

**Hero content** — centered below navbar:
- Use `flex flex-col items-center justify-center text-center` with `pt-32`
- H1: "Make Your Interior More Minimalistic & Modern" — Playfair Display, text-5xl, white, font-bold
- Subheading: text-white/70, text-base, max-w-md, mt-4
- Search bar: `flex items-center bg-white/10 backdrop-blur border border-white/20 rounded-full px-6 py-3 max-w-md mt-8`
  - Input inside (transparent, white text, placeholder white/50)
  - Search button: gold bg, rounded-full, px-5 py-2, text-sm, text-white

**Background**: `relative` container with `<Image>` filling absolutely + dark overlay div (`bg-black/40 absolute inset-0`)

---

### 2. WhyChooseUs.tsx

**Layout**: `grid grid-cols-[220px_1fr] gap-16 items-start py-16 px-16`

- LEFT col: `<h2>` "Why Choosing Us" — Playfair Display, text-3xl, font-bold, leading-tight
- RIGHT col: `grid grid-cols-3 gap-8`
  - Each card:
    - `<h4>` title — text-base, font-semibold, mb-2
    - `<p>` description — text-sm, text-muted, leading-relaxed, mb-3
    - "More Info →" link — gold color, text-sm, font-medium

---

### 3. BestSelling.tsx

**Layout**: `bg-[#f8f6f2] py-16 px-16`

**Structure**:
1. Centered H2: "Best Selling Product" — Playfair Display, text-3xl
2. Filter tabs row (centered): Chair | Beds | Sofa | Lamp
   - Active tab: `bg-[#1a1a2e] text-white rounded-full px-5 py-2 text-sm`
   - Inactive: `border border-gray-300 rounded-full px-5 py-2 text-sm text-gray-500`
3. Product cards grid: `grid grid-cols-4 gap-6 mt-10`

**Product Card**:
```
bg-white rounded-2xl p-5
  - Image area: h-44 bg-gray-100 rounded-xl mb-4 (use next/image or placeholder)
  - Tag: text-xs text-gray-400 uppercase tracking-wide
  - Name: text-base font-semibold mt-1
  - Stars: gold color, text-sm, tracking-wider
  - Footer row: flex justify-between items-center
    - Price: text-lg font-semibold
    - Add btn: w-8 h-8 rounded-full bg-[#1a1a2e] text-white flex items-center justify-center text-xl cursor-pointer
```

**Auto Carousel**: Use `useEffect` + `setInterval` to auto-cycle active tab every 3 seconds. Wrap cards in a relative container with fade transition.

---

### 4. Experience.tsx

**Layout**: `grid grid-cols-2 min-h-[420px]`

- LEFT: `<div>` with background image (`bg-cover bg-center`) — full height
- RIGHT: `bg-[#f0ede8] flex flex-col justify-center px-16 py-16`
  - Tag label: "EXPERIENCES" — text-xs, gold, font-semibold, tracking-widest, uppercase, mb-4
  - H2: "We Provide You The Best Experience" — Playfair Display, text-4xl, font-bold, leading-snug, mb-5
  - Body text: text-sm, text-muted, leading-relaxed, max-w-sm, mb-6
  - "More Info →" — gold, text-sm, font-medium

---

### 5. Materials.tsx

**Layout**: `grid grid-cols-2 min-h-[420px]` — OPPOSITE of Experience (text left, images right)

- LEFT: `flex flex-col justify-center px-16 py-16`
  - Tag: "MATERIALS" — gold, uppercase, tracking-widest, text-xs
  - H2: "Very Serious Materials For Making Furniture" — Playfair Display, text-4xl, font-bold
  - Body: text-sm, text-muted, leading-relaxed, max-w-sm, mb-6
  - "More Info →"
- RIGHT: `grid grid-cols-2 grid-rows-2 gap-2 p-8`
  - First image spans `row-span-2` (tall left image)
  - Two images stack on the right
  - All images: `rounded-xl object-cover w-full h-full`

---

### 6. ClientReviews.tsx

**Layout**: `bg-[#f8f6f2] py-16 px-16`

1. Centered H2: "Our Client Reviews" — Playfair Display, text-3xl
2. Cards grid: `grid grid-cols-4 gap-6 mt-10` (or 3 on smaller screens)

**Review Card**:
```
bg-white rounded-2xl overflow-hidden
  - Top image area: h-44 bg-gray-300 (room/furniture photo)
  - Body: p-5
    - Reviewer row: flex items-center gap-3
      - Avatar circle: w-9 h-9 rounded-full bg-[#C9974A] text-white font-semibold text-sm flex items-center justify-center
      - Name: text-sm font-semibold
      - Role: text-xs text-gray-400
    - Review text: text-sm text-gray-500 leading-relaxed mt-3 mb-3
    - Stars: gold text-xs tracking-wide
```

---

### 7. Footer.tsx

**Layout**: `bg-white border-t border-gray-100 pt-14 pb-8 px-16`

**Top section**: `grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10`

- Col 1 (Brand):
  - Logo: Playfair Display, text-xl, font-bold
  - Description text: text-sm text-gray-500 mt-3 max-w-xs leading-relaxed
- Col 2: "Services" — Email Marketing, Campaigns, Branding
- Col 3: "Furniture" — Beds, Chair, All
- Col 4: "Follow Us" — Facebook, Twitter, Instagram

Each link column:
- Header: `text-sm font-semibold mb-4`
- Links: `block text-sm text-gray-400 mb-2 hover:text-[#C9974A] transition-colors`

**Bottom bar**: `flex justify-between items-center pt-6 border-t border-gray-100`
- Left: "Copyright © 2025" — text-xs text-gray-400
- Right: "Terms & Conditions · Privacy Policy" — text-xs text-gray-400

---

## Root page.tsx Assembly

```tsx
// src/app/page.tsx
import HeroSection from '@/components/HeroSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import BestSelling from '@/components/BestSelling'
import Experience from '@/components/Experience'
import Materials from '@/components/Materials'
import ClientReviews from '@/components/ClientReviews'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <BestSelling />
      <Experience />
      <Materials />
      <ClientReviews />
      <Footer />
    </main>
  )
}
```

---

## layout.tsx

```tsx
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Panto — Make Your Interior Modern',
  description: 'Premium furniture for minimalistic modern interiors',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
```

---

## globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --gold: #C9974A;
  --dark: #1a1a2e;
}

body {
  font-family: var(--font-dm-sans), sans-serif;
  color: #2d2d2d;
}

h1, h2, h3 {
  font-family: var(--font-playfair), serif;
}
```

---

## tailwind.config.ts additions

```ts
theme: {
  extend: {
    colors: {
      gold: '#C9974A',
      dark: '#1a1a2e',
    },
    fontFamily: {
      sans: ['var(--font-dm-sans)', 'sans-serif'],
      display: ['var(--font-playfair)', 'serif'],
    },
  },
},
```

---

## Key Rules

1. **Never put all code in page.tsx** — every section = its own component file
2. **Images**: Use `next/image` with `fill` prop for bg images, add `sizes` prop
3. **'use client'** only on BestSelling.tsx (needs useState/useEffect for tabs + carousel)
4. **Responsive**: All grids collapse to single column on mobile (`grid-cols-1 md:grid-cols-2`)
5. **Gold color**: Only used for accent — CTAs, stars, tag labels, "More Info" links, add button hover
6. **No inline styles** — use Tailwind classes only
7. **Carousel auto-play**: `setInterval` every 3000ms, clear on unmount with `useEffect` cleanup