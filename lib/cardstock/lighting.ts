/**
 * Lighting calculations for normal map rendering
 *
 * These utilities compute realistic lighting on textured surfaces.
 * Values are carefully tuned to achieve a premium cardstock appearance.
 */

import type { Vector3 } from "./types";

/**
 * Normalize a 3D vector to unit length
 */
export function normalize(v: Vector3): Vector3 {
    const len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    return {
        x: v.x / len,
        y: v.y / len,
        z: v.z / len,
    };
}

/**
 * Compute dot product of two 3D vectors
 */
export function dot(a: Vector3, b: Vector3): number {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}

/**
 * Decode a normal vector from RGB values (0-255 range)
 * Normal maps store XYZ components as RGB channels
 */
export function decodeNormal(r: number, g: number, b: number): Vector3 {
    return {
        x: (r / 255) * 2 - 1,
        y: (g / 255) * 2 - 1,
        z: (b / 255) * 2 - 1,
    };
}

/**
 * Create a light direction vector from angle and elevation
 * @param angle - Angle in degrees (0° = right, 90° = top, etc.)
 * @param elevation - Z-component (0 = horizontal, 1 = directly above)
 */
export function createLightDirection(
    angle: number,
    elevation: number,
): Vector3 {
    const angleRad = (angle * Math.PI) / 180;
    return normalize({
        x: Math.cos(angleRad),
        y: Math.sin(angleRad),
        z: elevation,
    });
}

/**
 * Calculate lighting intensity using Lambertian reflectance
 * @param normal - Surface normal vector
 * @param lightDir - Normalized light direction
 * @param ambient - Ambient light (base brightness, 0-1)
 * @param diffuse - Diffuse light (directional variation, 0-1)
 * @returns Lighting intensity (0-1)
 */
export function calculateLighting(
    normal: Vector3,
    lightDir: Vector3,
    ambient: number,
    diffuse: number,
): number {
    const dotProduct = Math.max(0, dot(normal, lightDir));
    return ambient + dotProduct * diffuse;
}

/**
 * Apply lighting to an RGB color
 */
export function applyLighting(
    r: number,
    g: number,
    b: number,
    lighting: number,
): [number, number, number] {
    return [r * lighting, g * lighting, b * lighting];
}
