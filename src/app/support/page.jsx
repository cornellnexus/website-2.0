"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../component/button";

export default function Support() {
  return (
    <>
      <div className="min-h-screen bg-grey px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
              duration: 0.3,
              type: "spring",
              stiffness: 400,
              damping: 16,
              ease: "easeOut",
            }}
            className="text-center title-size font-semibold text-5xl py-10"
          >
            Support Us!
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.7,
              type: "spring",
              stiffness: 400,
              damping: 25,
              ease: "easeOut",
            }}
          >
            <Image
              className="rounded pb-5"
              src={"/team/cute-fullteam.jpeg"}
              alt="cute fullteam image"
              width="700"
              height="700"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-screen-md text-center text-lg mb-4"
          >
            At Nexus, we have a team of talented engineers and business
            professionals, but we are in need of additional financial resources
            to complete our build and expand our presence. We seek advice on the
            technical, business, and sustainability end of our project, and look
            to gain valuable insight from professors and industry professionals
            on how we can further make an impact. We hope to get the word out
            about the amazing work we are doing at Nexus! Reach out if you or a
            community you are a part of would be interested in learning more
            about us.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Button
              href="https://securelb.imodules.com/s/1717/giving/interior.aspx?sid=1717&gid=2&pgid=16421&cid=27217&dids=5455&sort=1&bledit=1"
              text="Donate"
              size="xs"
              color="navy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Image
              className="mb-10 mt-6"
              src={"/icons/delimiter.svg"}
              alt="separator"
              width="128"
              height="4"
            />
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8 w-full mb-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-ash rounded p-5 max-w-md"
            >
              <div className="text-2xl font-semibold">Sponsorships</div>
              <div>
                Forming partnerships and receiving sponsors is a large part of
                how we receive funding and gain valuable partners. View our
                sponsorship package below!
              </div>
              <div className="flex justify-center">
                <Button href="/sponsors/Sponsorship_Packet.pdf" text="View" size="xs" color="navy" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="bg-ash rounded p-5 max-w-md"
            >
              <div className="text-2xl font-semibold">Giving Day</div>
              <div>
                Giving Day gifts will assist us overcome the last big obstacle,
                of funding, in creating our first minimum viable product that we
                have been working towards.
              </div>
              <div className="flex justify-center">
                <Button
                  href="https://givingday.cornell.edu/campaigns/cornell-nexus"
                  text="Support"
                  size="xs"
                  color="navy"
                />
              </div>
            </motion.div>
          </div>
          <Image
            className="mb-10 mt-6"
            src={"/icons/delimiter.svg"}
            alt="separator"
            width="128"
            height="4"
          />
          <div className="text-5xl font-semibold text-center">
            Thank you to our sponsors!
          </div>
          <div className="flex justify-center bg-ash rounded p-8 mt-8 mb-16 w-full max-w-[58rem]">
            <div className="flex justify-center bg-ash rounded p-8 w-1/2">
              <Image
                src={"sponsors/altium_logo.svg"}
                alt="Altium Logo"
                width="500"
                height="500"
              />
            </div>
            <div className="flex justify-center bg-ash rounded p-8 w-1/2">
              <Image
                src={"sponsors/solidworks.svg"}
                alt="Solidworks Logo"
                width="500"
                height="500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
