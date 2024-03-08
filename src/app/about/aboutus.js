"use client";
import Image from "next/image";
import nexusLogo from "./img/nexus.svg";
import beach from "./img/beach.svg";
import robot from "./img/robot-render.svg";
import team from "./img/fullteam.jpeg";
import insta from "./img/insta-svg.svg";
import github from "./img/github-svg.svg";
import facebook from "./img/facebook-svg.svg";
import email from "./img/email-svg.svg";
import filler from './img/nexusRobot.svg';
import team_1 from './img/team-1.png';
import story from './img/story.png';
import progress from './img/progress.png'
import { useState } from "react";



export default function AboutUs() {

  const mission = "Nexus is a student-run project team on campus that aims to create novel technologies to be deployed by global organizations for social impact. Currently, we are building a solar - powered robot that filters microplastics while autonomously traversing beaches, picking up what cleanup volunteers can’t.The amount of plastic pollution has been rising readily.Nexus’ goal is to be a significant actor and leader in the fight against such environmental pollution.Our team has been working hard to make our vision a reality for global impact through the interdisciplinary collaboration between mechanical, electrical, and software engineers, as well as the business development and outreach team.Most importantly, we hope to increase research and awareness around the intersection of technology and environmental sustainability to do our part in saving our planet.As our team expands, we plan to tackle global issues and engineering challenges to create a positive social impact on our planet."
  const progressDesc = "We are currently in the process of developing the first iteration of our robot, and our team is diligently working towards its completion. We are optimistic about our progress and are striving to finish the project by the end of this year. Our dedicated efforts and commitment to innovation are driving us towards achieving this milestone, and we are excited about the possibilities that lie ahead."
  const storyDesc = "Starting off with just 6 original members, Nexus grew to become a team of 30+ talented and passionate individuals who want to help make the world a better place. We hope to increase our enthusiasm for people, product, and innovation through a collaborative environment within our team."
  const [index, setIndex] = useState(0);
  const images = [robot, team, team_1];

  function handlePrev() {
    setIndex((index - 1 + images.length) % images.length);
  }

  function handleNext() {
    setIndex((index + 1) % images.length);
  }

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
        <div className="space-y-5">
          <div id="ourmission" className="">
            <div className="flex flex-col bg-white">
              <div className="text-center title-size">
                Our Mission
              </div>

              <div id="carousel" className="flex flex-row justify-center">
                <button onClick={handlePrev} id='prevBtn' className='w-10 transition ease-in-out hover:bg-gray-200 duration-300'> &lt; </button>
                <Image className='rounded' id='carouselImage' src={images[index]} alt="progressimage" style={{ maxWidth: '600px', maxHeight: '600px', objectFit: 'cover' }} />
                <button onClick={handleNext} id='nextBtn' className='w-10 transition ease-in-out hover:bg-gray-200 duration-300'> &gt; </button>
              </div>

              <div className="pr-20 pl-20 p-10 desc-size">
                {mission}
              </div>

            </div>
          </div>

          <div id="story">
            <div className="flex flex-col text-white px-10">

              <div className="flex flex-row">
                <Image className='flex-grow' src={progress} alt="progressimage" style={{ mWidth: '600px', maxHeight: '600px', objectFit: 'cover' }} />
                <div className="flex flex-col flex-grow">
                  <div className="pl-20 title-size">
                    Progress
                  </div>
                  <div className=" pl-20 desc-size">
                    {progressDesc}
                  </div>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex flex-col flex-grow text-white">
                  <div className=" title-size ">
                    Story
                  </div>
                  <div className="pr-20 desc-size">
                    {storyDesc}
                  </div>
                </div>
                <Image className='flex-grow' src={story} alt="storyimage" style={{ maxWidth: '600px', maxHeight: '600px', objectFit: 'cover' }} />
              </div>
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