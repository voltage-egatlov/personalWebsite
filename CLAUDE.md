# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with Next.js 16 (App Router) featuring a premium business card component with realistic cardstock texture rendering. The project emphasizes visual quality and uses canvas-based normal map lighting to achieve a high-end aesthetic inspired by the American Psycho business card scene.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### App Structure (Next.js App Router)

- `app/page.tsx` - Home page with centered BusinessCard component
- `app/layout.tsx` - Root layout with Geist fonts (sans + mono)
- `app/globals.css` - Global styles with Tailwind CSS v4

### Component Architecture

**BusinessCard Component** (`components/BusinessCard.tsx`)
- Client component (`"use client"`) that renders a business card with realistic cardstock texture
- Composed of two layers:
  1. **Canvas layer** (z-10): Renders the cardstock texture using normal maps
  2. **Text layer** (absolute positioning): Content overlay with name, contact info, etc.
- Uses the cardstock rendering library for texture effects
- All text content is configurable via props with sensible defaults

### Cardstock Texture Library (`lib/cardstock/`)

A modular system for rendering realistic paper textures using normal maps and Lambertian lighting. **This is the core visual engine of the site.**

**Module Structure:**
- `types.ts` - TypeScript interfaces (Vector3, RGBColor, LightingConfig, CardstockConfig)
- `constants.ts` - **CRITICAL**: Default configuration values that control the visual appearance
- `lighting.ts` - Pure functions for lighting calculations (normalize, dot product, Lambertian reflectance)
- `renderer.ts` - Canvas rendering logic that applies lighting to each pixel
- `cache.ts` - Image loading with caching to optimize performance
- `index.ts` - Public API exports

**Rendering Pipeline:**
1. Load normal map image (cached for performance)
2. Extract RGB pixel data from normal map
3. For each pixel: decode normal vector from RGB → calculate lighting → apply to base color
4. Render final texture to canvas

**Critical Visual Parameters** (see `lib/cardstock/constants.ts`):
- Base color: `#F7F5F0` (bone white, NOT pure white)
- Ambient light: `0.85` (85% base brightness)
- Diffuse light: `0.15` (15% texture contrast)
- Light angle: `45°` (classic studio lighting)
- Light elevation: `0.5` (moderate 3D depth)

**⚠️ WARNING**: The ambient/diffuse ratio (85/15) is carefully calibrated for premium aesthetic. Changes can make the card look dull (too little ambient) or harsh (too much diffuse).

### Path Aliases

The project uses `@/*` for absolute imports:
```ts
import BusinessCard from "@/components/BusinessCard";
import { renderCardstockTexture } from "@/lib/cardstock";
```

## Key Implementation Details

### Normal Map Rendering

The cardstock texture is achieved through **normal map lighting**, not pre-rendered images:
- Normal maps are stored in `public/textures/normal-map.png`
- Each RGB pixel encodes a 3D surface normal vector
- Lighting is calculated per-pixel using the Lambertian reflectance model
- This creates the subtle paper fiber texture visible on the card

**Why this approach:**
- Dynamic: Can adjust lighting/color without regenerating textures
- High quality: No compression artifacts from pre-rendered images
- Performant: Image caching + pre-computed light direction

### Canvas Layer Opacity

The canvas texture layer uses `opacity: 0.95` to allow text to show through while maintaining the paper texture effect. The text layer is positioned **below** the canvas in z-index but visually appears on top due to canvas transparency.

### Responsive Text Sizing

All text on the card uses viewport-width units (`vw`) to scale proportionally with the card:
- Name: `3.2vw`
- Subtitle: `1.2vw`
- Contact info: `0.9vw`

This maintains visual hierarchy across screen sizes.

## Visual Quality Preservation

**This project prioritizes visual aesthetics over code brevity.** The REFACTORING_SUMMARY.md documents a major refactoring that preserved 100% of the visual quality while improving maintainability.

**When making changes:**
1. Always compare visual output against previous renders
2. Test with the default base color `#FAF6F0` (used in page.tsx, slightly warmer than lib default)
3. Do not reduce canvas rendering quality to improve performance without testing
4. Read `lib/cardstock/README.md` before modifying lighting calculations

## Important Files

- `REFACTORING_SUMMARY.md` - Comprehensive documentation of the cardstock library architecture and design decisions
- `lib/cardstock/README.md` - API documentation and usage guide for the texture rendering system
- `public/textures/` - Normal map assets for cardstock rendering

## Technology Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **React**: 19.2.0
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`
- **Fonts**: Geist Sans and Geist Mono (loaded via `next/font`)
- **Rendering**: HTML5 Canvas API for texture generation

## Project Philosophy

This is a personal portfolio site that demonstrates attention to detail through:
1. **Tactile realism** - The cardstock texture should feel premium and physical
2. **Subtle sophistication** - Effects should be noticeable but not flashy
3. **Technical craftsmanship** - Clean, modular code with comprehensive documentation
4. **Performance** - Optimized rendering with caching and pre-computation

The business card is the centerpiece and should always maintain its high-quality aesthetic.
