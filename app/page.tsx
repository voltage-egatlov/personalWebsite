import BusinessCard from "@/components/BusinessCard";
import { getSiteConfig } from "@/lib/siteConfig";

export default function Home() {
    const { businessCard } = getSiteConfig();

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#F7F5F0] to-[#e8e6e0] p-4 sm:p-6 md:p-8">
            <main className="w-full max-w-4xl">
                <BusinessCard baseColor="#FAF6F0" {...businessCard} />
            </main>
        </div>
    );
}
