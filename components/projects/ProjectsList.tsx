"use client";

import { useState, useEffect } from "react";
import ProjectFilter from "@/components/projects/ProjectFilter";
import ProjectFilterMobile from "@/components/projects/ProjectFilterMobile";
import ProjectListItem from "@/components/projects/ProjectListItem";
import ProjectListItemMobile from "@/components/projects/ProjectListItemMobile";
import { ProjectListItem as ProjectListItemType } from "@/lib/projects/types";

interface ProjectsListProps {
    projects: ProjectListItemType[];
    tags: string[];
}

export default function ProjectsList({ projects, tags }: ProjectsListProps) {
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <>
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
                                    <ProjectListItemMobile project={project} />
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
        </>
    );
}
