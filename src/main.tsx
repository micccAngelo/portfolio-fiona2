import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App.tsx";

const theme = createTheme({
  breakpoints: { values: { xs: 0, sm: 601, md: 951, lg: 1200, xl: 1600 } },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth", scrollPaddingTop: "30px" },
        body: { margin: 0 },
        "@media (prefers-reduced-motion: reduce)": {
          html: { scrollBehavior: "auto" },
          "*, *::before, *::after": { transition: "none !important" },
        },
      },
    },
  },
  palette: { primary: { main: "#111111" }, secondary: { main: "#f5ff4f" } },
  typography: {
    fontFamily: '"DM Sans", Arial, sans-serif',
    button: { textTransform: "none", fontWeight: 400 },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
