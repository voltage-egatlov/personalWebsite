"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProjectFilter from "@/components/projects/ProjectFilter";
import ProjectFilterMobile from "@/components/projects/ProjectFilterMobile";
import ProjectListItem from "@/components/projects/ProjectListItem";
import ProjectListItemMobile from "@/components/projects/ProjectListItemMobile";
import { ProjectListItem as ProjectListItemType } from "@/lib/projects/types";

export default function ProjectsPage() {
    const [projects, setProjects] = useState<ProjectListItemType[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        fetch("/api/projects")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data.projects);
                setTags(data.tags);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error loading projects:", error);
                setLoading(false);
            });
    }, []);

    // Detect mobile breakpoint
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const filteredProjects = activeTag
        ? projects.filter((project) => project.tags.includes(activeTag))
        : projects;

    if (loading) {
        return (
            <main className="min-h-screen bg-linear-to-br from-[#F7F5F0] to-[#e8e6e0] flex items-center justify-center">
                <div className="text-[1.5vw] text-black">
                    Loading projects...
                </div>
            </main>
        );
    }

    return (
        <main
            className={`min-h-screen font-sans relative ${
                isMobile
                    ? "bg-[#f4f3ee] py-6 overflow-x-hidden"
                    : "bg-linear-to-br from-[#F7F5F0] to-[#e8e6e0] py-12"
            }`}
        >
            {/* Business card - bottom right of page */}
            <Link
                href="/"
                className={`fixed bg-linear-to-br from-[#FAF6F0] to-[#F7F5F0] opacity-70 active:opacity-100 transition-opacity duration-300 z-50 shadow-md flex items-center justify-center font-serif text-black ${
                    isMobile
                        ? "bottom-4 right-4 text-base"
                        : "bottom-8 right-8 text-xl"
                }`}
                style={
                    isMobile
                        ? { width: "80px", height: "46px" }
                        : { width: "120px", height: "68px" }
                }
                aria-label="Back to home"
            >
                TC
            </Link>

            <div
                className={`mx-auto ${
                    isMobile
                        ? "w-full px-6"
                        : "w-[50vw] min-w-[600px] max-w-[800px]"
                }`}
            >
                {/* Header - Fixed */}
                <header className="mb-4">
                    <h1
                        className={`text-black ${
                            isMobile ? "text-4xl" : "text-[3vw]"
                        }`}
                    >
                        Projects
                    </h1>
                </header>

                {/* Filter - Fixed */}
                <div className="mb-4">
                    {isMobile ? (
                        <ProjectFilterMobile
                            tags={tags}
                            activeTag={activeTag}
                            onFilterChange={setActiveTag}
                        />
                    ) : (
                        <ProjectFilter
                            tags={tags}
                            activeTag={activeTag}
                            onFilterChange={setActiveTag}
                        />
                    )}
                </div>

                {/* Projects List - Only this section changes */}
                <div className={`space-y-0 ${isMobile ? "relative" : ""}`}>
                    <div
                        className={`space-y-0 ${
                            isMobile
                                ? "max-h-[75vh] overflow-y-auto scrollbar-visible"
                                : "min-h-[400px]"
                        }`}
                    >
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <div key={project.slug}>
                                    {isMobile ? (
                                        <ProjectListItemMobile
                                            project={project}
                                        />
                                    ) : (
                                        <ProjectListItem project={project} />
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-[1.5vw] text-black">
                                    No projects found in this category.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    animation: none;
                    transform: translateX(0);
                    transition: transform 0.3s ease;
                }

                .group:hover .animate-marquee {
                    animation: marquee 12s linear infinite;
                }

                .scrollbar-visible::-webkit-scrollbar {
                    width: 6px;
                }

                .scrollbar-visible::-webkit-scrollbar-track {
                    background: transparent;
                }

                .scrollbar-visible::-webkit-scrollbar-thumb {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 3px;
                }

                .scrollbar-visible::-webkit-scrollbar-thumb:hover {
                    background: rgba(0, 0, 0, 0.3);
                }

                @media (prefers-reduced-motion: reduce) {
                    * {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>
        </main>
    );
}
