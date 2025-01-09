"use client";
import Image from "next/image";
import Button from "../component/button";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AnimatedTitle from "../component/animatedtitle";

import { motion } from "framer-motion";

export default function Apply() {
  const accordianSection = [
    {
      accordianTitle: "How can I apply?",
      accordianContent:
        "Click the link above! For Spring 2025, we will be recruiting for our business, electrical, and software subteams.",
    },
    {
      accordianTitle: "What does your application process look like?",
      accordianContent:
        "The application consists of a short essay and a resume drop. After applying, all you have to do is wait for next steps.",
    },
    {
      accordianTitle: "When is Cornell Nexus recruiting?",
      accordianContent:
        "Applications open in the Fall (August) and Spring (January) and we will be recruiting for subteams that still need to fill their teams.",
    },
    {
      accordianTitle: "How can I show interest?",
      accordianContent:
        "Before recruitment, we always hold an information session as well as host a booth at club fest. Attending these events, as well as setting up a coffee chat with one of our members are great ways to show interest in our team. Follow us on social media or check this site to stay up to date with the team.",
    },
    {
      accordianTitle: "Can non-engineering majors apply?",
      accordianContent:
        "Yes, many members on our business team are non-engineering majors. We also encourage all majors to apply for our technical teams as well.",
    },
    {
      accordianTitle: "Do I need experience to join?",
      accordianContent: "No!",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-grey">
        <div className="flex flex-col items-center px-4">
          <div className="py-10">
            <AnimatedTitle text="Join Our Team" />
          </div>
          {/* <motion.div
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
              className="rounded mb-10 shadow-lg"
              id="x"
              src={"/recruitment-timeline.jpg"}
              alt="recruitment timeline"
              width="1200"
              height="300"
            />
          </motion.div> */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          >
            <Button
              className="font-semibold"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfoBmf7kxjre8Qgxtp2IRG3WpoVtOIkUHGqiX_xg7LG6T5rGg/viewform"
              color="navy"
              size="lg"
              text="Coffee Chat Form"
            />
          </motion.div>
          {/* <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          >
            <Button
              className="font-semibold"
              href="https://docs.google.com/forms/d/1Xt_Bki7JGAvic-S3Xw9NDhK-dP8KgbdWhbkx5PN8iSw/viewform?edit_requested=true"
              color="navy"
              size="lg"
              text="Upperclassman Application"
            />
          </motion.div> */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          >
            <Button
              className="font-semibold"
              href="https://docs.google.com/forms/d/15zk3o6K1rKuvSrj-qVizpjARsEVQ_WFMX1IjJAmpV_c/viewform"
              color="navy"
              size="lg"
              text="Spring Application"
            />
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              className="mb-10 mt-6"
              src={"/delimiter.svg"}
              alt="separator"
              width="128"
              height="4"
            />
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          >
            <div className="h-auto max-w-screen-md justify-center mx-auto">
              <div className="font-semibold text-center w-full text-4xl">
                Frequently Asked Questions (FAQ)
              </div>

              {accordianSection.map((accordian, idx) => {
                return (
                  <div className="my-4" key={idx}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <div className="font-semibold">
                          {accordian["accordianTitle"]}
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        {accordian["accordianContent"]}
                      </AccordionDetails>
                    </Accordion>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          >
            <div className="py-5 flex flex-col ">
              <div className="flex flex-row ">
                <Image
                  className="rounded m-1"
                  id="x"
                  src={"/turtle-think.svg"}
                  alt="closeButton"
                  width="30"
                  height="30"
                />
                <div className="text-2xl font-semibold m-1">
                  Any other questions? Just ask us!
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  className="font-semibold"
                  href=""
                  color="navy"
                  size="lg"
                  text="Contact"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
