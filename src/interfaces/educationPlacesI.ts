export interface Place {
    id: string;
    name: string;
    x: number;
    y: number;
    description: string;
    region: string;
    type: PlaceType;      // strict
    knownFor: string;     // allow any descriptive string
};
export type PlaceType = "مدينة" | "عاصمة" | "جزيرة" | "موقع أثري" | "معلم طبيعي" | "ميناء" | "موقع تاريخي" | "مدينة تاريخية";
