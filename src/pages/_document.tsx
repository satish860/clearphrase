import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="garden" lang="en">
      <Head title="ClearPhrase">
        <title>Clearphrase</title>
        <meta property="og:title" content="ClearPhrase" />
        <meta
          property="og:description"
          content="ClearPhrase is a free writing tool that can change the tone of your writing with just a few clicks."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/satish1v/image/upload/w_1200,h_627,c_fill/v1681697617/A_smart_writing_partner_kv4rrl.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="ClearPhrase is a free writing tool that can change the tone of your writing with just a few clicks."
        />
        <meta name="twitter:title" content="ClearPhrase" />
        <meta
          name="twitter:description"
          content="ClearPhrase is a free writing tool that can change the tone of your writing with just a few clicks."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/satish1v/image/upload/w_1200,h_627,c_fill/v1681697617/A_smart_writing_partner_kv4rrl.png"
        />
        <meta property="og:type" content="instagram" />
        <meta name="pinterest" content="nopin" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
