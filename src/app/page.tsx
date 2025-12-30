// import Image from "next/image";
// import HomeBanner from "@/components/homeComponents/homeBanner";
// import HomeLanding from "@/components/homeComponents/homeLanding";
import dynamic from "next/dynamic";
import Loading from "./loading";
    // import OpenAI from "openai";

export default function Home() {
//   async function fetchData() {
//     const completion = await openai.chat.completions.create({
//   model: "gpt-4o-mini",
//   messages: [
//     { role: "system", content: "أنت محلل لغوي يوناني → عربي" },
//     { role: "user", content: "حلّل الكلمة: γεια σου" }
//   ],
// });
const HomeBannerHeavySection = dynamic(() => import("@/components/homeComponents/homeBanner"), {
    loading: () => <Loading/>,
});
const HomeLandingHeavySection = dynamic(() => import("@/components/homeComponents/homeLanding"), {
    loading: () => <Loading/>,
});

// console.log(completion.choices[0].message.content);
  return (
    <>
      <HomeBannerHeavySection/>
      <HomeLandingHeavySection/>
      
    </>
  );
}
