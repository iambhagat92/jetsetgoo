export type AircraftCategory = "Light Jet" | "Mid-Size Jet" | "Super Mid-Size Jet" | "Heavy Jet" | "Ultra-Long Range Jet";

export interface Aircraft {
    id: string;
    category: AircraftCategory;
    make: string;
    model: string;
    range: string; // e.g. "2,040 nm"
    speed: string; // e.g. "450 kts"
    seats: number;
    pricePerHour: number; // e.g. 3500
    description: string;
    features: string[];
    image: string;
}

export const aircraftFleet: Aircraft[] = [
    {
        id: "cj4",
        category: "Light Jet",
        make: "Cessna",
        model: "Citation CJ4",
        range: "2,165 nm",
        speed: "451 kts",
        seats: 7,
        pricePerHour: 4000,
        description: "The ultimate single-pilot jet, delivering exceptional performance, range, and comfort for short to mid-range missions.",
        features: ["WiFi Available", "Enclosed Lavatory", "Refreshment Center"],
        image: "https://images.unsplash.com/photo-1569154941061-e23115259636?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "phenom300",
        category: "Light Jet",
        make: "Embraer",
        model: "Phenom 300E",
        range: "2,010 nm",
        speed: "464 kts",
        seats: 7,
        pricePerHour: 4500,
        description: "Best-in-class performance and comfort, featuring a spacious cabin and large windows.",
        features: ["Lie-flat seats", "Largest baggage capacity in class", "Premium Entertainment"],
        image: "https://images.unsplash.com/photo-1559081919-4b680f4f728c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "citation-latitude",
        category: "Mid-Size Jet",
        make: "Cessna",
        model: "Citation Latitude",
        range: "2,700 nm",
        speed: "446 kts",
        seats: 9,
        pricePerHour: 6200,
        description: "Features a flat floor stand-up cabin and class-leading comfort for coast-to-coast travel.",
        features: ["Flat floor cabin", "Wireless Cabin Management", "Spacious Lavatory"],
        image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "challenger-350",
        category: "Super Mid-Size Jet",
        make: "Bombardier",
        model: "Challenger 350",
        range: "3,200 nm",
        speed: "470 kts",
        seats: 9,
        pricePerHour: 9000,
        description: "The best-selling business jet platform of the last decade, offering a smooth ride and impressive range.",
        features: ["Angled lie-flat seats", "Ka-band high-speed internet", "Accessible baggage"],
        image: "https://images.unsplash.com/photo-1583069677096-7c156637b524?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "gulfstream-g280",
        category: "Super Mid-Size Jet",
        make: "Gulfstream",
        model: "G280",
        range: "3,600 nm",
        speed: "482 kts",
        seats: 10,
        pricePerHour: 8500,
        description: "Demonstrates superior range and speed, connecting London to New York nonstop.",
        features: ["100% fresh air system", "Vacuum toilet", "Full galley"],
        image: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "legacy-600",
        category: "Heavy Jet",
        make: "Embraer",
        model: "Legacy 600",
        range: "3,400 nm",
        speed: "450 kts",
        seats: 13,
        pricePerHour: 9500,
        description: "Three distinct cabin zones allow for work, dining, and relaxation on long-haul flights.",
        features: ["Three cabin zones", "Large baggage compartment", "Berthable seats"],
        image: "https://images.unsplash.com/photo-1622359595804-0c58e8b611dd?q=80&w=2056&auto=format&fit=crop"
    },
    {
        id: "gulfstream-g650er",
        category: "Ultra-Long Range Jet",
        make: "Gulfstream",
        model: "G650ER",
        range: "7,500 nm",
        speed: "516 kts",
        seats: 16,
        pricePerHour: 15000,
        description: "The gold standard in business aviation, capable of flying further and faster than any other jet.",
        features: ["Global connectivity", "Lowest cabin altitude", "Panaromic windows"],
        image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "global-7500",
        category: "Ultra-Long Range Jet",
        make: "Bombardier",
        model: "Global 7500",
        range: "7,700 nm",
        speed: "530 kts",
        seats: 19,
        pricePerHour: 17000,
        description: "Industry's largest and longest range business jet, featuring four true living spaces.",
        features: ["Master Suite with bed", "Full kitchen", "Crew rest area"],
        image: "https://images.unsplash.com/photo-1610484080922-a8c60dc323c6?q=80&w=2070&auto=format&fit=crop"
    }
];
