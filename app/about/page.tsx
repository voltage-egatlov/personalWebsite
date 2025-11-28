export default function About() {
    return (
        <div className="min-h-screen bg-linear-to-br from-[#F7F5F0] to-[#e8e6e0] p-6 sm:p-12">
            <main className="max-w-4xl mx-auto py-12">
                <section className="mb-8">
                    <h1 className="text-[2.5vw] font-medium text-black mb-3">
                        Hi, I'm Tej.
                    </h1>
                    <p className="text-[1.1vw] md:text-[1.1vw] text-black leading-relaxed">
                        I'm an Associate Consultant at Mars & Co., where I work
                        on strategic consulting projects for major players
                        across industries. I'm passionate about product
                        engineering and design, especially in software.
                    </p>
                </section>

                <section className="mb-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                    <h2 className="text-[1.1vw] tracking-wide text-black/60">
                        Experience
                    </h2>

                    <div className="space-y-3">
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[1.1vw] font-medium text-black">
                                    Associate Consultant
                                </h3>
                                <span className="text-[0.95vw] text-black/50 font-mono">
                                    2025 – Present
                                </span>
                            </div>
                            <p className="text-[0.95vw] text-black/70">
                                <a
                                    href="https://www.marsandco.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                                >
                                    Mars & Co.
                                </a>
                                , New York NY
                            </p>
                        </div>

                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[1.1vw] font-medium text-black">
                                    Teacher Assistant
                                </h3>
                                <span className="text-[0.95vw] text-black/50 font-mono">
                                    2024 – 2025
                                </span>
                            </div>
                            <p className="text-[0.95vw] text-black/70">
                                <a
                                    href="https://www.tufts.edu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                                >
                                    Tufts University
                                </a>
                                , Somerville MA
                            </p>
                        </div>

                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[1.1vw] font-medium text-black">
                                    Intern, Transformation Office & Sales
                                    Operations
                                </h3>
                                <span className="text-[0.95vw] text-black/50 font-mono">
                                    2023 – 2024
                                </span>
                            </div>
                            <p className="text-[0.95vw] text-black/70">
                                <a
                                    href="https://www.dynatrace.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                                >
                                    Dynatrace
                                </a>
                                , Waltham MA
                            </p>
                        </div>

                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[1.1vw] font-medium text-black">
                                    Digital Product Developer Intern
                                </h3>
                                <span className="text-[0.95vw] text-black/50 font-mono">
                                    2022
                                </span>
                            </div>
                            <p className="text-[0.95vw] text-black/70">
                                <a
                                    href="https://evolvtechnology.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                                >
                                    Evolv Technology
                                </a>
                                , Waltham MA
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                    <h2 className="text-[1.1vw] tracking-wide text-black/60">
                        Interests
                    </h2>
                    <p className="text-[1.1vw] text-black leading-relaxed">
                        Music production (
                        <a
                            href="https://open.spotify.com/artist/4qdWbmMccvfpWfA46uu1El"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                        >
                            7ej
                        </a>
                        ), cooking, weightlifting, drawing, reading, and playing{" "}
                        <a
                            href="https://bicyclecards.com/how-to-play/hearts/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                        >
                            Hearts
                        </a>
                        .
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                    <h2 className="text-[1.1vw] tracking-wide text-black/60">
                        Skills
                    </h2>
                    <div className="space-y-2">
                        <div>
                            <h3 className="text-[0.9vw] text-black/60 tracking-wider uppercase italic mb-0.5">
                                Computer Languages
                            </h3>
                            <p className="text-[1.1vw] text-black">
                                STATA, R, JavaScript, Tailwind, TypeScript,
                                HTML, Git, C++, Python
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[0.9vw] text-black/60 tracking-wider uppercase italic mb-0.5">
                                IT
                            </h3>
                            <p className="text-[1.1vw] text-black">
                                Office Package (Word, Excel, PowerPoint),
                                Atlassian Suite, Salesforce
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[0.9vw] text-black/60 tracking-wider uppercase italic mb-0.5">
                                EQ
                            </h3>
                            <p className="text-[1.1vw] text-black">
                                Executive Communication, Large Team Coordination
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
