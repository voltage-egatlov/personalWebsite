import { NextResponse } from "next/server";
import { getProjectBySlug } from "@/lib/projects/loader";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const project = getProjectBySlug(slug);

        if (!project) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(project);
    } catch (error) {
        console.error("Error fetching project:", error);
        return NextResponse.json(
            { error: "Failed to load project" },
            { status: 500 }
        );
    }
}
