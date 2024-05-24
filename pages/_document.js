import { Html, Head, Main, NextScript } from "next/document";
import GoogleAnalytics from "@/src/components/GoogleAnalytics";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GoogleAnalytics />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
