// import Link from 'next/link'
import React from 'react'
// import PlaceCard from './homePlaceCard';
import dynamic from 'next/dynamic';
import { places } from '@/data/HomeBestPlacesData';
import Loading from '@/app/loading';
const PlaceCardHeavySection = dynamic(() => import("@/components/homeComponents/homePlaceCard"), {
  loading: () => <Loading/>,
});
// import { link } from 'fs';


export default function HomeBestVisites() {


    return (
        <>
            <h2 className="text-2xl font-semibold mb-6">أفضل المعالم السياحية
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {places.map((place) => (
                    <PlaceCardHeavySection key={place.id} {...place} />
                ))}
            </div>
        </>
    )
}
