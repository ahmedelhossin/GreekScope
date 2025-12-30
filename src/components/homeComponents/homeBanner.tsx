import React from "react";
import Image from "next/image";

export default function HomeBanner() {
    return (
        <div className="w-full h-screen relative">
            {/* Background Image */}
            <Image
                src="/homeBanner.avif"
                alt="Home Banner"
                fill
                style={{ objectFit: "cover" }}
                className="absolute inset-0"
                priority
            />

            {/* Overlay Layer */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-white text-4xl font-bold mb-4">
                    اليونان - مهد الحضارة الغربية
                </h1>
                <p className="text-white font-bold">
                    اليونان، رسمياً الجمهورية الهيلينية، دولة ذات تراث تاريخي وثقافي غني
                    <br />
                    عاصمتها أثينا وأكبر مدنها، وتشتهر بجزرها الخلابة، جبالها المرتفعة، وأهمية تاريخية كبيرة.
                    <br />
                    وتقع في جنوب شرق أوروبا.
                </p>
            </div>
        </div>
    );
}
