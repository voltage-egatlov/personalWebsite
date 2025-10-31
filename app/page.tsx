import BusinessCard from "@/components/BusinessCard";

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#f5f5f0] to-[#e8e6e0] p-8">
            <main className="w-full max-w-4xl">
                <BusinessCard />
            </main>
        </div>
    );
}
