import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0A192F] text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-serif font-bold tracking-wide">
                            JetSet<span className="text-secondary">Go</span>
                        </Link>
                        <p className="text-white/70 leading-relaxed">
                            Experience the pinnacle of luxury travel. We provide seamless private jet rentals worldwide, ensuring your journey is as exceptional as your destination.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all overflow-hidden"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-serif font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {["Fleet", "Empty Legs", "Pricing", "Blog", "About Us"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/70 hover:text-secondary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-xl font-serif font-bold mb-6">Legal</h3>
                        <ul className="space-y-4">
                            {["Privacy Policy", "Terms of Service", "Disclaimer", "Affiliate Disclosure"].map(
                                (item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-white/70 hover:text-secondary transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-serif font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-secondary shrink-0" size={20} />
                                <span className="text-white/70">123 Aviation Way, Suite 100<br />New York, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-secondary shrink-0" size={20} />
                                <span className="text-white/70">+1 (800) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-secondary shrink-0" size={20} />
                                <span className="text-white/70">bookings@jetsetgo.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
                    <p>&copy; {new Date().getFullYear()} JetSetGo. All rights reserved.</p>
                    <p>Designed for Luxury.</p>
                </div>
            </div>
        </footer>
    );
}
