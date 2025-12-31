export default function SectionCard({ title, description, icon }: { title: string; description: string; icon?: string }) {
  return (
    <div className="p-6 rounded-2xl dark:active:bg-cyan-100 active:bg-amber-200 active:scale-95 dark:md:hover:bg-cyan-100 md:hover:bg-amber-200 md:hover:scale-105 transition cursor-pointer">
      <h2 className="text-xl font-bold mb-3">{icon} {title}</h2>
      <p className="text-gray-400 text-sm leading-6">{description}</p>
    </div>
  )
}
