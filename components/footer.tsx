import Script from "next/script";
import React from "react";

function footer() {
  const Today: Date = new Date();
  return (
    <>
      <footer className="footer">
        <p>COPYRIGHT &copy; {Today.getUTCFullYear()}</p>{" "}
      </footer>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
    </>
  );
}

export default footer;
