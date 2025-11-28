---
title: "The GuitarJam"
slug: "guitarjam"
date: "2022-12-15"
tags: ["Engineering", "Design", "HFE"]
description: "User-centered design of a clip-on guitar learning device addressing ergonomic and cognitive challenges for novice guitarists"
---

A comprehensive product development project creating a Bluetooth-enabled, clip-on display for guitarists. The device mounts to the guitar headstock and shows chord charts within the player's natural line of sight, solving the problem of awkward phone-based learning.

**Course:** ENP 64 Methods for Human Factors | **Completed:** Fall 2022

## The Problem

Learning guitar from phones creates multiple pain points: players must stop playing to scroll through chord charts, looking down at a phone causes neck strain (60° deviation from upright), and constant task-switching disrupts practice flow. Observational studies confirmed these issues affect both beginners and experienced players.

## The Solution: GuitarJam

A clip-on E-ink display that provides chord progressions, metronome, and learning tools right where players naturally look—at the guitar neck. Connects via Bluetooth to a companion app for song selection and customization.

**Core Innovation:** Moves information from phone to headstock, reducing neck angle from 60° to 15° while eliminating task-switching.

## Design Process

### User Research
- Developed user personas (teenage intermediate player, 11-year-old beginner)
- Interviewed 5 guitarists to validate problem and gather feature requests
- Conducted task analysis observing novice learning a song
- Identified pain points: 3-4 scrolling interruptions per song, neck strain, chord lookup delays

### Anthropometric Analysis
Applied human measurement data to determine physical specifications:
- **Screen size:** Calculated viewing distance (3 feet) and minimum text legibility to determine 8.4cm × 8.4cm E-ink display
- **Grip mechanism:** Used grip strength data and torque calculations to design handle requiring only 20% of 5th percentile female grip strength
- **Ergonomic impact:** Quantified neck angle reduction (60° → 15°) to reduce cervicalgia risk

### Interface Design
- **Mobile app:** Designed linear flow for pairing, song search, customization (key/BPM), and upload
- **Device display:** Maximized information density while maintaining readability—chord name, progression, timing, metronome
- **Design philosophy:** Simple, functional, elegant—no unnecessary features

### CAD Prototyping
Created SolidWorks model with:
- Ball-and-socket joint for angle adjustment
- Spring-loaded clamp (1.5cm grip handles from calculations)
- Modular construction for repairability
- Material selection optimized for low-cost manufacturing (injection-molded polymer)

### User Testing
Tested interactive Figma mockups with 5 participants. Validated usability of app flow and device interface with strong positive reception and minimal confusion.

## Key Design Decisions

**E-ink Display:** Chosen for perfect contrast, outdoor visibility, battery efficiency, and eye comfort (vs. backlit LCD).

**Companion App Model:** Offloaded complex functions (tuner, song library) to phone while keeping device simple and focused.

**Safety-First Clamping:** Designed grip mechanism accessible to lower-percentile grip strengths to ensure broad usability.

**Minimal Moving Parts:** Limited to clamp and ball joint to reduce failure points and manufacturing complexity.

## Impact & Outcomes

**Ergonomic Improvement:** 75% reduction in neck deviation during practice, significantly lowering cervicalgia risk.

**Cognitive Load Reduction:** Eliminated task-switching and memory burden, allowing focus on technique and timing.

**User Validation:** Testing confirmed the solution addresses real pain points without introducing new usability issues.

## Key Takeaways

**Domain expertise accelerates design.** Starting from personal experience as a guitarist provided deep problem understanding, which research validated and refined.

**Vertical thinking matters.** Considering hardware, software, manufacturing, and user experience holistically creates better products than optimizing components in isolation.

**Unspoken needs are critical.** Users requested "better chord charts" but didn't mention neck pain—observation revealed this hidden requirement.

**Constraints drive creativity.** E-ink's slow refresh rate ruled out certain features but enabled superior battery life and visibility.

## Skills Demonstrated

- User research (interviews, personas, task analysis)
- Anthropometric analysis and biomechanical calculations
- Interface design (Figma wireframing, visual hierarchy)
- CAD modeling (SolidWorks mechanical design)
- Physics-based engineering (spring mechanics, torque, leverage)
- Design-for-manufacturing principles
- User testing and iteration
- Systems-level product thinking

![Guitar Device Design](/pdfs/GuitarDevice_Design.pdf)
