// "use client";
import Loading from "@/app/loading";
import { archaicData } from "@/data/ArchaicData";
import dynamic from "next/dynamic";

const CivilizationPageHeavySection = dynamic(() => import('@/components/history/civilizationPage'), {
  loading: () => <Loading/>,
});





export default function Page() {
  return <CivilizationPageHeavySection data={archaicData} />;
}