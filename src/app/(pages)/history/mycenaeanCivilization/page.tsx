// "use client";
import React from 'react'
const CivilizationPageHeavySection = dynamic(() => import('@/components/history/civilizationPage'), {
  loading: () => <Loading/>,
});
import dynamic from 'next/dynamic';
import { mycenaeanData } from '@/data/MycenaeanData';
import Loading from '@/app/loading';



export default function MycenaeanCivilization() {
  return (
    <CivilizationPageHeavySection data={mycenaeanData} />
  )
}
