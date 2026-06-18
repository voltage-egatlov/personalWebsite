---
title: "Ferried"
slug: "ferried"
date: "2026-06-02"
tags: ["Coding"]
description: "An iOS lock-screen widget app for sending short notes to your closest people — the anti-NoteIt, with no streaks or pressure"
---

Lock-screen note widgets like NoteIt have drifted into streaks and aggressive monetization, which is a strange fate for a feature meant for the people you actually love. Ferried is the deliberate opposite: you write a note under 100 characters, it shows up on a friend's lock screen, and that's the whole product — no social graph, no read receipts, no engagement mechanics. Built in SwiftUI across three targets — the main app, a WidgetKit lock-screen widget extension, and a notification service extension — with a shared App Group container so the widget can read note data the app writes. Auth is Sign in with Apple only; Firebase handles storage and push delivery via FCM; billing runs on StoreKit 2 as per-slot subscriptions that stay invisible behind the UI's language of "connections." Pairing happens through universal-link invites (ferried.app/join/[token]) rather than contact scraping, and notes expire on their own at the receiver's local midnight.

**[View Live Site](https://ferried.app)**, or **[View on GitHub](https://github.com/voltage-egatlov/FerriedApp)**
