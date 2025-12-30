import { HistoryDatasI } from "@/interfaces/HistoryDatasI";
import { Calendar, MapPin, Crown, Users, DollarSign, BookOpen, Image, Edit3, AlertCircle, Zap } from "lucide-react";

export const mycenaeanData:HistoryDatasI = {
    title: "الحضارة الميسينية",
    period: { icon: Calendar, text: "1600 – 1100 ق.م" },
    location: { icon: MapPin, text: "البر الرئيسي لليونان" },
    origin: { icon: Zap, text: "ظهرت بعد الحضارة المينوسية، متأثرة بها لكنها أكثر عسكرية وتنظيمًا، وركزت على القلاع والمحميات القوية." },
    politics: { icon: Crown, text: "حكم ملكي قوي، الملوك يعيشون داخل قلاع محصنة، سلطة مركزية واضحة، إدارة مركزية وشبه دينية في بعض الحالات." },
    society: { icon: Users, text: "مجتمع طبقي: ملك، نبلاء، محاربون، عامة الشعب. التركيز على الشجاعة العسكرية والشرف. الحرفيون والتجار مهمتهم دعم الاقتصاد والحروب." },
    economy: { icon: DollarSign, text: "الزراعة، الغنائم من الحروب، التجارة البحرية مع الدول المجاورة. إنتاج الأسلحة والبرونز والفخار. استخدام موارد طبيعية متنوعة." },
    religion_culture: { icon: BookOpen, text: "عبادة الآلهة المرتبطة بالحرب والخصوبة، تأثير الأساطير لاحقًا على الإلياذة والأوديسة، طقوس دينية في القلاع والمواقع المحصنة." },
    art_architecture: { icon: Image, text: "أسوار ضخمة (سيكلوبية)، قصور محصنة، مقابر ضخمة (تومبي)، تماثيل صغيرة ونقوش على المعادن." },
    writing: { icon: Edit3, text: "Linear B، أقدم كتابة يونانية معروفة، لتسجيل التجارة والموارد والإدارة." },
    fall: { icon: AlertCircle, text: "انهيار مفاجئ بسبب الصراعات الداخلية، غزوات الشعوب البحرية، وزلازل، مما أدى لنهاية الحضارة الميسينية." },
    image: "/historyMycenaean.avif",
    extra: { icon: Zap, text: "تقدم في استخدام العربات الحربية والأسلحة البرونزية، تطوير أساليب الدفاع والهندسة العسكرية، تأثير كبير على الثقافة اليونانية لاحقًا." }
};