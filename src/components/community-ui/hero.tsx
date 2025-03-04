import type React from "react";
import Image from "next/image";

export function CommunityHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-green-50">
      {/* Green texture background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left side: Title and Description */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              We Build Communities That Last a Lifetime
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl">
              Experience the joy of our satisfied customers. Each memory
              captured is a testament to the unforgettable moments we've helped
              create.
            </p>
          </div>

          {/* Right side: Semi-stacked Photo Cards */}
          <div className="relative h-[500px] w-full">
            <PhotoCard
              src="/event.jpg?height=300&width=400"
              alt="Happy customer"
              caption="BGI's After Work Event"
              style={{
                transform: "rotate(-5deg)",
                top: "10%",
                left: "5%",
                zIndex: 3,
              }}
            />
            <PhotoCard
              src="/IMG_3653.jpg?height=300&width=400"
              alt="Family enjoying"
              caption="Kaza Games Event"
              style={{
                transform: "rotate(14deg)",
                top: "20%",
                left: "45%",
                zIndex: 2,
              }}
            />
            <PhotoCard
              src="/IMG_3652.jpg?height=300&width=400"
              alt="Customers enjoying our games"
              caption="Chobe Event '24"
              style={{
                transform: "rotate(4deg)",
                top: "40%",
                left: "15%",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface PhotoCardProps {
  src: string;
  alt: string;
  caption: string;
  style: React.CSSProperties;
}

function PhotoCard({ src, alt, caption, style }: PhotoCardProps) {
  return (
    <div
      className="absolute w-64 bg-white p-3 shadow-lg rounded-sm transition-transform duration-300 hover:scale-105 hover:z-10"
      style={style}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={400}
        height={300}
        className="w-full h-48 object-cover mb-2 rounded-sm"
      />
      <p className="text-sm text-gray-600">{caption}</p>
    </div>
  );
}
