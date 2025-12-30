// import AboutLanding from '
import React from 'react'
import dynamic from "next/dynamic";
import Loading from '@/app/loading';

const HeavySection = dynamic(() => import("@/components/aboutComponents/aboutLanding"), {
  loading: () => <Loading/>,
});

export default function AboutGreece() {
  return (
    <>
      <HeavySection />
    </>
  )
}
