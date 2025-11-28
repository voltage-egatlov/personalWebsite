"use client";

import Link from "next/link";
import { ProjectListItem as ProjectListItemType } from "@/lib/projects/types";

interface ProjectListItemMobileProps {
    project: ProjectListItemType;
}

export default function ProjectListItemMobile({
    project,
}: ProjectListItemMobileProps) {
    // Format date to just show year
    const year = new Date(project.date).getFullYear();

    return (
        <Link
            href={`/projects/${project.slug}`}
            className="block py-4 border-b border-black/20 first:pt-0 last:border-b-0 transition-all duration-300 active:bg-black/5"
        >
            {/* Vertical stack layout for mobile */}
            <div className="flex flex-col gap-2">
                {/* Title */}
                <h2 className="text-lg font-medium text-black">
                    {project.title}
                </h2>

                {/* Year and Tags */}
                <div className="flex items-center gap-3 text-sm">
                    <span className="font-mono text-black/50">{year}</span>
                    <span className="text-black/40">·</span>
                    <span className="tracking-wider uppercase italic text-black/60">
                        {project.tags.join(" · ")}
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm text-black/70 leading-relaxed">
                    {project.description}
                </p>
            </div>
        </Link>
    );
}
