import Head from "./Head";
import Footer from "./footer";
import NestedLayout from "../components/nested-layout";
import * as React from "react";
import { ThemeProvider, CssBaseline, Container } from "@material-ui/core";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      <Container maxWidth="md">
        <Head />
        <NestedLayout>{children}</NestedLayout>
      </Container>
      <Footer />
      {/* </ThemeProvider> */}
    </>
  );
}
