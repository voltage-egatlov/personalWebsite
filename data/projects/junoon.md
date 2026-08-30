---
title: "Junoon Wellness"
slug: "junoon"
date: "2026-06-17"
tags: ["Coding"]
description: "A full-stack yoga and meditation subscription platform — web app, AI-assisted planning backend, and a native iOS client sharing one Supabase backend"
---

A full-stack yoga, meditation, and breathwork product, currently in beta, positioned around AI personalization rooted in traditional Indian practice rather than generic fitness tracking. It spans a marketing and waitlist site, a member web app, an AI-assisted planning backend, and a native SwiftUI iOS client, all backed by a single Supabase instance. The web platform is built in Next.js (App Router) with TypeScript and Supabase for Postgres, auth, and storage, handling Stripe subscriptions, secure Mux video playback, live-stream group classes alongside a pre-recorded library, and retention features like programs, streaks, and weekly planning. The notable part is the planning layer: an Anthropic-powered service generates personalized weekly plans and nutrition selections, with an evaluation harness to keep those generations reliable. The iOS app is a separate SwiftUI client that reuses the same brand system and talks directly to the existing Supabase tables for live classes, RSVPs, videos, and resources — deliberately kept out of the server code so it never touches migrations or schema.

**[View on the App Store](https://apps.apple.com/us/app/junoon-wellness/id6781123809)**
