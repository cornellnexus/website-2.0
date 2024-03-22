"use client";
import Image from "next/image";
import Link from "next/link";

export default function Support() {
  return (
    <>
      <div className="min-h-screen bg-grey px-4">
        <div className="flex flex-col items-center">
          <div className="text-center title-size font-semibold text-5xl py-10">
            Support Us!
          </div>
          <Image
            className="rounded pb-5"
            src={"/fullteam.jpeg"}
            alt="fullteam image"
            width="700"
            height="700"
          />
          <div className="max-w-screen-md text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi
            tincidunt augue interdum velit euismod in pellentesque massa. Ut
            tellus elementum sagittis vitae et leo duis ut. Massa sapien
            faucibus et molestie. Tortor id aliquet lectus proin nibh nisl
            condimentum id venenatis. Amet aliquam id diam maecenas ultricies mi
            eget. Adipiscing elit pellentesque habitant morbi. Pulvinar
            pellentesque habitant morbi tristique senectus et netus.
          </div>
          <Link
            className="mt-5"
            target="_blank"
            href="https://securelb.imodules.com/s/1717/giving/interior.aspx?sid=1717&gid=2&pgid=16421&cid=27217&dids=5455&sort=1&bledit=1"
          >
            <button className="mt-2 px-16 py-2.5 border-none text-white bg-navy text-xl rounded-xl">
              Donate
            </button>
          </Link>
          <Image
            className="my-10"
            src={"/delimiter.svg"}
            alt="separator"
            width="128"
            height="4"
          />
          <div className="flex flex-wrap justify-center gap-8 w-full mb-10">
            <div className="bg-ash rounded p-5 max-w-md">
              <div className="text-2xl font-semibold">Sponsorships</div>
              <div>
                Forming partnerships and receiving sponsors is a large part of
                how we receive funding and gain valuable partners. View our
                sponsorship package below!
              </div>
              <div className="flex justify-center">
                <Link className="mt-2" target="_blank" href="">
                  <button className="min-w-[8rem] px-4 py-2 border-none text-white bg-navy text-md font-medium rounded-lg">
                    View
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-ash rounded p-5 max-w-md">
              <div className="text-2xl font-semibold">Giving Day</div>
              <div>
                Giving Day gifts will assist us overcome the last big obstacle,
                of funding, in creating our first minimum viable product that we
                have been working towards.
              </div>
              <div className="flex justify-center">
                <Link
                  className="mt-2"
                  target="_blank"
                  href="https://givingday.cornell.edu/campaigns/cornell-nexus"
                >
                  <button className="min-w-[8rem] px-4 py-2 border-none text-white bg-navy text-md font-medium rounded-lg">
                    Support
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
