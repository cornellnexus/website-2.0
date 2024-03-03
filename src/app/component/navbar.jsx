import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center justify-between px-12 py-4">
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
        <div className="flex gap-12">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/support">Support</Link>
          <Link href="/apply">Apply</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
