"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutUs() {
  const [direction, setDirection] = useState("right");
  const mission =
    "Nexus is a student-run project team on campus that aims to create novel technologies to be deployed by global organizations for social impact. Currently, we are building a solar-powered robot that filters microplastics while autonomously traversing beaches, picking up what cleanup volunteers can’t. The amount of plastic pollution has been rising readily. Nexus’ goal is to be a significant actor and leader in the fight against such environmental pollution. Our team has been working hard to make our vision a reality for global impact through the interdisciplinary collaboration between mechanical, electrical, and software engineers, as well as the business development and outreach team.Most importantly, we hope to increase research and awareness around the intersection of technology and environmental sustainability to do our part in saving our planet. As our team expands, we plan to tackle global issues and engineering challenges to create a positive social impact on our planet.";
  const progressDesc =
    "We are currently in the process of developing the first iteration of our robot, and our team is diligently working towards its completion. We are optimistic about our progress and are striving to finish the project by the end of this year. Our dedicated efforts and commitment to innovation are driving us towards achieving this milestone, and we are excited about the possibilities that lie ahead.";
  const storyDesc =
    "Starting off with just 6 original members — united under a single mission towards using technology for sustainability — Nexus grew to become a team of 30+ talented and passionate individuals who want to help make the world a better place. We hope to increase our enthusiasm for people, product, and innovation through a collaborative environment within our team.";
  const [index, setIndex] = useState(0);
  const images = ["/robot.png", "/mechanical.jpeg"];

  function handlePrev() {
    setDirection("left");
    setIndex((index - 1 + images.length) % images.length);
  }

  function handleNext() {
    setDirection("right");
    setIndex((index + 1) % images.length);
  }
  return (
    <>
      {/* Main page content */}
      <div id="ourmission" className="bg-grey space-y-5 px-4">
        <div className="flex flex-col items-center pb-12">
          <motion.div
            initial={{ y: -23, opacity: 0 }}
            whileInView={{
              y: [-23, -6, 0],
              opacity: [0, 0.4, 1],
              transition: { delay: 0.15, duration: 0.6, times: [0, 0.5, 1] },
            }}
            viewport={{ once: true }}
            className="text-center title-size font-semibold text-5xl my-10"
          >
            Our Mission
          </motion.div>
          <motion.div
            id="carousel"
            className="flex flex-row justify-center mb-6"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.15, duration: 0.6, ease: "easeOut" },
            }}
            viewport={{ once: true }}
          >
            <button
              onClick={handlePrev}
              id="prevBtn"
              className="w-12 transition ease-in-out border-l border-t border-b rounded-l hover:bg-teal hover:text-white duration-300"
            >
              &lt;
            </button>
            <motion.div className="relative overflow-hidden border-t border-b w-[300px] h-[225px] sm:w-[600px] sm:h-[450px] md:w-[700px] md:h-[525px] pb-5">
              <Image
                className="object-cover"
                id="carouselImage"
                src={images[index]}
                alt="progress image"
                fill={true}
              />
            </motion.div>
            <button
              onClick={handleNext}
              id="nextBtn"
              className="w-12 transition ease-in-out border-r border-t border-b rounded-r hover:bg-teal hover:text-white duration-300"
            >
              &gt;
            </button>
          </motion.div>
          <motion.div
            className="max-w-screen-md text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 0.8, bounce: 0.25 },
            }}
            viewport={{ once: true, amount: 0.7 }}
          >
            {mission}
          </motion.div>
        </div>
      </div>
      <div
        id="story"
        className="flex flex-col items-center text-white px-4 py-8 bg-navy"
      >
        <div className="flex justify-center flex-wrap flex-row gap-12 mt-12 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              className="rounded shadow"
              src={"/progress.png"}
              alt="progress image"
              width="400"
              height="400"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="max-w-sm"
          >
            <p className="text-4xl font-medium">Progress</p>
            <p>{progressDesc}</p>
          </motion.div>
        </div>

        <div className="flex justify-center flex-wrap flex-row-reverse gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              className="rounded shadow"
              src={"/story.png"}
              alt="story image"
              width="400"
              height="400"
            />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="max-w-sm"
          >
            <p className="text-4xl font-medium">Story</p>
            <p>{storyDesc}</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
