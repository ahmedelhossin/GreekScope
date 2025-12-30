import React from "react";
// import TimelineItem from "./timeLineItem";
import { Landmark } from "lucide-react";
import dynamic from "next/dynamic";
import { TimelineProps } from "@/interfaces/TimelinePropsI";
import Loading from "@/app/loading";
const TimelineItemHeavySection = dynamic(() => import('@/components/aboutComponents/timeLineItem'), {
    loading: () => <Loading/>,
});





export default function Timeline({ items }: TimelineProps) {
    return (
        <div className="w-full overflow-x-auto pb-8"> 
            <ol className="flex md:text-center flex-col md:flex-row items-start justify-between min-w-max md:min-w-full gap-8" dir="rtl">
                {items.map((item, index) => (
                    <TimelineItemHeavySection
                        key={index}
                        date={item.date}
                        title={item.title}
                        link={item.link}
                        description={item.description}
                        Icon={Landmark}
                    />
                ))}
            </ol>
        </div>
    );
}
