import Link from 'next/link'

export default function CTASection({ text, buttonText, href }: { text: string; buttonText: string; href: string }) {
    return (
        <section className="mt-20 text-center">
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">{text}</p>
            <Link href={href}>
                <button name="" className="px-8 py-3 rounded-full bg-black dark:bg-white dark:text-black text-white font-bold hover:scale-105 transition">
                    {buttonText}
                </button>
            </Link>
        </section>
    )
}
