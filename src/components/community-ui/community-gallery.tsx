"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// List of image sources
const imageSources = [
  "/event.jpg",
  "/exp.jpg",
  "/one.jpg",
  "/two.jpg",
  "/three.jpg",
  "/four.jpg",
];

// Function to generate gallery items
const generateGalleryItems = (count: number) => {
  const spans = [
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2",
  ];

  const items = [];

  for (let i = 0; i < count; i++) {
    const type = "image"; // Only using images for now
    const span = spans[Math.floor(Math.random() * spans.length)];
    const src = imageSources[i % imageSources.length]; // Rotate through images

    items.push({
      type,
      src,
      alt: `Community item ${i + 1}`,
      span,
    });
  }

  return items;
};

export function CommunityGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [galleryItems, setGalleryItems] = useState(generateGalleryItems(30));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scrollSpeed = 0.5; // Pixels per frame
    let currentScroll = 0;

    const animate = () => {
      currentScroll += scrollSpeed;
      if (currentScroll >= scrollContainer.scrollHeight / 2) {
        currentScroll = 0;
        // When we've scrolled halfway, add new items to the bottom
        setGalleryItems((prevItems) => [
          ...prevItems,
          ...generateGalleryItems(10),
        ]);
      }
      scrollContainer.scrollTop = currentScroll;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">
          Our Community
        </h2>
        <div className="relative h-[800px]">
          <div ref={scrollRef} className="h-full overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className={`${item.span} overflow-hidden rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity`}
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={galleryItems.map((item) => ({ src: item.src }))}
        index={currentIndex}
        onView={({ index }) => setCurrentIndex(index)}
      />
    </section>
  );
}