"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import MotionHover from "@/components/MotionHover";

type Category = "Chair" | "Beds" | "Sofa" | "Lamp";

type Product = {
  id: string;
  categoryLabel: string;
  name: string;
  price: number;
  rating: number;
  imageSrc: string;
  imageAlt: string;
};

const categories: Category[] = ["Chair", "Beds", "Sofa", "Lamp"];

const products: Record<Category, Product[]> = {
  Chair: [
    {
      id: "chair-1",
      categoryLabel: "Chair",
      name: "Sakarias Armchair",
      price: 392,
      rating: 5,
      imageSrc:
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Modern chair with wooden legs in a bright interior",
    },
    {
      id: "chair-2",
      categoryLabel: "Chair",
      name: "Baltsar Chair",
      price: 299,
      rating: 4,
      imageSrc:
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Minimal chair near a wall in a modern room",
    },
    {
      id: "chair-3",
      categoryLabel: "Chair",
      name: "Anjay Chair",
      price: 519,
      rating: 5,
      imageSrc:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Dark fabric chair in a minimalist setting",
    },
    {
      id: "chair-4",
      categoryLabel: "Chair",
      name: "Nyantuy Chair",
      price: 921,
      rating: 5,
      imageSrc:
        "https://images.pexels.com/photos/28905723/pexels-photo-28905723.jpeg",
      imageAlt: "Minimal lounge chair in a modern interior",
    },
  ],
  Beds: [
    {
      id: "bed-1",
      categoryLabel: "Bed",
      name: "Nordic Bed Frame",
      price: 849,
      rating: 5,
      imageSrc:
        "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Minimal bed with neutral bedding in a modern bedroom",
    },
    {
      id: "bed-2",
      categoryLabel: "Bed",
      name: "Soft Linen Bed",
      price: 699,
      rating: 4,
      imageSrc:
        "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Cozy bed with textured blanket in a bright bedroom",
    },
    {
      id: "bed-3",
      categoryLabel: "Bed",
      name: "Oak Platform Bed",
      price: 999,
      rating: 5,
      imageSrc:
        "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Minimal modern bedroom with a platform bed",
    },
    {
      id: "bed-4",
      categoryLabel: "Bed",
      name: "Comfort Bed Set",
      price: 579,
      rating: 4,
      imageSrc:
        "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Bed with pillows and warm tones in a modern interior",
    },
  ],
  Sofa: [
    {
      id: "sofa-1",
      categoryLabel: "Sofa",
      name: "Minimal Sectional",
      price: 1299,
      rating: 5,
      imageSrc:
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Neutral seating in a modern living room",
    },
    {
      id: "sofa-2",
      categoryLabel: "Sofa",
      name: "Cushion Sofa",
      price: 899,
      rating: 4,
      imageSrc:
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Modern lounge area with minimalist furniture",
    },
    {
      id: "sofa-3",
      categoryLabel: "Sofa",
      name: "Two-Seater Sofa",
      price: 749,
      rating: 4,
      imageSrc:
        "https://images.pexels.com/photos/4846107/pexels-photo-4846107.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Small sofa in a cozy minimal living room",
    },
    {
      id: "sofa-4",
      categoryLabel: "Sofa",
      name: "Soft Modern Sofa",
      price: 1099,
      rating: 5,
      imageSrc:
        "https://images.pexels.com/photos/4846109/pexels-photo-4846109.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Modern sofa with pillows in a bright interior",
    },
  ],
  Lamp: [
    {
      id: "lamp-1",
      categoryLabel: "Lamp",
      name: "Arc Floor Lamp",
      price: 189,
      rating: 5,
      imageSrc:
        "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Modern floor lamp in a minimalist room",
    },
    {
      id: "lamp-2",
      categoryLabel: "Lamp",
      name: "Warm Table Lamp",
      price: 79,
      rating: 4,
      imageSrc:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Table lamp with warm light on a wooden surface",
    },
    {
      id: "lamp-3",
      categoryLabel: "Lamp",
      name: "Pendant Lamp",
      price: 129,
      rating: 5,
      imageSrc:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Minimal pendant lamp hanging in a modern interior",
    },
    {
      id: "lamp-4",
      categoryLabel: "Lamp",
      name: "Classic Desk Lamp",
      price: 59,
      rating: 4,
      imageSrc:
        "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Modern lamp in a minimal living room corner",
    },
  ],
};

function Stars({ rating }: { rating: number }) {
  const stars = useMemo(() => {
    const clamped = Math.max(0, Math.min(5, Math.round(rating)));
    return Array.from({ length: 5 }, (_, i) => (i < clamped ? "★" : "☆"));
  }, [rating]);

  return (
    <div
      className="text-gold text-sm tracking-wider leading-none"
      aria-label={`${rating} out of 5 stars`}
    >
      {stars.join("")}
    </div>
  );
}

export default function BestSelling() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [stage, setStage] = useState<"idle" | "out" | "in">("idle");

  const activeCategory = categories[activeIndex] ?? "Chair";
  const displayCategory = categories[displayIndex] ?? "Chair";
  const displayProducts = products[displayCategory] ?? [];

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % categories.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (activeIndex === displayIndex) return;

    setStage("out");
    const outId = window.setTimeout(() => {
      setDisplayIndex(activeIndex);
      setStage("in");
    }, 160);

    const inId = window.setTimeout(() => {
      setStage("idle");
    }, 420);

    return () => {
      window.clearTimeout(outId);
      window.clearTimeout(inId);
    };
  }, [activeIndex, displayIndex]);

  return (
    <section className="bg-light py-16 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-display text-3xl font-semibold text-foreground">
          Best Selling Product
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={
                  isActive
                    ? "rounded-full bg-dark px-5 py-2 text-sm text-white"
                    : "rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-500 hover:bg-white/60 transition"
                }
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="relative mt-10 min-h-[420px]">
          <div
            className={[
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
              "transition-[opacity,transform] duration-300 ease-out will-change-[opacity,transform]",
              "motion-reduce:transition-none motion-reduce:transform-none",
              stage === "out"
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0",
            ].join(" ")}
          >
            {displayProducts.map((product) => (
              <MotionHover key={product.id} className="h-full">
                <article className="h-full bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="relative h-44 w-full overflow-hidden rounded-xl bg-gray-100 mb-4">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    {product.categoryLabel}
                  </div>
                  <div className="mt-1 text-base font-semibold text-foreground">
                    {product.name}
                  </div>
                  <div className="mt-2">
                    <Stars rating={product.rating} />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-lg font-semibold text-foreground">
                      ${product.price}
                    </div>
                    <button
                      type="button"
                      aria-label={`Add ${product.name} to cart`}
                      className="h-8 w-8 rounded-full bg-dark text-white grid place-items-center text-xl hover:brightness-110 transition"
                    >
                      +
                    </button>
                  </div>
                </article>
              </MotionHover>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
