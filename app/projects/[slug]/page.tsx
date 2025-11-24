"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Project } from "@/lib/projects/types";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const [project, setProject] = useState<Project | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        params.then(({ slug }) => {
            fetch(`/api/projects/${slug}`)
                .then((res) => {
                    if (!res.ok) {
                        setError(true);
                        setLoading(false);
                        return null;
                    }
                    return res.json();
                })
                .then((data) => {
                    if (data) {
                        setProject(data);
                        setLoading(false);
                    }
                })
                .catch(() => {
                    setError(true);
                    setLoading(false);
                });
        });
    }, [params]);

    if (loading) {
        return (
            <main className="min-h-screen bg-gradient-to-br from-[#F7F5F0] to-[#e8e6e0] flex items-center justify-center">
                <div className="text-lg text-black">Loading project...</div>
            </main>
        );
    }

    if (error || !project) {
        return (
            <main className="min-h-screen bg-gradient-to-br from-[#F7F5F0] to-[#e8e6e0] flex items-center justify-center">
                <div className="text-center">
                    <div className="text-lg text-black mb-4">
                        Project not found
                    </div>
                    <Link
                        href="/projects"
                        className="text-sm text-black underline"
                    >
                        ← Back to Projects
                    </Link>
                </div>
            </main>
        );
    }

    // Format date
    const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <main
            className={`min-h-screen font-sans relative ${
                isMobile
                    ? "bg-[#f4f3ee] py-6 overflow-x-hidden"
                    : "bg-gradient-to-br from-[#F7F5F0] to-[#e8e6e0] py-12"
            }`}
        >
            {/* Business card - bottom right of page */}
            <Link
                href="/"
                className={`fixed bg-gradient-to-br from-[#FAF6F0] to-[#F7F5F0] opacity-70 active:opacity-100 transition-opacity duration-300 z-50 shadow-md flex items-center justify-center font-serif text-black ${
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

            <article
                className={`mx-auto ${
                    isMobile
                        ? "w-full px-6"
                        : "w-[50vw] min-w-[600px] max-w-[800px]"
                }`}
            >
                {/* Breadcrumb */}
                <nav className="mb-2">
                    <Link
                        href="/projects"
                        className={`text-black relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                            isMobile ? "text-sm" : "text-[1vw]"
                        }`}
                    >
                        ← Back to Projects
                    </Link>
                </nav>

                {/* Title */}
                <header className="mb-4">
                    <h1
                        className={`text-black mb-2 leading-tight ${
                            isMobile ? "text-3xl" : "text-[3.5vw]"
                        }`}
                    >
                        {project.title}
                    </h1>

                    {/* Metadata */}
                    <div
                        className={`flex flex-wrap items-center gap-3 text-black ${
                            isMobile ? "text-xs" : "text-[0.9vw]"
                        }`}
                    >
                        <time
                            dateTime={project.date}
                            className="tracking-wide font-mono opacity-60"
                        >
                            {formattedDate}
                        </time>
                        <span className="opacity-40">·</span>
                        <div className="tracking-wider uppercase italic opacity-60">
                            {project.tags.join(" · ")}
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <ReactMarkdown
                        components={{
                            h1: ({ children }) => (
                                <h1
                                    className={`text-black mt-6 mb-6 leading-tight ${
                                        isMobile ? "text-2xl" : "text-[2.5vw]"
                                    }`}
                                >
                                    {children}
                                </h1>
                            ),
                            h2: ({ children }) => (
                                <h2
                                    className={`text-black mt-10 mb-4 leading-tight ${
                                        isMobile ? "text-xl" : "text-[2vw]"
                                    }`}
                                >
                                    {children}
                                </h2>
                            ),
                            h3: ({ children }) => (
                                <h3
                                    className={`text-black mt-8 mb-3 leading-tight ${
                                        isMobile ? "text-lg" : "text-[1.5vw]"
                                    }`}
                                >
                                    {children}
                                </h3>
                            ),
                            p: ({ children }) => (
                                <p
                                    className={`text-black leading-relaxed mb-6 ${
                                        isMobile ? "text-base" : "text-[1.1vw]"
                                    }`}
                                >
                                    {children}
                                </p>
                            ),
                            ul: ({ children }) => (
                                <ul
                                    className={`text-black leading-relaxed mb-6 ml-6 list-disc space-y-2 ${
                                        isMobile ? "text-base" : "text-[1.1vw]"
                                    }`}
                                >
                                    {children}
                                </ul>
                            ),
                            ol: ({ children }) => (
                                <ol
                                    className={`text-black leading-relaxed mb-6 ml-6 list-decimal space-y-2 ${
                                        isMobile ? "text-base" : "text-[1.1vw]"
                                    }`}
                                >
                                    {children}
                                </ol>
                            ),
                            li: ({ children }) => (
                                <li className="text-black leading-relaxed">
                                    {children}
                                </li>
                            ),
                            strong: ({ children }) => (
                                <strong className="font-semibold text-black">
                                    {children}
                                </strong>
                            ),
                            em: ({ children }) => (
                                <em className="italic text-black">
                                    {children}
                                </em>
                            ),
                            a: ({ href, children }) => (
                                <a
                                    href={href}
                                    className="text-black relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {children}
                                </a>
                            ),
                            code: ({ children }) => (
                                <code
                                    className={`bg-black/10 px-2 py-1 rounded font-mono text-black ${
                                        isMobile ? "text-sm" : "text-[0.95vw]"
                                    }`}
                                >
                                    {children}
                                </code>
                            ),
                            pre: ({ children }) => (
                                <pre
                                    className={`bg-black/10 p-4 rounded overflow-x-auto mb-6 font-mono ${
                                        isMobile ? "text-sm" : "text-[0.9vw]"
                                    }`}
                                >
                                    {children}
                                </pre>
                            ),
                            blockquote: ({ children }) => (
                                <blockquote
                                    className={`border-l-2 border-black/30 pl-6 my-8 text-black italic ${
                                        isMobile ? "text-base" : "text-[1.1vw]"
                                    }`}
                                >
                                    {children}
                                </blockquote>
                            ),
                            hr: () => (
                                <hr className="border-0 border-t border-black/20 my-12" />
                            ),
                            img: ({ src, alt }) => (
                                <img
                                    src={src}
                                    alt={alt || ""}
                                    className="w-full rounded my-6"
                                    loading="lazy"
                                />
                            ),
                        }}
                    >
                        {project.content}
                    </ReactMarkdown>
                </div>

                {/* Footer Navigation */}
                <footer className="mt-12 pt-6 border-t border-black/20">
                    <Link
                        href="/projects"
                        className={`text-black relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                            isMobile ? "text-sm" : "text-[1vw]"
                        }`}
                    >
                        ← Back to Projects
                    </Link>
                </footer>
            </article>
        </main>
    );
}
