"use server";

import { revalidatePath } from "next/cache";
import { updateSiteConfig, type SiteConfig } from "@/lib/siteConfig";

/**
 * Writes the edited config back to data/site-config.json.
 *
 * This only actually persists when the app is running with a writable
 * filesystem (i.e. `npm run dev` locally). On Vercel the deployed bundle's
 * filesystem is read-only, so this will throw there — the caller shows
 * that as a "couldn't save, this only works locally" message rather than a
 * silent failure.
 */
export async function saveSiteConfig(
    config: SiteConfig
): Promise<{ ok: true } | { ok: false; error: string }> {
    try {
        updateSiteConfig(config);
    } catch (err) {
        return {
            ok: false,
            error:
                err instanceof Error
                    ? err.message
                    : "Unknown error writing data/site-config.json",
        };
    }

    // Both pages read the config at request time, so bust their cache.
    revalidatePath("/");
    revalidatePath("/about");

    return { ok: true };
}
