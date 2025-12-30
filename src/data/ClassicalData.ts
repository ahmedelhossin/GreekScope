import { HistoryDatasI } from "@/interfaces/HistoryDatasI";
import { Calendar, MapPin, Crown, Users, DollarSign, BookOpen, Image, Edit3, AlertCircle, Zap } from "lucide-react";
export const classicalData:HistoryDatasI = {
    title: "الحضارة الإغريقية الكلاسيكية",
    period: { icon: Calendar, text: "500 – 323 ق.م" },
    location: { icon: MapPin, text: "اليونان" },
    origin: { icon: Zap, text: "مرحلة الذروة الثقافية والسياسية لليونان، ظهور الديمقراطية والفلاسفة العظام." },
    politics: { icon: Crown, text: "الديمقراطية في أثينا، النظام العسكري الصارم في إسبرطة، تطوير المؤسسات السياسية، قوانين مكتوبة واضحة." },
    society: { icon: Users, text: "مواطنون لديهم حقوق، التركيز على التعليم والفلسفة والفنون، طبقات مختلفة لكنها مترابطة اجتماعيًا." },
    economy: { icon: DollarSign, text: "زراعة متطورة، تجارة بحرية واسعة، صناعة الفخار والنحت، استخدام العملة على نطاق واسع." },
    religion_culture: { icon: BookOpen, text: "تطور المعتقدات الدينية، المسرح (تراجيديا وكوميديا)، الاحتفالات والمهرجانات الدينية والفنية." },
    art_architecture: { icon: Image, text: "النحت الواقعي، العمارة الكلاسيكية: البارثينون، استخدام الأعمدة الدورية، التماثيل الكبيرة والجداريات." },
    writing: { icon: Edit3, text: "تطوير النصوص الأدبية والفلسفية، توثيق الأحداث التاريخية، نصوص طبية وعلمية." },
    fall: { icon: AlertCircle, text: "انتهاء الحقبة مع فتوحات الإسكندر الأكبر وانتقال السلطة إلى الحقبة الهيلينية." },
    extra: { icon: Zap, text: "ظهور الفلسفة والمنطق، تقدم كبير في الطب والرياضيات والفنون، التأثير المستمر على الحضارة الغربية." },
    image: "/historyClassical.avif"
};