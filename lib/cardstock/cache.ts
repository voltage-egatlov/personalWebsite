/**
 * Image cache for normal maps
 *
 * Prevents redundant loading of the same normal map image across
 * multiple component instances or re-renders.
 */

const imageCache = new Map<string, Promise<HTMLImageElement>>();

/**
 * Load an image with caching
 *
 * If the image has already been requested, returns the same Promise
 * to avoid duplicate network requests.
 *
 * @param url - Image URL
 * @returns Promise that resolves with the loaded image
 */
export function loadImageCached(url: string): Promise<HTMLImageElement> {
    if (imageCache.has(url)) {
        return imageCache.get(url)!;
    }

    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => {
            // Remove from cache on error to allow retry
            imageCache.delete(url);
            reject(new Error(`Failed to load image from ${url}`));
        };
        img.src = url;
    });

    imageCache.set(url, promise);
    return promise;
}

/**
 * Clear the image cache
 * Useful for testing or forcing reload
 */
export function clearImageCache(): void {
    imageCache.clear();
}

/**
 * Remove a specific image from cache
 */
export function removeFromCache(url: string): boolean {
    return imageCache.delete(url);
}
