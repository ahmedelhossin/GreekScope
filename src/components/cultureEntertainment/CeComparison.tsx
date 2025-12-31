import React from 'react'

export default function CeComparison({ oldItems, newItems }: { oldItems: string[], newItems: string[] }) {
    return (
        <section className="mt-20">
            <h2 className="text-2xl font-bold mb-10 text-center">🔄 مقارنة بين الترفيه قديمًا وحديثًا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-sm">
                <div className="bg-[#2a2a2a] not-dark:bg-white not-dark:active:bg-yellow-200 not-dark:md:hover:bg-yellow-200 p-6 rounded-2xl">
                    <h3 className="font-bold text-lg mb-4 text-center">🏛️ قديمًا</h3>
                    <ul className="space-y-3 text-gray-400">{oldItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </div>
                <div className="hidden md:flex justify-center items-center text-gray-500 text-2xl">⟵ ⟶</div>
                <div className="bg-[#2a2a2a] not-dark:bg-white not-dark:active:bg-yellow-200 not-dark:md:hover:bg-yellow-200 p-6 rounded-2xl">
                    <h3 className="font-bold text-lg mb-4 text-center">🎬 حديثًا</h3>
                    <ul className="space-y-3 text-gray-400">{newItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </div>
            </div>
            <p className="mt-8 text-center text-gray-300 not-dark:text-gray-700 max-w-3xl mx-auto leading-relaxed">
                رغم اختلاف الوسائل بين الماضي والحاضر، ظل الترفيه وسيلة للتعبير والتعليم وبناء الروابط الاجتماعية عبر العصور.
            </p>
        </section>
    )
}
