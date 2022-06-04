import "../styles/globes.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
