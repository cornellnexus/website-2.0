"use client";
import Image from "next/image";
import NameCard from "../component/nameCard";

export default function Team() {
  return (
  <>
    <div>
      <div className="min-h-screen bg-grey">
        <div className="flex flex-col items-center">
          <div className="text-center title-size font-semibold text-5xl py-10">
            Meet the Team
          </div>
          <Image
            className="rounded pb-5"
            src={'/fullteam.jpeg'}
            alt="fullteam image"
            width="700"
            height="700"
          />
          <div className="max-w-screen-md text-center">
            Our team is broken up into 4 main subteams: electrical, software, mechanical, and 
            business. Each team may be working on their own individual tasks, whether that be 
            working with sensors or building a pitch deck. However, the integration between these 
            four teams is what allows us to work on the robot efficiently and allows Members to 
            learn about disciplines outside of their subteam.
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
            src={'/electrical.jpeg'}
            alt="fullteam image"
            width="700"
            height="700"
          />
          <div className="max-w-screen-md text-center">
            The electrical subteam is in charge of creating a reliable sensor network to collect 
            relevant data for real time analysis, generating an appropriate power system to drive 
            the motors and all of the on-board electronics, and collaborating with other subteams 
            to integrate various aspects of the robot. Currently some of our main tasks include 
            working to develop a custom PCB for our sensors to easily communicate with the Raspberry 
            Pi and any other peripherals, building and integrating a battery pack, and helping 
            the software subteam test their Kalman Filter implementation.
          </div>
          <div className="text-center text-3xl font-semibold py-5">
            Members
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            <NameCard
              src="progress.png"
              name="Amber Li"
              title="Electrical Subteam Lead"
            />
            <NameCard
              src="progress.png"
              name="Casey Kashishian"
              title="Social Chair"
            />
            <NameCard
              src="progress.png"
              name="George Maidhof"
            />
            <NameCard
              src="progress.png"
              name="Jasmine Si"
            />
            <NameCard
              src="progress.png"
              name="Aaron Sucov"
            />
            <NameCard
              src="progress.png"
              name="Antranig Baghdassarian"
            />
            <NameCard
              src="progress.png"
              name="Akmal Rupasingha"
            />
            <NameCard
              src="progress.png"
              name="Anamitra Rawat"
            />
            <NameCard
              src="progress.png"
              name="Parishee Bajaj"
            />
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
            src={'/business.jpeg'}
            alt="fullteam image"
            width="700"
            height="700"
          />
          <div className="max-w-screen-md text-center">
            The business subteam team goes beyond finance and general business operations 
            in order to promote our team mission both locally and globally. Aspects of 
            business include social media, design, marketing, fundraising, and community outreach. 
            Right now our primary focuses are raising money to help support our other subteams and 
            to increase overall presence on and off of campus. As a small team, we have the opportunity 
            to be well rounded and gain valuable experience that can help accelerate career growth.
          </div>
          <div className="text-center text-3xl font-semibold py-5">
            Members
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            <NameCard
              src="progress.png"
              name="Mona Wu"
              title="Full Team Lead"
            />
            <NameCard
              src="progress.png"
              name="Tanay Nisar"
              title="Business Subteam Lead"
            />
            <NameCard
              src="progress.png"
              name="Elaine Wu"
            />
            <NameCard
              src="progress.png"
              name="Vedaant Shah"
            />
            <NameCard
              src="progress.png"
              name="Jeana Han"
            />
            <NameCard
              src="progress.png"
              name="Oscar Lam"
            />
            <NameCard
              src="progress.png"
              name="Neha Jain"
            />
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
            src={'/mechanical.jpeg'}
            alt="fullteam image"
            width="700"
            height="700"
          />
          <div className="max-w-screen-md text-center">
            Insert blurb about the mechanical team
          </div>
          <div className="text-center text-3xl font-semibold py-5">
            Members
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            <NameCard
              src="progress.png"
              name="Chris Bauer"
              title="Mechanical Subteam Lead"
            />
            <NameCard
              src="progress.png"
              name="Katlynn Ryu"
            />
            <NameCard
              src="progress.png"
              name="Lucca Correia"
            />
            <NameCard
              src="progress.png"
              name="Mia Tarantini"
            />
            <NameCard
              src="progress.png"
              name="Yujean Choi"
            />
            <NameCard
              src="progress.png"
              name="Farah Achouri"
            />
            <NameCard
              src="progress.png"
              name="William Dignam"
            />
            <NameCard
              src="progress.png"
              name="Cleo Hamilton"
            />
            <NameCard
              src="progress.png"
              name="Ethan Sekiguchi"
            />
            <NameCard
              src="progress.png"
              name="Natalie Kaplan"
            />
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
            src={'/software.jpeg'}
            alt="fullteam image"
            width="700"
            height="700"
          />
          <div className="max-w-screen-md text-center">
            We love CS
          </div>
          <div className="text-center text-3xl font-semibold py-5">
            Members
          </div>
          <div className="flex flex-row flex-wrap justify-center mb-10">
            <NameCard
              src="progress.png"
              name="Lin Jin"
              title="Full Team Lead"
            />
            <NameCard
              src="progress.png"
              name="Vinny Huang"
              title="Software Subteam Lead"
            />
            <NameCard
              src="progress.png"
              name="Shreya Kumar"
            />
            <NameCard
              src="progress.png"
              name="Sophia Pan"
            />
            <NameCard
              src="progress.png"
              name="Ahan Mishra"
            />
            <NameCard
              src="progress.png"
              name="Natalie Leung"
            />
            <NameCard
              src="progress.png"
              name="Gary Chen"
            />
            <NameCard
              src="progress.png"
              name="Luke Tao"
            />
            <NameCard
              src="progress.png"
              name="Michael Wu"
            />
            <NameCard
              src="progress.png"
              name="Grace Wei"
            />
            <NameCard
              src="progress.png"
              name="Amishi Gupta"
            />
          </div>
        </div>
      </div>
    </div>
  </>
  );
}