import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#1F1D2B",
      contrastText: "#FFFFFF",
    },
    secondary: {  
      main: "#252836",
      contrastText: "#FFFFFF",
    },
    emphasizedText: {
      main: "#E6B259",
      contrastText: "#000000",
    },
    titleText: {
      main: "#FFFFFF"
    },
    content: {
      main: "#AAA8AE"
    },
    links: {
      main: "#60B2FF"
    },
    text: {
      primary: "white"
    }
  },
  typography: {
    allVariants: {
      color: "#FFFFFF"
    },
    fontFamily: "'Montserrat', sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

export default defaultTheme;
