import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TournamentsSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-green-50">
      <h2 className="section-title text-3xl md:text-5xl font-bold text-primary mb-8">Tournaments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <p className="text-lg text-gray-600 mb-6">
            Experience the thrill of competition with our expertly organized tournaments. From e-sports to traditional
            sports, we create engaging and fair competitions for all skill levels.
          </p>
          <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-100">
            Explore Tournaments
          </Button>
        </div>
        <div className="col-span-1 space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">E-Sports</h3>
            <p className="text-gray-600">Competitive gaming events for the digital age.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Traditional Sports</h3>
            <p className="text-gray-600">Classic competitions for sports enthusiasts.</p>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            src="/tournament.jpg?height=400&width=600"
            alt="Tournament Organization"
            width={600}
            height={400}
            className="rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

