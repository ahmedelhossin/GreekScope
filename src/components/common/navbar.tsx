"use client"

import Link from "next/link"
import React, { forwardRef, useContext, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ThemeContext } from "@/context/ThemeContext"

const Navbar = forwardRef<HTMLElement>((_, ref) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const closeTimer = React.useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href
  const isHistoryActive = () => pathname.startsWith("/history")

  return (
    <nav
      ref={ref}
      aria-label="Main navigation"
      dir="ltr"
      className="bg-[#A7F3D0] fixed w-full z-20 top-0 border-b border-gray-200 text-black"
    >
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 max-w-fit">
          <div className="relative h-10 w-10">
            <Image
              src="/greece.avif"
              alt="GreekScope logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <span className="text-xl font-bold text-gray-800">
            GreekScope
          </span>
        </Link>
        <div
          id="main-menu"
          className={`w-full shrink md:flex md:w-auto order-3 md:order-2 ${isMobileMenuOpen ? "block" : "hidden"}`}

        >
          <ul
            dir="rtl"
            className="flex flex-col md:flex-row items-center font-bold mt-4 md:mt-0 md:space-x-8"
          >

            <li>
              <Link
                href="/"
                aria-current={isActive("/") ? "page" : undefined}
                className={`block py-2 px-3 text-center ${isActive("/")
                  ? "text-white bg-amber-400 rounded-4xl"
                  : "text-gray-700 hover:text-emerald-700"
                  }`}
              >
                الرئيسية
              </Link>
            </li>

            {/* History dropdown */}
            <li
              className="relative"
              onMouseEnter={() => {
                if (closeTimer.current) clearTimeout(closeTimer.current)
                setIsHistoryOpen(true)
              }}
              onMouseLeave={() => {
                closeTimer.current = setTimeout(() => {
                  setIsHistoryOpen(false)
                }, 200) // ← sweet spot for laptops
              }}
            >


              <Link
                href="/history"
                aria-haspopup="true"
                aria-expanded={isHistoryOpen}
                aria-controls="history-menu"
                className={`py-2 px-4 rounded-lg border transition-colors inline-flex items-center ${isHistoryActive()
                  ? "bg-amber-400 text-white"
                  : "bg-white/50 text-gray-700 hover:bg-white"
                  }`}
              >
                <span className="flex items-center">
                  التاريخ
                  <svg
                    className={`w-4 h-4 ms-2 transition-transform ${isHistoryOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m19 9-7 7-7-7" />
                  </svg>
                </span>
              </Link>

              {isHistoryOpen && (
                <ul
                  id="history-menu"
                  role="menu"
                  className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-xl z-30"
                >

                  {/* Greek civilization */}
                  <li role="none" className="relative">
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls="greek-submenu"
                      onClick={() => setOpen(prev => !prev)}
                      className={`block  px-4 py-2  ${isActive("/history/archaicGreekCivilization") || isActive("/history/classicalGreekCivilization")
                        ? "bg-amber-600 text-white rounded-lg"
                        : "text-gray-700 hover:bg-emerald-50"
                        } w-full text-right px-4 py-2 hover:bg-emerald-50 font-semibold`}
                    >
                      الحضارة الإغريقية ▾
                    </button>

                    {open && (
                      <ul
                        id="greek-submenu"
                        role="menu"
                        className="absolute right-full top-0 ml-2 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50"
                      >
                        <li role="none">
                          <Link
                            role="menuitem"
                            href="/history/archaicGreekCivilization"
                            className={`block px-4 py-2 ${isActive("/history/archaicGreekCivilization")
                              ? "bg-indigo-600 text-white rounded-lg"
                              : "text-gray-700 hover:bg-emerald-50"
                              }`}
                          >
                            الحضارة الإغريقية المبكرة
                          </Link>
                        </li>

                        <li role="none">
                          <Link
                            role="menuitem"
                            href="/history/classicalGreekCivilization"
                            className={`block px-4 py-2 ${isActive("/history/classicalGreekCivilization")
                              ? "bg-indigo-600 text-white rounded-lg"
                              : "text-gray-700 hover:bg-emerald-50"
                              }`}
                          >
                            الحضارة الإغريقية القديمة
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li role="none">
                    <Link role="menuitem" href="/history/hellenisticCivilization" className={` ${isActive("/history/hellenisticCivilization")
                      ? "bg-amber-600 text-white rounded-lg"
                      : "text-gray-700 hover:bg-emerald-50"
                      }  block px-4 py-2`}>
                      الحضارة الهيلينية
                    </Link>
                  </li>

                  <li role="none">
                    <Link role="menuitem" href="/history/minoanCivilization" className={` ${isActive("/history/minoanCivilization")
                      ? "bg-amber-600 text-white rounded-lg"
                      : "text-gray-700 hover:bg-emerald-50"
                      }  block px-4 py-2`}>
                      الحضارة المينوسية
                    </Link>
                  </li>

                  <li role="none">
                    <Link role="menuitem" href="/history/mycenaeanCivilization" className={` ${isActive("/history/mycenaeanCivilization")
                      ? "bg-amber-600 text-white rounded-lg"
                      : "text-gray-700 hover:bg-emerald-50"
                      }  block px-4 py-2`}>
                      الحضارة الميسينية
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li><Link className={`block py-2 px-3 text-center  ${isActive("/about-greece")
              ? "text-white bg-amber-400 rounded-4xl"
              : "text-gray-700 hover:text-emerald-700"
              }`} href="/about-greece">عن اليونان</Link></li>
            <li><Link className={`block py-2 px-3 text-center ${isActive("/media")
              ? "text-white bg-amber-400 rounded-4xl"
              : "text-gray-700 hover:text-emerald-700"
              }`} href="/media">المعرض</Link></li>
            <li><Link className={`block py-2 px-3 text-center ${isActive("/societyDevelopment")
              ? "text-white bg-amber-400 rounded-4xl"
              : "text-gray-700 hover:text-emerald-700"
              }`} href="/societyDevelopment">المجتمع والتنمية</Link></li>
            <li><Link className={`block py-2 px-3 text-center ${isActive("/cultureEntertainment")
              ? "text-white bg-amber-400 rounded-4xl"
              : "text-gray-700 hover:text-emerald-700"
              }`} href="/cultureEntertainment">الثقافة والترفيه</Link></li>
            <li><Link className={`block py-2 px-3 text-center ${isActive("/educational")
              ? "text-white bg-amber-400 rounded-4xl"
              : "text-gray-700 hover:text-emerald-700"
              }`} href="/educational">قسم التعليم</Link></li>

          </ul>

        </div>
        <div className="flex items-center gap-4 order-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="shrink-0 px-4 py-2 not-md:px-2 not-md:py-1 bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-800 rounded"
          >
            <span className="md:hidden">
              {theme === "light" ? "🌙" : "☀️"}
            </span>

            <span className="hidden md:inline">
              {theme === "light" ? "🌙 الوضع الداكن" : "☀️ الوضع الفاتح"}
            </span>

          </button>
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="main-menu"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 bg-amber-100 text-gray-600 rounded-lg hover:bg-emerald-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
})

Navbar.displayName = "Navbar"
export default Navbar

