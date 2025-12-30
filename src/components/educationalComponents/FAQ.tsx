"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/FAQs";



export default function FAQSection() {


    return (
        <div className="max-w-6xl mx-auto p-8">
            <h2 className="text-3xl font-bold text-center mb-12">الأسئلة الشائعة (FAQ)</h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {faqs.map((faq, index) => (
                    <Accordion key={index} type="single" collapsible className="dark:bg-black bg-white shadow-lg rounded-lg p-4">
                        <AccordionItem value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-semibold ">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-gray-700 mt-2">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}
