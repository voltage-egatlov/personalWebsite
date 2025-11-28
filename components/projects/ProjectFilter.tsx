"use client";

interface ProjectFilterProps {
    tags: string[];
    activeTag: string | null;
    onFilterChange: (tag: string | null) => void;
}

export default function ProjectFilter({
    tags,
    activeTag,
    onFilterChange,
}: ProjectFilterProps) {
    const allTags = ["All Projects", ...tags];

    return (
        <nav className="">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-section-title">
                {allTags.map((tag, index) => {
                    const isActive =
                        tag === "All Projects"
                            ? activeTag === null
                            : activeTag === tag;
                    const tagValue = tag === "All Projects" ? null : tag;

                    return (
                        <div key={tag} className="flex items-center gap-4">
                            <button
                                onClick={() => onFilterChange(tagValue)}
                                className={`transition-opacity duration-300 text-black ${
                                    isActive
                                        ? "opacity-100"
                                        : "opacity-40 hover:opacity-70"
                                }`}
                            >
                                {tag}
                            </button>
                            {index < allTags.length - 1 && (
                                <span className="text-black opacity-40">·</span>
                            )}
                        </div>
                    );
                })}
            </div>
            {/* Classic underline */}
            <div className="mt-4 h-px bg-black" />
        </nav>
    );
}
