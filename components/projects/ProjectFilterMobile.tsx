"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface ProjectFilterMobileProps {
    tags: string[];
    activeTag: string | null;
    onFilterChange: (tag: string | null) => void;
}

export default function ProjectFilterMobile({
    tags,
    activeTag,
    onFilterChange,
}: ProjectFilterMobileProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const hasCheckedHint = useRef(false);
    const [centerTag, setCenterTag] = useState<string | null>(null);
    const [showHint, setShowHint] = useState(false);

    const allTags = ["All Projects", ...tags];

    // Check localStorage after component mounts (client-side only)
    useEffect(() => {
        if (!hasCheckedHint.current) {
            hasCheckedHint.current = true;
            const hasSeenHint = localStorage.getItem("projectsFilterHintShown");
            if (!hasSeenHint) {
                // Use queueMicrotask to avoid synchronous setState in effect
                queueMicrotask(() => setShowHint(true));
            }
        }
    }, []);

    // Detect which tag is in the center
    const handleScroll = useCallback(() => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;

        // Get the container's bounding rectangle in viewport coordinates
        const containerRect = container.getBoundingClientRect();

        // Calculate the X coordinate of the container's center in viewport space
        // This is the point where we want a tag to align
        const containerCenterX = containerRect.left + containerRect.width / 2;

        // Get all tag elements from the DOM
        const tagElements =
            container.querySelectorAll<HTMLElement>("[data-tag]");
        let closestTag = null;
        let closestDistance = Infinity;

        // Loop through each tag element to find which one is closest to center
        tagElements.forEach((element) => {
            // Get this tag's bounding rectangle in viewport coordinates
            const rect = element.getBoundingClientRect();

            // Calculate the X coordinate of this tag's center in viewport space
            const elementCenterX = rect.left + rect.width / 2;

            // Calculate the distance between the tag center and container center
            const distance = Math.abs(elementCenterX - containerCenterX);

            // Track which tag is closest to the center
            if (distance < closestDistance) {
                closestDistance = distance;
                closestTag = element.getAttribute("data-tag");
            }
        });

        // If the centered tag changed, update state and trigger filter change
        if (closestTag !== centerTag) {
            // Convert "All Projects" display name back to null for filtering
            const tagValue = closestTag === "All Projects" ? null : closestTag;
            setCenterTag(closestTag);
            onFilterChange(tagValue);
        }
    }, [centerTag, onFilterChange]);

    const snapToCenter = useCallback(() => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const centerX = container.scrollLeft + container.offsetWidth / 2;
        const tagElements =
            container.querySelectorAll<HTMLElement>("[data-tag]");

        let closestElement: HTMLElement | null = null;
        let closestDistance = Infinity;

        for (const element of tagElements) {
            const rect = element.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const elementCenter =
                rect.left -
                containerRect.left +
                rect.width / 2 +
                container.scrollLeft;

            const distance = Math.abs(elementCenter - centerX);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestElement = element;
            }
        }

        if (closestElement !== null) {
            const elementRect = closestElement.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const elementCenter =
                elementRect.left - containerRect.left + elementRect.width / 2;

            const scrollTarget =
                container.scrollLeft +
                elementCenter -
                container.offsetWidth / 2;

            container.scrollTo({
                left: scrollTarget,
                behavior: "smooth",
            });
        }
    }, []);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let scrollTimeout: NodeJS.Timeout;

        const onScroll = () => {
            handleScroll();
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(snapToCenter, 150);

            // Hide hint on first interaction
            if (showHint) {
                setShowHint(false);
                localStorage.setItem("projectsFilterHintShown", "true");
            }
        };

        container.addEventListener("scroll", onScroll);
        return () => {
            container.removeEventListener("scroll", onScroll);
            clearTimeout(scrollTimeout);
        };
    }, [handleScroll, snapToCenter, showHint]);

    return (
        <div className="relative overflow-hidden -mx-6">
            {/* Swipe hint toast */}
            {showHint && (
                <div className="absolute top-1/2 left-6 -translate-y-1/2 z-20 animate-fadeIn">
                    <div className="bg-[#f4f3ee] text-black px-3 py-1.5 rounded-full text-xs whitespace-nowrap border border-black/20">
                        Swipe to explore →
                    </div>
                </div>
            )}

            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#f4f3ee] to-transparent pointer-events-none z-10" />

            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#f4f3ee] to-transparent pointer-events-none z-10" />

            {/* Scrollable tags */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-8 py-4 scrollbar-hide"
                style={{
                    scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch",
                    paddingLeft: "50vw",
                    paddingRight: "50vw",
                }}
            >
                {allTags.map((tag) => {
                    const isCenter = tag === centerTag;
                    const tagValue = tag === "All Projects" ? null : tag;
                    const isActive = tagValue === activeTag;

                    return (
                        <div
                            key={tag}
                            data-tag={tag}
                            className="shrink-0 transition-opacity duration-300"
                            style={{ scrollSnapAlign: "center" }}
                        >
                            <span
                                className={`text-lg whitespace-nowrap transition-all duration-300 ${
                                    isCenter || isActive
                                        ? "text-black opacity-100 font-medium"
                                        : "text-black opacity-30"
                                }`}
                            >
                                {tag}
                            </span>
                        </div>
                    );
                })}
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}
