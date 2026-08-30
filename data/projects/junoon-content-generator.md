---
title: "Junoon Content Generator"
slug: "junoon-content-generator"
date: "2026-05-29"
tags: ["Coding"]
description: "A multi-agent Claude pipeline that turns a plain-English brief into brand-aligned Instagram carousel PNGs for Junoon Wellness"
---

Junoon Wellness needed a steady stream of on-brand Instagram carousels without someone re-deriving the brand system from scratch every time. This is that pipeline: describe a carousel in plain English — "a 7-slide carousel about morning protein for South Asians" — and get back finished, ready-to-post PNG slides. Built as a chain of three Claude Code agents rather than a single script: `junoon-orchestrator` parses the request and coordinates, `junoon-copywriter` turns it into a structured JSON content brief, and `junoon-designer` injects that brief into a slide-rendering studio and exports the PNGs via Playwright. The renderer is a single self-contained HTML file holding every slide template, brand token, and export routine, but the designer agent always works on a fresh copy per run rather than touching it directly. Slide templates are constrained to a fixed vocabulary — hook, education, mindfulness, empathy, affirmation, call-to-action — arranged into a deliberate narrative arc, with brand fonts (Cormorant Garamond, DM Sans, DM Mono), a full named color palette, and output in Instagram portrait, square, Reels, and landscape ratios all baked in. A later phase adds a style-brief workflow that reverse-engineers the visual DNA of a reference brand from screenshots and lets the studio re-color itself around it. Internal tool, not a customer-facing product — no live site to point to.

**[View on GitHub](https://github.com/voltage-egatlov/JunoonContentGenerator)**
