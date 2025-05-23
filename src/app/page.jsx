"use client";

import Image from "next/image";
import Button from "./component/button";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.15,
    },
  },
};

const imageVariants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const contentScrollVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 0.8,
    },
  },
};

export default function Home() {
  return (
    <div className="bg-teal pb-4">
      <div className="min-w-screen bg-sand">
        <div className="flex flex-row flex-wrap justify-center items-center gap-12 pt-16 px-4 bg-sand">
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <p className="text-5xl font-medium">Cornell Nexus Project Team</p>
            <p className="text-xl">Creating social impact through technology</p>
          </motion.div>
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
          >
            <Image
              src={"/graphics/nexus-robot.svg"}
              width="500"
              height="500"
              alt="Nexus Robot"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeInOut" }}
        >
          <Image
            priority
            src={"/graphics/beach.svg"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Beach"
          />
        </motion.div>
      </div>
      <div className="flex flex-col items-center max-w-screen-lg px-4 mx-auto">
        <div className="flex justify-center flex-wrap gap-12 mb-12">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <Image
              className="rounded shadow"
              priority
              src={"/graphics/robot-render.svg"}
              width="400"
              height="400"
              alt="Robot"
            />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.7 }}
            variants={contentScrollVariants}
            className="max-w-sm"
          >
            <p className="text-white text-4xl font-medium">Our Mission</p>
            <p className="text-white">
              Nexus is focused on addressing environmental concerns associated
              with plastic pollution. We are passionate about leveraging
              technology to undertake societal and environmental issues. By
              merging our diverse skill sets with knowledge gained from the
              classroom, we believe we can create a sustainable future through
              the power of technology.
            </p>
            <motion.div whileHover="hover" variants={buttonVariants}>
              <Button href="/about" text="Learn More" size="lg" color="green" />
            </motion.div>
          </motion.div>
        </div>
        <div className="flex justify-center flex-wrap flex-row-reverse gap-12 mb-12">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <Image
              className="rounded shadow"
              priority
              src={"/team/fullteam.jpeg"}
              width="400"
              height="400"
              alt="Team"
            />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.7 }}
            variants={contentScrollVariants}
            className="max-w-sm"
          >
            <p className="text-white text-4xl font-medium">Who Are We?</p>
            <p className="text-white">
              Nexus is a diverse group of intellectually curious and driven
              students building an autonomous robot that will work on filtering
              out microplastics from beach shores. We’re a team of engineers,
              scientists, and thinkers representing four different colleges and
              ten different majors.
            </p>
            <motion.div whileHover="hover" variants={buttonVariants}>
              <Button
                href="/team"
                text="Meet The Team!"
                size="lg"
                color="green"
              />
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 50, scale: 0 }}
          whileInView={{ y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            priority
            src={"/graphics/bubbles.svg"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "80%", height: "auto" }}
            className="my-8"
            alt="Bubbles"
          />
        </motion.div>
        <div className="mb-12 w-full max-w-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            whileHover="hover"
            variants={buttonVariants}
          >
            <Button href="/apply" text="Join Us!" size="lg" color="green" />
          </motion.div>
        </div>
        <div className="flex justify-center flex-wrap flex-row gap-12 mb-12">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <Image
              className="rounded shadow"
              priority
              src={"/team/cute-fullteam.jpeg"}
              width="400"
              height="400"
              alt="Team"
            />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.7 }}
            variants={contentScrollVariants}
            className="max-w-sm"
          >
            <p className="text-white text-4xl font-medium">Sponsorship</p>
            <p className="text-white">
              At Nexus, we’re seeking financial support and expert advice to
              advance our mission and expand our network. Connect with us to
              learn more about our impactful work and explore potential
              collaborations.
            </p>
            <motion.div whileHover="hover" variants={buttonVariants}>
              <Button
                href="/support"
                text="Support Us!"
                size="lg"
                color="green"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
