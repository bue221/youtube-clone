import React from "react";
import { createRoot } from "react-dom/client";
// styles
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Theme
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
// fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

serviceWorker.unregister();
