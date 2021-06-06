import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../logo/Logo";
import Button from "../Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav className="mx-2 font-sans text-indigo-3 ">
      <div className="lg:container lg:mx-auto">
        <div className="flex flex-row justify-between w-full">
          <div>
            <Logo theme="regular" href="/" />
          </div>
          <div className="flex items-center sm:hidden">
            <button className="" onClick={handleClick}>
              {click ? (
                <HiX className="text-4xl" />
              ) : (
                <HiMenu className="text-4xl" />
              )}
            </button>
          </div>
          <ul className="hidden sm:flex items-center space-x-3">
            <li>Projects</li>
            <li>
              <Button variant="primary" href="/contact" text="Contact me" />
            </li>
          </ul>
        </div>
      </div>
      {click ? (
        <ul className="bg-indigo-3 text-center">
          <li className="text-gray-1">
            <Link href="/">
              <a>Projects</a>
            </Link>
          </li>
          <li className="text-gray-1">
            <Link href="/contact">
              <a>Contact me</a>
            </Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
