"use client";

import { useState } from "react";
import type { SiteConfig, ExperienceGroup, ExperienceRole } from "@/lib/siteConfig";
import { saveSiteConfig } from "./actions";

const EMPTY_ROLE: ExperienceRole = { title: "", dateLabel: "" };
const EMPTY_GROUP: ExperienceGroup = {
    org: "",
    orgUrl: "",
    location: "",
    roles: [{ ...EMPTY_ROLE }],
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

    function updateGroup(index: number, patch: Partial<ExperienceGroup>) {
        setConfig((prev) => ({
            ...prev,
            experience: prev.experience.map((group, i) =>
                i === index ? { ...group, ...patch } : group
            ),
        }));
    }

    function updateRole(groupIndex: number, roleIndex: number, patch: Partial<ExperienceRole>) {
        setConfig((prev) => ({
            ...prev,
            experience: prev.experience.map((group, i) =>
                i === groupIndex
                    ? {
                          ...group,
                          roles: group.roles.map((role, r) =>
                              r === roleIndex ? { ...role, ...patch } : role
                          ),
                      }
                    : group
            ),
        }));
    }

    function addGroup() {
        // New companies go on top, since that's where a new job shows up
        // on the About page.
        setConfig((prev) => ({
            ...prev,
            experience: [{ ...EMPTY_GROUP, roles: [{ ...EMPTY_ROLE }] }, ...prev.experience],
        }));
    }

    function removeGroup(index: number) {
        setConfig((prev) => ({
            ...prev,
            experience: prev.experience.filter((_, i) => i !== index),
        }));
    }

    function addRole(groupIndex: number) {
        // A promotion — put the new role on top; the About page renders
        // roles in the order they're listed here, newest first.
        setConfig((prev) => ({
            ...prev,
            experience: prev.experience.map((group, i) =>
                i === groupIndex
                    ? { ...group, roles: [{ ...EMPTY_ROLE }, ...group.roles] }
                    : group
            ),
        }));
    }

    function removeRole(groupIndex: number, roleIndex: number) {
        setConfig((prev) => ({
            ...prev,
            experience: prev.experience.map((group, i) =>
                i === groupIndex
                    ? { ...group, roles: group.roles.filter((_, r) => r !== roleIndex) }
                    : group
            ),
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
                        onClick={addGroup}
                        className="text-sm border border-black/20 rounded px-3 py-1 hover:bg-black/5"
                    >
                        + Add company
                    </button>
                </div>
                <p className="text-xs text-black/50 mb-4">
                    A company with more than one role (a promotion, or a
                    change like co-founder → advisor) renders as one grouped
                    block with a connecting line — add a second role under
                    the same company instead of a new company entry.
                </p>

                <div className="space-y-5">
                    {config.experience.map((group, groupIndex) => (
                        <div
                            key={groupIndex}
                            className="border border-black/10 rounded p-4 bg-white/60"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div>
                                    <label className={labelClass}>Company</label>
                                    <input
                                        className={inputClass}
                                        value={group.org}
                                        onChange={(e) =>
                                            updateGroup(groupIndex, { org: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>Company URL</label>
                                    <input
                                        className={inputClass}
                                        value={group.orgUrl}
                                        onChange={(e) =>
                                            updateGroup(groupIndex, { orgUrl: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>
                                        Location (optional)
                                    </label>
                                    <input
                                        className={inputClass}
                                        value={group.location}
                                        onChange={(e) =>
                                            updateGroup(groupIndex, { location: e.target.value })
                                        }
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 pl-4 border-l border-dashed border-black/20">
                                {group.roles.map((role, roleIndex) => (
                                    <div
                                        key={roleIndex}
                                        className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-2 items-end"
                                    >
                                        <div>
                                            <label className={labelClass}>
                                                Role title
                                            </label>
                                            <input
                                                className={inputClass}
                                                value={role.title}
                                                onChange={(e) =>
                                                    updateRole(groupIndex, roleIndex, {
                                                        title: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="w-40">
                                            <label className={labelClass}>
                                                Date label
                                            </label>
                                            <input
                                                className={inputClass}
                                                placeholder="2026 – Present"
                                                value={role.dateLabel}
                                                onChange={(e) =>
                                                    updateRole(groupIndex, roleIndex, {
                                                        dateLabel: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removeRole(groupIndex, roleIndex)}
                                            disabled={group.roles.length <= 1}
                                            className="text-xs text-red-700/70 hover:text-red-700 disabled:opacity-30 disabled:cursor-not-allowed h-[34px]"
                                        >
                                            Remove role
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addRole(groupIndex)}
                                    className="text-xs text-black/60 hover:text-black"
                                >
                                    + Add role at this company (promotion)
                                </button>
                            </div>

                            <button
                                type="button"
                                onClick={() => removeGroup(groupIndex)}
                                className="text-xs text-red-700/70 hover:text-red-700 mt-3"
                            >
                                Remove company
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
