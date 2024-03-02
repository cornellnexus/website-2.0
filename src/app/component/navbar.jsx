import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link href="/">
          <Image
            id="nexus-logo"
            priority
            src={"/nexus.svg"}
            width="100"
            height="100"
            alt="Nexus Logo"
          />
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="">Team</Link>
          <Link href="">Support</Link>
          <Link href="">Apply</Link>
          <Link href="">Contact</Link>
        </div>
      </div>
    </nav>
  )
}