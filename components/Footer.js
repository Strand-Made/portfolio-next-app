import Link from "next/link";
import Container from "./Container";
import Logo from "./logo/Logo";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-gray-3 mt-6">
      <Container>
        <div className="flex flex-col h-32 justify-between">
          <ul className="flex w-full justify-center space-x-10 text-gray-1 font-body">
            <li>
              <Link href="/">
                <a>Projects</a>
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
            <div className="flex text-gray-1">
              <IoLogoLinkedin className="text-3xl" />
              <IoLogoGithub className="text-3xl" />
            </div>
            <p className="font-body text-xs text-gray-1">&copy; Bango 2021</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
