import Head from "next/head";
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
      <Component {...pageProps} />
    </VideoState>
  );
}

export default MyApp;
