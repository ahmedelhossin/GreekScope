import Image from 'next/image';
import React from 'react';

export default function DetailCard({ title, text, imgSrc, imgAlt }: { title: string; text: string; imgSrc: string; imgAlt: string }) {
    return (
        <div className="bg-purple-500 p-6 rounded-2xl flex flex-col h-87.5">
            <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
            <p className="text-white flex-1 mb-4">{text}</p>
            <Image
                width={140}
                height={200}
                src={imgSrc}
                alt={imgAlt}
                className="h-35 object-contain mx-auto opacity-80 mt-auto"
            />
        </div>
    );
}
