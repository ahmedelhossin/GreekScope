import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>

      <footer  dir="ltr" className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
        <div className="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
          <span dir='rtl' className="text-sm text-body sm:text-center">© 2026 <Link href="/" className="md:hover:underline active:underline">GreekScope™</Link>. كل الحقوق محفوظة.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
            <li>
              <Link href="/about-greece" className="md:hover:underline active:underline me-4 md:me-6">عن اليونان</Link>
            </li>
            <li>
              <Link href="/media" className="md:hover:underline active:underline me-4 md:me-6">المعرض</Link>
            </li>
            <li>
              <Link href="/history" className="md:hover:underline active:underline me-4 md:me-6">التاريخ</Link>
            </li>
            <li>
              <Link href="/" className="md:hover:underline active:underline">الرئيسيه</Link>
            </li>
          </ul>
          <span className="text-xs text-gray-500 mt-2 md:mt-0" dir="rtl">
          المصادر: <Link href="https://ar.wikipedia.org/wiki/اليونان" target="_blank" className="md:hover:underline active:underline">ويكيبيديا</Link>، كتب التاريخ اليوناني، مراجع أكاديمية.
        </span>
        </div>
      </footer>

    </>
  )
}
