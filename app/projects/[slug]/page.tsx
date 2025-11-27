import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects/loader";
import ProjectContent from "@/components/projects/ProjectContent";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    // Fetch data on the server - no loading state needed!
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectContent project={project} />;
}
