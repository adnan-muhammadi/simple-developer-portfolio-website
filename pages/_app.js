import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
    </>
  );
}