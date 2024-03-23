import Image from "next/image";
import Button from "./component/button";

export default function Home() {
  return (
    <div className="bg-teal pb-4">
      <div className="flex flex-row flex-wrap justify-center items-center gap-12 pt-16 px-4 bg-sand">
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
      <div className="flex flex-col items-center max-w-screen-lg px-4 mx-auto">
        <div className="flex justify-center flex-wrap gap-12 mb-12">
          <div>
            <Image
              className="rounded shadow"
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
              Save the turtles with a turtle. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Senectus et netus et malesuada
              fames ac. Magna fermentum iaculis eu non diam phasellus vestibulum
              lorem. Vel facilisis volutpat est velit egestas dui id.
            </p>
            <Button href="/about" text="Learn More" size="lg" color="green" />
          </div>
        </div>
        <div className="flex justify-center flex-wrap flex-row-reverse gap-12 mb-12">
          <div>
            <Image
              className="rounded shadow"
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
            <Button
              href="/team"
              text="Meet The Team!"
              size="lg"
              color="green"
            />
          </div>
        </div>
        <Image
          priority
          src={"bubbles.svg"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "80%", height: "auto" }}
          className="my-8"
          alt="Bubbles"
        />
        <Button href="/apply" text="Join Us!" size="lg" color="green" />
        <div className="flex justify-center flex-wrap flex-row gap-12 mb-12">
          <div>
            <Image
              className="rounded shadow"
              priority
              src={"/fullteam.jpeg"}
              width="400"
              height="400"
              alt="Team"
            />
          </div>
          <div className="max-w-sm">
            <p className="text-white text-4xl font-medium">Sponsors</p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Senectus et netus et malesuada fames ac. Magna fermentum iaculis
              eu non diam phasellus vestibulum lorem. Vel facilisis volutpat est
              velit egestas dui id.
            </p>
            <Button href="/team" text="Support Us!" size="lg" color="green" />
          </div>
        </div>
      </div>
    </div>
  );
}
