import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../public/demo/css/style.css";
import VideoState from "../src/context/video";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setPreloader(false);
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <VideoState>
      <Head>
        <title>Ethhar</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="images/ethhar_favicon.png"
        />
      </Head>
      {preloader && <PreLoader />}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.MEASUREMENT_ID}');
    `}
      </Script>
      <Component {...pageProps} />
    </VideoState>
  );
}

export default MyApp;
