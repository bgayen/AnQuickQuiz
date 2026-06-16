# ProjectIQ

An interactive quiz web application built with Flutter, featuring Microsoft Azure AD B2C authentication.

## Overview

ProjectIQ is a Progressive Web App (PWA) that presents users with a timed, scored quiz experience. Users sign in with their Microsoft account before taking the quiz, and receive a final score upon completion.

## Features

- **Microsoft Login** — Secure authentication via Azure AD B2C (OAuth 2.0)
- **Interactive Quiz** — Sequential question flow with progress tracking
- **Automatic Scoring** — Score calculated and displayed on completion
- **Progressive Web App** — Installable, offline-capable via Service Worker
- **Cross-Platform** — Runs in any modern browser with WebAssembly support

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Flutter (Web) |
| Language | Dart (compiled to JavaScript) |
| Renderer | CanvasKit / SKWASM (WebAssembly) |
| Authentication | Microsoft Azure AD B2C |
| Deployment | Static web hosting (GitHub Pages) |

## Live Demo

The app is hosted on GitHub Pages:

```
https://bgayen.github.io/ProjectIQ/
```

## Getting Started

### Prerequisites

- [Flutter SDK](https://flutter.dev/docs/get-started/install) with web support enabled
- A modern browser (Chrome, Edge, Firefox) with WebAssembly support

### Run Locally

```bash
# Clone the repository
git clone https://github.com/bgayen/ProjectIQ.git
cd ProjectIQ

# Enable Flutter web support (if not already enabled)
flutter config --enable-web

# Run in browser
flutter run -d chrome
```

### Build for Production

```bash
flutter build web
```

The compiled output will be in `build/web/`. Deploy its contents to any static web host.

## Authentication Setup

This app uses Microsoft Azure AD B2C for authentication. To configure for your own tenant:

1. Register an app in [Azure Portal](https://portal.azure.com)
2. Update the tenant ID and client ID in the Flutter source
3. Set the redirect URI to match your deployment URL

## Project Structure

```
ProjectIQ/
├── assets/
│   ├── images/          # App images (CTS logo, Microsoft logo)
│   └── fonts/           # Material Icons font
├── canvaskit/           # WebAssembly rendering engine
├── icons/               # PWA icons (192x192, 512x512, maskable)
├── index.html           # HTML entry point
├── main.dart.js         # Compiled Flutter app
├── manifest.json        # PWA manifest
└── flutter_service_worker.js  # Offline caching service worker
```

## Branches

| Branch | Description |
|---|---|
| `br-QuickQuiz` | Quiz feature with Microsoft login |
| `br-ProjectIQ` | Main project branch |
| `br-Project_login` | Login feature development |

## Version

`1.0.0` — Build 1

## License

See [assets/NOTICES](assets/NOTICES) for dependency license information.
