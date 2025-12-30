import { AboutStatsI } from '@/interfaces/AboutStatsI';
import { Landmark, LandPlot, Mountain, UsersRound } from 'lucide-react';

export const stats:AboutStatsI[] = [
    { title: "نظام الحكم", value: "جمهورية برلمانية", Icon: Landmark, bgColor: "bg-indigo-500" },
    { title: "عدد السكان", value: "حوالي 10.4 مليون نسمة", Icon: UsersRound, bgColor: "bg-green-500" },
    { title: "المساحة", value: "131,957 كم²", Icon: LandPlot, bgColor: "bg-yellow-500" },
    { title: "أعلى جبل", value: "أوليمبوس (2918 متر)", Icon: Mountain, bgColor: "bg-red-500" },
];