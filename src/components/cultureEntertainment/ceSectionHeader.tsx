import Image from 'next/image'
import React from 'react'

export default function CeSectionHeader() {
  return (
    <>
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <Image src="/CultureEntertainment.avif" width={1425} height={400} alt="Ancient Greece" className="object-contain" />
      </div>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">مرحبًا بكم في اليونان القديمة</h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">...</p>
      </header>

    </>
  )
}
