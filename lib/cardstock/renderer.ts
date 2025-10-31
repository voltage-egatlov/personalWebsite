/**
 * Canvas-based normal map renderer
 *
 * Renders a normal map texture with realistic lighting to create
 * a premium cardstock paper effect.
 */

import type { CardstockConfig } from "./types";
import {
    decodeNormal,
    createLightDirection,
    calculateLighting,
    applyLighting,
} from "./lighting";

/**
 * Render a normal map with lighting to a canvas
 *
 * This function processes each pixel of the normal map, calculates
 * lighting based on surface normals, and renders the final result.
 *
 * @param canvas - Target canvas element
 * @param normalMap - Loaded normal map image
 * @param config - Cardstock configuration
 */
export function renderCardstockTexture(
    canvas: HTMLCanvasElement,
    normalMap: HTMLImageElement,
    config: CardstockConfig,
): void {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw new Error("Failed to get 2D context from canvas");
    }

    // Set canvas size to match normal map
    canvas.width = normalMap.width;
    canvas.height = normalMap.height;

    // Draw normal map to canvas to access pixel data
    ctx.drawImage(normalMap, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Pre-compute light direction (constant for all pixels)
    const lightDir = createLightDirection(
        config.lighting.angle,
        config.lighting.elevation,
    );

    const { r: baseR, g: baseG, b: baseB } = config.baseColor;
    const { ambient, diffuse } = config.lighting;

    // Process each pixel
    for (let i = 0; i < data.length; i += 4) {
        // Decode normal from RGB channels
        const normal = decodeNormal(data[i], data[i + 1], data[i + 2]);

        // Calculate lighting intensity
        const lighting = calculateLighting(normal, lightDir, ambient, diffuse);

        // Apply lighting to base color
        const [r, g, b] = applyLighting(baseR, baseG, baseB, lighting);

        data[i] = r;
        data[i + 1] = g;
        data[i + 2] = b;
        data[i + 3] = 255; // Full opacity
    }

    // Render final result
    ctx.putImageData(imageData, 0, 0);
}

/**
 * Load an image from a URL
 * @param url - Image URL
 * @returns Promise that resolves with the loaded image
 */
export function loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () =>
            reject(new Error(`Failed to load image from ${url}`));
        img.src = url;
    });
}
