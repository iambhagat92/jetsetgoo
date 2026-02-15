export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    slug: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "cost-guide-2026",
        title: "The Ultimate Guide to **Private Jet for Rent Cost** in 2026",
        excerpt: "Understand the factors influencing pricing, from aircraft type to landing fees, and how to get the best value for your money.",
        date: "February 10, 2026",
        image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=2070&auto=format&fit=crop",
        slug: "private-jet-rental-cost-guide",
    },
    {
        id: "cheap-rental-tips",
        title: "**How to Rent a Private Jet for Cheap**: 5 Insider Tips",
        excerpt: "Discover the secrets of empty leg flights and flexible scheduling to save up to 75% on your next luxury charter.",
        date: "February 5, 2026",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1974&auto=format&fit=crop",
        slug: "how-to-rent-cheap-private-jet",
    },
    {
        id: "transatlantic-jets",
        title: "Top 10 Business Jets for Transatlantic Travel",
        excerpt: "A comprehensive comparison of the best long-range jets for your next business trip from New York to London.",
        date: "January 28, 2026",
        image: "https://images.unsplash.com/photo-1582234057007-ec30fb933614?q=80&w=2070&auto=format&fit=crop",
        slug: "best-transatlantic-business-jets",
    },
    {
        id: "safety-protocols",
        title: "Private Jet Safety: What You Need to Know",
        excerpt: "Explore the rigorous safety standards and protocols that make private aviation one of the safest ways to travel.",
        date: "February 15, 2026",
        // Using a high-quality, centrally framed image for better fitting
        image: "https://images.unsplash.com/photo-1576089290072-474378345719?q=80&w=2070&auto=format&fit=crop",
        slug: "private-jet-safety-standards",
    }
];
