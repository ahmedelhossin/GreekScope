import { FunFactI } from '@/interfaces/CeFunFactI'
import React from 'react'

export default function CeFunFacts({ facts }: { facts: FunFactI[] }) {
    return (
        <section className="mt-20">
            <h2 className="text-2xl font-bold mb-8">💡 هل تعلم؟</h2>
            <ul className="space-y-4 text-gray-300 not-dark:text-gray-800">
                {facts.map((fact, i) => <li key={i}>{fact.text}</li>)}
            </ul>
        </section>
    )
}
