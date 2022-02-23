import Head from "./Head";
import Footer from "./footer";
import NestedLayout from "../components/nested-layout";
import * as React from "react";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <>
      <Head />
      <NestedLayout>{children}</NestedLayout>
      <Footer />
    </>
  );
}
