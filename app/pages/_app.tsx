import { useEffect } from "react";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />;
}
