import Image from "next/image";
import beach from "../../public/beach.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="page">
        <div className="team-info flex flex-row">
          <div className="team-title-wrapper">
            <p id="team-name">Nexus at Cornell</p>
            <p id="team-desc">Creating social impact through technology</p>
          </div>
          <Image
            src={"/nexusRobot.svg"}
            width="500"
            height="500"
            alt="Nexus Robot"
          />
        </div>
        <Image id="beach-svg" priority src={beach} alt="Beach" />
        <div className="mission-wrapper">
          <div className="robot-render">
            <div className="robot-render-wrapper">
              <Image
                id="robot-svg"
                priority
                src={"/robot-render.svg"}
                width="300"
                height="300"
                alt="Robot"
              />
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
              <Link href="/about">
                <button id="learn-btn" className="underwater-text">
                  Learn More
                </button>
              </Link>
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
              <Link href="/team">
                <button id="meet-btn" className="underwater-text">
                  Meet The Team!
                </button>
              </Link>
            </div>
          </div>
          <div className="team-picture">
            <div className="team-picture-wrapper">
              <Image
                id="team-svg"
                priority
                src={"/fullteam.jpeg"}
                width="300"
                height="300"
                alt="Team"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
