import Image from "next/image";
import nexusLogo from "../../img/nexus.svg";
import beach from "../../img/beach.svg";
import robot from "../../img/robot-render.svg";
import team from "../../img/fullteam.jpeg";
import insta from "../../img/insta-svg.svg";
import github from "../../img/github-svg.svg";
import facebook from "../../img/facebook-svg.svg";
import email from "../../img/email-svg.svg";

import 'src/app/globals.css'

import filler from '../../img/nexusRobot.svg'

export default function AboutUs() {

  const mission = "Nexus is a student-run project team on campus that aims to create novel technologies to be deployed by global organizations for social impact. Currently, we are building a solar - powered robot that filters microplastics while autonomously traversing beaches, picking up what cleanup volunteers can’t.The amount of plastic pollution has been rising readily.Nexus’ goal is to be a significant actor and leader in the fight against such environmental pollution.Our team has been working hard to make our vision a reality for global impact through the interdisciplinary collaboration between mechanical, electrical, and software engineers, as well as the business development and outreach team.Most importantly, we hope to increase research and awareness around the intersection of technology and environmental sustainability to do our part in saving our planet.As our team expands, we plan to tackle global issues and engineering challenges to create a positive social impact on our planet."


  return (
    <>
      <div className="page">
        {/* Navbar Area */}
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
              <a href="/about">About</a>
              <a href="">Team</a>
              <a href="">Support</a>
              <a href="">Apply</a>
              <a href="">Contact</a>
            </div>
          </div>
        </nav>
        {/* Navbar Area */}

        {/* Main page content */}

        <div id="ourmission" className="">
          <div className="flex flex-col">
            <div className="text-center">
              Our Mission
            </div>

            <div id="carousel">

            </div>

            <div className="pr-20 pl-20">
              {mission}
            </div>

          </div>
        </div>

        <div id="story">
          <div className="flex flex-col">

            <div className="flex flex-row">
              <Image src={filler} alt="progressimage" />
              <div className="flex flex-col">
                <div>

                </div>
                <div>

                </div>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <div>

                </div>
                <div>

                </div>
              </div>
              <Image src={filler} alt="storyimage" />
            </div>
          </div>

        </div>

        <footer>
          <div className="social-links">
            <a href="https://www.instagram.com/cornellnexus/" target="_blank">
              <Image id="insta-icon" src={insta} height="40" alt="Instagram" />
            </a>
            <a href="https://github.com/cornellnexus" target="_blank">
              <Image id="github-icon" src={github} height="40" alt="Github" />
            </a>
            <a href="https://www.facebook.com/cornellnexus/" target="_blank">
              <Image
                id="facebook-icon"
                src={facebook}
                height="40"
                alt="Facebook"
              />
            </a>
            <a href="mailto:nexus@cornell.edu" target="_blank">
              <Image id="email-icon" src={email} height="40" alt="E-mail" />
            </a>
          </div>
          <div className="copyright">
            <p>Cornell Nexus © 2023</p>
          </div>
        </footer>
      </div>
    </>
  )
}