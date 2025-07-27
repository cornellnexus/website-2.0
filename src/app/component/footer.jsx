import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white flex flex-wrap items-center gap-4 justify-around sm:justify-between px-12 py-6">
      <div className="flex flex-wrap gap-6 justify-center items-center">
        <div className="flex flex-row justify-between gap-6">
          <a
            href="https://www.instagram.com/cornellnexus/"
            target="_blank"
            className="transition ease-in-out delay-90 hover:-translate-y-1"
          >
            <Image
              id="insta-icon"
              src={"/icons/instagram.svg"}
              width="30"
              height="30"
              alt="Instagram"
            />
          </a>
        </div>
        <div className="flex flex-row justify-between gap-6">
          <a
            href="https://github.com/cornellnexus"
            target="_blank"
            className="transition ease-in-out delay-90 hover:-translate-y-1"
          >
            <Image
              id="github-icon"
              src={"/icons/github.svg"}
              width="30"
              height="30"
              alt="Github"
            />
          </a>
          <a
            href="mailto:nexus@cornell.edu"
            target="_blank"
            className="transition ease-in-out delay-90 hover:-translate-y-1"
          >
            <Image
              id="email-icon"
              src={"/icons/email.svg"}
              width="30"
              height="30"
              alt="E-mail"
            />
          </a>
        </div>
      </div>
      <div className="text-2xl text-right">
        <p>Cornell Nexus Project Team © 2025</p>
        <p className="text-sm">This organization is a registered student organization of Cornell University</p>
      </div>
    </footer>
  );
}
