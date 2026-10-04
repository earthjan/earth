# Handoff Spec: Portfolio redesign (MD2 Graphite)

Source of truth for values: [`src/theme/tokens.json`](../src/theme/tokens.json), the same file that drives the
design canvas ("Earthjan Portfolio Redesign", boards **Portfolio — MD2 Graphite** and **Design tokens**).
This spec names tokens only. If a value you need is not a token, it is a bug in the spec, not a license to guess.

Token notation: `color.surface.2` = `tokens.color.surface["2"]` = CSS var `--color-surface-2`.
In MUI code use `theme.tokens.*` (raw tokens) or the mapped MUI keys (`theme.palette`, `theme.typography.*`,
`theme.spacing(n)` where `n` is the space key, `theme.shape`, `theme.shadows`).

---

### Overview

A single-page portfolio for Earth Jan Baquir Marzan (Senior Software Engineer, ex-Samsung Tech Lead).
Visitors are recruiters and engineering leads who skim. The page has to answer three questions fast:
what he does (hero + animated story: Lead / Architect / Ship), proof (experience, projects, education),
and how to reach him (Let's connect). Dark graphite, Material Design 2, Roboto family only.

Section order: Hero → App bar (sticky) → Overview → Experience → Featured projects → Skills → Education
(incl. Certifications) → Footer / contact. The Substack writing section is deferred.

---

### Layout

| Rule | Token | Value |
|---|---|---|
| Content container | `layout.container` | 1120px max, centered |
| Horizontal gutter | `layout.gutter.base` / `.sm` | 24px, 16px at ≤ `breakpoint.sm` |
| Section padding (y) | `layout.section.y` / `.ySm` | 112px, 72px at ≤ `breakpoint.sm` |
| Hero height | — | Full screen: `min-height: 100svh`, content vertically centered, padding `space.16` × `space.6` (64 / 24) on desktop. The app bar always starts exactly at the fold. |
| Section title → content | `space.12` | 48px |
| Two-column section (title left, body right) | — | `flex-wrap: wrap`, title `flex: 1 1 260px`, body `flex: 999 1 520px`, gap `space.10` × `space.16` |
| Text measure | `layout.measure.sm/md/lg` | 52ch lead, 62ch paragraphs, 68ch lists. Never wider. |
| Alternating section background | `color.surface.1` | Experience and Skills; others on `color.surface.0` |

Why the measure caps: body copy must wrap at 45–70 characters per line. Containers can be wider; the text cannot.

---

### Design Tokens Used

| Token | Value | Usage |
|---|---|---|
| `color.surface.0` | #121212 | Page background |
| `color.surface.1` | #161616 | Alternating sections, footer, timeline node ring |
| `color.surface.2` | #1E1E1E | Cards, logo tiles, stage tiles |
| `color.surface.3` | #262626 | Raised elements inside cards (cert logo tile, edu rows), Technical Lead card |
| `color.surface.4` | #2C2C2C | Chips |
| `color.surface.5` | #383838 | Chip hover |
| `color.surface.tint` | #232A2E | Emphasis surface: current role card, primary award card, avatar badge |
| `color.surface.appBar` | rgba(30,30,30,.94) + 8px backdrop blur | App bar |
| `color.surface.scrim` / `.scrimStrong` | rgba(18,18,18,.72/.85) | Carousel arrow buttons / caption gradient |
| `color.outline.subtle` | #2A2A2A | Cert card border, dividers, tracks |
| `color.outline.default` | #333333 | Tag and tile borders |
| `color.outline.strong` | #4F5B62 | Outlined buttons, emphasized card borders |
| `color.text.heading` | #F5F5F5 | h1–h5, stat numbers |
| `color.text.primary` | #E0E0E0 | Lead paragraph, chip text |
| `color.text.secondary` | #B4B4B4 | Body paragraphs, bullet lists, nav links |
| `color.text.muted` | #9E9E9E | Dates, captions, credential IDs, footnotes |
| `color.text.accent` / `color.accent.main` | #B0BEC5 | Company names, labels, filled buttons, Present chip |
| `color.accent.hover` | #CFD8DC | Filled button hover |
| `color.text.onAccent` | #121212 | Text on accent fills |
| `color.accent.stateHover` / `stateFocus` | steel @ 8% / 12% | Outlined/text button hover, cert pill hover |
| `color.overlay.hover` | white @ 6% | Nav link and icon button hover |
| `color.steel.*` | Material Blue Grey 50–900 | Illustration (story scene, project placeholders), tags, decor |
| `color.decor.line` / `.grid` | #2E3A40 / white @ 3.5% | Decorative rings and waves / hero grid |
| `type.display` | Roboto Flex, clamp(44px, 6vw, 80px), 750, lh 1, -0.03em | Hero title |
| `type.h2` | Roboto Flex, clamp(36px, 4.5vw, 48px), 700, lh 1.05, -0.025em | Section titles, footer CTA |
| `type.h3` | Roboto Flex 26, 700, lh 1.2, -0.015em | Degree, "Certifications" |
| `type.h4` | Roboto 22, 500, lh 1.3 | Role titles, project names |
| `type.h5` | Roboto Flex 18, 700, lh 1.3 | Award and certificate names |
| `type.stat` | Roboto Flex 64, 800, lh 1, -0.03em | GWA numbers |
| `type.brand` | Roboto Flex 20, 700, -0.015em | App bar name |
| `type.lead` | Roboto 20, 400, lh 1.55 | Hero subtitle, overview first paragraph |
| `type.body1` | Roboto 16, 400, lh 1.65 | Paragraphs, bullets, project descriptions |
| `type.body2` | Roboto 14, 400, lh 1.6 | Certificate descriptions, footnotes |
| `type.label` | Roboto 14, 500 | "Show credential" pill, chip-like buttons in sentence case |
| `type.button` | Roboto 14, 500, 1.25px, UPPERCASE | All MD2 buttons and nav links |
| `type.caption` | Roboto 13, 400 | Company line, dates, chips, credential meta |
| `type.overline` | Roboto 12, 500, 1px, UPPERCASE | Eyebrows ("Built & maintained by me"), scene captions, tile labels |
| `space.*` | 4px grid: 4 8 12 16 20 24 32 40 48 64 72 96 112 136 160 | All padding, margin, gap |
| `radius.sm` / `md` / `lg` / `pill` | 4 / 8 / 12 / 999 | Buttons & tags / cards / logo tiles / chips |
| `elevation.1/2/4/8` | MD2 shadows | Card rest / filled button / app bar & emphasized card / hover lift |
| `motion.easing.standard` | cubic-bezier(.4,0,.2,1) | Every transition |
| `motion.duration.short/medium/long/reveal` | 200 / 280 / 500 / 700ms | Color / lift / carousel / reveal |

Fonts are self-hosted: `@fontsource/roboto` (400/500/700) and `@fontsource-variable/roboto-flex/opsz.css`
(weight + optical size axes; the opsz axis is what makes the 80px title look the way it does in the design).

---

### Components

| Component | Variant | Props | Notes |
|---|---|---|---|
| `AppBar` | sticky, under hero | `links: {label, href}[]` | Height `size.appBar` 64. Brand left (`type.brand`), nav links (`type.button`, `color.text.secondary`, padding `space.3`×`space.4`, radius `radius.sm`), filled "Let's connect" button (height `size.button.md` 40). Nav links hide ≤ `breakpoint.lg` (they need ~920px beside the name and button). ≤ `breakpoint.xs` (480) the name shortens to "Earth Jan Marzan" and truncates with an ellipsis before the button ever shrinks; the button never shrinks (`flex-shrink: 0`). `elevation.4`. |
| `Button` | filled | MUI `variant="contained"` | Height 48 (`size.button.lg`), padding x `space.6`, radius `radius.sm`, bg `color.accent.main`, text `color.text.onAccent`, `type.button`, `elevation.2`. |
| `Button` | outlined | `variant="outlined"` | Same metrics, 1px `color.outline.strong`, text `color.accent.main`. |
| `Button` | text | `variant="text"` | Height ≥ 44, padding x `space.3`/`space.4`, text `color.accent.main`. Used for "Show more" and "Try app". |
| `SectionTitle` | — | `children` | `type.h2`, `color.text.heading`, margin 0. Reveal on scroll. |
| `TechLogoTile` | — | `src, label` | 56×56 (`size.logoTile`), `radius.lg`, `color.surface.2`, 26px logo tinted `color.steel.100`. Native `title` + `alt`. |
| `StoryScene` | — | none | Decorative, `aria-hidden`. 460×560 box with a 3-segment progress legend 44px above it. Hidden ≤ `breakpoint.lg` (1100). See Motion. |
| `MobileHero` | — | none | Replaces the desktop hero ≤ `breakpoint.lg`. Full screen (`100svh`), max width 560, padding `space.4` (bottom `space.6` + safe-area inset). Three rows: (1) progress tabs, (2) slide stage (`flex: 1`), (3) pinned CTAs. Slides: **Intro** (h1 `type.display` max 14ch, lead at `font.size.lg`, tech logo tiles, all right-aligned, vertically centered), then **Lead**, **Architect**, **Ship** (overline label `color.steel.300` + title `type.h3`, then the act drawn on a 460×520 stage scaled to fit, never above 1:1). Tabs: one per slide, ≥ 44px tall, label `type.overline` (active `color.steel.50`, idle `color.steel.400`) over a 3px bar (`color.outline.subtle`, fill `color.accent.main`). CTAs: outlined "View experience" (filled with `color.surface.0` so background lines don't show through) + filled "Let's connect", 2 columns, 1 column ≤ `breakpoint.xs`. Hero ornaments placed for desktop (triangle, plus marks, dot grid) are hidden at this width; ring, grid and wave stay. |
| `Avatar` | lead 120 / ship & architect 80 | `size` | SVG badge: steel avatar with eyeglasses, no cap. Always paired with the `EarthCursor`. |
| `EarthCursor` | — | — | Arrow (18×20, fill `color.accent.main`, 1.5px `color.surface.0` stroke) + tag "Earth" (`type.label` 12/700, bg `color.accent.main`, radius `radius.sm radius.lg radius.lg radius.lg`, `elevation.2`). |
| `TimelineItem` | current / past | `role, company, location, start, end?, chips[], bullets[], extraBullets[]` | Node column 28px. Current: 18px filled `color.accent.main` node + ping, card `color.surface.tint` + 1px `color.outline.strong`, Present chip. Past: 14px hollow node (2px `color.steel.500`). Rail 2px; current segment gradient `accent.main → steel.800`, others `color.steel.800`. Card padding `space.8`, radius `radius.md`. |
| `ProjectCard` | carousel / single image | `title, eyebrow?, badge?, description, chips[], images[], link?` | `color.surface.2`, `radius.md`, `elevation.1`. Media 12:7. Body padding `space.8`. Title `type.h4`. |
| `Carousel` | — | `slides: {src, alt}[]` | Track slides with `translateX(-n*100%)`, duration `long`, easing `standard`. Prev/next 44px round buttons on `color.surface.scrim` with 1px `color.outline.strong` and `elevation.2` (keeps them visible over dark screenshots). Dots: 32px hit area, dot 8px (`color.outline.strong`), active 24×8 `color.accent.main`. Auto-advance every `motion.carouselInterval` until the user touches a control. |
| `Chip` | tag / chip / skill | `children` | Tag: height 24, padding `space.1`×`space.3`, 1px `color.outline.default`, `radius.sm`, `type.caption` 12. Chip: padding `space.2`×`space.3`, `color.surface.4`, `radius.pill`, `type.caption`. Skill: padding `space.3`×`space.5`, `color.surface.3`, 1px `color.outline.default`, `radius.pill`, `type.body2`. |
| `Divided` | — | `parts: string[]` | Replaces "·" separators. Parts separated by a 1px vertical line, `currentColor` @ 35%, margin x `space.3`, stretching the full height of its container (inside chips it cancels the chip's vertical padding so it touches top and bottom edges). `aria-hidden` on the line. |
| `AwardCard` | primary / default | `title, meta, gwa, icon` | Padding `space.6`, `radius.md`. Primary: `color.surface.tint` + 1px `color.steel.500`. Default: `color.surface.3` + 1px `color.outline.default`. Icon 48px circle `color.steel.800`. Number `type.stat`. |
| `CertCard` | — | `name, issuer, issued, credentialId, description, skills[], url` | Whole card is one link (stretched `::before` over the card). Padding `space.6`, right `space.16` for the corner arrow. Logo tile 48 (`size.certTile`), `radius.lg`, `color.surface.3`, Uxcel mark 28px. Name `type.h5`. Pill "Show credential" (`type.label`, height 40, `radius.pill`, 1px `color.outline.strong`). Corner arrow: 36px circle `color.surface.3`. |
| `Footer` | — | — | `color.surface.1`, top border `color.surface.3`. CTA `type.h2` max 18ch, outlined LinkedIn + filled Email. Bottom row: credit (`type.caption`, `color.text.muted`) + 44px icon buttons. |

---

### States and Interactions

| Element | State | Behavior |
|---|---|---|
| Filled button | Hover | bg `color.accent.hover`, shadow `elevation.4`, `duration.short` |
| Filled / outlined / text button | Active | MD2 ripple from press point (MUI `TouchRipple`) |
| Outlined / text button | Hover | bg `color.accent.stateHover` |
| Any button / link | Focus-visible | 2px `color.accent.main` outline, 3px offset. Never remove without a replacement. |
| Nav link | Hover | bg `color.overlay.hover`, text `color.text.heading` |
| Card (experience, project, award) | Hover | translateY(-4px), bg one surface step up, `elevation.8`, `duration.medium` |
| Cert card | Hover | Card lift as above + border `color.steel.400`, corner circle fills `color.accent.main` with `color.text.onAccent` arrow, both arrows nudge (2px, -2px), pill bg `color.accent.stateFocus` |
| Cert card | Focus-within | 2px `color.accent.main` outline around the whole card |
| Cert card | Click anywhere | Opens `https://app.uxcel.com/certificates/{credentialId}` in a new tab (`rel="noopener noreferrer"`) |
| "Show more" (Samsung) | Toggle | Reveals 2 extra bullets; chevron rotates 180°; label "Show more" ↔ "Show less"; `aria-expanded` |
| Carousel | Arrow / dot | Go to slide, stop auto-advance for the rest of the visit |
| Skill chip | Hover | bg `color.surface.5`, translateY(-2px) |
| Tech logo tile | Hover | bg `color.surface.4`, translateY(-3px) |
| Hero | Mouse move | Background layers parallax: ring ×-20px, accents ×-80px, scene ×+16/+12px of pointer offset from center. Resets on leave. Desktop pointer only. |

No loading, empty or error states: all content is static data bundled at build time.

---

### Responsive Behavior

| Breakpoint | Changes |
|---|---|
| Desktop (> 1100px) | Default. Full-screen hero, content centered vertically. Hero text right-aligned in the right column; story scene in the left 460px. |
| `breakpoint.lg` (≤ 1100px) | Desktop hero replaced by `MobileHero` (full-screen story slides, CTAs pinned). App bar nav links hidden; Let's connect stays pinned right. |
| `breakpoint.md` (≤ 860px) | App bar name drops to 16px. Two-column sections stack (title above body). Project and cert grids drop to 1 column when a column would be < 440px (`repeat(auto-fill, minmax(min(100%, 440px), 1fr))`). |
| `breakpoint.sm` (≤ 640px) | Gutter 16 (app bar included), section padding 72, timeline node column hidden (cards only). Display title follows its clamp down to 44px. |
| `breakpoint.xs` (≤ 480px) | App bar shows "Earth Jan Marzan"; button padding x `space.3`, gap `space.2`. Hero CTAs stack. Verified at 320, 360, 375, 390 and 412px with no horizontal scroll; hero verified full screen at 375×667, 360×780, 390×844 and 768×1024. |

---

### Edge Cases

- **Long role or certificate names**: wrap; never truncate. "UX Design Patterns with Checklist Design" must wrap inside the card, the corner arrow keeps its 64px lane.
- **Long descriptions**: no truncation; cert grid rows stretch so the pill and skills line sit at the bottom (`margin-top: auto`).
- **Missing project link**: hide the "Try app" button (BayanEd has none).
- **Missing image**: carousel slide shows `color.steel.900` panel with the grid pattern and the alt text as caption.
- **Slow connection**: fonts use `font-display: swap`; images lazy-load below the fold and reserve space with `aspect-ratio: 12 / 7`, so nothing jumps.
- **Reduced motion** (`prefers-reduced-motion: reduce`): every animation and transition off; story scene shows act 1 (Lead) static; mobile hero stays on Intro until a tab is tapped and shows each act as a static frame; carousel does not auto-advance.
- **Short phones** (e.g. 375×667): the act stage scales down to the space between the slide title and the CTAs; the CTAs never leave the screen.
- **No `animation-timeline` support** (Safari/Firefox): scroll-driven reveals and section rings fall back to static, fully visible content.

---

### Animation / Motion

| Element | Trigger | Animation | Duration | Easing |
|---|---|---|---|---|
| Hero title, subtitle, buttons | Load | Fade + rise 24px, staggered 0 / 100 / 200ms | `reveal` 700ms | `standard` |
| Tech logo tiles | Load | Fade + rise 12px + scale .9→1, staggered 70ms from 550ms | 500ms | `standard` |
| "ex-Samsung Tech Lead" underline | Load | scaleX 0→1 from the right, 700ms delay | 900ms | `standard` |
| Section titles and cards | Scroll into view | Fade + rise 24px (`animation-timeline: view()`, range entry 0% → cover 28%) | scroll-linked | linear |
| Timeline rail | Scroll | scaleY 0→1 from top | scroll-linked | linear |
| Story scene | Loop | Act A Lead 0–5s, Act B Architect 5–10s, Act C Ship 10–15s; acts crossfade; legend segment fills per act | `storyLoop` 15s | per keyframes |
| Mobile hero slides | Auto (every 5s while ≥ 35% on screen) / tab / swipe (> 48px horizontal) | Slide in: fade + 16px from the right. Each act plays its 5s slice of the desktop keyframes once; the active tab bar fills over 5s. Loops Intro → Lead → Architect → Ship. Restarts the current slide when scrolled back into view. | `long` in, `storyLoop / 3` per slide | `decelerate` in, linear fill |
| Current-role node | Loop | Ping: scale 1→2.8, opacity .55→0 | 2s | `decelerate` |
| Carousel | Auto (every 5s) / control | translateX slide | `long` 500ms | `standard` |
| Decorative rings / waves / grid | Loop | Rotation 14–60s, dash flow 6s, grid pan 8s | — | linear |
| Card hover | Hover | Lift + elevation | `medium` 280ms | `standard` |

Story scene keyframes are the contract; copy them verbatim from the design (`StoryScene.css`), scaled to a 15s loop.

---

### Accessibility Notes

- **Landmarks**: `<header>` app bar with `<nav aria-label="Primary">`, `<main>` wrapping sections, `<footer>`. One `<h1>` (hero). Section titles `<h2>`, card titles `<h3>`/`<h4>`.
- **Focus order**: hero CTAs (View experience, Let's connect) → app bar (brand, nav, Let's connect) → section content in reading order. Skip link "Skip to content" as the first focusable element, visible on focus.
- **Decorative**: story scene, rings, waves, grid, timeline nodes/rails, divider lines are `aria-hidden="true"`.
- **Labels**: icon-only buttons get `aria-label` ("Previous screenshot", "Next screenshot", "LinkedIn", "GitHub", "Email"). Carousel: `aria-roledescription="carousel"` + `aria-label`, dots have `aria-label="Show screenshot n: {alt}"` and `aria-current`.
- **Mobile hero**: progress is a `tablist` (`aria-label="Hero story"`); each tab `aria-selected` + `aria-controls` its `tabpanel`; inactive act panels are `aria-hidden`. The Intro panel holds the page's only visible `<h1>` (the desktop hero is `display: none` at this width).
- **Cert cards**: one link per card, label "Show credential for {name} (opens in a new tab)".
- **Contrast**: `color.text.muted` on `color.surface.2` is 6.4:1; `color.text.onAccent` on `color.accent.main` is 10:1. Do not introduce text darker than `color.text.muted`.
- **Touch targets**: ≥ 44px (`size.touch`) for every interactive element.
