import { useState, useRef } from "react";
import useOnClickOutside from "../../hooks";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../logo/Logo";
import Button from "../Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const styles = {
    mobileMenuStyle:
      "flex flex-col space-y-5 transition-all  ease-in-out duration-700 bg-indigo-1 text-center absolute h-screen left-0 right-0 top-0 py-10 z-40 transform ",
    mobileMenuContainer: "flex relative w-full transition-all sm:hidden",
  };

  return (
    <nav className="font-sans text-indigo-3 w-full">
      <div className="lg:container lg:mx-auto">
        <div className="flex flex-row justify-between w-full">
          <div>
            <Logo theme="regular" href="/" />
          </div>
          <div className={`${styles.mobileMenuContainer}`}>
            <button className="absolute right-0 z-50 " onClick={handleClick}>
              {click ? (
                <HiX className="text-4xl fill-current text-gray-1" />
              ) : (
                <HiMenu className="text-4xl" />
              )}
            </button>

            <ul
              className={`${styles.mobileMenuStyle} ${
                click ? "translate-x-0" : "translate-x-full "
              } "`}
            >
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
          </div>
          <ul className="hidden sm:flex items-center space-x-3">
            <li>Projects</li>
            <li>
              <Button variant="primary" href="/contact" text="Contact me" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
