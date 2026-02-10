# Efe Starter

A production-ready React Native starter template built with **Expo 54**, **HeroUI Native**, and **Convex** backend. Designed to eliminate boilerplate and get new projects off the ground fast with a modern, well-integrated stack.

## Tech Stack at a Glance

| Layer      | Technology                                     |
| ---------- | ---------------------------------------------- |
| Framework  | React Native 0.81 + Expo 54 (New Architecture) |
| UI Library | HeroUI Native (beta.13)                        |
| Styling    | Tailwind CSS 4 via Uniwind + tailwind-variants |
| Navigation | Expo Router (file-based)                       |
| Backend    | Convex (real-time, auto-typed)                 |
| Animations | Reanimated 4 + Lottie                          |
| Lists      | Shopify FlashList                              |
| Language   | TypeScript 5.9 (strict mode)                   |

## Quick Start

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd efe-starter

# 2. Install dependencies
bun install        # or npm install

# 3. Start the Convex dev server (in a separate terminal)
npx convex dev

# 4. Start the Expo dev server
bun run dev        # or npx expo start
```

Press `i` for iOS simulator, `a` for Android emulator, or `w` for web.

### Clean Git History (optional)

```bash
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

### Reset to a Fresh Project

```bash
npm run reset-project
```

Moves the current `src/` to `app-example-src/` and scaffolds a new `src/app` directory with a minimal HeroUI Native setup.

## Project Structure

```
src/
  app/                           # Expo Router — file-based routing
    _layout.tsx                  # Root layout (providers, gesture handler)
    index.tsx                    # Entry screen
  uniwind-types.d.ts             # Auto-generated Uniwind type definitions

app-example-src/                 # Reference implementation (created by reset-project)
  app/
    _layout.tsx                  # Advanced layout (fonts, keyboard, theme)
    (home)/
      _layout.tsx                # Stack nav with blur header & theme toggle
      index.tsx                  # Landing screen with feature cards
      components/                # 29+ HeroUI component demo screens
      showcases/                 # Full-page UI showcases
      themes/                    # Theme showcase screens
  components/                    # Reusable component library
    accordion/
    bottom-sheet/
    select/
    toast/
    icons/                       # 35+ icon wrappers
    showcases/                   # Complex UI patterns (paywall, onboarding, etc.)
    theme-toggle.tsx             # Dark/light mode toggle
  contexts/
    app-theme-context.tsx        # Theme state (light/dark, palette switching)
  helpers/
    hooks/                       # Custom hooks
    types/                       # Shared TypeScript types
    utils/                       # Utility functions

convex/                          # Convex backend (queries, mutations, actions)
themes/                          # CSS theme palettes (alpha, lavender, mint, sky)
assets/                          # Images, fonts, app icons
scripts/                         # Project utilities (reset-project)
```

The `src/` directory is your **clean workspace** — start building here. The `app-example-src/` directory serves as a **reference implementation** with comprehensive component demos and UI patterns you can pull from as needed.

## UI Library — HeroUI Native

The template ships with [HeroUI Native](https://github.com/heroui-inc/heroui-native), a comprehensive component library providing:

**Included components:** Accordion, Avatar, BottomSheet, Button, Card, Checkbox, Chip, Dialog, Input, InputOTP, Label, Popover, RadioGroup, ScrollShadow, Select, Separator, Skeleton, Spinner, Surface, Switch, Tabs, TextArea, TextField, Toast, and more.

All components support theming, dark mode, and accessibility out of the box. See `app-example-src/app/(home)/components/` for live demos of each component.

## Styling

Styling is handled by **Tailwind CSS 4** through **Uniwind**, which provides NativeWind-compatible utility classes with runtime theme switching.

### Themes

Four built-in color palettes, each with light and dark variants:

- **Alpha** (default)
- **Lavender**
- **Mint**
- **Sky**

Themes are defined as CSS files in `themes/` and registered in `metro.config.js`. Switching themes at runtime is handled by the `AppThemeContext` (see `app-example-src/contexts/app-theme-context.tsx`).

### Styling Utilities

| Package             | Purpose                                                |
| ------------------- | ------------------------------------------------------ |
| `tailwind-merge`    | Intelligently merges conflicting Tailwind classes      |
| `tailwind-variants` | Component variant API (like CVA) for composable styles |
| `clsx`              | Conditional class name concatenation                   |

## Backend — Convex

[Convex](https://convex.dev) is integrated as the backend platform, providing:

- **Real-time queries** — UI auto-updates when data changes
- **Type-safe API** — auto-generated TypeScript types from your schema
- **Server functions** — queries, mutations, and actions in `convex/`
- **No REST boilerplate** — call backend functions directly from React

### Setup

1. Create a project at [dashboard.convex.dev](https://dashboard.convex.dev)
2. Run `npx convex dev` to link your project and start the local dev server
3. Environment variables are stored in `.env.local`

## Navigation

Built on **Expo Router** with file-based routing:

- Routes live in `src/app/` — every file becomes a route
- Route groups via `(parentheses)` for layout organization
- Stack navigation with custom header (blur effect on iOS, solid on Android)
- Type-safe navigation with `typedRoutes` enabled

## Animations & Gestures

| Package                        | Use Case                           |
| ------------------------------ | ---------------------------------- |
| `react-native-reanimated`      | Smooth, native-thread animations   |
| `react-native-gesture-handler` | Touch gestures (swipe, pan, pinch) |
| `lottie-react-native`          | After Effects animations (JSON)    |
| `expo-haptics`                 | Haptic feedback on interactions    |

## Authentication (Ready)

The following auth packages are pre-installed and ready to wire up:

| Package                     | Purpose                                |
| --------------------------- | -------------------------------------- |
| `expo-apple-authentication` | Apple Sign In                          |
| `expo-secure-store`         | Secure token/credential storage        |
| `expo-web-browser`          | OAuth redirect flows                   |
| `expo-local-authentication` | Biometric auth (Face ID / fingerprint) |

Convex supports built-in auth providers — connect these with Convex Auth for a complete auth flow.

## Additional Packages

| Package                            | Purpose                                          |
| ---------------------------------- | ------------------------------------------------ |
| `@shopify/flash-list`              | High-performance replacement for FlatList        |
| `expo-image`                       | Optimized image component with caching           |
| `@gorhom/bottom-sheet`             | Gesture-driven bottom sheets                     |
| `expo-blur` / `expo-glass-effect`  | Blur and glass morphism effects                  |
| `expo-linear-gradient`             | Gradient backgrounds                             |
| `react-native-svg`                 | SVG rendering                                    |
| `react-native-keyboard-controller` | Keyboard-aware layouts                           |
| `react-native-webview`             | Embedded web content                             |
| `expo-updates`                     | OTA updates without app store review             |
| `expo-notifications`               | Push notifications (local & remote)              |
| `react-native-mmkv`                | High-performance local key-value storage         |
| `react-native-calendars`           | Calendar and agenda components                   |
| `date-fns`                         | Lightweight, tree-shakeable date utility library |
| `@expo-google-fonts/inter`         | Inter font family                                |
| `@expo/vector-icons`               | Icon sets (Feather, AntDesign, Ionicons)         |

## Scripts

| Command                 | Description              |
| ----------------------- | ------------------------ |
| `bun run dev`           | Start Expo dev server    |
| `bun run ios`           | Start on iOS simulator   |
| `bun run web`           | Start web dev server     |
| `bun run lint`          | Run ESLint               |
| `npm run reset-project` | Scaffold a fresh project |

## License

MIT
