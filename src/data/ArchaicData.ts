import { HistoryDatasI } from "@/interfaces/HistoryDatasI";
import {  Calendar, MapPin, Crown, Users, DollarSign, BookOpen, Image, Edit3, AlertCircle, Zap } from "lucide-react";

export const archaicData:HistoryDatasI = {
    title: "الحضارة الإغريقية المبكرة",
    period: { icon: Calendar, text: "800 – 500 ق.م" },
    location: { icon: MapPin, text: "اليونان" },
    origin: { icon: Zap, text: "بعد العصر المظلم، بدأت المدن–الدول بالظهور، مرحلة تأسيس الفنون والسياسة اليونانية." },
    politics: { icon: Crown, text: "ظهور أنظمة حكم مختلفة: ملكية، أرستقراطية، طغاة. بداية كتابة القوانين المنظمة للحياة العامة." },
    society: { icon: Users, text: "تنوع اجتماعي مع التركيز على التعليم والفنون. ظهور المواطنة الأولية. التجارة والصناعات الصغيرة في المدن." },
    economy: { icon: DollarSign, text: "التجارة الداخلية والخارجية، استخدام العملة المعدنية، زراعة الحبوب والزيتون، صناعة الفخار والحرف اليدوية." },
    religion_culture: { icon: BookOpen, text: "تنظيم الأساطير اليونانية، ظهور الشعر الملحمي (هوميروس)، طقوس دينية عامة ومهرجانات المدن." },
    art_architecture: { icon: Image, text: "تماثيل حجرية مبكرة، بداية العمارة الحجرية المنظمة، تصميم المعابد، استخدام الأعمدة البسيطة." },
    writing: { icon: Edit3, text: "تطوير الأبجدية اليونانية الأولى، تسجيل الأحداث التجارية والسياسية." },
    fall: { icon: AlertCircle, text: "لم تنتهِ فجأة، لكنها تحولت تدريجيًا إلى الحضارة الكلاسيكية مع نمو القوة السياسية والعسكرية في المدن." },
    extra: { icon: Zap, text: "ظهور المستعمرات اليونانية في البحر الأبيض المتوسط، تطور الفلسفة الأولية، الابتكار في الرياضيات والفنون." },
    image: "/historyArchaic.avif"
};