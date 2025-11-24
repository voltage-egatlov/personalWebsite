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
                {/* Title */}
                <div className="w-[20%] shrink-0">
                    <h2 className="text-[1.1vw] font-medium text-black truncate">
                        {project.title}
                    </h2>
                </div>

                {/* Description - scrolls on hover */}
                <div className="flex-1 overflow-hidden relative">
                    <div className="group-hover:animate-marquee whitespace-nowrap">
                        <p className="text-[0.95vw] text-black/70 pr-8">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Tags */}
                <div className="text-[0.85vw] text-black/60 tracking-wider uppercase whitespace-nowrap">
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
