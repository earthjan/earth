/**
 * Design tokens: the single source of truth shared with the design canvas.
 * Edit tokens.json, never hardcode a color, size, space, radius, shadow or timing in a component.
 *
 * Three views of the same data:
 *  - `tokens`       raw values (used by the MUI theme)
 *  - `cssVariables` CSS custom properties injected on :root (same names as the design canvas)
 *  - `vars`         typed `var(--…)` references for component styles
 */
import raw from "./tokens.json";

export const tokens = raw;
export type Tokens = typeof raw;

type ColorGroups = Tokens["color"];
export type SpaceKey = Exclude<keyof Tokens["space"], "unit">;
export type TypeRole = keyof Tokens["type"];

const kebab = (key: string) =>
  key.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

type VarGroup<T> = { [K in keyof T]: string };
const varGroup = <T extends Record<string, unknown>>(prefix: string, group: T) =>
  Object.fromEntries(
    Object.keys(group).map((k) => [k, `var(--${prefix}-${kebab(k)})`])
  ) as VarGroup<T>;

const colorVars = Object.fromEntries(
  Object.entries(raw.color).map(([grp, values]) => [
    grp,
    varGroup(`color-${grp}`, values as Record<string, string>),
  ])
) as { [G in keyof ColorGroups]: VarGroup<ColorGroups[G]> };

const fluidTypeVars = Object.fromEntries(
  Object.entries(raw.type)
    .filter(([, r]) => "fluid" in r)
    .map(([role]) => [role, `var(--type-${role}-size)`])
) as Partial<Record<TypeRole, string>>;

export const vars = {
  color: colorVars,
  font: {
    display: "var(--font-display)",
    text: "var(--font-text)",
    size: varGroup("font-size", raw.font.size),
    weight: varGroup("font-weight", raw.font.weight),
    tracking: varGroup("tracking", raw.font.tracking),
  },
  typeSize: fluidTypeVars,
  radius: varGroup("radius", raw.radius),
  elevation: varGroup("elevation", raw.elevation),
  container: "var(--container)",
  measure: varGroup("measure", raw.layout.measure),
  ease: varGroup("ease", raw.motion.easing),
  duration: varGroup("duration", raw.motion.duration),
};

/** `space(6)` → `var(--space-6)` (24px). Negative values for pull-outs. */
export const space = (key: SpaceKey | number, negative = false) => {
  const ref = `var(--space-${key})`;
  return negative ? `calc(${ref} * -1)` : ref;
};

/** Pixel value of a space key, for places that need a number (e.g. JS math). */
export const spacePx = (key: SpaceKey) => raw.space[key];

/** CSS for a typography role: `...typeStyle("h2")`. */
export const typeStyle = (role: TypeRole) => {
  const r = raw.type[role] as {
    family: "display" | "text";
    size: keyof Tokens["font"]["size"];
    weight: keyof Tokens["font"]["weight"];
    lineHeight: number;
    tracking: keyof Tokens["font"]["tracking"];
    transform?: string;
    fluid?: string;
  };
  return {
    fontFamily: vars.font[r.family],
    fontSize: r.fluid ? fluidTypeVars[role] : vars.font.size[r.size],
    fontWeight: vars.font.weight[r.weight],
    lineHeight: r.lineHeight,
    letterSpacing: vars.font.tracking[r.tracking],
    ...(r.transform ? { textTransform: r.transform as "uppercase" } : {}),
  };
};

/** Media queries from token breakpoints (inclusive max-width, matching the spec). */
export const mq = {
  down: (bp: keyof Tokens["layout"]["breakpoint"]) =>
    `@media (max-width: ${raw.layout.breakpoint[bp]}px)`,
  reducedMotion: "@media (prefers-reduced-motion: reduce)",
};

/** Every token as a CSS custom property, named exactly like the design canvas. */
export const cssVariables = (): Record<string, string> => {
  const out: Record<string, string> = {};
  for (const [grp, values] of Object.entries(raw.color)) {
    for (const [k, v] of Object.entries(values)) out[`--color-${grp}-${kebab(k)}`] = v;
  }
  out["--font-display"] = raw.font.family.display;
  out["--font-text"] = raw.font.family.text;
  for (const [k, v] of Object.entries(raw.font.size)) out[`--font-size-${k}`] = `${v}px`;
  for (const [k, v] of Object.entries(raw.font.weight)) out[`--font-weight-${k}`] = String(v);
  for (const [k, v] of Object.entries(raw.font.tracking)) out[`--tracking-${k}`] = v;
  for (const [role, r] of Object.entries(raw.type)) {
    if ("fluid" in r) out[`--type-${role}-size`] = (r as { fluid: string }).fluid;
  }
  for (const [k, v] of Object.entries(raw.space)) {
    if (k !== "unit") out[`--space-${k}`] = v ? `${v}px` : "0";
  }
  for (const [k, v] of Object.entries(raw.radius)) out[`--radius-${k}`] = `${v}px`;
  for (const [k, v] of Object.entries(raw.elevation)) out[`--elevation-${k}`] = v;
  out["--container"] = `${raw.layout.container}px`;
  for (const [k, v] of Object.entries(raw.layout.measure)) out[`--measure-${k}`] = v;
  for (const [k, v] of Object.entries(raw.motion.easing)) out[`--ease-${k}`] = v;
  for (const [k, v] of Object.entries(raw.motion.duration)) out[`--duration-${k}`] = `${v}ms`;
  return out;
};
