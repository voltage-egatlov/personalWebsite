"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
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
     * Text scale factor (multiplier for all text sizes)
     * @default 1.0
     */
    textScaleFactor?: number;

    /**
     * Additional CSS classes
     */
    className?: string;

    // Text content
    /**
     * Name to display (centered, large)
     * @default "TEJ CHHABRA"
     */
    name?: string;

    /**
     * Subtitle/job title (centered, below name)
     * @default "ASSOCIATE STRATEGY CONSULTANT"
     */
    subtitle?: string;

    /**
     * Email address (bottom left, clickable)
     * @default "contact@tejchhabra.com"
     */
    email?: string;

    /**
     * Phone number (bottom left)
     * @default "617 314 1535"
     */
    phone?: string;

    /**
     * Company name (bottom right, clickable)
     * @default "Mars & Co."
     */
    company?: string;

    /**
     * Company website URL
     * @default "https://www.marsandco.com/"
     */
    companyUrl?: string;

    /**
     * Optional text for top left corner
     */
    topLeft?: string;

    /**
     * Optional text for top right corner
     */
    topRight?: string;
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
    baseColor = "#FAF6F0",
    lightAngle = DEFAULT_CONFIG.lighting.angle,
    lightElevation = DEFAULT_CONFIG.lighting.elevation,
    ambientLight = DEFAULT_CONFIG.lighting.ambient,
    diffuseLight = DEFAULT_CONFIG.lighting.diffuse,
    textScaleFactor = 1.3,
    className = "",
    name = "TEJ CHHABRA",
    subtitle = "associate strategy consultant",
    email = "contact@tejchhabra.com",
    phone = "617 314 1535",
    company = "Mars & Co .",
    companyUrl = "https://www.marsandco.com/",
    topLeft,
    topRight,
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
            className={`relative w-full min-w-[280px] max-w-[700px] mx-auto shadow-[2px_3px_4px_rgba(0,0,0,0.4)] @container ${className}`}
        >
            {/* Text Layer (above canvas) */}
            <div className="absolute inset-0 z-20">
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <h1
                        className="font-serif tracking-wide pointer-events-auto select-text -mb-3"
                        style={{
                            fontSize: `${5 * textScaleFactor}cqw`,
                            textShadow:
                                "-1px -1px 0px rgba(0, 0, 0, 0.1), 1px 1px 0px rgba(255, 255, 255, 0.5)",
                        }}
                    >
                        {name}
                    </h1>
                    <p
                        className="font-serif tracking-wider text-center pointer-events-auto select-text"
                        style={{
                            fontSize: `${3 * textScaleFactor}cqw`,
                            textShadow:
                                "-1px -1px 0px rgba(0, 0, 0, 0.1), 1px 1px 0px rgba(255, 255, 255, 0.5)",
                        }}
                    >
                        {subtitle}
                    </p>
                </div>

                {/* Top left: Company */}
                <div
                    className="absolute top-[5%] left-[5%] font-serif pointer-events-auto select-text"
                    style={{
                        fontSize: `max(14px, ${2 * textScaleFactor}cqw)`,
                    }}
                >
                    <a
                        href={companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-animated-underline no-underline"
                        style={{ textDecoration: "none" }}
                    >
                        {company}
                    </a>
                </div>

                {/* Top right: Email & Phone */}
                <div
                    className="absolute top-[5%] right-[5%] font-serif leading-tight text-right pointer-events-auto select-text"
                    style={{
                        fontSize: `max(14px, ${2.25 * textScaleFactor}cqw)`,
                    }}
                >
                    <a
                        href={`mailto:${email}`}
                        className="block link-animated-underline"
                    >
                        {email}
                    </a>
                    <p>{phone}</p>
                </div>

                {/* Mobile: Navigation links centered at bottom */}
                <div
                    className="absolute bottom-[8%] left-1/2 -translate-x-1/2 font-serif leading-normal text-center pointer-events-auto select-text sm:hidden"
                    style={{
                        fontSize: `max(18px, ${4 * textScaleFactor}cqw)`,
                    }}
                >
                    <Link
                        href="/projects"
                        className="link-animated-underline no-underline cursor-pointer"
                        style={{ textDecoration: "none" }}
                    >
                        Projects
                    </Link>
                    <span className="mx-3">·</span>
                    <Link
                        href="/about"
                        className="link-animated-underline no-underline cursor-pointer"
                        style={{ textDecoration: "none" }}
                    >
                        About
                    </Link>
                </div>

                {/* Desktop: Navigation links at bottom right */}
                <div
                    className="hidden sm:block absolute bottom-[8%] right-[5%] font-serif leading-tight text-right pointer-events-auto select-text"
                    style={{
                        fontSize: `max(14px, ${2.25 * textScaleFactor}cqw)`,
                    }}
                >
                    <Link
                        href="/projects"
                        className="link-animated-underline no-underline cursor-pointer"
                        style={{ textDecoration: "none" }}
                    >
                        Projects
                    </Link>
                    <br />
                    <Link
                        href="/about"
                        className="link-animated-underline no-underline cursor-pointer"
                        style={{ textDecoration: "none" }}
                    >
                        About
                    </Link>
                </div>

                {/* Optional: Top left corner */}
                {topLeft && (
                    <div className="absolute top-[5%] left-[5%] text-[1vw] font-serif">
                        {topLeft}
                    </div>
                )}

                {/* Optional: Top right corner */}
                {topRight && (
                    <div className="absolute top-[5%] right-[5%] text-[1vw] font-serif">
                        {topRight}
                    </div>
                )}
            </div>

            {/* Canvas (paper texture below text) */}
            <canvas
                ref={canvasRef}
                className="relative w-full h-auto block pointer-events-none"
                style={{
                    aspectRatio: "1.75",
                }}
            />
        </div>
    );
}
