import Image from "next/image"
import { Button } from "@/components/ui/button"

export function GamesSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-green-50">
      <h2 className="section-title text-3xl md:text-5xl font-bold text-primary mb-8">Games Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <p className="text-lg text-gray-600 mb-6">
            Discover our extensive collection of games suitable for all ages and occasions. From classic board games to
            cutting-edge digital experiences, we have something for everyone.
          </p>
          <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-100">
            Browse Games
          </Button>
        </div>
        <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl">
            <Image
              src="/boardgames.png?height=500&width=500"
              alt="Board Games"
              width={500}
              height={500}
              className="rounded-lg mb-2"
            />
            <h3 className="text-xl font-semibold text-primary">Board Games</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl">
            <Image
              src="/videogames.jpg?height=600&width=600"
              alt="Video Games"
              width={700}
              height={700}
              className="rounded-lg mb-2"
            />
            <h3 className="text-xl font-semibold text-primary">Video Games</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl">
            <Image
              src="/outdoorgames.webp?height=500&width=500"
              alt="Outdoor Games"
              width={500}
              height={500}
              className="rounded-lg mb-2"
            />
            <h3 className="text-xl font-semibold text-primary">Outdoor Games</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl">
            <Image
              src="/partgames.jpg?height=500&width=500"
              alt="Party Games"
              width={500}
              height={500}
              className="rounded-lg mb-2"
            />
            <h3 className="text-xl font-semibold text-primary">Party Games</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

