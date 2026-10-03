import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource-variable/roboto-flex/opsz.css";
import "./styles/global.css";

import App from "./App";
import theme from "./theme/theme";
import { cssVariables } from "./theme/tokens";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Text without a type role inherits the browser's normal line height, as in the design. */}
      <GlobalStyles styles={{ ":root": cssVariables(), body: { lineHeight: "normal" } }} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
