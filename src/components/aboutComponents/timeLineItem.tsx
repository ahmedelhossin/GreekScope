import { TimelineItemProps } from "@/interfaces/TimelineItemPropsI";
import Link  from "next/link";
import React from "react";



export default function TimelineItem({ date, title, description, Icon, link }: TimelineItemProps) {
    return (
        <li className="relative flex-1 group">
                <Link href={link}>
                {/* الخط الواصل بين العناصر (يظهر فقط في الشاشات الكبيرة) */}
                <div className="hidden md:block absolute top-3 left-0 right-1/2 h-0.5 bg-blue-200 -z-10 group-first:right-0 group-last:left-1/2"></div>

                <div className="flex flex-col items-center md:items-start px-4">
                    {/* الأيقونة/النقطة المركزية */}
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full ring-8 ring-blue-50 mb-4 z-10">
                        {Icon ? <Icon className="h-4 w-4 text-white" /> : <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>

                    {/* المحتوى */}
                    <div className="text-center">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2">
                            {date}
                        </span>
                        <h3 className="text-lg font-bold mb-1">{title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-50">
                            {description}
                        </p>
                    </div>
                </div>
        </Link>
            </li>
    );
}
