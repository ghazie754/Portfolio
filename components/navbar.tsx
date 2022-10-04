import Link from "next/link";
import React from "react";

function navbar() {
  return (
    <>
      <nav className="nav">
        <div>
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/protfolio">Protfolio</Link>
          <Link href="/unDeveloped">Under Development</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about Me">About Me</Link>
          <Link href="/random">Random</Link>
        </div>
      </nav>
    </>
  );
}

export default navbar;
