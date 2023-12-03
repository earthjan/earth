import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import defaultTheme from "./theme/defaultTheme";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
