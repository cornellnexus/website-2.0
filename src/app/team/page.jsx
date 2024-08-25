import Image from "next/image";
import MemberCard from "../component/membercard";
import { memberInfo } from "../constants";

export default function Team() {
  const MechanicalSubteam = [
    "Christopher Bauer",
    "Lucca Correia",
    "Katlynn Ryu",
    "Yujean Choi",
    "Mia Tarantini",
    "Farah Achouri",
    "Ethan Sekiguchi",
    "William Dignam",
    "Cleo Hamilton",
    "Natalie Kaplan",
  ];
  const ElectricalSubteam = [
    "George Maidhof",
    "Amber Li",
    "Jasmine Si",
    "Casey Kashishian",
    "Aaron Sucov",
    "Antranig Baghdassarian",
    "Parishee Bajaj",
    "Anamitra Rawat",
    "Akmal Rupasingha",
  ];
  const SoftwareSubteam = [
    "Lin Jin",
    "Shreya Kumar",
    "Vinny Huang",
    "Sophia Pan",
    "Natalie Leung",
    "Ahan Mishra",
    "Luke Tao",
    "Michael Wu",
    "Gary Chen",
    "Amishi Gupta",
    "Grace Wei",
  ];
  const BusinessSubteam = [
    "Mona Wu",
    "Tanay Nisar",
    "Elaine Wu",
    "Jeana Han",
    "Vedaant Shah",
    "Oscar Lam",
    "Neha Jain",
  ];

  return (
    <>
      <div className="min-h-screen bg-grey px-4 pb-12">
        <div className="flex flex-col items-center">
          <div className="text-center title-size font-semibold text-5xl py-10">
            Meet the Team
          </div>
          <Image
            className="rounded pb-5"
            src={"/fullteam.jpeg"}
            alt="fullteam image"
            width="700"
            height="700"
            priority
          />
          <div className="max-w-screen-md text-center">
            Our team is broken up into 4 main subteams: mechanical, electrical,
            software, and business. Each team may be working on their own
            individual tasks, whether that be working with sensors or building a
            pitch deck. However, the integration between these four teams is
            what allows us to work on the robot efficiently and allows Members
            to learn about disciplines outside of their subteam.
          </div>
          <Image
            className="my-10"
            src={"/delimiter.svg"}
            alt="separator"
            width="128"
            height="4"
          />
          <div className="text-center title-size font-semibold text-5xl pb-10">
            Mechanical Team
          </div>
          <Image
            className="rounded pb-5"
            src={"/mechanical.jpeg"}
            alt="fullteam image"
            width="700"
            height="700"
            priority
          />
          <div className="max-w-screen-md text-center">
            Insert blurb about the mechanical team
          </div>
          <div className="text-center text-3xl font-semibold py-5">Members</div>
          <div className="flex flex-row flex-wrap justify-center">
            {MechanicalSubteam.map((name, idx) => {
              if (memberInfo[name]["title"] != "") {
                return (
                  <MemberCard
                    key={idx}
                    src={memberInfo[name]["image"]}
                    name={name}
                    title={memberInfo[name]["title"]}
                  />
                );
              }
              return null;
            })}
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {MechanicalSubteam.map((name, idx) => {
              if (memberInfo[name]["title"] == "") {
                return (
                  <MemberCard
                    key={idx}
                    src={memberInfo[name]["image"]}
                    name={name}
                  />
                );
              }
              return null;
            })}
          </div>
          <Image
            className="my-10"
            src={"/delimiter.svg"}
            alt="separator"
            width="128"
            height="4"
          />
          <div className="text-center title-size font-semibold text-5xl pb-10">
            Electrical Team
          </div>
          <Image
            className="rounded pb-5"
            src={"/electrical.jpeg"}
            alt="fullteam image"
            width="700"
            height="700"
            priority
          />
          <div className="max-w-screen-md text-center">
            The electrical subteam is in charge of creating a reliable sensor
            network to collect relevant data for real time analysis, generating
            an appropriate power system to drive the motors and all of the
            on-board electronics, and collaborating with other subteams to
            integrate various aspects of the robot. Currently some of our main
            tasks include working to develop a custom PCB for our sensors to
            easily communicate with the Raspberry Pi and any other peripherals,
            building and integrating a battery pack, and helping the software
            subteam test their Kalman Filter implementation.
          </div>
          <div className="text-center text-3xl font-semibold py-5">Members</div>
          <div className="flex flex-row flex-wrap justify-center">
            {ElectricalSubteam.map((name, idx) => {
              if (memberInfo[name]["title"] != "") {
                return (
                  <MemberCard
                    key={idx}
                    src={memberInfo[name]["image"]}
                    name={name}
                    title={memberInfo[name]["title"]}
                  />
                );
              }
              return null;
            })}
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {ElectricalSubteam.map((name, idx) => {
              if (memberInfo[name]["title"] == "") {
                return (
                  <MemberCard
                    key={idx}
                    src={memberInfo[name]["image"]}
                    name={name}
                  />
                );
              }
              return null;
            })}
          </div>
          <Image
            className="my-10"
            src={"/delimiter.svg"}
            alt="separator"
            width="128"
            height="4"
          />
          <div className="text-center title-size font-semibold text-5xl pb-10">
            Software Team
          </div>
          <Image
            className="rounded pb-5"
            src={"/software.jpeg"}
            alt="fullteam image"
            width="700"
            height="700"
            priority
          />
          <div className="max-w-screen-md text-center">We love CS</div>
          <div className="text-center text-3xl font-semibold py-5">Members</div>
          <div className="flex flex-row flex-wrap justify-center">
            {SoftwareSubteam.map((name, idx) => {
              if (memberInfo[name]["title"] != "") {
                return (
                  <MemberCard
                    key={idx}
                    src={memberInfo[name]["image"]}
                    name={name}
                    title={memberInfo[name]["title"]}
                  />
                );
              }
              return null;
            })}
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {SoftwareSubteam.map((name, idx) => {
              if (memberInfo[name]["title"] == "") {
                return (
                  <MemberCard
                    key={idx}
                    src={memberInfo[name]["image"]}
                    name={name}
                  />
                );
              }
              return null;
            })}
          </div>
          <Image
            className="my-10"
            src={"/delimiter.svg"}
            alt="separator"
            width="128"
            height="4"
          />
          <div className="text-center title-size font-semibold text-5xl pb-10">
            Business Team
          </div>
          <Image
            className="rounded pb-5"
            src={"/business.jpeg"}
            alt="fullteam image"
            width="700"
            height="700"
            priority
          />
          <div className="max-w-screen-md text-center">
            The business subteam team goes beyond finance and general business
            operations in order to promote our team mission both locally and
            globally. Aspects of business include social media, design,
            marketing, fundraising, and community outreach. Right now our
            primary focuses are raising money to help support our other subteams
            and to increase overall presence on and off of campus. As a small
            team, we have the opportunity to be well rounded and gain valuable
            experience that can help accelerate career growth.
          </div>
          <div className="text-center text-3xl font-semibold py-5">Members</div>
          <div className="flex flex-row flex-wrap justify-center">
            {BusinessSubteam.map((name, idx) => {
              if (memberInfo[name]["title"] != "") {
                return (
                  <MemberCard
                    key={idx}
                    src={memberInfo[name]["image"]}
                    name={name}
                    title={memberInfo[name]["title"]}
                  />
                );
              }
              return null;
            })}
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {BusinessSubteam.map((name, idx) => {
              if (memberInfo[name]["title"] == "") {
                return (
                  <MemberCard
                    key={idx}
                    src={memberInfo[name]["image"]}
                    name={name}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
