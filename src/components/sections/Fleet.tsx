import { Button } from "../ui/Button";
import { Users, Gauge, Plane } from "lucide-react";
import { aircraftFleet } from "@/data/fleet";

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aircraftFleet.map((jet, index) => (
                        <div key={jet.id} className="group relative overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-xl hover:-translate-y-1">

                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={jet.image}
                                    alt={`${jet.make} ${jet.model}`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-secondary text-primary font-bold px-3 py-1 text-sm rounded-full">
                                    From ${jet.pricePerHour.toLocaleString()}/hr
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="mb-4">
                                    <span className="text-sm font-medium text-secondary uppercase tracking-wider">{jet.category}</span>
                                    <h3 className="text-2xl font-serif font-bold text-primary dark:text-white mt-1">{jet.make} {jet.model}</h3>
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
