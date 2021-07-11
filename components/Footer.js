import Link from "next/link";
import Container from "./Container";
import Logo from "./logo/Logo";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-gray-3 mt-6 py-5">
      <Container>
        <div className="flex flex-col h-32 justify-between">
          <ul className="flex w-full justify-center space-x-10 text-gray-1 font-body">
            <li>
              <Link href="https://www.github.com/Strand-Made">
                <a>Github</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <div className="flex justify-between items-end">
            <Logo theme="white" href="/" />
            <div className="flex space-x-5 text-gray-1">
              <Link href="https://www.twitter.com/stianstrand3">
                <a className="flex flex-col items-center">
                  <IoLogoTwitter className="text-4xl" />
                  Twitter
                </a>
              </Link>
              <Link href="https://www.github.com/StrandMade">
                <a className="flex flex-col items-center">
                  <IoLogoGithub className="text-4xl" />
                  Github
                </a>
              </Link>
            </div>
            <p className="font-body text-xs text-gray-1">&copy; Bango 2021</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
