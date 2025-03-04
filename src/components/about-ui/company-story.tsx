"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowUpRight } from 'lucide-react'

export function CompanyStory() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className=" bg-background bg-green-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-5xl font-bold mb-6 text-white">
              We Put <span className="relative">
                People
                <span className="absolute bottom-0 left-0 w-full h-1 bg-white"></span>
              </span> First
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-white">
              At [Your Company Name], we believe technology should empower people and make their lives easier. Our mission is simple: to create solutions that prioritize people at every step.
            </p>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="group bg-white text-green-700">
                  Read More
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-green-700" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Our Story</DialogTitle>
                </DialogHeader>
                <div className="mt-6 text-muted-foreground">
                  <p>
                    From our beginnings as a small team with big dreams, we&apos;ve been driven by a commitment to innovation and collaboration. Our journey has been about building a company that places people at the center—whether they are team members, clients, or the communities we serve.
                  </p>
                  <p className="mt-4">
                    We focus on creating tech that genuinely makes a difference, and we&apos;re excited about continuing to shape the future, one solution at a time.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
         <div className="md:w-1/2 mt-20 mb-20">
                   <img
                     src="/event11.jpg?height=600&width=800"
                     alt="Event Management Hero"
                     width={800}
                     height={600}
                     className="rounded-lg shadow-2xl"
                   />
                 </div>
        </div>
      </div>
    </section>
  )
}
