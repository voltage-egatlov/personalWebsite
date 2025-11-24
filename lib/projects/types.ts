/**
 * Project metadata and content types
 */

export interface ProjectFrontmatter {
    title: string;
    slug: string;
    date: string;
    tags: string[];
    description: string;
}

export interface Project extends ProjectFrontmatter {
    content: string;
}

// For the list view, we just use ProjectFrontmatter directly
export type ProjectListItem = ProjectFrontmatter;
