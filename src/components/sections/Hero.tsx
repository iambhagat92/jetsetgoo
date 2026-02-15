import { Button } from "../ui/Button";
import { Search, Calendar, Users, MapPin } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Image Placeholder - Replace with actual video/image */}
            <div className="absolute inset-0 bg-zinc-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
            </div>

            <div className="container relative z-10 px-6 pt-20">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-slide-up">
                        Experience Ultimate <span className="text-secondary italic">Freedom</span>
                    </h1>
                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                        **Private Jet for Rent** at Your Fingertips. Access over 5,000 aircraft globally, tailored to your schedule and budget.
                    </p>
                </div>

                {/* Booking Widget */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg shadow-2xl max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="relative group">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={20} />
                            <input
                                type="text"
                                placeholder="Departure City"
                                className="w-full h-12 bg-white/10 border border-white/20 rounded pl-12 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary transition-colors"
                                aria-label="Departure City"
                            />
                        </div>

                        <div className="relative group">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={20} />
                            <input
                                type="text"
                                placeholder="Arrival City"
                                className="w-full h-12 bg-white/10 border border-white/20 rounded pl-12 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary transition-colors"
                                aria-label="Arrival City"
                            />
                        </div>

                        <div className="relative group">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={20} />
                            <input
                                type="date"
                                className="w-full h-12 bg-white/10 border border-white/20 rounded pl-12 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary transition-colors opacity-100" // Opacity fix for date input
                                aria-label="Date"
                            />
                        </div>

                        <div className="relative group">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={20} />
                            <select
                                className="w-full h-12 bg-white/10 border border-white/20 rounded pl-12 pr-4 text-white focus:outline-none focus:border-secondary transition-colors appearance-none"
                                aria-label="Passengers"
                            >
                                <option value="1" className="text-black">1 Passenger</option>
                                <option value="2" className="text-black">2 Passengers</option>
                                <option value="4" className="text-black">3-4 Passengers</option>
                                <option value="6" className="text-black">5-8 Passengers</option>
                                <option value="10" className="text-black">9+ Passengers</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <Button variant="secondary" size="lg" className="w-full md:w-auto min-w-[200px]">
                            <Search className="mr-2" size={20} />
                            Search Private Jets
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
