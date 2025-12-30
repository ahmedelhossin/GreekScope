'use client'
import { createContext, useState, useEffect, ReactNode } from 'react'

interface ThemeContextType {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => { },
})

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    // Set initial theme safely
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null

        if (savedTheme && savedTheme !== theme) {
            setTheme(savedTheme)
        } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        }
        // Only run once
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Update <html> class and localStorage whenever theme changes
    useEffect(() => {
        const html = document.documentElement
        if (theme === 'dark') html.classList.add('dark')
        else html.classList.remove('dark')

        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
