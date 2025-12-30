import Link from 'next/link'
import React from 'react'

export default function VisitGreek() {

    return (
        <>
            <div className="bg-gray-300 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                    <div className="text-3xl text-gray-700">$</div>
                    <div>
                        <p className="font-semibold text-black">عرض مميز!</p>
                        <p className="text-sm text-gray-600">زيارة اليونان تجربة ساحرة تجمع بين التاريخ العريق (أثينا)، والجزر الخلابة (سانتوريني، ميكونوس، رودس، زاكينثوس)، والشواطئ الجميلة، وتتطلب الحصول على تأشيرة شنغن،</p>
                    </div>
                </div>
                <Link
                    href="/commercial"
                    id="commercial-ad"
                    className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition duration-150 w-full sm:w-auto inline-block text-center"
                >
                    احجز الآن
                </Link>
            </div>
        </>
    )
}
