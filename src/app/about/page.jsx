"use client";
import Image from "next/image";
import { useState } from "react";
import MemberCard from '../component/membercard';
import Link from 'next/link'


export default function AboutUs() {

  const mission = "Nexus is a student-run project team on campus that aims to create novel technologies to be deployed by global organizations for social impact. Currently, we are building a solar - powered robot that filters microplastics while autonomously traversing beaches, picking up what cleanup volunteers can’t.The amount of plastic pollution has been rising readily.Nexus’ goal is to be a significant actor and leader in the fight against such environmental pollution.Our team has been working hard to make our vision a reality for global impact through the interdisciplinary collaboration between mechanical, electrical, and software engineers, as well as the business development and outreach team.Most importantly, we hope to increase research and awareness around the intersection of technology and environmental sustainability to do our part in saving our planet.As our team expands, we plan to tackle global issues and engineering challenges to create a positive social impact on our planet."
  const progressDesc = "We are currently in the process of developing the first iteration of our robot, and our team is diligently working towards its completion. We are optimistic about our progress and are striving to finish the project by the end of this year. Our dedicated efforts and commitment to innovation are driving us towards achieving this milestone, and we are excited about the possibilities that lie ahead."
  const storyDesc = "Starting off with just 6 original members, Nexus grew to become a team of 30+ talented and passionate individuals who want to help make the world a better place. We hope to increase our enthusiasm for people, product, and innovation through a collaborative environment within our team."
  const [index, setIndex] = useState(0);
  const images = ['/robot.png'];

  function handlePrev() {
    setIndex((index - 1 + images.length) % images.length);
  }

  function handleNext() {
    setIndex((index + 1) % images.length);
  }

  return (
    <>
      <div className="page">

        {/* Main page content */}
        <div className="space-y-5">
          <div id="ourmission" className="">
            <div className="flex flex-col bg-white items-center pb-10">
              <div className="text-center title-size font-semibold text-5xl py-10">
                Our Mission
              </div>

              <div id="carousel" className="flex flex-row justify-center">
                <button onClick={handlePrev} id='prevBtn' className='w-10 transition ease-in-out hover:bg-gray-200 duration-300'> &lt; </button>
                <Image
                  className='rounded pb-5'
                  id='carouselImage'
                  src={images[index]}
                  alt="progressimage"
                  width='700'
                  height='700'

                />
                <button onClick={handleNext} id='nextBtn' className='w-10 transition ease-in-out hover:bg-gray-200 duration-300'> &gt; </button>
              </div>

              <div className="max-w-screen-md text-center">
                {mission}
              </div>

              <Link href="about/?modal=true&subteam=Business&name=Vinny">
                <button type="button" className="bg-blue-500 text-white p-2">Open Modal</button>
              </Link>

            </div>
          </div>

          <div id="story">
            <div className="flex flex-col items-center text-white px-12 ">

              <div className="flex flex-row max-w-screen-lg">
                <Image
                  className='flex-grow'
                  src={'/progress.png'}
                  alt="progressimage"
                  width='600'
                  height='600'
                />
                <div className="flex flex-col flex-grow">
                  <div className="pl-20 title-size text-5xl py-10 font-semibold">
                    Progress
                  </div>
                  <div className="pl-20 max-w-screen-md text-left">
                    {progressDesc}
                  </div>
                </div>
              </div>

              <div className="flex flex-row py-10  max-w-screen-lg">
                <div className="flex flex-col flex-grow text-white ">
                  <div className=" title-size text-5xl py-10 font-semibold">
                    Story
                  </div>
                  <div className="pr-20 max-w-screen-md text-left">
                    {storyDesc}
                  </div>
                </div>
                <Image
                  className='flex-grow'
                  src={'/story.png'}
                  alt="storyimage"
                  width='600'
                  height='600'
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}