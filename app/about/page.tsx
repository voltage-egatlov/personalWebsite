import Link from "next/link";
import { getSiteConfig } from "@/lib/siteConfig";

export default function About() {
    const { experience } = getSiteConfig();

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
                        Hi, I&apos;m Tej.
                    </h1>
                    <p className="text-base md:text-body text-black leading-relaxed">
                        I&apos;m an Associate Consultant at Bain & Co., working
                        in the TIG practice within the Private Equity Group.
                        Alongside that, I&apos;m an advisor
                        to{" "}
                        <a
                            href="https://junoonwellness.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-animated"
                        >
                            Junoon Wellness
                        </a>
                        . I&apos;m passionate about product engineering and
                        design, especially in software. Thanks for visiting
                        and be sure to check out my{" "}
                        <Link href="/projects" className="link-animated">
                            projects
                        </Link>
                        !
                    </p>
                </section>

                <section className="mb-6 md:mb-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-4">
                    <h2 className="text-base md:text-section-title tracking-wide text-black/60">
                        Experience
                    </h2>

                    <div className="space-y-5 md:space-y-4">
                        {experience.map((group) => {
                            const grouped = group.roles.length > 1;
                            return (
                                <div key={group.org}>
                                    <p className="text-sm md:text-meta text-black/70 mb-1.5">
                                        <a
                                            href={group.orgUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link-animated font-medium text-black"
                                        >
                                            {group.org}
                                        </a>
                                        {group.location ? `, ${group.location}` : null}
                                    </p>

                                    <div className={grouped ? "relative pl-4" : ""}>
                                        {grouped && (
                                            <span
                                                aria-hidden
                                                className="absolute left-[3px] top-2 bottom-2 border-l border-dashed border-black/25"
                                            />
                                        )}
                                        <div className="space-y-2">
                                            {group.roles.map((role) => (
                                                <div key={role.title} className="relative">
                                                    {grouped && (
                                                        <span
                                                            aria-hidden
                                                            className="absolute -left-4 top-[9px] w-1.5 h-1.5 rounded-full bg-black/30"
                                                        />
                                                    )}
                                                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                                        <h3 className="text-lg md:text-heading-medium font-medium text-black">
                                                            {role.title}
                                                        </h3>
                                                        <span className="text-sm md:text-meta-mono font-mono text-black/50">
                                                            {role.dateLabel}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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
            </main>
        </div>
    );
}
