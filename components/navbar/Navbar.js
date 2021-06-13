import { useState } from "react";
import { FiGithub } from "react-icons/fi";

import Logo from "../logo/Logo";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import Burger from "./Burger";
import Button from "../Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="font-sans text-indigo-3 w-full md:px-3">
      <div className="container md:mx-auto">
        <div className="flex flex-row justify-between w-full">
          <div className="ml-1">
            <Logo theme="regular" href="/" />
          </div>
          <div className="flex relative w-full sm:hidden">
            <Burger open={open} setOpen={setOpen} />
            <MobileMenu open={open} setOpen={setOpen} />
          </div>
          <ul className="hidden mt-2 sm:flex items-center space-x-3">
            <NavLink
              href="https://github.com/Strand-made"
              text="Github"
              icon={<FiGithub className="text-xl text-current" />}
              textDark={true}
            />
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
