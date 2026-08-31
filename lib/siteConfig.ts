import fs from "fs";
import path from "path";

/**
 * Site config: the business card fields and About-page experience list.
 * Plain JSON in the repo (data/site-config.json) — edited directly (or via
 * Claude) rather than through any in-app UI.
 */

const CONFIG_PATH = path.join(process.cwd(), "data/site-config.json");

export interface BusinessCardConfig {
    name: string;
    subtitle: string;
    email: string;
    phone: string;
    company: string;
    companyUrl: string;
    linkedin: string;
}

export interface ExperienceRole {
    title: string;
    dateLabel: string;
}

/**
 * One company/org, with one or more roles held there. A company with
 * multiple roles (a promotion, or — like Junoon Wellness — a shift from
 * co-founder to advisor) renders as a LinkedIn-style grouped block: the
 * company shown once, each role on its own line with its own date range,
 * connected by a line to show it's the same job. List roles newest first.
 */
export interface ExperienceGroup {
    org: string;
    orgUrl: string;
    location: string;
    roles: ExperienceRole[];
}

export interface SiteConfig {
    businessCard: BusinessCardConfig;
    experience: ExperienceGroup[];
}

export function getSiteConfig(): SiteConfig {
    const raw = fs.readFileSync(CONFIG_PATH, "utf8");
    return JSON.parse(raw) as SiteConfig;
}
