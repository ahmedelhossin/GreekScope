"use client";

import { quiz as allQuestions } from "@/data/QuizQuestion";
import { useEffect, useState } from "react";

function shuffle<T>(array: T[]): T[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

export default function GreekQuiz() {
    /* ================= INIT (NO useEffect) ================= */
    const [quiz] = useState(() =>
        shuffle(allQuestions).slice(0, 30)
    );

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);

    const [shuffledOptions, setShuffledOptions] = useState<string[]>(() =>
        quiz.length ? shuffle(quiz[0].options) : []
    );

    /* ================= USER ================= */
    const [inputName, setInputName] = useState("");
    const [userName, setUserName] = useState<string | null>(null);



    /* ================= STATE ================= */
    const [finished, setFinished] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const [highScore] = useState<number>(() => {
        if (typeof window === "undefined") return 0;
        const stored = localStorage.getItem("highScore");
        return stored ? Number(stored) : 0;
    });


    const liveHighScore = Math.max(highScore, score);


    useEffect(() => {
        if (!finished) return;
        localStorage.setItem(
            "highScore",
            Math.max(highScore, score).toString()
        );
    }, [finished, score, highScore]);

    /* ================= ANSWER ================= */
    const handleAnswer = (option: string) => {
        if (selectedOption) return;

        const isCorrect = option === quiz[current].correct;
        setSelectedOption(option);

        setTimeout(() => {
            if (isCorrect) setScore(s => s + 1);

            const next = current + 1;
            if (next >= quiz.length) {
                setFinished(true);
            } else {
                setCurrent(next);
                setShuffledOptions(shuffle(quiz[next].options));
            }

            setSelectedOption(null);
        }, 1200);
    };

    /* ================= CERTIFICATE ================= */
    const downloadCertificate = async () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = new Image();
        img.src = "/certificate.avif";
        await new Promise(res => (img.onload = res));

        canvas.width = img.width;
        canvas.height = img.height;

        await document.fonts.load("120px Cairo");
        await document.fonts.load("48px Cairo");
        await document.fonts.load("42px Cairo");

        ctx.drawImage(img, 0, 0);

        ctx.textAlign = "center";
        ctx.direction = "rtl";
        ctx.textBaseline = "middle";

        ctx.font = "700 120px Cairo";
        ctx.fillStyle = "#C9A227";
        ctx.fillText(userName!, canvas.width / 2, 660);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 4;
        ctx.strokeText(userName!, canvas.width / 2, 660);

        ctx.font = "700 48px Cairo";
        ctx.fillText(`${score} من ${quiz.length}`, 520, 960);

        const today = new Date().toLocaleDateString("ar-EG");
        ctx.font = "600 42px Cairo";
        ctx.fillText(today, canvas.width - 545, 960);

        const link = document.createElement("a");
        link.download = `certificate-${userName}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
    };

    /* ================= UI ================= */
    if (!quiz.length) return null;

    if (userName === null) {
        return (
            <div className="max-w-md mx-auto p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">أدخل اسمك للشهادة 🎓</h2>
                <input
                    className="border p-2 rounded w-full mb-4"
                    value={inputName}
                    placeholder="اكتب اسمك هنا"
                    onChange={e => setInputName(e.target.value)}
                />
                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded disabled:opacity-50"
                    disabled={!inputName.trim()}
                    onClick={() => setUserName(inputName.trim())}
                >
                    ابدأ الكويز
                </button>
            </div>
        );
    }

    if (finished) {
        const today = new Date().toLocaleDateString("ar-EG");

        return (
            <div className="max-w-md mx-auto p-8 text-black text-center border-4 border-yellow-500 rounded-xl bg-yellow-50">
                <h2 className="text-3xl font-bold mb-4 text-yellow-700">شهادة إتمام 🎓</h2>
                <p className="text-xl font-bold text-blue-700">{userName}</p>
                <p className="mb-2">الدرجة: {score} / {quiz.length}</p>
                <p className="text-sm">High Score: {liveHighScore}</p>
                <p className="text-sm mb-4">التاريخ: {today}</p>

                <button
                    className="bg-green-600 text-white px-6 py-3 rounded"
                    onClick={downloadCertificate}
                >
                    تحميل الشهادة 🖨️
                </button>
            </div>
        );
    }

    const correct = quiz[current].correct;

    return (
        <div className="max-w-md mx-auto p-8">
            <h2 className="text-xl font-bold mb-4">{quiz[current].question}</h2>

            {shuffledOptions.map(opt => {
                let bg = "bg-blue-500 text-white";
                if (selectedOption) {
                    if (opt === correct) bg = "bg-green-500";
                    else if (opt === selectedOption) bg = "bg-red-500";
                    else bg = "bg-gray-300 text-gray-600";
                }

                return (
                    <button
                        key={opt}
                        onClick={() => handleAnswer(opt)}
                        disabled={!!selectedOption}
                        className={`block w-full p-4 mb-2 rounded ${bg}`}
                    >
                        {opt}
                    </button>
                );
            })}

            <div className="mt-4 flex justify-between text-sm text-gray-600">
                <span>سؤال {current + 1} / {quiz.length}</span>
                <span>HighScore: {liveHighScore}</span>
                <span
                    className="text-red-600 font-bold cursor-pointer"
                    onClick={() => setFinished(true)}
                >
                    انهِ الآن
                </span>
            </div>
        </div>
    );
}
