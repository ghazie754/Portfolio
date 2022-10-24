import Head from "./Head";
import Navbar from "./navbar";
import Footer from "./footer";
// import Hero from "./hero";
import React from "react";
export default function Layout({ children }: { children?: any }): JSX.Element {
  return (
    <React.Fragment>
      <Head />
      <Navbar />
      {/* <Hero /> */}
      {children}
      <Footer />
    </React.Fragment>
  );
}
