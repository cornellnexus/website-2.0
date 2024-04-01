"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Contact() {
  return (
    <>
      <div className="bg-grey lg:h-[calc(100vh-160px)]">
        <div className="flex flex-col items-center px-4">
          <motion.div 
            initial={{y:-30, opacity:0}}
            whileInView={{y:0, opacity:1}}
            viewport={{once: true}}
            transition={{duration: .45, ease:"easeOut"}}
            className="text-center title-size font-semibold text-5xl py-10"
          >
            Contact
          </motion.div>
          <div className="flex w-full flex-wrap justify-center">
            <motion.div
              initial={{opacity:0, scale:0}}
              whileInView={{opacity:1, scale:1}}
              viewport={{once:true}}
              transition={{duration: .65, delay: .25, type:"spring", stiffness: 150, damping: 17}}
            >
              <Image
                src={"/silly-fullteam.jpeg"}
                width="500"
                height="700"
                alt="silly full team"
                className="rounded shadow-lg"
              />
            </motion.div>
            <div className="max-w-sm my-3 mx-6">
              <motion.div 
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x:0}}
                viewport={{once: true}}
                transition={{delay: .8, duration: .6, ease:"easeOut"}}
                className="text-3xl font-semibold"
              >
                Get in touch with us!
              </motion.div>
              <motion.div 
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x:0}}
                viewport={{once: true}}
                transition={{delay: .8, duration: .6, ease:"easeOut"}}
                className="text-lg"
              >
                Whether you have questions or just want to say hello, we&#39;re here
                to answer. Feel free to reach out via email or message us on any of
                our social media platforms!
              </motion.div>
              <motion.div 
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x:0}}
                viewport={{once: true}}
                transition={{delay: 1.3, duration: .6, ease:"easeOut"}}
                className="text-xl font-semibold mt-2"
              >
                Email
              </motion.div>
              <motion.div
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x:0}}
                viewport={{once: true}}
                transition={{delay: 1.3, duration: .6, ease:"easeOut"}}
              >
                <a 
                  href="mailto:nexus@cornell.edu"
                  className="text-lg underline text-navy"
                >
                  nexus@cornell.edu
                </a>
              </motion.div>
              <motion.div 
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x:0}}
                viewport={{once: true}}
                transition={{delay: 1.8, duration: .6, ease:"easeOut"}}
                className="text-xl font-semibold mt-2"
              >
                Social Media
              </motion.div>
              <div className="flex gap-6 mt-2">
              <motion.div
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: true}}
                transition={{type: "spring", damping: 14, delay: 2.3, duration: .25, ease:"easeOut"}}
              >
                <a href="https://www.instagram.com/cornellnexus/" target="_blank">
                  <motion.div
                    initial={{scale:1}}
                    whileHover={{scale: 1.1}}
                    transition={{ type: "spring", stiffness: 400, damping: 13 }}
                  >
                    <Image
                      src={"/instagram-contact.svg"}
                      width="40"
                      height="40"
                      alt="instagram icon"
                    />
                  </motion.div>
                </a>
                </motion.div>
                <motion.div
                  initial={{opacity: 0, y: 40}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{type: "spring", damping: 14, delay: 2.5, duration: .25, ease: "easeOut"}}
                >
                  <a href="https://www.linkedin.com/company/cornellnexus/" target="_blank">
                    <motion.div
                      initial={{scale: 1}}
                      whileHover={{scale: 1.1}}
                      transition={{type: "spring", stiffness: 400, damping: 13}}
                    >
                      <Image
                        src={"/linkedin-contact.svg"}
                        width="40"
                        height="40"
                        alt="linkedin icon"
                      />
                    </motion.div>
                  </a>
                </motion.div>
                <motion.div
                  initial={{opacity: 0, y: 40}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{type: "spring", damping: 14, delay: 2.7, duration: .25, ease: "easeOut"}}
                >
                  <a href="https://www.facebook.com/cornellnexus/" target="_blank">
                    <motion.div
                      initial={{scale: 1}}
                      whileHover={{scale: 1.1}}
                      transition={{type: "spring", stiffness: 400, damping: 13}}
                    >
                      <Image
                        src={"/facebook-contact.svg"}
                        width="40"
                        height="40"
                        alt="facebook icon"
                      />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}