import Image from "next/image";

type Review = {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  imageSrc: string;
  imageAlt: string;
};

const reviews: Review[] = [
  {
    id: "r1",
    name: "Bang Upin",
    role: "Pedagang Asongan",
    text: "Terimakasih banyak. Kini ruanganku menjadi lebih mewah dan terlihat mahal.",
    rating: 5,
    imageSrc:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Modern living room with a sofa and minimalist decor",
  },
  {
    id: "r2",
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    text: "Makasih panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah.",
    rating: 5,
    imageSrc:
      "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Minimal bedroom with neutral tones and soft lighting",
  },
  {
    id: "r3",
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak, mantap!",
    rating: 5,
    imageSrc:
      "https://images.pexels.com/photos/18789718/pexels-photo-18789718.jpeg",
    imageAlt: "Modern bedroom with warm wood accents",
  },
  {
    id: "r4",
    name: "Dimas",
    role: "Designer",
    text: "Desainnya rapi, warnanya hangat, dan kualitasnya terasa premium. Recommended!",
    rating: 5,
    imageSrc:
      "https://images.pexels.com/photos/4846109/pexels-photo-4846109.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Minimal living room with modern seating and warm tones",
  },
];

function stars(rating: number) {
  const clamped = Math.max(0, Math.min(5, Math.round(rating)));
  return "★".repeat(clamped) + "☆".repeat(5 - clamped);
}

export default function ClientReviews() {
  return (
    <section className="bg-light py-16 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
            TESTIMONIALS
          </div>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground">
            Our Client Reviews
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => {
            const initials = review.name
              .split(" ")
              .slice(0, 2)
              .map((w) => w[0])
              .join("")
              .toUpperCase();

            return (
              <article
                key={review.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="relative h-44 w-full bg-gray-200">
                  <Image
                    src={review.imageSrc}
                    alt={review.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gold text-white font-semibold text-sm grid place-items-center">
                      {initials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-foreground">
                        {review.name}
                      </div>
                      <div className="text-xs text-gray-400">{review.role}</div>
                    </div>
                  </div>

                  <p className="mt-3 mb-3 text-sm text-gray-500 leading-relaxed">
                    {review.text}
                  </p>
                  <div
                    className="text-gold text-xs tracking-wide"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {stars(review.rating)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

