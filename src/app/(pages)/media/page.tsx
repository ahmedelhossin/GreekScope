// "use client";
import { GalleryImages } from "@/data/GalleryImages";
import Image from "next/image";
import React from "react";



export default function CultureGalleryPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        المعرض اليوناني
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GalleryImages.map((img, idx) => {
          // Example: make one image portrait (taller)
          const isTall = img === "Acropolis.avif"; // Example: Delphi.avif as portrait
          return (
            <div
              key={idx}
              className={`relative w-full overflow-hidden rounded-lg shadow-lg ${isTall ? "row-span-2 h-128" : "h-64"
                }`}
            >
              <Image
                src={`/${img}`}
                alt={img}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
