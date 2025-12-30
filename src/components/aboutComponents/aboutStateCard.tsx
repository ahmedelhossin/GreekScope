// StatCard.jsx
import React from "react";

export default function StatCard({ title, value, Icon, bgColor }:{ title: string; value: string | number; Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>; bgColor: string }) {
    return (
        <div className=" overflow-hidden bg-white shadow rounded-lg p-5">
            <div className="flex items-center">
                <div className={`shrink-0 rounded-md p-3 ${bgColor}`}>
                    {Icon && <Icon className="h-6 w-6 text-white" />}
                </div>
                <div className="ml-4 w-0 flex-1" dir="rtl">
                    <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
                    <dd className="text-1xl font-semibold text-gray-900">{value}</dd>
                </div>
            </div>
        </div>
    );
}
