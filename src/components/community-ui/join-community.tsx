import { Button } from "@/components/ui/button"

export  function JoinCommunity() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">Join Our Thriving Community Today!</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Be part of something special. Connect with fellow enthusiasts, participate in exciting events, and create
          unforgettable memories.
        </p>
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
        >
          Sign Up Now
        </Button>
      </div>
    </section>
  )
}

