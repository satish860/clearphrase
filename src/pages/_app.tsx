import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ClearPhrase</title>
      </Head>
      <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
      <Analytics />
    </>
  );
}
