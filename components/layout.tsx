import Head from "./Head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: { children?: any }): JSX.Element {
  return (
    <div>
      <Head />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
