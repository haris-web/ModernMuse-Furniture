"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import MotionHover from "@/components/MotionHover";

type Filter = "All" | "Chair" | "Beds" | "Sofa" | "Lamp";

type CatalogItem = {
  id: string;
  category: Exclude<Filter, "All">;
  name: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
};

const filters: Filter[] = ["All", "Chair", "Beds", "Sofa", "Lamp"];

const items: CatalogItem[] = [
  {
    id: "s1",
    category: "Chair",
    name: "Sakarias Armchair",
    price: 392,
    imageSrc:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Modern chair with wooden legs in a bright interior",
  },
  {
    id: "s2",
    category: "Chair",
    name: "Baltsar Chair",
    price: 299,
    imageSrc:
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Minimal chair near a wall in a modern room",
  },
  {
    id: "s3",
    category: "Chair",
    name: "Nyantuy Chair",
    price: 921,
    imageSrc:
      "https://images.pexels.com/photos/28905723/pexels-photo-28905723.jpeg",
    imageAlt: "Minimal lounge chair in a modern interior",
  },
  {
    id: "s4",
    category: "Chair",
    name: "Anjay Chair",
    price: 519,
    imageSrc:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Dark fabric chair in a minimalist setting",
  },
  {
    id: "s5",
    category: "Sofa",
    name: "Soft Modern Sofa",
    price: 1099,
    imageSrc:
      "https://images.pexels.com/photos/4846109/pexels-photo-4846109.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Modern sofa with pillows in a bright interior",
  },
  {
    id: "s6",
    category: "Sofa",
    name: "Two-Seater Sofa",
    price: 749,
    imageSrc:
      "https://images.pexels.com/photos/4846107/pexels-photo-4846107.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Small sofa in a cozy minimal living room",
  },
  {
    id: "s7",
    category: "Sofa",
    name: "Minimal Sectional",
    price: 1299,
    imageSrc:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Minimal living room with sofa and modern decor",
  },
  {
    id: "s8",
    category: "Sofa",
    name: "Cushion Sofa",
    price: 899,
    imageSrc:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Modern lounge area with minimalist furniture",
  },
  {
    id: "s9",
    category: "Beds",
    name: "Nordic Bed Frame",
    price: 849,
    imageSrc:
      "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Minimal bed with neutral bedding in a modern bedroom",
  },
  {
    id: "s10",
    category: "Beds",
    name: "Oak Platform Bed",
    price: 999,
    imageSrc:
      "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Minimal modern bedroom with a platform bed",
  },
  {
    id: "s11",
    category: "Beds",
    name: "Soft Linen Bed",
    price: 699,
    imageSrc:
      "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Cozy bed with textured blanket in a bright bedroom",
  },
  {
    id: "s12",
    category: "Beds",
    name: "Comfort Bed Set",
    price: 579,
    imageSrc:
      "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Bed with pillows and warm tones in a modern interior",
  },
  {
    id: "s13",
    category: "Lamp",
    name: "Arc Floor Lamp",
    price: 189,
    imageSrc:
      "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Modern floor lamp in a minimalist room",
  },
  {
    id: "s14",
    category: "Lamp",
    name: "Warm Table Lamp",
    price: 79,
    imageSrc:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Table lamp with warm light on a wooden surface",
  },
  {
    id: "s15",
    category: "Lamp",
    name: "Pendant Lamp",
    price: 129,
    imageSrc:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Minimal pendant lamp hanging in a modern interior",
  },
  {
    id: "s16",
    category: "Lamp",
    name: "Classic Desk Lamp",
    price: 59,
    imageSrc:
      "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Modern lamp in a minimal living room corner",
  },
];

export default function ShopCatalog() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-muted">
          Showing{" "}
          <span className="text-foreground font-medium">
            {filteredItems.length}
          </span>{" "}
          items
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={
                  isActive
                    ? "rounded-full bg-dark px-5 py-2 text-sm text-white"
                    : "rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-gray-600 hover:bg-light transition"
                }
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <MotionHover key={item.id} className="h-full">
            <article className="h-full rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
              <div className="relative h-44 w-full overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-xs text-gray-400 uppercase tracking-wide">
                {item.category}
              </div>
              <div className="mt-1 text-base font-semibold text-foreground">
                {item.name}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-lg font-semibold text-foreground">
                  ${item.price}
                </div>
                <button
                  type="button"
                  className="h-9 w-9 rounded-full bg-dark text-white grid place-items-center text-lg hover:brightness-110 transition"
                  aria-label={`Add ${item.name} to cart`}
                >
                  +
                </button>
              </div>
            </article>
          </MotionHover>
        ))}
      </div>
    </div>
  );
}
