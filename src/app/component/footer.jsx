import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://www.instagram.com/cornellnexus/" target="_blank">
          <Image
            id="insta-icon"
            src={"/insta-svg.svg"}
            width="40"
            height="40"
            alt="Instagram"
          />
        </a>
        <a href="https://github.com/cornellnexus" target="_blank">
          <Image
            id="github-icon"
            src={"/github-svg.svg"}
            width="40"
            height="40"
            alt="Github"
          />
        </a>
        <a href="https://www.facebook.com/cornellnexus/" target="_blank">
          <Image
            id="facebook-icon"
            src={"facebook-svg.svg"}
            width="40"
            height="40"
            alt="Facebook"
          />
        </a>
        <a href="mailto:nexus@cornell.edu" target="_blank">
          <Image
            id="email-icon"
            src={"email-svg.svg"}
            width="40"
            height="40"
            alt="E-mail"
          />
        </a>
      </div>
      <div className="copyright">
        <p>Cornell Nexus © 2023</p>
      </div>
    </footer>
  );
}
