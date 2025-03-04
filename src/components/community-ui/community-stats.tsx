"use client";
import { Users, Calendar, Award } from "lucide-react";
import { useState, useEffect } from "react";

const stats = [
  { label: "Active Members", value: 25000, icon: Users },
  { label: "Events Per Year", value: 500, icon: Calendar },
  { label: "Community Awards", value: 15, icon: Award },
];

// Counter Component with setInterval
const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= value) {
          clearInterval(interval);
          return value;
        }
        return prev + Math.ceil(value / 2000); // Adjust speed
      });
    }, 1); // Adjust speed

    return () => clearInterval(interval);
  }, [value]);

  return <span>{count.toLocaleString()}</span>;
};

export function CommunityStats() {
  return (
    <section className="py-24 bg-green-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 lg:mb-16">
          Impacts Created
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group p-6 lg:p-8 rounded-xl hover:bg-green-700 transition-colors"
            >
              <div className="text-center">
                <stat.icon
                  className="w-12 h-12 mx-auto mb-4 lg:mb-6 transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
                <div className="text-3xl lg:text-4xl font-bold mb-2 lg:mb-3">
                  <Counter value={stat.value} />+
                </div>
                <p className="text-lg lg:text-xl text-green-100">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
