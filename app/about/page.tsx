import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen bg-[#f4f3ee] md:bg-linear-to-br md:from-[#F7F5F0] md:to-[#e8e6e0] p-6 md:p-12 relative">
            {/* Business card - bottom right of page */}
            <Link
                href="/"
                className="fixed bg-linear-to-br from-[#FAF6F0] to-[#F7F5F0] opacity-70 active:opacity-100 transition-opacity duration-300 z-50 shadow-md flex items-center justify-center font-serif text-black bottom-4 right-4 md:bottom-8 md:right-8 text-base md:text-xl w-20 h-[46px] md:w-[120px] md:h-[68px]"
                aria-label="Back to home"
            >
                TC
            </Link>

            <main className="max-w-4xl mx-auto py-6 md:py-12">
                <section className="mb-6 md:mb-8">
                    <h1 className="text-3xl md:text-heading-large mb-3 font-medium text-black">
                        Hi, I'm Tej.
                    </h1>
                    <p className="text-base md:text-body text-black leading-relaxed">
                        I'm an Associate Consultant at Mars & Co., where I work
                        on strategic consulting projects for Fortune 500
                        companies. I'm passionate about product engineering and
                        design, especially in software, and how these
                        disciplines integrate with data sciences and
                        econometrics to drive business strategy.
                    </p>
                </section>

                <section className="mb-6 md:mb-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-4">
                    <h2 className="text-base md:text-section-title tracking-wide text-black/60">
                        Experience
                    </h2>

                    <div className="space-y-4 md:space-y-3">
                        <div>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                                <h3 className="text-lg md:text-heading-medium font-medium text-black">
                                    Associate Consultant
                                </h3>
                                <span className="text-sm md:text-meta-mono font-mono text-black/50">
                                    2025 – Present
                                </span>
                            </div>
                            <p className="text-sm md:text-meta text-black/70">
                                <a
                                    href="https://www.marsandco.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-animated"
                                >
                                    Mars & Co.
                                </a>
                                , New York NY
                            </p>
                        </div>

                        <div>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                                <h3 className="text-lg md:text-heading-medium font-medium text-black">
                                    Teacher Assistant
                                </h3>
                                <span className="text-sm md:text-meta-mono font-mono text-black/50">
                                    2024 – 2025
                                </span>
                            </div>
                            <p className="text-sm md:text-meta text-black/70">
                                <a
                                    href="https://www.tufts.edu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-animated"
                                >
                                    Tufts University
                                </a>
                                , Somerville MA
                            </p>
                        </div>

                        <div>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                                <h3 className="text-lg md:text-heading-medium font-medium text-black">
                                    Intern, Transformation Office & Sales
                                    Operations
                                </h3>
                                <span className="text-sm md:text-meta-mono font-mono text-black/50">
                                    2023 – 2024
                                </span>
                            </div>
                            <p className="text-sm md:text-meta text-black/70">
                                <a
                                    href="https://www.dynatrace.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-animated"
                                >
                                    Dynatrace
                                </a>
                                , Waltham MA
                            </p>
                        </div>

                        <div>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                                <h3 className="text-lg md:text-heading-medium font-medium text-black">
                                    Digital Product Developer Intern
                                </h3>
                                <span className="text-sm md:text-meta-mono font-mono text-black/50">
                                    2022
                                </span>
                            </div>
                            <p className="text-sm md:text-meta text-black/70">
                                <a
                                    href="https://evolvtechnology.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-animated"
                                >
                                    Evolv Technology
                                </a>
                                , Waltham MA
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-6 md:mb-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-4">
                    <h2 className="text-base md:text-section-title tracking-wide text-black/60">
                        Interests
                    </h2>
                    <p className="text-base md:text-body text-black leading-relaxed">
                        Music production (
                        <a
                            href="https://open.spotify.com/artist/4qdWbmMccvfpWfA46uu1El"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-animated"
                        >
                            7ej
                        </a>
                        ), cooking, weightlifting, drawing, reading, and playing{" "}
                        <a
                            href="https://bicyclecards.com/how-to-play/hearts/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-animated"
                        >
                            Hearts
                        </a>
                        .
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-4">
                    <h2 className="text-base md:text-section-title tracking-wide text-black/60">
                        Skills
                    </h2>
                    <div className="space-y-3 md:space-y-2">
                        <div>
                            <h3 className="text-sm md:text-subsection-title mb-1 md:mb-0.5 tracking-wider uppercase italic text-black/60">
                                Computer Languages
                            </h3>
                            <p className="text-base md:text-body text-black leading-relaxed">
                                STATA, R, JavaScript, Tailwind, TypeScript,
                                HTML, Git, C++, Python
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm md:text-subsection-title mb-1 md:mb-0.5 tracking-wider uppercase italic text-black/60">
                                IT
                            </h3>
                            <p className="text-base md:text-body text-black leading-relaxed">
                                Office Package (Word, Excel, PowerPoint),
                                Atlassian Suite, Salesforce
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm md:text-subsection-title mb-1 md:mb-0.5 tracking-wider uppercase italic text-black/60">
                                EQ
                            </h3>
                            <p className="text-base md:text-body text-black leading-relaxed">
                                Executive Communication, Large Team Coordination
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
