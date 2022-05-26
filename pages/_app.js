import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script>document.documentElement.classList.add(&#39;dark&#39;)</script>
      </Head>
      <ThemeProvider defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
