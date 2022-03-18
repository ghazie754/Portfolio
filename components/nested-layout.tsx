import Footer from "./newsletter";

export default function Layout({ children }: { children?: any }): JSX.Element {
  return (
    <>
      {children}

      <Footer />
    </>
  );
}
