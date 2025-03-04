"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpRight, Target, Compass, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CompanyInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-36 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              What is <span className="text-green-800">Chewata Awaqi</span>
              <br />
              Really All About?
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-lg text-muted-foreground mb-6">
              Chewata Awaqi is more than just a company. We're a team of
              innovators, dreamers, and doers committed to revolutionizing the
              way people interact with technology. Our goal is to create
              solutions that not only solve problems but also bring joy and
              simplicity to everyday life.
            </p>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="group">
                  Learn More
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Our Story</DialogTitle>
                </DialogHeader>
                <div className="mt-6 text-muted-foreground">
                  <p>
                    From our humble beginnings to our current position as
                    industry innovators, Chewata Awaqi has always been driven by
                    a passion for positive change. We believe in the power of
                    technology to transform lives and businesses, and we're
                    committed to leading that transformation.
                  </p>
                  <p className="mt-4">
                    Our journey is about more than just creating great products;
                    it's about building a community of forward-thinkers who
                    share our vision for a more connected, efficient, and
                    enjoyable world.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Values",
              icon: Target,
              color: "bg-blue-100",
              description:
                "Integrity, innovation, and customer-centricity form the core of our values. We believe in doing right by our clients, pushing boundaries, and always putting the user first.",
            },
            {
              title: "Our Mission",
              icon: Compass,
              color: "bg-green-100",
              description:
                "To empower individuals and businesses with intuitive, efficient, and joyful technology solutions that enhance their daily lives and operations.",
            },
            {
              title: "Our Vision",
              icon: Eye,
              color: "bg-purple-100",
              description:
                "A world where technology seamlessly integrates with human needs, fostering a more connected, productive, and harmonious global community.",
            },
          ].map((item, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-4`}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
