import QueryClientProvider from "@/QueryClientProvider";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";

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
