export default function About() {
    return (
        <div className="min-h-screen bg-linear-to-br from-[#F7F5F0] to-[#e8e6e0] p-6 sm:p-12">
            <main className="max-w-4xl mx-auto py-12">
                <section className="mb-8">
                    <h1 className="text-heading-large mb-3">Hi, I'm Tej.</h1>
                    <p className="text-body">
                        I'm an Associate Consultant at Mars & Co., where I work
                        on strategic consulting projects for Fortune 500
                        companies. I'm passionate about product engineering and
                        design, especially in software, and how these
                        disciplines integrate with data sciences and
                        econometrics to drive business strategy.
                    </p>
                </section>

                <section className="mb-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                    <h2 className="text-section-title">Experience</h2>

                    <div className="space-y-3">
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-heading-medium">
                                    Associate Consultant
                                </h3>
                                <span className="text-meta-mono">
                                    2025 – Present
                                </span>
                            </div>
                            <p className="text-meta">
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
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-heading-medium">
                                    Teacher Assistant
                                </h3>
                                <span className="text-meta-mono">
                                    2024 – 2025
                                </span>
                            </div>
                            <p className="text-meta">
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
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-heading-medium">
                                    Intern, Transformation Office & Sales
                                    Operations
                                </h3>
                                <span className="text-meta-mono">
                                    2023 – 2024
                                </span>
                            </div>
                            <p className="text-meta">
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
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-heading-medium">
                                    Digital Product Developer Intern
                                </h3>
                                <span className="text-meta-mono">2022</span>
                            </div>
                            <p className="text-meta">
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

                <section className="mb-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                    <h2 className="text-section-title">Interests</h2>
                    <p className="text-body">
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

                <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                    <h2 className="text-section-title">Skills</h2>
                    <div className="space-y-2">
                        <div>
                            <h3 className="text-subsection-title mb-0.5">
                                Computer Languages
                            </h3>
                            <p className="text-body">
                                STATA, R, JavaScript, Tailwind, TypeScript,
                                HTML, Git, C++, Python
                            </p>
                        </div>
                        <div>
                            <h3 className="text-subsection-title mb-0.5">IT</h3>
                            <p className="text-body">
                                Office Package (Word, Excel, PowerPoint),
                                Atlassian Suite, Salesforce
                            </p>
                        </div>
                        <div>
                            <h3 className="text-subsection-title mb-0.5">EQ</h3>
                            <p className="text-body">
                                Executive Communication, Large Team Coordination
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
