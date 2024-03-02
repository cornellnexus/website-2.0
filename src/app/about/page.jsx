import Image from "next/image";

import "src/app/globals.css";

export default function AboutUs() {
  const mission =
    "Nexus is a student-run project team on campus that aims to create novel technologies to be deployed by global organizations for social impact. Currently, we are building a solar - powered robot that filters microplastics while autonomously traversing beaches, picking up what cleanup volunteers can’t.The amount of plastic pollution has been rising readily.Nexus’ goal is to be a significant actor and leader in the fight against such environmental pollution.Our team has been working hard to make our vision a reality for global impact through the interdisciplinary collaboration between mechanical, electrical, and software engineers, as well as the business development and outreach team.Most importantly, we hope to increase research and awareness around the intersection of technology and environmental sustainability to do our part in saving our planet.As our team expands, we plan to tackle global issues and engineering challenges to create a positive social impact on our planet.";

  return (
    <>
      <div className="page">
        {/* Main page content */}

        <div id="ourmission" className="">
          <div className="flex flex-col">
            <div className="text-center">Our Mission</div>

            <div id="carousel"></div>

            <div className="pr-20 pl-20">{mission}</div>
          </div>
        </div>

        <div id="story">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Image
                src={"/nexusRobot.svg"}
                width="300"
                height="300"
                alt="progressimage"
              />
              <div className="flex flex-col">
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <div></div>
                <div></div>
              </div>
              <Image
                src={"/nexusRobot.svg"}
                width="300"
                height="300"
                alt="storyimage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
