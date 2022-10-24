import Link from "next/link";
import React from "react";

function navbar() {
  const guestLinks = (
    <header className="site-header">
      <div className="site-identity">
        <h1>
          <Link href="#">CodeWith Random</Link>
        </h1>
      </div>
      <nav className="site-navigation">
        <ul className="nav">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Resume</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Work</Link>
          </li>
        </ul>
      </nav>
    </header>
  );

  return (
    <>
      <div className="nav">{guestLinks}</div>
    </>
  );
}

export default navbar;
