"use client";

export default function ProjectsStyles() {
    return (
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
    );
}
