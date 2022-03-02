import Link from "next/link";

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
          <Link href="/about%20Me">About Me</Link>
          <Link href="/random">Random</Link>
        </div>
      </nav>
    </>
  );
}

export default navbar;
