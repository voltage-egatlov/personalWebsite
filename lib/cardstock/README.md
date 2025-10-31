# Cardstock Texture Rendering

A complete solution for rendering realistic cardstock paper textures using normal maps and lighting calculations.

## Overview

This library creates a premium, high-end cardstock appearance inspired by Patrick Bateman's business card from *American Psycho*. The effect is achieved through:

- **Normal map rendering**: Each pixel encodes surface orientation
- **Lambertian lighting**: Realistic diffuse light scattering
- **Careful calibration**: 85% ambient + 15% diffuse creates the soft, matte appearance

## Architecture

```
lib/cardstock/
├── types.ts          # TypeScript definitions
├── constants.ts      # Default configuration (CRITICAL VALUES)
├── lighting.ts       # Core lighting calculations
├── renderer.ts       # Canvas rendering logic
├── cache.ts          # Image loading optimization
└── index.ts          # Public exports
```

## Usage

### Basic (Recommended)

```tsx
import BusinessCard from "@/components/BusinessCard";

// Uses defaults - authentic American Psycho aesthetic
<BusinessCard />
```

### Customized

```tsx
<BusinessCard
  normalMapUrl="/textures/custom-normal.png"
  baseColor="#FFFFFF"
  lightAngle={90}
  lightElevation={0.7}
  ambientLight={0.9}
  diffuseLight={0.1}
/>
```

## Key Configuration Values

### ⚠️ Visual Preservation Critical

These values are carefully tuned. Changes may degrade the premium aesthetic:

| Parameter | Default | Purpose | Impact if Changed |
|-----------|---------|---------|-------------------|
| `baseColor` | `#F7F5F0` | Bone white tone | Wrong shade loses premium feel |
| `ambientLight` | `0.85` | Base brightness | Too low = gray/dull, too high = flat |
| `diffuseLight` | `0.15` | Texture contrast | Too high = harsh, too low = invisible |
| `lightAngle` | `45°` | Classic studio lighting | Other angles acceptable |
| `lightElevation` | `0.5` | Moderate depth | Too low = flat, too high = unnatural |

## Implementation Details

### Normal Map Decoding

Normal maps store surface orientation as RGB values:
- **R channel**: X component (horizontal tilt)
- **G channel**: Y component (vertical tilt)
- **B channel**: Z component (surface facing direction)

```ts
// Decode from 0-255 range to -1 to 1
x = (R / 255) * 2 - 1
y = (G / 255) * 2 - 1
z = (B / 255) * 2 - 1
```

### Lighting Calculation

Uses Lambertian reflectance:

```ts
lighting = ambient + max(0, dot(normal, lightDir)) * diffuse
finalColor = baseColor * lighting
```

**Why this works:**
- High ambient (85%) keeps paper bright
- Low diffuse (15%) adds subtle texture
- Result: soft, matte cardstock appearance

### Performance Optimizations

1. **Image caching**: Normal map loaded once, reused across renders
2. **Pre-computed light direction**: Normalized once per render
3. **Direct pixel manipulation**: Fast canvas ImageData API
4. **No redundant recalculations**: Pure functions avoid repeated work

## API Reference

### `renderCardstockTexture(canvas, normalMap, config)`

Renders the texture to a canvas element.

**Parameters:**
- `canvas`: HTMLCanvasElement - Target canvas
- `normalMap`: HTMLImageElement - Loaded normal map image
- `config`: CardstockConfig - Rendering configuration

### `loadImageCached(url)`

Loads an image with caching to avoid duplicate requests.

**Returns:** `Promise<HTMLImageElement>`

### `DEFAULT_CONFIG`

The default configuration object. Use as reference for custom configs.

## Testing Visual Changes

When modifying lighting or color values:

1. **Reference comparison**: Compare against original renders
2. **Check edge cases**: Test with different normal map details
3. **Verify brightness**: Should look bone white, not gray or harsh white
4. **Assess texture**: Should be subtle, not pronounced or invisible
5. **Multiple angles**: If adjusting light direction, test 0°, 45°, 90°, 180°

## Common Pitfalls

❌ **Don't** reduce ambient below 0.75 - paper looks dirty/gray
❌ **Don't** increase diffuse above 0.25 - texture becomes harsh
❌ **Don't** use pure white (#FFFFFF) - loses warmth and premium feel
❌ **Don't** skip normalization - light direction will be incorrect

✅ **Do** test visual changes against the reference aesthetic
✅ **Do** preserve the 85/15 ambient/diffuse ratio when adjusting
✅ **Do** use the default config as a starting point
✅ **Do** cache loaded images for performance

## Future Enhancements

Potential improvements that preserve visual quality:

- [ ] WebGL shader implementation for better performance
- [ ] Specular highlights for semi-gloss cardstock
- [ ] Multiple light sources
- [ ] Anisotropic filtering for print textures
- [ ] Real-time interactive lighting controls
- [ ] Texture LOD for different canvas sizes

**Note**: Any enhancement must be validated against the reference aesthetic.
