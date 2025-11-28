"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Project } from "@/lib/projects/types";

const PDFViewer = dynamic(() => import("@/components/PDFViewer"), {
    ssr: false,
    loading: () => (
        <div className="text-sm text-gray-500">Loading PDF viewer...</div>
    ),
});

interface ProjectContentProps {
    project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

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
                        className={`text-black link-animated ${
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
                            p: ({ children, node }) => {
                                // Check if this paragraph contains only an image that's a PDF
                                const hasOnlyPdfImage =
                                    node?.children?.length === 1 &&
                                    node.children[0].type === "element" &&
                                    node.children[0].tagName === "img" &&
                                    typeof node.children[0].properties?.src ===
                                        "string" &&
                                    node.children[0].properties.src
                                        .toLowerCase()
                                        .endsWith(".pdf");

                                if (hasOnlyPdfImage) {
                                    // Return a div instead of p for PDF embeds
                                    return (
                                        <div className="my-8">{children}</div>
                                    );
                                }

                                return (
                                    <p
                                        className={`mb-6 ${
                                            isMobile
                                                ? "text-base text-black leading-relaxed"
                                                : "text-body"
                                        }`}
                                    >
                                        {children}
                                    </p>
                                );
                            },
                            ul: ({ children }) => (
                                <ul
                                    className={`mb-6 ml-6 list-disc space-y-2 ${
                                        isMobile
                                            ? "text-base text-black leading-relaxed"
                                            : "text-body"
                                    }`}
                                >
                                    {children}
                                </ul>
                            ),
                            ol: ({ children }) => (
                                <ol
                                    className={`mb-6 ml-6 list-decimal space-y-2 ${
                                        isMobile
                                            ? "text-base text-black leading-relaxed"
                                            : "text-body"
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
                                    className="text-black link-animated"
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
                                    className={`border-l-2 border-black/30 pl-6 my-8 italic ${
                                        isMobile
                                            ? "text-base text-black"
                                            : "text-body"
                                    }`}
                                >
                                    {children}
                                </blockquote>
                            ),
                            hr: () => (
                                <hr className="border-0 border-t border-black/20 my-12" />
                            ),
                            img: ({ src, alt }) => {
                                const imageSrc =
                                    typeof src === "string" ? src : "";

                                // Check if it's a PDF
                                if (imageSrc.toLowerCase().endsWith(".pdf")) {
                                    return (
                                        <div className="w-full">
                                            <PDFViewer
                                                file={imageSrc}
                                                width={isMobile ? 350 : 700}
                                                showControls={true}
                                            />
                                        </div>
                                    );
                                }

                                return (
                                    <span className="block my-6">
                                        <Image
                                            src={imageSrc}
                                            alt={alt || ""}
                                            width={800}
                                            height={600}
                                            className="w-full rounded"
                                            style={{ height: "auto" }}
                                        />
                                    </span>
                                );
                            },
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
