// "use client";

const CivilizationPageHeavySection = dynamic(() => import('@/components/history/civilizationPage'), {
  loading: () => <Loading/>,
});
import Loading from "@/app/loading";
import { classicalData } from "@/data/ClassicalData";
import dynamic from "next/dynamic";




export default function Page() {
  return <CivilizationPageHeavySection data={classicalData} />;
}