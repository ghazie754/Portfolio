import Head from "./Head";
import Navbar from "./navbar";
import Footer from "./footer";
import NestedLayout from "../components/nested-layout";

export default function Layout({ children }: { children?: any }): JSX.Element {
  return (
    <>
      <Head />
      <Navbar />
      <NestedLayout>{children}</NestedLayout>
      <Footer />
    </>
  );
}
