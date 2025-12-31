import { HomeLandmark } from "@/interfaces/HomeLandmarksI";
import React from "react";
import Image from "next/image";

export default function LandmarkCard({
  image,
  title,
  description,
  rowSpan = 1,
  height = "h-48",
}: HomeLandmark) {
  return (
    <div
      className={`group col-span-1 relative bg-gray-300 ${height} rounded-lg overflow-hidden flex items-end row-span-${rowSpan}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>

      {/* Overlay and Content */}
      <div className="group-active:bg-[#00000080] group-md:hover:bg-[#00000080] absolute inset-0 flex flex-col justify-center items-center text-center px-4 transition-all duration-500">
        <p className="absolute bottom-2 left-3 text-white font-bold">{title}</p>
        <div className="text-white opacity-0 scale-95 active:opacity-100 group-md:hover:opacity-100 active:scale-90 group-md:hover:scale-100">
          <p className="bold">{description}</p>
        </div>
      </div>
    </div>
  );
}
