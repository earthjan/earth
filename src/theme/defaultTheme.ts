import { createTheme } from "@mui/material/styles";

import type {} from "@mui/lab/themeAugmentation";

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
    titleText: Palette["primary"];
    content: Palette["primary"];
    links: Palette["primary"];
    textfield: Palette["primary"];
    border: Palette["primary"];
  }

  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
    titleText?: PaletteOptions["primary"];
    content?: PaletteOptions["primary"];
    links?: PaletteOptions["primary"];
    textfield?: PaletteOptions["primary"];
    border?: PaletteOptions["primary"];
  }
}

const colorCodes = {
  primary: "#FFFFFF",
  textPrimary: {
    primary: "#FFFFFF",
    dark: "##A2A2A2",
  },
  textSecondary: {
    primary: "#AAA8AE",
    dark: "#98959d",
    light: "#bebdc2",
  },
  textLink: "#60B2FF",
};

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colorCodes.primary,
      contrastText: "#121212",
    },
    secondary: {
      main: "#90CAF9",
      contrastText: "#121212",
    },

    background: {
      default: "#121212",
      paper: "#121212",
    },
    border: {
      main: "#727272",
    },
    content: {
      main: colorCodes.textSecondary.primary,
      dark: colorCodes.textSecondary.dark,
      light: colorCodes.textSecondary.light,
      contrastText: colorCodes.primary,
    },
    links: {
      main: colorCodes.textLink,
      light: "#80c1ff",
      dark: "#339cff",
      contrastText: colorCodes.textLink,
    },

    text: {
      primary: colorCodes.textPrimary.primary,
      secondary: colorCodes.textSecondary.primary,
    },
  },
  typography: {
    h1: {
      fontSize: "1.802rem", // 28.83px
      lineHeight: 1.5,
      letterSpacing: "-0.015em",
    },
    h2: {
      fontSize: "1.602rem", // 25.63px
      lineHeight: 1.5,
      letterSpacing: "-0.005em",
    },
    h3: {
      fontSize: "1.424rem", // 22.78px
      lineHeight: 1.5,
      letterSpacing: "0em",
    },
    h4: {
      fontSize: "1.266rem", // 20.25px
      lineHeight: 1.5,
      letterSpacing: "0.0025em",
    },
    h5: {
      fontSize: "1.125rem", // 18px
      lineHeight: 1.5,
      letterSpacing: "0em",
    },
    h6: {
      fontSize: "1rem", // 16px
      lineHeight: 1.5,
      letterSpacing: "0.0015em",
    },

    subtitle1: {
      fontSize: "1rem",
    },

    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.889rem",
    },
    allVariants: {
      color: colorCodes.textPrimary.primary,
    },
    fontFamily: "'Noto Sans', sans-serif",
  },
});

export default defaultTheme;

export const globalSpacing = {
  get MarginSpacing() {
    return "15px";
  },
};
