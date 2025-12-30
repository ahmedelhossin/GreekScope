import React from 'react'
import dynamic from 'next/dynamic'
import { overviewCards } from '@/data/CeCard';
import { influentialPeople } from '@/data/CeInfleuntialPerson';
import { funFacts } from '@/data/CeFunFact';
import { comparisonData } from '@/data/CeComparisonData';
import { exploreMore } from '@/data/CeExploreMore';
import Loading from '@/app/loading';
const CeHeroHeavySection = dynamic(() => import('@/components/cultureEntertainment/ceHero'), {
    loading: () => <Loading/>,
});
const CeOverviewCardsHeavySection = dynamic(() => import('@/components/cultureEntertainment/CeOverviewCards'), {
    loading: () => <Loading/>,
});
const CeInfluentialPeopleHeavySection = dynamic(() => import('@/components/cultureEntertainment/CeInfluentialPeople'), {
    loading: () => <Loading/>,
});
const CeFunFactsHeavySection = dynamic(() => import('@/components/cultureEntertainment/CeFunFacts'), {
    loading: () => <Loading/>,
});
const CeComparisonHeavySection = dynamic(() => import('@/components/cultureEntertainment/CeComparison'), {
    loading: () => <Loading/>,
});
const CeImpactTodaySection = dynamic(() => import('@/components/cultureEntertainment/CeImpactToday'), {
    loading: () => <Loading/>,
});
const CeExploreMoreHeavySection = dynamic(() => import('@/components/cultureEntertainment/CeExploreMore'), {
    loading: () => <Loading/>,
});
const CeCTAHeavySection = dynamic(() => import('@/components/cultureEntertainment/CeCTA'), {
    loading: () => <Loading/>,
});
export default function CeLanding() {
  

  return (
    <div dir='rtl' className="">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <CeHeroHeavySection />
        <CeOverviewCardsHeavySection cards={overviewCards} />
        <CeInfluentialPeopleHeavySection people={influentialPeople} />
        <CeFunFactsHeavySection facts={funFacts} />
        <CeComparisonHeavySection oldItems={comparisonData.oldItems} newItems={comparisonData.newItems} />
        <CeImpactTodaySection />
        <CeExploreMoreHeavySection cards={exploreMore} />
        <CeCTAHeavySection />
      </div>
    </div>
  )
}
