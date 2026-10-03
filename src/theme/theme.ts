import { createTheme } from "@mui/material/styles";
import type { Shadows } from "@mui/material/styles";

import { tokens as t, typeStyle } from "./tokens";

const c = t.color;
const e = t.elevation;

// MUI expects 25 shadow levels; map each to the nearest MD2 elevation token.
const shadows = Array.from({ length: 25 }, (_, i) =>
  i === 0 ? "none" : i === 1 ? e["1"] : i <= 3 ? e["2"] : i <= 6 ? e["4"] : e["8"]
) as Shadows;

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: c.accent.main, light: c.accent.hover, contrastText: c.text.onAccent },
    secondary: { main: c.steel["400"], contrastText: c.text.onAccent },
    background: { default: c.surface["0"], paper: c.surface["2"] },
    text: { primary: c.text.primary, secondary: c.text.secondary, disabled: c.text.muted },
    divider: c.outline.subtle,
  },
  breakpoints: {
    // MUI's xs must start at 0; the token "xs" (480) is only used for max-width media queries.
    values: {
      xs: 0,
      sm: t.layout.breakpoint.sm,
      md: t.layout.breakpoint.md,
      lg: t.layout.breakpoint.lg,
      xl: t.layout.breakpoint.xl,
    },
  },
  spacing: t.space.unit,
  shape: { borderRadius: t.radius.sm },
  shadows,
  typography: {
    fontFamily: t.font.family.text,
    h1: typeStyle("display"),
    h2: typeStyle("h2"),
    h3: typeStyle("h3"),
    h4: typeStyle("h4"),
    h5: typeStyle("h5"),
    body1: typeStyle("body1"),
    body2: typeStyle("body2"),
    button: typeStyle("button"),
    caption: typeStyle("caption"),
    overline: typeStyle("overline"),
  },
  transitions: {
    easing: {
      easeInOut: t.motion.easing.standard,
      easeOut: t.motion.easing.decelerate,
      easeIn: t.motion.easing.accelerate,
      sharp: t.motion.easing.standard,
    },
    duration: {
      shortest: 150,
      shorter: t.motion.duration.short,
      short: t.motion.duration.short,
      standard: t.motion.duration.medium,
      complex: t.motion.duration.long,
      enteringScreen: t.motion.duration.medium,
      leavingScreen: t.motion.duration.short,
    },
  },
  components: {
    MuiButton: {
      defaultProps: { size: "large", disableElevation: false },
      styleOverrides: {
        root: {
          ...typeStyle("button"),
          borderRadius: t.radius.sm,
          whiteSpace: "nowrap",
          transition: `background-color ${t.motion.duration.short}ms ${t.motion.easing.standard}, box-shadow ${t.motion.duration.short}ms ${t.motion.easing.standard}, border-color ${t.motion.duration.short}ms ${t.motion.easing.standard}`,
        },
        sizeLarge: { minHeight: t.size.button.lg, padding: `0 ${t.space["6"]}px` },
        sizeMedium: { minHeight: t.size.button.md, padding: `0 ${t.space["5"]}px` },
        contained: {
          backgroundColor: c.accent.main,
          color: c.text.onAccent,
          boxShadow: e["2"],
          "&:hover": { backgroundColor: c.accent.hover, boxShadow: e["4"] },
        },
        outlined: {
          borderColor: c.outline.strong,
          color: c.accent.main,
          "&:hover": { backgroundColor: c.accent.stateHover, borderColor: c.outline.strong },
        },
        text: {
          color: c.accent.main,
          minHeight: t.size.touch,
          padding: `0 ${t.space["4"]}px`,
          "&:hover": { backgroundColor: c.accent.stateHover },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.Mui-focusVisible": { outline: `2px solid ${c.accent.main}`, outlineOffset: 3 },
        },
      },
    },
  },
});

export default theme;
