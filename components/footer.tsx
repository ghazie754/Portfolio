import Link from "next/link";
import Script from "next/script";
import React from "react";

function footer() {
  const Today: Date = new Date();
  return (
    <React.Fragment>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="single_footer">
                <h4>Services</h4>
                <ul>
                  <li>
                    <Link href="#">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link href="#">Simply dummy text</Link>
                  </li>
                  <li>
                    <Link href="#">The printing and typesetting </Link>
                  </li>
                  <li>
                    <Link href="#">Standard dummy text</Link>
                  </li>
                  <li>
                    <Link href="#">Type specimen book</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Page Link</h4>
                <ul>
                  <li>
                    <Link href="#">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link href="#">Simply dummy text</Link>
                  </li>
                  <li>
                    <Link href="#">The printing and typesetting </Link>
                  </li>
                  <li>
                    <Link href="#">Standard dummy text</Link>
                  </li>
                  <li>
                    <Link href="#">Type specimen book</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Subscribe today</h4>
                <div className="signup_form">
                  <form action="#" className="subscribe">
                    <input
                      type="text"
                      className="subscribe__input"
                      placeholder="Enter Email Address"
                    />
                    <button type="button" className="subscribe__btn">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="social_profile">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p className="copyright">
                Copyright<p>&copy; {Today.getUTCFullYear()}</p>{" "}
                <a href="#">s ign</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
    </React.Fragment>
  );
}

export default footer;
