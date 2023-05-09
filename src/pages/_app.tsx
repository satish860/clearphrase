import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { useRouter } from "next/router";
import { Sign } from "crypto";

const publicPages = ["/"];

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const isPublicPage = publicPages.includes(pathname);

  return (
    <>
      <Head>
        <title>ClearPhrase</title>
      </Head>
      <ClerkProvider {...pageProps}>
        {isPublicPage ? (
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        ) : (
          <>
            <SignedIn>
              <ChakraProvider>
                <Component {...pageProps} />
              </ChakraProvider>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn afterSignInUrl="/phraser" redirectUrl= "/"/>
            </SignedOut>
          </>
        )}
      </ClerkProvider>
      <Analytics />
    </>
  );
}
