import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects/loader";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    // Format date
    const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#F7F5F0] to-[#e8e6e0] py-20">
            <article className="max-w-[700px] mx-auto px-8">
                {/* Breadcrumb */}
                <nav className="mb-12">
                    <Link
                        href="/projects"
                        className="text-[1vw] text-black relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    >
                        ← Back to Projects
                    </Link>
                </nav>

                {/* Title */}
                <header className="mb-12">
                    <h1 className="text-[4.5vw] font-serif text-black mb-6 leading-tight">
                        {project.title}
                    </h1>

                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-6 text-[1vw] text-black">
                        <time dateTime={project.date} className="tracking-wide">
                            {formattedDate}
                        </time>
                        <span className="text-black">·</span>
                        <div className="tracking-widest uppercase">
                            {project.tags.join(" · ")}
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <ReactMarkdown
                        components={{
                            h1: ({ children }) => (
                                <h1 className="text-[3.5vw] font-serif text-black mt-16 mb-6 leading-tight">
                                    {children}
                                </h1>
                            ),
                            h2: ({ children }) => (
                                <h2 className="text-[2.5vw] font-serif text-black mt-12 mb-4 leading-tight">
                                    {children}
                                </h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="text-[2vw] font-serif text-black mt-10 mb-3 leading-tight">
                                    {children}
                                </h3>
                            ),
                            p: ({ children }) => (
                                <p className="text-[1.15vw] text-black leading-relaxed mb-6">
                                    {children}
                                </p>
                            ),
                            ul: ({ children }) => (
                                <ul className="text-[1.15vw] text-black leading-relaxed mb-6 ml-8 list-disc space-y-2">
                                    {children}
                                </ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="text-[1.15vw] text-black leading-relaxed mb-6 ml-8 list-decimal space-y-2">
                                    {children}
                                </ol>
                            ),
                            li: ({ children }) => (
                                <li className="text-[1.15vw] text-black leading-relaxed">
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
                                <code className="text-[1vw] bg-neutral-200/50 px-2 py-1 rounded font-mono text-black">
                                    {children}
                                </code>
                            ),
                            pre: ({ children }) => (
                                <pre className="bg-neutral-200/50 p-6 rounded-lg overflow-x-auto mb-6 text-[0.95vw] font-mono">
                                    {children}
                                </pre>
                            ),
                            blockquote: ({ children }) => (
                                <blockquote className="border-l-2 border-black pl-6 my-8 text-[1.15vw] text-black italic">
                                    {children}
                                </blockquote>
                            ),
                            hr: () => (
                                <hr className="border-0 border-t border-black my-12" />
                            ),
                        }}
                    >
                        {project.content}
                    </ReactMarkdown>
                </div>

                {/* Footer Navigation */}
                <footer className="mt-20 pt-12 border-t border-black">
                    <Link
                        href="/projects"
                        className="text-[1vw] text-black relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    >
                        ← Back to Projects
                    </Link>
                </footer>
            </article>
        </main>
    );
}
