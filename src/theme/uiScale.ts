import { tokens } from "./tokens";

const { base, max } = tokens.layout.scale;

/**
 * Large screens: above the design width (`layout.scale.base`, 1440px) the whole page scales up
 * proportionally, capped at `layout.scale.max`, so type and spacing keep the proportions of the design
 * instead of shrinking into the middle of a wide monitor. Applied as CSS `zoom` on #root (global.css).
 *
 * `--viewport-h` gives full-screen blocks a pixel height to divide by the scale (they use
 * `calc(var(--viewport-h, 100svh) / var(--ui-scale, 1))`), so they fill exactly one screen while zoomed.
 */
export function applyUiScale() {
  const root = document.documentElement;
  const update = () => {
    const scale = Math.round(Math.min(max, Math.max(1, window.innerWidth / base)) * 1000) / 1000;
    root.style.setProperty("--ui-scale", String(scale));
    if (scale > 1) root.style.setProperty("--viewport-h", `${window.innerHeight}px`);
    else root.style.removeProperty("--viewport-h");
  };
  update();
  window.addEventListener("resize", update);
}
