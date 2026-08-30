"use client";

import { useState } from "react";
import type { SiteConfig, ExperienceEntry } from "@/lib/siteConfig";
import { saveSiteConfig } from "./actions";

const EMPTY_ENTRY: ExperienceEntry = {
    title: "",
    org: "",
    orgUrl: "",
    location: "",
    dateLabel: "",
};

const inputClass =
    "w-full rounded border border-black/15 bg-white px-2 py-1.5 text-sm text-black focus:outline-none focus:border-black/40";
const labelClass = "block text-xs text-black/50 mb-1";

export default function AdminEditor({
    initialConfig,
}: {
    initialConfig: SiteConfig;
}) {
    const [config, setConfig] = useState<SiteConfig>(initialConfig);
    const [status, setStatus] = useState<
        { kind: "idle" } | { kind: "saving" } | { kind: "ok" } | { kind: "error"; message: string }
    >({ kind: "idle" });

    function updateCard<K extends keyof SiteConfig["businessCard"]>(
        key: K,
        value: SiteConfig["businessCard"][K]
    ) {
        setConfig((prev) => ({
            ...prev,
            businessCard: { ...prev.businessCard, [key]: value },
        }));
    }

    function updateEntry(index: number, patch: Partial<ExperienceEntry>) {
        setConfig((prev) => ({
            ...prev,
            experience: prev.experience.map((entry, i) =>
                i === index ? { ...entry, ...patch } : entry
            ),
        }));
    }

    function addEntry() {
        setConfig((prev) => ({
            ...prev,
            // New roles (promotions, new gigs) go on top, since that's
            // where they'll display on the About page.
            experience: [{ ...EMPTY_ENTRY }, ...prev.experience],
        }));
    }

    function removeEntry(index: number) {
        setConfig((prev) => ({
            ...prev,
            experience: prev.experience.filter((_, i) => i !== index),
        }));
    }

    async function handleSave() {
        setStatus({ kind: "saving" });
        const result = await saveSiteConfig(config);
        if (result.ok) {
            setStatus({ kind: "ok" });
        } else {
            setStatus({ kind: "error", message: result.error });
        }
    }

    return (
        <div className="space-y-10">
            <section>
                <h2 className="text-lg font-medium text-black mb-4">
                    Business card
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className={labelClass}>Name</label>
                        <input
                            className={inputClass}
                            value={config.businessCard.name}
                            onChange={(e) => updateCard("name", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>
                            Subtitle / title (shown under name)
                        </label>
                        <input
                            className={inputClass}
                            value={config.businessCard.subtitle}
                            onChange={(e) => updateCard("subtitle", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Company</label>
                        <input
                            className={inputClass}
                            value={config.businessCard.company}
                            onChange={(e) => updateCard("company", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Company URL</label>
                        <input
                            className={inputClass}
                            value={config.businessCard.companyUrl}
                            onChange={(e) => updateCard("companyUrl", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Email</label>
                        <input
                            className={inputClass}
                            value={config.businessCard.email}
                            onChange={(e) => updateCard("email", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Phone</label>
                        <input
                            className={inputClass}
                            value={config.businessCard.phone}
                            onChange={(e) => updateCard("phone", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>LinkedIn URL</label>
                        <input
                            className={inputClass}
                            value={config.businessCard.linkedin}
                            onChange={(e) => updateCard("linkedin", e.target.value)}
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium text-black">
                        Experience (About page)
                    </h2>
                    <button
                        type="button"
                        onClick={addEntry}
                        className="text-sm border border-black/20 rounded px-3 py-1 hover:bg-black/5"
                    >
                        + Add role
                    </button>
                </div>

                <div className="space-y-4">
                    {config.experience.map((entry, index) => (
                        <div
                            key={index}
                            className="border border-black/10 rounded p-4 bg-white/60"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="md:col-span-2">
                                    <label className={labelClass}>
                                        Title (e.g. &quot;Associate
                                        Consultant&quot;, or &quot;Co-founder
                                        → Advisor&quot; for a role that
                                        changed over time)
                                    </label>
                                    <input
                                        className={inputClass}
                                        value={entry.title}
                                        onChange={(e) =>
                                            updateEntry(index, { title: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>Org</label>
                                    <input
                                        className={inputClass}
                                        value={entry.org}
                                        onChange={(e) =>
                                            updateEntry(index, { org: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>Org URL</label>
                                    <input
                                        className={inputClass}
                                        value={entry.orgUrl}
                                        onChange={(e) =>
                                            updateEntry(index, { orgUrl: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>
                                        Location (optional)
                                    </label>
                                    <input
                                        className={inputClass}
                                        value={entry.location}
                                        onChange={(e) =>
                                            updateEntry(index, { location: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>
                                        Date label (e.g. &quot;2026 –
                                        Present&quot;)
                                    </label>
                                    <input
                                        className={inputClass}
                                        value={entry.dateLabel}
                                        onChange={(e) =>
                                            updateEntry(index, { dateLabel: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => removeEntry(index)}
                                className="text-xs text-red-700/70 hover:text-red-700 mt-3"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <div className="flex items-center gap-4 sticky bottom-6">
                <button
                    type="button"
                    onClick={handleSave}
                    disabled={status.kind === "saving"}
                    className="bg-black text-white text-sm px-4 py-2 rounded disabled:opacity-50"
                >
                    {status.kind === "saving" ? "Saving…" : "Save"}
                </button>
                {status.kind === "ok" && (
                    <span className="text-sm text-green-700">
                        Saved to data/site-config.json — commit &amp; push to
                        publish.
                    </span>
                )}
                {status.kind === "error" && (
                    <span className="text-sm text-red-700">
                        Couldn&apos;t save ({status.message}). This only
                        works when running locally — on the deployed site,
                        edit data/site-config.json directly and push.
                    </span>
                )}
            </div>
        </div>
    );
}
