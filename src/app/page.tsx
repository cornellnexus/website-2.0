import Image from "next/image";
import nexusLogo from "../../img/nexus.svg";
import beach from "../../img/beach.svg";

export default function Home() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="">
            <Image
              id="nexus-logo"
              priority
              src={nexusLogo}
              height="45"
              alt="Nexus Logo"
            />
          </a>
          <div className="nav-links">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Team</a>
            <a href="">Support</a>
            <a href="">Apply</a>
            <a href="">Contact</a>
          </div>
        </div>
      </nav>
      <div className="team-info">
        <p id="team-name">Cornell Nexus</p>
        <p id="team-desc">Creating social impact through technology</p>
      </div>
    </>
  );
}
