import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="group cursor-pointer flex flex-col">
                            <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={post.image}
                                    alt={post.title.replace(/\*\*/g, "")}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="space-y-4 flex-1 flex flex-col">
                                <span className="text-sm text-secondary font-medium">{post.date}</span>
                                <h3 className="text-xl font-bold text-primary dark:text-white leading-tight">
                                    {post.title.split("**").map((part, i) =>
                                        i % 2 === 1 ? <span key={i} className="text-secondary">{part}</span> : part
                                    )}
                                </h3>

                                <p className="text-muted-foreground line-clamp-3 flex-1">
                                    {post.excerpt}
                                </p>
                                <Link href="#" className="inline-flex items-center text-primary dark:text-white font-bold hover:text-secondary transition-colors mt-auto pt-2">
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
