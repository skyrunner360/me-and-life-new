import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material";

const queryClient = new QueryClient();

const globalTheme = createTheme({
  palette: {
    primary: { main: "#fff" },
    secondary: { main: "hsl(0,0%,12%)" },
    info: { main: "#CFA0E0" },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#4486AC",
          },
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = "/api/";
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={globalTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
