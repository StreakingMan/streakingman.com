import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { GetStaticProps } from "next";

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />;
}


MyApp.getInitialProps = () => ({});

export default MyApp;
