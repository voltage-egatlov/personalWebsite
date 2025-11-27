import Link from "next/link";
import ProjectsList from "@/components/projects/ProjectsList";
import ProjectsStyles from "@/components/projects/ProjectsStyles";
import { getAllProjects, getAllTags } from "@/lib/projects/loader";

export default function ProjectsPage() {
    // Fetch data on the server - no loading state needed!
    const projects = getAllProjects();
    const tags = getAllTags();

    return (
        <main className="min-h-screen font-sans relative bg-[#f4f3ee] md:bg-linear-to-br md:from-[#F7F5F0] md:to-[#e8e6e0] py-6 md:py-12 overflow-x-hidden md:overflow-x-visible">
            <ProjectsStyles />

            {/* Business card - bottom right of page */}
            <Link
                href="/"
                className="fixed bg-linear-to-br from-[#FAF6F0] to-[#F7F5F0] opacity-70 active:opacity-100 transition-opacity duration-300 z-50 shadow-md flex items-center justify-center font-serif text-black bottom-4 right-4 md:bottom-8 md:right-8 text-base md:text-xl w-20 h-[46px] md:w-[120px] md:h-[68px]"
                aria-label="Back to home"
            >
                TC
            </Link>

            <div className="mx-auto w-full px-6 md:w-[50vw] md:min-w-[600px] md:max-w-[800px] md:px-0">
                {/* Header - Fixed */}
                <header className="mb-4">
                    <h1 className="text-black text-4xl md:text-[3vw]">
                        Projects
                    </h1>
                </header>

                {/* Client component handles filtering and mobile detection */}
                <ProjectsList projects={projects} tags={tags} />
            </div>
        </main>
    );
}
