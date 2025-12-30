import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import {  SlashIcon } from "lucide-react";
import Image from "next/image";
import { societyDevelopment } from "@/data/SocietyDevelopmentProps";





export default function SocietyDevelopment() {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-8">
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
            <BreadcrumbPage>المجتمع والتنمية</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mt-6 mb-12">المجتمع والتنمية في اليونان القديمة</h1>
      {societyDevelopment.map((section, index) => (
        <section key={index} className={`mb-12 flex flex-col ${section.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-6`}>
          <div className="relative w-full md:w-1/2 h-72 md:h-96">
            <Image src={section.image} alt={section.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p>{section.text}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
