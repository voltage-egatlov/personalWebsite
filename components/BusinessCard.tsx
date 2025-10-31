"use client";

import { useEffect, useRef } from "react";
import {
    loadImageCached,
    renderCardstockTexture,
    DEFAULT_CONFIG,
    type CardstockConfig,
} from "@/lib/cardstock";

interface BusinessCardProps {
    /**
     * URL to the normal map texture
     * @default "/textures/normal-map.png"
     */
    normalMapUrl?: string;

    /**
     * Base color of the cardstock (hex string)
     * @default "#F7F5F0" (bone white)
     */
    baseColor?: string;

    /**
     * Light angle in degrees (0° = right, 90° = top, etc.)
     * @default 45
     */
    lightAngle?: number;

    /**
     * Light elevation (0 = horizontal, 1 = directly above)
     * @default 0.5
     */
    lightElevation?: number;

    /**
     * Ambient light intensity (0-1)
     * @default 0.85
     */
    ambientLight?: number;

    /**
     * Diffuse light intensity (0-1)
     * @default 0.15
     */
    diffuseLight?: number;

    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) {
        throw new Error(`Invalid hex color: ${hex}`);
    }
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    };
}

/**
 * BusinessCard component with realistic cardstock texture
 *
 * Renders a premium off-white cardstock appearance using normal map
 * lighting. The default configuration replicates the aesthetic from
 * Patrick Bateman's business card in American Psycho.
 *
 * @example
 * ```tsx
 * // Use defaults (recommended for authentic look)
 * <BusinessCard />
 *
 * // Customize appearance
 * <BusinessCard
 *   baseColor="#FFFFFF"
 *   lightAngle={90}
 *   ambientLight={0.9}
 * />
 * ```
 */
export default function BusinessCard({
    normalMapUrl = DEFAULT_CONFIG.normalMapUrl,
    baseColor = "#F7F5F0",
    lightAngle = DEFAULT_CONFIG.lighting.angle,
    lightElevation = DEFAULT_CONFIG.lighting.elevation,
    ambientLight = DEFAULT_CONFIG.lighting.ambient,
    diffuseLight = DEFAULT_CONFIG.lighting.diffuse,
    className = "",
}: BusinessCardProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Build configuration from props
        const config: CardstockConfig = {
            normalMapUrl,
            baseColor: hexToRgb(baseColor),
            lighting: {
                angle: lightAngle,
                elevation: lightElevation,
                ambient: ambientLight,
                diffuse: diffuseLight,
            },
        };

        // Load and render texture (with caching)
        loadImageCached(normalMapUrl)
            .then((normalMap) => {
                renderCardstockTexture(canvas, normalMap, config);
            })
            .catch((error) => {
                console.error("Failed to render cardstock texture:", error);
            });
    }, [
        normalMapUrl,
        baseColor,
        lightAngle,
        lightElevation,
        ambientLight,
        diffuseLight,
    ]);

    return (
        <div
            className={`w-full max-w-[700px] mx-auto shadow-[2px_3px_4px_rgba(0,0,0,0.4)] ${className}`}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-auto block"
                style={{
                    aspectRatio: "1.75",
                }}
            />
        </div>
    );
}
