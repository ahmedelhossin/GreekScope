export default function SectionCard({ title, description, icon }: { title: string; description: string; icon?: string }) {
  return (
    <div className="p-6 rounded-2xl dark:hover:bg-cyan-100 hover:bg-amber-200 hover:scale-105 transition cursor-pointer">
      <h2 className="text-xl font-bold mb-3">{icon} {title}</h2>
      <p className="text-gray-400 text-sm leading-6">{description}</p>
    </div>
  )
}
