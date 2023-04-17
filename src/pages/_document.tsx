import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="garden" lang="en">
      <Head title="ClearPharse">
        <meta name="description" content="ClearPhrase is a free writing tool that can change the tone of your writing with just a few clicks." />
        <meta name="author" content="Satish" />
        <meta name="keywords" content="ClearPharse, Parapharsing,Free Writing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ClearPhrase is a free writing tool that can change the tone of your writing with just a few clicks." key="desc" />
        <meta property="og:title" content="Writing Clearly" />
        <meta
          property="og:description"
          content="ClearPhrase is a writing tool that can change the tone of your writing with just a few clicks."
        />
        <meta
          property="og:image"
          content="/images/SocialImage.png"
        />
        <meta property="og:url" content="https://clearpharse.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ClearPhrase" />
      

      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
