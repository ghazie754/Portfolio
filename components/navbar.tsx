import Link from "next/link";

function navbar() {
  return (
    <>
      <header>
        <div className="header-inner">
          <div className="logo">CHAIR.</div>
          <nav>
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
          </nav>
        </div>
      </header>
    </>
  );
}

export default navbar;
