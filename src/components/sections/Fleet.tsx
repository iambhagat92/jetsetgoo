import Image from "next/image";
import { Button } from "../ui/Button";
import { Users, Gauge, Plane } from "lucide-react";

const fleet = [
    {
        name: "Light Jets",
        model: "Citation CJ3+",
        image: "https://images.unsplash.com/photo-1559067515-bf7d799b6d42?q=80&w=1974&auto=format&fit=crop", // Placeholder
        seats: "6-7",
        speed: "480 mph",
        range: "2,040 nm",
        price: "From $4,500/hr",
    },
    {
        name: "Mid-Size Jets",
        model: "Hawker 900XP",
        image: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=2698&auto=format&fit=crop", // Placeholder
        seats: "8-9",
        speed: "520 mph",
        range: "2,800 nm",
        price: "From $6,500/hr",
    },
    {
        name: "Heavy Jets",
        model: "Gulfstream G650",
        image: "https://images.unsplash.com/photo-1583413230540-2f1eb44e8e59?q=80&w=2670&auto=format&fit=crop", // Placeholder
        seats: "12-16",
        speed: "610 mph",
        range: "7,000 nm",
        price: "From $11,000/hr",
    },
];

export function Fleet() {
    return (
        <section id="fleet" className="py-24 bg-white dark:bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-6">
                        Our Elite Fleet
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Choose from a versatile range of **private jets for rent**. From efficient light jets for short hops to luxurious heavy jets for transcontinental flights.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {fleet.map((jet, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-xl hover:-translate-y-1">

                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors z-10" />
                                <img // Using img for external placeholder simplicity, eventually Next/Image with proper loader or local asset
                                    src={jet.image}
                                    alt={jet.model}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-secondary text-primary font-bold px-3 py-1 text-sm rounded-full">
                                    {jet.price}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="mb-4">
                                    <span className="text-sm font-medium text-secondary uppercase tracking-wider">{jet.name}</span>
                                    <h3 className="text-2xl font-serif font-bold text-primary dark:text-white mt-1">{jet.model}</h3>
                                </div>

                                <div className="flex justify-between items-center py-4 border-t border-zinc-200 dark:border-zinc-700 mb-6">
                                    <div className="flex flex-col items-center">
                                        <Users size={18} className="text-muted-foreground mb-1" />
                                        <span className="text-xs font-medium">{jet.seats} Seats</span>
                                    </div>
                                    <div className="flex flex-col items-center border-l border-r border-zinc-200 dark:border-zinc-700 px-4">
                                        <Gauge size={18} className="text-muted-foreground mb-1" />
                                        <span className="text-xs font-medium">{jet.speed}</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Plane size={18} className="text-muted-foreground mb-1" />
                                        <span className="text-xs font-medium">{jet.range}</span>
                                    </div>
                                </div>

                                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary">
                                    View Specs
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
