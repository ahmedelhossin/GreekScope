import Image from 'next/image'
import React from 'react'

export default function HomeCards() {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-light text-center mb-10 sm:mb-16">الأحداث القادمة</h1>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                    <div className="card-container">
                        <div className="card-image-wrapper">
                            <Image width={400}
                                height={260} src="/Cultural Festivals.avif"
                                alt="People in traditional Greek clothing celebrating a festival"
                                className="w-full h-65 rounded-4xl object-cover">
                            </Image>
                        </div>
                        <div className="card-content">
                            <h2 className="text-2xl font-semibold my-3">المهرجانات الثقافية</h2>
                            <p className="text-sm font-light leading-relaxed">
                                استمتع بتجربة المهرجانات النابضة بالحياة التي تحتفي بثقافة اليونان، والتي تعرض الموسيقى والرقص والمأكولات التقليدية. تُبرز هذه الفعاليات ثراء التراث اليوناني، وتدعوك للمشاركة في الاحتفالات البهيجة التي تجمع المجتمعات.
                            </p>
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="card-image-wrapper">
                            <Image width={400}
                                height={260} src="/Art in Greece.avif"

                                alt="Contemporary art gallery with various paintings on display"
                                className="h- w-full h-65 rounded-4xl object-cover">
                            </Image>
                        </div>
                        <div className="card-content">
                            <h2 className="text-2xl font-semibold my-3">الفن في اليونان: منظور حديث</h2>
                            <p className="text-sm font-light leading-relaxed">
                                اكتشفوا فنانين يونانيين معاصرين يعيدون تعريف المشهد الثقافي من خلال تعبيرات مبتكرة. تعكس أعمالهم تعقيدات الحياة المعاصرة مع تكريمها للتاريخ العريق الذي سبقها.
                            </p>
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="card-image-wrapper">
                            <Image width={400}
                                height={260} src="/Explore the Greek.avif"

                                alt="Boat sailing on crystal-clear waters between steep mountains"
                                className="w-full h-65 rounded-4xl object-cover">
                            </Image>
                        </div>
                        <div className="card-content">
                            <h2 className="text-2xl font-semibold my-3">استكشف الجزر اليونانية</h2>
                            <p className="text-sm font-light leading-relaxed">
                                انطلق في مغامرة عبر الجزر اليونانية الساحرة، حيث تنتظرك مناظر خلابة ومياه صافية كصفاء الكريستال وقرى آسرة. تتميز كل جزيرة بطابعها الفريد وجمالها الأخاذ، مما يضمن لك تجارب وذكريات لا تُنسى.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
