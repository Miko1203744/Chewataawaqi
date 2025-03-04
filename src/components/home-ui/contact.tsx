import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Contact() {
  return (
    <section className="bg-green-500 py-16 px-6 md:px-12 overflow-hidden relative">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to level up your gaming experience?
            </h2>
            <p className="text-base text-white max-w-md">
              Join Chewata Awaqi for unforgettable events, tournaments, and custom game designs that will revolutionize
              your play.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Button
              asChild
              className="group bg-white text-green-500 hover:bg-green-100 hover:text-green-600 text-base py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link href="/contact">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-green-400 opacity-50 transform -skew-y-6 scale-125 z-0"></div>
    </section>
  )
}

