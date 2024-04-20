import Image from "next/image";
import Button from "../component/button";

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Apply() {

  const accordianSection = [
    {
      "accordianTitle": "How can I apply?",
      "accordianContent": ""
    },
    {
      "accordianTitle": "What does your application process look like?",
      "accordianContent": "The application consists of a short essay and a resume drop. After applying, all you have to do is wait for next steps."
    },
    {
      "accordianTitle": "When is Cornell Nexus recruiting?",
      "accordianContent": "Applications open in the Fall (August) and Spring (January) and we will be recruiting for subteams that still need to fill their teams."
    },
    {
      "accordianTitle": "How can I show interest?",
      "accordianContent": "Before recruitment, we always hold an information session as well as host a booth at club fest. Attending these events, as well as setting up a coffee chat with one of our members are great ways to show interest in our team"
    },
    {
      "accordianTitle": "Can non-engineering majors apply?",
      "accordianContent": "Yes, many members on our business team are non-engineering majors. We also encourage all majors to apply for our technical teams as well."
    },
    {
      "accordianTitle": "Do I need experience to join?",
      "accordianContent": "No! "
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-grey">
        <div className="flex flex-col items-center px-4">
          <div className="title-size font-semibold text-5xl py-10">
            Join Our Team!
          </div>
          <Image
            className='rounded pb-10'
            id='x'
            src={'/sp24-recruitment.svg'}
            alt="closeButton"
            width='1200'
            height='300'
          />
          <Button
            className="font-semibold"
            href="https://docs.google.com/forms/d/e/1FAIpQLScYhg1SeyPxOobY6WgE7NoL5Ul_7MEmpjnGlYPDJcqBv5gC1w/viewform"
            color="navy"
            size="lg"
            text="Apply"
          />

          <Image
            className="mb-10 mt-6"
            src={"/delimiter.svg"}
            alt="separator"
            width="128"
            height="4"
          />


          <div className="h-auto">
            <div className="font-semibold text-left w-full p-3 text-4xl">
              Frequently Asked Questions (FAQ)
            </div>
            {
              accordianSection.map((accordian, idx) => {
                return <div className="p-3" key={idx}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <div className="font-semibold">
                        {accordian["accordianTitle"]}
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      {accordian["accordianContent"]}
                    </AccordionDetails>
                  </Accordion>
                </div>
              })
            }
          </div>

          <div className="py-5 flex flex-col ">
            <div className="flex flex-row ">
              <Image
                className='rounded m-1'
                id='x'
                src={'/turtlethink.svg'}
                alt="closeButton"
                width='30'
                height='30'
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


        </div>
      </div>
    </>
  );
}
