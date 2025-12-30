export default function PageHeader({ title, description }: { title: string; description: string }) {
    return (
        <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">{description}</p>
        </header>
    )
}
