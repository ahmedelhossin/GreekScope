import React from 'react'
// import DetailCard from './aboutDetailsCard';
// import AboutCard from './aboutCard';
// import StatCard from './aboutStateCard';
// import Timeline from './aboutTimeLine';
// import VisitGreek from '../common/visitGreek';
import Link from 'next/link';
import dynamic from "next/dynamic";
import { cards } from '@/data/AboutCards';
import { facts } from '@/data/AboutFact';
import { stats } from '@/data/AboutStats';
import { timelineData } from '@/data/AboutTimelineData';

const DetailCardHeavySection = dynamic(() => import('@/components/aboutComponents/aboutDetailsCard'), {
    loading: () => <Loading />,
});
const AboutCardHeavySection = dynamic(() => import('@/components/aboutComponents/aboutCard'), {
    loading: () => <Loading />,
});
const StatCardHeavySection = dynamic(() => import('@/components/aboutComponents/aboutStateCard'), {
    loading: () => <Loading />,
});
const TimelineHeavySection = dynamic(() => import('@/components/aboutComponents/aboutTimeLine'), {
    loading: () => <Loading />,
});
const VisitGreekHeavySection = dynamic(() => import('@/components/common/visitGreek'), {
    loading: () => <Loading />,
});
// import InteractiveMap from "@/components/educationalComponents/InteractiveMap";
import Loading from '@/app/loading';
import Image from 'next/image';

export default function AboutLanding() {





    return (
        <>
            {/* Hero Section */}
            <div className="w-full flex justify-center items-center relative min-h-100">
                {/* Background Image */}
                <Image
                    src="/img.avif"
                    alt="Hero Background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="absolute inset-0"
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                        نظره عن اليونان
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                {/* Quick Facts */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">حقائق سريعة</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facts.map((fact, index) => (
                            <Link
                                key={index}
                                href={fact.link}
                                className="transition transform active:scale-95 md:hover:scale-105"
                            >
                                <AboutCardHeavySection title={fact.title} text={fact.text} />
                            </Link>
                        ))}
                    </div>
                </section>
                {/* Detailed Overview */}
                <section className='mb-5'>
                    <h2 className="text-2xl font-bold mb-8">نظرة مفصلة</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cards.map((card, index) => (
                            <DetailCardHeavySection
                                key={index}
                                title={card.title}
                                text={card.text}
                                imgSrc={card.imgSrc}
                                imgAlt={card.imgAlt}
                            />
                        ))}
                    </div>
                </section>
                <VisitGreekHeavySection />

                <section className="p-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-extrabold mb-6">بعض الحقائق</h2>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" dir="ltr">
                            {stats.map((stat, index) => (
                                <StatCardHeavySection
                                    key={index}
                                    title={stat.title}
                                    value={stat.value}
                                    Icon={stat.Icon}
                                    bgColor={stat.bgColor}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="p-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-extrabold mb-6">الاسم والنشأة</h2>
                        <div className="flex justify-center items-center">
                            <div className="w-[70%] ">
                                <p className="text-gray-700 dark:text-green-200" dir='rtl'>
                                    الاسم الرسمي لليونان هو الجمهورية الهيلينية (بالإنجليزية: Hellenic Republic)، والمعروفة منذ العصور القديمة باسم هيلاس.
                                    تاريخياً، استخدم هذا الاسم للإشارة إلى الشعب اليوناني وثقافته المشتركة، وأصوله التي تعود إلى حضارة اليونان القديمة.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section dir="rtl" className="p-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-extrabold mb-6">الجدول الزمني</h2>
                        {/* Pass the array to Timeline component */}
                        <TimelineHeavySection items={timelineData} />
                    </div>
                </section>

            </div >
        </>
    )
}
