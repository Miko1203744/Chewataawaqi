import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function About() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 lg:gap-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter whitespace-nowrap text-green-700">
            About Us
          </h2>
          <div className="space-y-6 md:max-w-[50%]">
            <p className="text-lg text-gray-700">
              Chewata Awaqi is your premier destination for thrilling events,
              competitive tournaments, and innovative game services. With our
              passion for gaming and expertise in game design, we create
              unforgettable experiences that bring players together and push the
              boundaries of interactive entertainment.
            </p>
            <Button variant="outline" className="group">
              <Link href="/about">Read More</Link>
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
