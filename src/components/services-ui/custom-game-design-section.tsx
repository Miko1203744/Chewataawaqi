import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CustomGameDesignSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="section-title text-3xl md:text-5xl font-bold text-primary mb-8">Custom Game Design</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 order-1 lg:order-1">
          <p className="text-lg text-gray-600 mb-6">
            Bring your unique game ideas to life with our innovative custom game design services. We combine creativity
            with technical expertise to create engaging, one-of-a-kind experiences.
          </p>
          <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
            Start Creating
          </Button>
        </div>
        <div className="col-span-1 order-3 lg:order-2">
          <Image
            src="/custom.png?height=400&width=600"
            alt="Custom Game Design"
            width={600}
            height={400}
            className="rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
          />
        </div>
        <div className="col-span-1 space-y-4 order-2 lg:order-3">
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Digital Games</h3>
            <p className="text-gray-600">Innovative digital experiences for various platforms.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Physical Games</h3>
            <p className="text-gray-600">Unique tabletop and real-world game experiences.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

