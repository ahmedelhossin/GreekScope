import Image from 'next/image'
import React from 'react'

export default function AboutCard({ title, text, img }: { title: string, text: string, img?: string }) {
    return (
        <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{text}</p>
            {img && <Image width={500} height={500} src={img} alt={title} className="h-24 object-contain self-center" />}
        </div>
    )
}
