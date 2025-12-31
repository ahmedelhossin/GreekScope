// "use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { attractions } from "@/data/RhodesAttractions";

export default function Rhodes() {
    

    return (
        <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="relative w-full h-[50vh]">
                <Image
                    src="/rhodesHero.avif"
                    alt="Rhodes"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                    <h1 className="text-5xl font-bold drop-shadow-lg">رودس</h1>
                    <p className="mt-4 text-lg drop-shadow-md text-center">
                        الجزيرة التاريخية مع معالمها القروسطية والشواطئ الساحرة
                    </p>
                </div>
            </section>

            {/* Description */}
            <section className="max-w-5xl mx-auto px-4 py-12 text-gray-700">
                <p className="mb-6">
                    رودس، جزيرة غنية بالتاريخ والمعمار القروسطي، تمتاز بالشوارع الضيقة والبيوت القديمة والحصون التاريخية.
                </p>
                <p>
                    استمتع بزيارة المعالم التاريخية، التجول في المدينة القديمة، والتعرف على الثقافة اليونانية الأصيلة.
                </p>
            </section>

            {/* Attractions */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-4xl font-semibold text-center mb-12">أبرز المعالم</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {attractions.map((item) => (
                        <Card
                            key={item.title}
                            className="overflow-hidden transform transition duration-300 active:scale-95 active:shadow-2xl md:hover:scale-105 md:hover:shadow-2xl"
                        >
                            <div className="relative h-48 w-full">
                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                            </div>
                            <CardContent>
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardHeader>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
