// "use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import Link from "next/link";
import { ChevronDownIcon, SlashIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { HistoryDatasI } from "@/interfaces/HistoryDatasI";
import { arabicTitles } from "@/data/HistoryArabicTitles";






// interface CivilizationPageProps {
//     data: CivilizationData;
// }

export default function CivilizationPage({ data }: { data: HistoryDatasI }) {

    return (
        <div className="min-h-screen bg-linear-to-b from-emerald-50 to-white px-4 py-12 max-w-5xl mx-auto">
            <Breadcrumb className="mb-7" dir="rtl">
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
                                الحضارات
                                <ChevronDownIcon />
                            </DropdownMenuTrigger>
                            {/* <div dir="ltr"> */}
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem><Link href="/history/archaicGreekCivilization">الحضارة المينويانية الإغريقية المبكرة </Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/history/classicalGreekCivilization">الحضارة الإغريقية الكلاسيكية</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/history/hellenisticCivilization">الحضارة الهيلينية</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/history/minoanCivilization">الحضارة المينوسية</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/history/mycenaeanCivilization">الحضارة الميسينية</Link></DropdownMenuItem>
                            </DropdownMenuContent>
                            {/* </div> */}
                        </DropdownMenu>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-black">{data.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl font-bold text-center mb-8 text-black">{data.title}</h1>
            <div className="relative h-64 w-full mb-8">
                <Image src={data.image} alt={data.title} fill className="object-cover rounded-lg shadow-lg" />
            </div>

            <div className="space-y-6 text-gray-700">
                {Object.entries(data).map(([key, value]) => {
                    if (key === "title" || key === "image") return null;
                    const section = value as { icon: React.ElementType; text: string };
                    const Icon = section.icon;

                    // استخدم arabicTitles بدل key
                    // const title = arabicTitles[key] || key.replace("_", " ");

                    return (
                        <Card
                            key={key}
                            className="transition-transform transform md:hover:-translate-y-1 md:hover:shadow-xl md:hover:bg-emerald-50  md:hover:text-black active:-translate-y-1 active:shadow-xl active:bg-emerald-50 active:text-black"
                        >
                            <CardContent className="flex items-start gap-3" dir="rtl">
                                {Icon && <Icon className="text-2xl text-emerald-500 mt-1 shrink-0" />}
                                <div className="flex-1">
                                    <CardHeader>
                                        <CardTitle>{arabicTitles[key] || key.replace("_", " ")}</CardTitle>
                                        <CardDescription className="whitespace-pre-line">{section.text}</CardDescription>
                                    </CardHeader>
                                </div>
                            </CardContent>
                        </Card>

                    );
                })}
            </div>
        </div>
    );
}
