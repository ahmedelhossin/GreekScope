// // "use client";

// // import React, { useEffect, useState } from "react";
// // import { translate } from "libretranslate";

// export default function Page() {
//   // const [result, setResult] = useState("");

//   // useEffect(() => {
//   //   async function run() {
//   //     try {
//   //       const res = await translate({
//   //         query: "مرحبا", // Arabic text
//   //         source: "ar",
//   //         target: "el",
//   //         format: "text",
//   //         apiurl: "https://libretranslate.de",
//   //       });

//   //       setResult(res.translatedText || res); // depends on the package response
//   //     } catch (err) {
//   //       console.error(err);
//   //       setResult("حدث خطأ أثناء الترجمة");
//   //     }
//   //   }

//   //   run();
//   // }, []);

//   return (
//     <div>
//       <h1>Arabic → Greek Translation</h1>
//       <p>Result: {}</p>
//     </div>
//   );
// }
// import MythologyCards from "@/components/cultureEntertainment/mythologyCards";
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

export default function MythologyPage() {
  return (
    <div dir='rtl' className=" min-h-screen">

      <BannerHeavySection image="/mythologyBanner.avif" alt="Greek Mythology" />

      <div className="max-w-6xl mx-auto px-6 py-10">

        <PageHeaderHeavySection
          title="⚡ الأساطير اليونانية"
          description="استكشف عالم الآلهة والأبطال والأساطير اليونانية القديمة، واكتشف القصص التي شكلت المعتقدات والقيم."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCardHeavySection title="الآلهة" description="تعرف على آلهة الأوليمب ودورهم في الحياة اليومية لليونانيين القدماء." />
          <SectionCardHeavySection title="الأبطال الأسطوريون" description="قصص هيراكليس، أوديسيوس، وبقية الأبطال الذين تحدوا المستحيل." />
          <SectionCardHeavySection title="الأساطير والشخصيات" description="قصص عن الحب، الحرب، والخيانة التي أثرت على الأدب والفن." />
          <SectionCardHeavySection title="الرموز والمعاني" description="استكشف الرموز الأسطورية ومعانيها في الثقافة والفنون." />
        </div>

        <CTASectionHeavySection
          text="الأساطير اليونانية ليست مجرد قصص، بل دروس وحكم وعالم غني بالإبداع، وما زالت تلهمنا حتى اليوم."
          buttonText="العودة للصفحة الرئيسية"
          href="/"
        />

      </div>
    </div>
  )
}

