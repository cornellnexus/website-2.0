import Image from "next/image";
import Button from "../component/button";

export default function Apply() {
  return (
    <>
      <div className="min-h-screen bg-grey">
        <div className="flex flex-col items-center px-4">
          <div className="title-size font-semibold text-5xl py-10">
            Join Our Team!
          </div>
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLScYhg1SeyPxOobY6WgE7NoL5Ul_7MEmpjnGlYPDJcqBv5gC1w/viewform"
            color="navy"
            size="lg"
            text="Apply"
          />
        </div>
      </div>
    </>
  );
}
