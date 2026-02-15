import { Shield, Globe, Clock, DollarSign } from "lucide-react";

const benefits = [
    {
        icon: Globe,
        title: "Global Coverage",
        description: "Access over 5,000 aircraft worldwide, ensuring you can fly to and from any destination on your schedule.",
    },
    {
        icon: DollarSign,
        title: "Best Price Guarantee",
        description: "Get the most competitive rates in the market, including exclusive access to empty leg flights with up to 75% off.",
    },
    {
        icon: Shield,
        title: "Safety First",
        description: "We only partner with Wyvern Wingman and ARG/US Gold/Platinum certified operators for your peace of mind.",
    },
    {
        icon: Clock,
        title: "24/7 Concierge",
        description: "Our dedicated private aviation advisors are available around the clock to handle every detail of your trip.",
    },
];

export function Benefits() {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-white mb-6">
                        Redefining Luxury Travel
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Whether you need a **private jet for rent** for a business meeting in London or a family vacation in Aspen, we provide seamless access to the finest aircraft worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-zinc-100 dark:border-zinc-800"
                        >
                            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                                <benefit.icon className="text-secondary" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
