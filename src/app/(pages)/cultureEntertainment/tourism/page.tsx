// import TourismHighlights from "@/components/cultureEntertainment/tourismHighlights";

import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const BannerHeavySection = dynamic(() => import('@/components/cultureEntertainment/ceBanner'), {
  loading: () => <Loading/>,
});
const PageHeaderHeavySection = dynamic(() => import('@/components/cultureEntertainment/cePageHeader'), {
  loading: () => <Loading/>,
});
const SectionCardHeavySection = dynamic(() => import('@/components/cultureEntertainment/ceSectionCard'), {
  loading: () => <Loading/>,
});
const CTASectionHeavySection = dynamic(() => import('@/components/cultureEntertainment/ceCTASection'), {
  loading: () => <Loading/>,
});
export default function TourismPage() {
  return (
    <div dir='rtl' className=" min-h-screen">

      <BannerHeavySection image="/tourismBanner.avif" alt="Greek Tourism" />

      <div className="max-w-6xl mx-auto px-6 py-10">

        <PageHeaderHeavySection
          title="✈️ السياحة في اليونان"
          description="اكتشف أشهر المعالم والتجارب السياحية في اليونان، من المدن القديمة إلى المعابد والمسارح الأثرية."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCardHeavySection title="المعابد والمدن القديمة" description="زيارة المواقع التاريخية مثل الأكروبوليس والمدن اليونانية القديمة." />
          <SectionCardHeavySection title="المتاحف والمعارض" description="اكتشف الفنون والتحف التي تحكي تاريخ اليونان وثقافتها." />
          <SectionCardHeavySection title="الطبيعة والجزر" description="تمتع بجمال الطبيعة، الشواطئ والجزر اليونانية الخلابة." />
          <SectionCardHeavySection title="المهرجانات والأنشطة" description="شارك في الفعاليات والمهرجانات الثقافية الحديثة والمحفوظة من الماضي." />
        </div>

        <CTASectionHeavySection
          text="اليونان بلد غني بالتاريخ والثقافة والجمال الطبيعي، وتمنح السياحة فرصة للغوص في الماضي والاستمتاع بالحاضر."
          buttonText="العودة للصفحة الرئيسية"
          href="/"
        />

      </div>
    </div>
  )
}

