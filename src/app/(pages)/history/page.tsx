// import Link from "next/link";
// import { historyEras } from "@/data/historyEras";

// export default function HistoryPage() {
//   return (
//     <main className="min-h-screen px-6 py-16">
//       <h1 className="text-4xl font-bold text-center mb-12">
//         History of Greece
//       </h1>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {historyEras.map((era) => (
//           <Link
//             key={era.slug}
//             href={`/history/${era.slug}`}
//             className="group rounded-xl overflow-hidden shadow-lg md:hover:scale-105 transition"
//           >
//             <div
//               className="h-48 bg-cover bg-center"
//               style={{ backgroundImage: `url(${era.image})` }}
//             />
//             <div className="p-5 bg-card text-card-foreground">
//               <h2 className="text-xl font-semibold">{era.title}</h2>
//               <p className="text-sm opacity-70">{era.period}</p>
//               <p className="mt-2 text-sm">{era.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }
// "use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { civilizations } from "@/data/Civilizations";

export default function History() {
  return (
    <div className="min-h-screen bg-linear-to-b from-emerald-50 to-white">

      {/* Hero */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/historyHero.avif"
          alt="Greek History"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">تاريخ اليونان</h1>
          <p className="max-w-2xl text-center text-lg">
            رحلة عبر أقدم وأعظم الحضارات التي شكّلت تاريخ الإنسانية
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-gray-700">
        <p className="text-lg leading-relaxed">
          يمتد تاريخ اليونان لآلاف السنين، ويشمل حضارات عظيمة أثّرت في
          الفلسفة، العلوم، الفنون، والسياسة. من القصور المينوسية إلى
          الديمقراطية الأثينية، شكّلت اليونان أساس الحضارة الغربية.
        </p>
      </section>

      {/* Civilizations */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-semibold text-center text-black mb-12">
          أبرز الحضارات
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-center gap-8">
          {civilizations.map((item) => (
            <Link key={item.title} href={item.link}>
              <Card className="overflow-hidden cursor-pointer transition transform active:scale-95 active:shadow-2xl md:hover:scale-105 md:hover:shadow-2xl">
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <CardHeader className="p-0">
                    <CardTitle className="mb-2">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

