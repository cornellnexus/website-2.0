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
      "accordianContent": "Before recruitment, we always hold an information session as well as host a booth at club fest. Attending these events, as well as setting up a coffee chat with one of our members are great ways to show interest in our team"
    },
    {
      "accordianTitle": "What does your application process look like?",
      "accordianContent": ""
    },
    {
      "accordianTitle": "When is Cornell Nexus recruiting?",
      "accordianContent": ""
    },
    {
      "accordianTitle": "How can I show interest?",
      "accordianContent": ""
    },
    {
      "accordianTitle": "Can non-engineering majors apply?",
      "accordianContent": ""
    },
    {
      "accordianTitle": "Do I need experience to join?",
      "accordianContent": ""
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
            href="https://docs.google.com/forms/d/e/1FAIpQLScYhg1SeyPxOobY6WgE7NoL5Ul_7MEmpjnGlYPDJcqBv5gC1w/viewform"
            color="navy"
            size="lg"
            text="Apply"
          />
          <div className="h-auto">
            {
              accordianSection.map((accordian, idx) => {
                return <div className="p-3" key={idx}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                    >
                      {accordian["accordianTitle"]}
                    </AccordionSummary>
                    <AccordionDetails>
                      {accordian["accordianContent"]}
                    </AccordionDetails>
                  </Accordion>
                </div>
              })
            }
          </div>

        </div>
      </div>
    </>
  );
}
