import { getSiteConfig } from "@/lib/siteConfig";
import AdminEditor from "./AdminEditor";

// Not linked from anywhere in the site's nav — reachable only by typing
// /admin directly. See app/admin/actions.ts for why saving only works
// when running locally.
export default function AdminPage() {
    const config = getSiteConfig();

    return (
        <div className="min-h-screen bg-[#f4f3ee] p-6 md:p-12">
            <main className="max-w-3xl mx-auto">
                <h1 className="text-2xl font-medium text-black mb-1">
                    Site config
                </h1>
                <p className="text-sm text-black/60 mb-8">
                    Edits the business card and the About page&apos;s
                    experience list. Saving only writes to disk when this is
                    running locally (<code>npm run dev</code>) — on the
                    deployed site the save will fail, since Vercel&apos;s
                    filesystem is read-only there. Commit and push{" "}
                    <code>data/site-config.json</code> to publish a change.
                </p>
                <AdminEditor initialConfig={config} />
            </main>
        </div>
    );
}
