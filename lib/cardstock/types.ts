/**
 * Type definitions for cardstock texture rendering
 */

export interface Vector3 {
    x: number;
    y: number;
    z: number;
}

export interface RGBColor {
    r: number;
    g: number;
    b: number;
}

export interface LightingConfig {
    /** Light direction angle in degrees (0-360) */
    angle: number;
    /** Light elevation (z-component, 0-1) */
    elevation: number;
    /** Ambient light intensity (0-1) */
    ambient: number;
    /** Diffuse light intensity (0-1) */
    diffuse: number;
}

export interface CardstockConfig {
    /** URL to the normal map texture */
    normalMapUrl: string;
    /** Base color of the cardstock (RGB 0-255) */
    baseColor: RGBColor;
    /** Lighting configuration */
    lighting: LightingConfig;
}
