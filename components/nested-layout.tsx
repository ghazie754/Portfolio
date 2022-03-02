import Hero from "./hero";
import Footer from "./newsletter";

export default function Layout({ children }: { children?: any }): JSX.Element {
  return (
    <>
      <Hero />
      {children}
      <Footer />
    </>
  );
}
