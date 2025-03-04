"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden -mt-4">
      {/* <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
        }`}
      >
        <div className="absolute inset-0 bg-green-500 opacity-10 mix-blend-multiply" />
        <div className="absolute inset-0 [background:radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
      </div> */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Level Up Your</span>
              <span className="block text-green-700">Event Experience</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 dark:text-gray-300 max-w-3xl">
              Experience immersive gaming tournaments and unforgettable events
              that bring the digital world to life.
            </p>
            <div className="mt-10 flex items-center space-x-4">
              <Button
                size="lg"
                className="rounded-full bg-green-500 hover:bg-green-600 text-white"
              >
                Join Next Event
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Explore Games
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0">
            <motion.div
              className="col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                // src="https://raw.githubusercontent.com/Zemenaytech/chewataawaqi-assets/main/Events-images/gaming-event-1.jpg"
                src="/event10.jpg"
                alt="Gaming Event"
                width={800}
                height={400}
                className="rounded-lg shadow-2xl object-cover w-full h-[230px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                // src="https://raw.githubusercontent.com/Zemenaytech/chewataawaqi-assets/main/Events-images/gaming-setup.jpg"
                src="/event3.jpg"
                alt="Gaming Setup"
                width={400}
                height={300}
                className="rounded-lg shadow-2xl object-cover w-full h-[180px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                // src="https://raw.githubusercontent.com/Zemenaytech/chewataawaqi-assets/main/Events-images/esports-team.jpg"
                src="/event8.jpg"
                alt="Esports Team"
                width={400}
                height={300}
                className="rounded-lg shadow-2xl object-cover w-full h-[180px]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-500/10 to-transparent" />
    </section>
  );
}
