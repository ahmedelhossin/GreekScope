import React from 'react'

export default function CeOverviewCards({ cards }: { cards: { title: string, description: string }[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, i) => (
                <div key={i} className="bg-[#2a2a2a] not-dark:bg-white not-dark:hover:bg-yellow-200 p-8 rounded-2xl hover:bg-[#333333] transition-colors">
                    <h2 className="text-xl font-bold mb-3">{card.title}</h2>
                    <p className="text-gray-400 text-sm leading-6">{card.description}</p>
                </div>
            ))}
        </div>
    )
}
