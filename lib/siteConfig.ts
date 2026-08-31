import fs from "fs";
import path from "path";

/**
 * Site config: the business card fields and About-page experience list,
 * editable through /admin instead of a code change.
 *
 * Storage is a plain JSON file in the repo (data/site-config.json) — no
 * database. That means writes only actually stick when running locally
 * (`npm run dev`); on Vercel the deployed filesystem is read-only, so a
 * production edit will fail gracefully (see updateSiteConfig) and needs a
 * commit + push to actually publish, same as any other content change on
 * this site.
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

/**
 * Persist a full config back to disk. Throws if the filesystem is
 * read-only (e.g. a production Vercel deployment) — callers should catch
 * this and tell the user the edit needs to happen locally instead.
 */
export function updateSiteConfig(config: SiteConfig): void {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 4) + "\n", "utf8");
}
