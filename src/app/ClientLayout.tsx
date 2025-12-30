"use client"

import { useRef, useEffect, useState } from "react"
import Navbar from "@/components/common/navbar"
import Footer from "@/components/common/footer"
import { ThemeProvider } from "@/context/ThemeContext"

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const navRef = useRef<HTMLElement>(null)
    const [navHeight, setNavHeight] = useState(0)

    useEffect(() => {
        if (!navRef.current) return

        const updateHeight = () => {
            setNavHeight(navRef.current!.offsetHeight)
        }

        updateHeight()
        window.addEventListener("resize", updateHeight)

        return () => window.removeEventListener("resize", updateHeight)
    }, [])

    return (
        <ThemeProvider>
            <Navbar ref={navRef} />

            {/* 🔥 Dynamic spacer instead of (hello 1) */}
            <div style={{ height: navHeight }} />

            {children}
            <Footer />
        </ThemeProvider>
    )
}
