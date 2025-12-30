"use client";
import React, { useState } from "react";
import Image from "next/image";
import { places } from "@/data/educationPlaces";
import { Place } from "@/interfaces/educationPlacesI";



export default function InteractiveMap() {
    const [activePlace, setActivePlace] = useState<Place | null>(null);




    return (
        // <div className="relative w-full max-w-5xl mx-auto">
        //     <div className="relative w-full aspect-3/2 rounded-xl overflow-hidden">
        //         <Image
        //             src="/greece-map.jpg"
        //             alt="Greece Map"
        //             fill
        //             className="object-contain"
        //         />

        //         {places.map((place) => (
        //             <button id="yo"
        //                 key={place.id}
        //                 onClick={() => setActivePlace(place)}
        //                 className="absolute w-5 h-5 bg-green-400 rounded-full border-2 border-white shadow-md hover:scale-110 transition"
        //                 style={{
        //                     left: `${place.x}%`,
        //                     top: `${place.y}%`,
        //                     transform: "translate(-50%, -50%)",
        //                 }}
        //             />
        //         ))}
        //     </div>
        //     {/* Map Image */}


        //     {/* Pins */}


        //     {/* Info Card */}
        //     {activePlace && (
        //         <div
        //             className="absolute bg-[rgba(255,255,255,0.7)] p-4 rounded-lg shadow-lg max-w-xs text-sm"
        //             style={{
        //                 left: `${activePlace.x}%`,
        //                 top: `${activePlace.y}%`,
        //                 transform: "translate(-50%, calc(-100% - 10px))",
        //             }}
        //         >
        //             <h3 className="font-black text-black text-3xl  mb-1">{activePlace.name}</h3>
        //             <p className="text-gray-600">{activePlace.description}</p>
        //             <button id="yo"
        //                 onClick={() => setActivePlace(null)}
        //                 className="mt-2 text-xs text-blue-500 hover:underline"
        //             >
        //                 Close
        //             </button>
        //         </div>
        //     )}
        // </div>
        <div className="flex w-full max-w-5xl mx-auto gap-4">
            <div className="flex-1 p-4 bg-white rounded-lg shadow-lg">
                {activePlace ? (
                    <>
                        <h3 className="font-black text-black text-3xl mb-2">{activePlace.name}</h3>
                        <p className="text-gray-600">{activePlace.description}</p>
                        <button
                            id="close"
                            onClick={() => setActivePlace(null)}
                            className="mt-4 text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                            aria-label="Close modal"
                        >
                            Close
                        </button>

                    </>
                ) : (
                    <p className="text-gray-400">اضغط على دبوس لرؤية التفاصيل</p>
                )}
            </div>
            {/* Map */}
            <div className="relative flex-2 aspect-3/2 rounded-xl overflow-hidden">
                <Image
                    src="/greece-map.avif"
                    alt="Greece Map"
                    fill
                    className="object-contain"
                />
                {places.map((place) => (
                    <button
                        id={`map-button-${place.id}`}
                        key={place.id}
                        onClick={() => setActivePlace(place)}
                        className="absolute w-5 h-5 bg-green-400 rounded-full border-2 border-white shadow-md hover:scale-110 transition"
                        style={{
                            left: `${place.x}%`,
                            top: `${place.y}%`,
                            transform: "translate(-50%, -50%)",
                        }}
                        aria-label={`Show details for ${place.name}`} // descriptive label
                        title={place.name} // optional, shows tooltip on hover
                    >
                        <span className="sr-only">{place.name}</span>
                    </button>

                ))}

            </div>

            {/* Info Panel */}

        </div>

    );
}
