import React from 'react'

export default function CeInfluentialPeople({ people }: { people: { name: string, description: string }[] }) {
    return (
        <section className="mt-20">
            <h2 className="text-2xl font-bold mb-8">🎭 شخصيات مؤثرة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {people.map((p, i) => (
                    <div key={i} className="bg-[#2a2a2a] not-dark:bg-white not-dark:hover:bg-yellow-200 p-6 rounded-2xl hover:scale-105 transition">
                        <h3 className="font-bold text-lg mb-2">{p.name}</h3>
                        <p className="text-gray-400 text-sm">{p.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
