import { Html, Head, Main, NextScript } from "next/document";
import emailjs from "@emailjs/browser";
import GoogleAnalytics from "@/src/components/GoogleAnalytics";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        ></script>
        <script type="text/javascript">
          (function()
          {emailjs.init({
            publicKey: "qzCc73L_w8BAzxzI3",
          })}
          )()
        </script>
      </Head>
      <GoogleAnalytics />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
