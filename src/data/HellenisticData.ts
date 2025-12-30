import { HistoryDatasI } from "@/interfaces/HistoryDatasI";
import { Calendar, MapPin, Crown, Users, DollarSign, BookOpen, Image, Edit3, AlertCircle, Zap } from "lucide-react";

export const hellenisticData:HistoryDatasI = {
    title: "الحضارة الهيلينية",
    period: { icon: Calendar, text: "323 – 31 ق.م" },
    location: { icon: MapPin, text: "من اليونان إلى مصر وفارس والهند" },
    origin: { icon: Zap, text: "بدأت بعد وفاة الإسكندر الأكبر، امتداد الثقافة اليونانية وانتشارها في العالم القديم." },
    politics: { icon: Crown, text: "ممالك كبرى: البطالمة، السلوقيون، المقدونيون. هيمنة عسكرية وسياسية واسعة، تطوير الإدارة المركزية." },
    society: { icon: Users, text: "تنوع ثقافي كبير، دمج العادات اليونانية مع المحلية، ازدهار المدن الكبرى والمراكز الثقافية." },
    economy: { icon: DollarSign, text: "تجارة بحرية وبينية واسعة، زراعة وصناعة موسعة، استخدام العملة بشكل موحد لتسهيل التجارة، تطور البنية التحتية." },
    religion_culture: { icon: BookOpen, text: "دمج بين الثقافة اليونانية والشرقية، الفلسفات العملية مثل الرواقية، انتشار المسرح والفنون الجميلة، طقوس دينية متنوعة." },
    art_architecture: { icon: Image, text: "الهندسة المعمارية الكبرى: مكتبة الإسكندرية، تماثيل ضخمة، تطوير الفنون البصرية والفنون التطبيقية." },
    writing: { icon: Edit3, text: "توثيق تاريخي، أدبي، وعلمي، انتشار النصوص اليونانية في الشرق، استخدام الكتابة في الإدارة والفلسفة." },
    fall: { icon: AlertCircle, text: "انتهاء العصر مع هزيمة كليوباترا والسيطرة الرومانية، نهاية النفوذ الهيليني العسكري والسياسي." },
    extra: { icon: Zap, text: "انتشار التعليم والعلوم، تقدم في الفلك والجغرافيا والهندسة، تأثير دائم على الثقافات الشرقية والغربية." },
    image: "/historyHellenisticF.avif"
};