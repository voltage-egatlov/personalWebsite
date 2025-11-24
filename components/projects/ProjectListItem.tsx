"use client";

import Link from "next/link";
import { ProjectListItem as ProjectListItemType } from "@/lib/projects/types";

interface ProjectListItemProps {
    project: ProjectListItemType;
}

export default function ProjectListItem({ project }: ProjectListItemProps) {
    // Format date to just show year
    const year = new Date(project.date).getFullYear();

    return (
        <Link
            href={`/projects/${project.slug}`}
            className="block group border-b border-black/20 first:pt-0 last:border-b-0 transition-all duration-300 hover:bg-black/5"
        >
            <div className="flex items-center gap-6">
                {/* Title - shows full text */}
                <div className="shrink-0">
                    <h2 className="text-[1.1vw] font-medium text-black whitespace-nowrap">
                        {project.title}
                    </h2>
                </div>

                {/* Description - scrolls on hover, takes remaining space */}
                <div className="flex-1 overflow-hidden relative min-w-0">
                    <div className="inline-block animate-marquee whitespace-nowrap">
                        <span className="text-[0.95vw] text-black/70 inline-block pr-10">
                            {project.description}
                        </span>
                        <span className="text-[0.95vw] text-black/70 inline-block pr-10">
                            {project.description}
                        </span>
                    </div>
                </div>

                {/* Tags */}
                <div className="text-[0.85vw] text-black/60 tracking-wider uppercase whitespace-nowrap italic shrink-0">
                    {project.tags.join(" · ")}
                </div>

                {/* Date */}
                <div className="text-[0.9vw] text-black/50 font-mono w-[60px] text-right shrink-0">
                    {year}
                </div>
            </div>
        </Link>
    );
}
