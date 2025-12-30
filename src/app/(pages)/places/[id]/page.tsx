"use client";
import { ChevronDownIcon, SlashIcon } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useParams, notFound } from "next/navigation";
import  {places}  from "@/data/HomeBestPlacesData";
import Link from "next/link";
import Image from "next/image";

export default function PlacePage() {
    const params = useParams();
    const id = params.id as string;

    const place = places.find((p) => p.id === id);

    if (!place) return notFound();

    return (
        <div className="max-w-5xl mx-auto p-6">

            <Breadcrumb dir="rtl">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">الرئيسيه</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5">
                                الأماكن
                                <ChevronDownIcon />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem><Link href="/places/acropolisMuseum">Acropolis Museum</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/places/santoriniCaldera">Santorini Caldera</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/places/delphi">Delphi</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/places/knossos">Knossos</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/places/rhodesOldtown">Rhodes Oldtown</Link></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>{place.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-3xl font-bold my-5">{place.name}</h1>

            <Image
            width={500}
            height={500}
                src={place.image}
                alt={place.name}
                className="w-full h-96 object-cover rounded-lg mb-6"
            />

            <p className="text-gray-600 mb-2">📍 {place.city}</p>
            <p className="text-gray-600 mb-2">⭐ التقييم: {place.rating}</p>
            <p className="text-gray-600 mb-6">
                💶 السعر يبدأ من €{place.price}
            </p>

            <p className="leading-relaxed">
                {place.desk}
            </p>
        </div>
    );
}
