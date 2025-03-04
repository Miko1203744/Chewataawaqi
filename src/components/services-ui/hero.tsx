import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden  py-20 md:py-32">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 mb-6 animate-fade-in-up">
              Elevate Your Events
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in-up delay-100">
              From corporate gatherings to custom game experiences, we bring
              your vision to life with unparalleled expertise and creativity.
            </p>
            <div className="animate-fade-in-up delay-200">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg transform transition-all hover:scale-105"
              >
                Discover Our Services
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative animate-fade-in-left">
            <Image
              src="/exp.jpg?height=600&width=800"
              alt="Event Management Hero"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl transform transition-all hover:scale-105"
            />
            <div className="absolute inset-0 bg-green-200 rounded-lg opacity-20 blur-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
