import { NextResponse } from "next/server";
import { getAllProjects, getAllTags } from "@/lib/projects/loader";

export async function GET() {
    try {
        const projects = getAllProjects();
        const tags = getAllTags();

        return NextResponse.json({
            projects,
            tags,
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
        return NextResponse.json(
            { error: "Failed to load projects" },
            { status: 500 },
        );
    }
}
