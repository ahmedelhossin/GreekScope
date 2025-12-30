export type PlaceType =
    | "city"
    | "island"
    | "region"
    | "sea"
    | "country";

export interface Place {
    id: string;
    name: string;
    type: PlaceType;
    region?: string;
    coordinates?: {
        x: string;
        y: string;
    };
    description?: string;
}
