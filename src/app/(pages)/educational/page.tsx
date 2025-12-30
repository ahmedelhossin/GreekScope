import Loading from '@/app/loading'
// import Translator from '@/components/educationalComponents/GreekWordAnalyzer'
// import InteractiveMap from '@/components/educationalComponents/InteractiveMap'
// import QuizSection from '@/components/educationalComponents/QuizSection'
import dynamic from 'next/dynamic'
import React from 'react'
const FAQSectionHeavySection = dynamic(() => import('@/components/educationalComponents/FAQ'), {
  loading: () => <Loading/>,
});
const TranslatorHeavySection = dynamic(() => import('@/components/educationalComponents/GreekWordAnalyzer'), {
  loading: () => <Loading/>,
});
const InteractiveMapHeavySection = dynamic(() => import('@/components/educationalComponents/InteractiveMap'), {
  loading: () => <Loading/>,
});
const QuizSectionHeavySection = dynamic(() => import('@/components/educationalComponents/QuizSection'), {
  loading: () => <Loading/>,
});
export default function Eduction() {
  return (
    <>
      {/* <main> */}
        <h1 className="text-center text-4xl md:text-5xl font-bold my-4">
          قسم التعليم
        </h1>
        <section className="p-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-6">الخريطه تفاعليه</h2>
            <InteractiveMapHeavySection />
            {/* </div> */}
          </div>
        </section>
        <section className="p-8">
          <TranslatorHeavySection />
        </section>
        <section className="p-8">
          <FAQSectionHeavySection />
        </section>
        <section className="p-8">
          <QuizSectionHeavySection />
        </section>
      {/* </main> */}
    </>
  )
}
