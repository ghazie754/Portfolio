/* eslint-disable require-jsdoc */
import Navbar from "./navbar";
import Footer from "./newsletter";

export default function Layout({ children }: { children?: any }): JSX.Element {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
