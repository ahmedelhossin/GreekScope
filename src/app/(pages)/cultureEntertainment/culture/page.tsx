
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


export default function CulturePage() {
  return (
    <div dir='rtl' className=" min-h-screen">

      <BannerHeavySection image="/cultureBanner.avif" alt="Culture Greece" />

      <div className="max-w-6xl mx-auto px-6 py-10">

        <PageHeaderHeavySection
          title="🎨 الثقافة اليونانية"
          description="استكشف العادات والتقاليد والفنون والمهرجانات في اليونان القديمة، واكتشف كيف شكّلت الثقافة حياة الناس آنذاك وما زالت مؤثرة حتى اليوم."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCardHeavySection title="الحياة اليومية" description="تعرف على الروتين اليومي لليونانيين القدماء، من التعليم إلى الطعام ووسائل الترفيه البسيطة." />
          <SectionCardHeavySection title="الفنون والحرف" description="استكشف النحت والرسم والفخار اليوناني، وكيف كانت الفنون وسيلة للتعبير عن الجمال والمعتقدات." />
          <SectionCardHeavySection title="الموسيقى والرقص" description="الموسيقى كانت جزءًا أساسيًا من المهرجانات والاحتفالات، والرقص يعكس طقوسًا ومعتقدات مختلفة." />
          <SectionCardHeavySection title="المهرجانات والاحتفالات" description="المهرجانات كانت فرصة للتجمع الاجتماعي وعرض الفنون والمسرحيات والموسيقى أمام الجمهور." />
        </div>

        <CTASectionHeavySection
          text="الثقافة اليونانية لم تكن مجرد تسلية، بل كانت جزءًا من التعليم والتربية الاجتماعية، وما زالت آثارها حاضرة في فنوننا الحديثة."
          buttonText="العودة للصفحة الرئيسية"
          href="/"
        />

      </div>
    </div>
  )
}
