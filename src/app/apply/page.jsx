import Link from "next/link";
import Image from "next/image";

export default function Apply() {
  return (
    <>
      <div className="min-h-screen bg-grey">
        <div className="flex flex-col items-center">
          <div className="text-center title-size font-semibold text-5xl py-10">
            Join Our Team!
          </div>
          <div>
            Put application timeline image here
          </div>
          <div>
            <Link className="mt-5" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScYhg1SeyPxOobY6WgE7NoL5Ul_7MEmpjnGlYPDJcqBv5gC1w/viewform">
              <button className="mt-2 px-16 py-2.5 border-none text-white bg-navy text-xl rounded-xl">
                Apply
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}