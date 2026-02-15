import { Button } from "../ui/Button";
import { Check } from "lucide-react";

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-6">
                        Transparent Pricing
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Wondering **how much to rent a private jet for a day**? We believe in complete transparency. No hidden fees, just seamless travel.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    {/* Estimated Costs Table */}
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-zinc-100 dark:border-zinc-800">
                        <div className="bg-[#0A192F] p-6">
                            <h3 className="text-2xl font-serif font-bold text-white text-center">Hourly Rate Estimator</h3>
                        </div>
                        <div className="p-8">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-dashed border-zinc-200">
                                    <span className="font-medium text-lg">Turboprops</span>
                                    <span className="font-bold text-primary dark:text-white">$1,500 - $3,000 / hr</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-dashed border-zinc-200">
                                    <span className="font-medium text-lg">Light Jets</span>
                                    <span className="font-bold text-primary dark:text-white">$3,500 - $5,500 / hr</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-dashed border-zinc-200">
                                    <span className="font-medium text-lg">Mid-Size Jets</span>
                                    <span className="font-bold text-primary dark:text-white">$6,000 - $9,500 / hr</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-dashed border-zinc-200">
                                    <span className="font-medium text-lg">Super Mid-Size</span>
                                    <span className="font-bold text-primary dark:text-white">$9,500 - $13,000 / hr</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="font-medium text-lg">Heavy Jets</span>
                                    <span className="font-bold text-primary dark:text-white">$14,000+ / hr</span>
                                </div>
                            </div>
                            <div className="mt-8 text-center text-sm text-muted-foreground">
                                *Prices are estimates and vary based on route, aircraft availability, and season.
                            </div>
                        </div>
                    </div>

                    {/* Empty Legs & Cheap Options */}
                    <div className="space-y-8">
                        <div className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
                            <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
                                How to rent a private jet for cheap?
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Take advantage of our **Empty Leg Deals**. When a jet needs to reposition for its next passenger, it flies empty. You can book these one-way flights for up to **75% off** standard charter rates.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["One-way flexibility", "Specific routes only", "Luxury for less", "Short booking notice"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                            <Check size={12} className="text-primary font-bold" />
                                        </div>
                                        <span className="text-primary/80 dark:text-white/80 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button variant="secondary" className="w-full">
                                View Empty Leg Deals
                            </Button>
                        </div>

                        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md border border-zinc-100 dark:border-zinc-800">
                            <h4 className="font-bold text-lg mb-2 text-primary dark:text-white">Need a custom quote?</h4>
                            <p className="text-sm text-muted-foreground mb-4">Get a precise cost breakdown for your specific trip.</p>
                            <Button variant="primary" className="w-full">
                                Request Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
