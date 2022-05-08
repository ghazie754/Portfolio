import Link from "next/link";
// import Image from 'next/image';

function navbar() {
  return (
    <header>
      {/* <Image
        width={40}
        height={84}
        objectFit="cover"
        src={"../public/favicon.ico"}
        alt=""
      /> */}
      <nav className="nav">
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
            <Link href="/random">Random</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default navbar;
