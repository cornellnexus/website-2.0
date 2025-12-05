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
        "Our applications have closed for Fall 2025. Check back next semester!",
    },
    {
      accordianTitle: "What does your application process look like?",
      accordianContent:
        "The application consists of a short essay and a resume drop. After applying, all you have to do is wait to hear back from us.",
    },
    {
      accordianTitle: "When is Cornell Nexus recruiting?",
      accordianContent:
        "Applications open in the Fall (August) and Spring (January), and we will be recruiting for sub-teams that still need to fill their teams.",
    },
    {
      accordianTitle: "How can I show interest?",
      accordianContent:
        "Before recruitment, we always hold information sessions as well as host booths at ClubFest, EcoFest, and Project Team Fest. Attending these events, as well as setting up a coffee chat with one of our members are great ways to show interest in our team. Follow us on social media or check this site to stay up to date with the team.",
    },
    {
      accordianTitle: "Can non-engineering majors apply?",
      accordianContent:
        "Yes, many members on our business team are non-engineering majors. We also encourage all majors to apply for our technical teams as well.",
    },
    {
      accordianTitle: "Do I need experience to join?",
      accordianContent: "No! Prior technical background is always a plus, but it's not required to join. We'll teach you everything you need to know!",
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
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          >
            <div className="text-xl">
              <div>Check back soon for our recruitment timeline and details on our info sessions!</div>
              <div className="flex flex-row justify-center">
                <div className="my-4 mr-1">
                  In the meantime... sign up for a coffee chat below.
                </div>
                <Image
                  className="rounded m-1"
                  id="x"
                  src={"/graphics/turtle-smirk.png"}
                  alt="Smirking turtle"
                  width="50"
                  height="50"
                />
              </div>
            </div>
          </motion.div> */}
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
              className="rounded mb-10 shadow-lg"
              id="x"
              src={"/graphics/recruitment-timeline.jpg"}
              alt="recruitment timeline"
              width="1200"
              height="300"
            />
          </motion.div>
          {/* {<motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          >
            <Button
              className="font-semibold"
              href="https://forms.gle/WrQd3D12gaH86Pbs5"
              color="navy"
              size="lg"
              text="Coffee Chat Sign-Up"
            />
          </motion.div>} */}
          {/* {<motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          >
            <Button
              className="font-semibold"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8zF_wlfvICItLtU9jmBOQPdQY8T2z0MYzZg599ku6Lq57mA/viewform?usp=dialog"
              color="navy"
              size="lg"
              text="Upperclassman Application"
            />
          </motion.div>} */}
          {/* {<motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          >
            <Button
              className="font-semibold"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfBuZfYpPgFa-nxe0xedHq2zLrQORRMadHBlUin9cr3tZla5A/viewform?usp=dialog"
              color="navy"
              size="lg"
              text="Freshman/Transfer Application"
            />
          </motion.div>} */}
          {<motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              className="mb-10 mt-6"
              src={"/icons/delimiter.svg"}
              alt="separator"
              width="128"
              height="4"
            />
          </motion.div>}

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          >
            <div className="h-auto max-w-screen-md justify-center mx-auto pt-10">
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
                  src={"/graphics/turtle-think.svg"}
                  alt="Thinking turtle"
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
                  href="/contact"
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
