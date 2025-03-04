import { ArrowUpRight, Zap, Shield, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description:
      "Optimize your digital presence with our high-speed solutions, ensuring your users experience seamless interactions.",
  },
  {
    icon: Shield,
    title: "Unbreakable Security",
    description:
      "Protect your data and users with our state-of-the-art security measures, giving you peace of mind in the digital landscape.",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description:
      "Grow your business without limits using our scalable infrastructure, designed to evolve with your needs.",
  },
]

export function Services() {
  return (
    <section className="py-24 bg-green-700 ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-6xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl text-white">
            Empower your business with our cutting-edge solutions. We offer a range of services designed to elevate your
            digital presence and drive success.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 ">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group bg-white">
              <div className="absolute inset-0 " />
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-green-500" />
                </div>
                <CardTitle className="text-3xl text-green-600">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button variant="outline" className="group text-green-700 border-white hover:bg-white hover:text-gray-600">
                  Get Started
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

