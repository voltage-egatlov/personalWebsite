"use client";

import { useState, useEffect } from "react";
import ProjectFilter from "@/components/projects/ProjectFilter";
import ProjectListItem from "@/components/projects/ProjectListItem";
import { ProjectListItem as ProjectListItemType } from "@/lib/projects/types";

export default function ProjectsPage() {
    const [projects, setProjects] = useState<ProjectListItemType[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

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
        <main className="min-h-screen bg-linear-to-br from-[#F7F5F0] to-[#e8e6e0] font-sans py-36">
            <div className="w-[50vw] min-w-[600px] max-w-[800px] mx-auto">
                {/* Header - Fixed */}
                <header className="mb-4">
                    <h1 className="text-[3vw] text-black">Projects</h1>
                </header>

                {/* Filter - Fixed */}
                <div className="mb-4">
                    <ProjectFilter
                        tags={tags}
                        activeTag={activeTag}
                        onFilterChange={setActiveTag}
                    />
                </div>

                {/* Projects List - Only this section changes */}
                <div className="space-y-0 min-h-[400px]">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <div key={project.slug}>
                                <ProjectListItem project={project} />
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
