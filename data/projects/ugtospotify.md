---
title: "UGtoSpotify - Playlist Converter"
slug: "ugtospotify"
date: "2024-11-16"
tags: ["Coding", "API Integration", "Web"]
description: "A web app that converts Ultimate Guitar playlists to Spotify playlists using OAuth and serverless functions"
---

# UGtoSpotify - Playlist Converter

A web application that bridges the gap between guitar learning and music streaming. UGtoSpotify converts Ultimate Guitar playlists into Spotify playlists, allowing musicians to easily transfer their practice repertoire into a streamable format.

**[View Live Site](https://ugtospotify.netlify.app/)**, or **[View on GitHub](https://github.com/voltage-egatlov/UGtoSpotify)**

## Technical Implementation

**Core Technologies:**
- Vanilla JavaScript with modern ES6+ patterns
- Netlify Functions (serverless architecture)
- OAuth 2.0 authentication flow
- Ultimate Guitar and Spotify Web APIs

**Key Technical Achievement:**

Implemented a serverless architecture using Netlify Functions to handle cross-origin API requests and OAuth authentication flows. The system orchestrates data retrieval from Ultimate Guitar's API, processes playlist metadata, and creates corresponding Spotify playlists using OAuth-authenticated requests—all while bypassing CORS restrictions through strategic backend proxy design.

**Engineering Highlights:**
- OAuth 2.0 implementation with secure token handling and callback management
- Serverless functions for API proxying and CORS mitigation
- Integration of two third-party APIs with different authentication schemes
- Playlist data transformation and song matching logic
- Environment-aware configuration for development and production deployments

## Skills

- **API Integration**: Multi-platform API orchestration, OAuth flows, REST principles
- **Serverless Architecture**: Netlify Functions, backend-as-a-service patterns
- **Authentication**: OAuth 2.0, secure token management, callback handling
- **Problem Solving**: CORS mitigation, cross-platform data mapping
- **Full-Stack Development**: Frontend UI, serverless backend, third-party integrations
- **Deployment**: Production environment configuration, Netlify hosting
