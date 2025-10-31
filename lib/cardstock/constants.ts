/**
 * Default configuration values for cardstock texture
 *
 * These values are carefully tuned to replicate the aesthetic of
 * Patrick Bateman's business card from American Psycho:
 * - High-end off-white bone cardstock
 * - Subtle depth and fine grain
 * - Natural, soft light response
 * - Premium, tactile appearance
 */

import type { CardstockConfig } from "./types";

/**
 * Default cardstock configuration
 *
 * ⚠️ CRITICAL: These values affect the visual aesthetic.
 * Changes should be tested visually to ensure the premium
 * cardstock feel is maintained.
 */
export const DEFAULT_CONFIG: CardstockConfig = {
    normalMapUrl: "/textures/normal-map.png",

    // Bone white base color (#F7F5F0)
    // This specific shade creates the premium off-white appearance
    baseColor: {
        r: 247,
        g: 245,
        b: 240,
    },

    lighting: {
        // 45° = top-left lighting (classic studio lighting angle)
        angle: 45,

        // 0.5 = moderate elevation
        // Creates natural depth without harsh shadows
        elevation: 0.5,

        // High ambient (85%) keeps the paper bright and premium
        // Low diffuse (15%) provides subtle texture variation
        // This ratio is key to the soft, matte cardstock feel
        ambient: 0.85,
        diffuse: 0.15,
    },
};
