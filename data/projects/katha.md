---
title: "Katha - Book Writing Platform"
slug: "katha"
date: "2026-02-24"
tags: ["Coding", "Design"]
description: "A cross-platform book writing app with a custom file format, Rust/WASM parser, and a word processor-style paginated editor"
---

Word processors aren't designed for writing books — they're designed for documents. Katha is a cross-platform book editor built around a custom `.bk` plain-text file format, a Rust parser compiled to WebAssembly, and a fully custom text engine (no `contenteditable`) that flows text across fixed-height pages in a two-page spread layout. The parsing logic lives in a single Rust library shared across both the web app (React + Vite, deployed to Vercel) and the desktop app (Tauri), so there's one source of truth for the file format across platforms. Canvas API handles text measurement for pagination; IndexedDB stores file handles for the File System Access API.

**[View Live Site](https://katha-omega.vercel.app/)**, or **[View on GitHub](https://github.com/voltage-egatlov/bookWriter)**
