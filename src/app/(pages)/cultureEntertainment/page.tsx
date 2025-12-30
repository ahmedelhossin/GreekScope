import React from 'react'

// import CeLanding from "@/components/cultureEntertainment/ceLanding";
import dynamic from "next/dynamic";
import Loading from '@/app/loading';
const CeLandingHeavySection = dynamic(() => import('@/components/cultureEntertainment/ceLanding'), {
  loading: () => <Loading/>,
});

// import CeCard from "@/components/cultureEntertainment/ceCard";
// import CeSectionHeader from "@/components/cultureEntertainment/ceSectionHeader";

export default function CultureEntertainmentPage() {
  return (
    <CeLandingHeavySection />
  );
}

