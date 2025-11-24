import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Project, ProjectListItem } from "./types";

const PROJECTS_DIR = path.join(process.cwd(), "data/projects");

/**
 * Get all project slugs from the projects directory
 */
export function getProjectSlugs(): string[] {
    if (!fs.existsSync(PROJECTS_DIR)) {
        return [];
    }

    const files = fs.readdirSync(PROJECTS_DIR);
    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.replace(/\.md$/, ""));
}

/**
 * Get all projects with metadata for the list view
 */
export function getAllProjects(): ProjectListItem[] {
    const slugs = getProjectSlugs();
    const projects = slugs
        .map((slug) => {
            const fullPath = path.join(PROJECTS_DIR, `${slug}.md`);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data } = matter(fileContents);

            return {
                title: data.title,
                slug: data.slug || slug,
                date: data.date,
                tags: data.tags || [],
                description: data.description,
            } as ProjectListItem;
        })
        .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

    return projects;
}

/**
 * Get a single project by slug with full content
 */
export function getProjectBySlug(slug: string): Project | null {
    try {
        const fullPath = path.join(PROJECTS_DIR, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            title: data.title,
            slug: data.slug || slug,
            date: data.date,
            tags: data.tags || [],
            description: data.description,
            content,
        } as Project;
    } catch (error) {
        console.error(`Failed to load project "${slug}":`, error);
        return null;
    }
}

/**
 * Get all unique tags from all projects
 */
export function getAllTags(): string[] {
    const projects = getAllProjects();
    const tagSet = new Set<string>();

    projects.forEach((project) => {
        project.tags.forEach((tag) => tagSet.add(tag));
    });

    return Array.from(tagSet).sort();
}
