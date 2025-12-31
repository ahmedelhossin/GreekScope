import { HomeBestPlaces } from "@/interfaces/HomeBestPlaces";
import Link from "next/link";
import Image from "next/image";

export default function PlaceCard({
    name,
    city,
    image,
    rating,
    price,
    link,
}: HomeBestPlaces) {
    return (
        <Link href={`${link}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden relative active:scale-[0.98] md:hover:scale-[1.02] transition">

                {/* Image Section */}
                <div className="relative h-40 w-full">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-t-lg"
                        priority={true}
                    />
                </div>

                {/* Rating Badge */}
                <div className="absolute top-2 left-2 bg-purple-700 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {rating}
                </div>

                {/* Card Content */}
                <div className="p-4 pt-2">
                    <p className="font-semibold text-black text-sm mb-1">{name}</p>
                    <p className="text-xs text-gray-500">{city}</p>

                    <div className="mt-3 border-t pt-2">
                        <p className="text-sm font-bold text-gray-700">
                            تذاكر تبدأ من <span className="text-lg">€{price}</span>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
