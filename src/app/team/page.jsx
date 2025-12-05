import Image from "next/image";
import MemberCard from "../component/membercard";
import { memberInfo } from "../constants";

export default function Team() {
  const TeamLeads = [
    "Aaron Sucov",
    "William Dignam",
  ];
  const MechanicalSubteam = [
    "Mia Tarantini",
    "Ethan Sekiguchi",
    "William Dignam",
    "Cleo Hamilton",
    "Natalie Kaplan",
    "Olivia Lee",
    "Rebecca Gerola",
    "Leo VanHouten",
    "Ece Kumcuoglu",
    "Bradley Reiff",
    "Derek Yang",
    "Miguel Manalang",
    "Claire Kim",
    "Stephanie Cheng",
    "Yebon Kim",
    "Addison Purcell",
    "Anumita Kohli",
  ];
  const ElectricalSubteam = [
    "Amber Li",
    "Jasmine Si",
    "Casey Kashishian",
    "Aaron Sucov",
    "Antranig Baghdassarian",
    "Parishee Bajaj",
    "Akmal Rupasingha",
    "Lizeth Montemayor",
    "Raymond Shan",
    "Sazidur Rashid",
    "Trinity Kong",
    "Spencer Hadlock",
    "Eli Pratt",
    "Josh Jung",
    "Chloe Kim"
  ];
  const SoftwareSubteam = [
    "Sophia Pan",
    "Elaine Wu",
    "Natalie Leung",
    "Michael Wu",
    "Amishi Gupta",
    "Grace Wei",
    "Andrew Hu",
    "Ethan Huang",
    "Jillian Chong",
    "Dora Zhang",
    "Julian Meinke",
    "Alex Saccone",
    "Sajal Sabat",
    "Yujean Choi",
    "Gabriella Seifert",
    "Arnav Bansal",
    "Kevin Lu",
    "Chris Zhang",
  ];
  const BusinessSubteam = [
    "Jeana Han",
    "Shihan Gao",
    "Sanika Sharma",
    "Annika Terezakis",
    "Inae Kim",
    "Megi Bare",
    "Brendan Shek",
    "Charles Lee",
    "Sebastian Lai",
    "Sidney Nam",
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
            src={"/team/silly-fullteam.jpg"}
            alt="silly fullteam image"
            width="700"
            height="700"
            priority
          />
          <div className="max-w-screen-md text-center">
            Our team is broken up into 4 main subteams:{" "}
            <a href="#mechanical" className="text-teal">
              mechanical
            </a>
            ,{" "}
            <a href="#electrical" className="text-teal">
              electrical
            </a>
            ,{" "}
            <a href="#software" className="text-teal">
              software
            </a>
            , and{" "}
            <a href="#business" className="text-teal">
              business
            </a>
            . Each team may be working on their own individual tasks, whether
            that be working with sensors or building a pitch deck. However, the
            integration between these four teams is what allows us to work on
            the robot efficiently and allows members to learn about disciplines
            outside of their subteam.
          </div>
          <Image
            className="my-10"
            src={"/icons/delimiter.svg"}
            alt="separator"
            width="128"
            height="4"
          />

          <div
            id="fullteam"
            className="text-center title-size font-semibold text-5xl pb-10"
          >
            Team Leads
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {TeamLeads.map((name, idx) => {
              return (
                <MemberCard
                  key={idx}
                  src={memberInfo[name]["image"]}
                  name={name}
                  title={memberInfo[name]["title"]}
                />
              );
              return null;
            })}
          </div>
          <Image
            className="my-10"
            src={"/icons/delimiter.svg"}
            alt="separator"
            width="128"
            height="4"
          />
          <div
            id="mechanical"
            className="text-center title-size font-semibold text-5xl pb-10"
          >
            Mechanical Team
          </div>
          <Image
            className="rounded pb-5"
            src={"/team/mechanical.jpg"}
            alt="fullteam image"
            width="700"
            height="700"
            priority
          />
          <div className="max-w-screen-md text-center">
            The mechanical team is currently in the manufacturing stage of
            building our beach-cleaning robot. This includes working on the
            drivetrain and filtration assemblies, and using 3D modeling software
            such as SolidWorks to model our robot. We are a small and personal
            team—there are opportunities to work on many different components of
            the robot and to tackle and solve new problems creatively and obtain
            hands-on experience.
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
            src={"/icons/delimiter.svg"}
            alt="separator"
            width="128"
            height="4"
          />
          <div
            id="electrical"
            className="text-center title-size font-semibold text-5xl pb-10"
          >
            Electrical Team
          </div>
          <Image
            className="rounded pb-5"
            src={"/team/electrical.jpg"}
            alt="fullteam image"
            width="700"
            height="700"
            priority
          />
          <div className="max-w-screen-md text-center">
            The electrical subteam designs and implements the sensor and power
            systems of our autonomous robot. Some of their current projects
            include: designing, assembling, testing, and iterating upon custom
            PCBs for sensor operation and power distribution; designing the base
            station&apos;s charging system to autonomously recharge the
            robot&apos;s battery using solar power; integrating a GPS-RTK
            (real-time-kinematics) to obtain high-accuracy localization data for
            the robot as it traverses the beach; and writing motor controller
            code using motor encoder data for the updated swerve-steering
            drivetrain.
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
            src={"/icons/delimiter.svg"}
            alt="separator"
            width="128"
            height="4"
          />
          <div
            id="software"
            className="text-center title-size font-semibold text-5xl pb-10"
          >
            Software Team
          </div>
          <Image
            className="rounded pb-5"
            src={"/team/software.jpg"}
            alt="fullteam image"
            width="700"
            height="700"
            priority
          />
          <div className="max-w-screen-md text-center">
            The software subteam is the brain behind the robot. Software is
            working on a wide range of different challenges, working with the
            code, logic, and technology needed to make the robot function. Some
            of our current tasks include reading sensor data to detect our
            robot’s location and monitor its health, implementing computer
            vision models to allow for autonomous steering and obstacle
            avoidance, and visualizing our robot’s data through simulated
            animations.
          </div>
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
            src={"/icons/delimiter.svg"}
            alt="separator"
            width="128"
            height="4"
          />
          <div
            id="business"
            className="text-center title-size font-semibold text-5xl pb-10"
          >
            Business Team
          </div>
          <Image
            className="rounded pb-5"
            src={"/team/business.jpg"}
            alt="fullteam image"
            width="700"
            height="700"
            priority
          />
          <div className="max-w-screen-md text-center">
            The business subteam manages the logistics behind making the
            projects possible and actualizes the intended impact. This includes
            getting funding, managing finances, assisting in internal
            operations, marketing the organization, and more.
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
          <div>
            {/* Placements Section */}
            <Image
              className="my-10 mx-auto"
              src={"/icons/delimiter.svg"}
              alt="separator"
              width={128}
              height={4}
            />

            <div
              id="placements"
              className="text-center title-size font-semibold text-5xl pb-10"
            >
              Beyond Nexus
            </div>

            <div className="max-w-screen-md text-center mb-12">
              Nexus members and alumni have gone on to intern and work at leading
              companies, research labs, and startups. We’re proud that the skills
              developed here help our members make an impact globally.
            </div>

            {/* Background rectangle for logos */}
            <div className="bg-white rounded-2xl shadow-lg px-6 py-10 max-w-5xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
                {[
                  { src: "/placements/amazon.svg", alt: "Amazon" },
                  { src: "/placements/microsoft.svg", alt: "Microsoft" },
                  { src: "/placements/spacex.svg", alt: "SpaceX" },
                  { src: "/placements/meta.svg", alt: "Meta" },
                  { src: "/placements/apple.svg", alt: "Apple" },
                  { src: "/placements/tesla.svg", alt: "Tesla" },
                  { src: "/placements/roblox.svg", alt: "Roblox" },
                  { src: "/placements/marvell.svg", alt: "Marvell" },
                  { src: "/placements/tokyo_electron.svg", alt: "Tokyo Electron" },
                  { src: "/placements/westinghouse.svg", alt: "Westinghouse Electric Company" },
                  { src: "/placements/capital_one.svg", alt: "Capital One" },
                  { src: "/placements/millennium.svg", alt: "Millennium" },
                  { src: "/placements/jpmc.svg", alt: "J.P. Morgan Chase" },
                  { src: "/placements/deloitte.svg", alt: "Deloitte" },
                  { src: "/placements/plug.png", alt: "PlugPower" },
                  { src: "/placements/stv.png", alt: "STV" },
                  { src: "/placements/yext.jpg", alt: "Yext" },
                ].map((logo, idx) => (
                  <div key={idx} className="flex items-center justify-center w-32 h-20">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={128}
                      height={80}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
