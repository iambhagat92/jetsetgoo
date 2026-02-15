"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-[#0A192F]/95 backdrop-blur-md py-4 shadow-md"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Plane className="h-8 w-8 text-secondary transition-transform group-hover:-rotate-45" />
                    <span className="text-2xl font-serif font-bold text-white tracking-wide">
                        JetSet<span className="text-secondary">Go</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {["Home", "Fleet", "Pricing", "Empty Legs", "Blog"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-white/80 hover:text-white hover:text-secondary transition-colors text-sm uppercase tracking-widest font-medium"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-6 rounded-none transition-all duration-300 transform hover:scale-105"
                    >
                        Book a Jet
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A192F] border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl">
                    {["Home", "Fleet", "Pricing", "Empty Legs", "Blog"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-white/80 hover:text-secondary text-lg py-2 border-b border-white/5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <a
                        href="#contact"
                        className="bg-secondary text-primary font-bold py-3 px-6 text-center mt-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Book a Jet Now
                    </a>
                </div>
            )}
        </header>
    );
}
