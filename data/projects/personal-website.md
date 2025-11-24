---
title: "Personal Website"
slug: "personal-website"
date: "2024-11-16"
tags: ["Coding", "Web Design"]
description: "A premium portfolio site featuring realistic cardstock texture rendering with Next.js 16"
---

# Personal Website

A modern personal portfolio built with Next.js 16, featuring a business card component with realistic cardstock texture rendering that captures the premium aesthetic of the iconic American Psycho business card scene.

## The Vision

This project prioritizes visual quality and attention to detail over technical complexity for its own sake. The centerpiece is a business card that doesn't just display information—it recreates the tactile, physical presence of premium cardstock through canvas-based rendering and normal map lighting.

## Technical Implementation

### Cardstock Texture System

The heart of this project is a custom texture rendering library that uses normal maps and Lambertian lighting calculations to create realistic paper textures:

- **Normal Map Rendering**: Each pixel encodes a 3D surface normal vector (stored as RGB values)
- **Per-Pixel Lighting**: Calculates light reflection using the Lambertian reflectance model
- **Dynamic Generation**: Textures are rendered at runtime, allowing for adjustable lighting and colors
- **Performance Optimization**: Image caching and pre-computed light direction ensure smooth rendering

### Architecture Highlights

**Technology Stack:**
- Next.js 16 with App Router
- React 19 with Server Components
- TypeScript with strict mode
- Tailwind CSS v4
- HTML5 Canvas API

**Modular Design:**
- Separated cardstock rendering into a reusable library (`lib/cardstock/`)
- Type-safe interfaces throughout
- Pure functions for lighting calculations
- Comprehensive documentation in code

### Visual Quality

The aesthetic is carefully calibrated:
- Bone white base color (`#F7F5F0`) instead of pure white
- 85% ambient light + 15% diffuse light for subtle texture contrast
- 45° light angle with moderate elevation
- Canvas opacity at 95% for text legibility
- Viewport-based text scaling for responsive hierarchy

## Design Philosophy

This project demonstrates several key principles:

1. **Tactile Realism** - Digital elements should feel physical and premium
2. **Subtle Sophistication** - Effects should enhance, not distract
3. **Technical Craftsmanship** - Clean, maintainable code with thorough documentation
4. **Performance** - Optimized rendering without sacrificing visual quality

## Results

The final product achieves:
- Realistic cardstock appearance that rivals physical business cards
- Fast loading times with image caching
- Maintainable codebase with modular architecture
- Smooth animations with reduced-motion support
- Type-safe implementation throughout

## What I Learned

This project reinforced the importance of:
- Prioritizing user experience over technical complexity
- Documenting architectural decisions for future maintenance
- Balancing performance with visual quality
- Creating reusable, well-tested libraries

The cardstock rendering system could easily be extracted and used in other projects requiring realistic paper textures, demonstrating the value of modular design.
