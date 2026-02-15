import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Fleet } from "@/components/sections/Fleet";
import { Pricing } from "@/components/sections/Pricing";
import { Blog } from "@/components/sections/Blog";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Fleet />
        <Pricing />
        <Blog />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "JeSetGo - Private Jet Rentals",
            "description": "Book private jets worldwide. Empty leg deals, transparent pricing, and luxury travel.",
            "mainEntity": {
              "@type": "Organization",
              "name": "JetSetGo",
              "url": "https://jetsetgo.com",
              "logo": "https://jetsetgo.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-123-4567",
                "contactType": "customer service"
              }
            }
          }),
        }}
      />
    </div>
  );
}
