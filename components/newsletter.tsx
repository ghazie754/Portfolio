import Link from "next/link";
import { useState } from "react";

function News() {
  const [boolean] = useState<boolean>();
  const bool = () => !boolean;

  return (
    <>
      <div className="page php">
        <form className="page">
          <div className="container">
            <h2>Subscribe to our Newsletter</h2>
            <p>Lorem ipsum..</p>
          </div>

          <div className="container">
            <input type="text" placeholder="Name" name="name" required />
            <input
              type="text"
              placeholder="Email address"
              name="mail"
              required
            />
            <label>
              <input
                type="checkbox"
                checked={boolean}
                onClick={bool}
                name="subscribe"
              />{" "}
              Daily Newsletter
            </label>
          </div>

          <div className="container">
            <input type="submit" value="Subscribe" />
          </div>
        </form>
        <form className="page">
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/protfolio">Protfolio</Link>
          <Link href="/unDeveloped">Under Development</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about%20Me">About Me</Link>
          <Link href="/random">Random</Link>
        </form>
      </div>
    </>
  );
}

export default News;
