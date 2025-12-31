// "use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { attractions } from "@/data/SantoriniAttractions";

export default function Santorini() {
    

    return (
        <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="relative w-full h-[50vh]">
                <Image
                    src="/santoriniHero.avif"
                    alt="Santorini"
                    fill
                    className="object-cover"
                />
                <div className="absolute  inset-0 flex flex-col items-center justify-center text-white px-4">
                    <h1 className="text-5xl font-bold drop-shadow-lg ">سانتوريني</h1>
                    <p className="mt-4 text-lg drop-shadow-md text-center">
                        الجزيرة اليونانية الساحرة بمناظرها البحرية الخلابة وبيوتها البيضاء المميزة
                    </p>
                </div>
            </section>

            {/* Description Section */}
            <section className="max-w-5xl mx-auto px-4 py-12 text-gray-700">
                <p className="mb-6">
                    سانتوريني، إحدى أجمل الجزر اليونانية في بحر إيجة، تشتهر بمناظرها الطبيعية الخلابة، البيوت البيضاء مع القباب الزرقاء، والغروب الساحر. الجزيرة غنية بالتاريخ والثقافة، وتعد وجهة سياحية مثالية للرحلات الرومانسية والعائلية.
                </p>
                <p>
                    يمكنك الاستمتاع بالمشي في القرى التقليدية، زيارة الشواطئ البركانية، أو ركوب القوارب لمشاهدة الكالديرا الشهيرة. كل زاوية في سانتوريني تروي قصة فريدة عن التاريخ والجمال الطبيعي.
                </p>
            </section>

            {/* Attractions Section */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-4xl font-semibold text-center text-black mb-12">أبرز المعالم</h2>
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
