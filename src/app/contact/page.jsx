"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Contact() {
  return (
    <>
      <div className="bg-grey lg:h-[calc(100vh-160px)]">
        <div className="flex flex-col items-center px-4">
          <div className="text-center title-size font-semibold text-5xl py-10">
            Contact
          </div>
          <div className="flex w-full flex-wrap justify-center">
            <div>
              <Image
                src={"/silly-fullteam.jpeg"}
                width="500"
                height="700"
                alt="silly full team"
                className="rounded shadow-lg"
              />
            </div>
            <div className="max-w-sm my-3 mx-6">
              <div className="text-3xl font-semibold">
                Get in touch with us!
              </div>
              <div className="text-lg">
                Whether you have questions or just want to say hello, we&#39;re here
                to answer. Feel free to reach out via email or message us on any of
                our social media platforms!
              </div>
              <div className="text-xl font-semibold mt-2">
                Email
              </div>
              <a 
                href="mailto:nexus@cornell.edu"
                className="text-lg underline text-navy"
              >
                nexus@cornell.edu
              </a>
              <div className="text-xl font-semibold mt-2">
                Social Media
              </div>
              <div className="flex gap-6 mt-2">
                <motion.a
                  initial={{scale:1}}
                  whileHover={{scale: 1.1}}
                  transition={{ type: "spring", stiffness: 400, damping: 13 }}
                  href="https://www.instagram.com/cornellnexus/"
                  target="_blank"
                >
                  <Image
                    src={"/instagram-contact.svg"}
                    width="40"
                    height="40"
                    alt="instagram icon"
                  />
                </motion.a>
                <motion.a
                  initial={{scale:1}}
                  whileHover={{scale: 1.1}}
                  transition={{ type: "spring", stiffness: 400, damping: 13 }}
                  href="https://www.linkedin.com/company/cornellnexus/"
                  target="_blank"
                >
                  <Image
                    src={"/linkedin-contact.svg"}
                    width="40"
                    height="40"
                    alt="linkedin icon"
                  />
                </motion.a>
                <motion.a
                  initial={{scale:1}}
                  whileHover={{scale: 1.1}}
                  transition={{type: "spring", stiffness: 400, damping: 13 }}
                  href="https://www.facebook.com/cornellnexus/"
                  target="_blank"
                >
                  <Image
                    src={"/facebook-contact.svg"}
                    width="40"
                    height="40"
                    alt="facebook icon"
                  />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}