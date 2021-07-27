import Link from "next/link";
import Container from "./Container";
import Logo from "./logo/Logo";
import Button from "./Button";
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-gray-3 mt-6 py-5">
      <Container>
        <div className="flex flex-col h-32 justify-between">
          <div className="flex flex-col items-center">
            <Link href="/contact">
              <a className="flex flex-col justify-evenly items-center transition-colors duration-300 ease-linear bg-gray-4 hover:bg-gray-5 rounded-md text-gray-1 text-base shadow-md my-3 mx-1 w-36 h-16">
                Contact me
              </a>
            </Link>
          </div>
          <div className="flex justify-between items-end">
            <Logo theme="white" href="/" />
            <div className="flex space-x-1 md:space-x-5 text-gray-1">
              <Link href="https://www.twitter.com/stianstrand3">
                <a className="flex flex-col items-center">
                  <IoLogoTwitter className="text-4xl" />
                </a>
              </Link>
              <Link href="https://www.github.com/StrandMade">
                <a className="flex flex-col items-center">
                  <IoLogoGithub className="text-4xl" />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/stian-strand-877b9913b/">
                <a className="flex flex-col items-center">
                  <IoLogoLinkedin className="text-4xl" />
                </a>
              </Link>
            </div>
            <p className="font-body text-xs text-gray-1">
              &copy; Stian Strand 2021
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
