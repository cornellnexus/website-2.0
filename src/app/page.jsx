import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-teal pb-4">
      <div className="flex flex-row flex-wrap justify-evenly items-center pt-16 bg-sand">
        <div className="text-center mb-12">
          <p className="text-5xl font-medium">Nexus at Cornell</p>
          <p className="text-xl">Creating social impact through technology</p>
        </div>
        <Image
          src={"/nexusRobot.svg"}
          width="500"
          height="500"
          alt="Nexus Robot"
        />
      </div>
      <Image
        priority
        src={"beach.svg"}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt="Beach"
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-center items-center flex-wrap gap-12 mb-12">
          <div>
            <Image
              className="rounded-xl"
              priority
              src={"/robot-render.svg"}
              width="400"
              height="400"
              alt="Robot"
            />
          </div>
          <div className="max-w-sm">
            <p className="text-white text-4xl font-medium">Our Mission</p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Senectus et netus et malesuada fames ac. Magna fermentum iaculis
              eu non diam phasellus vestibulum lorem. Vel facilisis volutpat est
              velit egestas dui id.
            </p>
            <Link href="/about">
              <button
                id="learn-btn"
                className="mt-4 px-12 py-3 border-none text-white bg-green text-xl rounded-xl"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap flex-row-reverse gap-12 mb-12">
          <div>
            <Image
              className="rounded-xl"
              priority
              src={"/fullteam.jpeg"}
              width="400"
              height="400"
              alt="Team"
            />
          </div>
          <div className="max-w-sm">
            <p className="text-white text-4xl font-medium">Who Are We?</p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Senectus et netus et malesuada fames ac. Magna fermentum iaculis
              eu non diam phasellus vestibulum lorem. Vel facilisis volutpat est
              velit egestas dui id.
            </p>
            <Link href="/team">
              <button
                id="meet-btn"
                className="mt-4 px-12 py-3 border-none text-white bg-green text-xl rounded-xl"
              >
                Meet The Team!
              </button>
            </Link>
          </div>
        </div>
        <Image
          priority
          src={"bubbles.svg"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="Bubbles"
        />
      </div>
    </div>
  );
}
