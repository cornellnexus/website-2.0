import Image from "next/image";
import nexusLogo from "../../img/nexus.svg";
import beach from "../../img/beach.svg";
import robot from "../../img/robot-render.svg";
import team from "../../img/team-picture.svg";

export default function Home() {
  return (
    <>
      <div className="page">
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
          <div className="team-title-wrapper">
            <p id="team-name">Cornell Nexus</p>
            <p id="team-desc">Creating social impact through technology</p>
          </div>
        </div>
        <Image id="beach-svg" priority src={beach} alt="Beach" />
        <div className="mission-wrapper">
          <div className="robot-render">
            <div className="robot-render-wrapper">
              <Image id="robot-svg" src={robot} alt="Robot" />
            </div>
          </div>
          <div className="mission-statement">
            <div className="mission-statement-wrapper">
              <p id="mission-title" className="underwater-text">
                Our Mission
              </p>
              <p id="mission-statement" className="underwater-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Senectus et netus et malesuada fames ac. Magna fermentum iaculis
                eu non diam phasellus vestibulum lorem. Vel facilisis volutpat
                est velit egestas dui id.
              </p>
              <button id="learn-btn" className="underwater-text">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="us-wrapper">
          <div className="us-statement">
            <div className="us-statement-wrapper">
              <p id="us-title" className="underwater-text">
                Who Are We?
              </p>
              <p id="us-statement" className="underwater-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Senectus et netus et malesuada fames ac. Magna fermentum iaculis
                eu non diam phasellus vestibulum lorem. Vel facilisis volutpat
                est velit egestas dui id.
              </p>
              <button id="meet-btn" className="underwater-text">
                Meet The Team!
              </button>
            </div>
          </div>
          <div className="team-picture">
            <div className="team-picture-wrapper">
              <Image id="team-svg" src={team} alt="Team" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
