import React from 'react'
import Link from 'next/link'

export default function CeExploreMore({ cards }: { cards: { title: string, description: string, href: string }[] }) {
    return (
        <section className="mt-24">
            <h2 className="text-2xl font-bold mb-10 text-center">🧭 استكشف المزيد عن اليونان</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cards.map((card, i) => (
                    <Link key={i} href={card.href}>
                        <div className="bg-[#2a2a2a] not-dark:bg-white not-dark:active:bg-yellow-200 not-dark:md:hover:bg-yellow-200 p-6 rounded-2xl cursor-pointer active:bg-[#333333] active:scale-95 md:hover:bg-[#333333] md:hover:scale-105 transition">
                            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                            <p className="text-gray-400  text-sm">{card.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
