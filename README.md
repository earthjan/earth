# earthjan.netlify.app

Portfolio of Earth Jan Baquir Marzan. React 18 + TypeScript + Vite + MUI 7, Material Design 2 in a dark graphite theme.

```sh
yarn          # install
yarn start    # dev server
yarn build    # type-check + production build (what Netlify runs)
yarn lint
```

## Where things live

| Path | What |
|---|---|
| `src/theme/tokens.json` | **Design tokens.** Single source for every color, type style, space, radius, shadow and timing. Shared with the design canvas. |
| `src/theme/tokens.ts` | Typed access: `vars.*` (CSS variable refs), `space(n)`, `typeStyle(role)`, `mq.down(bp)`, `cssVariables()` |
| `src/theme/theme.ts` | MUI theme built from the tokens (palette, typography, spacing, breakpoints, shadows, Button) |
| `src/theme/uiScale.ts` | Large screens: scales the whole page above 1440px (`layout.scale` tokens), so it keeps the design's proportions |
| `src/data/*.ts` | Content: profile, experience, projects, education & certifications. Edit these to update the site. |
| `src/components/` | Hero (with the animated `StoryScene`), app bar, sections, UI primitives (`SnapScroller` for the mobile horizontal sections) |
| `src/styles/global.css` | Motion and hover rules (token-based) |
| `docs/design-handoff.md` | Developer handoff spec: tokens, components, states, breakpoints, motion, accessibility |

## Rules

- No raw values in components. Use `vars`, `space()` and `typeStyle()`; add a token first if one is missing.
- Body text stays within the measure tokens (52 / 62 / 68ch).
- Size things at the 1440px design scale; larger screens are scaled for you.
- Change a token in `tokens.json`, then mirror it on the design canvas so design and code stay identical.
