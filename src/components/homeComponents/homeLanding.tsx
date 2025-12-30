import React from 'react'
import dynamic from 'next/dynamic'
import { landmarks } from '@/data/HomeLandmark';
import Loading from '@/app/loading';
const HomePlacesHeavySection = dynamic(() => import("@/components/homeComponents/homePlaces"), {
    loading: () => <Loading/>,
});
const HomeBestVisitesHeavySection = dynamic(() => import("@/components/homeComponents/homeBestVisites"), {
    loading: () => <Loading/>,
});
const VisitGreekHeavySection = dynamic(() => import("@/components/common/visitGreek"), {
    loading: () => <Loading/>,
});
const HomeCardsHeavySection = dynamic(() => import("@/components/homeComponents/homeCards"), {
    loading: () => <Loading/>,
});
// import HomeStatistics from './homeStatistics'


export default function HomeLanding() {
    return (
        <>

            <div dir='rtl' className="container mx-auto px-4 mt-24 pb-16">
                <section className="mb-12">
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">أبرز المعالم</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {landmarks.map((lm, index) => (
                                <HomePlacesHeavySection key={index} {...lm} />
                            ))}
                        </div>
                    </div>
                </section>
                <section id='places' className="mb-12">
                    <HomeBestVisitesHeavySection />
                </section>
                {/* <section className="mb-12">
                    <HomeStatistics />
                </section> */}
                <section className="mb-12">
                    <VisitGreekHeavySection />
                </section>
                <section className="mb-12">
                    <HomeCardsHeavySection />
                </section>
            </div>

        </>
    )
}
