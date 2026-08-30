---
title: "Talk & Tour"
slug: "talk-and-tour"
date: "2026-08-30"
tags: ["Coding"]
description: "An iOS app for NYC apartment hunters that turns voice notes from tours into structured, on-device extracted data"
---

Touring apartments back-to-back in NYC means every unit blurs together by the third viewing, so Talk & Tour is built to replace scattered memory with a voice note and a structured record. During or after a tour, the user records a note; on-device speech recognition (Apple's Speech framework, `SFSpeechRecognizer`, fully on-device) transcribes it, and a hybrid extraction pipeline suggests values for fields like rent, bedrooms, pet policy, and broker contact — Apple's on-device Foundation Models framework (the ~3B-parameter Apple Intelligence model, iOS 26+) runs as the primary extractor, cross-checked by an independent rule-based matcher (`NSDataDetector` plus keyword matching), so a suggestion's confidence (verified/unverified/conflict) is derived from whether the two agree rather than a self-reported model score, and nothing is ever written without the user explicitly accepting or rejecting it. The whole pipeline runs under a deliberate zero-running-cost constraint — transcription, extraction, geocoding, commute-time calculation, and address autocomplete all use on-device or non-billed Apple frameworks, with no paid third-party AI/ML API anywhere in the loop, and it gracefully falls back to rule-based-only extraction on devices without Apple Intelligence. Beyond capture, there's a List/Map dashboard with MapKit pins, commute-time calculation against saved anchor locations, gut-reaction ratings with pros/cons tags, side-by-side comparison with an optional client-computed Match Score, duplicate-address detection, and Co-Search, which lets two people (partners, roommates) share one apartment database via Universal Link invites with real-time sync — Supabase handles auth and sync behind all of it. All 5 MVP milestones are shipped, with 79/79 tests passing and 0 swiftlint violations, and it's in active TestFlight distribution.

**[View on GitHub](https://github.com/voltage-egatlov/ApartmentHelper)**
