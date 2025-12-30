import { Place } from "@/interfaces/Region";

export const regions: Place[] = [
    // Neighboring Countries
    { id: "bulgaria", name: "Bulgaria", type: "country", coordinates: { x: "53.8%", y: "7.8%" } },
    { id: "fyrom", name: "FYROM (North Macedonia)", type: "country", coordinates: { x: "25.5%", y: "9.3%" } },
    { id: "albania", name: "Albania", type: "country", coordinates: { x: "10.0%", y: "15.8%" } },
    { id: "turkey", name: "Turkey", type: "country", coordinates: { x: "87.3%", y: "26.3%" } },

    // Cities
    { id: "kavala", name: "Kavala", type: "city", region: "East Macedonia", coordinates: { x: "52.3%", y: "11.5%" } },
    { id: "komotini", name: "Komotini", type: "city", region: "Thrace", coordinates: { x: "64.8%", y: "11.8%" } },
    { id: "edessa", name: "Edessa", type: "city", region: "Central Macedonia", coordinates: { x: "32.2%", y: "14.8%" } },
    { id: "thessaloniki", name: "Thessaloniki", type: "city", region: "Central Macedonia", coordinates: { x: "42.5%", y: "17.1%" } },
    { id: "ioannina", name: "Ioannina", type: "city", region: "Epirus", coordinates: { x: "22.5%", y: "28.5%" } },
    // Fixed syntax error (missing closing brace) for Larissa below:
    { id: "larissa", name: "Larissa", type: "city", region: "Thessaly", coordinates: { x: "42.0%", y: "30.0%" } }, 
    { id: "volos", name: "Volos", type: "city", region: "Thessaly", coordinates: { x: "45.8%", y: "34.5%" } },
    { id: "preveza", name: "Preveza", type: "city", region: "Epirus", coordinates: { x: "21.0%", y: "39.8%" } },
    { id: "lamia", name: "Lamia", type: "city", region: "Central Greece", coordinates: { x: "41.5%", y: "41.8%" } },
    { id: "patras", name: "Patras", type: "city", region: "Western Greece", coordinates: { x: "32.3%", y: "50.0%" } },
    { id: "athens", name: "Athens", type: "city", region: "Attica", coordinates: { x: "56.3%", y: "52.8%" } },
    { id: "kalamata", name: "Kalamata", type: "city", region: "Peloponnese", coordinates: { x: "37.0%", y: "65.3%" } },
    { id: "sparta", name: "Sparta", type: "city", region: "Peloponnese", coordinates: { x: "43.5%", y: "65.3%" } },
    { id: "heraklion", name: "Heraklion", type: "city", region: "Crete", coordinates: { x: "62.3%", y: "85.8%" } },

    // Islands
    { id: "corfu", name: "Corfu", type: "island", region: "Ionian Sea", coordinates: { x: "10.3%", y: "31.8%" } },
    { id: "cephalonia", name: "Cephalonia", type: "island", region: "Ionian Sea", coordinates: { x: "13.8%", y: "49.0%" } },
    { id: "lemnos", name: "Lemnos", type: "island", region: "Aegean Sea", coordinates: { x: "62.5%", y: "32.8%" } },
    { id: "lesbos", name: "Lesbos", type: "island", region: "Aegean Sea", coordinates: { x: "72.5%", y: "42.3%" } },
    { id: "cythera", name: "Cythera", type: "island", region: "Ionian Sea", coordinates: { x: "42.8%", y: "73.8%" } },
    { id: "rhodes", name: "Rhodes", type: "island", region: "Aegean Sea", coordinates: { x: "87.0%", y: "74.8%" } },
    { id: "karpathos", name: "Karpathos", type: "island", region: "Aegean Sea", coordinates: { x: "81.3%", y: "80.8%" } },
    { id: "crete", name: "Crete", type: "island", region: "Sea of Crete", coordinates: { x: "58.8%", y: "89.3%" } },

    // Seas and Regions
    { id: "cyclades", name: "Cyclades", type: "region", coordinates: { x: "63.0%", y: "62.8%" } },
    { id: "aegean-sea", name: "Aegean Sea", type: "sea", coordinates: { x: "63.5%", y: "46.3%" } },
    { id: "ionian-sea", name: "Ionian Sea", type: "sea", coordinates: { x: "11.0%", y: "60.0%" } },
    { id: "sea-of-crete", name: "Sea of Crete", type: "sea", coordinates: { x: "61.5%", y: "78.0%" } },
    { id: "mediterranean-sea", name: "Mediterranean Sea", type: "sea", coordinates: { x: "63.0%", y: "94.3%" } }
];