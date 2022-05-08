import "../styles/globes.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import React from "react";
import { PageTransition } from "next-page-transitions";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageTransition timeout={300} classNames="page-transition">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PageTransition>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
      `}</style>
    </>
  );
}

export default MyApp;
