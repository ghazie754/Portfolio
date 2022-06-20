import Link from "next/link";
// import Image from 'next/image';
function navbar() {
  return (
    <header>
      {/* <Image
        width={40}
        height={84}
        objectFit="cover"
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png"
        }
        alt=""
      /> */}
      <nav className="nav">
        <ul>
          <li>
            <Link href="/">
              <a className="active">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="https://github.com/ghazie754?tab=repositories">
              Projects
            </Link>
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
