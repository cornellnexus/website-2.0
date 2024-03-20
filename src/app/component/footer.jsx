import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white flex flex-wrap items-center gap-4 justify-around sm:justify-between px-12 py-4">
      <div className="flex flex-wrap gap-6 justify-center items-center">
        <div className="flex flex-row justify-between gap-6">
          <a href="https://www.instagram.com/cornellnexus/" target="_blank">
            <Image
              id="insta-icon"
              src={"/insta-svg.svg"}
              width="30"
              height="30"
              alt="Instagram"
            />
          </a>
          <a href="https://www.facebook.com/cornellnexus/" target="_blank">
            <Image
              id="facebook-icon"
              src={"facebook-svg.svg"}
              width="30"
              height="30"
              alt="Facebook"
            />
          </a>
        </div>
        <div className="flex flex-row justify-between gap-6">
          <a href="https://github.com/cornellnexus" target="_blank">
            <Image
              id="github-icon"
              src={"/github-svg.svg"}
              width="30"
              height="30"
              alt="Github"
            />
          </a>
          <a href="mailto:nexus@cornell.edu" target="_blank">
            <Image
              id="email-icon"
              src={"email-svg.svg"}
              width="30"
              height="30"
              alt="E-mail"
            />
          </a>
        </div>
      </div>
      <div className="text-2xl text-center">
        <p>Nexus at Cornell © 2024</p>
      </div>
    </footer>
  );
}
