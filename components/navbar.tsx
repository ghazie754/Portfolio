/* eslint-disable require-jsdoc */
import Link from "next/link";
import Hero from "./hero";

function navbar() {
  return (
    <>
      <div className="topnav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/protfolio">Protfolio</Link>
          </li>
          <li>
            <Link href="/unDeveloped">Under Development</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about%20Me">About Me</Link>
          </li>
          <li>
            <Link href="/random">Random</Link>
          </li>
        </ul>
      </div>
      <Hero />
    </>
  );
}

export default navbar;
