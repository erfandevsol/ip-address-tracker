// This file is the entry point of the nextjs app
// It wraps the entire app with the ThemeProvider and QueryClientProvider

import type { AppProps } from "next/app";
import QueryClientProvider from "@/QueryClientProvider";
import { createTheme, ThemeProvider } from "@mui/material";
import "@/styles/globals.css";

const theme = createTheme({
  typography: {
    fontFamily: "unset",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
