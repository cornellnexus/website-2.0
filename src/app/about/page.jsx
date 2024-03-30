"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function AboutUs() {
  const mission =
    "Nexus is a student-run project team on campus that aims to create novel technologies to be deployed by global organizations for social impact. Currently, we are building a solar-powered robot that filters microplastics while autonomously traversing beaches, picking up what cleanup volunteers can’t. The amount of plastic pollution has been rising readily. Nexus’ goal is to be a significant actor and leader in the fight against such environmental pollution. Our team has been working hard to make our vision a reality for global impact through the interdisciplinary collaboration between mechanical, electrical, and software engineers, as well as the business development and outreach team.Most importantly, we hope to increase research and awareness around the intersection of technology and environmental sustainability to do our part in saving our planet. As our team expands, we plan to tackle global issues and engineering challenges to create a positive social impact on our planet.";
  const progressDesc =
    "We are currently in the process of developing the first iteration of our robot, and our team is diligently working towards its completion. We are optimistic about our progress and are striving to finish the project by the end of this year. Our dedicated efforts and commitment to innovation are driving us towards achieving this milestone, and we are excited about the possibilities that lie ahead.";
  const storyDesc =
    "Starting off with just 6 original members, Nexus grew to become a team of 30+ talented and passionate individuals who want to help make the world a better place. We hope to increase our enthusiasm for people, product, and innovation through a collaborative environment within our team.";
  const [index, setIndex] = useState(0);
  const images = ["/robot.png", "/mechanical.jpeg"];

  function handlePrev() {
    setIndex((index - 1 + images.length) % images.length);
  }

  function handleNext() {
    setIndex((index + 1) % images.length);
  }

  return (
    <>
      {/* Main page content */}
      <div id="ourmission" className="bg-grey space-y-5 px-4">
        <div className="flex flex-col items-center pb-10">
          <div className="text-center title-size font-semibold text-5xl my-10">
            Our Mission
          </div>
          <div id="carousel" className="flex flex-row justify-center mb-5">
            <button
              onClick={handlePrev}
              id="prevBtn"
              className="w-10 transition ease-in-out hover:bg-teal hover:text-white duration-300"
            >
              &lt;
            </button>
            <div className="relative overflow-hidden w-[300px] h-[225px] sm:w-[600px] sm:h-[450px] md:w-[700px] md:h-[525px] pb-5 rounded">
              <Image
                className="object-cover"
                id="carouselImage"
                src={images[index]}
                alt="progressimage"
                quality={100}
                fill={true}
              />
            </div>
            <button
              onClick={handleNext}
              id="nextBtn"
              className="w-10 transition ease-in-out hover:bg-teal hover:text-white duration-300"
            >
              &gt;
            </button>
          </div>
          <div className="max-w-screen-md text-center">{mission}</div>
        </div>
      </div>
      <div
        id="story"
        className="flex flex-col items-center text-white px-4 py-8 bg-teal"
      >
        <div className="flex justify-center flex-wrap flex-row gap-12 mb-12">
          <div>
            <Image
              className="rounded shadow"
              src={"/progress.png"}
              alt="progress image"
              width="400"
              height="400"
            />
          </div>
          <div className="max-w-sm">
            <p className="text-4xl font-medium">Progress</p>
            <p>{progressDesc}</p>
          </div>
        </div>

        <div className="flex justify-center flex-wrap flex-row-reverse gap-12 mb-12">
          <div>
            <Image
              className="rounded shadow"
              src={"/story.png"}
              alt="story image"
              width="400"
              height="400"
            />
          </div>
          <div className="max-w-sm">
            <p className="text-4xl font-medium">Story</p>
            <p>{storyDesc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
