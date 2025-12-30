import { LucideIcon } from "lucide-react"

export interface HistoryDatasI {
    title: string
    period: Icons
    location: Icons
    origin: Icons
    politics: Icons
    society: Icons
    economy: Icons
    religion_culture: Icons
    art_architecture: Icons
    writing: Icons
    fall: Icons
    image: string
    extra: Icons
}

export interface Icons {
    icon: LucideIcon
    text: string
}

