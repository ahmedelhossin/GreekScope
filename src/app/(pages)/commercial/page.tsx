import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { destinations } from '@/data/CommericalPlaces';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function CommercialPage() {
  
  return (
    <div className="min-h-screen bg-linear-to-b from-emerald-100 to-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <Image
          src="/greece-hero.avif"
          alt="Greece"
          fill
          className="object-cover brightness-90"
        />
        <div className="absolute text-center text-white px-4">
          <h1 className="text-5xl font-bold drop-shadow-lg">زور اليونان</h1>
          <p className="mt-4 text-lg drop-shadow-md">اكتشف الجزر، التاريخ، والثقافة الغنية لليونان</p>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold text-black text-center mb-12">أشهر الوجهات السياحية</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Card key={dest.title} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={dest.image} alt={dest.title} fill className="object-cover" />
              </div>
              <CardContent>
                <CardHeader>
                  <CardTitle>{dest.title}</CardTitle>
                  <CardDescription>{dest.description}</CardDescription>
                </CardHeader>
                <Link href={dest.link} className="mt-4 inline-block text-emerald-600 active:underline hover:underline">
                  اكتشف المزيد
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );

}
