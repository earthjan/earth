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

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    accent: true;
    secondary: true;
    titleText: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    accent: true;
    secondary: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    textfield: true;
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    accent: true;
  }
}

const colorCodes = {
  primary: "#1F1D2B",
  textPrimary: {
    primary: "#FFFFFF",
    dark: "##e6e6e6",
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
    primary: {
      main: colorCodes.primary,
      dark: "#0b0a0f",
      light: "#2c293d",
      contrastText: colorCodes.textPrimary.primary,
    },
    secondary: {
      main: "#E6B259",
      dark: "#e1a337",
      light: "#ebc27a",
      contrastText: colorCodes.primary,
    },
    accent: {
      main: "#252836",
      dark: "#15161e",
      light: "#34384c",
      contrastText: colorCodes.textPrimary.primary,
    },
    titleText: {
      main: colorCodes.textPrimary.primary,
      dark: colorCodes.textPrimary.dark,
      light: colorCodes.textPrimary.primary,
      contrastText: colorCodes.primary,
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
    textfield: {
      main: colorCodes.textPrimary.primary,
      dark: colorCodes.textPrimary.dark,
      light: colorCodes.textPrimary.primary,
      contrastText: colorCodes.primary,
    },
    text: {
      primary: colorCodes.textPrimary.primary,
      secondary: colorCodes.textSecondary.primary,
    },
    border: {
      main: colorCodes.textSecondary.primary,
      dark: colorCodes.textSecondary.dark,
      light: colorCodes.textSecondary.light,
      contrastText: colorCodes.primary,
    },
  },
  typography: {
    h1: {
      fontSize: "1.8rem",
    },
    h2: {
      fontSize: "1.6rem",
    },
    h3: {
      fontSize: "1.42rem",
    },
    h4: {
      fontSize: "1.27rem",
    },
    h5: {
      fontSize: "1.13rem",
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
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "secondary",
      },
    },
  },
});

export default defaultTheme;

export const globalSpacing = {
  get MarginSpacing() {
    return "15px";
  },
};
