export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#f5f5f0] to-[#e8e6e0] p-8">
            <main className="w-full max-w-4xl">
                {/* Business card with 3.5:2 aspect ratio */}
                <div
                    className="w-full max-w-[700px] mx-auto shadow-[2px_3px_4px_rgba(0,0,0,0.4)]"
                    style={{
                        aspectRatio: "1.75",
                        backgroundColor: "#F9F6F0", // Bone white
                    }}
                ></div>
            </main>
        </div>
    );
}
