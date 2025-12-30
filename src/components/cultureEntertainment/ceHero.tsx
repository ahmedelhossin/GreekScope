import React from 'react'
import Image from 'next/image'
import { heroBanner } from '@/data/CeBannerData'

export default function CeHero() {
    return (
        <>
            <div className="w-full h-64 md:h-80 overflow-hidden mb-12">
                <Image src={`${heroBanner.image}`} width={1425} height={400} alt={`/${heroBanner.alt}`} className="object-contain" />
            </div>
            <header className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">مرحبًا بكم في اليونان القديمة</h1>
                <p className="text-gray-300 not-dark:text-gray-700 text-lg leading-relaxed max-w-4xl">
                    استكشف العالم الرائع لثقافة اليونان القديمة، من الحياة اليومية والفنون إلى المسرح والمهرجانات العامة. اكتشف الإرث الخالد لواحدة من أكثر الحضارات تأثيرًا في العالم.
                </p>
            </header>
        </>
    )
}
