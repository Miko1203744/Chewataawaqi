import Image from "next/image"
import { Button } from "@/components/ui/button"

export function EventsSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 bg-green-700">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <p className="text-lg text-white mb-6">
            Our expert team crafts unforgettable experiences tailored to your unique vision. From corporate gatherings
            to social celebrations, we handle every detail with precision and creativity.
          </p>
          <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
            Learn More
          </Button>
        </div>
        <div className="col-span-1 space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Corporate Events</h3>
            <p className="text-gray-600">Elevate your business gatherings with our professional touch.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Social Celebrations</h3>
            <p className="text-gray-600">Create lasting memories with our expertly planned social events.</p>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            src="/event.jpg?height=400&width=600"
            alt="Event Planning"
            width={600}
            height={400}
            className="rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

