import React from 'react'
import Link from 'next/link'
import { ctaData } from '@/data/CeCTAData'

export default function CeCTA() {
    return (
        <section className="mt-20 text-center">
            <p className="text-gray-300 not-dark:text-gray-700 mb-6 max-w-3xl mx-auto">
                {ctaData.text}
            </p>
            <Link href={ctaData.href}>
                <button
                    id="cta-to-history"
                    className="px-8 py-3 rounded-full dark:text-black text-white dark:bg-white bg-black font-bold hover:scale-105 transition"
                >
                    {ctaData.buttonText}
                </button>

            </Link>
        </section>
    )
}
