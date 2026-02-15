import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
    {
        title: "The Ultimate Guide to **Private Jet for Rent Cost** in 2026",
        excerpt: "Understand the factors influencing pricing, from aircraft type to landing fees, and how to get the best value.",
        date: "February 10, 2026",
        image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=2070&auto=format&fit=crop",
        slug: "private-jet-rental-cost-guide",
    },
    {
        title: "**How to Rent a Private Jet for Cheap**: 5 Insider Tips",
        excerpt: "Discover the secrets of empty leg flights and flexible scheduling to save up to 75% on your next charter.",
        date: "February 5, 2026",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1974&auto=format&fit=crop",
        slug: "how-to-rent-cheap-private-jet",
    },
    {
        title: "Top 10 Business Jets for Transatlantic Travel",
        excerpt: "A comprehensive comparison of the best long-range jets for your next business trip from New York to London.",
        date: "January 28, 2026",
        image: "https://images.unsplash.com/photo-1582234057007-ec30fb933614?q=80&w=2070&auto=format&fit=crop",
        slug: "best-transatlantic-business-jets",
    },
];

export function Blog() {
    return (
        <section id="blog" className="py-24 bg-white dark:bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-6">
                            Aviation Insights
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Stay informed with the latest trends, tips, and guides on **private jet for rent** services.
                        </p>
                    </div>
                    <Link href="#" className="hidden md:flex items-center text-secondary font-bold hover:translate-x-1 transition-transform">
                        View All Articles <ArrowRight size={20} className="ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <article key={index} className="group cursor-pointer">
                            <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={post.image}
                                    alt={post.title.replace(/\*\*/g, "")}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="space-y-4">
                                <span className="text-sm text-secondary font-medium">{post.date}</span>
                                <h3 className="text-xl font-bold text-primary dark:text-white leading-tight" dangerouslySetInnerHTML={{ __html: post.title.replace(/\*\*/g, "") }}>
                                    {/* Render title without markdown asterisks for now, or process it. simpler to just strip in code or render plain. I'll use dangerouslySetInnerHTML to keep the emphasis if I wanted, but for accessibility just clean text is better. actually for SEO, strong tags are good. Let's assume I parse it. */}
                                    {/* I'll just render it as text for now to avoid complexity */}
                                </h3>
                                {/* Re-rendering title cleanly */}
                                <h3 className="text-xl font-bold text-primary dark:text-white leading-tight">
                                    {post.title.split("**").map((part, i) =>
                                        i % 2 === 1 ? <span key={i} className="text-secondary">{part}</span> : part
                                    )}
                                </h3>

                                <p className="text-muted-foreground line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link href="#" className="inline-flex items-center text-primary dark:text-white font-bold hover:text-secondary transition-colors">
                                    Read Article <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="#" className="inline-flex items-center text-secondary font-bold hover:translate-x-1 transition-transform">
                        View All Articles <ArrowRight size={20} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
